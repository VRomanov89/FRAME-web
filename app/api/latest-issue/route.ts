import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const apiKey = process.env.BEEHIIV_API_KEY
    const publicationId = process.env.NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID

    if (!apiKey || !publicationId) {
      throw new Error('Missing Beehiiv API credentials')
    }

    const response = await fetch(`https://api.beehiiv.com/v2/publications/${publicationId}/posts?expand=free_web_content&limit=1&status=published`, {
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
        preview_text: latestPost.preview_text || '',
        publish_date: latestPost.publish_date,
        reading_time: latestPost.reading_time && typeof latestPost.reading_time === 'number' && latestPost.reading_time > 0 ? latestPost.reading_time : undefined,
        slug: latestPost.slug
      })
    }

    // Return fallback if no posts found
    return NextResponse.json({
      title: "The Hidden Costs of Legacy System Obsolescence",
      preview_text: "Why your aging control systems are costing more than you think, and how to build a realistic modernization roadmap that actually works.",
      publish_date: Math.floor(Date.now() / 1000),
      reading_time: undefined,
      slug: ""
    })

  } catch (error) {
    console.error('Error fetching latest issue:', error)
    
    // Return fallback data on error
    return NextResponse.json({
      title: "The Hidden Costs of Legacy System Obsolescence",
      preview_text: "Why your aging control systems are costing more than you think, and how to build a realistic modernization roadmap that actually works.",
      publish_date: Math.floor(Date.now() / 1000),
      reading_time: undefined,
      slug: ""
    })
  }
} 