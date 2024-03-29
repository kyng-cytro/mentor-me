export default defineNuxtRouteMiddleware(async (to, _from) => {
  const user = useSupabaseUser();

  const client = useSupabaseClient();

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
    if (user.value.user_metadata.mentor == false)
      return navigateTo("/mentee/complete-setup");

    if (user.value.user_metadata.mentor == true)
      return navigateTo("/mentor/complete-setup");

    await client.auth.signOut();
    return navigateTo("/auth");
  }

  if (!data.value.active) {
    return navigateTo("/inactive");
  }

  if (data.value.role === "MENTOR") {
    return navigateTo("/mentor");
  }
});
