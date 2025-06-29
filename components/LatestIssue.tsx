import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'

const LatestIssue = () => {
  // Placeholder data - replace with actual API call to Beehiiv
  const latestIssue = {
    title: "The Hidden Costs of Legacy System Obsolescence",
    excerpt: "Why your aging control systems are costing more than you think, and how to build a realistic modernization roadmap that actually works.",
    publishDate: "December 15, 2024",
    readTime: "8 min read",
    url: "#"
  }

  return (
    <div className="bg-white border border-frame-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-2 text-frame-gray-500 text-sm">
          <Calendar className="h-4 w-4" />
          <span>{latestIssue.publishDate}</span>
          <span>•</span>
          <span>{latestIssue.readTime}</span>
        </div>
        <span className="bg-frame-blue/10 text-frame-blue px-3 py-1 rounded-full text-sm font-medium">
          Latest Issue
        </span>
      </div>
      
      <h3 className="text-2xl font-bold text-frame-gray-900 mb-4">
        {latestIssue.title}
      </h3>
      
      <p className="text-frame-gray-600 mb-6 leading-relaxed">
        {latestIssue.excerpt}
      </p>
      
      <Link 
        href={latestIssue.url}
        className="inline-flex items-center text-frame-blue font-medium hover:text-blue-700 transition-colors"
      >
        Read Full Issue
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  )
}

export default LatestIssue 