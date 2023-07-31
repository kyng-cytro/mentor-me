import { z } from "zod";

export const menteeBasicInfoSchema = z.object({
  name: z.string().min(1),
  dob: z.coerce
    .date()
    .refine(
      (data) =>
        data < new Date(new Date().setFullYear(new Date().getFullYear() - 1))
    ),
  gender: z.enum(["MALE", "FEMALE", "OTHERS"]),
});

export const mentorBasicInfoSchema = z.object({
  name: z.string().min(1),
  gender: z.enum(["MALE", "FEMALE", "OTHERS"]),
  description: z.string().min(200).max(600),
});

export const educationInfoSchema = z.object({
  education_level: z.object({
    name: z.string().min(1),
    value: z.string().min(1),
  }),
  bio: z.string().min(200).max(600),
  skills: z.string().array().min(3),
});

export const menteeCareerInfoSchema = z.object({
  career_history: z.string().min(200).max(600),
  career_challenges: z.string().min(200).max(600),
  career_goals: z.string().min(200).max(600),
});

export const mentorCareerInfoSchema = z.object({
  currentTitle: z.string().min(1),
  companyName: z.string().min(1),
  fieldOfExpertise: z.string().min(1),
  yearsOfExperience: z.number().min(1),
});

export const menteeFormDataSchema = z.object({
  basic_info: menteeBasicInfoSchema,
  education_info: educationInfoSchema,
  career_info: menteeCareerInfoSchema,
});

export const availabilitySchema = z
  .object({
    day: z.string().min(1),
    time_range: z
      .object({ hours: z.number(), minutes: z.number(), seconds: z.number() })
      .array()
      .min(2),
  })
  .array()
  .min(1);

export const mentorFormDataSchema = z.object({
  basic_info: mentorBasicInfoSchema,
  career_info: mentorCareerInfoSchema,
  availability: availabilitySchema,
});
