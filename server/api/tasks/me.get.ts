import prisma_client from "~/lib/prisma";
import { serverSupabaseUser } from "#supabase/server";
import { Task } from "@prisma/client";

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
    let data: Task[] = [];

    if (type === "MENTOR") {
      data = await prisma.task.findMany({
        where: { mentorId: user.id },
        include: {
          mentor: { select: { user: true } },
          mentee: { select: { user: true } },
        },
      });
    }

    if (type === "MENTEE") {
      data = await prisma.task.findMany({
        where: { menteeId: user.id },
        include: {
          mentor: { select: { user: { select: { name: true } } } },
          mentee: { select: { user: { select: { name: true } } } },
        },
      });
    }

    const todos = data
      .filter((task) => task.status === "TODO")
      .sort((a, b) => a.postition - b.postition);

    const donings = data
      .filter((task) => task.status === "DOING")
      .sort((a, b) => a.postition - b.postition);

    const dones = data
      .filter((task) => task.status === "DONE")
      .sort((a, b) => a.postition - b.postition);

    return [
      { title: "Todo", tasks: todos },
      { title: "Doing", tasks: donings },
      { title: "Done", tasks: dones },
    ];
  } catch (e) {
    console.error(e);
    throw createError({
      statusCode: 400,
      message: "Something Went Wronng",
    });
  }
});
