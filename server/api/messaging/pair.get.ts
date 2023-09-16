import { serverSupabaseUser } from "#supabase/server";
import prisma_client from "~/lib/prisma";

const prisma = prisma_client;

export default eventHandler(async (event) => {
  const user = await serverSupabaseUser(event);

  if (!user || !user.id) {
    throw createError({
      statusCode: 401,
      message: "User not logged in",
    });
  }

  const { guestId }: { guestId: string } = await getQuery(event);

  if (!guestId) {
    throw createError({
      statusCode: 400,
      message: "Guest ID  is missing",
    });
  }

  try {
    const userInfo = await prisma.user.findUnique({ where: { id: user.id } });

    const guestInfo = await prisma.user.findUnique({ where: { id: guestId } });

    if (!userInfo || !guestInfo) {
      throw createError({
        statusCode: 400,
        message: "User or Guest ID is invalid",
      });
    }

    const messages = await prisma.message.findMany({
      where: {
        OR: [
          { senderId: { equals: user.id }, receiverId: { equals: guestId } },
          { senderId: { equals: guestId }, receiverId: { equals: user.id } },
        ],
      },

      include: {
        sender: { select: { name: true, profileImage: true } },
        receiver: { select: { name: true, profileImage: true } },
      },
      orderBy: { createdAt: "asc" }, // asc cause we want it properly arraged,
    });

    const meeting = await prisma.meeting.findFirst({
      where: {
        mentorId: userInfo.role === "MENTOR" ? userInfo.id : guestInfo.id,
        menteeId: userInfo.role === "MENTEE" ? userInfo.id : guestInfo.id,
        endDate: {
          gte: new Date(),
        },
      },
    });

    return { userInfo, guestInfo, messages, meeting };
  } catch (e) {
    console.error(e);
    throw createError({
      statusCode: 400,
      message: "Something Went Wrong",
    });
  }
});
