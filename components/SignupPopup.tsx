'use client'

import { useEffect, useState } from 'react'
import { X, CheckCircle, TrendingUp, Users, Target } from 'lucide-react'

interface SignupPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function SignupPopup({ isOpen, onClose }: SignupPopupProps) {
  const [embedLoaded, setEmbedLoaded] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    // Load Beehiiv embed script
    const script = document.createElement('script')
    script.src = 'https://cdn.beehiiv.com/embed.js'
    script.async = true
    script.onload = () => {
      const beehiiv = (window as any).beehiiv
      if (beehiiv) {
        beehiiv.init({
          publicationId: process.env.NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID || 'pub_placeholder',
          container: '#beehiiv-popup-embed',
          theme: 'dark',
          onSubscribe: () => {
            setTimeout(() => {
              window.location.href = '/thank-you'
            }, 1000)
          }
        })
        setEmbedLoaded(true)
      }
    }
    document.head.appendChild(script)
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-3xl flex flex-col md:flex-row overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
        {/* Left: Value Proposition */}
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-center bg-frame-gray-50">
          <div className="flex items-center mb-4">
            <CheckCircle className="w-8 h-8 text-frame-blue mr-2" />
            <h2 className="text-2xl font-bold text-frame-gray-900">Join FRAME Newsletter</h2>
          </div>
          <p className="text-frame-gray-600 mb-4">
            Get weekly insights from manufacturing leaders who are transforming their operations. Join 1,000+ professionals already subscribed.
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-center text-frame-gray-700"><TrendingUp className="w-5 h-5 text-frame-blue mr-2" /> Weekly tactical insights</li>
            <li className="flex items-center text-frame-gray-700"><Users className="w-5 h-5 text-frame-blue mr-2" /> Expert interviews & case studies</li>
            <li className="flex items-center text-frame-gray-700"><Target className="w-5 h-5 text-frame-blue mr-2" /> Actionable strategies for your factory</li>
          </ul>
          <p className="text-xs text-frame-gray-500">We respect your privacy. Unsubscribe at any time.</p>
        </div>
        {/* Right: Beehiiv Form */}
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-center relative bg-white">
          <button onClick={onClose} className="absolute top-4 right-4 text-frame-gray-400 hover:text-frame-gray-600 transition-colors"><X className="w-6 h-6" /></button>
          <div id="beehiiv-popup-embed" className="w-full" />
          {!embedLoaded && (
            <div className="bg-white rounded-lg p-6 shadow-lg mt-4">
              <h3 className="text-lg font-semibold text-frame-gray-900 mb-4">Subscribe to FRAME</h3>
              <form action={`https://api.beehiiv.com/v2/publications/${process.env.NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID}/subscriptions`} method="POST" className="space-y-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-frame-gray-300 rounded-lg focus:ring-2 focus:ring-frame-blue focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-frame-blue text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-frame-gray-500 mt-3">No spam, unsubscribe at any time.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 