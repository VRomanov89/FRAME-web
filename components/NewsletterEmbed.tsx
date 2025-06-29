'use client'

import { useEffect, useState } from 'react'

const NewsletterEmbed = () => {
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
    </div>
  )
}

export default NewsletterEmbed 