import { zh } from "h3-zod";
import { serverSupabaseUser } from "#supabase/server";
import { menteeFormDataSchema } from "~/lib/schemas";
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

  const data = await zh.useValidatedBody(event, menteeFormDataSchema);

  try {
    return await prisma.user.create({
      data: {
        id: user.id,
        email: user.email as string,
        phone: user.phone as string,
        name: data.basic_info.name,
        gender: data.basic_info.gender,
        role: "MENTEE",
        mentee: {
          create: {
            id: user.id,
            bio: data.education_info.bio,
            dob: data.basic_info.dob,
            careerGoals: data.career_info.career_goals,
            careerHistory: data.career_info.career_history,
            careerChallenges: data.career_info.career_challenges,
            educationLevel: data.education_info.education_level.value,
            skills: data.education_info.skills,
          },
        },
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
