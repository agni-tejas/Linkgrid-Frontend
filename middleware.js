import { NextResponse } from "next/server";

export function middleware(request) {
  const { hostname } = request.nextUrl;

  // Detect subdomain (e.g., "auth" from "auth.localhost")
  const subdomain = hostname.split(".")[0];

  if (subdomain === "auth") {
    // Rewrite requests to serve from the /auth folder
    return NextResponse.rewrite(
      new URL(`/auth${request.nextUrl.pathname}`, request.url)
    );
  }

  return NextResponse.next();
}
