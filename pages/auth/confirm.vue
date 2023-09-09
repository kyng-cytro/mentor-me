<script setup lang="ts">
const user = useSupabaseUser();

const route = useRoute();

watch(
  user,
  () => {
    if (user.value) {
      if (user.value.user_metadata.mentor)
        return navigateTo((route.query.redirectTo as string) ?? "/mentor");

      return navigateTo((route.query.redirectTo as string) ?? "/mentee");
    }
  },
  { immediate: true },
);
</script>
<template>
  <div>Waiting for login...</div>
</template>
