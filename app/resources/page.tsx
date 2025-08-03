import { BookOpen, FileText, Lightbulb, TrendingUp, Users, Zap, Target, Settings, Factory, Shield, Award, Briefcase } from 'lucide-react'
import Link from 'next/link'

interface ResourceCategory {
  id: string
  title: string
  description: string
  icon: any
  gradient: string
  resources: Resource[]
}

interface Resource {
  title: string
  description: string
  slug: string
  readTime: string
  featured?: boolean
}

interface CaseStudy {
  title: string
  company: string
  industry: string
  description: string
  slug: string
  readTime: string
  challenge: string
  outcome: string
  featured?: boolean
}

const resourceCategories: ResourceCategory[] = [
  {
    id: 'operations-excellence',
    title: 'Operations Excellence',
    description: 'Best practices for lean manufacturing, continuous improvement, and operational efficiency',
    icon: TrendingUp,
    gradient: 'from-green-500 to-emerald-500',
    resources: [
      {
        title: 'Hidden Cost of Manufacturing Obsolescence',
        description: 'Discover the hidden costs of legacy systems and build a proactive upgrade strategy',
        slug: 'hidden-cost-manufacturing-obsolescence',
        readTime: '8 min read',
        featured: true
      },
      {
        title: 'Daily Direction Setting (DDS) Manufacturing Meeting',
        description: 'Learn how to implement effective daily management systems on the plant floor',
        slug: 'daily-direction-setting-manufacturing',
        readTime: '6 min read'
      },
      {
        title: 'Improving OEE Interpretation for Action',
        description: 'Move beyond basic OEE calculations to meaningful operational excellence strategies',
        slug: 'improving-oee-interpretation',
        readTime: '10 min read'
      }
    ]
  },
  {
    id: 'reliability-maintenance',
    title: 'Reliability & Maintenance',
    description: 'Strategies for predictive maintenance, asset management, and system reliability',
    icon: Shield,
    gradient: 'from-blue-500 to-indigo-500',
    resources: [
      {
        title: 'Electrical Panel Condition Analysis',
        description: 'What electrical panel conditions reveal about your operations culture',
        slug: 'electrical-panel-condition-analysis',
        readTime: '7 min read'
      },
      {
        title: 'Systematic Troubleshooting Before Failure',
        description: 'Build proactive troubleshooting capabilities in your maintenance teams',
        slug: 'systematic-troubleshooting',
        readTime: '9 min read'
      },
      {
        title: 'Centerline Maturity Curve TPM Implementation',
        description: 'Understanding and implementing TPM centerlines for reduced waste',
        slug: 'centerline-maturity-curve-tpm',
        readTime: '12 min read'
      }
    ]
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'Navigate Industry 4.0, IoT integration, and smart factory implementation',
    icon: Zap,
    gradient: 'from-purple-500 to-pink-500',
    resources: [
      {
        title: 'AI in Manufacturing Vision Systems',
        description: 'Practical use cases for AI-enhanced vision in defect detection',
        slug: 'ai-manufacturing-vision-systems',
        readTime: '11 min read',
        featured: true
      },
      {
        title: 'ERP Misalignment in Manufacturing Ops',
        description: 'Understanding and fixing the gap between ERP systems and shop floor reality',
        slug: 'erp-misalignment-manufacturing',
        readTime: '8 min read'
      },
      {
        title: 'Human Sensing Paired with Digital Sensors',
        description: 'Why operators remain your best process sensors in the digital age',
        slug: 'human-sensing-digital-sensors',
        readTime: '6 min read'
      }
    ]
  },
  {
    id: 'leadership-culture',
    title: 'Leadership & Culture',
    description: 'Build high-performing teams and foster a culture of continuous improvement',
    icon: Users,
    gradient: 'from-orange-500 to-red-500',
    resources: [
      {
        title: 'Floor Presence Standards Teaching',
        description: 'How to teach and maintain floor presence standards for manufacturing teams',
        slug: 'floor-presence-standards-teaching',
        readTime: '7 min read'
      },
      {
        title: 'Plant Teaching Skills for Stability',
        description: 'Develop teaching capabilities that drive operational stability',
        slug: 'plant-teaching-skills-stability',
        readTime: '9 min read'
      },
      {
        title: 'Trust Operators Over Dashboards',
        description: 'Building a culture that values human insight alongside data',
        slug: 'trust-operators-over-dashboards',
        readTime: '5 min read'
      }
    ]
  },
  {
    id: 'quality-metrics',
    title: 'Quality & Metrics',
    description: 'Implement effective quality systems and meaningful performance metrics',
    icon: Target,
    gradient: 'from-teal-500 to-cyan-500',
    resources: [
      {
        title: 'Reading Quality Metrics Plant Culture',
        description: 'How to interpret quality metrics as cultural indicators',
        slug: 'reading-quality-metrics-culture',
        readTime: '8 min read'
      },
      {
        title: 'Time to First Action Downtime Metric',
        description: 'Implementing response time visibility in plant operations',
        slug: 'time-first-action-downtime',
        readTime: '10 min read'
      },
      {
        title: 'Manufacturing Metrics You Can Act On',
        description: 'Design metrics that drive action rather than just reporting',
        slug: 'manufacturing-metrics-action',
        readTime: '11 min read'
      }
    ]
  },
  {
    id: 'process-optimization',
    title: 'Process Optimization',
    description: 'Techniques for lean implementation, Six Sigma, and process improvement',
    icon: Settings,
    gradient: 'from-indigo-500 to-blue-600',
    resources: [
      {
        title: 'Practical Six Sigma in Plant Operations',
        description: 'Apply Six Sigma principles to real-world manufacturing challenges',
        slug: 'practical-six-sigma-operations',
        readTime: '13 min read'
      },
      {
        title: 'Response vs Repair Time Scale Standards',
        description: 'Establish meaningful time standards for maintenance operations',
        slug: 'response-repair-time-standards',
        readTime: '7 min read'
      },
      {
        title: 'Disciplined Factory Habits Scale Reliability',
        description: 'Build scalable habits that improve factory reliability',
        slug: 'disciplined-factory-habits',
        readTime: '9 min read'
      }
    ]
  }
]

