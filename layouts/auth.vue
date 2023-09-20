<script setup lang="ts">
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

/* CSS for custom picker */
.custom-picker-dark {
  color: white;
  background: rgb(55 65 81 / 1);
  border-color: rgb(75 85 99 / 1);
  font-size: 0.875rem;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  border-radius: 0.5rem;
}

.custom-picker-dark::placeholder {
  color: rgb(203 213 225 / 1);
}

.custom-picker-light {
  font-size: 0.875rem;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  border-radius: 0.5rem;
}

.dp__action_buttons span {
  color: rgb(22 163 74 / 1);
}
.dp__action_buttons .dp__cancel {
  color: rgb(234 88 12 / 1);
}
/* End of custom picker */

/* CSS for multi select */
.custom-select-dark * {
  color: rgb(203 213 225 / 1);
  background: rgb(55 65 81 / 1);
  border-color: rgb(75 85 99 / 1);
}

.custom-select-dark .multiselect__single {
  border-color: 0.875rem;
}

.custom-select-dark .multiselect__input::placeholder {
  color: rgb(203 213 225 / 1);
  font-weight: 300;
  font-size: 0.875rem;
}

.custom-select-dark .multiselect__placeholder {
  font-weight: 300;
  font-size: 0.875rem;
}

.custom-select-light .multiselect__single {
  font-size: 0.875rem;
}

.custom-select-light .multiselect__input::placeholder {
  color: rgb(203 213 225 / 1);
  font-weight: 300;
  font-size: 0.875rem;
}

.custom-select-light .multiselect__placeholder {
  font-weight: 300;
  font-size: 0.875rem;
}

.custom-select-dark .multiselect__tag {
  background: rgb(30 64 174 /1);
}

.custom-select-light .multiselect__tag {
  background: rgb(37 99 235 / 1);
}

.custom-select-dark .multiselect__tag * {
  background: rgb(30 64 174 /1);
}

.custom-select-light .multiselect__tag * {
  background: rgb(37 99 235 / 1);
}

.custom-select-dark .multiselect__tag span {
  color: white;
}

.custom-select-dark .multiselect__option span {
  background: none;
}
.custom-select-dark .multiselect__option--highlight {
  background-color: rgb(39 64 174 / 1);
}

.custom-select-light .multiselect__option--highlight {
  background-color: rgb(37 99 235 / 1);
}

.custom-select-dark .multiselect__option--highlight span {
  color: white;
}

.custom-select-dark .multiselect__option--highlight::after {
  background-color: rgb(39 64 174 / 1);
}

.custom-select-light .multiselect__option--highlight::after {
  background-color: rgb(37 99 235 / 1);
}

.custom-select-dark
  .multiselect__option--selected.multiselect__option--highlight {
  background: #ff6a6a;
}

.custom-select-dark
  .multiselect__option--selected.multiselect__option--highlight::after {
  background: #ff6a6a;
}

.custom-select-dark .multiselect__option--selected {
  background: rgb(15 23 42 / 1);
  color: #35495e;
  font-weight: bold;
}
/* End of multi select */
</style>

<template>
  <div
    class="font-Nunito relative flex h-full min-h-screen flex-col bg-white text-black dark:bg-slate-800 dark:text-white md:h-screen"
  >
    <!-- Nav Bar -->
    <NavbarsLanding :dark="isDark" @toggle-dark="toggleDark" />

    <!-- Main -->
    <div class="flex-1">
      <NuxtPage />
    </div>
  </div>
</template>
