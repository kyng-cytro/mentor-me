<template>
  <nav
    class="bg-slate-100 px-3 py-5 shadow-md shadow-slate-300 dark:bg-slate-900 dark:shadow-slate-800"
  >
    <div class="mx-auto flex max-w-5xl items-center justify-between">
      <div>
        <NuxtLink
          class="p-2 text-xl font-bold text-slate-800 dark:text-slate-300"
          to="/"
          >Mentor Me</NuxtLink
        >
      </div>
      <div class="flex items-center gap-8">
        <!-- Nav Button -->
        <div class="flex items-center gap-6">
          <NuxtLink
            to="/"
            class="block rounded p-2 duration-300 ease-in-out hover:text-blue-500 focus:appearance-none focus:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
            >Become a mentor</NuxtLink
          >
          <NuxtLink
            to="/"
            class="block rounded p-2 duration-300 ease-in-out hover:text-blue-500 focus:appearance-none focus:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
            >Hire from us</NuxtLink
          >
          <NuxtLink
            to="/"
            class="block rounded p-2 duration-300 ease-in-out hover:text-blue-500 focus:appearance-none focus:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
            >Live sessions</NuxtLink
          >
          <NuxtLink
            to="/"
            class="block rounded p-2 duration-300 ease-in-out hover:text-blue-500 focus:appearance-none focus:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
            >Find a mentor</NuxtLink
          >
        </div>
        <!-- Getstarted Button -->
        <div>
          <ButtonsNormal text="Get Started" :secondary="true" />
        </div>
      </div>
    </div>
  </nav>
</template>
