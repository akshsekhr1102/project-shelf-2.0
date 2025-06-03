"use server"

import { PrismaClient } from "@prisma/client"
import { currentUser } from "@clerk/nextjs/server"

const prisma = new PrismaClient()

export const createUserFromSignup = async () => {
  const ClerkUser = await currentUser()

  if (!ClerkUser) {
    throw new Error("No user found from Clerk.")
  }

  const userDetails = {
    id: ClerkUser.id, // Clerk's user ID goes into `id`
    email: ClerkUser.emailAddresses[0]?.emailAddress || "",
    firstName: ClerkUser.firstName || null,
    lastName: ClerkUser.lastName || null,
    imageUrl: ClerkUser.imageUrl || null,
  }

  // Check if user already exists
  const existing = await prisma.user.findUnique({
    where: { id: userDetails.id },
  })

  if (!existing) {
    const newUser = await prisma.user.create({
      data: userDetails,
    })

    return newUser
  }

  return existing
}
