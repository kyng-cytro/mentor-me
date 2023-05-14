export default defineNuxtRouteMiddleware(async (to, _from) => {
  const user = useSupabaseUser();

  const client = useSupabaseAuthClient();

  if (!user.value) {
    return navigateTo({ path: "/auth", query: { redirectTo: to.fullPath } });
  }

  const { data, error } = await useFetch("/api/users/get-mentee", {
    query: { id: user.value.id },
  });

  if (error.value) {
    await client.auth.signOut();
    return navigateTo({ path: "/auth", query: { redirectTo: to.fullPath } });
  }

  if (!data.value) {
    return navigateTo("/auth/complete-setup");
  }

  if (!data.value.active) {
    return navigateTo("/inactive");
  }
});
