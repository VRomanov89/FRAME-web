'use client'

import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'

interface BeehiivPost {
  id: string
  title: string
  subtitle: string
  published_at: string
  reading_time: number
  slug: string
  url: string
}

const LatestIssue = () => {
  const [latestIssue, setLatestIssue] = useState<BeehiivPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLatestIssue = async () => {
      try {
        const response = await fetch('/api/latest-issue')
        if (response.ok) {
          const data = await response.json()
          setLatestIssue(data)
        }
      } catch (error) {
        console.error('Failed to fetch latest issue:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchLatestIssue()
  }, [])

  // Fallback data if API fails
  const fallbackIssue = {
    title: "The Hidden Costs of Legacy System Obsolescence",
    subtitle: "Why your aging control systems are costing more than you think, and how to build a realistic modernization roadmap that actually works.",
    published_at: new Date().toISOString(),
    reading_time: 8,
    url: "#"
  }

  const issue = latestIssue || fallbackIssue
  const publishDate = new Date(issue.published_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  if (loading) {
    return (
      <div className="bg-white border border-frame-gray-200 rounded-2xl p-8 shadow-sm">
        <div className="animate-pulse">
          <div className="h-4 bg-frame-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-8 bg-frame-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-frame-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-frame-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white border border-frame-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-2 text-frame-gray-500 text-sm">
          <Calendar className="h-4 w-4" />
          <span>{publishDate}</span>
          <span>•</span>
          <span>{issue.reading_time} min read</span>
        </div>
        <span className="bg-frame-blue/10 text-frame-blue px-3 py-1 rounded-full text-sm font-medium">
          Latest Issue
        </span>
      </div>
      
      <h3 className="text-2xl font-bold text-frame-gray-900 mb-4">
        {issue.title}
      </h3>
      
      <p className="text-frame-gray-600 mb-6 leading-relaxed">
        {issue.subtitle}
      </p>
      
      <Link 
        href={issue.url}
        className="inline-flex items-center text-frame-blue font-medium hover:text-blue-700 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read Full Issue
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  )
}

export default LatestIssue 