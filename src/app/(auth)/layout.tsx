import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication - Project Shelf",
  description: "Authentication pages for Project Shelf",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-background">{children}</div>;
}
