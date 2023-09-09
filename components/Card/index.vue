<script lang="ts" setup>
defineProps({
  title: String,
  show_title: Boolean,
  show_refresh: Boolean,
  refreshing: Boolean,
  show_edit: Boolean,
  edit_text: String,
  edit_to: String,
});
</script>

<template>
  <div
    class="rounded-lg bg-white p-6 shadow-md shadow-slate-300 dark:bg-slate-900 dark:shadow-slate-900"
  >
    <div v-if="show_title">
      <div class="flex items-end justify-between">
        <span class="text-sm font-semibold sm:text-lg"> {{ title }}</span>
        <NuxtLink
          class="whitespace-nowrap rounded-md border border-slate-200 p-2 text-center text-sm font-medium hover:bg-slate-200 dark:border-slate-600 hover:dark:bg-slate-600"
          :to="edit_to"
          v-if="show_edit"
          >{{ edit_text }}</NuxtLink
        >
        <button
          class="rounded-md p-2 hover:bg-slate-200 focus:bg-slate-200 focus:outline-none dark:hover:bg-slate-600 dark:focus:bg-slate-600"
          :disabled="refreshing"
          @click="$emit('refresh')"
          v-if="show_refresh"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-4 w-4 lg:h-5 lg:w-5"
            :class="{ 'animate-spin': refreshing }"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
      </div>
      <hr class="my-3 h-px border-0 bg-gray-200 dark:bg-gray-700" />
    </div>
    <slot />
  </div>
</template>
