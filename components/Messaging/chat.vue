<script setup lang="ts">
defineProps({
  name: String,
  text: String,
  imageUrl: String,
  isUser: Boolean,
});
</script>
<template>
  <div :class="{ 'justify-end': isUser }" class="flex items-end">
    <div
      :class="{ 'order-2 items-start': !isUser, 'order-1 items-end': isUser }"
      class="flex flex-col space-y-2 text-xs lg:text-base max-w-xs mx-2"
    >
      <div>
        <span
          :class="{
            'bg-gray-300 text-gray-600 rounded-bl-none': !isUser,
            'bg-blue-500 dark:bg-blue-600 text-white rounded-br-none': isUser,
          }"
          class="px-4 py-2 rounded-lg inline-block"
          >{{ text }}</span
        >
      </div>
    </div>
    <img
      :src="imageUrl"
      :alt="name"
      :class="{ 'order-1': !isUser, 'order-2': isUser }"
      class="w-6 h-6 rounded-full"
    />
  </div>
</template>
