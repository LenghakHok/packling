import {
  boolean,
  date,
  integer,
  pgTable,
  timestamp,
  uuid,
  varchar
} from "drizzle-orm/pg-core";

export const trips = pgTable("trip", {
  id: uuid().primaryKey().defaultRandom(),
  title: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 512 }),
  icon: varchar({ length: 64 }),
  duration: integer().notNull(),
  left_at: timestamp({ withTimezone: true }).defaultNow(),
  returned_at: timestamp({ withTimezone: true }),
  status: varchar({ length: 128 }).default("draft"),
  created_at: timestamp({ withTimezone: true }).defaultNow(),
  updated_at: timestamp({ withTimezone: true })
    .defaultNow()
    .$onUpdate(() => new Date())
});

export const stuffs = pgTable("stuffs", {
  id: uuid().primaryKey().defaultRandom(),
  trip_id: uuid().notNull(),
  label: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 512 }),
  duration: integer().notNull(),
  is_packed: boolean().default(false),
  status: varchar({ length: 128 }).default("draft"),
  created_at: timestamp({ withTimezone: true }).defaultNow(),
  updated_at: timestamp({ withTimezone: true })
    .defaultNow()
    .$onUpdate(() => new Date())
});
