<script setup lang="ts">
definePageMeta({
  middleware: "mentor",
});

const {
  data: mentor,
  pending,
  refresh,
} = await useFetch("/api/mentor/me", {
  lazy: true,
});
</script>

<template>
  <div
    class="grid h-full grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 min-h-screen md:min-h-full gap-6"
  >
    <Card
      :show_title="true"
      :show_refresh="true"
      :refreshing="pending"
      @refresh="refresh"
      title="Mentorship Requests"
      class="lg:col-span-2 lg:row-span-2"
    ></Card>
    <Card
      :show_title="true"
      :show_refresh="true"
      :refreshing="pending"
      @refresh="refresh"
      title="Messages"
      class="lg:col-span-1 lg:row-span-1"
    ></Card>
    <Card
      :show_title="true"
      :show_refresh="true"
      :refreshing="pending"
      @refresh="refresh"
      title="Mentees"
      class="lg:col-span-1 lg:row-span-1"
    >
      <ContainersScrollY v-if="mentor">
        <CardNormal
          :key="mentee.id"
          :full="true"
          :title="mentee.user.name"
          :subtitle="mentee.user.email"
          :to="`/mentor/mentees/${mentee.id}`"
          v-for="mentee in mentor.mentees"
        />
      </ContainersScrollY>
    </Card>
  </div>
</template>
