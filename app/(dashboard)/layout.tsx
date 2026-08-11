import { AppSidebar } from "../../components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../../components/ui/sidebar";
import { TooltipProvider } from "../../components/ui/tooltip";
import { getMe } from "../../services/getMe";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getMe();

  // User authentication check
  if (!user?.success || !user.data) {
    return null;
  }

  const role = user.data.role;

  return (
    <TooltipProvider delayDuration={0}>
      <SidebarProvider>
        <AppSidebar
          role={role}
          user={{
            name: user.data.name,
            email: user.data.email,
            avatar: user.data.profileImage,
          }}
        />

        <SidebarInset>
          <header className="flex h-16 items-center border-b px-6">
            <SidebarTrigger />
          </header>

          <main className="p-6">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}
