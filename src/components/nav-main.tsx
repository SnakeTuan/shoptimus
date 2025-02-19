"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavMain({
  items,
}: {
  storeId: string;
  items: {
    title: string;
    url: string;
    icon?: React.ComponentType<any>;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  return (
    <SidebarGroup>
      {/* <SidebarGroupLabel>Platform</SidebarGroupLabel> */}
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <Link href={item.url}>
              <SidebarMenuButton tooltip={item.title}>
                {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                <span>{item.title}</span>
                <ChevronRight className="ml-auto hidden md:block" />
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