const caseStudies: CaseStudy[] = [
  {
    title: 'PLC Obsolescence Upgrade Transformation',
    company: 'Polytron',
    industry: 'Drywall Manufacturing',
    description: 'How a multi-site PLC modernization project eliminated obsolescence risk and improved reliability across manufacturing operations.',
    slug: 'polytron-plc-obsolescence-upgrade',
    readTime: '12 min read',
    challenge: 'Aging PLC-5 controllers causing downtime and scarce spare parts',
    outcome: 'Improved reliability, reduced MRO inventory, eliminated unplanned downtime',
    featured: true
  },
  {
    title: 'Toyota Aisin Fire Recovery',
    company: 'Toyota',
    industry: 'Automotive Manufacturing',
    description: 'The remarkable 3-day recovery that saved Toyota\'s JIT operations and reshaped supply chain resilience thinking.',
    slug: 'toyota-aisin-fire-recovery',
    readTime: '10 min read',
    challenge: '1997 fire destroyed sole P-valve supplier, risking entire JIT production',
    outcome: 'Avoided major production halt, implemented supplier redundancy strategies'
  },
  {
    title: 'Digital Twin Production Optimization',
    company: 'Battery Manufacturing Plant',
    industry: 'Energy Storage',
    description: 'Real-time production line reconfiguration using digital twin technology to maintain throughput during disruptions.',
    slug: 'digital-twin-battery-production',
    readTime: '11 min read',
    challenge: 'Production line disturbances causing significant throughput drops',
    outcome: 'Prevented 26% and 63% throughput losses with 0.03s optimization',
    featured: true
  },
  {
    title: 'AI-Powered OEE Prediction System',
    company: 'Automotive Cable Manufacturer',
    industry: 'Automotive Components',
    description: 'Machine learning implementation for proactive OEE optimization and predictive maintenance in cable manufacturing.',
    slug: 'ai-oee-prediction-automotive',
    readTime: '9 min read',
    challenge: 'OEE lagging behind production issues, reactive maintenance approach',
    outcome: 'Proactive intervention capability with high accuracy prediction models'
  },
  {
    title: 'IIoT Quality Consistency Framework',
    company: 'Food Processing Plant',
    industry: 'Food & Beverage',
    description: 'Data-driven quality control using IIoT sensors and predictive algorithms to reduce product variability.',
    slug: 'iiot-quality-food-processing',
    readTime: '8 min read',
    challenge: 'Inconsistent product quality and high variability in manufacturing',
    outcome: 'High prediction accuracy enabled better in-line control and consistency'
  },
  {
    title: 'Lean Manufacturing Success Stories',
    company: 'Omark, HP, Daman',
    industry: 'Multi-Industry',
    description: 'Three transformative lean implementations showing dramatic efficiency gains and lead-time reductions.',
    slug: 'lean-manufacturing-transformations',
    readTime: '13 min read',
    challenge: 'High inventory, long cycle times, excessive waste and scrap',
    outcome: '92% inventory reduction, 30% productivity increase, 97% cycle time improvement'
  },
  {
    title: 'Global ERP Transformation',
    company: 'HawksCode',
    industry: 'Multi-Country Manufacturing',
    description: 'Cloud-native, AI-enhanced ERP implementation across multiple countries with complex regulatory requirements.',
    slug: 'hawkscode-erp-transformation',
    readTime: '10 min read',
    challenge: 'Disjointed ERP systems across multiple countries and operations',
    outcome: 'Harmonized global operations, improved compliance and real-time visibility'
  },
  {
    title: 'Flexible Automation Strategy',
    company: 'Hitachi',
    industry: 'Industrial Equipment',
    description: 'Implementing flexible automation, digital twins, and remote AR/VR maintenance for operational resilience.',
    slug: 'hitachi-flexible-automation',
    readTime: '11 min read',
    challenge: 'Need for automation flexibility and remote operational capabilities',
    outcome: 'Maintained continuity during disruptions, improved remote operations'
  },
  {
    title: 'Integrated Work System Implementation',
    company: 'Dairy Manufacturer',
    industry: 'Food Processing',
    description: 'EY-led IWS deployment across 27-plant footprint achieving breakthrough operational improvements.',
    slug: 'dairy-integrated-work-system',
    readTime: '9 min read',
    challenge: 'Underperforming continuous improvement program across 27 plants',
    outcome: '75% changeover reduction, 25% throughput increase, doubled MTBF'
  },
  {
    title: 'Manufacturing Resilience Framework',
    company: 'Academic Research',
    industry: 'Manufacturing Science',
    description: 'Quantitative framework for measuring and benchmarking manufacturing resilience and disruption recovery.',
    slug: 'manufacturing-resilience-framework',
    readTime: '12 min read',
    challenge: 'No quantitative method to measure manufacturing resilience',
    outcome: 'Mathematical model linking resilience to downtime and throughput performance'
  }
]

