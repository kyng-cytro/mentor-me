import { defineStore } from "pinia";

export const useModalStore = defineStore("modals", () => {
  const data = ref({ LOGIN: false, NAVIGATION: false, DASHBOARD: false });

  const show = (type: "LOGIN" | "NAVIGATION" | "DASHBOARD") => {
    data.value[type] = true;
  };

  const hide = (type: "LOGIN" | "NAVIGATION" | "DASHBOARD") => {
    data.value[type] = false;
  };

  return { data, show, hide };
});
