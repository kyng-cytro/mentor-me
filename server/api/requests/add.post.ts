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

  const { id }: { id: string } = await readBody(event);

  if (!id) {
    throw createError({
      statusCode: 401,
      message: "Mentor ID is required",
    });
  }

  const userInfo = await prisma.user.findUnique({ where: { id: user.id } });

  if (!userInfo || !userInfo.active) {
    throw createError({
      statusCode: 401,
      message: "Not enough privilages",
    });
  }

  try {
    return await prisma.request.create({
      data: {
        menteeId: user.id,
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
