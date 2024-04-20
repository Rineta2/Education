import dynamic from 'next/dynamic'

const Home = dynamic(() => import('@/components/ui/Home'), { ssr: false })

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Education',
  description: 'Generated by create next app',
}

export default function page() {

  return (
    <Home />
  )
}