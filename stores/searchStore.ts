import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", () => {
  const data = ref({ query: "", asc: true, category: "" });

  const toggleCategory = () => {
    data.value.asc = !data.value.asc;
  };

  return { data, toggleCategory };
});
