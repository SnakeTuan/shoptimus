"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { Badge } from "@/components/ui/badge";
import { Plus, Store, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import Header from "@/components/header";

// Temporary mock data until we implement the database
const mockStores = [
  { id: 1, name: "Downtown Store", address: "123 Main St", role: "Owner" },
  {
    id: 2,
    name: "Mall Location",
    address: "456 Shopping Ave",
    role: "Manager",
  },
];

export default function StoresPage() {
  const [stores, setStores] = useState(mockStores);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newStore, setNewStore] = useState({ name: "", address: "" });

  const handleAddStore = () => {
    if (newStore.name && newStore.address) {
      setStores([
        ...stores,
        { id: stores.length + 1, ...newStore, role: "Owner" },
      ]);
      setNewStore({ name: "", address: "" });
      setIsAddDialogOpen(false);
    }
  };

  const handleDeleteStore = (id: number) => {
    setStores(stores.filter((store) => store.id !== id));
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">My Stores</h1>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add Store
              </Button>
            </DialogTrigger>
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
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={newStore.address}
                    onChange={(e) =>
                      setNewStore({ ...newStore, address: e.target.value })
                    }
                    placeholder="Enter store address"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setIsAddDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button onClick={handleAddStore}>Add Store</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stores.map((store) => (
            <Card key={store.id}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Store className="h-5 w-5" />
                    <span>{store.name}</span>
                  </div>
                  <Badge variant="secondary">{store.role}</Badge>
                </CardTitle>
                <CardDescription>{store.address}</CardDescription>
              </CardHeader>
              <CardContent>{/* Store statistics will go here */}</CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/dashboard/${store.id}`}>
                    <Store className="mr-2 h-4 w-4" /> Dashboard
                  </Link>
                </Button>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Pencil className="mr-2 h-4 w-4" /> Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteStore(store.id)}
                  >
                    <Trash2 className="mr-2 h-4 w-4" /> Delete
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
