import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LayoutDashboard } from "lucide-react";

export default function DashboardNotFound() {
  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl text-muted-foreground mb-8">
        This dashboard page doesn&apos;t exist
      </p>
      <Button asChild>
        <Link href="/dashboard">
          <LayoutDashboard className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Link>
      </Button>
    </div>
  );
}
