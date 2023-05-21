export default defineNuxtRouteMiddleware(async (to, _from) => {
  const user = useSupabaseUser();

  const client = useSupabaseAuthClient();

  if (!user.value) {
    return navigateTo({ path: "/auth", query: { redirectTo: to.fullPath } });
  }

  const { data, error } = await useFetch("/api/users/get-user", {
    query: { id: user.value.id },
  });

  if (error.value) {
    await client.auth.signOut();
    return navigateTo({ path: "/auth", query: { redirectTo: to.fullPath } });
  }

  if (!data.value) {
    return navigateTo({
      path: "/auth/complete-setup",
      query: { type: user.value.user_metadata.mentor ? "mentor" : "mentee" },
    });
  }

  if (!data.value.active) {
    return navigateTo("/inactive");
  }

  if (data.value.mentor) {
    return navigateTo("/mentor");
  }
});
