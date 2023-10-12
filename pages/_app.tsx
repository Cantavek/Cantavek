import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { Toaster } from "@/components/ui/toaster"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import BaseHead from '@/components/BaseHead';

export default function App({ Component, pageProps}: AppProps) {

  return (
    <BaseHead>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
        <Toaster />
      </SessionProvider>
    </BaseHead>
  )
}
