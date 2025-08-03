import { CheckCircle } from 'lucide-react'

export default function About() {
  const keyTopics = [
    {
      title: "Obsolescence & Readiness",
      description: "Navigating the challenges of aging control systems and building realistic modernization roadmaps."
    },
    {
      title: "Strategic Plant Audits",
      description: "Comprehensive assessment methodologies for identifying improvement opportunities and modernization paths."
    },
    {
      title: "Technical Leadership",
      description: "What makes technical leadership actually work in manufacturing environments."
    },
    {
      title: "Metrics & Systems",
      description: "Why metrics and systems fail without discipline, and how to build sustainable measurement frameworks."
    },
    {
      title: "Digital Transformation",
      description: "Practical approaches to IT/OT convergence and digital transformation without the buzzwords."
    },
    {
      title: "OEE & Performance",
      description: "Moving beyond basic OEE calculations to meaningful operational excellence strategies."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-frame-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-frame-gray-900 mb-6">
              What is FRAME?
            </h1>
            <p className="text-xl lg:text-2xl text-frame-gray-600 leading-relaxed">
              A weekly publication and professional network for the people building the future of manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-frame-gray-700">
              <p className="text-xl leading-relaxed mb-8">
                FRAME is more than a newsletter. It's a growing publication and professional network for the people building the future of manufacturing. Every week, we share real stories, hard-earned insights, and field-tested thinking from the world of industrial automation, factory operations, and plant leadership.
              </p>
              
              <p className="text-xl leading-relaxed mb-8">
                Our content is shaped by years of experience on the floor. We've migrated legacy systems, built high-performing teams, navigated obsolescence, and bridged the gap between strategy and execution. We write for technical professionals, operations leaders, and manufacturing consultants who want to think more clearly and act more decisively.
              </p>

              <div className="bg-frame-gray-50 p-8 rounded-2xl my-8">
                <h2 className="text-2xl font-bold text-frame-gray-900 mb-4">
                  Our Approach
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-frame-gray-900 mb-2">Deep Thinking</h3>
                    <p className="text-frame-gray-600">
                      We go beyond surface-level analysis to explore the underlying principles and strategic implications of manufacturing challenges.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-frame-gray-900 mb-2">Field Experience</h3>
                    <p className="text-frame-gray-600">
                      Every insight is grounded in real-world experience, not theoretical frameworks or marketing speak.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-frame-gray-900 mb-2">Practical Strategy</h3>
                    <p className="text-frame-gray-600">
                      We provide actionable frameworks and decision-making tools that work in complex, real-world environments.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-frame-gray-900 mb-2">Modern Leadership</h3>
                    <p className="text-frame-gray-600">
                      We focus on the leadership skills and organizational dynamics that drive successful manufacturing operations.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xl leading-relaxed mb-8">
                Whether you're leading a production line, designing an MES rollout, or rethinking your plant's digital strategy, FRAME delivers perspective, structure, and challenge. This is not a marketing channel. It's an effort to raise the bar on operational thinking in industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Topics Section */}
      <section className="section-padding bg-frame-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-frame-gray-900 mb-12 text-center">
              Key Topics We Cover
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyTopics.map((topic, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-frame-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-frame-blue flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-frame-gray-900 mb-2">
                        {topic.title}
                      </h3>
                      <p className="text-frame-gray-600 leading-relaxed">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-frame-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Join the FRAME Community
            </h2>
            <p className="text-xl text-frame-gray-300 mb-8">
              Get weekly insights delivered to your inbox. No fluff, just practical thinking for manufacturing leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#subscribe" className="btn-primary inline-flex items-center">
                Subscribe to FRAME
              </a>
              <a href="/newsletter" className="bg-white text-frame-gray-900 hover:bg-frame-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center">
                Explore the Dispatch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 