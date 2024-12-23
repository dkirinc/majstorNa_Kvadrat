import { updateSession } from "./app/utils/supabase/middleware"
import { NextResponse } from "next/server"

export async function middleware(request) {
    if (request.nextUrl.pathname.startsWith('/')) return NextResponse.next()
    return await updateSession(request)

}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        '/((?!api|_next/static|_next/image|auth|favicon.ico|robots.txt|images|$).*)',

    ],
}