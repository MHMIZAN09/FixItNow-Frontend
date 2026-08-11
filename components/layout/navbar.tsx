"use client";

import {
  Briefcase,
  Home,
  Info,
  LayoutGrid,
  Menu,
  Users,
  Wrench,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ModeToggle";

interface Navbar1Props {
  className?: string;
}

const navItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Services",
    url: "/services",
    icon: Briefcase,
  },
  {
    title: "Technicians",
    url: "/technicians",
    icon: Users,
  },
  {
    title: "Categories",
    url: "/categories",
    icon: LayoutGrid,
  },
  {
    title: "About",
    url: "/about",
    icon: Info,
  },
];

const Navbar1 = ({ className }: Navbar1Props) => {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80",
        className,
      )}
    >
      <div className="container mx-auto px-4">
        {/* ==================== DESKTOP NAVBAR ==================== */}
        <nav className="hidden h-16 items-center justify-between lg:flex">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm transition-transform hover:scale-105">
              <Wrench className="h-5 w-5" />
            </div>

            <span className="text-xl font-bold tracking-tight">
              FixIt<span className="text-primary">Now</span>
            </span>
          </Link>

          {/* Navigation */}
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.url}
                      className="group inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary"
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <ModeToggle />

            {/* Login */}
            <Button asChild variant="ghost" size="sm">
              <Link href="/login">Login</Link>
            </Button>

            {/* Register */}
            <Button asChild size="sm">
              <Link href="/register">Get Started</Link>
            </Button>
          </div>
        </nav>

        {/* ==================== MOBILE NAVBAR ==================== */}
        <div className="flex h-16 items-center justify-between lg:hidden">
          {/* Mobile Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm transition-transform hover:scale-105">
              <Wrench className="h-5 w-5" />
            </div>

            <span className="text-xl font-bold tracking-tight">
              FixIt<span className="text-primary">Now</span>
            </span>
          </Link>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[360px]">
              {/* Sheet Header */}
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <Wrench className="h-5 w-5" />
                    </div>

                    <span className="text-xl font-bold tracking-tight">
                      FixIt<span className="text-primary">Now</span>
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-6 px-4 pt-6">
                {/* ==================== MOBILE NAVIGATION ==================== */}
                <nav className="flex flex-col gap-1">
                  {navItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.title}
                        href={item.url}
                        className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:bg-muted hover:text-primary"
                      >
                        <Icon className="h-4 w-4" />

                        <span>{item.title}</span>
                      </Link>
                    );
                  })}
                </nav>

                {/* ==================== APPEARANCE ==================== */}
                <div className="flex items-center justify-between border-y py-4">
                  <span className="text-sm font-medium text-muted-foreground">
                    Appearance
                  </span>

                  <ModeToggle />
                </div>

                {/* ==================== MOBILE AUTH ==================== */}
                <div className="flex flex-col gap-3">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/login">Login</Link>
                  </Button>

                  <Button asChild className="w-full">
                    <Link href="/register">Get Started</Link>
                  </Button>
                </div>

                {/* ==================== MOBILE FOOTER TEXT ==================== */}
                <div className="mt-auto pt-6 text-center">
                  <p className="text-xs text-muted-foreground">
                    Your Trusted Home Service Platform
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    © {new Date().getFullYear()} FixItNow
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export { Navbar1 };
