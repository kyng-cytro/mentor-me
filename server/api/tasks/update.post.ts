import { serverSupabaseUser } from "#supabase/server";
import { Task } from "@prisma/client";
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

  const { newTask }: { newTask: Task } = await readBody(event);

  if (!newTask) {
    throw createError({
      statusCode: 401,
      message: "New tasks is required",
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
    return prisma.task.upsert({
      where: { id: newTask.id },
      create: {
        mentorId: newTask.mentorId,
        menteeId: newTask.menteeId,
        title: newTask.title,
        description: newTask.description,
        postition: 1,
      },
      update: {
        mentorId: newTask.mentorId,
        menteeId: newTask.menteeId,
        description: newTask.description,
        postition: 1,
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
