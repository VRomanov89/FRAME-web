import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/next'
import PopupProvider from '@/components/PopupProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="min-h-screen flex flex-col">
          <PopupProvider>
            {children}
          </PopupProvider>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
} 