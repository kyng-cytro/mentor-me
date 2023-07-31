import { serverSupabaseUser } from "#supabase/server";
import { mentorFormDataSchema } from "~/lib/schemas";
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

  const body = mentorFormDataSchema.safeParse(await readBody(event));

  if (!body.success) {
    throw createError({
      statusCode: 403,
      message: "Invalid user input",
    });
  }

  const data = body.data;

  try {
    return await prisma.user.create({
      data: {
        id: user.id,
        email: user.email as string,
        phone: user.phone as string,
        name: data.basic_info.name,
        gender: data.basic_info.gender,
        role: "MENTOR",
        mentor: {
          create: {
            currentTitle: data.career_info.currentTitle,
            companyName: data.career_info.companyName,
            fieldOfExpertise: data.career_info.fieldOfExpertise,
            yearsOfExperience: data.career_info.yearsOfExperience,
            description: data.basic_info.description,
          },
        },
      },
    });
  } catch {
    throw createError({
      statusCode: 400,
      message: "Something Went Wronng",
    });
  }
});
