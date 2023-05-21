<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

import { z } from "zod";

import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const user = useSupabaseUser();

console.log(user.value?.user_metadata.mentor);

const client = useSupabaseAuthClient();

const storage = useSupabaseClient();

const isDark = useDark();

const profileZoneRef = ref<HTMLDivElement>();

onMounted(async () => {
  if (!user.value) {
    await client.auth.signOut();
    navigateTo("/auth");
  }
});

const basicInfoSchema = z.object({
  name: z.string().min(1),
  dob: z.coerce
    .date()
    .refine(
      (data) =>
        data < new Date(new Date().setFullYear(new Date().getFullYear() - 1))
    ),
  gender: z.enum(["MALE", "FEMALE", "OTHERS"]),
  profile_image: z.string().min(1),
});

const educationInfoSchema = z.object({
  name: z.string().min(1),
});

const careerInfoSchema = z.object({
  name: z.string().min(1),
});

const formData = reactive({
  basic_info: { name: "", dob: null, gender: "none", profile_image: "" },
  education_info: { name: "" },
  career_info: { name: "" },
});

const stepper = useStepper({
  "basic-info": {
    title: "Basic Information",
    svg: "basic-info" as const,
    isValid: () => basicInfoSchema.safeParse(formData.basic_info).success,
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
    isValid: () => careerInfoSchema.safeParse(formData.career_info).success,
  },
});

const next = () => {
  if (stepper.current.value.isValid()) {
    stepper.goToNext();
  }
};

const handle_submit = async () => {
  console.log(formData);
};

function allStepsBeforeAreValid(index: number): boolean {
  return !Array(index)
    .fill(null)
    .some((_, i) => !stepper.at(i)?.isValid());
}

const formatDate = (date: Date) => {
  return useDateFormat(date, "DD-MM-YYYY").value;
};

const onDrop = async (files: File[] | null) => {
  if (files && user.value) {
    const { data, error } = await storage.storage
      .from("profiles")
      .upload(`users/${user.value.id}`, files[0], { upsert: true });

    if (error) {
      return console.log(error.message);
    }

    console.log(data);
  }
};

const { isOverDropZone } = useDropZone(profileZoneRef, onDrop);
</script>

<style>
/* CSS for custom picker */
.custom-picker-dark {
  color: white;
  background: rgb(55 65 81 / 1);
  border-color: rgb(75 85 99 / 1);
  font-size: 0.875rem;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  border-radius: 0.5rem;
}

.custom-picker-dark::placeholder {
  color: rgb(203 213 225 / 1);
}

.custom-picker-light {
  font-size: 0.875rem;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  border-radius: 0.5rem;
}

.dp__action_buttons span {
  color: rgb(22 163 74 / 1);
}
.dp__action_buttons .dp__cancel {
  color: rgb(234 88 12 / 1);
}
/* End of custom picker */
</style>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>

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
      <form class="w-full max-w-sm sm:max-w-md" @submit.prevent="handle_submit">
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
            <ClientOnly>
              <div class="mb-6">
                <label
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >Date of birth</label
                ><VueDatePicker
                  v-model="formData.basic_info.dob"
                  locale="en-GB"
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
            </ClientOnly>
            <!-- Gender -->
            <div class="mb-6">
              <label
                for="gender"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >Gender</label
              >
              <select
                name="gender"
                id="gender"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                v-model="formData.basic_info.gender"
              >
                <option value="none">Select a gender</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="OTHERS">None Binary</option>
              </select>
            </div>
            <!-- Profile Image -->
            <div class="mb-6">
              <span
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >Profile Picture</span
              >
              <div
                ref="profileZoneRef"
                :class="{
                  'bg-gray-100  dark:border-gray-500 dark:bg-gray-600':
                    isOverDropZone,
                  'border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700':
                    !isOverDropZone,
                }"
                class="dark:hover:bg-bray-800 flex h-40 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed hover:bg-gray-100 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div
                  class="flex flex-col items-center justify-center pb-6 pt-5"
                >
                  <svg
                    aria-hidden="true"
                    class="mb-3 h-10 w-10 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Drag and Drop</span> a profile
                    picture
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    PNG or JPG (MAX. 500kb)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div v-else-if="stepper.isCurrent('education-info')">
            <div class="mb-6">
              <label
                for="other"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >Other Info</label
              >
              <input
                type="text"
                name="other"
                id="other"
                v-model="formData.education_info.name"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="other stuff"
                required
              />
            </div>
          </div>

          <div v-else-if="stepper.isCurrent('career-info')">
            <div class="mb-6">
              <label
                for="stuff"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >Other Info</label
              >
              <input
                type="text"
                name="stuff"
                id="stuff"
                v-model="formData.career_info.name"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="other stuff"
                required
              />
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
          @click.prevent="next"
        />

        <ButtonsLoading
          text="Submit Information"
          :loading="false"
          v-if="stepper.isLast.value"
          :disabled="!stepper.current.value.isValid()"
        />
      </form>
    </div>
  </div>
</template>
