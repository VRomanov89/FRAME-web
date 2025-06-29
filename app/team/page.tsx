import { Linkedin, Twitter, Globe, Mail } from 'lucide-react'

export default function Team() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-frame-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-frame-gray-900 mb-6">
              Meet the Founder
            </h1>
            <p className="text-xl lg:text-2xl text-frame-gray-600 leading-relaxed">
              The mind behind FRAME and the insights that drive our community.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              {/* Profile Image */}
              <div className="lg:col-span-1">
                <div className="bg-frame-gray-200 rounded-2xl p-8 text-center">
                  <div className="w-48 h-48 bg-frame-blue rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-6xl font-bold">VR</span>
                  </div>
                  <h2 className="text-2xl font-bold text-frame-gray-900 mb-2">
                    Vladimir Romanov
                  </h2>
                  <p className="text-frame-blue font-semibold mb-4">
                    Founder & Lead Contributor
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    <a
                      href="https://linkedin.com/in/vladromanov/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-frame-gray-600 hover:text-frame-blue transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a
                      href="https://twitter.com/VladRomanovEng"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-frame-gray-600 hover:text-frame-blue transition-colors"
                    >
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a
                      href="https://www.vladromanov.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-frame-gray-600 hover:text-frame-blue transition-colors"
                    >
                      <Globe className="h-6 w-6" />
                    </a>
                    <a
                      href="mailto:vladimir@frame.news"
                      className="text-frame-gray-600 hover:text-frame-blue transition-colors"
                    >
                      <Mail className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none text-frame-gray-700">
                  <p className="text-xl leading-relaxed mb-6">
                    Vladimir is an electrical engineer with an MBA from McGill University and over a decade of experience across automation, controls, and manufacturing leadership. He has worked with companies like Procter & Gamble, Kraft Heinz, and Post Holdings to modernize operations, deploy digital systems, and drive organizational change.
                  </p>
                  
                  <p className="text-xl leading-relaxed mb-6">
                    His experience spans the full spectrum of manufacturing challenges. From legacy system obsolescence to digital transformation initiatives, from technical team building to strategic plant modernization. This hands-on experience in the field shapes every piece of content and insight shared through FRAME.
                  </p>

                  <div className="bg-frame-gray-50 p-8 rounded-2xl my-8">
                    <h3 className="text-xl font-semibold text-frame-gray-900 mb-4">
                      Areas of Expertise
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-frame-gray-900 mb-2">Technical Leadership</h4>
                        <p className="text-frame-gray-600 text-sm">
                          Building and leading high-performing technical teams in manufacturing environments.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-frame-gray-900 mb-2">System Modernization</h4>
                        <p className="text-frame-gray-600 text-sm">
                          Strategic planning and execution of control system upgrades and digital transformation.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-frame-gray-900 mb-2">Operational Excellence</h4>
                        <p className="text-frame-gray-600 text-sm">
                          Implementing sustainable improvement frameworks and measurement systems.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-frame-gray-900 mb-2">IT/OT Convergence</h4>
                        <p className="text-frame-gray-600 text-sm">
                          Bridging the gap between information technology and operational technology.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-xl leading-relaxed">
                    Through FRAME, Vladimir shares the insights, frameworks, and strategic thinking that have proven effective in real-world manufacturing environments. The goal is to raise the bar on operational thinking in industry and build a community of manufacturing professionals committed to excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-frame-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-frame-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-frame-gray-600 mb-8">
              Have questions about FRAME or want to discuss manufacturing challenges? 
              Vladimir is always open to connecting with fellow manufacturing professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:vladimir@frame.news"
                className="btn-primary inline-flex items-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </a>
              <a
                href="https://linkedin.com/in/vladromanov/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 