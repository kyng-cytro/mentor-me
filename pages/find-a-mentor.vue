<script setup lang="ts">
import { storeToRefs } from "pinia";
import { fieldOfExpertise } from "~/lib/utils";
import { useSearchStore } from "~/stores/searchStore";

definePageMeta({
  layout: "landing",
});

const searchStore = useSearchStore();

const { data } = storeToRefs(searchStore);

const { data: response, pending } = useFetch("/api/mentor/all", {
  query: data,
});
</script>

<template>
  <div class="mx-auto max-w-5xl px-3 py-10 space-y-6">
    <SearchMentor />
    <div
      class="grid grid-cols-1 grid-row-2 md:grid-cols-3 md:grid-rows-1 gap-6"
    >
      <!--- Sort -->
      <div class="md:col-span-1 px-3 space-y-3">
        <h3 class="font-mono font-light py-2">Filter Result</h3>
        <div
          class="space-y-3 p-4 rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800"
        >
          <!-- Categories -->
          <div>
            <span class="text-sm font-semibold">Fields</span>
            <hr class="h-px mt-1 mb-3 bg-gray-200 border-0 dark:bg-gray-700" />
            <div class="p-1 hide-scroll-bar h-40 overflow-y-scroll">
              <div
                :key="field"
                class="flex items-center mb-4"
                v-for="field in fieldOfExpertise"
              >
                <input
                  :id="`category-${field}`"
                  type="checkbox"
                  :value="field"
                  v-model="data.categories"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  :for="`category-${field}`"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >{{ field }}</label
                >
              </div>
            </div>
          </div>

          <!-- Ratings -->
          <div>
            <span class="text-sm font-semibold">Ratings</span>
            <hr class="h-px mt-1 mb-3 bg-gray-200 border-0 dark:bg-gray-700" />
            <div class="p-1 hide-scroll-bar h-40 overflow-y-scroll">
              <div
                :key="rating"
                class="flex items-center mb-4"
                v-for="rating in 5"
              >
                <input
                  :id="`rating-${rating}`"
                  type="checkbox"
                  :value="6 - rating"
                  v-model="data.ratings"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  :for="`rating-${rating}`"
                  class="flex items-center gap-1 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  <IconsStar
                    :key="rate"
                    class="w-4 h-4"
                    v-for="rate in 6 - rating"
                  />
                </label>
              </div>
            </div>
          </div>

          <ButtonsText
            @click="searchStore.resetFilters"
            :secondary="true"
            text="Clear  Fliters"
          />
        </div>
      </div>

      <!-- Mentors -->
      <div class="md:col-span-2 px-3 space-y-3">
        <div class="flex items-center justify-between font-mono font-light">
          <span>{{ response?.total }} Result(s)</span>
          <button
            class="flex items-center gap-2 rounded-md p-2 hover:bg-slate-200 focus:bg-slate-200 focus:outline-none dark:hover:bg-slate-600 dark:focus:bg-slate-600"
            @click="searchStore.toggleSort"
          >
            <h3>{{ data.asc ? "Accending" : "Descending" }}</h3>
            <Transition name="fade" mode="out-in">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
                v-if="data.asc"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
                v-else
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Transition>
          </button>
        </div>
        <!-- Results -->
        <div
          class="h-[50rem] flex flex-col gap-3 overflow-y-scroll hide-scroll-bar"
        >
          <SearchNotFound v-if="!response?.mentors.length" />
          <CardMentorProfile
            :id="mentor.id"
            :name="mentor.user.name"
            :image-url="`https://api.dicebear.com/5.x/initials/svg?seed=${mentor.user.name}`"
            :position="mentor.currentTitle"
            :company="mentor.companyName"
            :field="mentor.fieldOfExpertise"
            :experience="mentor.yearsOfExperience"
            :rating="mentor.rating"
            :bio="mentor.description"
            v-for="mentor in response.mentors"
            v-else
          />
          <ButtonsLoading
            @click="searchStore.takeMore"
            :loading="pending"
            :secondary="true"
            :full="true"
            :center="true"
            text="Load More"
            v-if="data.take <= Number(response?.total)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
