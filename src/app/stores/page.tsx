import { stores as stores_schema } from "@/server/db/schema";
import { db } from "@/server/db";
import StoresContent from "@/app/stores/stores-content";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export default async function StoresPage() {
  const user = await auth();

  if (!user.userId) {
    return <div>Not authorized</div>;
  }

  const stores = await db
    .select()
    .from(stores_schema)
    .where(eq(stores_schema.userId, user.userId));

  return <StoresContent stores={stores} userId={user.userId} />;
}
