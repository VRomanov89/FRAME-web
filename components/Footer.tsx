import Link from 'next/link'
import { Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-frame-gray-200 py-12 mt-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/frame-logo.png" alt="FRAME" className="h-8 w-auto" />
            </div>
            <p className="text-frame-gray-600 mb-4 max-w-md">
              Foundation for Reliability, Automation, Manufacturing & Excellence. 
              Tactical insights to grow your career and improve your factory.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/framexl" target="_blank" rel="noopener noreferrer" className="text-frame-gray-500 hover:text-frame-blue">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/framexl" target="_blank" rel="noopener noreferrer" className="text-frame-gray-500 hover:text-frame-blue">
                <span className="sr-only">Twitter</span>
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-frame-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-frame-gray-600 hover:text-frame-blue">Home</Link></li>
              <li><Link href="/about" className="text-frame-gray-600 hover:text-frame-blue">About</Link></li>
              <li><Link href="/newsletter" className="text-frame-gray-600 hover:text-frame-blue">Newsletter</Link></li>
              <li><Link href="/team" className="text-frame-gray-600 hover:text-frame-blue">Team</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-frame-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-frame-gray-600 hover:text-frame-blue">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-frame-gray-600 hover:text-frame-blue">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-frame-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-frame-gray-500 text-sm">
            © {new Date().getFullYear()} FRAME. All rights reserved.
          </div>
          <div className="text-frame-gray-500 text-sm">
            Made with ❤️ for manufacturing professionals
          </div>
        </div>
      </div>
    </footer>
  )
} 