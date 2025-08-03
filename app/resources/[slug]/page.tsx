import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, BookOpen, Download, Share2 } from 'lucide-react'

// This would typically come from a CMS or database
const resources = {
  'hidden-cost-manufacturing-obsolescence': {
    title: 'Hidden Cost of Manufacturing Obsolescence',
    description: 'Discover the hidden costs of legacy systems in manufacturing. Learn how to assess obsolescence risk and build a proactive upgrade strategy.',
    category: 'Operations Excellence',
    readTime: '8 min read',
    publishDate: '2024-01-15',
    author: 'Vladimir Romanov',
    content: `
      <h2>Why This Matters on the Plant Floor</h2>
      <p>Manufacturing obsolescence isn't just about old equipment—it's about the compounding costs that silently erode your operational efficiency. When control systems age beyond vendor support, when spare parts become scarce, and when tribal knowledge walks out the door, the true cost extends far beyond the equipment itself.</p>
      
      <p><strong>The hidden costs manifest in three critical areas:</strong></p>
      <ul>
        <li><strong>Unplanned Downtime Risk:</strong> Legacy systems fail without warning, and repairs take longer when parts are scarce</li>
        <li><strong>Knowledge Drain:</strong> As experienced technicians retire, maintaining obsolete systems becomes increasingly difficult</li>
        <li><strong>Integration Barriers:</strong> Old systems can't communicate with modern equipment, creating data silos</li>
      </ul>

      <h2>Signs and Signals to Watch For</h2>
      <p>Identifying obsolescence risk requires looking beyond equipment age. Here are the key indicators that demand attention:</p>
      
      <h3>Physical Indicators</h3>
      <ul>
        <li>Electrical panels with components from discontinued product lines</li>
        <li>Control systems running on unsupported operating systems</li>
        <li>Equipment requiring custom-fabricated replacement parts</li>
        <li>Documentation that exists only in paper form or tribal knowledge</li>
      </ul>

      <h3>Operational Indicators</h3>
      <ul>
        <li>Increasing mean time to repair (MTTR) for specific equipment</li>
        <li>Growing inventory of "insurance spares" for critical components</li>
        <li>Reliance on third-party repair shops for basic maintenance</li>
        <li>Inability to find qualified technicians familiar with the technology</li>
      </ul>

      <h2>How to Assess and Act</h2>
      <p>Building a comprehensive obsolescence management strategy requires systematic assessment and prioritized action. Here's the FRAME approach:</p>

      <h3>Step 1: Create an Obsolescence Risk Register</h3>
      <p>Document all critical assets and score them based on:</p>
      <ul>
        <li>Vendor support status (supported, limited, obsolete)</li>
        <li>Parts availability (readily available, limited, custom only)</li>
        <li>Technical expertise (internal capability, external only, scarce)</li>
        <li>Business criticality (production impact, quality impact, safety impact)</li>
      </ul>

      <h3>Step 2: Calculate True Replacement Cost</h3>
      <p>Include all factors in your analysis:</p>
      <ul>
        <li>Equipment and installation costs</li>
        <li>Production downtime during changeover</li>
        <li>Training and ramp-up time</li>
        <li>Integration with existing systems</li>
        <li>Disposal costs for old equipment</li>
      </ul>

      <h3>Step 3: Build a Phased Modernization Roadmap</h3>
      <p>Prioritize replacements based on risk and opportunity:</p>
      <ul>
        <li>Critical path equipment with high obsolescence risk</li>
        <li>Systems that enable broader digital transformation</li>
        <li>Areas with strong ROI from efficiency gains</li>
      </ul>

      <h3>Common Pitfalls to Avoid</h3>
      <ul>
        <li><strong>"Run to failure" mentality:</strong> Waiting for catastrophic failure costs 3-5x more than planned replacement</li>
        <li><strong>Like-for-like replacement:</strong> Missing opportunities to upgrade capabilities during replacement</li>
        <li><strong>Ignoring integration costs:</strong> Failing to budget for making new systems work with existing infrastructure</li>
      </ul>

      <h2>Broader Strategy Alignment</h2>
      <p>Obsolescence management connects directly to larger operational excellence initiatives:</p>

      <h3>Link to Digital Transformation</h3>
      <p>Modern replacements often enable:</p>
      <ul>
        <li>Real-time data collection and analytics</li>
        <li>Predictive maintenance capabilities</li>
        <li>Remote monitoring and support</li>
        <li>Integration with MES and ERP systems</li>
      </ul>

      <h3>When This Becomes a Leadership Challenge</h3>
      <p>Obsolescence management requires leadership when:</p>
      <ul>
        <li>Capital allocation decisions pit short-term profits against long-term reliability</li>
        <li>Cross-functional alignment is needed between maintenance, operations, and finance</li>
        <li>Cultural resistance emerges around "if it ain't broke, don't fix it" mentality</li>
      </ul>

      <h2>How FRAME Readers Handle This</h2>
      <p>Leading manufacturers approach obsolescence proactively. They maintain living risk registers, budget for systematic upgrades, and view modernization as an opportunity rather than a cost. They understand that the hidden costs of obsolescence—in downtime, quality issues, and missed opportunities—far exceed the visible costs of planned replacement.</p>

      <p>The key is shifting from reactive to proactive management. Instead of waiting for failure, successful plants build obsolescence planning into their standard operating procedures, making it part of their continuous improvement culture.</p>
    `,
    relatedResources: [
      'systematic-troubleshooting',
      'erp-misalignment-manufacturing',
      'centerline-maturity-curve-tpm'
    ]
  },
  // Add more resources here as needed
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const resource = resources[params.slug as keyof typeof resources]
  
  if (!resource) {
    return {
      title: 'Resource Not Found | FRAME',
      description: 'The requested resource could not be found.'
    }
  }

  return {
    title: `${resource.title} | FRAME Resources`,
    description: resource.description,
    openGraph: {
      title: resource.title,
      description: resource.description,
      type: 'article',
    },
  }
}

