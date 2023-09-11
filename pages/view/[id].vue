<script setup lang="ts">
const { id } = useRoute().params;

const { data: mentor } = useFetch("/api/mentor/mentor", {
  query: { id },
});

const opened_report = ref("");

const loading = ref(true);

const updateOpened = (id: string) => {
  opened_report.value = id;
};

const handle_request = async () => {};
</script>
<template>
  <div
    class="grid h-full min-h-screen grid-cols-1 grid-rows-3 lg:grid-cols-5 lg:grid-rows-2 md:min-h-full gap-6"
  >
    <Card
      class="flex items-center flex-col gap-3 p-6 relative col-span-1 lg:col-span-2 row-span-1"
    >
      <ContainersScrollY v-if="mentor">
        <div class="flex flex-col sm:flex-row items-center gap-3">
          <!-- Image -->
          <div
            class="flex-shrink-0 flex items-center justify-center border-4 w-full sm:w-auto rounded-lg sm:rounded-full border-blue-400"
          >
            <img
              class="rounded-lg w-full h-32 sm:w-20 sm:h-20 sm:rounded-full object-cover"
              :src="
                mentor.user.profileImage ??
                `https://api.dicebear.com/5.x/initials/svg?seed=${mentor.user.name}`
              "
              :alt="mentor.user.name"
            />
          </div>

          <div class="w-full sm:w-auto flex flex-col">
            <p class="text-xl font-semibold capitalize hover:underline">
              {{ mentor.user.name }}
            </p>
            <span class="text-sm font-light capitalize">{{
              mentor.currentTitle
            }}</span>
            <span class="text-sm font-light">@{{ mentor.companyName }}</span>
            <div class="my-2 flex flex-wrap gap-2">
              <p
                class="max-w-40 text-ellipsis overflow-hidden inline-flex items-center rounded-md bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-gray-700 dark:text-green-400"
              >
                {{ mentor.fieldOfExpertise }}
              </p>
              <p
                class="max-w-40 text-ellipsis overflow-hidden inline-flex items-center rounded-md bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-gray-700 dark:text-blue-400"
              >
                {{ mentor.yearsOfExperience }} years of experience
              </p>
              <p
                class="max-w-40 text-ellipsis overflow-hidden inline-flex items-center rounded-md bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-gray-700 dark:text-purple-400"
              >
                <IconsStar
                  :key="rate"
                  class="w-4 h-4"
                  v-for="rate in mentor.rating"
                />
              </p>
            </div>
          </div>
        </div>
        <!-- Bio -->
        <div>
          <p
            class="text-md font-light text-justify leading-snug break-words whitespace-pre-wrap"
          >
            {{ mentor.description }}
          </p>
        </div>

        <div class="pt-2 flex flex-wrap gap-2">
          <button
            class="rounded-lg bg-slate-200 p-2 dark:bg-slate-600"
            v-for="item in mentor.availabilities"
          >
            {{ item.dayOfWeek }} {{ item.startTime }} to {{ item.endTime }}
          </button>
        </div>

        <!-- Request Mentorship -->
        <div class="flex items-center">
          <ButtonsLoading
            @click="handle_request"
            :loading="loading"
            :secondary="true"
            text="Request Mentorship"
          />
        </div>
      </ContainersScrollY>
    </Card>
    <Card
      :show_title="true"
      title="Mentor Information"
      class="relative col-span-1 lg:col-span-3 row-span-1"
    >
      <ContainersScrollY v-if="mentor">
        <CardInfoItem
          title="Account Active"
          :value="mentor.user.active.toString()"
        />
        <CardInfoItem
          title="Gender"
          :value="mentor.user.gender.toLocaleLowerCase()"
        />
        <CardInfoItem
          title="No. Mentees"
          :value="mentor.mentees.length.toString()"
        />
        <CardInfoItem
          title="No. Reviews"
          :value="mentor.testimonials.length.toString()"
        />
        <CardInfoItem
          title="No. Available Days"
          :value="mentor.availabilities.length.toString()"
        />
        <CardInfoItem
          title="Joined"
          :value="
            useDateFormat(mentor.user.createdAt, 'ddd D, MMM, YYYY').value
          "
        />
      </ContainersScrollY>
    </Card>
    <Card
      :show_title="true"
      title="Reviews & Testimonials"
      class="relative col-span-1 lg:col-span-5 row-span-1"
    >
      <ContainersScrollY v-if="mentor">
        <CardTestimonialItem
          :key="review.id"
          :id="review.id"
          :opened="opened_report"
          :name="review.mentee?.user.name"
          :content="review.content"
          @open-report="updateOpened"
          @close-report="opened_report = ''"
          v-for="review in mentor.testimonials"
        />
      </ContainersScrollY>
    </Card>
  </div>
</template>
