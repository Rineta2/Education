'use client'

import "./globals.scss";

import dynamic from "next/dynamic";

const Header = dynamic(() => import('@/components/ui/Header/Header'), {
  loading: () => <p>Loading...</p>,
})

const Footer = dynamic(() => import('@/components/ui/Footer/Footer'), { ssr: false })

import Head from '@/app/head'

import { usePathname } from "next/navigation";

const disableNavbar = ['/pendaftaran']
const disableFooter = ['/pendaftaran']
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  return (
    <html lang="en">
      <Head />
      <body>
        {!disableNavbar.includes(pathname) && <Header />}
        {children}
        {!disableFooter.includes(pathname) && <Footer />}
      </body>
    </html>
  );
}
