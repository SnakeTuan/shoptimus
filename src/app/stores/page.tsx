import { stores as stores_schema } from "@/server/db/schema";
import { db } from "@/server/db";
import StoresContent from "@/app/stores/stores-content";

export default async function StoresPage() {
  const stores = await db.select().from(stores_schema);
  return <StoresContent stores={stores} />;
}
