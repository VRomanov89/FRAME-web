import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SignupPopup from '@/components/SignupPopup'
import { Analytics } from '@vercel/analytics/next'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FRAME Dispatch',
  description: 'Foundation for Reliability, Automation, Manufacturing & Excellence - Tactical insights to grow your career and improve your factory, delivered weekly.',
  keywords: 'manufacturing, automation, operations, engineering, plant management, industrial, newsletter',
  authors: [{ name: 'Vladimir Romanov' }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'FRAME - Foundation for Reliability, Automation, Manufacturing & Excellence',
    description: 'Weekly insights for manufacturing leaders and engineers',
    type: 'website',
    images: [
      {
        url: '/frame-logo.png',
        width: 500,
        height: 500,
        alt: 'FRAME Logo',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
        <SignupPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
      </body>
    </html>
  )
} 