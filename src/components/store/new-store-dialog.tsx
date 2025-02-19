"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function AddStoreModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const closeModal = () => setOpen(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default">Create a new store</Button>
      </DialogTrigger>
      <DialogContent className="text-white dark:bg-gray-800 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create your new lovely store</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
