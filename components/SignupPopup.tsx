'use client'

import { useState, useEffect } from 'react'
import { X, Mail, TrendingUp, Users, Target } from 'lucide-react'

interface SignupPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function SignupPopup({ isOpen, onClose }: SignupPopupProps) {
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

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal */}
        <div 
          className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-frame-gray-200">
            <h2 className="text-2xl font-bold text-frame-gray-900">
              Join FRAME Newsletter
            </h2>
            <button
              onClick={onClose}
              className="text-frame-gray-400 hover:text-frame-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {!isSuccess ? (
              <>
                {/* Value Proposition */}
                <div className="mb-6">
                  <p className="text-frame-gray-600 mb-4">
                    Get weekly insights from manufacturing leaders who are transforming their operations. 
                    Join 1,000+ professionals already subscribed.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-5 h-5 text-frame-blue" />
                      <span className="text-sm text-frame-gray-700">Weekly tactical insights</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-frame-blue" />
                      <span className="text-sm text-frame-gray-700">Expert interviews & case studies</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Target className="w-5 h-5 text-frame-blue" />
                      <span className="text-sm text-frame-gray-700">Actionable strategies for your factory</span>
                    </div>
                  </div>
                </div>

                {/* Signup Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-frame-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-frame-gray-400" />
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-frame-gray-300 rounded-lg focus:ring-2 focus:ring-frame-blue focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe to FRAME'}
                  </button>
                </form>

                {/* Privacy Note */}
                <p className="text-xs text-frame-gray-500 mt-4 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-frame-gray-900 mb-2">
                  Welcome to FRAME!
                </h3>
                <p className="text-frame-gray-600">
                  Redirecting you to your welcome page...
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-frame-gray-200">
            <button
              onClick={onClose}
              className="w-full text-frame-gray-500 hover:text-frame-gray-700 transition-colors"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </>
  )
} 