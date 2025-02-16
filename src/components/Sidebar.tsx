"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Bell,
  Box,
  ChevronLeft,
  ChevronRight,
  FolderTree,
  Menu,
  Settings,
  User,
  X,
} from "lucide-react";
import Link from "next/link";

interface SidebarProps {
  storeId: string;
}

export function Sidebar({ storeId }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Use the usePathname hook to determine the current route.
  const pathname = usePathname();
  const activeItem = pathname.includes("/products") ? "Products" : "Categories";

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const SidebarContent = ({
    hideCloseButton = false,
  }: {
    hideCloseButton?: boolean;
  }) => (
    <>
      <div className="mb-8 flex items-center justify-between">
        {!collapsed && <h1 className="text-xl font-bold">StoreManager</h1>}
        {!isMobile && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="ml-auto"
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        )}
        {isMobile && !hideCloseButton && (
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="h-6 w-6" />
          </Button>
        )}
      </div>

      <nav className="flex-grow space-y-2">
        <Link href={`/stores/${storeId}/categories`}>
          <Button
            variant={activeItem === "Categories" ? "secondary" : "ghost"}
            className={`w-full justify-start ${collapsed ? "px-2" : ""}`}
          >
            <FolderTree className="mr-2 h-5 w-5" />
            {!collapsed && <span>Categories</span>}
          </Button>
        </Link>
        <Link href={`/stores/${storeId}/products`}>
          <Button
            variant={activeItem === "Products" ? "secondary" : "ghost"}
            className={`w-full justify-start ${collapsed ? "px-2" : ""}`}
          >
            <Box className="mr-2 h-5 w-5" />
            {!collapsed && <span>Products</span>}
          </Button>
        </Link>
      </nav>
    </>
  );

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-[300px] bg-gray-900 text-white sm:w-[400px]"
        >
          <div className="sr-only">StoreManager Sidebar</div>
          <SheetClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4"
            ></Button>
          </SheetClose>
          <SidebarContent hideCloseButton={true} />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <aside
      className={`bg-gray-900 text-white transition-all duration-300 ease-in-out ${collapsed ? "w-16" : "w-64"} flex min-h-screen flex-col p-4`}
    >
      <SidebarContent />
    </aside>
  );
}
