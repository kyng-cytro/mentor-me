<script setup lang="ts">
const { task } = defineProps<{
  task: any;
  view: "MENTOR" | "MENTEE";
  mentees: any[];
}>();

const emit = defineEmits(["update"]);

const newTask = ref(task);

const editing = ref(false);

const update = () => {
  emit("update", newTask.value);
  editing.value = false;
};
</script>
<template>
  <div
    class="flex flex-col w-full shadow-md rounded px-3 pt-3 pb-5 cursor-grab border border-slate-300 dark:border-slate-600 bg-slate-300 dark:bg-slate-700 gap-4"
  >
    <!-- Header --->
    <div class="flex items-center justify-between">
      <Transition name="fade" mode="out-in">
        <input
          name="title"
          type="text"
          v-model="newTask.title"
          class="block rounded-lg border border-gray-300 bg-gray-100 px-2.5 py-2 text-sm text-gray-800 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-500 dark:text-slate-50 dark:placeholder-slate-200 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Task title"
          v-if="editing"
        />
        <ButtonsText
          class="tracking-wide font-semibold"
          :text="task.title"
          @dblclick="editing = true"
          v-else
        />
      </Transition>

      <ButtonsText :icon="true" v-if="view === 'MENTOR'">
        <Transition name="fade" mode="out-in">
          <svg
            key="save"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            class="w-4 h-4"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            @click="update"
            v-if="editing"
          >
            <path
              d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
            />
            <polyline points="17 21 17 13 7 13 7 21" />
            <polyline points="7 3 7 8 15 8" />
          </svg>

          <svg
            key="edit"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4"
            @click="editing = true"
            v-else
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </Transition>
      </ButtonsText>
    </div>

    <!-- Content --->
    <div class="flex-1">
      <Transition name="fade" mode="out-in">
        <textarea
          name="description"
          type="text"
          v-model="newTask.description"
          class="block w-full rounded-lg border border-gray-300 bg-gray-100 px-2.5 py-2 text-sm text-gray-800 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-500 dark:text-slate-50 dark:placeholder-slate-200 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Task Description"
          rows="3"
          v-if="editing"
        ></textarea>
        <p
          class="cursor-pointer px-2 text-md font-light text-justify leading-snug break-words whitespace-pre-wrap"
          @dblclick="editing = true"
          v-else
        >
          {{ task.description }}
        </p>
      </Transition>
    </div>

    <!-- Footer --->
    <div class="px-2 flex mt-4 justify-between items-center">
      <span class="text-sm">{{
        useDateFormat(task.createdAt, "ddd D, MMM, YYYY").value
      }}</span>
      <div v-if="view === 'MENTOR'">
        <select
          v-model="newTask.menteeId"
          class="block rounded-lg border border-gray-300 bg-gray-100 px-2.5 py-2 text-sm text-gray-800 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-500 dark:text-slate-50 dark:placeholder-slate-200 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          v-if="editing"
        >
          <option :value="mentee.userId" v-for="mentee in mentees">
            {{ mentee.user.name }}
          </option>
        </select>
        <p
          class="max-w-40 text-ellipsis overflow-hidden inline-flex items-center rounded-md bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-gray-600 dark:text-blue-400"
          v-else
        >
          {{ task.mentee.user.name }}
        </p>
      </div>
      <div v-if="view === 'MENTEE'">
        <p
          class="max-w-40 text-ellipsis overflow-hidden inline-flex items-center rounded-md bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-gray-600 dark:text-blue-400"
        >
          {{ task.mentor.user.name }}
        </p>
      </div>
    </div>
  </div>
</template>
