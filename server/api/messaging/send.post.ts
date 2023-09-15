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

  const { guestId, content }: { guestId: string; content: string } =
    await readBody(event);

  if (!guestId || !content) {
    throw createError({
      statusCode: 400,
      message: "Guest ID or Content is missing",
    });
  }

  try {
    return await prisma.message.create({
      data: { senderId: user.id, receiverId: guestId, content },
    });
  } catch (e) {
    console.error(e);
    throw createError({
      statusCode: 400,
      message: "Something Went Wrong",
    });
  }
});
