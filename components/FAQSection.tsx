'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQ[]
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="bg-frame-gray-50 rounded-2xl p-8 my-12">
      <h2 className="text-3xl font-bold text-frame-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-xl border border-frame-gray-200 overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-frame-gray-50 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-semibold text-frame-gray-900">{faq.question}</span>
              {openIndex === index ? 
                <ChevronUp className="w-5 h-5 text-frame-blue flex-shrink-0" /> : 
                <ChevronDown className="w-5 h-5 text-frame-blue flex-shrink-0" />
              }
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-frame-gray-700">
                <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}