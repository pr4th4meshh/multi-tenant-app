import { db } from "@/db"
import { blogsTable } from "@/db/schema"
import { clerkClient } from "@clerk/nextjs/server"
import { eq } from "drizzle-orm"

interface Params {
  subdomain: string
}

export default async function Home({ params }: { params: Promise<Params> }) {
  const { subdomain } = await params
  const client = clerkClient()

  const org = await (
    await client
  ).organizations.getOrganization({ slug: subdomain })

  const orgID = org.id

  const blogs = await db
    .select()
    .from(blogsTable)
    .where(eq(blogsTable.orgId, orgID))
  return (
    <div>
      <h1>{subdomain} blogs </h1>
      {blogs.map((blog) => (
        <div>
          {blog.title} || {blog.content}
        </div>
      ))}
    </div>
  )
}
