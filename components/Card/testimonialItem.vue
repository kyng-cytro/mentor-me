<template>
  <div
    class="rounded-md border border-slate-200 focus:bg-slate-200 focus:outline-none dark:border-slate-600 dark:focus:bg-slate-600"
  >
    <!-- Report Header -->
    <h2 class="mb-0">
      <button
        class="flex w-full items-center justify-between rounded-md rounded-b-none py-3 px-4 hover:bg-slate-200 focus:bg-slate-200 focus:outline-none dark:hover:bg-slate-600 dark:focus:bg-slate-600"
        @click="
          id === opened ? $emit('close-report') : $emit('open-report', id)
        "
      >
        <span class="font-semibold">{{ name }}</span>
        <div class="pr-2 lg:pr-4">
          <Transition name="menu" mode="out-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4"
              v-if="id === opened"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4"
              v-else
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
              />
            </svg>
          </Transition>
        </div>
      </button>
      <hr
        class="mx-auto mb-3 h-px w-3/5 border-0 bg-gray-200 dark:bg-gray-800"
        v-if="id === opened"
      />
    </h2>

    <!-- Review Content  -->
    <Transition name="shutter">
      <div class="space-y-2 py-3 px-4" v-if="id === opened">
        <p class="whitespace-pre-wrap font-light">
          {{ content }}
        </p>
      </div>
    </Transition>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  name: String,
  content: String,
  id: String,
  opened: String,
});
</script>

<style scoped>
.menu-enter-active {
  animation: scale-up-center 0.25s ease 0s 1 normal none;
}
.menu-leave-active {
  animation: scale-down-center 0.25s ease 0s 1 normal none;
}

.shutter-enter-active {
  animation: shutter-in-top 0.25s ease 0s 1 normal none;
}
.shutter-leave-active {
  animation: shutter-out-top 0.25s ease 0s 1 normal none;
}

@keyframes scale-up-center {
  0% {
    transform: scale(0.2);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes scale-down-center {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.2);
  }
}

@keyframes shutter-in-top {
  0% {
    transform: rotateX(-100deg);
    transform-origin: top;
    opacity: 0;
  }
  100% {
    transform: rotateX(0deg);
    transform-origin: top;
    opacity: 1;
  }
}
@keyframes shutter-out-top {
  0% {
    transform: rotateX(0deg);
    transform-origin: top;
    opacity: 1;
  }
  100% {
    transform: rotateX(70deg);
    transform-origin: top;
    opacity: 0;
  }
}
</style>
