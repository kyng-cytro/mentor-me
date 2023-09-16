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

  const userInfo = await prisma.user.findUnique({ where: { id: user.id } });

  if (!userInfo || !userInfo.active) {
    throw createError({
      statusCode: 401,
      message: "Not enough privilages",
    });
  }

  try {
    return prisma.mentor.findMany({
      where: { mentees: { some: { user: { id: user.id } } } },
      include: { user: true },
    });
  } catch (e) {
    console.error(e);
    throw createError({
      statusCode: 400,
      message: "Something Went Wrong",
    });
  }
});
