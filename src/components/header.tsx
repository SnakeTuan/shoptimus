import { Store } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Store className="h-6 w-6" />
              <span className="text-xl font-bold">Shoptimus</span>
            </Link>
            <Button asChild>
              <Link href="/stores">Login</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
