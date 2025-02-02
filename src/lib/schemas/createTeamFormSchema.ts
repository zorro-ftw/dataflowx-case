import * as z from "zod";

export const createTeamFormSchema = z.object({
  name: z.string().nonempty().min(3),
  description: z.string().optional(),
});
