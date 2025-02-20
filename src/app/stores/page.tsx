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
import { Store, Pencil, Trash2, Plus } from "lucide-react";
import Link from "next/link";
import Header from "@/components/header";
import { useAuth } from "@clerk/nextjs";
import { api } from "@/trpc/react";
import AddStoreDialog from "@/app/stores/_component/createStoreButton";

export default function StoresPage() {
  const { userId } = useAuth();
  const utils = api.useUtils();
  const [loadedStore] = api.store.getAll.useSuspenseQuery();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  // const loadedStore = [
  //   {
  //     id: "1",
  //     name: "Store 1",
  //     description: "Description 1",
  //   },
  // ];

  // const createStore = api.store.create.useMutation({
  //   onSuccess: async () => {
  //     await utils.store.getAll.invalidate();
  //     setIsAddDialogOpen(false);
  //     setNewStore({ name: "", description: "" });
  //   },
  // });

  // const createNewStore = () => {
  //   createStore.mutate({
  //     name: newStore.name,
  //     description: newStore.description,
  //     userId: userId,
  //   });
  // };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-8">
        {loadedStore.length > 0 && (
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-3xl font-bold">My Stores</h1>
            <AddStoreDialog />
          </div>
        )}

        {loadedStore.length === 0 ? (
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50/50 px-4 py-12 text-center">
            <Store className="h-12 w-12 text-gray-400" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              No stores yet
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Get started by creating your first store
            </p>
            <AddStoreDialog
              showTrigger
              triggerClassName="mt-4"
              onOpenChange={setIsAddDialogOpen}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {loadedStore.map((store) => (
              <Card key={store.id}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Store className="h-5 w-5" />
                      <span>{store.name}</span>
                    </div>
                    {/* <Badge variant="secondary">{store.role}</Badge> */}
                  </CardTitle>
                  <CardDescription>{store.description}</CardDescription>
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
                      // onClick={() => handleDeleteStore(store.id)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" /> Delete
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
