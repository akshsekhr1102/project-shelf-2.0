"use server"

import { currentUser } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"

export const createUserFromSignup = async () => {
    const ClerkUser = await currentUser()

    if (!ClerkUser) {
        throw new Error("No user found from Clerk.")
    }

    const userDetails = {
        id: ClerkUser.id,
        email: ClerkUser.emailAddresses[0]?.emailAddress ?? "",
        firstName: ClerkUser.firstName ?? null,
        lastName: ClerkUser.lastName ?? null,
        imageUrl: ClerkUser.imageUrl ?? null,
    }

    const existing = await prisma.user.findUnique({
        where: { id: userDetails.id },
    })

    if (!existing) {
        await prisma.user.create({ data: userDetails })
    }
}
