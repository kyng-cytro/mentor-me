<template>
  <div class="mt-3 flex h-16 items-center justify-between rounded-lg">
    <NuxtLink
      :to="to"
      class="flex cursor-pointer items-center gap-6 rounded-lg py-2 pr-6 pl-2 hover:bg-slate-200 focus:bg-slate-200 focus:outline-none dark:hover:bg-slate-600 dark:focus:bg-slate-600"
      :class="{ 'min-w-[100%]': full, 'min-w-[25%]': !full }"
    >
      <NuxtImg
        src=""
        class="hidden h-12 w-12 items-center justify-center rounded-full sm:flex"
        v-if="showIcon"
      />
      <div class="flex flex-col space-y-1 text-gray-800 dark:text-slate-200">
        <span class="font-semibold">{{ title }}</span>
        <span class="text-sm font-light">{{ subtitle }}</span>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
  subtitle: String,
  full: Boolean,
  to: String,
  showIcon: Boolean,
});
</script>
