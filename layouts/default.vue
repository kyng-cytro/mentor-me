<script setup lang="ts">
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div
    class="font-Nunito flex min-h-screen flex-col gap-3 bg-slate-200 dark:bg-slate-800 dark:text-slate-50 md:h-screen md:flex-row"
  >
    <NavbarsDashboard
      class="flex flex-col gap-0 md:hidden"
      :dark="isDark"
      @toggle-dark="toggleDark()"
      ref="target"
    />

    <SideBarsDashboard
      :dark="isDark"
      @toggle-dark="toggleDark()"
      class="hidden w-1/5 px-2 md:flex"
    />

    <div class="w-full flex-1 px-2 py-2 md:py-6">
      <NuxtPage />
    </div>
  </div>
</template>
