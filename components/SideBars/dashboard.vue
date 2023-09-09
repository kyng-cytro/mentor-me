<script setup lang="ts">
const user = useSupabaseUser();

const { data: userInfo } = await useFetch("/api/users/get-user", {
  query: { id: user.value?.id },
});

const emit = defineEmits(["toggle-dark"]);

const isSystem = ref(true);

const toggleSystem = () => {
  isSystem.value = false;
  emit("toggle-dark");
};

const logout = async () => {
  await useSupabaseAuthClient().auth.signOut();
  navigateTo("/auth");
};

defineProps({
  dark: Boolean,
});
</script>

<template>
  <div
    class="flex-col items-center justify-between bg-white py-12 shadow-md shadow-slate-300 dark:bg-slate-900 dark:shadow-slate-900"
  >
    <!-- Logo Text -->
    <NuxtLink
      to="/"
      class="text-xl font-bold text-slate-800 dark:text-slate-300"
      >Mentor Me</NuxtLink
    >

    <div class="flex w-full max-w-xs flex-col gap-6">
      <!-- Image, Name & Role -->

      <div class="space-y-4">
        <NuxtImg
          class="mx-auto h-20 w-20 rounded-full"
          :src="
            userInfo?.profileImage ??
            'https://api.dicebear.com/5.x/initials/svg?seed=jd'
          "
          placeholder
        />

        <div class="space-y-1 text-center">
          <h2 class="text-lg font-semibold text-slate-700 dark:text-slate-400">
            {{ userInfo?.name }}
          </h2>

          <button
            class="rounded-lg bg-slate-200 p-2 text-sm text-slate-600 dark:bg-slate-600 dark:text-slate-300"
          >
            {{ userInfo?.role }}
          </button>
        </div>
      </div>

      <!-- Nav Button -->
      <div
        class="flex flex-col items-center space-y-3"
        v-if="userInfo?.role === 'MENTEE'"
      >
        <ButtonsNavButtons :full_width="true" to="/mentee" text="Dashboard" />
        <ButtonsNavButtons
          :full_width="true"
          to="/mentee/mentors"
          text="Mentors"
        />
        <ButtonsNavButtons :full_width="true" to="/messages" text="Messages" />
        <ButtonsNavButtons :full_width="true" to="/settings" text="Settings" />
      </div>
    </div>

    <!-- Log Out -->
    <div
      class="flex w-5/6 items-center justify-between text-slate-700 dark:text-slate-400"
    >
      <button
        class="flex items-center space-x-1 p-2 hover:underline"
        @click="logout"
      >
        <span>
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            class="h-6 w-6"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            ></path>
          </svg>
        </span>
        <span>Logout</span>
      </button>
      <button class="p-2">
        <Transition name="menu" mode="out-in">
          <span v-if="isSystem" key="ci" @click="toggleSystem"
            ><svg
              fill="none"
              stroke="currentColor"
              class="h-6 w-6"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
              ></path></svg
          ></span>
          <span key="si" v-else-if="dark" @click="$emit('toggle-dark')"
            ><svg
              fill="none"
              stroke="currentColor"
              class="h-6 w-6"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              ></path>
            </svg>
          </span>
          <span key="mi" v-else @click="$emit('toggle-dark')">
            <svg
              fill="none"
              stroke="currentColor"
              class="h-6 w-6"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              ></path>
            </svg>
          </span>
        </Transition>
      </button>
    </div>
  </div>
</template>
