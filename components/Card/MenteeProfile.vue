<script setup lang="ts">
import { calculateAge } from "~/lib/utils";
const { bio, careerGoals, careerHistory, careerChallenges } = defineProps({
  id: String,
  name: String,
  status: String,
  imageUrl: String,
  dob: String,
  educationLevel: String,
  skills: Array<String>,
  bio: String,
  careerGoals: String,
  careerHistory: String,
  careerChallenges: String,
});

const colors = ["green", "blue", "purple"];

const currentTab = ref(0);

const tabs = [
  { id: 0, header: "Bio", content: bio },
  { id: 1, header: "Career Goals", content: careerGoals },
  { id: 2, header: "Career History", content: careerHistory },
  { id: 3, header: "Career Challenges", content: careerChallenges },
];
</script>
<template>
  <div
    class="flex flex-col gap-3 border p-6 rounded-lg border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800"
    :class="{
      'text-slate-400 dark:text-slate-500': status !== 'PENDING',
    }"
  >
    <!-- Image & Name -->
    <div class="flex flex-col sm:flex-row items-center gap-3">
      <!-- Image -->
      <div
        class="flex items-center justify-center border-4 w-full sm:w-auto rounded-lg sm:rounded-full border-blue-400 flex-shrink-0"
      >
        <img
          class="rounded-lg w-full h-32 sm:w-20 sm:h-20 sm:rounded-full object-cover"
          :src="imageUrl"
          :alt="name"
        />
      </div>

      <div class="w-full sm:w-auto flex flex-col">
        <p class="text-xl font-semibold capitalize hover:underline">
          {{ name }}
        </p>
        <span class="text-sm font-light capitalize">{{ educationLevel }}</span>
        <span class="text-sm font-light"
          >{{ calculateAge(dob ?? "") }} years old</span
        >
        <div class="my-2 flex flex-wrap gap-2">
          <p
            :key="skill.toString()"
            class="max-w-40 text-ellipsis overflow-hidden inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium dark:bg-gray-700"
            :class="{
              ['bg-' + colors[i % colors.length] + '-100']: true,
              ['text-' + colors[i % colors.length] + '-800']: true,
              ['dark:text-' + colors[i % colors.length] + '-400']: true,
            }"
            v-for="(skill, i) in skills"
          >
            {{ skill }}
          </p>
        </div>
      </div>
    </div>
    <!-- Bio & Other -->
    <div class="flex flex-col gap-3">
      <div
        class="text-sm font-medium text-center text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700 max-w-3xl"
      >
        <ul class="flex flex-wrap justify-center md:justify-start -mb-px">
          <li class="mr-2">
            <button
              :key="tab.id"
              @click="currentTab = tab.id"
              :class="
                currentTab == tab.id
                  ? 'inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500'
                  : 'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
              "
              v-for="tab in tabs"
            >
              {{ tab.header }}
            </button>
          </li>
        </ul>
      </div>
      <div
        class="max-w-3xl"
        :class="{ hidden: currentTab != tab.id }"
        :key="tab.id"
        v-for="tab in tabs"
      >
        <p
          class="text-md font-light text-justify leading-snug break-words whitespace-pre-wrap"
        >
          {{ tab.content }}
        </p>
      </div>
    </div>
    <!-- Buttons -->
    <div
      class="flex gap-3 justify-center md:justify-start"
      v-if="status === 'PENDING'"
    >
      <ButtonsText
        class="p-3 text-green-500"
        @click="$emit('approve', [id, 'approve'])"
        text="Accept"
      />
      <ButtonsText
        class="p-3 text-red-500"
        @click="$emit('decline', [id, 'decline'])"
        text="Decline"
      />
    </div>
  </div>
</template>
