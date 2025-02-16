"use server";

import { createStore as createStoreQuery } from "@/server/queries";

export async function createStore(formData: FormData) {
  const name = formData.get("name")?.toString();
  // You would normally get the userId from your session or authentication context.
  const userId = "tuantm";
  await createStoreQuery(name as string, userId as string);
}
