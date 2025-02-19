"use client";

import * as React from "react";
import { List, Box } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

export function AppSidebar({
  storeId,
  ...props
}: { storeId: string } & React.ComponentProps<typeof Sidebar>) {
  const navItems = [
    {
      title: "Categories",
      url: `/stores/${storeId}/categories`,
      icon: List,
    },
    {
      title: "Products",
      url: `/stores/${storeId}/products`,
      icon: Box,
    },
  ];

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <p className="text-2xl font-semibold text-white">Shoptimus</p>
      </SidebarHeader>
      <SidebarContent>
        <NavMain storeId={storeId} items={navItems} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
