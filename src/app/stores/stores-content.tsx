import Link from "next/link";
import { stores } from "@/server/db/schema";
import { AddStoreModal } from "@/app/stores/new-store";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Header from "@/components/Header";

export default function StoresContent(prop: {
  stores: (typeof stores.$inferSelect)[];
}) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <Header />
      <main className="flex flex-grow items-center justify-center">
        <div className="w-full max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-8 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Select a Store
          </h1>

          <div className="mb-8 space-y-4">
            {prop.stores.map((store) => (
              <Link
                key={store.id}
                href={`/stores/${store.id}/categories`}
                className="block w-full rounded-md bg-gray-800 px-4 py-3 text-left transition duration-150 ease-in-out hover:bg-gray-700"
              >
                {store.name}
              </Link>
            ))}
          </div>

          <AddStoreModal />
        </div>
      </main>

      <footer className="py-4">
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Shoptimus. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
