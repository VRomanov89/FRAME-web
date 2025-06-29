'use client'

import { useEffect, useState } from 'react'

const NewsletterEmbed = () => {
  const [embedLoaded, setEmbedLoaded] = useState(false)

  useEffect(() => {
    // Load Beehiiv embed script
    const script = document.createElement('script')
    script.src = 'https://cdn.beehiiv.com/embed.js'
    script.async = true
    script.onload = () => {
      const beehiiv = (window as any).beehiiv
      if (beehiiv) {
        beehiiv.init({
          publicationId: process.env.NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID || 'pub_placeholder',
          container: '#beehiiv-embed',
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
  }, [])

  return (
    <div className="w-full max-w-md mx-auto">
      <div id="beehiiv-embed" className="w-full" />
      {!embedLoaded && (
        <div className="bg-white rounded-lg p-6 shadow-lg mt-4">
          <h3 className="text-lg font-semibold text-frame-gray-900 mb-4">
            Subscribe to FRAME
          </h3>
          <p className="text-frame-gray-600 mb-4">
            Get weekly insights delivered to your inbox.
          </p>
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
          <p className="text-xs text-frame-gray-500 mt-3">
            No spam, unsubscribe at any time.
          </p>
        </div>
      )}
    </div>
  )
}

export default NewsletterEmbed 