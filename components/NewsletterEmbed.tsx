'use client'

import { useEffect } from 'react'

// Extend the Window interface to include beehiiv
declare global {
  interface Window {
    beehiiv?: {
      init: (config: {
        publicationId: string;
        container: string;
        theme?: string;
      }) => void;
    };
  }
}

const NewsletterEmbed = () => {
  useEffect(() => {
    // Load Beehiiv embed script
    const script = document.createElement('script')
    script.src = 'https://cdn.beehiiv.com/embed.js'
    script.async = true
    script.onload = () => {
      // Initialize the embed after script loads
      if (window.beehiiv) {
        window.beehiiv.init({
          publicationId: 'pub_placeholder', // Replace with actual publication ID
          container: '#beehiiv-embed',
          theme: 'dark'
        })
      }
    }
    document.head.appendChild(script)

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="w-full max-w-md mx-auto">
      <div id="beehiiv-embed" className="w-full">
        {/* Fallback form if Beehiiv embed fails to load */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-frame-gray-900 mb-4">
            Subscribe to FRAME
          </h3>
          <p className="text-frame-gray-600 mb-4">
            Get weekly insights delivered to your inbox.
          </p>
          <form className="space-y-4">
            <input
              type="email"
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
          <p className="text-xs text-frame-gray-500 mt-3">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  )
}

export default NewsletterEmbed 