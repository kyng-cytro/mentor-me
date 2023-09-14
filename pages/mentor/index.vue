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

const loading = ref(false);

const handle_update = async (args: string[]) => {
  const [id, action] = args;

  loading.value = true;
  const { error } = useFetch("/api/requests/update", {
    method: "POST",
    body: { id, action },
  });
  loading.value = false;

  if (error.value) {
    console.log(error.value);
  }

  await refresh();
};
</script>

<template>
  <div
    class="grid h-full grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 min-h-screen md:min-h-full gap-6"
  >
    <Card
      :show_title="true"
      :show_refresh="true"
      :refreshing="pending || loading"
      @refresh="refresh"
      title="Recent Requests"
      class="lg:col-span-2 lg:row-span-2"
    >
      <ContainersScrollY v-if="mentor">
        <CardMenteeProfile
          :key="request.id"
          :id="request.id"
          :status="request.status"
          :bio="request.mentee.bio"
          :name="request.mentee.user.name"
          :image-url="`https://api.dicebear.com/5.x/initials/svg?seed=${request.mentee.user.name}`"
          :dob="request.mentee.dob"
          :education-level="request.mentee.educationLevel"
          :skills="request.mentee.skills"
          :career-goals="request.mentee.careerGoals"
          :career-history="request.mentee.careerHistory"
          :career-challenges="request.mentee.careerChallenges"
          @approve="handle_update"
          @decline="handle_update"
          v-for="request in mentor.requests"
        />
      </ContainersScrollY>
    </Card>
    <Card
      :show_title="true"
      :show_refresh="true"
      :refreshing="pending"
      @refresh="refresh"
      title="Recent Messages"
      class="lg:col-span-1 lg:row-span-1"
    >
      <ContainersScrollY v-if="mentor">
        <CardNormal
          :key="message.id"
          :full="true"
          :title="message.content"
          :subtitle="message.sender.name"
          :to="`/messaging/${message.senderId}`"
          v-for="message in mentor.user.receivedMessages"
        />
      </ContainersScrollY>
    </Card>
    <Card
      :show_title="true"
      :show_refresh="true"
      :refreshing="pending"
      @refresh="refresh"
      title="Current Mentees"
      class="lg:col-span-1 lg:row-span-1"
    >
      <ContainersScrollY v-if="mentor">
        <CardNormal
          :key="mentee.id"
          :full="true"
          :title="mentee.user.name"
          :subtitle="mentee.user.email"
          :to="`/messaging/${mentee.id}`"
          v-for="mentee in mentor.mentees"
        />
      </ContainersScrollY>
    </Card>
  </div>
</template>
