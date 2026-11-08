import { NextResponse, type NextRequest } from "next/server";
import { verifyToken } from "@/lib/server/verifyToken";

export async function proxy(request: NextRequest) {

  const userId = await verifyToken(request.cookies.get("token")?.value);

  const onAuthPage = request.nextUrl.pathname.startsWith("/auth");

  if (!userId && !onAuthPage) return NextResponse.redirect(new URL("/auth/login", request.url));

  if (userId && onAuthPage) return NextResponse.redirect(new URL("/", request.url));
  
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/auth/:path*"],
};
