<template>
  <ButtonsNavButtonsLink
    class="rounded-lg border border-slate-400 p-2.5 text-sm text-slate-500 hover:bg-blue-400 hover:text-white focus:bg-blue-400 focus:text-white focus:outline-none dark:border-slate-700 dark:text-slate-400 hover:dark:text-white focus:dark:text-white"
    :class="full_width ? 'w-full' : 'w-5/6'"
    :to="to"
    >{{ text }}</ButtonsNavButtonsLink
  >
</template>

<script lang="ts" setup>
defineProps({
  text: String,
  to: String,
  full_width: Boolean,
});
</script>
