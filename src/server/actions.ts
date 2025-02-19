"use server";

import { createStore as createStoreQuery } from "@/server/queries";

export async function createStore(formData: FormData) {
  try {
    const name = formData.get("name")?.toString();
    const userId = formData.get("userId")?.toString();
    if (!name || !userId) {
      return { error: "Invalid form data" };
    }
    await createStoreQuery(name as string, userId as string);
    return { success: "Store created successfully" };
  } catch (error) {
    console.error(error);
    return { error: "Failed to create store" };
  }
}
