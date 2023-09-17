<script setup lang="ts">
definePageMeta({
  middleware: "mentee",
});

const {
  data: mentee,
  pending,
  refresh,
} = await useFetch("/api/mentee/me", {
  lazy: true,
});
</script>

<template>
  <div
    class="grid h-full grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 min-h-screen md:min-h-full gap-6"
  >
    <Card :show_title="true" title="Tasks" class="lg:col-span-2 lg:row-span-2">
    </Card>
    <Card
      :show_title="true"
      :show_refresh="true"
      :refreshing="pending"
      @refresh="refresh"
      title="Recent Messages"
      class="lg:col-span-1 lg:row-span-1"
    >
      <ContainersScrollY v-if="mentee">
        <CardNormal
          :key="message.id"
          :full="true"
          :title="message.content"
          :subtitle="message.sender.name"
          :to="`/messaging/${message.senderId}`"
          v-for="message in mentee.user.receivedMessages"
        />
      </ContainersScrollY>
    </Card>
    <Card
      :show_title="true"
      :show_refresh="true"
      :refreshing="pending"
      @refresh="refresh"
      title="Current Mentors"
      class="lg:col-span-1 lg:row-span-1"
    >
      <ContainersScrollY v-if="mentee">
        <CardNormal
          :key="mentor.id"
          :full="true"
          :title="mentor.user.name"
          :subtitle="mentor.user.email"
          :to="`/messaging/${mentor.id}`"
          v-for="mentor in mentee.mentors"
        />
      </ContainersScrollY>
    </Card>
  </div>
</template>
