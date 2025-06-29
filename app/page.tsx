'use client'

import Link from 'next/link'
import { ArrowRight, BookOpen, Users, TrendingUp, ChevronDown, ChevronUp, Factory, Zap, Target } from 'lucide-react'
import NewsletterEmbed from '@/components/NewsletterEmbed'
import LatestIssue from '@/components/LatestIssue'
import { useState } from 'react'

// Manufacturing Stories Component
const ManufacturingStories = () => {
  const [expandedStory, setExpandedStory] = useState<number | null>(null)
  const [hoveredStory, setHoveredStory] = useState<number | null>(null)

  const stories = [
    {
      id: 1,
      company: "Toyota",
      industry: "Automotive",
      challenge: "Just-in-Time Production Disruption",
      summary: "How Toyota's legendary production system faced unprecedented challenges during global supply chain disruptions.",
      fullStory: "Toyota's Just-in-Time (JIT) production system, once the gold standard for manufacturing efficiency, faced its biggest test during the 2020-2022 global supply chain crisis. The company's lean inventory approach, which typically kept only hours of parts on hand, became a vulnerability when semiconductor shortages and shipping delays hit simultaneously. Toyota had to rapidly adapt its century-old production philosophy while maintaining quality standards that made it the world's most valuable automaker. The company's response—implementing strategic buffer inventories while preserving JIT principles—offers lessons for manufacturers worldwide on balancing efficiency with resilience.",
      keyInsights: ["Supply chain resilience", "Lean manufacturing adaptation", "Strategic inventory management"],
      icon: Factory,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      hoverBorderColor: "hover:border-blue-300"
    },
    {
      id: 2,
      company: "Siemens",
      industry: "Industrial Automation",
      challenge: "Digital Twin Implementation",
      summary: "Siemens' journey to create digital replicas of entire factories and the operational insights gained.",
      fullStory: "Siemens' Digital Twin initiative represents one of the most ambitious digital transformation projects in manufacturing history. By creating virtual replicas of their factories, including every machine, process, and workflow, Siemens achieved unprecedented visibility into their operations. The project revealed hidden inefficiencies, predicted maintenance needs before failures occurred, and enabled real-time optimization of production lines. However, the implementation wasn't smooth—it required cultural change, new skill sets, and significant investment in both technology and training. The results: 30% reduction in downtime, 25% improvement in energy efficiency, and a blueprint for Industry 4.0 success.",
      keyInsights: ["Digital transformation", "Predictive maintenance", "Operational visibility"],
      icon: Zap,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      hoverBorderColor: "hover:border-purple-300"
    },
    {
      id: 3,
      company: "Procter & Gamble",
      industry: "Consumer Goods",
      challenge: "Multi-Site Standardization",
      summary: "P&G's global effort to standardize processes across 100+ manufacturing sites while maintaining local flexibility.",
      fullStory: "Procter & Gamble's challenge was monumental: standardize manufacturing processes across more than 100 facilities in 40+ countries while maintaining the flexibility needed for local market demands. The company's 'One P&G' initiative required balancing global efficiency with local responsiveness. Key to their success was developing a 'core-flex' model where 80% of processes were standardized globally, while 20% remained flexible for local requirements. The implementation required extensive change management, new training programs, and technology upgrades across all sites. The result: 15% reduction in manufacturing costs, 20% improvement in quality metrics, and faster time-to-market for new products.",
      keyInsights: ["Global standardization", "Change management", "Core-flex operations"],
      icon: Target,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      hoverBorderColor: "hover:border-green-300"
    },
    {
      id: 4,
      company: "Tesla",
      industry: "Electric Vehicles",
      challenge: "Manufacturing at Scale",
      summary: "Tesla's evolution from boutique manufacturer to mass production and the lessons learned along the way.",
      fullStory: "Tesla's manufacturing journey from producing 2,500 cars per week in 2017 to over 20,000 per week in 2023 represents one of the most dramatic scaling operations in automotive history. The company's approach—building the 'machine that builds the machine'—required rethinking traditional automotive manufacturing. Tesla's innovations included massive die-casting machines that reduced body parts from 70+ pieces to just 2, automated battery production lines, and vertically integrated supply chains. The challenges were immense: quality issues during rapid scaling, supply chain bottlenecks, and the need to train thousands of workers in new manufacturing techniques. Tesla's experience shows that scaling manufacturing requires both technological innovation and operational excellence.",
      keyInsights: ["Manufacturing scaling", "Automation strategy", "Vertical integration"],
      icon: Factory,
      gradient: "from-red-500 to-orange-500",
      bgGradient: "from-red-50 to-orange-50",
      borderColor: "border-red-200",
      hoverBorderColor: "hover:border-red-300"
    },
    {
      id: 5,
      company: "Boeing",
      industry: "Aerospace",
      challenge: "Quality System Overhaul",
      summary: "Boeing's response to quality issues and the implementation of new safety and quality management systems.",
      fullStory: "Boeing's quality system overhaul following the 737 MAX crisis represents one of the most comprehensive manufacturing quality transformations in aerospace history. The company had to rebuild trust while implementing new quality management systems across its global manufacturing network. Key changes included enhanced supplier quality oversight, new digital quality tracking systems, and cultural shifts toward 'safety-first' manufacturing. The transformation required retraining thousands of workers, implementing new inspection protocols, and developing new relationships with regulatory bodies. Boeing's experience demonstrates that quality system failures can have catastrophic consequences, making robust quality management essential for complex manufacturing operations.",
      keyInsights: ["Quality management", "Safety culture", "Regulatory compliance"],
      icon: Target,
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50",
      borderColor: "border-indigo-200",
      hoverBorderColor: "hover:border-indigo-300"
    },
    {
      id: 6,
      company: "Foxconn",
      industry: "Electronics",
      challenge: "Labor Automation Transition",
      summary: "Foxconn's massive automation initiative and the balance between human workers and robotic systems.",
      fullStory: "Foxconn's automation transition represents the largest robotics deployment in manufacturing history. The company, which employs over 1 million workers globally, has been systematically replacing human workers with robots while maintaining the flexibility needed for rapid product changes. The initiative required massive investment in robotics, new training programs for remaining workers, and rethinking production line design. Key challenges included maintaining quality during the transition, managing workforce reductions responsibly, and ensuring robots could handle the precision required for electronics manufacturing. Foxconn's experience shows that automation isn't just about replacing workers—it's about creating new types of jobs and redefining the human-robot collaboration model.",
      keyInsights: ["Automation strategy", "Workforce transformation", "Human-robot collaboration"],
      icon: Zap,
      gradient: "from-yellow-500 to-amber-500",
      bgGradient: "from-yellow-50 to-amber-50",
      borderColor: "border-yellow-200",
      hoverBorderColor: "hover:border-yellow-300"
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-frame-gray-900 mb-4 text-center">
            Manufacturing Stories That Matter
          </h2>
          <p className="text-xl text-frame-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Real challenges, real solutions, real lessons from global manufacturing leaders.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => {
              const IconComponent = story.icon
              const isExpanded = expandedStory === story.id
              const isHovered = hoveredStory === story.id
              
              return (
                <div 
                  key={story.id}
                  className={`relative group cursor-pointer transition-all duration-500 ease-out transform ${
                    isExpanded 
                      ? 'scale-105 z-10' 
                      : isHovered 
                        ? 'scale-102 -translate-y-2' 
                        : 'hover:scale-102 hover:-translate-y-1'
                  }`}
                  onClick={() => setExpandedStory(isExpanded ? null : story.id)}
                  onMouseEnter={() => setHoveredStory(story.id)}
                  onMouseLeave={() => setHoveredStory(null)}
                >
                  {/* Background glow effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${story.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>
                  
                  {/* Main card */}
                  <div className={`relative bg-gradient-to-br ${story.bgGradient} border-2 ${story.borderColor} ${story.hoverBorderColor} rounded-2xl p-6 transition-all duration-500 ease-out ${
                    isExpanded 
                      ? 'shadow-2xl ring-4 ring-frame-blue/20' 
                      : 'shadow-lg hover:shadow-2xl'
                  }`}>
                    
                    {/* Header with icon and expand button */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 bg-gradient-to-br ${story.gradient} rounded-2xl flex items-center justify-center transform transition-all duration-300 ${
                        isHovered ? 'scale-110 rotate-3' : 'group-hover:scale-105'
                      }`}>
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                      <button className={`p-2 rounded-full transition-all duration-300 ${
                        isExpanded 
                          ? 'bg-frame-blue text-white shadow-lg' 
                          : 'text-frame-gray-400 hover:text-frame-blue hover:bg-frame-blue/10'
                      }`}>
                        {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                      </button>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <div>
                        <h3 className={`text-xl font-bold mb-1 transition-colors duration-300 ${
                          isHovered ? 'text-frame-blue' : 'text-frame-gray-900'
                        }`}>
                          {story.company}
                        </h3>
                        <p className="text-sm text-frame-gray-500 mb-3 font-medium">
                          {story.industry}
                        </p>
                        <h4 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${
                          isHovered ? 'text-frame-blue' : 'text-frame-blue'
                        }`}>
                          {story.challenge}
                        </h4>
                        <p className="text-frame-gray-600 text-sm leading-relaxed">
                          {story.summary}
                        </p>
                      </div>
                      
                      {/* Expanded content with animation */}
                      {isExpanded && (
                        <div className="mt-6 pt-6 border-t border-frame-gray-200 animate-in slide-in-from-top-2 duration-500">
                          <p className="text-frame-gray-700 text-sm leading-relaxed mb-6">
                            {story.fullStory}
                          </p>
                          
                          <div className="mb-6">
                            <h5 className="text-sm font-semibold text-frame-gray-900 mb-3">
                              Key Insights:
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {story.keyInsights.map((insight, index) => (
                                <span 
                                  key={index}
                                  className={`bg-gradient-to-r ${story.gradient} text-white px-3 py-1 rounded-full text-xs font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-md`}
                                >
                                  {insight}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <p className="text-xs text-frame-gray-500 italic bg-white/50 p-3 rounded-lg">
                            These insights and more are explored in depth in FRAME's weekly newsletter.
                          </p>
                        </div>
                      )}
                    </div>
                    
                    {/* Hover indicator */}
                    <div className={`absolute bottom-4 right-4 w-2 h-2 rounded-full transition-all duration-300 ${
                      isHovered ? 'bg-frame-blue scale-150' : 'bg-frame-gray-300'
                    }`}></div>
                  </div>
                </div>
              )
            })}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-frame-gray-600 mb-8 text-lg">
              These stories represent just a fraction of the insights shared in FRAME.
            </p>
            <Link href="/newsletter" className="btn-primary inline-flex items-center text-lg px-10 py-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Explore More Stories
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Debug section - remove this after testing */}
      <div className="debug-css p-4 text-center">
        <p className="text-white font-bold">If you see this red box, CSS is loading but Tailwind might not be working properly.</p>
      </div>
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-frame-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-16 h-16 bg-frame-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">F</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-frame-gray-900 mb-6">
                FRAME
              </h1>
              <p className="text-xl lg:text-2xl text-frame-gray-600 font-medium">
                Foundation for Reliability, Automation, Manufacturing & Excellence
              </p>
            </div>
            
            <p className="text-lg lg:text-xl text-frame-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              FRAME is a weekly publication and professional community exploring the challenges and opportunities in modern manufacturing. We offer in-depth operational insights, strategic thinking, and real-world stories for engineers, plant managers, and manufacturing leaders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#subscribe" className="btn-primary inline-flex items-center">
                Subscribe to FRAME
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/newsletter" className="btn-secondary inline-flex items-center">
                Explore the Dispatch
                <BookOpen className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-frame-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-frame-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Weekly Insights</h3>
              <p className="text-frame-gray-600">
                Deep dives into operational challenges and strategic thinking for manufacturing leaders.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-frame-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-frame-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Network</h3>
              <p className="text-frame-gray-600">
                Connect with engineers, plant managers, and manufacturing consultants worldwide.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-frame-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-frame-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Field Experience</h3>
              <p className="text-frame-gray-600">
                Real stories and hard-earned insights from the front lines of industrial automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Long Description Section */}
      <section className="section-padding bg-frame-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-frame-gray-900 mb-8 text-center">
              More Than a Newsletter
            </h2>
            
            <div className="prose prose-lg max-w-none text-frame-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                FRAME is more than a newsletter. It's a growing publication and professional network for the people building the future of manufacturing. Every week, we share real stories, hard-earned insights, and field-tested thinking from the world of industrial automation, factory operations, and plant leadership.
              </p>
              
              <p className="text-xl leading-relaxed mb-6">
                Our content is shaped by years of experience on the floor—migrating legacy systems, building high-performing teams, navigating obsolescence, and bridging the gap between strategy and execution. We write for technical professionals, operations leaders, and manufacturing consultants who want to think more clearly and act more decisively.
              </p>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-frame-gray-200 my-8">
                <h3 className="text-xl font-semibold mb-4 text-frame-gray-900">Topics include:</h3>
                <ul className="space-y-2 text-frame-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-frame-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Obsolescence and readiness in controls and automation
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-frame-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Strategic plant audits and modernization paths
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-frame-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    What makes technical leadership actually work
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-frame-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Why metrics and systems fail without discipline
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-frame-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    How to improve without buzzwords or fluff
                  </li>
                </ul>
              </div>

              <p className="text-xl leading-relaxed">
                Whether you're leading a production line, designing an MES rollout, or rethinking your plant's digital strategy, FRAME delivers perspective, structure, and challenge. This is not a marketing channel. It's an effort to raise the bar on operational thinking in industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Stories Section */}
      <ManufacturingStories />

      {/* Latest Issue Section */}
      <section className="section-padding bg-frame-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-frame-gray-900 mb-8 text-center">
              Latest from FRAME
            </h2>
            <LatestIssue />
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section id="subscribe" className="section-padding bg-frame-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Join the FRAME Community
            </h2>
            <p className="text-xl text-frame-gray-300 mb-8">
              Get weekly insights delivered to your inbox. No fluff, just practical thinking for manufacturing leaders.
            </p>
            <NewsletterEmbed />
          </div>
        </div>
      </section>
    </div>
  )
} 