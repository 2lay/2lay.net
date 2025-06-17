import { pgTable, serial, text, timestamp, index } from "drizzle-orm/pg-core"

export const posts = pgTable(
  "dummy",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
  },
)
