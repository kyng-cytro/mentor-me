<script setup lang="ts">
import type { RealtimeChannel } from "@supabase/supabase-js";

const user = useSupabaseUser();

const client = useSupabaseClient();

const { id: guest } = useRoute().params;

const { data: guestInfo } = useFetch("/api/users/get-user", {
  params: { id: guest },
});

const { data: messages, refresh } = useFetch("/api/messaging/pair", {
  params: { guest },
});

let channel: RealtimeChannel;

onMounted(() => {
  channel = client
    .channel("messages")
    .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "messages",
      },
      () => refresh(),
    )
    .subscribe();
});

onUnmounted(() => {
  client.removeChannel(channel);
});
</script>
<template>
  <div
    class="grid h-full grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 min-h-screen md:min-h-full gap-6"
  >
    <Card class="row-span-2 lg:col-span-2 lg:row-span-2">
      <!-- Header -->
      <MessagingHeader
        :image-url="
          guestInfo.profileImage ??
          `https://api.dicebear.com/5.x/initials/svg?seed=${guestInfo?.name}`
        "
        :name="guestInfo.name"
        :role="guestInfo.role"
        v-if="guestInfo"
      />
      <!-- Messages -->
      <ContainersScrollY v-if="guestInfo">
        <MessagingChatBox>
          <MessagingChat
            :image-url="
              message.sender.profileImage ??
              `https://api.dicebear.com/5.x/initials/svg?seed=${message.sender.name}`
            "
            :text="message.content"
            :is-user="message.senderId === user?.id"
            v-for="message in messages"
          />
        </MessagingChatBox>
      </ContainersScrollY>
      <!-- Input -->
      <MessagingInput v-if="guestInfo" />
    </Card>
    <Card class="row-span-1 lg:col-span-1 lg:rown-span-1" />
    <Card class="row-span-1 lg:col-span-1 lg:rown-span-1" />
  </div>
</template>
