import { z } from "zod";

export const basicInfoSchema = z.object({
  name: z.string().min(1),
  dob: z.coerce
    .date()
    .refine(
      (data) =>
        data < new Date(new Date().setFullYear(new Date().getFullYear() - 1))
    ),
  gender: z.enum(["MALE", "FEMALE", "OTHERS"]),
});

export const educationInfoSchema = z.object({
  education_level: z.object({
    name: z.string().min(1),
    value: z.string().min(1),
  }),
  bio: z.string().min(200).max(600),
  skills: z.string().array().min(3),
});

export const careerInfoSchema = z.object({
  career_history: z.string().min(200).max(600),
  career_challenges: z.string().min(200).max(600),
  career_goals: z.string().min(200).max(600),
});

export const formDataSchema = z.object({
  basic_info: basicInfoSchema,
  education_info: educationInfoSchema,
  career_info: careerInfoSchema,
});
