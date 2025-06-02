"use client";

import { cn } from "@/lib/utils";
import { UserButton, useUser } from "@clerk/nextjs";
import {
  LayoutDashboard,
  FolderKanban,
  Briefcase,
  MenuIcon,
  LucideIcon,
  PenIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

interface Route {
  label: string;
  icon: LucideIcon;
  href: string;
}

const routes: Route[] = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Case Studies",
    icon: FolderKanban,
    href: "/dashboard/case-studies",
  },
  {
    label: "Portfolio",
    icon: Briefcase,
    href: "/dashboard/my-portfolio",
  },
  {
    label: "Create Portfolio",
    icon: PenIcon,
    href: "/dashboard/portfolio/create",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden absolute left-4 top-4">
          <Button variant="ghost" size="icon">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-72">
          <SidebarContent user={user} pathname={pathname} routes={routes} />
        </SheetContent>
      </Sheet>

      <aside className="hidden md:flex w-72 flex-col border-r">
        <SidebarContent user={user} pathname={pathname} routes={routes} />
      </aside>
    </>
  );
}

interface SidebarContentProps {
  user: ReturnType<typeof useUser>["user"];
  pathname: string;
  routes: Route[];
}

function SidebarContent({ user, pathname, routes }: SidebarContentProps) {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-background">
      <div className="px-3 py-2 flex-1">
        <div className="mb-8 flex items-center justify-between px-2">
          <Link
            href="/"
            aria-label="home"
            className="flex items-center space-x-2 bg-black rounded-3xl px-6 py-4"
          >
            <Image
              src="/logo.png"
              alt="Project Shelf Logo"
              height={120}
              width={120}
              className="object-contain hover:scale-105 transition-transform duration-200"
              priority
            />
          </Link>
        </div>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={{ pathname: route.href }}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-primary/10 rounded-lg transition",
                pathname === route.href
                  ? "bg-primary/10 text-primary"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon
                  className={cn(
                    "h-5 w-5 mr-3",
                    pathname === route.href ? "text-primary" : "text-zinc-400"
                  )}
                />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="px-3 py-2 border-t">
        <div className="flex items-center gap-3 px-2">
          {user?.imageUrl && (
            <Image
              src={user.imageUrl}
              alt="user"
              height={10}
              width={10}
              className="rounded-full h-10 w-10"
            />
          )}
          <div className="flex flex-col">
            <span className="font-medium">{user?.fullName}</span>
            <span className="text-xs text-zinc-400">
              {user?.primaryEmailAddress?.emailAddress}
            </span>
          </div>
          <UserButton afterSignOutUrl="/login" />
        </div>
      </div>
    </div>
  );
}
