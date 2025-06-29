import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

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

async function getIssues() {
  const publicationId = process.env.NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID
  const apiKey = process.env.BEEHIIV_API_KEY
  if (!publicationId || !apiKey) return []
  const res = await fetch(`https://api.beehiiv.com/v2/publications/${publicationId}/posts?expand=free_web_content&limit=100`, {
    headers: { Authorization: `Bearer ${apiKey}` },
    next: { revalidate: 60 },
  })
  if (!res.ok) return []
  const data = await res.json()
  return data.data || []
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
          </div>
        </div>
      </section>

      {/* Featured Issue */}
      {featured && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-frame-gray-900 mb-8">Latest Issue</h2>
              <div className="bg-frame-gray-50 border border-frame-gray-200 rounded-2xl p-8 shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2 text-frame-gray-500 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{getDisplayDate(featured)}</span>
                    <span>•</span>
                    <Clock className="h-4 w-4" />
                    <span>{featured.reading_time ? `${featured.reading_time} min read` : '5 min read'}</span>
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
        </section>
      )}

      {/* All Issues */}
      <section className="section-padding bg-frame-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-frame-gray-900 mb-12 text-center">All Issues</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {others.map((issue: any) => (
                <div key={issue.id} className="bg-white border border-frame-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-2 text-frame-gray-500 text-sm mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>{getDisplayDate(issue)}</span>
                    <span>•</span>
                    <Clock className="h-4 w-4" />
                    <span>{issue.reading_time ? `${issue.reading_time} min read` : '5 min read'}</span>
                  </div>
                  <h3 className="text-xl font-bold text-frame-gray-900 mb-3">
                    {issue.title}
                  </h3>
                  <p className="text-frame-gray-600 mb-4 leading-relaxed">
                    {issue.preview_text || issue.excerpt}
                  </p>
                  <Link 
                    href={`/posts/${issue.slug}`}
                    className="inline-flex items-center text-frame-blue font-medium hover:text-blue-700 transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 