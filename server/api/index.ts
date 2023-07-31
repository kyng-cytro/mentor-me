import { zh } from "h3-zod";
import { z } from "zod";

const scheme = z.object({ name: z.string().min(1, "Again Don't be lazy") });

export default defineEventHandler(async (event) => {
  const test = await zh.useValidatedBody(event, scheme);

  return {
    status: "Ok",
  };
});
