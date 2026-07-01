import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, type Locale } from "@/lib/i18n/dictionaries";

const DEFAULT_LOCALE: Locale = "en";
const COOKIE_NAME = "sd-lang";

function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as string[]).includes(value);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (pathnameHasLocale) return NextResponse.next();

  const cookieLocale = request.cookies.get(COOKIE_NAME)?.value;
  const locale = isLocale(cookieLocale) ? cookieLocale : DEFAULT_LOCALE;

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)",
  ],
};
