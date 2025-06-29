import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const apiKey = process.env.BEEHIIV_API_KEY
    const publicationId = process.env.NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID

    if (!apiKey || !publicationId) {
      throw new Error('Missing Beehiiv API credentials')
    }

    const response = await fetch(`https://api.beehiiv.com/v2/publications/${publicationId}/posts?limit=1&status=published`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`Beehiiv API error: ${response.status}`)
    }

    const data = await response.json()
    
    if (data.data && data.data.length > 0) {
      const latestPost = data.data[0]
      return NextResponse.json({
        id: latestPost.id,
        title: latestPost.title,
        subtitle: latestPost.subtitle,
        published_at: latestPost.published_at,
        reading_time: latestPost.reading_time,
        slug: latestPost.slug,
        url: `https://${publicationId}.beehiiv.com/p/${latestPost.slug}`
      })
    }

    // Return fallback if no posts found
    return NextResponse.json({
      title: "The Hidden Costs of Legacy System Obsolescence",
      subtitle: "Why your aging control systems are costing more than you think, and how to build a realistic modernization roadmap that actually works.",
      published_at: new Date().toISOString(),
      reading_time: 8,
      url: "#"
    })

  } catch (error) {
    console.error('Error fetching latest issue:', error)
    
    // Return fallback data on error
    return NextResponse.json({
      title: "The Hidden Costs of Legacy System Obsolescence",
      subtitle: "Why your aging control systems are costing more than you think, and how to build a realistic modernization roadmap that actually works.",
      published_at: new Date().toISOString(),
      reading_time: 8,
      url: "#"
    })
  }
} 