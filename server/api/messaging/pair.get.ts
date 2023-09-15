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
    return await prisma.message.findMany({
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
  } catch (e) {
    console.error(e);
    throw createError({
      statusCode: 400,
      message: "Something Went Wrong",
    });
  }
});
