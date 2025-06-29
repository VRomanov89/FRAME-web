import Link from 'next/link'
import { Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-frame-gray-200 py-8 mt-12">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-frame-gray-500 text-sm">
          © {new Date().getFullYear()} FRAME - Foundation for Reliability, Automation, Manufacturing & Excellence. All rights reserved.
        </div>
        <div className="flex gap-6 items-center mt-2 md:mt-0">
          <Link href="/privacy" className="text-frame-gray-500 hover:text-frame-blue text-sm">Privacy Policy</Link>
          <Link href="/terms" className="text-frame-gray-500 hover:text-frame-blue text-sm">Terms of Service</Link>
          <a href="https://www.linkedin.com/company/framexl" target="_blank" rel="noopener noreferrer" className="text-frame-gray-500 hover:text-frame-blue">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
} 