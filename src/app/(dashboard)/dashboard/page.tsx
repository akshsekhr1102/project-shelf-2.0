import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart3, Globe } from "lucide-react";

export default async function DashboardPage() {
  const user = await currentUser();

  const fullName = user
    ? `${user.firstName || ""} ${user.lastName || ""}`.trim()
    : "Guest";

  return (
    <div className="h-full p-4 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Welcome back, {fullName}!</h2>
          <p className="text-muted-foreground">
            Here&apos;s an overview of your projects and activities
          </p>
        </div>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/dashboard/analytics">
              <BarChart3 className="w-4 h-4 mr-2" />
              View Analytics
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`/${user?.username}`} target="_blank">
              <Globe className="w-4 h-4 mr-2" />
              View Public Profile
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Portfolio Views</CardTitle>
            <CardDescription>Last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">--</div>
            <p className="text-xs text-muted-foreground">
              View detailed analytics for more insights
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Project Views</CardTitle>
            <CardDescription>Last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">--</div>
            <p className="text-xs text-muted-foreground">
              View detailed analytics for more insights
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Public Profile</CardTitle>
            <CardDescription>Visibility Status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Live</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Your portfolio is publicly accessible
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
