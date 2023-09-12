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

  const { id } = await readBody(event);

  if (!id) {
    throw createError({
      statusCode: 401,
      message: "Mentor ID is required",
    });
  }

  const mentee = await prisma.mentee.findFirst({
    where: { userId: user.id },
    select: { id: true },
  });

  if (!mentee) {
    throw createError({
      statusCode: 400,
      message: "User is not a mentee",
    });
  }
  try {
    return await prisma.request.create({
      data: {
        menteeId: mentee.id,
        mentorId: id,
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
