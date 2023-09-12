<script setup lang="ts">
defineProps<{ text: string; type: "error" | "success" | "warning" }>();
</script>

<template>
  <div
    class="flex items-center p-4 mb-4 text-sm rounded-lg dark:bg-slate-700"
    :class="{
      'bg-red-50 text-red-800 dark:text-red-400 ': type === 'error',
      'bg-green-50 text-green-800 dark:text-green-400': type === 'success',
      'bg-orange-50 text-orange-800 dark:text-orange-400': type === 'warning',
    }"
    role="alert"
  >
    <svg
      class="flex-shrink-0 inline w-4 h-4 mr-3"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
      />
    </svg>
    <span class="sr-only">Info</span>
    <div>
      <span class="font-medium">{{ text }}</span>
    </div>
  </div>
</template>
