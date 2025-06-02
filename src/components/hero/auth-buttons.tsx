"use client";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AuthButtons() {
  return (
    <>
      <SignedIn>
        <Button asChild size="lg">
          <Link href={{ pathname: "/dashboard" }}>
            <span className="text-nowrap">Go to Dashboard</span>
          </Link>
        </Button>
      </SignedIn>
      <SignedOut>
        <Button asChild size="lg">
          <Link href={{ pathname: "/signup" }}>
            <span className="text-nowrap">Get Started</span>
          </Link>
        </Button>
      </SignedOut>
    </>
  );
} 