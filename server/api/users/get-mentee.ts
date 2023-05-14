import prisma_client from "~/lib/prisma";

const prisma = prisma_client;

export default eventHandler(async (event) => {
  const params = getQuery(event);

  const id = params.id as string;

  try {
    return await prisma.mentee.findUnique({ where: { id } });
  } catch {
    throw createError({
      statusCode: 404,
      message: "User not found",
    });
  }
});
