import Header from "@/components/Header";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      <Header />
      <main className="flex flex-grow items-center justify-center">
        <div className="px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Shoptimus
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300 sm:text-2xl">
            Simplify your offline store management with our powerful and
            intuitive app.
          </p>
          <Link
            href="/stores"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-black transition duration-150 ease-in-out hover:bg-gray-200"
          >
            Get Started
          </Link>
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
