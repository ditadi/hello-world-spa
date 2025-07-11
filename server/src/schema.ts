
import { z } from 'zod';

// Simple greeting schema
export const greetingSchema = z.object({
  message: z.string(),
  timestamp: z.coerce.date()
});

export type Greeting = z.infer<typeof greetingSchema>;

// Input schema for custom greeting (optional)
export const greetingInputSchema = z.object({
  name: z.string().optional()
});

export type GreetingInput = z.infer<typeof greetingInputSchema>;
