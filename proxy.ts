import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from "@/modules/auth/lib/auth";

const protectedRoutes = ["/dashboard"];
const publicRoutes = ["/auth/login"];

export const authValidation = async (originalRequest: NextRequest): Promise<NextResponse | null> => {
    const pathname = originalRequest.nextUrl.pathname;
    const session = await auth();

    const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));
    const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route));

    if (isProtectedRoute && !session) {
        return NextResponse.redirect(new URL("/auth/login", originalRequest.url));
    }


    if (isPublicRoute && session) {
        return NextResponse.redirect(new URL("/dashboard", originalRequest.url));
    }

    return null;
}

export const proxy = async (originalRequest: NextRequest) => {
  
    const authResponse = await authValidation(originalRequest);
    if (authResponse) return authResponse;

    return NextResponse.next();

}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|js|css|images|fonts|icons|public|animated-bgs).*)",
  ],
};

