import type { ReactNode } from 'react'
import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import 'assets/styles/globals.scss'
import MouseGradient from 'components/atoms/MouseGradient'

export const metadata: Metadata = {
  title: 'Kamil Kamiński - Software Engineer',
  description: 'Full Stack Developer in Python & React',
  robots: 'index, follow',
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    url: 'https://kamilkaminski.pl',
    title: 'Kamil Kamiński - Software Engineer',
    description: 'Full Stack Developer in Python & React',
    siteName: 'Kamil Kamiński - Software Engineer',
    images: 'https://kamilkaminski.pl/og.png'
  },
  twitter: {
    card: 'summary_large_image',
    images: 'https://kamilkaminski.pl/og.png'
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-48x48.png', type: 'image/png', sizes: '48x48' },
      { url: '/favicon-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/favicon-512x512.png', type: 'image/png', sizes: '512x512' }
    ],
    apple: [{ url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' }]
  }
}

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <Analytics />
      <SpeedInsights />
      <body>
        <MouseGradient />
        {children}
      </body>
    </html>
  )
}
