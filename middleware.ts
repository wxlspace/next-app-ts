import type { NextFetchEvent, NextRequest } from 'next/server'
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
    const { cookies, url } = req
    if (req.nextUrl.pathname === '/member') {
        // console.log("cookies.get('access-token')?.value:",cookies.get('access-token')?.value)
        if(cookies.get('Authorization')?.value){
            // 请求后端验证token是否有效

            return NextResponse.next()
        }else{
            return NextResponse.redirect(new URL('/login', req.url))
        }
    }else if (req.nextUrl.pathname === '/login') {
        if(cookies.get('Authorization')?.value){
            return NextResponse.redirect(new URL('/member', req.url))
        }
    }
    // if (req.nextUrl.pathname === '/another') {
    //     return NextResponse.rewrite(new URL('/rewrite', req.url))
    // }
    return NextResponse.next()
}

// export const config = {
//     matcher: ['/member/:path*'],
// }