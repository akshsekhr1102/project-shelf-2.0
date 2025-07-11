"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Sparkle } from "lucide-react";
import AuthButtons from "./hero/auth-buttons";

export default function HeroSection() {
  return (
    <main className="bg-black/20 min-h-screen ">
      <section className="before:bg-muted  border-e-foreground relative overflow-hidden before:absolute before:inset-1 before:h-[calc(100%-8rem)] before:rounded-2xl sm:before:inset-2 md:before:rounded-[2rem] lg:before:h-[calc(100%-14rem)]">
        <div className="py-20 md:py-36 min-h-screen">
          <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
            <div>
              <Link
                href={{ pathname: "#" }}
                className="hover:bg-foreground/5 mx-auto flex w-fit items-center justify-center gap-2 rounded-md py-0.5 pl-1 pr-3 transition-colors duration-150"
              >
                <div
                  aria-hidden
                  className="border-background bg-linear-to-b dark:inset-shadow-2xs to-foreground from-primary relative flex size-5 items-center justify-center rounded border shadow-md shadow-black/20 ring-1 ring-black/10"
                >
                  <div className="absolute inset-x-0 inset-y-1.5 border-y border-dotted border-white/25"></div>
                  <div className="absolute inset-x-1.5 inset-y-0 border-x border-dotted border-white/25"></div>
                  <Sparkle className="size-3 fill-white stroke-white drop-shadow" />
                </div>
                <span className="font-medium">Build with Project Shelf</span>
              </Link>
              <h1 className="mx-auto mt-8 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
                Your Project Management Journey Starts Here
              </h1>
              <p className="text-muted-foreground mx-auto my-6 max-w-xl text-balance text-xl">
                Organize, Track, and Deliver Projects with Unmatched Efficiency
              </p>

              <div className="flex items-center justify-center gap-3">
                <AuthButtons />
                <Button asChild size="lg" variant="outline">
                  <Link href={{ pathname: "#features" }}>
                    <span className="text-nowrap">Learn More</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 mx-auto max-w-5xl px-6">
              <div className="mt-12 md:mt-16">
                <div className="bg-background rounded-2xl relative mx-auto overflow-hidden border border-transparent shadow-lg shadow-black/10 ring-1 ring-black/10">
                  <Image
                    src="/logo.png"
                    alt="Project Shelf Dashboard Preview"
                    width={2880}
                    height={1842}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
