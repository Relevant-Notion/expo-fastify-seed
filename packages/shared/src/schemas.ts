import { z } from "zod";

// ---- Example schemas ----

export const userSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string().min(1),
});
export type User = z.infer<typeof userSchema>;

export const createUserInput = z.object({
  email: z.string().email(),
  name: z.string().min(1),
});
export type CreateUserInput = z.infer<typeof createUserInput>;
