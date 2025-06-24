"use server"

import { db } from "@/db"
import { blogsTable, CreateBlogType } from "@/db/schema"

export async function createBlog(payload: CreateBlogType) {
  const [result] = await db.insert(blogsTable).values(payload).returning({
    id: blogsTable.id,
  })
  return result.id;
}
