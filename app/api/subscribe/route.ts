import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const publicationId = process.env.NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID
    const apiKey = process.env.BEEHIIV_API_KEY

    if (!publicationId || !apiKey) {
      console.error('Missing Beehiiv configuration')
      return NextResponse.json(
        { error: 'Newsletter service not configured' },
        { status: 500 }
      )
    }

    // Subscribe to Beehiiv
    const response = await fetch(`https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email: email,
        reactivate_existing: true,
        send_welcome_email: true,
        utm_source: 'frame-website',
        utm_medium: 'web',
        utm_campaign: 'newsletter-signup'
      })
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Beehiiv API error:', errorData)
      return NextResponse.json(
        { error: 'Failed to subscribe to newsletter' },
        { status: response.status }
      )
    }

    const data = await response.json()

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to FRAME newsletter',
      data: data
    })

  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 