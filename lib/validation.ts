import { z } from "zod";
import { dubaiAreas, services } from "./site";

export const leadSchema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  phone: z
    .string()
    .regex(/^(\+971|971|0)?5[0-9]{8}$/, "Use a valid UAE mobile number"),
  email: z.string().email("Enter a valid email address"),
  service: z.enum(services.map((service) => service.title) as [string, ...string[]], {
    errorMap: () => ({ message: "Choose a service" })
  }),
  area: z.enum(dubaiAreas as [string, ...string[]], {
    errorMap: () => ({ message: "Choose your Dubai area" })
  }),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  notes: z.string().max(800, "Keep notes under 800 characters").optional()
});

export type LeadFormData = z.infer<typeof leadSchema>;
