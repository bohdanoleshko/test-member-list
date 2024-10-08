import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "Phone must be at least 10 digits.",
  }),

  email: z.string().email().min(6, {
    message: "Email must be at least 6 characters.",
  }),
  avatar: z.string().min(6, {
    message: "Avatar link must be at least 6 characters.",
  }),
});
