const { wherebyEndpoint, wherebyApiKey } = useRuntimeConfig();

export const create_room = async () => {
  // Generate End Date
  const currentDate = new Date();
  const endDate = new Date(currentDate);
  endDate.setDate(currentDate.getDate() + 30);

  // Create Data Object
  const data = {
    endDate: endDate.toISOString(),
    fields: ["hostRoomUrl"],
  };

  try {
    const res = await $fetch<{
      meetingId: string;
      endDate: string;
      roomUrl: string;
      hostRoomUrl: string;
    }>(wherebyEndpoint, {
      method: "POST",
      body: data,
      headers: {
        Authorization: `Bearer ${wherebyApiKey}`,
      },
    });

    return res;
  } catch (e) {
    console.error(e);
    return null;
  }
};
