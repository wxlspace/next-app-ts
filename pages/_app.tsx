import '@/styles/global.css'
import type { AppProps } from 'next/app'
import { Suspense } from 'react'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Suspense fallback={<div>loading...</div>}><Component {...pageProps} /></Suspense>
  </>
}