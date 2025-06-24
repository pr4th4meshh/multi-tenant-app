import { pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";

export const blogsTable = pgTable('blogs', {
    id: uuid().primaryKey().defaultRandom(),
    title: varchar({length: 80}).notNull(),
    content: text().notNull(),
    orgId: text().notNull()
})

export type CreateBlogType = typeof blogsTable.$inferInsert
export type SelectBlogType = typeof blogsTable.$inferSelect
