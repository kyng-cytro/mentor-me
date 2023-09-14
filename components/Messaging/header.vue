<script setup lang="ts">
defineProps({
  name: String,
  role: String,
  imageUrl: String,
});
</script>

<template>
  <div
    class="flex flex-row border-b border-slate-300 dark:border-slate-600 pb-3 items-center gap-3"
  >
    <!-- Image -->
    <div
      class="hidden lg:flex items-center justify-center border-4 w-auto rounded-full border-green-100 flex-shrink-0"
    >
      <img
        class="w-14 h-14 rounded-full object-cover"
        :src="imageUrl"
        :alt="name"
      />
    </div>

    <div class="w-full sm:w-auto flex flex-col">
      <p class="text-xl font-semibold capitalize">
        {{ name }}
      </p>
      <span class="text-sm font-light capitalize">{{ role }}</span>
    </div>
  </div>
</template>
