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

  const { id, action } = await readBody(event);

  if (!id) {
    throw createError({
      statusCode: 401,
      message: "Request ID is required",
    });
  }

  try {
    if (action === "decline") {
      return await prisma.request.update({
        where: { id },
        data: {
          status: "DECLINED",
        },
      });
    }

    if (action === "approve") {
      return await prisma.$transaction(async (trx) => {
        const request = await trx.request.update({
          where: { id },
          data: {
            status: "APPROVED",
          },
          include: { mentee: true },
        });

        return await trx.mentor.update({
          where: { id: user.id },
          data: { mentees: { connect: { id: request.menteeId ?? "" } } },
        });
      });
    }
    throw createError({
      statusCode: 400,
      message: "Invalid action",
    });
  } catch (e) {
    console.error(e);
    throw createError({
      statusCode: 400,
      message: "Something Went Wronng",
    });
  }
});
