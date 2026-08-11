"use client";

import { Wrench } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { NavUser } from "@/components/nav-user";
import { sidebarConfig } from "../app/(dashboard)/_config/sidebar-config";

type UserRole = "ADMIN" | "TECHNICIAN" | "CUSTOMER";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  role: UserRole;
  user?: {
    name: string;
    email: string;
    avatar?: string;
  };
}

export function AppSidebar({ role, user, ...props }: AppSidebarProps) {
  const pathname = usePathname();

  const items = sidebarConfig[role];

  const defaultUser = {
    name: user?.name ?? "User",
    email: user?.email ?? "",
    avatar: user?.avatar ?? "",
  };

  const roleLabel =
    role === "ADMIN"
      ? "Administration"
      : role === "TECHNICIAN"
        ? "Technician Panel"
        : "Customer Panel";

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      {/* Header */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <Link href={`/${role.toLowerCase()}-dashboard`}>
                <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Wrench className="size-4" />
                </div>

                <span className="text-base font-bold">
                  FixIt<span className="text-primary">Now</span>
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{roleLabel}</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const Icon = item.icon;

                const isActive =
                  pathname === item.url || pathname.startsWith(`${item.url}/`);

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.title}
                    >
                      <Link href={item.url}>
                        <Icon className="size-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* User */}
      <SidebarFooter>
        <NavUser user={defaultUser} />
      </SidebarFooter>
    </Sidebar>
  );
}
