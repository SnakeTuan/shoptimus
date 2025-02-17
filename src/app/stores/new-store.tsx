"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createStore } from "./actions";
import { useRouter } from "next/navigation";

export function AddStoreModal(prop: { userId: string }) {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default">Create a new store</Button>
      </DialogTrigger>
      <DialogContent className="text-white dark:bg-gray-800 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create your new lovely store</DialogTitle>
        </DialogHeader>
        {/* action: create a new store and close the dialog */}
        <form
          action={async (formData) => {
            formData.append("userId", prop.userId);
            const result = await createStore(formData);
            if (result.error) {
              console.error(result.error);
            }
            setOpen(false);
            router.refresh();
          }}
          className="space-y-4"
        >
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
      </DialogContent>
    </Dialog>
  );
}
