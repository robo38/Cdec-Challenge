import { jwtVerify } from "jose";

export async function verifyToken(token?: string) {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
    return payload.sub ?? null;
  } catch {
    return null;
  }
}
