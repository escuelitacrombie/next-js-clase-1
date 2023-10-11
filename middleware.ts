import { NextResponse, type NextRequest } from "next/server";
import * as jose from "jose";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    const response = NextResponse.next();
    const cookieStore = request.cookies;
    try {
      const token = cookieStore.get("token")?.value;

      if (!token) {
        throw Error("need token");
      }

      const secret = new TextEncoder().encode(process.env.AUTH_SECRET);

      await jose.jwtVerify(token, secret);

      return response;
    } catch (err) {
      return NextResponse.redirect(new URL("/auth/sign-in", request.url));
    }
  }
}
