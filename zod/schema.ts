import { z } from "zod";

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(3, "Password must be at least 3 characters long"),
});

export const signUpSchema = z.object({
  name: z.string().min(3, "Username must be at least 3 characters long"),
  email: z.email(),
  password: z.string().min(3, "Password must be at least 3 characters long"),
});

export const createProductSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  category: z.string().min(1, "Category is required"),
  price: z.coerce
    .number("Please input valid price")
    .min(1, "Price is required"),
  quantity: z.coerce
    .number("Please input valid number")
    .positive()
    .min(1, "Quantity is required"),
});
