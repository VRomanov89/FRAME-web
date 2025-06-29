'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'

interface SignupPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function SignupPopup({ isOpen, onClose }: SignupPopupProps) {
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
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center p-6 border-b border-frame-gray-200">
          <h2 className="text-2xl font-bold text-frame-gray-900">Join FRAME Newsletter</h2>
          <button onClick={onClose} className="text-frame-gray-400 hover:text-frame-gray-600 transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6">
          <div className="mb-6">
            <p className="text-frame-gray-600 mb-4">
              Get weekly insights from manufacturing leaders who are transforming their operations. Join 1,000+ professionals already subscribed.
            </p>
          </div>
          <div id="beehiiv-popup-embed" className="w-full" />
        </div>
        <div className="p-6 border-t border-frame-gray-200">
          <button onClick={onClose} className="w-full text-frame-gray-500 hover:text-frame-gray-700 transition-colors">
            Maybe later
          </button>
        </div>
      </div>
    </div>
  )
} 