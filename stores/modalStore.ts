import { defineStore } from "pinia";

export const useModalStore = defineStore("modals", () => {
  const data = ref({ NAVIGATION: false, DASHBOARD: false });

  const show = (type: "NAVIGATION" | "DASHBOARD") => {
    data.value[type] = true;
  };

  const hide = (type: "NAVIGATION" | "DASHBOARD") => {
    data.value[type] = false;
  };

  return { data, show, hide };
});
