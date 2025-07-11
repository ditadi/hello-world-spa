
import { z } from 'zod';

export const helloWorldSchema = z.object({
  message: z.string()
});

export type HelloWorld = z.infer<typeof helloWorldSchema>;