export default function Resources() {
  const featuredResources = resourceCategories
    .flatMap(cat => cat.resources)
    .filter(resource => resource.featured)
    
  const featuredCaseStudies = caseStudies.filter(study => study.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-frame-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-frame-gray-900 mb-6">
              Manufacturing Resources
            </h1>
            <p className="text-xl lg:text-2xl text-frame-gray-600 leading-relaxed">
              In-depth guides, best practices, and strategic insights to help you excel in modern manufacturing operations.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      {featuredResources.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl lg:text-4xl font-bold text-frame-gray-900 mb-12 text-center">
              Featured Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {featuredResources.map((resource) => (
                <Link
                  key={resource.slug}
                  href={`/resources/${resource.slug}`}
                  className="group bg-gradient-to-br from-frame-blue to-blue-600 p-8 rounded-2xl text-white hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <BookOpen className="w-8 h-8 mr-3" />
                    <span className="text-sm font-medium opacity-90">{resource.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-white">
                    {resource.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="mt-6 flex items-center text-white/90 group-hover:text-white">
                    <span className="font-medium">Read More</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Resource Categories */}
      <section className="section-padding bg-frame-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl lg:text-4xl font-bold text-frame-gray-900 mb-4 text-center">
            Browse by Category
          </h2>
          <p className="text-xl text-frame-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Explore our comprehensive library of manufacturing resources organized by key operational areas.
          </p>

          <div className="space-y-16">
            {resourceCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <div key={category.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  {/* Category Header */}
                  <div className={`bg-gradient-to-br ${category.gradient} p-8 text-white`}>
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-white/20 rounded-xl mr-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{category.title}</h3>
                        <p className="text-white/90 mt-1">{category.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Resources Grid */}
                  <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.resources.map((resource) => (
                        <Link
                          key={resource.slug}
                          href={`/resources/${resource.slug}`}
                          className="group border border-frame-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300 hover:border-frame-blue/20"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <FileText className="w-5 h-5 text-frame-gray-400 group-hover:text-frame-blue transition-colors" />
                            <span className="text-sm text-frame-gray-500">{resource.readTime}</span>
                          </div>
                          <h4 className="text-lg font-semibold text-frame-gray-900 mb-2 group-hover:text-frame-blue transition-colors">
                            {resource.title}
                          </h4>
                          <p className="text-frame-gray-600 text-sm leading-relaxed">
                            {resource.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-frame-gray-900 mb-4">
              Real-World Case Studies
            </h2>
            <p className="text-xl text-frame-gray-600 max-w-3xl mx-auto">
              Learn from actual manufacturing transformations. See how leading companies solved complex operational challenges and achieved breakthrough results.
            </p>
          </div>

          {/* Featured Case Studies */}
          {featuredCaseStudies.length > 0 && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-frame-gray-900 mb-8 text-center">Featured Case Studies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {featuredCaseStudies.map((study) => (
                  <Link
                    key={study.slug}
                    href={`/case-studies/${study.slug}`}
                    className="group bg-gradient-to-br from-frame-gray-900 to-gray-800 p-8 rounded-2xl text-white hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center mb-4">
                      <Award className="w-8 h-8 mr-3 text-yellow-400" />
                      <span className="text-sm font-medium opacity-90">{study.readTime}</span>
                    </div>
                    <div className="mb-3">
                      <div className="text-sm text-yellow-400 font-medium mb-1">{study.company}</div>
                      <div className="text-xs text-white/70">{study.industry}</div>
                    </div>
                    <h4 className="text-xl font-bold mb-3 group-hover:text-white">
                      {study.title}
                    </h4>
                    <p className="text-white/90 leading-relaxed mb-4">
                      {study.description}
                    </p>
                    <div className="border-t border-white/20 pt-4 mt-4">
                      <div className="text-sm">
                        <div className="text-white/70 mb-1">Challenge:</div>
                        <div className="text-white/90 mb-3">{study.challenge}</div>
                        <div className="text-white/70 mb-1">Outcome:</div>
                        <div className="text-green-400">{study.outcome}</div>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center text-white/90 group-hover:text-white">
                      <span className="font-medium">Read Case Study</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* All Case Studies Grid */}
          <div>
            <h3 className="text-2xl font-bold text-frame-gray-900 mb-8 text-center">All Case Studies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="group bg-white border border-frame-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-frame-blue/20"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Briefcase className="w-6 h-6 text-frame-gray-400 group-hover:text-frame-blue transition-colors" />
                    <span className="text-sm text-frame-gray-500">{study.readTime}</span>
                  </div>
                  
                  <div className="mb-3">
                    <div className="text-sm font-medium text-frame-blue mb-1">{study.company}</div>
                    <div className="text-xs text-frame-gray-500">{study.industry}</div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-frame-gray-900 mb-2 group-hover:text-frame-blue transition-colors">
                    {study.title}
                  </h4>
                  
                  <p className="text-frame-gray-600 text-sm leading-relaxed mb-4">
                    {study.description}
                  </p>
                  
                  <div className="border-t border-frame-gray-100 pt-3">
                    <div className="text-xs text-frame-gray-500 mb-1">Key Result:</div>
                    <div className="text-sm font-medium text-green-600">{study.outcome}</div>
                  </div>
                </Link>
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
              Get Fresh Insights Weekly
            </h2>
            <p className="text-xl text-frame-gray-300 mb-8">
              Join thousands of manufacturing leaders who receive our latest resources and insights directly in their inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#subscribe" className="btn-primary inline-flex items-center">
                Subscribe to FRAME
              </Link>
              <Link href="/newsletter" className="bg-white text-frame-gray-900 hover:bg-frame-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center">
                View Past Issues
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}