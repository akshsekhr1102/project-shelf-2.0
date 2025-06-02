import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Sidebar from "@/components/dashboard/sidebar";

async function DashboardLayoutServer({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session.userId) {
    redirect("/login");
  }

  return (
    <div className="relative h-screen">
      <div className="flex h-full">
        <Sidebar />
        <main className="flex-1 overflow-y-auto pt-8 px-8">{children}</main>
      </div>
    </div>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayoutServer>{children}</DashboardLayoutServer>;
}
