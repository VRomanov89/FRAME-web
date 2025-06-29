import Link from 'next/link'
import { Mail, Linkedin, Twitter, Globe } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-frame-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-frame-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-xl font-bold">FRAME</span>
            </div>
            <p className="text-frame-gray-300 mb-6 max-w-md">
              Foundation for Reliability, Automation, Manufacturing & Excellence. 
              Weekly insights for manufacturing leaders and engineers.
            </p>
            <p className="text-frame-gray-300 mb-4">
              Tactical insights to grow your career and improve your factory, delivered weekly.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="mailto:hello@frame.news"
                className="text-frame-gray-300 hover:text-white transition-colors"
                title="Email FRAME"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/framexl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-frame-gray-300 hover:text-white transition-colors"
                title="Follow FRAME on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.framexl.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-frame-gray-300 hover:text-white transition-colors"
                title="Visit FRAME Website"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-frame-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-frame-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="text-frame-gray-300 hover:text-white transition-colors">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-frame-gray-300 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-frame-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-frame-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-frame-gray-800 mt-8 pt-8 text-center text-frame-gray-400">
          <p>&copy; {currentYear} FRAME - Foundation for Reliability, Automation, Manufacturing & Excellence. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 