import {
  BriefcaseBusiness,
  CalendarCheck,
  Clock3,
  CreditCard,
  LayoutDashboard,
  Search,
  Settings,
  Star,
  Tags,
  UserRound,
  Users,
  Wrench,
} from "lucide-react";

export const sidebarConfig = {
  ADMIN: [
    {
      title: "Overview",
      url: "/admin-dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Users",
      url: "/admin-dashboard/users",
      icon: Users,
    },
    {
      title: "Technicians",
      url: "/admin-dashboard/technicians",
      icon: Wrench,
    },
    {
      title: "Categories",
      url: "/admin-dashboard/categories",
      icon: Tags,
    },
    {
      title: "Bookings",
      url: "/admin-dashboard/bookings",
      icon: CalendarCheck,
    },
    {
      title: "Payments",
      url: "/admin-dashboard/payments",
      icon: CreditCard,
    },
    {
      title: "Reviews",
      url: "/admin-dashboard/reviews",
      icon: Star,
    },
    {
      title: "My Profile",
      url: "/admin-dashboard/profile",
      icon: UserRound,
    },
    {
      title: "Settings",
      url: "/admin-dashboard/settings",
      icon: Settings,
    },
  ],

  TECHNICIAN: [
    {
      title: "Overview",
      url: "/technician-dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "My Profile",
      url: "/technician-dashboard/profile",
      icon: UserRound,
    },
    {
      title: "My Services",
      url: "/technician-dashboard/services",
      icon: BriefcaseBusiness,
    },
    {
      title: "Availability",
      url: "/technician-dashboard/availability",
      icon: Clock3,
    },
    {
      title: "Bookings",
      url: "/technician-dashboard/bookings",
      icon: CalendarCheck,
    },
    {
      title: "Reviews",
      url: "/technician-dashboard/reviews",
      icon: Star,
    },
    {
      title: "Settings",
      url: "/technician-dashboard/settings",
      icon: Settings,
    },
  ],

  CUSTOMER: [
    {
      title: "Overview",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Find Services",
      url: "/services",
      icon: Search,
    },
    {
      title: "My Bookings",
      url: "/dashboard/bookings",
      icon: CalendarCheck,
    },
    {
      title: "Payments",
      url: "/dashboard/payments",
      icon: CreditCard,
    },
    {
      title: "My Reviews",
      url: "/dashboard/reviews",
      icon: Star,
    },
    {
      title: "Profile",
      url: "/dashboard/profile",
      icon: UserRound,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings,
    },
  ],
} as const;
