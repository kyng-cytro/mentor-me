<script setup lang="ts">
import { z } from "zod";
import { basicInfoSchema } from "~/lib/schemas";

definePageMeta({
  layout: "auth",
});

import { formatDate } from "~/lib/utils";

import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import VueMultiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.css";

const user = useSupabaseUser();
const client = useSupabaseAuthClient();
const isDark = useDark();
const loading = ref(false);

// NOTE: Sends guest back to login page
onMounted(async () => {
  if (!user.value) {
    await client.auth.signOut();
    navigateTo("/auth");
  }
});

// NOTE: Form Data
const formData = reactive({
  basic_info: { name: "", dob: new Date(), gender: "", description: "" },
  career_info: {
    currentTitle: "",
    companyName: "",
    fieldOfExpertise: "",
    yearsOfExperience: null,
  },
  availability: [{ day: "", time_range: "" }],
});

const careerInfoSchema = z.object({
  currentTitle: z.string().min(1),
  companyName: z.string().min(1),
  fieldOfExpertise: z.string().min(1),
  yearsOfExperience: z.number().min(1),
});

const availabilitySchema = z
  .object({
    day: z.string().min(1),
    time_range: z
      .object({ hours: z.number(), minutes: z.number(), seconds: z.number() })
      .array()
      .min(2),
  })
  .array()
  .min(1);

const stepper = useStepper({
  "basic-info": {
    title: "Basic Information",
    svg: "basic-info" as const,
    isValid: () => basicInfoSchema.safeParse(formData.basic_info).success,
  },
  "career-info": {
    title: "Career Information",
    svg: "career-info" as const,
    isValid: () => careerInfoSchema.safeParse(formData.career_info).success,
  },
  availability: {
    title: "Availability",
    svg: "availability" as const,
    isValid: () => availabilitySchema.safeParse(formData.availability).success,
  },
});

const nextStep = () => {
  if (stepper.current.value.isValid()) {
    stepper.goToNext();
  }
};

function allStepsBeforeAreValid(index: number): boolean {
  return !Array(index)
    .fill(null)
    .some((_, i) => !stepper.at(i)?.isValid());
}

const handle_submit = async () => {};

const weekDays: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const addSlot = () => {
  formData.availability.push({ day: "", time_range: "" });
};

const removeSlot = (index: number) => {
  formData.availability.splice(index, 1);
};
</script>

