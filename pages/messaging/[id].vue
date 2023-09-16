<script setup lang="ts">
import { createUniqueID } from "~/lib/utils";
import type { RealtimeChannel } from "@supabase/supabase-js";

const user = useSupabaseUser();

const client = useSupabaseClient();

const { id: guestId } = <{ id: string }>useRoute().params;

const sending = ref(false);

const loading = ref(false);

const guestTyping = ref(false);

const send_error = ref({ status: false, message: "" });

// Get messages from db
const { data, refresh } = await useFetch("/api/messaging/pair", {
  params: { guestId },
});

let messageChannel: RealtimeChannel;

let typingChannel: RealtimeChannel;

onMounted(() => {
  // Scroll when use hits the page
  scroll_to_bottom();

  // Listen for messages added to db
  messageChannel = client
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
        scroll_to_bottom();
      },
    )
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "meetings" },
      async () => {
        await refresh();
      },
    )
    .subscribe();

  // Listen for tying broadcast on custom channel
  typingChannel = client
    .channel(createUniqueID(user.value?.id, guestId))
    .on("broadcast", { event: "MESSAGE" }, (payload) => {
      guestTyping.value = payload.payload.isTyping;
    })
    .subscribe();
});

// Send broadcast typing status
const is_typing = async (isTyping: boolean) => {
  typingChannel.send({
    type: "broadcast",
    event: "MESSAGE",
    payload: { isTyping },
  });
};

// Scroll screen
const scroll_to_bottom = () => {
  const container = document.querySelector("#container");
  if (container) {
    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }
};

// Send message
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

// Create room
const handle_create_room = async () => {
  loading.value = true;

  const { error } = await useFetch("/api/meetings/add", {
    method: "POST",
    body: { guestId },
  });

  loading.value = false;

  if (error.value) {
    return console.log(error.value.data.message);
  }

  return;
};

// Graceful shutdown
onUnmounted(() => {
  client.removeChannel(messageChannel);
  client.removeChannel(typingChannel);
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
      class="flex flex-col justify-between row-span-3 col-span-1 lg:col-span-2 lg:row-span-1"
    >
      <!-- Header -->
      <MessagingHeader
        :image-url="
          data.guestInfo.profileImage ??
          `https://api.dicebear.com/5.x/initials/svg?seed=${data.guestInfo.name}`
        "
        :name="data.guestInfo.name"
        :role="data.guestInfo.role"
        v-if="data"
      />
      <!-- Messages -->
      <ContainersScrollY id="container" class="flex-1" v-if="data">
        <!-- Animations -->
        <ClientOnly>
          <TransitionGroup
            class="flex flex-col space-y-4 p-3"
            name="list"
            tag="div"
          >
            <!-- Messages -->
            <MessagingChat
              :key="message.id"
              :image-url="
                message.sender.profileImage ??
                `https://api.dicebear.com/5.x/initials/svg?seed=${message.sender.name}`
              "
              :text="message.content"
              :is-user="message.senderId === user?.id"
              v-for="message in data.messages"
            />

            <!-- Messages Loading -->
            <MessagingChat
              key="pending"
              :pending="true"
              :image-url="
                data.userInfo.profileImage ??
                `https://api.dicebear.com/5.x/initials/svg?seed=${data.userInfo.name}`
              "
              text="Sending..."
              :is-user="true"
              v-if="sending"
            />

            <!-- Messages Error -->
            <MessagingChat
              key="error"
              :image-url="
                data.userInfo.profileImage ??
                `https://api.dicebear.com/5.x/initials/svg?seed=${data.userInfo.name}`
              "
              :text="`Error sending message: ${send_error.message}`"
              :is-user="true"
              :error="true"
              v-if="send_error.status"
            />

            <!-- User Typing-->
            <MessagingChat
              key="typing"
              :image-url="
                data.guestInfo.profileImage ??
                `https://api.dicebear.com/5.x/initials/svg?seed=${data.guestInfo.name}`
              "
              :text="`${data.userInfo.name} is  typing...`"
              :typing="true"
              :is-user="false"
              v-if="guestTyping"
            />
          </TransitionGroup>
        </ClientOnly>
      </ContainersScrollY>
      <!-- Input -->
      <MessagingInput
        @typing="is_typing"
        @send_message="handle_send"
        v-if="data"
      />
    </Card>
    <Card class="row-span-1 col-span-1 lg:col-span-1 lg:row-span-1">
      <div class="space-y-3" v-if="data">
        <p class="text-lg font-semibold">Join Meeting</p>
        <NuxtLink
          :to="`/meeting?roomId=${
            data.userInfo.role === 'MENTOR'
              ? data.meeting.hostUrl
              : data.meeting.guestUrl
          }&name=${data.userInfo.name}`"
          class="bg-slate-500 w-full font-medium text-sm rounded-lg p-6 border border-slate-300 dark:border-slate-600 flex flex-col justify-center items-center duration-300 ease-in-out hover:bg-slate-200 focus:bg-slate-200 focus:outline-none dark:hover:bg-slate-600 dark:focus:bg-slate-600"
          v-if="data.meeting"
        >
          Go To Meeting Room
        </NuxtLink>
        <button
          @click="handle_create_room"
          class="w-full font-medium text-sm rounded-lg p-6 border border-slate-300 dark:border-slate-600 flex flex-col justify-center items-center duration-300 ease-in-out hover:bg-slate-200 focus:bg-slate-200 focus:outline-none dark:hover:bg-slate-600 dark:focus:bg-slate-600"
          :class="{ 'animate-pulse': loading }"
          :disabled="loading"
          v-else-if="data.userInfo.role === 'MENTOR'"
        >
          {{ loading ? "Creating..." : "Create New Meeting Room" }}
        </button>
        <p
          class="w-full font-medium text-sm rounded-lg p-6 border border-slate-300 dark:border-slate-600 flex flex-col justify-center items-center"
          v-else
        >
          Waiting For Mentor To Create A Room...
        </p>
      </div>
    </Card>
  </div>
</template>
