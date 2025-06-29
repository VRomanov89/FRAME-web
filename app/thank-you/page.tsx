import Link from 'next/link'
import { CheckCircle, ArrowRight, BookOpen } from 'lucide-react'

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-frame-gray-50 to-white">
      <div className="container-custom py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          {/* Thank You Message */}
          <h1 className="text-4xl lg:text-5xl font-bold text-frame-gray-900 mb-6">
            Welcome to FRAME!
          </h1>
          
          <p className="text-xl text-frame-gray-600 mb-8 leading-relaxed">
            Thank you for subscribing to FRAME. You're now part of a community of manufacturing professionals 
            who are building the future of industrial operations.
          </p>

          {/* What's Next */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-frame-gray-200 mb-8">
            <h2 className="text-2xl font-bold text-frame-gray-900 mb-4">
              What's Next?
            </h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-frame-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-frame-gray-900">Check Your Email</h3>
                  <p className="text-frame-gray-600">You'll receive a welcome email with your first issue shortly.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-frame-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-frame-gray-900">Weekly Insights</h3>
                  <p className="text-frame-gray-600">Every week, you'll get tactical insights to improve your factory operations.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-frame-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-frame-gray-900">Join the Community</h3>
                  <p className="text-frame-gray-600">Connect with other manufacturing professionals on LinkedIn.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="btn-primary inline-flex items-center"
            >
              Back to Home
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a 
              href="https://www.linkedin.com/company/framexl"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center"
            >
              <BookOpen className="mr-2 w-5 h-5" />
              Follow on LinkedIn
            </a>
          </div>

          {/* Additional Info */}
          <p className="text-frame-gray-500 mt-8 text-sm">
            Can't find the email? Check your spam folder or 
            <a href="mailto:hello@frame.news" className="text-frame-blue hover:text-blue-700 ml-1">
              contact us
            </a>.
          </p>
        </div>
      </div>
    </div>
  )
} 