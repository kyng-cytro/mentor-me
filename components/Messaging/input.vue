<script setup lang="ts">
const content = ref("");

const emit = defineEmits(["send_message", "typing"]);

const send_message = () => {
  if (!content) return;
  emit("typing", false);
  emit("send_message", content.value);
  content.value = "";
};
</script>
<template>
  <div
    class="flex border-t border-slate-300 dark:border-slate-600 pt-3 items-center gap-6"
  >
    <textarea
      name="message"
      id="message"
      v-model.trim="content"
      @keypress.exact.enter.prevent="send_message"
      @focus="$emit('typing', true)"
      @focusout="$emit('typing', false)"
      class="hide-scroll-bar block w-full rounded-lg border border-gray-300 bg-gray-50 px-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      placeholder="Write your message!"
      required
      >{{ content }}</textarea
    >

    <ButtonsText @click="send_message" :icon="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
        />
      </svg>
    </ButtonsText>
  </div>
</template>
