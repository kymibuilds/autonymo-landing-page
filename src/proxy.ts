import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match root
    "/",
    // Match all locale-prefixed pathnames
    "/(en|es|de|ca)/:path*",
    // Match all pathnames except for api, _next, static files, images
    "/((?!api|_next|_vercel|images|Logo\\ Images|.*\\..*).*)",
  ],
};
