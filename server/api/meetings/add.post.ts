import { serverSupabaseUser } from "#supabase/server";
import prisma_client from "~/lib/prisma";
import { create_room } from "~/lib/whereby";

const prisma = prisma_client;

export default eventHandler(async (event) => {
  const user = await serverSupabaseUser(event);

  if (!user || !user.id) {
    throw createError({
      statusCode: 401,
      message: "User not logged in",
    });
  }

  const { guestId }: { guestId: string } = await readBody(event);

  if (!guestId) {
    throw createError({
      statusCode: 400,
      message: "Guest ID  is missing",
    });
  }

  const userInfo = await prisma.user.findUnique({ where: { id: user.id } });

  if (!userInfo || !userInfo.active || userInfo.role !== "MENTOR") {
    throw createError({
      statusCode: 401,
      message: "Not enough privilages",
    });
  }

  try {
    const res = await create_room();

    console.log(res);

    if (!res) {
      throw createError({
        statusCode: 401,
        message: "An error occured while creating room",
      });
    }

    return await prisma.meeting.upsert({
      where: {
        menteeId_mentorId: {
          mentorId: user.id,
          menteeId: guestId,
        },
      },
      create: {
        mentorId: user.id,
        menteeId: guestId,
        wherebyId: res.meetingId,
        endDate: res.endDate,
        hostUrl: res.hostRoomUrl,
        guestUrl: res.roomUrl,
      },
      update: {
        wherebyId: res.meetingId,
        endDate: res.endDate,
        hostUrl: res.hostRoomUrl,
        guestUrl: res.roomUrl,
      },
    });
  } catch (e) {
    console.error(e);
    throw createError({
      statusCode: 400,
      message: "Something Went Wrong",
    });
  }
});
