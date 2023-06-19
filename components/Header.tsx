import { useState, useEffect } from "react"
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { store, authSlice } from '@/store';
import { profile } from "@/utils/api"
import { setToken, removeToken } from "@/utils/cookie"

export default function Header(props: any) {
    const { seo } = props
    const router = useRouter()
    const [userInfo,setUserInfo] = useState({})
    useEffect(() => {
        profile({ }).then(res => {
            if(res.code == 200){
                setUserInfo(res.data)
                store.dispatch(authSlice.actions.setUser(res.data.account))
            }
        })

    }, [])

    const handleLogout = () => {
        removeToken()
        setUserInfo({})
        router.push("/")
        // store.dispatch(authSlice.actions.clearUser())
    }

    return (
        <>
            <Head>
                <title>{seo.title || 'Next.js App'}</title>
                <meta name="description" content={seo.description || ''} />
                <meta name="keywords" content={seo.keywords || ''} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="page-box-marg header-box">
                <div className="logo-box">Logo</div>
                <ul className="header-menu-box">
                    <li><Link href="/">首页</Link></li>
                    <li><Link href="/news">新闻</Link></li>
                </ul>
                <div className="user-box">
                    {/* {
                        store.getState().auth.isAuthenticated?
                        <>
                            {store.getState().auth.user}
                            <div onClick={handleLogout}>退出</div>
                        </>
                        :
                        <>
                            <Link href="/login">登录</Link>
                            <Link href="/register">注册</Link>
                        </>
                    } */}
                    
                    {
                        userInfo && userInfo.account?
                        <>
                            {userInfo.account}
                            <div onClick={handleLogout}>退出</div>
                        </>
                        :
                        <>
                            <Link href="/login">登录</Link>
                            <Link href="/register">注册</Link>
                        </>
                    }
                    
                </div>
            </div>
        </>

    )
}