import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", () => {
  const data = ref<{
    query: string;
    asc: boolean;
    take: number;
    categories: string[];
    ratings: number[];
  }>({
    query: "",
    asc: true,
    take: 10,
    categories: [],
    ratings: [],
  });

  const toggleSort = () => {
    data.value.asc = !data.value.asc;
  };

  const resetFilters = () => {
    data.value.ratings = [];
    data.value.categories = [];
    data.value.take = 10;
  };

  const resetQuery = () => {
    data.value.query = "";
  };

  const takeMore = () => {
    data.value.take += 10;
  };

  return { data, toggleSort, resetFilters, resetQuery, takeMore };
});