export default function ResourcePage({ params }: { params: { slug: string } }) {
  const resource = resources[params.slug as keyof typeof resources]

  if (!resource) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-frame-gray-50 to-white py-16">
        <div className="container-custom max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-frame-gray-600">
              <li><Link href="/" className="hover:text-frame-blue">Home</Link></li>
              <li><span className="mx-2">/</span></li>
              <li><Link href="/resources" className="hover:text-frame-blue">Resources</Link></li>
              <li><span className="mx-2">/</span></li>
              <li className="text-frame-gray-900 font-medium">{resource.title}</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 text-sm text-frame-gray-600 mb-4">
              <span className="bg-frame-blue/10 text-frame-blue px-3 py-1 rounded-full font-medium">
                {resource.category}
              </span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{resource.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(resource.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-frame-gray-900 mb-6">
              {resource.title}
            </h1>
            
            <p className="text-xl text-frame-gray-600 leading-relaxed">
              {resource.description}
            </p>

            {/* Author */}
            <div className="mt-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-frame-blue/10 flex items-center justify-center">
                <span className="text-frame-blue font-bold text-lg">VR</span>
              </div>
              <div>
                <p className="font-medium text-frame-gray-900">{resource.author}</p>
                <p className="text-sm text-frame-gray-600">Managing Partner, FRAME</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <article 
            className="prose prose-lg max-w-none prose-headings:text-frame-gray-900 prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4 prose-p:text-frame-gray-700 prose-p:leading-relaxed prose-li:text-frame-gray-700 prose-strong:text-frame-gray-900 prose-a:text-frame-blue prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: resource.content }}
          />

          {/* CTA Box */}
          <div className="mt-16 p-8 bg-frame-blue/5 rounded-2xl border border-frame-blue/20">
            <h3 className="text-2xl font-bold text-frame-gray-900 mb-3">
              This is the kind of clarity we send every week in FRAME.
            </h3>
            <p className="text-frame-gray-600 mb-6">
              Get practical insights and strategic thinking for manufacturing leaders delivered to your inbox.
            </p>
            <Link href="/#subscribe" className="btn-primary inline-flex items-center">
              Subscribe for Weekly Insights
              <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
            </Link>
          </div>

          {/* Related Resources */}
          {resource.relatedResources && resource.relatedResources.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-frame-gray-900 mb-8">Related Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {resource.relatedResources.map((slug) => (
                  <Link
                    key={slug}
                    href={`/resources/${slug}`}
                    className="group border border-frame-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300 hover:border-frame-blue/20"
                  >
                    <BookOpen className="w-6 h-6 text-frame-gray-400 group-hover:text-frame-blue transition-colors mb-3" />
                    <h4 className="font-semibold text-frame-gray-900 group-hover:text-frame-blue transition-colors">
                      {slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-frame-gray-50">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-frame-gray-900 mb-4">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-frame-gray-600 mb-8">
            Explore more resources or get in touch to discuss your specific challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/resources" className="btn-secondary inline-flex items-center">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Resources
            </Link>
            <Link href="/team" className="btn-primary inline-flex items-center">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}