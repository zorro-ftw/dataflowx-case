import * as z from "zod";
export const addMemberFormSchema = z.object({
  name: z.string().min(3),
  description: z.string().optional(),
  teamId: z.string(),
});
