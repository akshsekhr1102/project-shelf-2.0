// app/onboarding/page.tsx
import { redirect } from "next/navigation";
import { createUserFromSignup } from "@/lib/create-user-from-signup";

export default async function OnboardingPage() {
  await createUserFromSignup();
  redirect("/dashboard"); // or wherever your app’s main page is
}
