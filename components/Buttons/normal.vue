<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
  full: Boolean,
  secondary: Boolean,
  disabled: Boolean,
});
</script>
<template>
  <button
    :class="{
      'w-full': full,
      'border border-blue-500 bg-transparent hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white dark:border-blue-600 dark:hover:bg-blue-600 dark:focus:bg-blue-600':
        secondary && !disabled,
      'bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:bg-blue-500':
        !secondary && !disabled,
      'bg-gray-200 dark:bg-gray-700': disabled,
    }"
    :disabled="disabled"
    class="rounded-lg px-5 py-2.5 font-medium duration-300 ease-in-out focus:outline-none focus:ring-4"
  >
    {{ text }}
  </button>
</template>
