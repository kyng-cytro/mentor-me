<script setup lang="ts">
import type { RealtimeChannel } from "@supabase/supabase-js";

const user = useSupabaseUser();

const client = useSupabaseClient();

const { id: guestId } = useRoute().params;

const sending = ref(false);

const send_error = ref({ status: false, message: "" });

const { data: guestInfo } = useFetch("/api/users/get-user", {
  params: { id: guestId },
});

const { data: messages, refresh } = useFetch("/api/messaging/pair", {
  params: { guestId },
});

let channel: RealtimeChannel;

onMounted(() => {
  // Scroll when use hits the page
  scroll_to_bottom();

  channel = client
    .channel("messages")
    .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "messages",
      },
      async () => {
        await refresh();

        //
        scroll_to_bottom();
      },
    )
    .subscribe();
});

const scroll_to_bottom = () => {
  const container = document.querySelector("#container");
  if (container) {
    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }
};

const handle_send = async (content: string) => {
  if (!content) return;

  sending.value = true;

  // Scroll when pending is shown
  scroll_to_bottom();

  const { error } = await useFetch("/api/messaging/send", {
    method: "POST",
    body: { guestId, content },
  });

  sending.value = false;

  if (error.value) {
    send_error.value = {
      status: true,
      message: error.value.data.message,
    };

    setTimeout(() => {
      return (send_error.value = {
        status: false,
        message: "",
      });
    }, 5000);

    return;
  }
};

onUnmounted(() => {
  client.removeChannel(channel);
});
</script>
<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
<template>
  <div
    class="grid h-full grid-cols-1 grid-rows-4 lg:grid-cols-3 lg:grid-rows-1 min-h-screen md:min-h-full gap-6"
  >
    <Card
      class="flex flex-col justify-between row-span-3 lg:col-span-2 lg:row-span-1"
    >
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
      <ContainersScrollY id="container" class="flex-1" v-if="guestInfo">
        <TransitionGroup
          class="flex flex-col space-y-4 p-3"
          name="list"
          tag="div"
        >
          <MessagingChat
            :key="message.id"
            :image-url="
              message.sender.profileImage ??
              `https://api.dicebear.com/5.x/initials/svg?seed=${message.sender.name}`
            "
            :text="message.content"
            :is-user="message.senderId === user?.id"
            v-for="message in messages"
          />

          <MessagingChat
            key="pending"
            :pending="true"
            :image-url="`https://api.dicebear.com/5.x/initials/svg?seed=??`"
            text="Sending..."
            :is-user="true"
            v-if="sending"
          />
          <div class="hidden" v-else />

          <MessagingChat
            key="error"
            :image-url="`https://api.dicebear.com/5.x/initials/svg?seed=??`"
            :text="`Error sending message: ${send_error.message}`"
            :is-user="true"
            :error="true"
            v-if="send_error.status"
          />
          <div class="hidden" v-else />
        </TransitionGroup>
      </ContainersScrollY>
      <!-- Input -->
      <MessagingInput @send_message="handle_send" v-if="guestInfo" />
    </Card>
    <Card class="row-span-1 lg:col-span-1 lg:rown-span-1" />
  </div>
</template>
