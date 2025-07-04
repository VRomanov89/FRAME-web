import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import NewsletterEmbed from '@/components/NewsletterEmbed'
import Image from 'next/image'

function getDisplayDate(issue: any) {
  const dateFields = ['publish_date', 'displayed_date', 'created']
  for (const field of dateFields) {
    if (issue[field]) {
      const parsed = new Date(issue[field] * 1000)
      if (!isNaN(parsed.getTime())) {
        return parsed.toLocaleDateString()
      }
    }
  }
  return 'Unpublished'
}

function getReadingTime(issue: any) {
  if (issue.reading_time && typeof issue.reading_time === 'number' && issue.reading_time > 0) {
    return `${issue.reading_time} min read`
  }
  return null
}

async function getIssues() {
  const publicationId = process.env.NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID
  const apiKey = process.env.BEEHIIV_API_KEY
  if (!publicationId || !apiKey) return []
  const res = await fetch(`https://api.beehiiv.com/v2/publications/${publicationId}/posts?expand=free_web_content&limit=100&status=published`, {
    headers: { Authorization: `Bearer ${apiKey}` },
    next: { revalidate: 60 },
  })
  if (!res.ok) return []
  const data = await res.json()
  
  // Sort issues by publish_date in descending order (newest first)
  const issues = data.data || []
  return issues.sort((a: any, b: any) => {
    const dateA = a.publish_date || a.displayed_date || a.created || 0
    const dateB = b.publish_date || b.displayed_date || b.created || 0
    return dateB - dateA
  })
}

export default async function Newsletter() {
  const issues = await getIssues()
  const featured = issues[0]
  const others = issues.slice(1)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-frame-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-frame-gray-900 mb-6">
              The FRAME Dispatch
            </h1>
            <p className="text-xl lg:text-2xl text-frame-gray-600 leading-relaxed mb-8">
              Weekly insights, strategic thinking, and real-world stories for manufacturing leaders.
            </p>
            <div className="max-w-md mx-auto mt-8">
              <NewsletterEmbed />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Issue */}
      {featured && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-frame-gray-900 mb-8">Latest Issue</h2>
              <div className="bg-frame-gray-50 border border-frame-gray-200 rounded-2xl overflow-hidden shadow-sm">
                {/* Featured Image */}
                {featured.image_url && (
                  <div className="relative h-64 w-full">
                    <Image
                      src={featured.image_url}
                      alt={featured.title}
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
                      <span>{getDisplayDate(featured)}</span>
                      {getReadingTime(featured) && (
                        <>
                          <span>•</span>
                          <Clock className="h-4 w-4" />
                          <span>{getReadingTime(featured)}</span>
                        </>
                      )}
                    </div>
                    <span className="bg-frame-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-frame-gray-900 mb-4">
                    {featured.title}
                  </h3>
                  <p className="text-lg text-frame-gray-600 mb-6 leading-relaxed">
                    {featured.preview_text || featured.excerpt}
                  </p>
                  <Link 
                    href={`/posts/${featured.slug}`}
                    className="inline-flex items-center text-frame-blue font-medium hover:text-blue-700 transition-colors text-lg"
                  >
                    Read Full Issue
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Issues */}
      <section className="section-padding bg-frame-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-frame-gray-900 mb-12 text-center">All Issues</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {others.map((issue: any) => (
                <div key={issue.id} className="group bg-white border border-frame-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:bg-frame-gray-900 hover:border-frame-gray-700 cursor-pointer">
                  {/* Issue Image */}
                  {issue.image_url && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={issue.image_url}
                        alt={issue.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-frame-gray-500 group-hover:text-frame-gray-300 text-sm mb-4 transition-colors">
                      <Calendar className="h-4 w-4" />
                      <span>{getDisplayDate(issue)}</span>
                      {getReadingTime(issue) && (
                        <>
                          <span>•</span>
                          <Clock className="h-4 w-4" />
                          <span>{getReadingTime(issue)}</span>
                        </>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-frame-gray-900 group-hover:text-white mb-3 transition-colors">
                      {issue.title}
                    </h3>
                    <p className="text-frame-gray-600 group-hover:text-frame-gray-300 mb-4 leading-relaxed transition-colors">
                      {issue.preview_text || issue.excerpt}
                    </p>
                    <Link 
                      href={`/posts/${issue.slug}`}
                      className="inline-flex items-center text-frame-blue group-hover:text-frame-blue-300 font-medium hover:text-blue-700 transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 