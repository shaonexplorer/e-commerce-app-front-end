"use client";

import * as React from "react";
import {
  IconChartBar,
  IconDashboard,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconSearch,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

import * as jwt from "jsonwebtoken";
import { getAccessToken } from "@/actions/get-accessToken";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [userRole, setUserRole] = React.useState<string | undefined>();

  const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain:
      userRole == "SELLER"
        ? [
            {
              title: "Analytics",
              url: "/seller/home",
              icon: IconChartBar,
            },
            {
              title: "Orders",
              url: "/seller/orders",
              icon: IconDashboard,
            },
            {
              title: "Manage Products",
              url: "/seller/product",
              icon: IconListDetails,
            },
          ]
        : [
            {
              title: "Analytics",
              url: "/admin/home",
              icon: IconChartBar,
            },
            {
              title: "Orders",
              url: "/admin/orders",
              icon: IconDashboard,
            },
            {
              title: "Manage Products",
              url: "/admin/product",
              icon: IconListDetails,
            },
            {
              title: "Manage Users",
              url: "/admin/users",
              icon: IconUser,
            },
          ],
    navSecondary: [
      {
        title: "Settings",
        url: "#",
        icon: IconSettings,
      },
      {
        title: "Get Help",
        url: "#",
        icon: IconHelp,
      },
      {
        title: "Search",
        url: "#",
        icon: IconSearch,
      },
    ],
  };

  React.useEffect(() => {
    async function fetchUser() {
      const accessToken = await getAccessToken();

      try {
        const verifiedUser = jwt.decode(accessToken as string);
        setUserRole((verifiedUser as jwt.JwtPayload)?.userRole);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUser();
  }, []);
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <Link href="/">
                <IconInnerShadowTop className="size-5!" />
                <span className="text-base font-semibold">E Commerce App</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavDocuments items={data.documents} /> */}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
