<script setup lang="ts">
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style>
#tsparticles {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}

.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

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
    <!-- Nav Bar -->
    <NavbarsLanding :dark="isDark" @toggle-dark="toggleDark" />

    <!-- Main -->
    <div class="flex-1">
      <NuxtPage />
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>
