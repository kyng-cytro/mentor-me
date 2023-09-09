<script setup lang="ts">
import { useModalStore } from "~/stores/modalStore";

// Popup Login
const modalStore = useModalStore();

const loginModal = ref();

const hideLogin = () => {
  modalStore.hide("LOGIN");
};

onClickOutside(loginModal, () => hideLogin());

// Login Logic
const client = useSupabaseClient();

const user = useSupabaseUser();

const route = useRoute();

const loading = ref(false);

const login_error = ref({ status: false, message: "" });

const email = ref("");
const password = ref("");

const handle_login = async () => {
  if (!email.value || !password.value) return;

  loading.value = true;

  const { error } = await client.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });

  loading.value = false;

  if (error) {
    return (login_error.value = { status: true, message: error.message });
  }

  hideLogin();

  watchEffect(() => {
    if (user.value) {
      if (user.value.user_metadata.mentor)
        return navigateTo((route.query.redirectTo as string) ?? "/mentor");

      return navigateTo((route.query.redirectTo as string) ?? "/mentee");
    }
  });
};
</script>

<template>
  <div
    tabindex="-1"
    aria-hidden="true"
    class="fixed left-0 right-0 top-0 z-50 flex h-[calc(100%)] max-h-full w-full items-center overflow-y-auto overflow-x-hidden p-4 backdrop-blur-md md:inset-0"
  >
    <div class="relative mx-auto max-h-full w-full max-w-md" ref="loginModal">
      <!-- Modal content -->
      <div class="relative rounded-lg bg-slate-200 shadow-md dark:bg-gray-700">
        <button
          type="button"
          @click="hideLogin"
          class="absolute right-2.5 top-3 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            class="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="px-6 py-6 lg:px-8">
          <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Sign in
          </h3>
          <p
            class="mb-2 text-sm font-light text-red-500"
            v-if="login_error.status"
          >
            {{ login_error.message }}
          </p>
          <form class="space-y-6" @submit.prevent="handle_login">
            <div>
              <label
                for="popup-email"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >Your email</label
              >
              <input
                type="email"
                name="email"
                id="popup-email"
                v-model="email"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                placeholder="name@company.com"
                autocomplete="email"
                required
              />
            </div>
            <div>
              <label
                for="popup-password"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >Your password</label
              >
              <input
                type="password"
                name="password"
                id="popup-password"
                v-model="password"
                placeholder="••••••••"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                required
              />
            </div>
            <div class="flex justify-between">
              <div class="flex items-start">
                <div class="flex h-5 items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    class="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                  />
                </div>
                <label
                  for="remember"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >Remember me</label
                >
              </div>
              <NuxtLink
                @click="hideLogin"
                to="/auth/forgot"
                class="text-sm text-blue-700 hover:underline dark:text-blue-500"
                >Lost Password?</NuxtLink
              >
            </div>
            <ButtonsLoading
              text="Login to your account"
              :loading="loading"
              :full="true"
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
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?
              <NuxtLink
                @click="hideLogin"
                to="/auth/signup"
                class="text-blue-700 hover:underline dark:text-blue-500"
                >Create account</NuxtLink
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
