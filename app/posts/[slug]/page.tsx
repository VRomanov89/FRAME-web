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

  const res = await fetch(`https://api.beehiiv.com/v2/publications/${publicationId}/posts?limit=100`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    next: { revalidate: 60 },
  })
  if (!res.ok) return null
  const data = await res.json()
  const issue = data.data.find((post: any) => post.slug === slug)
  if (!issue) return null
  const html = issue.html || issue.body_html || issue.content || ''
  return {
    id: issue.id,
    title: issue.title,
    slug: issue.slug,
    html,
    published_at: issue.published_at || issue.created_at || issue.updated_at || '',
    excerpt: issue.excerpt || '',
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
  const issue = await getIssueBySlug(params.slug)
  if (!issue) return notFound()

  let displayDate = 'Unpublished'
  if (issue.published_at) {
    const parsed = new Date(issue.published_at)
    if (!isNaN(parsed.getTime())) {
      displayDate = parsed.toLocaleDateString()
    }
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container-custom max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-frame-gray-900">{issue.title}</h1>
        <p className="text-frame-gray-500 mb-8">{displayDate}</p>
        <article className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: issue.html }} />
      </div>
    </div>
  )
} 