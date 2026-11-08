import { NextResponse } from "next/server";

export function GET(request: Request) {
  const response = NextResponse.redirect(new URL("/auth/login", request.url));
  response.cookies.delete("token");
  return response;
}
