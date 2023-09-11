<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

const client = useSupabaseClient();

const loading = ref(false);
const email = ref("");

const forgot_error = ref({ status: false, message: "" });

const success = ref(false);

const reset = () => {
  forgot_error.value = { status: false, message: "" };
  success.value = false;
};

const handle_reset = async () => {
  loading.value = true;

  reset();

  //TODO: change url
  const { error } = await client.auth.resetPasswordForEmail(email.value, {
    redirectTo: "http://localhost:3000/auth/reset",
  });

  loading.value = false;

  if (error) {
    return (forgot_error.value = { status: true, message: error.message });
  }

  return (success.value = true);
};
</script>

<template>
  <div class="flex h-full flex-col gap-6 md:flex-row">
    <SideBarsAuth />
    <div
      class="flex flex-1 flex-col items-center px-3 py-10 md:col-span-2 md:justify-center md:py-0"
    >
      <h2
        class="mb-4 max-h-full w-full max-w-sm text-left text-3xl font-extrabold leading-none tracking-tight text-gray-800 dark:text-slate-200 sm:max-w-md md:text-4xl"
      >
        Forgot Password
      </h2>
      <p
        class="mb-2 w-full max-w-sm text-left text-sm font-light text-red-500 sm:max-w-md"
        v-if="forgot_error.status"
      >
        {{ forgot_error.message }}
      </p>
      <p
        class="mb-2 w-full max-w-sm text-left text-sm font-light text-green-500 sm:max-w-md"
        v-if="success"
      >
        Please check your inbox
      </p>

      <form class="w-full max-w-sm sm:max-w-md" @submit.prevent="handle_reset">
        <div class="mb-6">
          <label
            for="email"
            class="mb-2 block text-sm font-medium text-gray-800 dark:text-slate-300"
            >Email</label
          >
          <input
            type="email"
            name="email"
            id="email"
            v-model="email"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-800 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-slate-300 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="john@doe.com"
            autocomplete="email"
            required
          />
        </div>
        <div class="flex flex-col items-center gap-3 sm:flex-row">
          <ButtonsLoading
            text="Send Email"
            :loading="loading"
            class="w-full text-left sm:w-auto sm:text-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="-ml-1 mr-2 h-5 w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </ButtonsLoading>
        </div>
      </form>
    </div>
  </div>
</template>
