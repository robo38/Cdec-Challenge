import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/server/prisma";
import { verifyToken } from "@/lib/server/verifyToken";

export async function getUser() {
  const store = await cookies();
  const userId = await verifyToken(store.get("token")?.value);

  const user = userId ? await prisma.user.findUnique({
    where: {
      id: userId
    },
    select: {
      fullName: true,
      email: true,
      phone: true,
      createdAt: true
    },
  }) : null;

  if (!user) redirect("/api/auth/logout");
  return user;
}
