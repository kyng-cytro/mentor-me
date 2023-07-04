import { serverSupabaseUser } from "#supabase/server";
import { formDataSchema } from "~/lib/schemas";
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

  const body = formDataSchema.safeParse(await readBody(event));

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
        dob: data.basic_info.dob,
        name: data.basic_info.name,
        gender: data.basic_info.gender,
        mentee: {
          create: {
            bio: data.education_info.bio,
            careerGoals: data.career_info.career_goals,
            careerHistory: data.career_info.career_history,
            careerChallenges: data.career_info.career_challenges,
            educationLevel: data.education_info.education_level.value,
            skills: data.education_info.skills,
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
