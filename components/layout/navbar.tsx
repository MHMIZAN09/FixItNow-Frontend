"use client";

import {
  Briefcase,
  Home,
  Info,
  LayoutDashboard,
  LayoutGrid,
  LogOut,
  Menu,
  Settings,
  Users,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
import { logout } from "../../services/logout";
import { ModeToggle } from "./ModeToggle";

interface MenuItem {
  title: string;
  url: string;
  icon?: React.ElementType;
}

export interface NavbarUserProps {
  success: boolean;
  statusCode: number;
  message: string;
  data?: {
    id: string;
    name?: string;
    email?: string;
    role?: string;
    profileImage?: string | null;
  };
}

interface NavbarProps {
  className?: string;

  user?: NavbarUserProps | null;

  menu?: MenuItem[];

  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

/* =========================================================
   NAVIGATION ITEMS
========================================================= */

const defaultMenuItems: MenuItem[] = [
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

/* =========================================================
   ROLE BASED USER MENU
========================================================= */

const getUserMenuItems = (role?: string) => {
  const dashboardItem = {
    CUSTOMER: {
      label: "Customer Dashboard",
      url: "/dashboard",
    },

    TECHNICIAN: {
      label: "Technician Dashboard",
      url: "/technician-dashboard",
    },

    ADMIN: {
      label: "Admin Dashboard",
      url: "/admin-dashboard",
    },
  };

  const dashboard =
    role && role in dashboardItem
      ? dashboardItem[role as keyof typeof dashboardItem]
      : null;

  return [
    ...(dashboard
      ? [
          {
            label: dashboard.label,
            url: dashboard.url,
            icon: LayoutDashboard,
          },
        ]
      : []),

    {
      label: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ];
};

/* =========================================================
   NAVBAR
========================================================= */

export const Navbar = ({
  className,

  user = null,

  menu = defaultMenuItems,

  auth = {
    login: {
      title: "Login",
      url: "/login",
    },

    signup: {
      title: "Register",
      url: "/register",
    },
  },
}: NavbarProps) => {
  const router = useRouter();

  /* =======================================================
     USER DATA
  ======================================================= */

  const isLoggedIn = user?.success === true && !!user?.data;

  const userName = user?.data?.name?.trim() || "User";

  const userEmail = user?.data?.email?.trim() || "";

  const userRole = user?.data?.role?.trim() || "USER";

  const profileImage = user?.data?.profileImage?.trim() || "";

  /* =======================================================
     USER INITIALS
  ======================================================= */

  const getInitials = (name?: string) => {
    if (!name?.trim()) {
      return "U";
    }

    return name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase();
  };

  const initials = getInitials(userName);

  /* =======================================================
     NAVIGATION
  ======================================================= */

  const handleNavigate = (url: string) => {
    router.push(url);
  };

  /* =======================================================
     LOGOUT
  ======================================================= */

  const handleLogout = async () => {
    try {
      await logout();

      toast.success("Logged out successfully!");

      router.push("/login");

      router.refresh();
    } catch (error) {
      console.error("Logout error:", error);

      toast.error("Failed to logout. Please try again.");
    }
  };

  /* =======================================================
     ROLE MENU
  ======================================================= */

  const userMenuItems = getUserMenuItems(userRole);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80",
        className,
      )}
    >
      <div className="container mx-auto px-4">
        {/* =================================================
            DESKTOP NAVBAR
        ================================================= */}

        <nav className="hidden h-16 items-center justify-between lg:flex">
          {/* LEFT SIDE */}

          <div className="flex items-center gap-8">
            {/* LOGO */}

            <Link
              href="/"
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
                <Wrench className="h-5 w-5" />
              </div>

              <span className="text-xl font-bold tracking-tight">
                FixIt
                <span className="text-primary">Now</span>
              </span>
            </Link>

            {/* NAVIGATION */}

            <NavigationMenu>
              <NavigationMenuList>
                {menu.map((item) => (
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
          </div>

          {/* RIGHT SIDE */}

          <div className="flex items-center gap-3">
            {/* THEME */}

            <ModeToggle />

            {/* =================================================
                LOGGED IN USER
            ================================================= */}

            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className="flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full border bg-muted transition-all hover:scale-105 hover:ring-2 hover:ring-primary/30 focus:outline-none"
                    aria-label="Open user menu"
                  >
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt={userName}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="text-sm font-semibold text-primary">
                        {initials}
                      </span>
                    )}
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="end"
                  sideOffset={8}
                  className="w-64"
                >
                  {/* USER INFO */}

                  <DropdownMenuLabel className="font-normal">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border bg-primary/10">
                        {profileImage ? (
                          <img
                            src={profileImage}
                            alt={userName}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <span className="text-sm font-semibold text-primary">
                            {initials}
                          </span>
                        )}
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold">
                          {userName}
                        </p>

                        {userEmail && (
                          <p className="truncate text-xs text-muted-foreground">
                            {userEmail}
                          </p>
                        )}

                        <span className="mt-1 inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase text-primary">
                          {userRole}
                        </span>
                      </div>
                    </div>
                  </DropdownMenuLabel>

                  <DropdownMenuSeparator />

                  {/* ROLE BASED MENU */}

                  {userMenuItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <DropdownMenuItem
                        key={item.url}
                        onClick={() => handleNavigate(item.url)}
                        className="cursor-pointer"
                      >
                        <Icon className="mr-2 h-4 w-4" />

                        <span>{item.label}</span>
                      </DropdownMenuItem>
                    );
                  })}

                  <DropdownMenuSeparator />

                  {/* LOGOUT */}

                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="cursor-pointer text-red-600 focus:bg-red-50 focus:text-red-600 dark:focus:bg-red-950/40"
                  >
                    <LogOut className="mr-2 h-4 w-4" />

                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              /* =================================================
                 GUEST
              ================================================= */

              <div className="flex items-center gap-2">
                <Button asChild variant="ghost" size="sm">
                  <Link href={auth.login.url}>{auth.login.title}</Link>
                </Button>

                <Button asChild size="sm">
                  <Link href={auth.signup.url}>{auth.signup.title}</Link>
                </Button>
              </div>
            )}
          </div>
        </nav>

        {/* =================================================
            MOBILE NAVBAR
        ================================================= */}

        <div className="flex h-16 items-center justify-between lg:hidden">
          {/* MOBILE LOGO */}

          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
              <Wrench className="h-5 w-5" />
            </div>

            <span className="text-xl font-bold tracking-tight">
              FixIt
              <span className="text-primary">Now</span>
            </span>
          </Link>

          {/* MOBILE MENU */}

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="flex w-[300px] flex-col overflow-y-auto sm:w-[360px]"
            >
              {/* SHEET HEADER */}

              <SheetHeader className="text-left">
                <SheetTitle>
                  <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <Wrench className="h-5 w-5" />
                    </div>

                    <span className="text-xl font-bold tracking-tight">
                      FixIt
                      <span className="text-primary">Now</span>
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              {/* MOBILE CONTENT */}

              <div className="flex flex-1 flex-col gap-6 px-2 pt-6">
                {/* MOBILE NAVIGATION */}

                <nav className="flex flex-col gap-1">
                  {menu.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.title}
                        href={item.url}
                        className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors hover:bg-muted hover:text-primary"
                      >
                        {Icon && <Icon className="h-4 w-4" />}

                        <span>{item.title}</span>
                      </Link>
                    );
                  })}
                </nav>

                {/* APPEARANCE */}

                <div className="flex items-center justify-between border-y py-4">
                  <span className="text-sm font-medium text-muted-foreground">
                    Appearance
                  </span>

                  <ModeToggle />
                </div>

                {/* =================================================
                    MOBILE LOGGED USER
                ================================================= */}

                {isLoggedIn ? (
                  <div className="flex flex-col gap-3">
                    {/* USER INFO */}

                    <div className="flex items-center gap-3 rounded-xl bg-muted p-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border bg-primary/10">
                        {profileImage ? (
                          <img
                            src={profileImage}
                            alt={userName}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <span className="font-semibold text-primary">
                            {initials}
                          </span>
                        )}
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold">
                          {userName}
                        </p>

                        {userEmail && (
                          <p className="truncate text-xs text-muted-foreground">
                            {userEmail}
                          </p>
                        )}

                        <span className="mt-1 inline-flex rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase text-primary">
                          {userRole}
                        </span>
                      </div>
                    </div>

                    {/* ROLE MENU */}

                    <div className="flex flex-col gap-1">
                      {userMenuItems.map((item) => {
                        const Icon = item.icon;

                        return (
                          <Button
                            key={item.url}
                            variant="ghost"
                            className="w-full justify-start"
                            onClick={() => handleNavigate(item.url)}
                          >
                            <Icon className="mr-2 h-4 w-4" />

                            {item.label}
                          </Button>
                        );
                      })}
                    </div>

                    {/* LOGOUT */}

                    <Button
                      variant="destructive"
                      className="w-full justify-start"
                      onClick={handleLogout}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Log out
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline" className="w-full">
                      <Link href={auth.login.url}>{auth.login.title}</Link>
                    </Button>

                    <Button asChild className="w-full">
                      <Link href={auth.signup.url}>{auth.signup.title}</Link>
                    </Button>
                  </div>
                )}
              </div>

              {/* MOBILE FOOTER */}

              <div className="border-t px-2 pt-5 text-center">
                <p className="text-xs text-muted-foreground">
                  Your Trusted Home Service Platform
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  &copy; {new Date().getFullYear()} FixItNow
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
