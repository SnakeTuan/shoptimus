import { createStore } from "@/server/queries";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export async function createNewStore(formData: FormData) {
  "use server";
  const name = formData.get("name") as string;
  const userId = formData.get("userId") as string;
  if (!name || !userId) {
    throw new Error("Invalid form data");
  }
  await createStore(name, userId);
}

export function NewStoreForm({ userId }: { userId: string }) {
  return (
    <form action={createNewStore} className="space-y-4">
      <input type="hidden" name="userId" value={userId} />
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Store name"
          className="border-gray-600 dark:bg-gray-700"
        />
      </div>
      <Button type="submit" className="w-full">
        Create store
      </Button>
    </form>
  );
}
