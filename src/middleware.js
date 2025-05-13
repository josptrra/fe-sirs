import { NextResponse } from 'next/server';

export function middleware(request) {
  const jwt = request.cookies.get('jwt')?.value;
  const pathname = request.nextUrl.pathname;

  const protectedRoutes = ['/pasien', '/doctor'];

  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!jwt) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/pasien/:path*', '/doctor/:path*'],
};
