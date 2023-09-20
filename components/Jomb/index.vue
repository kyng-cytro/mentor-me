<template>
  <section>
    <div class="mx-auto max-w-5xl px-3 py-8 lg:px-0 lg:pb-16">
      <div
        class="mb-8 rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800 md:p-12"
      >
        <a
          href="#"
          class="mb-2 inline-flex items-center rounded-md bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-gray-700 dark:text-blue-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-widih="1.5"
            stroke="currentColor"
            class="mr-1 h-3 w-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
            />
          </svg>

          1:1 Mentorship Program
        </a>
        <h1
          class="mb-2 text-2xl font-extrabold text-gray-900 dark:text-white md:text-5xl"
        >
          Personalized Career Guidance
        </h1>
        <p
          class="mb-6 max-w-2xl text-lg font-normal text-gray-500 dark:text-gray-400"
        >
          Get expert guidance and direction on how to advance your career and
          overcome obstacles. Finding the right mentor can be a game-changer for
          anyone who wants to achieve success in their personal or professional
          life.
        </p>
        <ButtonsSlot @click="navigateTo('/find-a-mentor')">
          Find your mentor
          <svg
            aria-hidden="true"
            class="-mr-1 ml-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </ButtonsSlot>
      </div>
      <div class="grid gap-8 md:grid-cols-2">
        <div
          class="rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800 md:p-12"
        >
          <a
            href="#"
            class="mb-2 inline-flex items-center rounded-md bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-gray-700 dark:text-green-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="mr-1 h-3 w-3"
            >
              <path
                stroke-linecap="round"
                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            Live Session
          </a>
          <h2
            class="mb-2 text-2xl font-extrabold text-gray-900 dark:text-white"
          >
            Join exclusive sessions hosted by industry elites
          </h2>
          <p
            class="mb-4 max-w-2xl text-lg font-normal text-gray-500 dark:text-gray-400"
          >
            Experience unparalleled learning opportunities with our exclusive
            sessions hosted by industry elites. Gain unique insights into the
            latest trends and innovations directly from the experts who are
            shaping the future of their respective fields.
          </p>
          <NuxtLink
            to="/live-sessions"
            class="inline-flex items-center text-lg font-medium text-blue-500 hover:underline dark:text-blue-600"
            >Read more
            <svg
              aria-hidden="true"
              class="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </NuxtLink>
        </div>
        <div
          class="rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800 md:p-12"
        >
          <a
            href="#"
            class="mb-2 inline-flex items-center rounded-md bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-gray-700 dark:text-purple-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="mr-1 h-3 w-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              />
            </svg>

            Become a Mentor
          </a>
          <h2
            class="mb-2 text-2xl font-extrabold text-gray-900 dark:text-white"
          >
            Be a catalyst for change help others achieve success
          </h2>
          <p
            class="mb-4 max-w-2xl text-lg font-normal text-gray-500 dark:text-gray-400"
          >
            Are you a seasoned professional? there are countless ways to help
            others achieve success. With our community of like-minded
            individuals, you'll have access to a wealth of resources to help you
            make a meaningful impact.
          </p>
          <NuxtLink
            to="/become-a-mentor"
            class="inline-flex items-center text-lg font-medium text-blue-500 hover:underline dark:text-blue-600"
            >Read more
            <svg
              aria-hidden="true"
              class="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
