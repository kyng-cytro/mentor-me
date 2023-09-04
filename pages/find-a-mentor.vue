<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useSearchStore } from "~/stores/searchStore";

definePageMeta({
  layout: "landing",
});

const searchStore = useSearchStore();

const { data } = storeToRefs(searchStore);
</script>

<template>
  <div class="mx-auto max-w-5xl px-3 py-10 space-y-6">
    <SearchMentor />

    <div
      class="grid grid-cols-1 grid-row-2 md:grid-cols-3 md:grid-rows-1 gap-6"
    >
      <div class="col-span-1 px-3">
        <h3 class="font-mono font-light py-2">Filter Result</h3>
        <div
          class="p-4 h-96 block rounded-lg bg-white shadow-lg dark:bg-slate-700 dark:shadow-black/30"
        >
          test
        </div>
      </div>
      <div class="col-span-2 px-3">
        <div class="flex items-center justify-between font-mono font-light">
          <span>120 Results</span>
          <button
            class="flex items-center gap-2 rounded-md p-2 hover:bg-slate-200 focus:bg-slate-200 focus:outline-none dark:hover:bg-slate-600 dark:focus:bg-slate-600"
            @click="searchStore.toggleCategory"
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
        <div
          class="p-4 h-96 block rounded-lg bg-white shadow-lg dark:bg-slate-700 dark:shadow-black/30"
        >
          test
        </div>
      </div>
    </div>
  </div>
</template>
