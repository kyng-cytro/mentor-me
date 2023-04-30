<template>
  <section>
    <div class="mx-auto max-w-5xl items-center px-3 py-8 md:px-0 lg:py-16">
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
        <ButtonsSlot>
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
              class="mr-1 h-3 w-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
              ></path>
            </svg>
            Design
          </a>
          <h2
            class="mb-2 text-2xl font-extrabold text-gray-900 dark:text-white"
          >
            Start with Flowbite Design System
          </h2>
          <p
            class="mb-4 max-w-2xl text-lg font-normal text-gray-500 dark:text-gray-400"
          >
            Static websites are now used to bootstrap lots of websites and are
            becoming the basis for a variety of tools that even influence both
            web designers and developers.
          </p>
          <a
            href="#"
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
          </a>
        </div>
        <div
          class="rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800 md:p-12"
        >
          <a
            href="#"
            class="mb-2 inline-flex items-center rounded-md bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-gray-700 dark:text-purple-400"
          >
            <svg
              class="mr-1 h-3 w-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
              ></path>
            </svg>
            Code
          </a>
          <h2
            class="mb-2 text-2xl font-extrabold text-gray-900 dark:text-white"
          >
            Best react libraries around the web
          </h2>
          <p
            class="mb-4 max-w-2xl text-lg font-normal text-gray-500 dark:text-gray-400"
          >
            Static websites are now used to bootstrap lots of websites and are
            becoming the basis for a variety of tools that even influence both
            web designers and developers.
          </p>
          <a
            href="#"
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
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
