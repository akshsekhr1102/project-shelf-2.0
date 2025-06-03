import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="mb-8">
        <Image
          src="/logo.png"
          alt="Project Shelf Logo"
          width={130}
          height={100}
          className="object-contain"
        />
      </div>
      <SignUp
        redirectUrl="/dashboard" // after login
        afterSignUpUrl="/onboarding" // after successful sign-up
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "bg-background border border-border shadow-lg",
            headerTitle: "text-foreground",
            headerSubtitle: "text-muted-foreground",
            socialButtonsBlockButton:
              "bg-background text-foreground border border-border hover:bg-muted",
            formButtonPrimary:
              "bg-primary text-primary-foreground hover:bg-primary/90",
            footerActionLink: "text-primary hover:text-primary/90",
          },
        }}
      />
    </div>
  );
}
