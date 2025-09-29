// Middleware to protect routes like /admin.

/*
What this code does:

   1. Creates a Server-Side Supabase Client: The createServerClient is
      special. It runs on the server before a page is rendered and has
      access to the request cookies, allowing it to know who the user is.
   2. Refreshes the Session: Simply calling supabase.auth.getSession()
      will automatically keep the user's session active.
   3. Protects Routes: The if (!session && ...) block is our security
      guard. It checks if a user is trying to access any page under
      /admin. If they don't have a session (i.e., they aren't logged in),
      it redirects them to our new /login page.
   4. Matcher: The config object at the bottom tells Next.js to run this
      middleware on every request except for static files and images,
      which makes it very efficient.
 * */

import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

const middleware = async (reuqest: NextRequest) => {
  const response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({ name, value: "", ...options });
          response = NextResponse.next({ request });
          response.cookies.set({ name, value: "", ...options });
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({ name, value: "", ...options });
          response = NextResponse.next({ name, value: "", ...options });
          response.cookies.set({ name, valie: "", ...options });
        },
      },
    },
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();
  // If user is not signed in and the current path starts with /admin, redirect the user to /login
  if (!session && reuqest.nextUrl.pathname.startsWith("/admin")) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return response;
};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).)",
  ],
};

