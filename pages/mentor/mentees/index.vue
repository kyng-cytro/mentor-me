<script setup lang="ts">
definePageMeta({
  middleware: "mentor",
});

const query = ref("");

const {
  data: mentees,
  refresh,
  pending,
} = await useFetch("/api/mentor/mentees", {
  lazy: true,
  headers: useRequestHeaders(["cookie"]) as Record<string, string>,
});

const results = useDebounce(
  computed(() => {
    if (!mentees.value) return [];
    return mentees.value.filter((item) =>
      item.user.name.toLowerCase().includes(query.value.toLowerCase()),
    );
  }),
  1000,
  { maxWait: 5000 },
);
</script>

<template>
  <div class="grid h-full min-h-screen grid-cols-1 grid-rows-1 md:min-h-full">
    <Card
      class="relative col-span-1 row-span-1"
      :show_title="true"
      title="My Mentees"
      :show_refresh="true"
      :refreshing="pending"
      @refresh="refresh"
    >
      <div class="flex items-center justify-between gap-2 py-2">
        <input
          type="search_pt"
          id="search_pt"
          v-model="query"
          class="block w-full max-w-sm rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-800 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-slate-300 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:max-w-md"
          placeholder="Search..."
          required
        />
      </div>
      <CardNormal
        :key="mentor.id"
        :full="true"
        :to="`/messaging/${mentor.id}`"
        :title="mentor.user.name"
        :subtitle="mentor.user.email"
        v-for="mentor in results"
      />
      <div
        class="h-[80%] flex flex-col items-center justify-center gap-6"
        v-if="!results.length && !pending"
      >
        <NuxtImg class="h-24 w-24" src="/images/not-found.png" placeholder />
        <p class="font-semibold text-md capitalize">
          Have you tried accepting requests
        </p>
      </div>
    </Card>
  </div>
</template>
