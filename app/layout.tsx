import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FRAME - Foundation for Reliability, Automation, Manufacturing & Excellence',
  description: 'FRAME is a weekly publication and professional community exploring the challenges and opportunities in modern manufacturing. We offer in-depth operational insights, strategic thinking, and real-world stories for engineers, plant managers, and manufacturing leaders.',
  keywords: 'manufacturing, automation, operations, engineering, plant management, industrial, newsletter',
  authors: [{ name: 'Vladimir Romanov' }],
  openGraph: {
    title: 'FRAME - Foundation for Reliability, Automation, Manufacturing & Excellence',
    description: 'Weekly insights for manufacturing leaders and engineers',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 