import "server-only";
import { db } from "./db";
import { stores } from "./db/schema";

export async function createStore(name: string, userId: string) {
  const store = await db.insert(stores).values({ name, userId }).returning();
  return store;
}
