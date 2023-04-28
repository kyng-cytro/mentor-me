<script setup lang="ts">
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
<template>
  <div
    class="font-Nunito flex h-full min-h-screen flex-col bg-white text-black dark:bg-slate-800 dark:text-white"
  >
    <!-- Nav Bar -->
    <NavbarsLanding @click="toggleDark()" />

    <!-- Main -->
    <div class="flex-1">
      <NuxtPage />
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>
