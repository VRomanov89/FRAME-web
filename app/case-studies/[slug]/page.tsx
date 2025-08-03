import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, BookOpen, Building, MapPin, Target, TrendingUp, CheckCircle, AlertTriangle, Factory, Award } from 'lucide-react'
import FAQSection from '@/components/FAQSection'

// Case study data with comprehensive content
const caseStudies = {
  'polytron-plc-obsolescence-upgrade': {
    title: 'PLC Obsolescence Upgrade Transformation',
    company: 'Polytron',
    industry: 'Drywall Manufacturing',
    location: 'Multi-site Operations',
    description: 'How a multi-site PLC modernization project eliminated obsolescence risk and improved reliability across manufacturing operations.',
    readTime: '12 min read',
    publishDate: '2024-02-10',
    author: 'Vladimir Romanov',
    challenge: 'Aging PLC-5 controllers causing downtime and scarce spare parts',
    outcome: 'Improved reliability, reduced MRO inventory, eliminated unplanned downtime',
    content: `
      <div class="bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg mb-8">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg class="w-6 h-6 text-red-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-lg font-semibold text-red-800 mb-2">The $2.8M Wake-Up Call</h3>
            <p class="text-red-700 leading-relaxed">
              Polytron faced a crisis when their 15-year-old PLC-5 controllers began failing during peak production seasons. With spare parts discontinued and only one technician familiar with the legacy systems, unplanned downtime was costing $2.8M annually across their multi-site operations.
            </p>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">The Challenge: Legacy Systems at Breaking Point</h2>
      
      <p class="text-lg text-frame-gray-700 mb-6 leading-relaxed">
        Polytron, a leading drywall manufacturer with multiple production facilities, found themselves trapped by technological obsolescence. Their manufacturing operations depended on aging Allen-Bradley PLC-5 controllers that had been the backbone of their automation systems for over 15 years.
      </p>

      <div class="bg-frame-gray-50 rounded-xl p-8 mb-8">
        <h3 class="text-2xl font-bold text-frame-gray-900 mb-6 flex items-center">
          <svg class="w-8 h-8 mr-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
          Critical Risk Factors
        </h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Hardware Obsolescence:</strong>
                <p class="text-frame-gray-700 mt-1">PLC-5 controllers discontinued, replacement parts increasingly scarce</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Knowledge Risk:</strong>
                <p class="text-frame-gray-700 mt-1">Only one senior technician familiar with legacy ladder logic programming</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Communication Barriers:</strong>
                <p class="text-frame-gray-700 mt-1">Legacy networking protocols incompatible with modern systems</p>
              </div>
            </div>
          </div>
          <div class="space-y-4">
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Maintenance Costs:</strong>
                <p class="text-frame-gray-700 mt-1">Premium pricing for discontinued components, custom repair services</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Production Risk:</strong>
                <p class="text-frame-gray-700 mt-1">Unplanned failures during peak production seasons</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Documentation Gaps:</strong>
                <p class="text-frame-gray-700 mt-1">Incomplete system documentation, tribal knowledge dependencies</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">Strategic Modernization Approach</h2>

      <p class="text-lg text-frame-gray-700 mb-6 leading-relaxed">
        Rather than a disruptive "rip and replace" approach, Polytron implemented a carefully planned multi-phase modernization strategy that minimized production impact while maximizing technological benefits.
      </p>

      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <span class="text-2xl font-bold text-blue-600">1</span>
          </div>
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Assessment & Planning</h4>
          <p class="text-frame-gray-600 text-sm">Comprehensive audit of existing systems, risk assessment, and phased upgrade roadmap development</p>
        </div>
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <span class="text-2xl font-bold text-green-600">2</span>
          </div>
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Parallel Implementation</h4>
          <p class="text-frame-gray-600 text-sm">New ControlLogix systems installed alongside existing PLCs with gradual migration of control logic</p>
        </div>
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <span class="text-2xl font-bold text-purple-600">3</span>
          </div>
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Integration & Validation</h4>
          <p class="text-frame-gray-600 text-sm">Modern HMI deployment, network infrastructure upgrade, and comprehensive testing protocols</p>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-frame-gray-900 mb-4">Technology Stack Transformation</h3>

      <div class="overflow-x-auto mb-8">
        <table class="w-full border border-frame-gray-200 rounded-lg overflow-hidden">
          <thead class="bg-frame-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Component</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Legacy System</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Modern Solution</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Key Benefits</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-frame-gray-200">
            <tr>
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">PLCs</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Allen-Bradley PLC-5 (Discontinued)</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">ControlLogix 5580 Series</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Enhanced processing power, modern diagnostics</td>
            </tr>
            <tr class="bg-frame-gray-50">
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">HMI</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Legacy Panel View terminals</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">FactoryTalk View SE</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Real-time dashboards, remote access capability</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Networking</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">DH+ and Serial protocols</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">EtherNet/IP industrial network</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">High-speed communication, easy integration</td>
            </tr>
            <tr class="bg-frame-gray-50">
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Programming</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">RSLogix 5 (Legacy)</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Studio 5000 Logix Designer</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Modern development environment, enhanced debugging</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">Implementation Challenges & Solutions</h2>

      <div class="space-y-6 mb-8">
        <div class="bg-white border-l-4 border-yellow-500 p-6 rounded-r-lg shadow-sm">
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2 flex items-center">
            <svg class="w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            Challenge: Minimizing Production Disruption
          </h4>
          <p class="text-frame-gray-700 mb-3">
            <strong>Problem:</strong> Drywall production operates on tight schedules with minimal downtime windows for maintenance.
          </p>
          <p class="text-frame-gray-700">
            <strong>Solution:</strong> Implemented a "parallel cutover" strategy where new systems were installed and tested during planned maintenance windows, with instant rollback capability. Final cutover was completed during scheduled seasonal shutdowns.
          </p>
        </div>

        <div class="bg-white border-l-4 border-blue-500 p-6 rounded-r-lg shadow-sm">
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2 flex items-center">
            <svg class="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Challenge: Knowledge Transfer & Training
          </h4>
          <p class="text-frame-gray-700 mb-3">
            <strong>Problem:</strong> Existing maintenance staff needed training on modern automation technologies and programming environments.
          </p>
          <p class="text-frame-gray-700">
            <strong>Solution:</strong> Comprehensive 6-week training program combining classroom instruction with hands-on laboratory exercises. Created detailed documentation and standard operating procedures for ongoing reference.
          </p>
        </div>

        <div class="bg-white border-l-4 border-green-500 p-6 rounded-r-lg shadow-sm">
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2 flex items-center">
            <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            Challenge: Budget Justification & ROI
          </h4>
          <p class="text-frame-gray-700 mb-3">
            <strong>Problem:</strong> Substantial capital investment required ($1.8M across all sites) during budget-constrained period.
          </p>
          <p class="text-frame-gray-700">
            <strong>Solution:</strong> Developed comprehensive business case showing 3-year ROI through reduced maintenance costs, eliminated emergency repairs, and improved production efficiency. Negotiated phased implementation to spread costs across budget cycles.
          </p>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">Measurable Business Results</h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-gradient-to-br from-green-500 to-emerald-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">85%</div>
          <div class="text-green-100 text-sm">Reduction in unplanned downtime</div>
        </div>
        <div class="bg-gradient-to-br from-blue-500 to-indigo-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">$2.1M</div>
          <div class="text-blue-100 text-sm">Annual maintenance cost savings</div>
        </div>
        <div class="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">70%</div>
          <div class="text-purple-100 text-sm">Reduction in spare parts inventory</div>
        </div>
        <div class="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">18</div>
          <div class="text-orange-100 text-sm">Month ROI payback period</div>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-frame-gray-900 mb-4">Operational Improvements</h3>

      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div class="space-y-4">
          <h4 class="text-lg font-semibold text-frame-gray-900">Reliability Metrics</h4>
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Mean Time Between Failures (MTBF)</span>
              <span class="font-semibold text-green-600">+340%</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Mean Time to Repair (MTTR)</span>
              <span class="font-semibold text-green-600">-65%</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Emergency Service Calls</span>
              <span class="font-semibold text-green-600">-78%</span>
            </div>
          </div>
        </div>
        <div class="space-y-4">
          <h4 class="text-lg font-semibold text-frame-gray-900">Operational Metrics</h4>
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Overall Equipment Effectiveness (OEE)</span>
              <span class="font-semibold text-green-600">+12%</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Production Flexibility</span>
              <span class="font-semibold text-green-600">+25%</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Remote Diagnostic Capability</span>
              <span class="font-semibold text-green-600">100%</span>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">Strategic Impact & Lessons Learned</h2>

      <div class="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-8">
        <h3 class="text-xl font-bold text-blue-900 mb-4 flex items-center">
          <svg class="w-6 h-6 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
          Key Success Factors
        </h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="space-y-3">
            <div class="flex items-start">
              <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <div>
                <strong class="text-blue-900">Proactive Risk Management:</strong>
                <p class="text-blue-800 text-sm mt-1">Addressing obsolescence before catastrophic failure</p>
              </div>
            </div>
            <div class="flex items-start">
              <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <div>
                <strong class="text-blue-900">Stakeholder Engagement:</strong>
                <p class="text-blue-800 text-sm mt-1">Cross-functional team including operations, maintenance, and finance</p>
              </div>
            </div>
            <div class="flex items-start">
              <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <div>
                <strong class="text-blue-900">Phased Implementation:</strong>
                <p class="text-blue-800 text-sm mt-1">Minimizing risk through incremental deployment</p>
              </div>
            </div>
          </div>
          <div class="space-y-3">
            <div class="flex items-start">
              <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <div>
                <strong class="text-blue-900">Future-Proofing:</strong>
                <p class="text-blue-800 text-sm mt-1">Selecting technology with long-term vendor support</p>
              </div>
            </div>
            <div class="flex items-start">
              <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <div>
                <strong class="text-blue-900">Documentation & Knowledge Transfer:</strong>
                <p class="text-blue-800 text-sm mt-1">Comprehensive training and documentation creation</p>
              </div>
            </div>
            <div class="flex items-start">
              <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <div>
                <strong class="text-blue-900">Performance Monitoring:</strong>
                <p class="text-blue-800 text-sm mt-1">Continuous measurement and improvement post-implementation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">Applying This to Your Operations</h2>

      <div class="bg-white border border-frame-gray-200 rounded-xl p-8 mb-8">
        <h3 class="text-xl font-bold text-frame-gray-900 mb-4">Implementation Roadmap for Similar Projects</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="text-lg font-semibold text-frame-gray-900 mb-3">Phase 1: Assessment (Weeks 1-4)</h4>
            <ul class="space-y-2 text-frame-gray-700">
              <li class="flex items-start">
                <span class="w-2 h-2 bg-frame-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Conduct comprehensive obsolescence audit</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-frame-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Document existing system architecture</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-frame-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Identify critical path dependencies</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-frame-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Calculate total cost of ownership</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold text-frame-gray-900 mb-3">Phase 2: Planning (Weeks 5-8)</h4>
            <ul class="space-y-2 text-frame-gray-700">
              <li class="flex items-start">
                <span class="w-2 h-2 bg-frame-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Develop migration strategy and timeline</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-frame-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Select modern automation platform</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-frame-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Design parallel cutover approach</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-frame-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Plan training and knowledge transfer</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-frame-blue to-blue-600 rounded-xl p-8 text-white mb-8">
        <h3 class="text-2xl font-bold mb-4">FRAME Framework Application</h3>
        <p class="text-blue-100 mb-4">
          This case study demonstrates key FRAME principles in action:
        </p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="space-y-3">
            <div class="flex items-start">
              <div class="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-white">Proactive vs. Reactive:</strong>
                <p class="text-blue-100 text-sm mt-1">Addressing obsolescence before failure, not after</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-white">Data-Driven Decisions:</strong>
                <p class="text-blue-100 text-sm mt-1">Using MTBF and cost data to justify investment</p>
              </div>
            </div>
          </div>
          <div class="space-y-3">
            <div class="flex items-start">
              <div class="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-white">Systematic Approach:</strong>
                <p class="text-blue-100 text-sm mt-1">Structured methodology with clear phases and deliverables</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-white">Knowledge Preservation:</strong>
                <p class="text-blue-100 text-sm mt-1">Documentation and training to reduce tribal knowledge risk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    faqs: [
      {
        question: "How do you determine the right time to upgrade obsolete automation systems?",
        answer: "Start monitoring when vendor support transitions to \"legacy\" status, typically 10-15 years after release. Key triggers include: increasing MTTR, parts availability issues (>30 day lead times), knowledge risk (fewer than 2 qualified technicians), and integration barriers with new systems. Don't wait for failure - plan replacement when support costs exceed 15-20% of original system value annually."
      },
      {
        question: "What's the best approach for minimizing production disruption during PLC upgrades?",
        answer: "Use a parallel cutover strategy: install new systems alongside existing ones, test thoroughly during planned maintenance windows, and maintain rollback capability until confidence is established. Schedule final cutover during planned shutdowns or low-demand periods. Consider mobile backup systems for critical processes. Typical implementation takes 4-6 months with 85% less disruption than direct replacement."
      },
      {
        question: "How do you justify the capital investment for obsolescence upgrades to management?",
        answer: "Build a comprehensive business case including: current maintenance costs, emergency repair expenses, downtime impact, spare parts inventory carrying costs, and knowledge risk. Calculate 3-5 year total cost of ownership for both scenarios. Most obsolescence upgrades show positive ROI within 18-24 months when total hidden costs are included. Use risk-adjusted NPV analysis to account for failure probability."
      },
      {
        question: "What training approach works best for technicians learning modern automation systems?",
        answer: "Combine classroom theory with hands-on laboratory practice using actual equipment. Start with fundamental concepts, then progress to specific platform training. Include troubleshooting scenarios and emergency procedures. Plan 4-6 weeks initial training plus 3-6 months mentored practice. Create comprehensive documentation and standard operating procedures. Most organizations see competency development within 6 months with structured programs."
      }
    ],
    relatedResources: [
      'hidden-cost-manufacturing-obsolescence',
      'systematic-troubleshooting',
      'centerline-maturity-curve-tpm'
    ]
  },
  'toyota-aisin-fire-recovery': {
    title: 'Toyota Aisin Fire Recovery',
    company: 'Toyota',
    industry: 'Automotive Manufacturing',
    location: 'Global Operations',
    description: 'The remarkable 3-day recovery that saved Toyota\'s JIT operations and reshaped supply chain resilience thinking.',
    readTime: '10 min read',
    publishDate: '2024-02-12',
    author: 'Vladimir Romanov',
    challenge: '1997 fire destroyed sole P-valve supplier, risking entire JIT production',
    outcome: 'Avoided major production halt, implemented supplier redundancy strategies',
    content: `
      <div class="bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg mb-8">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg class="w-6 h-6 text-red-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-lg font-semibold text-red-800 mb-2">Saturday Morning Crisis</h3>
            <p class="text-red-700 leading-relaxed">
              On February 1, 1997, at 4:18 AM, a fire erupted at Aisin Seiki's Kariya plant—Toyota's sole supplier of P-valves for brake systems. In just four hours, the fire destroyed the factory that supplied critical components for Toyota's entire global production network of 4.5 million vehicles annually.
            </p>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">The Perfect Storm: When JIT Meets Reality</h2>
      
      <p class="text-lg text-frame-gray-700 mb-6 leading-relaxed">
        Toyota's legendary Just-in-Time (JIT) production system, admired worldwide for its efficiency, suddenly faced its greatest test. The company had deliberately concentrated P-valve production at a single Aisin facility to maximize economies of scale and quality control. This decision, which had served them well for decades, now threatened to shut down their entire global production network.
      </p>

      <div class="bg-frame-gray-50 rounded-xl p-8 mb-8">
        <h3 class="text-2xl font-bold text-frame-gray-900 mb-6 flex items-center">
          <svg class="w-8 h-8 mr-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
          </svg>
          Crisis Scope & Impact
        </h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Production at Risk:</strong>
                <p class="text-frame-gray-700 mt-1">4.5 million vehicles annually across 18 global manufacturing plants</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Critical Component:</strong>
                <p class="text-frame-gray-700 mt-1">P-valves essential for brake system function, no alternative suppliers</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Inventory Buffer:</strong>
                <p class="text-frame-gray-700 mt-1">Only 2-4 hours of inventory due to JIT principles</p>
              </div>
            </div>
          </div>
          <div class="space-y-4">
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Financial Exposure:</strong>
                <p class="text-frame-gray-700 mt-1">$15 billion in annual revenue at risk, $200M daily production value</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Supply Chain Complexity:</strong>
                <p class="text-frame-gray-700 mt-1">200+ first-tier suppliers, 5,000+ parts requiring synchronized production</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Time Pressure:</strong>
                <p class="text-frame-gray-700 mt-1">Production halt inevitable within 12-16 hours without alternative supply</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">The 72-Hour Miracle: Crisis Response in Action</h2>

      <p class="text-lg text-frame-gray-700 mb-6 leading-relaxed">
        What happened next became a legendary example of supplier network resilience and collaborative problem-solving. Toyota activated an unprecedented emergency response that mobilized hundreds of companies across Japan to prevent a complete production shutdown.
      </p>

      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <span class="text-2xl font-bold text-red-600">Day 1</span>
          </div>
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Emergency Assessment</h4>
          <p class="text-frame-gray-600 text-sm">Crisis team activated, damage assessment completed, alternative supplier identification initiated across Japan</p>
        </div>
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <span class="text-2xl font-bold text-orange-600">Day 2</span>
          </div>
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Network Mobilization</h4>
          <p class="text-frame-gray-600 text-sm">62 companies enlisted for emergency production, tooling and setup initiated, quality protocols established</p>
        </div>
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <span class="text-2xl font-bold text-green-600">Day 3</span>
          </div>
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Production Restart</h4>
          <p class="text-frame-gray-600 text-sm">First emergency P-valves delivered, production lines restarted, supply stabilized within 5 days</p>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-frame-gray-900 mb-4">The Unconventional Supply Network</h3>

      <p class="text-lg text-frame-gray-700 mb-6 leading-relaxed">
        Toyota's solution involved an extraordinary collaboration that transcended traditional supplier relationships. Companies that had never manufactured automotive components suddenly became critical suppliers in Toyota's emergency network.
      </p>

      <div class="overflow-x-auto mb-8">
        <table class="w-full border border-frame-gray-200 rounded-lg overflow-hidden">
          <thead class="bg-frame-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Company Type</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Examples</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Contribution</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Setup Time</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-frame-gray-200">
            <tr>
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Traditional Suppliers</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Denso, Kayaba Industry</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Immediate capacity, existing tooling adaptation</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">6-12 hours</td>
            </tr>
            <tr class="bg-frame-gray-50">
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Machine Shops</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Local precision manufacturers</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Custom machining, small batch production</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">18-24 hours</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Unrelated Industries</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Sewing machine manufacturers</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Precision assembly capabilities</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">24-48 hours</td>
            </tr>
            <tr class="bg-frame-gray-50">
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Toyota Subsidiaries</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Internal manufacturing divisions</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Rapid retooling, quality assurance</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">12-18 hours</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">Coordination Mechanisms: How 62 Companies Became One</h2>

      <div class="space-y-6 mb-8">
        <div class="bg-white border-l-4 border-blue-500 p-6 rounded-r-lg shadow-sm">
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2 flex items-center">
            <svg class="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
            </svg>
            Centralized Command Structure
          </h4>
          <p class="text-frame-gray-700 mb-3">
            <strong>Implementation:</strong> Toyota established a dedicated crisis management center with direct communication lines to all participating companies.
          </p>
          <p class="text-frame-gray-700">
            <strong>Key Success Factor:</strong> Single point of decision-making prevented coordination delays and conflicting instructions across the emergency supply network.
          </p>
        </div>

        <div class="bg-white border-l-4 border-green-500 p-6 rounded-r-lg shadow-sm">
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2 flex items-center">
            <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            Knowledge Transfer Protocols
          </h4>
          <p class="text-frame-gray-700 mb-3">
            <strong>Implementation:</strong> Toyota engineers deployed to each supplier location with blueprints, quality specifications, and hands-on training.
          </p>
          <p class="text-frame-gray-700">
            <strong>Key Success Factor:</strong> Rapid skill transfer enabled companies with no automotive experience to produce quality components within 48 hours.
          </p>
        </div>

        <div class="bg-white border-l-4 border-purple-500 p-6 rounded-r-lg shadow-sm">
          <h4 class="text-lg font-semibant text-frame-gray-900 mb-2 flex items-center">
            <svg class="w-5 h-5 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>
            Quality Assurance Framework
          </h4>
          <p class="text-frame-gray-700 mb-3">
            <strong>Implementation:</strong> Streamlined inspection process with on-site Toyota quality engineers and accelerated approval protocols.
          </p>
          <p class="text-frame-gray-700">
            <strong>Key Success Factor:</strong> Maintained quality standards while enabling rapid production startup, preventing downstream quality issues.
          </p>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">Results: Beyond Recovery to Transformation</h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-gradient-to-br from-green-500 to-emerald-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">3</div>
          <div class="text-green-100 text-sm">Days to restore production</div>
        </div>
        <div class="bg-gradient-to-br from-blue-500 to-indigo-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">62</div>
          <div class="text-blue-100 text-sm">Companies mobilized</div>
        </div>
        <div class="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">5</div>
          <div class="text-purple-100 text-sm">Days to full capacity</div>
        </div>
        <div class="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">$0</div>
          <div class="text-orange-100 text-sm">Lost revenue from shutdown</div>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-frame-gray-900 mb-4">Long-term Strategic Changes</h3>

      <p class="text-lg text-frame-gray-700 mb-6 leading-relaxed">
        The Aisin fire became a watershed moment that fundamentally changed Toyota's approach to supply chain risk management while preserving the core benefits of JIT manufacturing.
      </p>

      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div class="space-y-4">
          <h4 class="text-lg font-semibold text-frame-gray-900">Supply Chain Architecture</h4>
          <div class="space-y-3">
            <div class="flex items-start">
              <div class="w-2 h-2 bg-frame-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Controlled Redundancy:</strong>
                <p class="text-frame-gray-700 text-sm mt-1">Identified critical single-source components and established backup suppliers</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-frame-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Emergency Response Plans:</strong>
                <p class="text-frame-gray-700 text-sm mt-1">Developed detailed contingency plans for rapid supplier network activation</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-frame-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Strategic Inventory:</strong>
                <p class="text-frame-gray-700 text-sm mt-1">Maintained minimal safety stock for critical components without compromising JIT efficiency</p>
              </div>
            </div>
          </div>
        </div>
        <div class="space-y-4">
          <h4 class="text-lg font-semibold text-frame-gray-900">Network Capabilities</h4>
          <div class="space-y-3">
            <div class="flex items-start">
              <div class="w-2 h-2 bg-frame-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Rapid Deployment Teams:</strong>
                <p class="text-frame-gray-700 text-sm mt-1">Trained crisis response teams capable of setting up production at new suppliers</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-frame-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Supplier Development:</strong>
                <p class="text-frame-gray-700 text-sm mt-1">Enhanced supplier capability development to ensure crisis response readiness</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-frame-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Communication Systems:</strong>
                <p class="text-frame-gray-700 text-sm mt-1">Improved real-time communication infrastructure across the supplier network</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">Lessons for Modern Manufacturing</h2>

      <div class="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-8">
        <h3 class="text-xl font-bold text-blue-900 mb-4 flex items-center">
          <svg class="w-6 h-6 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
          Core Principles for Resilient Supply Chains
        </h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="space-y-3">
            <div class="flex items-start">
              <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <div>
                <strong class="text-blue-900">Intelligent Redundancy:</strong>
                <p class="text-blue-800 text-sm mt-1">Balance efficiency with resilience through strategic backup capabilities</p>
              </div>
            </div>
            <div class="flex items-start">
              <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <div>
                <strong class="text-blue-900">Network Relationships:</strong>
                <p class="text-blue-800 text-sm mt-1">Invest in deep supplier relationships that extend beyond transactions</p>
              </div>
            </div>
            <div class="flex items-start">
              <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <div>
                <strong class="text-blue-900">Crisis Preparedness:</strong>
                <p class="text-blue-800 text-sm mt-1">Develop and regularly test emergency response protocols</p>
              </div>
            </div>
          </div>
          <div class="space-y-3">
            <div class="flex items-start">
              <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <div>
                <strong class="text-blue-900">Rapid Knowledge Transfer:</strong>
                <p class="text-blue-800 text-sm mt-1">Create systems for quickly sharing critical production knowledge</p>
              </div>
            </div>
            <div class="flex items-start">
              <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <div>
                <strong class="text-blue-900">Cultural Collaboration:</strong>
                <p class="text-blue-800 text-sm mt-1">Foster a culture where competitors can become temporary partners</p>
              </div>
            </div>
            <div class="flex items-start">
              <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <div>
                <strong class="text-blue-900">Continuous Learning:</strong>
                <p class="text-blue-800 text-sm mt-1">Treat crises as learning opportunities to strengthen future resilience</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">Modern Applications & Relevance</h2>

      <p class="text-lg text-frame-gray-700 mb-6 leading-relaxed">
        The Aisin fire response model has become increasingly relevant in an era of global supply chain disruptions, from natural disasters to pandemics. Modern manufacturers apply these lessons through digital platforms and advanced planning systems.
      </p>

      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-3 flex items-center">
            <svg class="w-6 h-6 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            Digital Coordination
          </h4>
          <p class="text-frame-gray-600 text-sm">Cloud-based platforms enable real-time coordination across global supplier networks during crisis response</p>
        </div>
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-3 flex items-center">
            <svg class="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
            </svg>
            AI-Powered Planning
          </h4>
          <p class="text-frame-gray-600 text-sm">Machine learning algorithms identify potential alternative suppliers and optimize emergency production allocation</p>
        </div>
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-3 flex items-center">
            <svg class="w-6 h-6 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Simulation Training
          </h4>
          <p class="text-frame-gray-600 text-sm">Regular crisis simulation exercises prepare teams for rapid response without disrupting normal operations</p>
        </div>
      </div>

      <div class="bg-gradient-to-r from-frame-blue to-blue-600 rounded-xl p-8 text-white mb-8">
        <h3 class="text-2xl font-bold mb-4">FRAME Framework Application</h3>
        <p class="text-blue-100 mb-4">
          The Toyota Aisin recovery exemplifies key FRAME principles:
        </p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="space-y-3">
            <div class="flex items-start">
              <div class="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-white">Network Resilience:</strong>
                <p class="text-blue-100 text-sm mt-1">Strong supplier relationships enabling rapid crisis response</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-white">Rapid Decision Making:</strong>
                <p class="text-blue-100 text-sm mt-1">Clear command structure enabling fast, coordinated action</p>
              </div>
            </div>
          </div>
          <div class="space-y-3">
            <div class="flex items-start">
              <div class="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-white">Knowledge Mobilization:</strong>
                <p class="text-blue-100 text-sm mt-1">Rapid transfer of critical production knowledge across network</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-white">Continuous Learning:</strong>
                <p class="text-blue-100 text-sm mt-1">Transforming crisis experience into improved system design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    faqs: [
      {
        question: "How can manufacturers balance JIT efficiency with supply chain resilience?",
        answer: "Focus on 'intelligent redundancy' - maintain lean operations for non-critical components while building strategic backup capabilities for single-source, critical parts. Use risk assessment matrices to identify components that warrant backup suppliers or safety stock. Toyota's post-Aisin approach maintains JIT benefits while selectively adding resilience where the risk-cost analysis justifies it."
      },
      {
        question: "What makes a supplier network capable of crisis response like Toyota's?",
        answer: "Three key elements: (1) Deep relationships based on mutual trust and shared values, not just contracts; (2) Ongoing investment in supplier capability development; (3) Regular communication and collaboration that creates understanding of each other's operations. The strongest networks have suppliers who understand they're part of an ecosystem, not just vendors."
      },
      {
        question: "How do you prepare for supply chain disruptions without knowing what form they'll take?",
        answer: "Focus on building general crisis response capabilities rather than planning for specific scenarios. This includes: rapid assessment protocols, clear decision-making authority, communication systems that work under stress, pre-identified alternative suppliers, and trained crisis response teams. The Toyota model shows that good process beats perfect prediction."
      },
      {
        question: "What role does company culture play in supply chain crisis recovery?",
        answer: "Culture is critical - it determines whether suppliers will go above and beyond during emergencies. Toyota's long-term relationship approach, where they support suppliers during their difficulties, created goodwill that suppliers reciprocated during the crisis. Companies with purely transactional supplier relationships typically see much slower crisis response."
      }
    ],
    relatedResources: [
      'digital-twin-battery-production',
      'manufacturing-resilience-framework',
      'lean-manufacturing-transformations'
    ]
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const caseStudy = caseStudies[params.slug as keyof typeof caseStudies]
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | FRAME',
      description: 'The requested case study could not be found.'
    }
  }

  return {
    title: `${caseStudy.title} | FRAME Case Studies`,
    description: caseStudy.description,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.description,
      type: 'article',
    },
  }
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies[params.slug as keyof typeof caseStudies]

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-white py-16">
        <div className="container-custom max-w-4xl text-center">
          <h1 className="text-3xl font-bold mb-4 text-frame-gray-900">Case Study Not Found</h1>
          <p className="text-frame-gray-600 mb-8">The case study you're looking for doesn't exist or has been moved.</p>
          <Link href="/resources" className="btn-primary">
            Back to Resources
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-frame-gray-200 py-4">
        <div className="container-custom max-w-4xl">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-frame-gray-500 hover:text-frame-gray-700">
                  Home
                </Link>
              </li>
              <li><span className="text-frame-gray-400">/</span></li>
              <li>
                <Link href="/resources" className="text-frame-gray-500 hover:text-frame-gray-700">
                  Resources
                </Link>
              </li>
              <li><span className="text-frame-gray-400">/</span></li>
              <li className="text-frame-gray-900">{caseStudy.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="py-12 bg-gradient-to-br from-frame-gray-50 to-white">
        <div className="container-custom max-w-4xl">
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-frame-blue text-white">
                Case Study
              </span>
              <div className="flex items-center text-frame-gray-600">
                <Clock className="w-4 h-4 mr-1" />
                <span className="text-sm">{caseStudy.readTime}</span>
              </div>
              <div className="flex items-center text-frame-gray-600">
                <Calendar className="w-4 h-4 mr-1" />
                <span className="text-sm">February 10, 2024</span>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-frame-gray-900 mb-4">
              {caseStudy.title}
            </h1>
            
            <p className="text-xl text-frame-gray-600 leading-relaxed mb-6">
              {caseStudy.description}
            </p>

            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Building className="w-5 h-5 text-frame-gray-400 mr-2" />
                <div>
                  <div className="text-sm font-medium text-frame-gray-900">{caseStudy.company}</div>
                  <div className="text-sm text-frame-gray-500">{caseStudy.industry}</div>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-frame-gray-400 mr-2" />
                <div className="text-sm text-frame-gray-600">{caseStudy.location}</div>
              </div>
            </div>
          </div>

          {/* Challenge & Outcome Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
                <h3 className="text-lg font-semibold text-red-900">Challenge</h3>
              </div>
              <p className="text-red-800">{caseStudy.challenge}</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                <h3 className="text-lg font-semibold text-green-900">Outcome</h3>
              </div>
              <p className="text-green-800">{caseStudy.outcome}</p>
            </div>
          </div>

          {/* Author */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-frame-blue rounded-full flex items-center justify-center text-white font-bold mr-4">
              VR
            </div>
            <div>
              <div className="font-medium text-frame-gray-900">Vladimir Romanov</div>
              <div className="text-sm text-frame-gray-500">Managing Partner, FRAME</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-12">
        <div className="container-custom max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: caseStudy.content }} />
          </article>

          {/* FAQ Section */}
          <FAQSection faqs={caseStudy.faqs} />

          {/* CTA */}
          <div className="bg-frame-gray-50 rounded-2xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold text-frame-gray-900 mb-4">
              This is the kind of clarity we send every week in FRAME.
            </h3>
            <p className="text-frame-gray-600 mb-6">
              Get practical insights and strategic thinking for manufacturing leaders delivered to your inbox.
            </p>
            <Link 
              href="/#subscribe" 
              className="btn-primary inline-flex items-center"
            >
              Subscribe for Weekly Insights
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Related Resources */}
          <div className="border-t border-frame-gray-200 pt-12">
            <h3 className="text-2xl font-bold text-frame-gray-900 mb-8">Related Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudy.relatedResources.map((slug) => (
                <Link 
                  key={slug}
                  href={`/resources/${slug}`}
                  className="group border border-frame-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300"
                >
                  <BookOpen className="w-8 h-8 text-frame-gray-400 group-hover:text-frame-blue mb-4" />
                  <h4 className="text-lg font-semibold text-frame-gray-900 group-hover:text-frame-blue">
                    {slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-frame-gray-900 text-white py-16">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Operations?</h2>
          <p className="text-frame-gray-300 mb-8">
            Explore more resources or get in touch to discuss your specific challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/resources" className="bg-white text-frame-gray-900 hover:bg-frame-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Resources
            </Link>
            <Link href="/team" className="btn-primary">
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}