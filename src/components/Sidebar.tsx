"use client";

import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Categories");

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const SidebarContent = () => (
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
        {isMobile && (
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="h-6 w-6" />
          </Button>
        )}
      </div>

      <nav className="flex-grow space-y-2">
        <Button
          variant={activeItem === "Categories" ? "secondary" : "ghost"}
          className={`w-full justify-start ${collapsed ? "px-2" : ""}`}
          onClick={() => setActiveItem("Categories")}
        >
          <FolderTree className="mr-2 h-5 w-5" />
          {!collapsed && <span>Categories</span>}
        </Button>
        <Button
          variant={activeItem === "Products" ? "secondary" : "ghost"}
          className={`w-full justify-start ${collapsed ? "px-2" : ""}`}
          onClick={() => setActiveItem("Products")}
        >
          <Box className="mr-2 h-5 w-5" />
          {!collapsed && <span>Products</span>}
        </Button>
      </nav>

      <div className="mt-auto">
        {!collapsed && (
          <Button
            variant="ghost"
            size="icon"
            className="mb-2 w-full justify-start"
          >
            <Bell className="mr-2 h-5 w-5" />
            Notifications
          </Button>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={`w-full justify-start ${collapsed ? "" : "px-2"}`}
            >
              <Avatar className="mr-2 h-8 w-8">
                <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              {!collapsed && <span>John Doe</span>}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
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
          <SidebarContent />
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
