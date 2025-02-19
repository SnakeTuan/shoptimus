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
import { TeamSwitcher } from "./team-switcher";

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
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain storeId={storeId} items={navItems} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