<template>
  <div class="flex h-full flex-col gap-6 md:flex-row">
    <SideBarsAuth />
    <div
      class="flex flex-1 flex-col items-center gap-6 px-3 py-10 md:col-span-2 md:justify-center md:py-0"
    >
      <div class="relative w-full max-w-sm sm:max-w-md">
        <ol class="mb-4 flex w-full items-center sm:mb-5">
          <li
            class="flex w-full items-center"
            :class="{
              'text-blue-600 after:border-blue-100  dark:text-blue-500 dark:after:border-blue-800':
                allStepsBeforeAreValid(i) || i === 0,
              'after:border-gray-100 dark:after:border-gray-700':
                !allStepsBeforeAreValid(i) && stepper.isBefore(id),
              'after:inline-block after:h-1 after:w-full after:border-4 after:border-b after:content-[\'\']':
                i !== Object.keys(stepper.steps.value).length - 1,
            }"
            :key="id"
            v-for="(step, id, i) in stepper.steps.value"
          >
            <button
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full duration-300 ease-in-out lg:h-12 lg:w-12"
              :class="{
                'bg-gray-100 dark:bg-blue-800':
                  allStepsBeforeAreValid(i) || i === 0,
                'bg-gray-100 dark:bg-gray-700':
                  !allStepsBeforeAreValid(i) && stepper.isBefore(id),
              }"
              :disabled="!allStepsBeforeAreValid(i) && stepper.isBefore(id)"
              @click="stepper.goTo(id)"
            >
              <IconsBasicInfo
                class="h-5 w-5 lg:h-6 lg:w-6"
                :class="{
                  'text-blue-600 dark:text-blue-300':
                    allStepsBeforeAreValid(i) || i === 0,
                  'text-gray-500 dark:text-gray-100':
                    !allStepsBeforeAreValid(i) && stepper.isBefore(id),
                }"
                v-if="step.svg === 'basic-info'"
              />
              <IconsCareerInfo
                class="h-5 w-5 lg:h-6 lg:w-6"
                :class="{
                  'text-blue-600 dark:text-blue-300':
                    allStepsBeforeAreValid(i) || i === 0,
                  'text-gray-500 dark:text-gray-100':
                    !allStepsBeforeAreValid(i) && stepper.isBefore(id),
                }"
                v-else-if="step.svg === 'career-info'"
              />
              <IconsAvailability
                class="h-5 w-5 lg:h-6 lg:w-6"
                :class="{
                  'text-blue-600 dark:text-blue-300':
                    allStepsBeforeAreValid(i) || i === 0,
                  'text-gray-500 dark:text-gray-100':
                    !allStepsBeforeAreValid(i) && stepper.isBefore(id),
                }"
                v-else-if="step.svg === 'availability'"
              />
            </button>
          </li>
        </ol>
      </div>

      <transition name="slide-up" mode="out-in">
        <h2
          class="mb-6 max-h-full w-full max-w-sm text-left text-3xl font-extrabold leading-none tracking-tight text-gray-800 dark:text-slate-200 sm:max-w-md md:text-4xl"
          :key="stepper.current.value.title"
        >
          {{ stepper.current.value.title }}
        </h2></transition
      >
      <ClientOnly>
        <form
          class="w-full max-w-sm sm:max-w-md"
          @submit.prevent="handle_submit"
        >
          <Transition name="slide-up" mode="out-in">
            <div v-if="stepper.isCurrent('basic-info')">
              <!-- Name -->
              <div class="mb-6">
                <label
                  for="name"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >Full Name</label
                >
                <input
                  type="text"
                  name="name"
                  id="name"
                  v-model="formData.basic_info.name"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              <!--  DOB -->
              <div class="mb-6">
                <label
                  for="dob"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >Date of birth</label
                ><VueDatePicker
                  v-model="formData.basic_info.dob"
                  locale="en-GB"
                  name="dob"
                  :enable-time-picker="false"
                  :format="formatDate"
                  :clearable="false"
                  :input-class-name="
                    isDark ? 'custom-picker-dark' : 'custom-picker-light'
                  "
                  placeholder="Date of birth"
                  auto-apply
                  required
                />
              </div>
              <!-- Gender -->
              <div class="mb-6">
                <label
                  for="gender"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >Gender</label
                >
                <VueMultiselect
                  :class="isDark ? 'custom-select-dark' : 'custom-select-light'"
                  name="gender"
                  v-model="formData.basic_info.gender"
                  :options="['MALE', 'FEMALE', 'OTHERS']"
                  :allow-empty="false"
                  :close-on-select="true"
                  :searchable="true"
                  placeholder="Select gender"
                  deselect-label="Can't remove select another"
                />
              </div>
            </div>
            <div v-else-if="stepper.isCurrent('career-info')">
              <div class="mb-6">
                <label
                  for="field_of_expertise"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >Field of Expertise</label
                >
                <VueMultiselect
                  :class="isDark ? 'custom-select-dark' : 'custom-select-light'"
                  name="field_of_expertise"
                  v-model="formData.career_info.fieldOfExpertise"
                  :options="['Test']"
                  :allow-empty="false"
                  :close-on-select="true"
                  :searchable="true"
                  placeholder="Select your field of expertise"
                  deselect-label="Can't remove select another"
                />
              </div>
              <div class="mb-6">
                <label
                  for="years_of_experience"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >Years of experience</label
                >
                <input
                  type="number"
                  name="years_of_experience"
                  id="years_of_experience"
                  v-model="formData.career_info.yearsOfExperience"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="5"
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  for="job_title"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >Current Job Title</label
                >
                <input
                  type="text"
                  name="job_title"
                  id="job_title"
                  v-model="formData.career_info.currentTitle"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="e.g Senior Software Engineer"
                  required
                />
              </div>
              <div class="mb-6">
                <label
                  for="company_name"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >Company Name</label
                >
                <input
                  type="text"
                  name="company_name"
                  id="company_name"
                  v-model="formData.career_info.companyName"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="e.g Meta"
                  required
                />
              </div>
            </div>
            <div v-else-if="stepper.isCurrent('availability')">
              <div class="mb-6">
                <div class="mb-3 grid grid-cols-7 gap-6">
                  <label
                    for="gender"
                    class="col-span-3 mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Week Day</label
                  >
                  <label
                    for="gender"
                    class="col-span-3 mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >Time Range</label
                  >
                </div>
                <div
                  :class="{
                    'lg:overflow-y-scroll': formData.availability.length > 4,
                  }"
                  class="hide-scroll-bar lg:max-h-96"
                >
                  <div
                    class="mb-6 grid grid-cols-7 items-center gap-6"
                    :key="index"
                    v-for="(availability, index) in formData.availability"
                  >
                    <VueMultiselect
                      class="col-span-3"
                      :class="
                        isDark ? 'custom-select-dark' : 'custom-select-light'
                      "
                      name="gender"
                      v-model="formData.availability[index].day"
                      :options="weekDays"
                      :allow-empty="false"
                      :close-on-select="true"
                      :searchable="true"
                      placeholder="Select weekday"
                      deselect-label="Can't remove select another"
                    />

                    <VueDatePicker
                      class="col-span-3"
                      v-model="formData.availability[index].time_range"
                      menu-class-name="custom-picker-menu"
                      :placeholder="
                        'Select time range for ' +
                        formData.availability[index].day
                      "
                      :input-class-name="
                        isDark ? 'custom-picker-dark' : 'custom-picker-light'
                      "
                      time-picker
                      range
                      auto-apply
                      keep-action-row
                    />
                    <ButtonsText
                      @click="removeSlot(index)"
                      class="col-span-1 max-w-min"
                      :icon="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-4 w-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </ButtonsText>
                  </div>
                </div>
                <div class="mb-6 flex justify-end">
                  <ButtonsText @click="addSlot" text="Add Slot" />
                </div>
              </div>
            </div>
          </Transition>
          <ButtonsNormal
            v-if="!stepper.isLast.value"
            :disabled="!stepper.current.value.isValid()"
            :text="
              'Next Step: ' +
              (stepper.next.value ? stepper.get(stepper.next.value)?.title : '')
            "
            @click.prevent="nextStep"
          />
          <ButtonsLoading
            text="Submit Information"
            :loading="loading"
            v-if="stepper.isLast.value"
            :disabled="!stepper.current.value.isValid()"
          />
        </form>
      </ClientOnly>
    </div>
  </div>
</template>
