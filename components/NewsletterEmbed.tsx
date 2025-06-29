'use client'

import { useEffect, useState } from 'react'

const NewsletterEmbed = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe')
      }

      setIsSuccess(true)
      setTimeout(() => {
        window.location.href = '/thank-you'
      }, 2000)
    } catch (error) {
      console.error('Subscription error:', error)
      alert('There was an error subscribing. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    // Load Beehiiv embed script
    const script = document.createElement('script')
    script.src = 'https://cdn.beehiiv.com/embed.js'
    script.async = true
    script.onload = () => {
      // Initialize the embed after script loads
      const beehiiv = (window as any).beehiiv
      if (beehiiv) {
        beehiiv.init({
          publicationId: process.env.NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID || 'pub_placeholder',
          container: '#beehiiv-embed',
          theme: 'dark',
          onSubscribe: (email: string) => {
            // Redirect to thank you page after successful subscription
            setTimeout(() => {
              window.location.href = '/thank-you'
            }, 1000)
          }
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
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-frame-gray-300 rounded-lg focus:ring-2 focus:ring-frame-blue focus:border-transparent"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-frame-blue text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-green-600 font-medium">Successfully subscribed!</p>
              <p className="text-frame-gray-500 text-sm">Redirecting to welcome page...</p>
            </div>
          )}
          <p className="text-xs text-frame-gray-500 mt-3">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  )
}

export default NewsletterEmbed 