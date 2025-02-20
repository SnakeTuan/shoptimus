"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";

interface AddStoreDialogProps {
  showTrigger?: boolean;
  triggerClassName?: string;
  onOpenChange?: (open: boolean) => void;
}

export default function AddStoreDialog({
  showTrigger = true,
  triggerClassName,
  onOpenChange,
}: AddStoreDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [newStore, setNewStore] = useState({ name: "", description: "" });

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    onOpenChange?.(open);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      {showTrigger && (
        <DialogTrigger asChild>
          <Button className={triggerClassName}>
            <Plus className="mr-2 h-4 w-4" /> Add Store
          </Button>
        </DialogTrigger>
      )}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Store</DialogTitle>
          <DialogDescription>
            Enter the details of your new store location.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Store Name</Label>
            <Input
              id="name"
              value={newStore.name}
              onChange={(e) =>
                setNewStore({ ...newStore, name: e.target.value })
              }
              placeholder="Enter store name"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={newStore.description}
              onChange={(e) =>
                setNewStore({ ...newStore, description: e.target.value })
              }
              placeholder="Enter store description"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => handleOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={() => {}}>Add Store</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
