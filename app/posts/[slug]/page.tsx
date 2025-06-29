import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface BeehiivIssue {
  id: string
  title: string
  slug: string
  html: string
  published_at: string
  excerpt: string
}

async function getIssueBySlug(slug: string): Promise<BeehiivIssue | null> {
  const publicationId = process.env.NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID
  const apiKey = process.env.BEEHIIV_API_KEY
  if (!publicationId || !apiKey) return null

  // Use expand=free_web_content to get the full HTML
  const res = await fetch(`https://api.beehiiv.com/v2/publications/${publicationId}/posts?expand=free_web_content&limit=100`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    next: { revalidate: 60 },
  })
  if (!res.ok) {
    console.error('Beehiiv API error:', res.status, res.statusText)
    return null
  }
  const data = await res.json()
  if (!data.data || !Array.isArray(data.data)) {
    console.error('Beehiiv API response missing data:', data)
    return null
  }
  const issue = data.data.find((post: any) => post.slug === slug)
  if (!issue) {
    console.error('No issue found for slug:', slug, 'Available slugs:', data.data.map((p: any) => p.slug))
    return null
  }
  // Use the full HTML from content.free.web
  const html = issue.content?.free?.web || ''
  return {
    id: issue.id,
    title: issue.title,
    slug: issue.slug,
    html,
    published_at: issue.publish_date || issue.displayed_date || issue.created || '',
    excerpt: issue.preview_text || '',
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const issue = await getIssueBySlug(params.slug)
  if (!issue) return {}
  return {
    title: issue.title,
    description: issue.excerpt,
    openGraph: {
      title: issue.title,
      description: issue.excerpt,
    },
  }
}

export default async function IssuePage({ params }: { params: { slug: string } }) {
  let issue: BeehiivIssue | null = null
  try {
    issue = await getIssueBySlug(params.slug)
  } catch (e) {
    console.error('Error fetching issue:', e)
  }
  if (!issue) {
    return (
      <div className="min-h-screen bg-white py-12">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4 text-frame-gray-900">Issue Not Found</h1>
          <p className="text-frame-gray-500 mb-8">Sorry, we could not load this issue. Please check back later or contact support.</p>
        </div>
      </div>
    )
  }

  let displayDate = 'Unpublished'
  if (issue.published_at) {
    const parsed = new Date(Number.isInteger(issue.published_at) ? Number(issue.published_at) * 1000 : issue.published_at)
    if (!isNaN(parsed.getTime())) {
      displayDate = parsed.toLocaleDateString()
    }
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container-custom max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-frame-gray-900">{issue.title}</h1>
        <p className="text-frame-gray-500 mb-8">{displayDate}</p>
        {issue.html ? (
          <article className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: issue.html }} />
        ) : (
          <div className="text-frame-gray-500">No content available for this issue.</div>
        )}
      </div>
    </div>
  )
} 