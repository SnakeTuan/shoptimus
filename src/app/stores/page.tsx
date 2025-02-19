import { auth } from "@clerk/nextjs/server";
import { Suspense } from "react";
import StoresList from "@/components/store/store-list"; // new nested component for fetching stores
import Header from "@/components/Header";

export default async function StoresPage() {
  const user = await auth();

  if (!user.userId) {
    return <div>Not authorized</div>;
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <Header />
      <main className="flex flex-grow items-center justify-center">
        <div className="w-full max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-8 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Select a Store
          </h1>
          <Suspense fallback={<div>Loading stores...</div>}>
            <StoresList userId={user.userId} />
          </Suspense>
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
