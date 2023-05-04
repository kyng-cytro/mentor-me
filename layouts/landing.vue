<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useModalStore } from "~/stores/modalStore";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const modalStore = useModalStore();

const { data } = storeToRefs(modalStore);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <div
    class="font-Nunito relative flex h-full min-h-screen flex-col bg-white text-black dark:bg-slate-800 dark:text-white"
  >
    <Transition name="fade">
      <ModalsLogin ref="loginModal" v-show="data.LOGIN" />
    </Transition>

    <!-- Nav Bar -->
    <NavbarsLanding @click.ctrl="toggleDark()" />

    <!-- Main -->
    <div class="flex-1">
      <NuxtPage />
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>
