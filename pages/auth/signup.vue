<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

const route = useRoute();

const { mentor } = route.query;

const client = useSupabaseClient();

const user = useSupabaseUser();

onMounted(() => {
  watchEffect(async () => {
    if (user.value) {
      loading.value = false;

      if (user.value.user_metadata.mentor == false)
        return navigateTo("/mentee/complete-setup");

      if (user.value.user_metadata.mentor == true)
        return navigateTo("/mentor/complete-setup");

      await client.auth.signOut();
      return navigateTo("/auth");
    }
  });
});

const loading = ref(false);
const email = ref("");
const phone = ref();
const password = ref("");
const confirm_password = ref("");

const login_error = ref({ status: false, message: "" });

const reset = () => {
  login_error.value = { status: false, message: "" };
};

const handle_create = async () => {
  if (confirm_password.value != password.value) {
    return (login_error.value = {
      status: true,
      message: "Password and Confim Password should be the same",
    });
  }

  loading.value = true;

  reset();

  const { error } = await client.auth.signUp({
    email: email.value,
    password: password.value,
    options: { data: { mentor: mentor ? true : false } },
  });

  if (error) {
    loading.value = false;
    return (login_error.value = { status: true, message: error.message });
  }

  const { error: updateError } = await client.auth.updateUser({
    phone: phone.value,
  });

  if (updateError) {
    loading.value = false;
    return (login_error.value = {
      status: true,
      message: updateError.message,
    });
  }
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
        Sign Up
      </h2>
      <p
        class="mb-2 w-full max-w-sm text-left text-sm font-light text-red-500 sm:max-w-md"
        v-if="login_error.status"
      >
        {{ login_error.message }}
      </p>
      <form class="w-full max-w-sm sm:max-w-md" @submit.prevent="handle_create">
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
        <div class="mb-6">
          <label
            for="phone"
            class="mb-2 block text-sm font-medium text-gray-800 dark:text-slate-300"
            >Phone</label
          >
          <input
            type="text"
            name="phone"
            id="phone"
            v-model="phone"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-800 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-slate-300 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="+2348012345678"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="mb-2 block text-sm font-medium text-gray-800 dark:text-slate-300"
            >Password</label
          >
          <input
            type="password"
            name="password"
            id="password"
            v-model="password"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-800 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-slate-300 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="••••••••"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="confirm_password"
            class="mb-2 block text-sm font-medium text-gray-800 dark:text-slate-300"
            >Confirm Password</label
          >
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            v-model="confirm_password"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-800 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-slate-300 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="••••••••"
            required
          />
        </div>
        <div class="mb-4 flex flex-col items-center gap-3 sm:flex-row">
          <ButtonsLoading
            text="Create your account"
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
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
          Already registered?
          <NuxtLink
            to="/auth"
            class="text-blue-700 hover:underline dark:text-blue-500"
            >Login to your account</NuxtLink
          >
        </div>
      </form>
    </div>
  </div>
</template>
