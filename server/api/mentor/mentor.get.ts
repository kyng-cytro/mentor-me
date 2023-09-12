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

  const { id }: { id: string } = getQuery(event);

  try {
    return await prisma.mentor.findUnique({
      where: { id },
      include: {
        user: true,
        testimonials: {
          include: { mentee: { select: { user: { select: { name: true } } } } },
        },
        availabilities: true,
        mentees: { select: { id: true, userId: true } },
        requests: {
          select: {
            mentee: { select: { id: true, userId: true } },
            status: true,
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
