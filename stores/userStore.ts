import { User } from "@prisma/client";
import { defineStore } from "pinia";

export const userUserStore = defineStore(
  "userStore",
  () => {
    const user = ref<User | null>(null);

    const setUser = (info: User) => (user.value = info);

    const clearUser = () => (user.value = null);

    return { user, setUser, clearUser };
  },
  { persist: true }
);
