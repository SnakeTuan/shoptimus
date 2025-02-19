import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="bg-gray-800 py-4 text-white">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold">
          Postimus
        </Link>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
}
