<script setup lang="ts">
import { storeToRefs } from "pinia";
import { dashboardItemsMentee, dashboardItemsMentor } from "~/lib/utils";
import { useModalStore } from "~/stores/modalStore";

// TODO: remove temp
const user = useSupabaseUser();

const { data: userInfo } = await useFetch("/api/users/get-user", {
  query: { id: user.value?.id },
});

const modalStore = useModalStore();

const { data } = storeToRefs(modalStore);

const hideNav = () => {
  modalStore.hide("DASHBOARD");
};

const showNav = () => {
  modalStore.show("DASHBOARD");
};

const emit = defineEmits(["toggle-dark"]);

const isSystem = ref(true);

const toggleSystem = () => {
  isSystem.value = false;
  emit("toggle-dark");
};

const logout = async () => {
  await useSupabaseClient().auth.signOut();
  navigateTo("/auth");
};

defineProps({
  dark: Boolean,
});
</script>

<template>
  <nav
    class="bg-slate-100 px-3 py-5 shadow-md shadow-slate-300 dark:bg-slate-900 dark:shadow-slate-800"
  >
    <div class="flex items-center justify-between">
      <div>
        <NuxtLink
          @click="hideNav"
          class="p-2 text-xl font-bold text-slate-800 dark:text-slate-300"
          to="/"
          >Mentor Me</NuxtLink
        >
      </div>

      <!-- Mobile Nav Toggle -->
      <div class="flex items-center gap-3 md:hidden">
        <Transition name="menu" mode="out-in">
          <button
            @click="hideNav"
            class="rounded-md border border-slate-300 p-1.5 hover:bg-slate-300 focus:bg-slate-300 focus:outline-none dark:border-slate-600 dark:hover:bg-slate-600 dark:focus:bg-slate-600"
            v-if="data.DASHBOARD"
          >
            <svg
              fill="none"
              stroke="currentColor"
              class="h-7 w-7"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <button
            @click="showNav"
            class="rounded-md border border-slate-300 p-1.5 hover:bg-slate-300 focus:bg-slate-300 focus:outline-none dark:border-slate-600 dark:hover:bg-slate-600 dark:focus:bg-slate-600"
            v-else
          >
            <svg
              fill="none"
              stroke="currentColor"
              class="h-7 w-7"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </button>
        </Transition>
      </div>
    </div>

    <Transition name="shutter">
      <!-- Mobile Nav -->
      <div
        class="w-full flex flex-col items-center gap-3 pb-2 pt-3 md:hidden"
        v-show="data.DASHBOARD"
      >
        <div
          class="w-full flex flex-col items-center space-y-3"
          v-if="userInfo?.role === 'MENTEE'"
        >
          <ButtonsNavButtons
            @click="hideNav"
            :key="item.text"
            :full_width="true"
            :to="item.url"
            :text="item.text"
            v-for="item in dashboardItemsMentee"
          />
        </div>

        <div
          class="w-full flex flex-col items-center space-y-3"
          v-if="userInfo?.role === 'MENTOR'"
        >
          <ButtonsNavButtons
            @click="hideNav"
            :key="item.text"
            :full_width="true"
            :to="item.url"
            :text="item.text"
            v-for="item in dashboardItemsMentor"
          />
        </div>

        <div class="flex w-full items-center justify-between">
          <button
            class="flex items-center space-x-1 p-2 text-sm hover:underline"
            @click="logout"
          >
            <span>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                class="h-5 w-5"
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
                  class="h-5 w-5"
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
                  class="h-5 w-5"
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
                  class="h-5 w-5"
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
    </Transition>
  </nav>
</template>
<style scoped>
.menu-enter-active {
  animation: scale-up-center 0.25s ease 0s 1 normal none;
}
.menu-leave-active {
  animation: scale-down-center 0.25s ease 0s 1 normal none;
}

.shutter-enter-active {
  animation: shutter-in-top 0.25s ease 0s 1 normal none;
}
.shutter-leave-active {
  animation: shutter-out-top 0.25s ease 0s 1 normal none;
}

@keyframes shutter-in-top {
  0% {
    transform: rotateX(-100deg);
    transform-origin: top;
    opacity: 0;
  }
  100% {
    transform: rotateX(0deg);
    transform-origin: top;
    opacity: 1;
  }
}
@keyframes shutter-out-top {
  0% {
    transform: rotateX(0deg);
    transform-origin: top;
    opacity: 1;
  }
  100% {
    transform: rotateX(70deg);
    transform-origin: top;
    opacity: 0;
  }
}

@keyframes scale-up-center {
  0% {
    transform: scale(0.2);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes scale-down-center {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.2);
  }
}
</style>
