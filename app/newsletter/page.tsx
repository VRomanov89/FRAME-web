import { Calendar, Clock, ArrowRight } from 'lucide-react'
import NewsletterEmbed from '@/components/NewsletterEmbed'

export default function Newsletter() {
  // Placeholder data - replace with actual API call to Beehiiv
  const newsletterIssues = [
    {
      id: 1,
      title: "The Hidden Costs of Legacy System Obsolescence",
      excerpt: "Why your aging control systems are costing more than you think, and how to build a realistic modernization roadmap that actually works.",
      publishDate: "December 15, 2024",
      readTime: "8 min read",
      url: "#",
      featured: true
    },
    {
      id: 2,
      title: "Building High-Performing Technical Teams",
      excerpt: "The leadership principles that actually work in manufacturing environments, and why most technical team building efforts fail.",
      publishDate: "December 8, 2024",
      readTime: "6 min read",
      url: "#",
      featured: false
    },
    {
      id: 3,
      title: "Strategic Plant Audits: Beyond the Checklist",
      excerpt: "How to conduct plant assessments that reveal real improvement opportunities, not just compliance gaps.",
      publishDate: "December 1, 2024",
      readTime: "10 min read",
      url: "#",
      featured: false
    },
    {
      id: 4,
      title: "IT/OT Convergence: Separating Hype from Reality",
      excerpt: "Practical approaches to bridging the gap between information technology and operational technology in manufacturing.",
      publishDate: "November 24, 2024",
      readTime: "7 min read",
      url: "#",
      featured: false
    },
    {
      id: 5,
      title: "OEE: Moving Beyond the Numbers",
      excerpt: "Why most OEE implementations fail to drive real improvement, and how to build measurement systems that actually work.",
      publishDate: "November 17, 2024",
      readTime: "9 min read",
      url: "#",
      featured: false
    },
    {
      id: 6,
      title: "Digital Transformation Without the Buzzwords",
      excerpt: "A practical framework for approaching digital transformation in manufacturing, based on real-world experience.",
      publishDate: "November 10, 2024",
      readTime: "11 min read",
      url: "#",
      featured: false
    }
  ]

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
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-frame-gray-200 max-w-md mx-auto">
              <NewsletterEmbed />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Issue */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-frame-gray-900 mb-8">Latest Issue</h2>
            {newsletterIssues.filter(issue => issue.featured).map(issue => (
              <div key={issue.id} className="bg-frame-gray-50 border border-frame-gray-200 rounded-2xl p-8 shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2 text-frame-gray-500 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{issue.publishDate}</span>
                    <span>•</span>
                    <Clock className="h-4 w-4" />
                    <span>{issue.readTime}</span>
                  </div>
                  <span className="bg-frame-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold text-frame-gray-900 mb-4">
                  {issue.title}
                </h3>
                
                <p className="text-lg text-frame-gray-600 mb-6 leading-relaxed">
                  {issue.excerpt}
                </p>
                
                <a 
                  href={issue.url}
                  className="inline-flex items-center text-frame-blue font-medium hover:text-blue-700 transition-colors text-lg"
                >
                  Read Full Issue
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Issues */}
      <section className="section-padding bg-frame-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-frame-gray-900 mb-12 text-center">All Issues</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsletterIssues.filter(issue => !issue.featured).map(issue => (
                <div key={issue.id} className="bg-white border border-frame-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-2 text-frame-gray-500 text-sm mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>{issue.publishDate}</span>
                    <span>•</span>
                    <Clock className="h-4 w-4" />
                    <span>{issue.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-frame-gray-900 mb-3">
                    {issue.title}
                  </h3>
                  
                  <p className="text-frame-gray-600 mb-4 leading-relaxed">
                    {issue.excerpt}
                  </p>
                  
                  <a 
                    href={issue.url}
                    className="inline-flex items-center text-frame-blue font-medium hover:text-blue-700 transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="section-padding bg-frame-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Never Miss an Issue
            </h2>
            <p className="text-xl text-frame-gray-300 mb-8">
              Get the latest FRAME insights delivered to your inbox every week.
            </p>
            <div className="bg-white/10 p-8 rounded-2xl max-w-md mx-auto">
              <NewsletterEmbed />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 