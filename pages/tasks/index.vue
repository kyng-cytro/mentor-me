<script setup lang="ts">
import draggable from "vuedraggable";

const user = useSupabaseUser();

const { data } = useFetch("/api/tasks/me", {
  params: {
    type: user.value?.user_metadata.mentor ? "MENTOR" : "MENTEE",
  },
});

const columns = reactive([
  {
    title: "Todo",
    tasks: data.value
      ?.filter((task) => task.status === "TODO")
      .sort((a, b) => a.postition - b.postition),
  },
  {
    title: "Doing",
    tasks: data.value
      ?.filter((task) => task.status === "DOING")
      .sort((a, b) => a.postition - b.postition),
  },
  {
    title: "Done",
    tasks: data.value
      ?.filter((task) => task.status === "DONE")
      .sort((a, b) => a.postition - b.postition),
  },
]);
</script>

<template>
  <div class="grid h-full min-h-screen grid-cols-1 grid-rows-1 md:min-h-full">
    <Card>
      <div class="py-3 hide-scroll-bar overflow-scroll flex flex-wrap gap-6">
        <div
          v-for="column in columns"
          :key="column.title"
          class="w-full lg:max-w-md space-y-4 px-3"
        >
          <!-- Header -->
          <p class="font-semibold tracking-wide text-md uppercase">
            {{ column.title }}
          </p>

          <!-- Tasks -->
          <draggable
            item-key="id"
            :animation="200"
            v-model="column.tasks"
            class="flex flex-col gap-6"
            ghost-class="ghost-card"
            group="tasks"
          >
            <template #item="{ element }">
              <TasksCard :task="element" />
            </template>
          </draggable>

          <!-- Button -->
          <ButtonsText
            class="flex items-center justify-center border border-slate-300 dark:border-slate-600 w-full gap-2"
            :icon="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span>Add New Task</span>
          </ButtonsText>
        </div>
      </div>
    </Card>
  </div>
</template>
