'use client'

import Link from 'next/link'
import { Calendar, ArrowRight, Clock } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'

interface BeehiivPost {
  id: string
  title: string
  preview_text: string
  publish_date: number
  reading_time?: number
  slug: string
  image_url?: string
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
    preview_text: "Why your aging control systems are costing more than you think, and how to build a realistic modernization roadmap that actually works.",
    publish_date: Math.floor(Date.now() / 1000),
    reading_time: undefined,
    slug: "",
    image_url: undefined
  }

  const issue = latestIssue || fallbackIssue
  let publishDate = 'Unpublished'
  if (issue.publish_date) {
    const parsed = new Date(issue.publish_date * 1000)
    if (!isNaN(parsed.getTime())) {
      publishDate = parsed.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }

  // Check if reading time is valid
  const hasValidReadingTime = issue.reading_time && typeof issue.reading_time === 'number' && issue.reading_time > 0

  if (loading) {
    return (
      <div className="bg-white border border-frame-gray-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="animate-pulse">
          <div className="h-48 bg-frame-gray-200"></div>
          <div className="p-8">
            <div className="h-4 bg-frame-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-8 bg-frame-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-frame-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-frame-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white border border-frame-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Issue Image */}
      {issue.image_url && (
        <div className="relative h-64 w-full">
          <Image
            src={issue.image_url}
            alt={issue.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-2 text-frame-gray-500 text-sm">
            <Calendar className="h-4 w-4" />
            <span>{publishDate}</span>
            {hasValidReadingTime && (
              <>
                <span>•</span>
                <Clock className="h-4 w-4" />
                <span>{issue.reading_time} min read</span>
              </>
            )}
          </div>
          <span className="bg-frame-blue/10 text-frame-blue px-3 py-1 rounded-full text-sm font-medium">
            Latest Issue
          </span>
        </div>
        
        <h3 className="text-2xl font-bold text-frame-gray-900 mb-4">
          {issue.title}
        </h3>
        
        <p className="text-frame-gray-600 mb-6 leading-relaxed">
          {issue.preview_text}
        </p>
        
        {issue.slug ? (
          <Link 
            href={`/posts/${issue.slug}`}
            className="inline-flex items-center text-frame-blue font-medium hover:text-blue-700 transition-colors"
          >
            Read Full Issue
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        ) : null}
      </div>
    </div>
  )
}

export default LatestIssue 