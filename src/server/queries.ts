import "server-only";

import { db } from "./db";
import { stores } from "./db/schema";
import { eq } from "drizzle-orm";

export async function createStore(name: string, userId: string) {
  const store = await db.insert(stores).values({ name, userId }).returning();
  return store;
}

export async function getStores(userId: string) {
  const list_stores = await db
    .select()
    .from(stores)
    .where(eq(stores.userId, userId));
  return list_stores;
}
