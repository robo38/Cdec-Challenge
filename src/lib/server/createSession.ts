import { cookies } from "next/headers";
import { signToken } from "@/lib/server/signToken";

export async function createSession(userId: string) {
  const store = await cookies();
  store.set("token", await signToken(userId), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.COOKIE_SECURE === "true",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
}
