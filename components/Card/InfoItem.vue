<template>
  <button
    class="flex h-12 w-full items-center gap-2 rounded-lg px-2 hover:bg-slate-200 focus:bg-slate-200 focus:outline-none dark:hover:bg-slate-600 dark:focus:bg-slate-600"
    @click="copy_to_clip"
  >
    <span class="whitespace-nowrap text-base font-semibold lg:text-lg"
      >{{ title }}:</span
    ><span class="truncate whitespace-nowrap text-base font-light lg:text-lg">{{
      !copied ? "Copied" : value
    }}</span>
  </button>
</template>

<script lang="ts" setup>
const { value } = defineProps({
  title: String,
  value: String,
});

const { ready: copied, start } = useTimeout(2000, {
  controls: true,
  immediate: false,
});

const copy_to_clip = () => {
  const { copy } = useClipboard();
  copy(value as string);
  start();
};
</script>
