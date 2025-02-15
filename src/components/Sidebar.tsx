"use client"

import { useState } from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BarChart, Bell, Box, ChevronLeft, ChevronRight, Home, Settings, ShoppingBag, User } from "lucide-react"

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={`bg-gray-900 text-white transition-all duration-300 ease-in-out ${collapsed ? "w-16" : "w-64"} min-h-screen p-4 flex flex-col`}
    >
      <div className="flex items-center justify-between mb-8">
        {!collapsed && <h1 className="text-xl font-bold">StoreManager</h1>}
        <Button variant="ghost" size="icon" onClick={() => setCollapsed(!collapsed)} className="ml-auto">
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      <nav className="space-y-2 flex-grow">
        <Link href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded">
          <Home className="h-5 w-5" />
          {!collapsed && <span>Dashboard</span>}
        </Link>
        <Link href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded">
          <Box className="h-5 w-5" />
          {!collapsed && <span>Products</span>}
        </Link>
        <Link href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded">
          <ShoppingBag className="h-5 w-5" />
          {!collapsed && <span>Orders</span>}
        </Link>
        <Link href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded">
          <BarChart className="h-5 w-5" />
          {!collapsed && <span>Analytics</span>}
        </Link>
        <Link href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded">
          <Settings className="h-5 w-5" />
          {!collapsed && <span>Settings</span>}
        </Link>
      </nav>

      <div className="mt-auto">
        {!collapsed && (
          <Button variant="ghost" size="icon" className="w-full justify-start mb-2">
            <Bell className="h-5 w-5 mr-2" />
            Notifications
          </Button>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className={`w-full justify-start ${collapsed ? "" : "px-2"}`}>
              <Avatar className="h-8 w-8 mr-2">
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
    </aside>
  )
}

