import { zh } from "h3-zod";
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

  const data = await zh.useValidatedBody(event, mentorFormDataSchema);

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
            rating: 1,
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
