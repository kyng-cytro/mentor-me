<script setup lang="ts">
defineProps({
  id: String,
  name: String,
  imageUrl: String,
  position: String,
  company: String,
  field: String,
  experience: Number,
  rating: Number,
  bio: String,
});
</script>
<template>
  <div
    class="flex flex-col gap-3 border p-6 rounded-lg border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800"
  >
    <!-- Image & Name & Postion --->
    <div class="flex flex-col sm:flex-row items-center gap-3">
      <!-- Image -->
      <div
        class="flex items-center justify-center border-4 w-full sm:w-auto rounded-lg sm:rounded-full border-blue-400"
      >
        <img
          class="rounded-lg w-full h-32 sm:w-20 sm:h-20 sm:rounded-full object-cover"
          :src="imageUrl"
          :alt="name"
        />
      </div>

      <div class="w-full sm:w-auto flex flex-col">
        <NuxtLink
          :to="`/view/${id}`"
          class="text-xl font-semibold capitalize hover:underline"
          >{{ name }}</NuxtLink
        >
        <span class="text-sm font-light capitalize">{{ position }}</span>
        <span class="text-sm font-light">@{{ company }}</span>
        <div class="my-2 flex flex-wrap gap-2">
          <p
            class="max-w-40 text-ellipsis overflow-hidden inline-flex items-center rounded-md bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-gray-700 dark:text-green-400"
          >
            {{ field }}
          </p>
          <p
            class="max-w-40 text-ellipsis overflow-hidden inline-flex items-center rounded-md bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-gray-700 dark:text-blue-400"
          >
            {{ experience }} years of experience
          </p>
          <p
            class="max-w-40 text-ellipsis overflow-hidden inline-flex items-center rounded-md bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-gray-700 dark:text-purple-400"
          >
            <IconsStar :key="rate" class="w-4 h-4" v-for="rate in rating" />
          </p>
        </div>
      </div>
    </div>

    <!-- Bio -->
    <div>
      <p
        class="text-md font-light text-justify leading-snug break-words whitespace-pre-wrap line-clamp-3"
      >
        {{ bio }}
      </p>
    </div>

    <!-- Button -->
    <div>
      <NuxtLink
        :to="`/view/${id}`"
        class="rounded-md p-2 text-sm font-medium duration-300 ease-in-out hover:bg-slate-200 focus:bg-slate-200 focus:outline-none dark:hover:bg-slate-600 dark:focus:bg-slate-600 border border-gray-300 dark:border-gray-600"
        >View More Info</NuxtLink
      >
    </div>
  </div>
</template>
