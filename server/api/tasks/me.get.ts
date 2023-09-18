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

  const { type }: { id: string; type: "MENTOR" | "MENTEE" } = getQuery(event);

  if (!type) {
    throw createError({
      statusCode: 400,
      message: "Type is required",
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
    if (type === "MENTOR") {
      return await prisma.task.findMany({
        where: { mentorId: user.id },
      });
    }

    if (type === "MENTEE") {
      return await prisma.task.findMany({
        where: { menteeId: user.id },
      });
    }
  } catch (e) {
    console.error(e);
    throw createError({
      statusCode: 400,
      message: "Something Went Wronng",
    });
  }
});
