<script setup lang="ts">
useHead({
  script: [{ src: "https://cdn.srv.whereby.com/embed/v1.js", type: "module" }],
});

const router = useRouter();

const { roomId, name } = <{ roomId: string; name: string }>useRoute().query;
</script>
<template>
  <div class="grid h-full min-h-screen grid-cols-1 grid-rows-1 md:min-h-full">
    <ClientOnly>
      <whereby-embed
        class="h-full"
        @leave="router.back()"
        :room="roomId"
        :displayName="name"
      />
    </ClientOnly>
  </div>
</template>
