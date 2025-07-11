
import { serial, text, pgTable, timestamp } from 'drizzle-orm/pg-core';

export const greetingsTable = pgTable('greetings', {
  id: serial('id').primaryKey(),
  message: text('message').notNull(),
  created_at: timestamp('created_at').defaultNow().notNull(),
});

// TypeScript type for the table schema
export type Greeting = typeof greetingsTable.$inferSelect; // For SELECT operations
export type NewGreeting = typeof greetingsTable.$inferInsert; // For INSERT operations

// Important: Export all tables and relations for proper query building
export const tables = { greetings: greetingsTable };
