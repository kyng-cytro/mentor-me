<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

import { z } from "zod";

const basicInfoSchema = z.object({
  name: z.string().min(1),
});

const educationInfoSchema = z.object({
  name: z.string().min(1),
});

const careerInfoSchema = z.object({
  name: z.string().min(1),
});

const formData = reactive({
  basic_info: { name: "" },
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
</script>

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
    <div
      class="hidden w-1/3 items-center justify-center bg-gradient-to-b from-blue-500 to-blue-700 md:flex"
    >
      <div class="px-4 py-6 text-center text-slate-200">
        <h4 class="mb-6 text-xl font-semibold text-slate-100">
          We are more than just a company
        </h4>
        <p class="text-sm lg:max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
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
            <div class="mb-6">
              <label
                for="name"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >Full Name</label
              >
              <input
                type="text"
                name="name"
                v-model="formData.basic_info.name"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="John Doe"
                required
              />
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
                for="other"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >Other Info</label
              >
              <input
                type="text"
                name="other"
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
