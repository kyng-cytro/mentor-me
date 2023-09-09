<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

import {
  menteeBasicInfoSchema,
  menteeCareerInfoSchema,
  educationInfoSchema,
} from "~/lib/schemas";

import { formatDate, skills, education_levels } from "~/lib/utils";

import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import VueMultiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.css";

const user = useSupabaseUser();
const client = useSupabaseClient();
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
  basic_info: { name: "", dob: new Date(), gender: "" },
  education_info: { skills: [], education_level: "", bio: "" },
  career_info: { career_history: "", career_challenges: "", career_goals: "" },
});

// NOTE: Code for stepper
const stepper = useStepper({
  "basic-info": {
    title: "Basic Information",
    svg: "basic-info" as const,
    isValid: () => menteeBasicInfoSchema.safeParse(formData.basic_info).success,
  },
  "education-info": {
    title: "Education Information",
    svg: "education-info" as const,
    isValid: () =>
      educationInfoSchema.safeParse(formData.education_info).success,
  },
  "career-info": {
    title: "Career Information",
    svg: "career-info" as const,
    isValid: () =>
      menteeCareerInfoSchema.safeParse(formData.career_info).success,
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

// NOTE: Final form submit
const handle_submit = async () => {
  loading.value = true;

  const { error } = await useFetch("/api/mentee/add", {
    method: "POST",
    body: formData,
    headers: useRequestHeaders(["cookie"]) as Record<string, string>,
  });

  loading.value = false;

  if (!error.value) {
    return navigateTo("/mentee");
  }

  return console.log(error.value.message);
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
              <IconsEducationInfo
                class="h-5 w-5 lg:h-6 lg:w-6"
                :class="{
                  'text-blue-600 dark:text-blue-300':
                    allStepsBeforeAreValid(i) || i === 0,
                  'text-gray-500 dark:text-gray-100':
                    !allStepsBeforeAreValid(i) && stepper.isBefore(id),
                }"
                v-else-if="step.svg === 'education-info'"
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
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >Date of birth</label
                >
                <VueDatePicker
                  v-model="formData.basic_info.dob"
                  locale="en-GB"
                  :enable-time-picker="false"
                  :format="formatDate"
                  :clearable="false"
                  :input-class-name="
                    isDark ? 'custom-picker-dark' : 'custom-picker-light'
                  "
                  placeholder="Enter your date of birth"
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
                  v-model="formData.basic_info.gender"
                  :options="['MALE', 'FEMALE', 'OTHERS']"
                  :allow-empty="false"
                  :close-on-select="true"
                  :searchable="true"
                  placeholder="Select your gender"
                  deselect-label="Can't remove select another"
                />
              </div>
            </div>

            <div v-else-if="stepper.isCurrent('education-info')">
              <div class="mb-6">
                <label
                  for="educationLevel"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >Education Level</label
                >
                <VueMultiselect
                  :class="isDark ? 'custom-select-dark' : 'custom-select-light'"
                  v-model="formData.education_info.education_level"
                  :options="education_levels"
                  :allow-empty="false"
                  :close-on-select="true"
                  :searchable="true"
                  label="name"
                  track-by="name"
                  placeholder="Select your highest education level"
                  deselect-label="Can't remove select another"
                />
              </div>
              <div class="mb-6">
                <label
                  for="other"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >Skills</label
                >
                <VueMultiselect
                  :class="isDark ? 'custom-select-dark' : 'custom-select-light'"
                  :max="5"
                  :allow-empty="false"
                  :multiple="true"
                  :hideSelected="true"
                  :close-on-select="false"
                  :searchable="true"
                  :options="skills"
                  v-model="formData.education_info.skills"
                  placeholder="Select some of your skills"
                />
              </div>
              <div class="mb-6">
                <label
                  for="bio"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >Bio</label
                >
                <textarea
                  name="bio"
                  id="bio"
                  rows="3"
                  minlength="200"
                  maxlength="600"
                  v-model="formData.education_info.bio"
                  class="hide-scroll-bar block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Tell us about yourself"
                  required
                >
                </textarea>
                <p
                  class="mb-2 block text-right text-sm font-medium text-gray-900 dark:text-white"
                >
                  200-600 characters
                </p>
              </div>
            </div>

            <div v-else-if="stepper.isCurrent('career-info')">
              <div class="mb-6">
                <label
                  for="history"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >Career History</label
                >
                <textarea
                  name="history"
                  id="history"
                  rows="3"
                  minlength="200"
                  maxlength="600"
                  v-model="formData.career_info.career_history"
                  class="hide-scroll-bar block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Describe your previous work experience and anything you have done to aid your career development?"
                  required
                >
                </textarea>
              </div>
              <div class="mb-6">
                <label
                  for="challenges"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >Career Challenges</label
                >
                <textarea
                  name="challenges"
                  id="challenges"
                  rows="3"
                  minlength="200"
                  maxlength="600"
                  v-model="formData.career_info.career_challenges"
                  class="hide-scroll-bar block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="What challenges have you faced in your career, and how did you overcome them?"
                  required
                >
                </textarea>
              </div>

              <div class="mb-6">
                <label
                  for="goals"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >Career Goals</label
                >
                <textarea
                  name="goals"
                  id="goals"
                  rows="3"
                  minlength="200"
                  maxlength="600"
                  v-model="formData.career_info.career_goals"
                  class="hide-scroll-bar block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="What will you do if money wasn't a factor?"
                  required
                >
                </textarea>
                <p
                  class="mb-2 block text-right text-sm font-medium text-gray-900 dark:text-white"
                >
                  200-600 characters
                </p>
              </div>
            </div>
          </Transition>
          <ButtonsNormal
            v-if="!stepper.isLast.value"
            class=""
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
