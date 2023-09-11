<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

const client = useSupabaseClient();

const user = useSupabaseUser();

const loading = ref(false);

const reset_error = ref({ status: false, message: "" });

const new_password = ref("");

const confirm_password = ref("");

const handle_reset = async () => {
  if (new_password.value !== confirm_password.value)
    return (reset_error.value = {
      status: true,
      message: "Passwords do not match",
    });

  loading.value = true;

  const { error } = await client.auth.updateUser({
    password: new_password.value,
  });

  loading.value = false;

  if (error) {
    return (reset_error.value = { status: true, message: error.message });
  }

  watchEffect(() => {
    if (user.value) {
      if (user.value.user_metadata.mentor) return navigateTo("/mentor");
      return navigateTo("/mentee");
    }
  });
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
        Reset Password
      </h2>
      <div class="w-full max-w-sm sm:max-w-md">
        <Alerts
          :text="reset_error.message"
          type="error"
          v-if="reset_error.status"
        />
      </div>
      <form class="w-full max-w-sm sm:max-w-md" @submit.prevent="handle_reset">
        <div class="mb-6">
          <label
            for="password"
            class="mb-2 block text-sm font-medium text-gray-800 dark:text-slate-300"
            >New Password</label
          >
          <input
            type="password"
            name="password"
            id="password"
            v-model="new_password"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-800 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-slate-300 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="••••••••"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="confirm-password"
            class="mb-2 block text-sm font-medium text-gray-800 dark:text-slate-300"
            >Confirm Password</label
          >
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            v-model="confirm_password"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-800 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-slate-300 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="••••••••"
            required
          />
        </div>
        <div class="flex flex-col items-center gap-3 sm:flex-row">
          <ButtonsLoading
            text="Reset Password"
            :loading="loading"
            class="w-full text-left sm:w-auto sm:text-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="mr-2 -ml-1 h-5 w-5"
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
