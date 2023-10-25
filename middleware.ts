import { NextResponse, type NextRequest } from "next/server";
import * as jose from "jose";

export const config = {
  matcher: ["/products/:id/", "/products/create/", "/api/products"],
};

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const cookieStore = request.cookies;
  const isGetOfApi =
    request.nextUrl.pathname.startsWith("/api") && request.method === "GET";

  if (isGetOfApi) return NextResponse.next();

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
