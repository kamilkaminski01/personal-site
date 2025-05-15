import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Kamil Kamiński - Archive',
  description: 'Archive of projects developed or I contributed in',
  openGraph: {
    type: 'website',
    url: 'https://kamilkaminski.pl/archive',
    title: 'Kamil Kamiński - Archive',
    description: 'Archive of projects I developed or contributed in',
    siteName: 'Archive | Kamil Kamiński',
    images: 'https://kamilkaminski.pl/og.png'
  }
}

export default function ArchiveLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <>{children}</>
}
