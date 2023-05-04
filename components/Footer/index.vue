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
              <a href="#" class="group transition duration-300">
                Hire from us
                <span
                  class="block h-0.5 max-w-0 bg-gray-600 transition-all duration-500 group-hover:max-w-[40%] dark:bg-gray-400"
                ></span>
              </a>
            </li>

            <li class="mb-4">
              <a href="#" class="group transition duration-300">
                Train your staffs
                <span
                  class="block h-0.5 max-w-0 bg-gray-600 transition-all duration-500 group-hover:max-w-[50%] dark:bg-gray-400"
                ></span>
              </a>
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
              <a href="#" class="group transition duration-300">
                Github
                <span
                  class="block h-0.5 max-w-0 bg-gray-600 transition-all duration-500 group-hover:max-w-[30%] dark:bg-gray-400"
                ></span>
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="group transition duration-300">
                Discord
                <span
                  class="block h-0.5 max-w-0 bg-gray-600 transition-all duration-500 group-hover:max-w-[30%] dark:bg-gray-400"
                ></span>
              </a>
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
              <a href="#" class="group transition duration-300">
                Privacy Policy
                <span
                  class="block h-0.5 max-w-0 bg-gray-600 transition-all duration-500 group-hover:max-w-[50%] dark:bg-gray-400"
                ></span>
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="group transition duration-300">
                Terms &amp; Conditions
                <span
                  class="block h-0.5 max-w-0 bg-gray-600 transition-all duration-500 group-hover:max-w-[60%] dark:bg-gray-400"
                ></span>
              </a>
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
