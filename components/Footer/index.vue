<template>
  <footer
    class="bg-slate-100 px-3 py-5 shadow-md shadow-slate-300 dark:bg-slate-900 dark:shadow-slate-800"
  >
    <div
      class="mx-auto flex max-w-5xl flex-col items-center gap-8 py-6 md:py-8"
    >
      <div class="grid w-full grid-cols-2 gap-8 md:grid-cols-3">
        <div>
          <h2 class="mb-6 text-sm font-semibold uppercase">For Businesses</h2>
          <ul class="font-medium text-gray-600 dark:text-gray-400">
            <li class="mb-4">
              <a href="https://flowbite.com/" class="hover:underline"
                >Hire from us</a
              >
            </li>
            <li>
              <a href="https://tailwindcss.com/" class="hover:underline"
                >Train your staffs</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h2
            class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white"
          >
            Community
          </h2>
          <ul class="font-medium text-gray-600 dark:text-gray-400">
            <li class="mb-4">
              <a
                href="https://github.com/themesberg/flowbite"
                class="hover:underline"
                >Github</a
              >
            </li>
            <li>
              <a href="https://discord.gg/4eeurUVvTy" class="hover:underline"
                >Discord</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h2
            class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white"
          >
            Legal
          </h2>
          <ul class="font-medium text-gray-600 dark:text-gray-400">
            <li class="mb-4">
              <a href="#" class="hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <span class="text-sm text-gray-500 dark:text-gray-400 md:text-center"
          >© 2023 <NuxtLink to="/" class="hover:underline">MentorMe™</NuxtLink>.
          All Rights Reserved.
        </span>
      </div>
    </div>
  </footer>
</template>
