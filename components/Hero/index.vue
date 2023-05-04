<script setup lang="ts">
import { useModalStore } from "~/stores/modalStore";

const modalStore = useModalStore();

const showLogin = () => {
  modalStore.hide("NAVIGATION");
  modalStore.show("LOGIN");
};
</script>

<template>
  <section
    class="bg-gray-700 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-center bg-no-repeat bg-blend-multiply"
  >
    <div class="mx-auto max-w-screen-xl px-4 py-24 text-center lg:py-56">
      <h1
        class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl"
      >
        Unlock Your Potential with Our Network
      </h1>
      <p
        class="mb-8 text-lg font-normal text-gray-300 sm:px-16 lg:px-48 lg:text-xl"
      >
        Discover the power of mentorship with expert guidance from industry
        experts who understand your goals and provide personalized guidance for
        career growth.
      </p>
      <div
        class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0"
      >
        <ButtonsSlot @click="showLogin">
          Get started
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
        <ButtonsNormal text="Learn more" :secondary="true" class="text-white" />
      </div>
    </div>
  </section>
</template>
