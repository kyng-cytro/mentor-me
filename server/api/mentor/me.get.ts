import prisma_client from "~/lib/prisma";
import { serverSupabaseUser } from "#supabase/server";

const prisma = prisma_client;

export default eventHandler(async (event) => {
  const user = await serverSupabaseUser(event);

  if (!user || !user.id) {
    throw createError({
      statusCode: 401,
      message: "User not logged in",
    });
  }

  try {
    return await prisma.mentor.findUnique({
      where: { id: user.id },
      include: {
        user: {
          include: {
            receivedMessages: {
              distinct: ["senderId"],
              include: { sender: { select: { name: true } } },
              take: 10,
              orderBy: { createdAt: "desc" }, // desc cause we only care about the last message,
            },
          },
        },
        mentees: { include: { user: true } },
        requests: {
          include: {
            mentee: { include: { user: true } },
          },
        },
      },
    });
  } catch (e) {
    console.error(e);
    throw createError({
      statusCode: 400,
      message: "Something Went Wronng",
    });
  }
});
