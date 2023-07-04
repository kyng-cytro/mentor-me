<script setup lang="ts">
defineProps({
  text: String,
  disabled: Boolean,
  icon: Boolean,
});
</script>
<template>
  <button
    :disabled="disabled"
    class="rounded-md p-2 text-sm font-medium duration-300 ease-in-out hover:bg-slate-200 focus:bg-slate-200 focus:outline-none dark:hover:bg-slate-600 dark:focus:bg-slate-600"
  >
    <span> {{ text }}</span>
    <slot v-if="icon" />
  </button>
</template>
