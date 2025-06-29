'use client'

import { ArrowRight, BookOpen, Users, TrendingUp, ChevronDown, ChevronUp, Factory, Zap, Target, Cpu, Globe, Shield, Gauge, Lightbulb } from 'lucide-react'
import NewsletterEmbed from '@/components/NewsletterEmbed'
import LatestIssue from '@/components/LatestIssue'
import { useState } from 'react'

// Manufacturing Stories Component
const ManufacturingStories = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const stories = [
    {
      id: 1,
      title: "Tesla's Gigafactory Revolution",
      company: "Tesla",
      location: "Nevada, USA",
      icon: Factory,
      gradient: "from-blue-500 to-cyan-500",
      insights: [
        "Produced 1.5M+ vehicles in 2023",
        "50% reduction in production costs",
        "100% renewable energy powered"
      ],
      description: "Tesla's Gigafactory Nevada has revolutionized automotive manufacturing with its massive scale and vertical integration. The facility produces batteries, drive units, and vehicle components all under one roof, achieving unprecedented efficiency and cost reductions through innovative automation and sustainable energy practices."
    },
    {
      id: 2,
      title: "Foxconn's Smart Manufacturing",
      company: "Foxconn",
      location: "Shenzhen, China",
      icon: Zap,
      gradient: "from-green-500 to-emerald-500",
      insights: [
        "1M+ robots deployed",
        "90% automation rate",
        "24/7 production capability"
      ],
      description: "Foxconn's 'lights-out' factories showcase the future of manufacturing with near-total automation. Their smart manufacturing systems can operate without human intervention for extended periods, dramatically increasing productivity and consistency while maintaining the flexibility needed for rapid product changes."
    },
    {
      id: 3,
      title: "BMW's Digital Twin Innovation",
      company: "BMW",
      location: "Munich, Germany",
      icon: Target,
      gradient: "from-purple-500 to-pink-500",
      insights: [
        "Real-time digital twins",
        "30% faster development",
        "Zero physical prototypes"
      ],
      description: "BMW's digital twin technology has transformed their product development process. By creating virtual replicas of their manufacturing systems, they can test and optimize processes before physical implementation, saving time and resources while improving quality and reducing risk."
    },
    {
      id: 4,
      title: "Toyota's Lean Evolution",
      company: "Toyota",
      location: "Toyota City, Japan",
      icon: Gauge,
      gradient: "from-red-500 to-orange-500",
      insights: [
        "Just-in-time production",
        "Continuous improvement culture",
        "Global standardization"
      ],
      description: "Toyota's legendary production system continues to evolve, adapting lean principles to modern challenges. Their approach to just-in-time manufacturing, combined with continuous improvement and respect for people, has created a sustainable competitive advantage that other manufacturers strive to replicate."
    },
    {
      id: 5,
      title: "Siemens' Industry 4.0 Leadership",
      company: "Siemens",
      location: "Munich, Germany",
      icon: Cpu,
      gradient: "from-indigo-500 to-blue-500",
      insights: [
        "Digital factory solutions",
        "IoT integration",
        "Predictive maintenance"
      ],
      description: "Siemens leads the Industry 4.0 revolution with their comprehensive digital factory solutions. Their integration of IoT, artificial intelligence, and advanced analytics enables predictive maintenance, real-time optimization, and unprecedented operational visibility across global manufacturing networks."
    },
    {
      id: 6,
      title: "GE's Additive Manufacturing",
      company: "General Electric",
      location: "Boston, USA",
      icon: Lightbulb,
      gradient: "from-yellow-500 to-amber-500",
      insights: [
        "3D printed jet engines",
        "Complex part consolidation",
        "Rapid prototyping"
      ],
      description: "GE Aviation has pioneered additive manufacturing in aerospace, producing complex jet engine components through 3D printing. This technology enables part consolidation, weight reduction, and rapid prototyping, fundamentally changing how we think about manufacturing complex assemblies."
    },
    {
      id: 7,
      title: "Procter & Gamble's Smart Factories",
      company: "P&G",
      location: "Cincinnati, USA",
      icon: Globe,
      gradient: "from-teal-500 to-cyan-500",
      insights: [
        "Global standardization",
        "Real-time monitoring",
        "Sustainable production"
      ],
      description: "P&G's smart factory initiative demonstrates how consumer goods manufacturers can achieve global standardization while maintaining local flexibility. Their real-time monitoring systems and sustainable production practices set new standards for efficiency and environmental responsibility."
    },
    {
      id: 8,
      title: "Boeing's Quality Revolution",
      company: "Boeing",
      location: "Seattle, USA",
      icon: Shield,
      gradient: "from-gray-500 to-slate-500",
      insights: [
        "Advanced quality systems",
        "Digital inspection",
        "Safety-first culture"
      ],
      description: "Boeing's quality system overhaul represents one of the most comprehensive manufacturing quality transformations in aerospace history. Their digital inspection technologies and safety-first culture ensure that every aircraft meets the highest standards of reliability and performance."
    },
    {
      id: 9,
      title: "Samsung's Semiconductor Excellence",
      company: "Samsung",
      location: "Seoul, South Korea",
      icon: Cpu,
      gradient: "from-blue-600 to-indigo-600",
      insights: [
        "Nanometer precision",
        "Clean room technology",
        "Mass production scale"
      ],
      description: "Samsung's semiconductor manufacturing represents the pinnacle of precision engineering and mass production. Their nanometer-scale manufacturing processes and clean room technologies enable the production of billions of chips annually with unprecedented levels of quality and reliability."
    }
  ]

  return (
    <section className="py-20 bg-frame-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-frame-gray-900 mb-6">
            Global Manufacturing Stories
          </h2>
          <p className="text-xl text-frame-gray-600 max-w-3xl mx-auto">
            Discover how leading manufacturers are transforming their operations with cutting-edge technology and innovative processes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => {
            const IconComponent = story.icon
            const isExpanded = expandedCard === story.id
            
            return (
              <div
                key={story.id}
                className={`relative group cursor-pointer transition-all duration-500 ease-out ${
                  isExpanded ? 'scale-105 z-10' : 'hover:scale-105'
                }`}
                onClick={() => setExpandedCard(isExpanded ? null : story.id)}
              >
                {/* Background glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${story.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl blur-xl`} />
                
                <div className={`relative bg-white rounded-2xl p-8 shadow-lg border border-frame-gray-200 transition-all duration-500 ${
                  isExpanded ? 'shadow-2xl border-frame-blue/20' : 'hover:shadow-xl'
                }`}>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${story.gradient} text-white`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <button className="text-frame-gray-400 hover:text-frame-gray-600 transition-colors">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>

                  {/* Title and company */}
                  <h3 className="text-xl font-bold text-frame-gray-900 mb-2 group-hover:text-frame-blue transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-frame-gray-600 mb-4">
                    {story.company} • {story.location}
                  </p>

                  {/* Key insights */}
                  <div className="space-y-2 mb-6">
                    {story.insights.map((insight, index) => (
                      <div key={index} className="flex items-center text-sm text-frame-gray-600">
                        <div className="w-1.5 h-1.5 bg-frame-blue rounded-full mr-3" />
                        {insight}
                      </div>
                    ))}
                  </div>

                  {/* Expandable description */}
                  <div className={`overflow-hidden transition-all duration-500 ease-out ${
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-frame-gray-600 leading-relaxed">
                      {story.description}
                    </p>
                  </div>

                  {/* Hover indicator */}
                  {!isExpanded && (
                    <div className="absolute bottom-4 right-4 text-frame-gray-400 group-hover:text-frame-blue transition-colors">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const scrollToNewsletter = () => {
    const newsletterSection = document.getElementById('newsletter-section')
    if (newsletterSection) {
      newsletterSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openLatestIssue = () => {
    // This will open the latest issue from the LatestIssue component
    // For now, we'll scroll to the latest issue section
    const latestIssueSection = document.getElementById('latest-issue-section')
    if (latestIssueSection) {
      latestIssueSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-frame-gray-50 to-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-frame-blue rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-frame-gray-900 mb-8 leading-tight">
              The Future of
              <span className="text-gradient block">Manufacturing</span>
              is Here
            </h1>
            <p className="text-xl lg:text-2xl text-frame-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              FRAME delivers cutting-edge insights on the latest manufacturing technologies, 
              industry trends, and innovative processes that are reshaping global production.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={scrollToNewsletter}
                className="btn-primary group cursor-pointer"
              >
                Subscribe to FRAME
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={openLatestIssue}
                className="btn-secondary cursor-pointer"
              >
                Read Latest Issue
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-frame-gray-900 mb-8">
              Why FRAME Matters
            </h2>
            <p className="text-xl text-frame-gray-600 leading-relaxed">
              In an era where manufacturing is undergoing unprecedented transformation, 
              staying ahead requires more than just following trends. It demands deep 
              understanding of the technologies and strategies driving change.
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing Stories */}
      <ManufacturingStories />

      {/* Project Description */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-frame-gray-900 mb-8">
                Comprehensive Coverage of Manufacturing Innovation
              </h2>
              <div className="space-y-6 text-lg text-frame-gray-600">
                <p>
                  FRAME is your essential guide to the manufacturing revolution. We cover everything 
                  from advanced robotics and AI integration to sustainable production methods and 
                  supply chain optimization.
                </p>
                <p>
                  Our team of industry experts and analysts provides in-depth analysis of the latest 
                  developments, helping you understand not just what's happening, but why it matters 
                  and how it will impact your business.
                </p>
                <p>
                  Whether you're a manufacturing executive, engineer, investor, or simply interested 
                  in the future of production, FRAME delivers the insights you need to stay ahead of 
                  the curve.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-frame-blue to-blue-600 rounded-2xl p-8 text-white">
                <div className="flex items-center mb-6">
                  <BookOpen className="w-8 h-8 mr-4" />
                  <h3 className="text-2xl font-bold">What You'll Get</h3>
                </div>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-4"></div>
                    Weekly deep-dive analysis
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-4"></div>
                    Expert interviews and case studies
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-4"></div>
                    Technology trend reports
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-4"></div>
                    Industry event coverage
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Issue */}
      <section id="latest-issue-section" className="section-padding bg-frame-gray-50">
        <div className="container-custom">
          <LatestIssue />
        </div>
      </section>

      {/* Newsletter CTA */}
      <section id="newsletter-section" className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-frame-gray-900 mb-8">
              Stay Ahead of the Manufacturing Curve
            </h2>
            <p className="text-xl text-frame-gray-600 mb-12">
              Join thousands of manufacturing professionals who rely on FRAME for their weekly 
              dose of industry insights and innovation updates.
            </p>
            <NewsletterEmbed />
          </div>
        </div>
      </section>
    </main>
  )
} 