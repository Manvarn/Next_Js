import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname === "/login") {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/about/:path*", "/studentlist/:path*"],
};
