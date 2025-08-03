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
  },
  'digital-twin-battery-production': {
    title: 'Digital Twin Production Optimization',
    company: 'Battery Manufacturing Plant',
    industry: 'Energy Storage',
    location: 'Industrial Facility',
    description: 'Real-time production line reconfiguration using digital twin technology to maintain throughput during disruptions.',
    readTime: '11 min read',
    publishDate: '2024-02-14',
    author: 'Vladimir Romanov',
    challenge: 'Production line disturbances causing significant throughput drops',
    outcome: 'Prevented 26% and 63% throughput losses with 0.03s optimization',
    content: `
      <div class="bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg mb-8">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg class="w-6 h-6 text-red-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-lg font-semibold text-red-800 mb-2">The Production Reality Check</h3>
            <p class="text-red-700 leading-relaxed">
              Battery manufacturing lines are complex, interconnected systems where a single disturbance can cascade into massive throughput losses. When this facility faced production disruptions that could drop output by 26-63%, they needed more than traditional reactive responses—they needed real-time intelligence.
            </p>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">The Challenge: Production Line Volatility</h2>
      
      <p class="text-lg text-frame-gray-700 mb-6 leading-relaxed">
        Modern battery manufacturing operates with razor-thin margins and zero tolerance for quality defects. Production lines consist of multiple interconnected stations—coating, drying, calendering, slitting, and assembly—each with precise timing and environmental requirements. When disruptions occur, the ripple effects can devastate overall equipment effectiveness (OEE).
      </p>

      <div class="bg-frame-gray-50 rounded-xl p-8 mb-8">
        <h3 class="text-2xl font-bold text-frame-gray-900 mb-6 flex items-center">
          <svg class="w-8 h-8 mr-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
          </svg>
          Production Line Complexity
        </h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Equipment Interdependency:</strong>
                <p class="text-frame-gray-700 mt-1">5 main production stations with precise timing requirements</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Quality Constraints:</strong>
                <p class="text-frame-gray-700 mt-1">Zero tolerance for contamination or dimensional variations</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Environmental Sensitivity:</strong>
                <p class="text-frame-gray-700 mt-1">Humidity, temperature, and contamination control critical</p>
              </div>
            </div>
          </div>
          <div class="space-y-4">
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Throughput Sensitivity:</strong>
                <p class="text-frame-gray-700 mt-1">Single station slowdown affects entire line performance</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Cost Impact:</strong>
                <p class="text-frame-gray-700 mt-1">$50K+ hourly revenue loss during major disruptions</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Response Time:</strong>
                <p class="text-frame-gray-700 mt-1">Manual responses take 10-15 minutes, causing cascading delays</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">Digital Twin Solution: Real-Time Intelligence</h2>

      <p class="text-lg text-frame-gray-700 mb-6 leading-relaxed">
        The facility implemented a comprehensive digital twin system that creates a real-time virtual replica of the entire production line. This system continuously monitors equipment performance, predicts disturbances, and automatically reconfigures operations to maintain optimal throughput.
      </p>

      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <span class="text-2xl font-bold text-blue-600">1</span>
          </div>
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Data Integration</h4>
          <p class="text-frame-gray-600 text-sm">Real-time sensor data from all production stations feeding into centralized digital twin model</p>
        </div>
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <span class="text-2xl font-bold text-green-600">2</span>
          </div>
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Predictive Analysis</h4>
          <p class="text-frame-gray-600 text-sm">Advanced algorithms predict disturbances and calculate optimal reconfigurations</p>
        </div>
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <span class="text-2xl font-bold text-purple-600">3</span>
          </div>
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Automated Response</h4>
          <p class="text-frame-gray-600 text-sm">Immediate equipment adjustments and resource reallocation without human intervention</p>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-frame-gray-900 mb-4">System Architecture</h3>

      <div class="overflow-x-auto mb-8">
        <table class="w-full border border-frame-gray-200 rounded-lg overflow-hidden">
          <thead class="bg-frame-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Component</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Technology</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Function</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Update Frequency</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-frame-gray-200">
            <tr>
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Sensor Network</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">IoT sensors, PLCs, vision systems</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Real-time data collection</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">100ms</td>
            </tr>
            <tr class="bg-frame-gray-50">
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Digital Twin Core</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Python, TensorFlow, real-time analytics</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Process modeling and simulation</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">1s</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Optimization Engine</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Genetic algorithms, linear programming</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Calculate optimal configurations</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">5s</td>
            </tr>
            <tr class="bg-frame-gray-50">
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Control Interface</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">OPC-UA, SCADA integration</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Execute configuration changes</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">30ms</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">Real-World Test Scenarios</h2>

      <p class="text-lg text-frame-gray-700 mb-6 leading-relaxed">
        The digital twin system was tested against two critical disruption scenarios that commonly affect battery production lines. The results demonstrated the system's ability to maintain throughput under challenging conditions.
      </p>

      <div class="space-y-6 mb-8">
        <div class="bg-white border-l-4 border-blue-500 p-6 rounded-r-lg shadow-sm">
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2 flex items-center">
            <svg class="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Scenario 1: Drying Station Malfunction
          </h4>
          <p class="text-frame-gray-700 mb-3">
            <strong>Disruption:</strong> Critical drying station experienced temperature control failure, requiring 40% capacity reduction.
          </p>
          <p class="text-frame-gray-700 mb-3">
            <strong>Traditional Response:</strong> Manual line speed reduction would have caused 26% overall throughput loss.
          </p>
          <p class="text-frame-gray-700">
            <strong>Digital Twin Response:</strong> System automatically adjusted coating thickness, modified calendering pressure, and optimized buffer management in 0.03 seconds, maintaining 98% throughput.
          </p>
        </div>

        <div class="bg-white border-l-4 border-green-500 p-6 rounded-r-lg shadow-sm">
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2 flex items-center">
            <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            Scenario 2: Raw Material Quality Variation
          </h4>
          <p class="text-frame-gray-700 mb-3">
            <strong>Disruption:</strong> Incoming electrode material showed viscosity variations requiring process parameter adjustments.
          </p>
          <p class="text-frame-gray-700 mb-3">
            <strong>Traditional Response:</strong> Quality team assessment and manual adjustments would have reduced throughput by 63%.
          </p>
          <p class="text-frame-gray-700">
            <strong>Digital Twin Response:</strong> Predictive quality models triggered automatic coating speed, pressure, and temperature adjustments, preventing quality issues while maintaining 95% throughput.
          </p>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">Quantified Business Impact</h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-gradient-to-br from-green-500 to-emerald-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">0.03s</div>
          <div class="text-green-100 text-sm">Response time for configuration changes</div>
        </div>
        <div class="bg-gradient-to-br from-blue-500 to-indigo-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">95%+</div>
          <div class="text-blue-100 text-sm">Throughput maintained during disruptions</div>
        </div>
        <div class="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">$2.1M</div>
          <div class="text-purple-100 text-sm">Annual throughput loss prevention</div>
        </div>
        <div class="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">24/7</div>
          <div class="text-orange-100 text-sm">Autonomous monitoring and response</div>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-frame-gray-900 mb-4">Operational Excellence Metrics</h3>

      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div class="space-y-4">
          <h4 class="text-lg font-semibold text-frame-gray-900">Production Efficiency</h4>
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Overall Equipment Effectiveness (OEE)</span>
              <span class="font-semibold text-green-600">+18%</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Unplanned Downtime</span>
              <span class="font-semibold text-green-600">-67%</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Quality Rejection Rate</span>
              <span class="font-semibold text-green-600">-45%</span>
            </div>
          </div>
        </div>
        <div class="space-y-4">
          <h4 class="text-lg font-semibold text-frame-gray-900">Operational Responsiveness</h4>
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Disruption Response Time</span>
              <span class="font-semibold text-green-600">-99.8%</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Manual Intervention Required</span>
              <span class="font-semibold text-green-600">-85%</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Process Optimization Cycles</span>
              <span class="font-semibold text-green-600">+340%</span>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">Technical Implementation Insights</h2>

      <div class="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-8">
        <h3 class="text-xl font-bold text-blue-900 mb-4 flex items-center">
          <svg class="w-6 h-6 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
          Critical Success Factors
        </h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="space-y-3">
            <div class="flex items-start">
              <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <div>
                <strong class="text-blue-900">Real-Time Data Quality:</strong>
                <p class="text-blue-800 text-sm mt-1">High-frequency, low-latency sensor data with 99.9% accuracy</p>
              </div>
            </div>
            <div class="flex items-start">
              <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <div>
                <strong class="text-blue-900">Predictive Modeling:</strong>
                <p class="text-blue-800 text-sm mt-1">Machine learning models trained on 18 months of historical data</p>
              </div>
            </div>
            <div class="flex items-start">
              <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <div>
                <strong class="text-blue-900">Integration Architecture:</strong>
                <p class="text-blue-800 text-sm mt-1">Seamless connection to existing PLC and SCADA systems</p>
              </div>
            </div>
          </div>
          <div class="space-y-3">
            <div class="flex items-start">
              <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <div>
                <strong class="text-blue-900">Safety Validation:</strong>
                <p class="text-blue-800 text-sm mt-1">Multiple safety checkpoints prevent unsafe operational changes</p>
              </div>
            </div>
            <div class="flex items-start">
              <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <div>
                <strong class="text-blue-900">Continuous Learning:</strong>
                <p class="text-blue-800 text-sm mt-1">Models automatically update based on new process data</p>
              </div>
            </div>
            <div class="flex items-start">
              <svg class="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <div>
                <strong class="text-blue-900">Operator Trust:</strong>
                <p class="text-blue-800 text-sm mt-1">Transparent decision-making with clear operator override capabilities</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">Implementation Roadmap</h2>

      <div class="bg-white border border-frame-gray-200 rounded-xl p-8 mb-8">
        <h3 class="text-xl font-bold text-frame-gray-900 mb-4">Phased Deployment Strategy</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="text-lg font-semibold text-frame-gray-900 mb-3">Phase 1: Foundation (Months 1-3)</h4>
            <ul class="space-y-2 text-frame-gray-700">
              <li class="flex items-start">
                <span class="w-2 h-2 bg-frame-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Install comprehensive sensor network</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-frame-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Develop baseline digital twin model</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-frame-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Establish data integration infrastructure</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-frame-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Train machine learning models on historical data</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold text-frame-gray-900 mb-3">Phase 2: Intelligence (Months 4-6)</h4>
            <ul class="space-y-2 text-frame-gray-700">
              <li class="flex items-start">
                <span class="w-2 h-2 bg-frame-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Deploy predictive analytics capabilities</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-frame-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Implement optimization algorithms</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-frame-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Begin controlled automation testing</span>
              </li>
              <li class="flex items-start">
                <span class="w-2 h-2 bg-frame-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Validate safety and quality systems</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-frame-blue to-blue-600 rounded-xl p-8 text-white mb-8">
        <h3 class="text-2xl font-bold mb-4">FRAME Framework Application</h3>
        <p class="text-blue-100 mb-4">
          This digital twin implementation exemplifies key FRAME principles:
        </p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="space-y-3">
            <div class="flex items-start">
              <div class="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-white">Data-Driven Decisions:</strong>
                <p class="text-blue-100 text-sm mt-1">Real-time analytics enable immediate, informed responses</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-white">Proactive Operations:</strong>
                <p class="text-blue-100 text-sm mt-1">Predictive models prevent problems before they impact production</p>
              </div>
            </div>
          </div>
          <div class="space-y-3">
            <div class="flex items-start">
              <div class="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-white">Continuous Optimization:</strong>
                <p class="text-blue-100 text-sm mt-1">System constantly learns and improves operational efficiency</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-white">Human-Machine Collaboration:</strong>
                <p class="text-blue-100 text-sm mt-1">Augments human decision-making while maintaining operator control</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    faqs: [
      {
        question: "How does a digital twin differ from traditional SCADA monitoring systems?",
        answer: "While SCADA systems provide real-time data visualization, digital twins create predictive models that simulate future states and automatically optimize operations. Traditional SCADA is reactive—showing what happened. Digital twins are proactive—predicting what will happen and taking preventive action. The battery plant's system processes 10,000+ data points per second to maintain a virtual replica that's always 100ms ahead of the physical process."
      },
      {
        question: "What's the typical ROI timeline for digital twin implementations in manufacturing?",
        answer: "Most manufacturing digital twin projects show positive ROI within 12-18 months. The battery plant achieved payback in 14 months through throughput optimization alone. Key value drivers include: reduced unplanned downtime (30-50% improvement), quality improvement (20-40% reduction in defects), and energy optimization (5-15% reduction in consumption). The ongoing operational benefits compound over time as the system learns and improves."
      },
      {
        question: "How do you ensure digital twin models remain accurate as processes change?",
        answer: "Continuous model validation and adaptation are critical. The battery plant system includes: (1) Real-time model drift detection comparing predictions to actual outcomes, (2) Automated model retraining triggered by performance thresholds, (3) A/B testing of model variants in simulation before deployment, (4) Human expert validation of significant model changes. The system flags when confidence levels drop below acceptable thresholds and requests operator validation."
      },
      {
        question: "What are the cybersecurity considerations for digital twin systems?",
        answer: "Digital twins require robust cybersecurity due to their deep integration with production systems. Key measures include: network segmentation with secure industrial DMZ, encrypted communication protocols, role-based access controls, continuous security monitoring, and air-gapped backup systems. The battery plant maintains separate networks for data collection and control execution, with strict authentication protocols for any system modifications."
      }
    ],
    relatedResources: [
      'ai-manufacturing-vision-systems',
      'erp-misalignment-manufacturing',
      'improving-oee-interpretation'
    ]
  },
  'ai-oee-prediction-automotive': {
    title: 'AI-Powered OEE Prediction System',
    company: 'Automotive Cable Manufacturer',
    industry: 'Automotive Components',
    location: 'Michigan Manufacturing Facility',
    description: 'Machine learning implementation for proactive OEE optimization and predictive maintenance in cable manufacturing.',
    readTime: '9 min read',
    publishDate: '2024-02-16',
    author: 'Vladimir Romanov',
    challenge: 'OEE lagging behind production issues, reactive maintenance approach',
    outcome: 'Proactive intervention capability with high accuracy prediction models',
    content: `
      <div class="bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg mb-8">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg class="w-6 h-6 text-red-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-lg font-semibold text-red-800 mb-2">The Reactive Trap</h3>
            <p class="text-red-700 leading-relaxed">
              This automotive cable manufacturer faced a classic problem: their OEE metrics were reporting yesterday's problems, not predicting tomorrow's opportunities. By the time equipment issues showed up in traditional OEE calculations, production losses had already occurred and customer deliveries were at risk.
            </p>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">The Challenge: OEE as a Lagging Indicator</h2>
      
      <p class="text-lg text-frame-gray-700 mb-6 leading-relaxed">
        Traditional OEE monitoring provides valuable insights into past performance but offers limited predictive capability. This automotive cable manufacturing facility operated 12 production lines producing critical wiring harnesses for major automotive OEMs, where quality defects or delivery delays could shut down vehicle assembly plants.
      </p>

      <div class="bg-frame-gray-50 rounded-xl p-8 mb-8">
        <h3 class="text-2xl font-bold text-frame-gray-900 mb-6 flex items-center">
          <svg class="w-8 h-8 mr-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
          </svg>
          Operational Pain Points
        </h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Reactive Maintenance:</strong>
                <p class="text-frame-gray-700 mt-1">Equipment failures discovered only after impacting production</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">OEE Lag Time:</strong>
                <p class="text-frame-gray-700 mt-1">Performance metrics available 2-4 hours after issues occur</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Quality Escapes:</strong>
                <p class="text-frame-gray-700 mt-1">Defective products reaching automotive assembly lines</p>
              </div>
            </div>
          </div>
          <div class="space-y-4">
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Customer Impact:</strong>
                <p class="text-frame-gray-700 mt-1">Late deliveries causing production delays at OEM plants</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Resource Inefficiency:</strong>
                <p class="text-frame-gray-700 mt-1">Maintenance teams fighting fires instead of preventing them</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Hidden Losses:</strong>
                <p class="text-frame-gray-700 mt-1">Gradual equipment degradation not captured in standard metrics</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">Machine Learning Solution: Predictive OEE</h2>

      <p class="text-lg text-frame-gray-700 mb-6 leading-relaxed">
        The facility implemented a comprehensive machine learning system that analyzes real-time production data to predict future OEE performance. Rather than waiting for problems to impact metrics, the system identifies patterns that indicate declining performance and enables proactive intervention.
      </p>

      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <span class="text-2xl font-bold text-blue-600">1</span>
          </div>
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Data Collection</h4>
          <p class="text-frame-gray-600 text-sm">Multi-source data integration from PLCs, sensors, quality systems, and maintenance records</p>
        </div>
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <span class="text-2xl font-bold text-green-600">2</span>
          </div>
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">ML Processing</h4>
          <p class="text-frame-gray-600 text-sm">Advanced algorithms analyze patterns and predict future OEE performance with high accuracy</p>
        </div>
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <span class="text-2xl font-bold text-purple-600">3</span>
          </div>
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Proactive Alerts</h4>
          <p class="text-frame-gray-600 text-sm">Early warning system enables maintenance intervention before performance degradation</p>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-frame-gray-900 mb-4">Machine Learning Model Comparison</h3>

      <div class="overflow-x-auto mb-8">
        <table class="w-full border border-frame-gray-200 rounded-lg overflow-hidden">
          <thead class="bg-frame-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Algorithm</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Accuracy</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Prediction Window</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Use Case</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-frame-gray-200">
            <tr>
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Random Forest</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">94.2%</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">2-4 hours</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Short-term performance prediction</td>
            </tr>
            <tr class="bg-frame-gray-50">
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Deep Learning (LSTM)</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">96.8%</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">4-8 hours</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Pattern recognition in time series</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Support Vector Machine</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">91.5%</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">1-2 hours</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Anomaly detection in equipment behavior</td>
            </tr>
            <tr class="bg-frame-gray-50">
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">XGBoost</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">93.7%</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">3-6 hours</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Feature importance and interpretability</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">Implementation Results</h2>

      <p class="text-lg text-frame-gray-700 mb-6 leading-relaxed">
        The AI-powered OEE prediction system was deployed across all 12 production lines over a 6-month period. The results demonstrated significant improvements in both predictive accuracy and operational response times.
      </p>

      <div class="space-y-6 mb-8">
        <div class="bg-white border-l-4 border-blue-500 p-6 rounded-r-lg shadow-sm">
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2 flex items-center">
            <svg class="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Early Warning Success: Wire Insulation Degradation
          </h4>
          <p class="text-frame-gray-700 mb-3">
            <strong>Prediction:</strong> ML model detected subtle changes in current draw patterns 6 hours before wire insulation failure.
          </p>
          <p class="text-frame-gray-700 mb-3">
            <strong>Traditional Response:</strong> Failure would have caused 8-hour downtime and 2,400 defective units.
          </p>
          <p class="text-frame-gray-700">
            <strong>Proactive Action:</strong> Scheduled maintenance during planned changeover, preventing downtime and quality issues.
          </p>
        </div>

        <div class="bg-white border-l-4 border-green-500 p-6 rounded-r-lg shadow-sm">
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2 flex items-center">
            <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            Quality Prediction: Terminal Crimping Optimization
          </h4>
          <p class="text-frame-gray-700 mb-3">
            <strong>Challenge:</strong> Micro-variations in crimping force leading to intermittent connection failures.
          </p>
          <p class="text-frame-gray-700 mb-3">
            <strong>ML Solution:</strong> Deep learning model identified optimal crimping parameters based on wire gauge and terminal type.
          </p>
          <p class="text-frame-gray-700">
            <strong>Result:</strong> 89% reduction in connection-related quality escapes, improved first-pass yield from 94% to 99.2%.
          </p>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">Business Impact Metrics</h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-gradient-to-br from-green-500 to-emerald-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">96.8%</div>
          <div class="text-green-100 text-sm">OEE prediction accuracy</div>
        </div>
        <div class="bg-gradient-to-br from-blue-500 to-indigo-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">6 hrs</div>
          <div class="text-blue-100 text-sm">Early warning lead time</div>
        </div>
        <div class="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">47%</div>
          <div class="text-purple-100 text-sm">Reduction in unplanned downtime</div>
        </div>
        <div class="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">$1.2M</div>
          <div class="text-orange-100 text-sm">Annual cost avoidance</div>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-frame-gray-900 mb-4">Operational Performance Gains</h3>

      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div class="space-y-4">
          <h4 class="text-lg font-semibold text-frame-gray-900">Equipment Reliability</h4>
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Mean Time Between Failures (MTBF)</span>
              <span class="font-semibold text-green-600">+73%</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Planned vs Unplanned Maintenance Ratio</span>
              <span class="font-semibold text-green-600">85:15</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Emergency Repair Calls</span>
              <span class="font-semibold text-green-600">-68%</span>
            </div>
          </div>
        </div>
        <div class="space-y-4">
          <h4 class="text-lg font-semibold text-frame-gray-900">Quality & Delivery</h4>
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Customer Quality PPM</span>
              <span class="font-semibold text-green-600">-89%</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">On-Time Delivery</span>
              <span class="font-semibold text-green-600">99.7%</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Overall OEE</span>
              <span class="font-semibold text-green-600">+14%</span>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-frame-blue to-blue-600 rounded-xl p-8 text-white mb-8">
        <h3 class="text-2xl font-bold mb-4">FRAME Framework Application</h3>
        <p class="text-blue-100 mb-4">
          This AI-powered OEE implementation showcases FRAME principles:
        </p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="space-y-3">
            <div class="flex items-start">
              <div class="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-white">Proactive Intelligence:</strong>
                <p class="text-blue-100 text-sm mt-1">Predictive analytics enable intervention before problems impact production</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-white">Data-Driven Maintenance:</strong>
                <p class="text-blue-100 text-sm mt-1">ML models guide maintenance scheduling and resource allocation</p>
              </div>
            </div>
          </div>
          <div class="space-y-3">
            <div class="flex items-start">
              <div class="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-white">Continuous Improvement:</strong>
                <p class="text-blue-100 text-sm mt-1">System learns and adapts to improve prediction accuracy over time</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-white">Quality Excellence:</strong>
                <p class="text-blue-100 text-sm mt-1">Predictive quality control prevents defects from reaching customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    faqs: [
      {
        question: "How does predictive OEE differ from traditional OEE monitoring?",
        answer: "Traditional OEE tells you what happened—it's a lagging indicator. Predictive OEE uses machine learning to forecast future performance based on current patterns and trends. Instead of reporting a 15% availability loss after equipment fails, predictive OEE identifies the degradation patterns 6+ hours before failure, enabling proactive intervention. The automotive cable plant's system analyzes 200+ variables in real-time to predict OEE with 96.8% accuracy."
      },
      {
        question: "What data sources are required for effective OEE prediction models?",
        answer: "Successful OEE prediction requires diverse, high-quality data streams: (1) Equipment data from PLCs and sensors (vibration, temperature, current draw), (2) Process parameters (speed, pressure, quality measurements), (3) Historical maintenance records and failure patterns, (4) Environmental conditions (temperature, humidity), (5) Production schedules and changeover data. The key is data frequency—models need high-resolution data (1-second intervals) to detect subtle performance degradation patterns."
      },
      {
        question: "How do you validate the accuracy of machine learning OEE predictions?",
        answer: "Model validation uses multiple approaches: (1) Historical backtesting against known failures and performance events, (2) Cross-validation with held-out datasets, (3) Real-time monitoring of prediction vs. actual performance, (4) A/B testing of different algorithms. The automotive facility tracks prediction accuracy continuously and retrains models when accuracy drops below 90%. They also maintain human expert validation—operators can flag false positives to improve model learning."
      },
      {
        question: "What's the typical implementation timeline for AI-powered OEE systems?",
        answer: "Most implementations follow a 6-12 month timeline: Months 1-3: Data infrastructure and collection system setup; Months 4-6: Model development and initial training; Months 7-9: Pilot deployment and validation; Months 10-12: Full rollout and optimization. The automotive plant started seeing value by month 4 with basic predictions, achieved 90%+ accuracy by month 8, and reached full operational capability by month 12. The key is starting with one production line to prove the concept before scaling."
      }
    ],
    relatedResources: [
      'improving-oee-interpretation',
      'practical-six-sigma-operations',
      'manufacturing-metrics-action'
    ]
  },
  'iiot-quality-food-processing': {
    title: 'IIoT Quality Consistency Framework',
    company: 'Food Processing Plant',
    industry: 'Food & Beverage',
    location: 'Multi-line Production Facility',
    description: 'Data-driven quality control using IIoT sensors and predictive algorithms to reduce product variability.',
    readTime: '8 min read',
    publishDate: '2024-02-18',
    author: 'Vladimir Romanov',
    challenge: 'Inconsistent product quality and high variability in manufacturing',
    outcome: 'High prediction accuracy enabled better in-line control and consistency',
    content: `
      <div class="bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg mb-8">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg class="w-6 h-6 text-red-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-lg font-semibold text-red-800 mb-2">The Quality Variability Crisis</h3>
            <p class="text-red-700 leading-relaxed">
              This food processing facility faced mounting pressure from retailers demanding consistent product quality. Despite following standard recipes and procedures, batch-to-batch variation was causing customer complaints and increasing waste by 12%. Traditional quality control caught problems too late—after thousands of units were already produced.
            </p>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">The Challenge: Quality Inconsistency at Scale</h2>
      
      <p class="text-lg text-frame-gray-700 mb-6 leading-relaxed">
        Food manufacturing operates under stringent quality requirements while maintaining high-volume production. This facility produced over 50,000 units daily across multiple product lines, where even small variations in moisture, texture, or flavor could result in customer rejections and brand damage. Traditional end-of-line testing provided limited insight into process variability.
      </p>

      <div class="bg-frame-gray-50 rounded-xl p-8 mb-8">
        <h3 class="text-2xl font-bold text-frame-gray-900 mb-6 flex items-center">
          <svg class="w-8 h-8 mr-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
          </svg>
          Quality Control Challenges
        </h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Late Detection:</strong>
                <p class="text-frame-gray-700 mt-1">Quality issues discovered hours after production, leading to large batch waste</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Process Variability:</strong>
                <p class="text-frame-gray-700 mt-1">Inconsistent moisture, temperature, and mixing affecting final product quality</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Limited Visibility:</strong>
                <p class="text-frame-gray-700 mt-1">Insufficient real-time data on critical process parameters</p>
              </div>
            </div>
          </div>
          <div class="space-y-4">
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Customer Complaints:</strong>
                <p class="text-frame-gray-700 mt-1">Rising quality complaints from major retail customers</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Waste Costs:</strong>
                <p class="text-frame-gray-700 mt-1">12% product waste due to quality variations and rework</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Reactive Adjustments:</strong>
                <p class="text-frame-gray-700 mt-1">Manual process adjustments based on delayed feedback</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">IIoT Solution: Real-Time Quality Intelligence</h2>

      <p class="text-lg text-frame-gray-700 mb-6 leading-relaxed">
        The facility implemented a comprehensive Industrial Internet of Things (IIoT) system that monitors critical quality parameters in real-time throughout the production process. Advanced algorithms analyze sensor data to predict quality outcomes and automatically adjust process parameters to maintain consistency.
      </p>

      <div class="grid md:grid-cols-4 gap-6 mb-8">
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <span class="text-lg font-bold text-blue-600">150+</span>
          </div>
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Sensors</h4>
          <p class="text-frame-gray-600 text-sm">IoT sensors monitoring temperature, moisture, pH, pressure, and flow rates</p>
        </div>
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <span class="text-lg font-bold text-green-600">5sec</span>
          </div>
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Data Updates</h4>
          <p class="text-frame-gray-600 text-sm">Real-time quality parameter monitoring with 5-second refresh rates</p>
        </div>
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <span class="text-lg font-bold text-purple-600">AI</span>
          </div>
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Predictive Models</h4>
          <p class="text-frame-gray-600 text-sm">Machine learning algorithms predicting quality outcomes and process adjustments</p>
        </div>
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <span class="text-lg font-bold text-orange-600">Auto</span>
          </div>
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Control</h4>
          <p class="text-frame-gray-600 text-sm">Automated process adjustments to maintain quality specifications</p>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-frame-gray-900 mb-4">Sensor Network Architecture</h3>

      <div class="overflow-x-auto mb-8">
        <table class="w-full border border-frame-gray-200 rounded-lg overflow-hidden">
          <thead class="bg-frame-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Process Stage</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Parameters Monitored</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Sensor Type</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Quality Impact</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-frame-gray-200">
            <tr>
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Ingredient Mixing</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Temperature, mixing speed, moisture</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Thermocouple, torque, NIR</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Texture consistency, ingredient distribution</td>
            </tr>
            <tr class="bg-frame-gray-50">
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Cooking/Heating</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Core temperature, pressure, time</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">RTD probes, pressure transducers</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Food safety, flavor development</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Forming/Shaping</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Pressure, thickness, weight</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Load cells, laser measurement</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Product dimensions, portion control</td>
            </tr>
            <tr class="bg-frame-gray-50">
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Packaging</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Seal temperature, pressure, O2 levels</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Thermal imaging, gas analyzers</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Package integrity, shelf life</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">Predictive Quality Control Results</h2>

      <p class="text-lg text-frame-gray-700 mb-6 leading-relaxed">
        The IIoT quality system demonstrated remarkable success in predicting and preventing quality issues before they impacted finished products. Real-time process adjustments based on predictive models resulted in significant improvements in product consistency.
      </p>

      <div class="space-y-6 mb-8">
        <div class="bg-white border-l-4 border-blue-500 p-6 rounded-r-lg shadow-sm">
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2 flex items-center">
            <svg class="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Success Case: Moisture Control in Baked Goods
          </h4>
          <p class="text-frame-gray-700 mb-3">
            <strong>Challenge:</strong> Moisture variations causing texture inconsistency and shelf-life issues.
          </p>
          <p class="text-frame-gray-700 mb-3">
            <strong>IIoT Solution:</strong> Real-time moisture sensors with predictive algorithms automatically adjusted oven temperature and humidity.
          </p>
          <p class="text-frame-gray-700">
            <strong>Result:</strong> 94% reduction in moisture variation, improved product consistency from 76% to 98% within specification.
          </p>
        </div>

        <div class="bg-white border-l-4 border-green-500 p-6 rounded-r-lg shadow-sm">
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2 flex items-center">
            <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            Predictive Quality: Seasoning Distribution
          </h4>
          <p class="text-frame-gray-700 mb-3">
            <strong>Problem:</strong> Uneven seasoning distribution causing customer complaints about flavor inconsistency.
          </p>
          <p class="text-frame-gray-700 mb-3">
            <strong>Solution:</strong> Near-infrared sensors detected seasoning distribution patterns in real-time, automatically adjusting application rates.
          </p>
          <p class="text-frame-gray-700">
            <strong>Impact:</strong> 89% improvement in flavor consistency, customer complaints reduced by 77%.
          </p>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">Business Impact & ROI</h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-gradient-to-br from-green-500 to-emerald-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">98%</div>
          <div class="text-green-100 text-sm">Products within quality specifications</div>
        </div>
        <div class="bg-gradient-to-br from-blue-500 to-indigo-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">74%</div>
          <div class="text-blue-100 text-sm">Reduction in waste and rework</div>
        </div>
        <div class="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">$890K</div>
          <div class="text-purple-100 text-sm">Annual savings from waste reduction</div>
        </div>
        <div class="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">11mo</div>
          <div class="text-orange-100 text-sm">ROI payback period</div>
        </div>
      </div>

      <div class="bg-gradient-to-r from-frame-blue to-blue-600 rounded-xl p-8 text-white mb-8">
        <h3 class="text-2xl font-bold mb-4">FRAME Framework Application</h3>
        <p class="text-blue-100 mb-4">
          This IIoT quality implementation demonstrates FRAME principles:
        </p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="space-y-3">
            <div class="flex items-start">
              <div class="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-white">Real-Time Intelligence:</strong>
                <p class="text-blue-100 text-sm mt-1">Continuous monitoring enables immediate quality corrections</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-white">Predictive Quality:</strong>
                <p class="text-blue-100 text-sm mt-1">AI models prevent quality issues before they occur</p>
              </div>
            </div>
          </div>
          <div class="space-y-3">
            <div class="flex items-start">
              <div class="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-white">Automated Control:</strong>
                <p class="text-blue-100 text-sm mt-1">System automatically maintains optimal process parameters</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-white">Continuous Learning:</strong>
                <p class="text-blue-100 text-sm mt-1">Models improve over time with more production data</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    faqs: [
      {
        question: "How does IIoT quality monitoring differ from traditional quality control methods?",
        answer: "Traditional quality control relies on sampling and end-of-line testing, which catches problems after they've already impacted production. IIoT quality monitoring provides real-time visibility into process parameters that affect quality, enabling proactive adjustments. Instead of discovering a moisture problem after producing 5,000 defective units, IIoT sensors detect the deviation immediately and automatically adjust oven conditions to maintain specifications."
      },
      {
        question: "What are the key requirements for implementing effective IIoT quality systems?",
        answer: "Success requires: (1) Comprehensive sensor networks covering critical quality parameters, (2) High-frequency data collection (sub-minute intervals), (3) Reliable industrial networking infrastructure, (4) Advanced analytics platforms for real-time processing, (5) Integration with existing control systems for automated adjustments, (6) Operator training on new quality dashboards and alert systems. The food plant invested 6 months in infrastructure before seeing full benefits."
      },
      {
        question: "How do you validate the accuracy of predictive quality models in food manufacturing?",
        answer: "Model validation in food manufacturing requires rigorous testing: (1) Historical data correlation against known quality outcomes, (2) Parallel testing with traditional quality methods, (3) Sensory panel validation for subjective quality attributes, (4) Customer feedback correlation, (5) Continuous model performance monitoring. The facility maintains 95%+ prediction accuracy by retraining models monthly and validating against laboratory test results."
      },
      {
        question: "What cybersecurity considerations are important for IIoT quality systems?",
        answer: "Food manufacturing IIoT systems require robust security due to food safety implications: (1) Network segmentation between quality monitoring and control systems, (2) Encrypted sensor communications, (3) Role-based access controls for quality data, (4) Regular security audits and updates, (5) Backup systems for critical quality monitoring. The plant maintains separate networks for data collection and process control with strict authentication protocols."
      }
    ],
    relatedResources: [
      'ai-manufacturing-vision-systems',
      'reading-quality-metrics-culture',
      'manufacturing-metrics-action'
    ]
  },
  'smart-manufacturing-dashboard': {
    title: 'Smart Manufacturing Dashboard Implementation',
    company: 'Precision Components Inc.',
    industry: 'Aerospace Manufacturing',
    location: 'Connecticut Facility',
    description: 'Real-time visibility transformation through integrated dashboards connecting ERP, MES, and shop floor systems.',
    readTime: '10 min read',
    publishDate: '2024-02-20',
    author: 'Vladimir Romanov',
    challenge: 'Disconnected systems causing delayed decisions and production inefficiencies',
    outcome: 'Unified visibility enabling 40% faster response times and data-driven decisions',
    content: `
      <div class="bg-gradient-to-br from-orange-50 to-yellow-50 border-l-4 border-orange-500 p-6 rounded-lg mb-8">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg class="w-6 h-6 text-orange-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-lg font-semibold text-orange-800 mb-2">The Information Blind Spot</h3>
            <p class="text-orange-700 leading-relaxed">
              Precision Components Inc. struggled with data silos across their aerospace manufacturing operations. Critical production decisions were delayed by hours as managers manually gathered information from disconnected ERP, MES, and shop floor systems, resulting in missed delivery commitments and reactive problem-solving.
            </p>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">The Challenge: Information Fragmentation</h2>
      
      <p class="text-lg text-frame-gray-700 mb-6 leading-relaxed">
        As a supplier to major aerospace OEMs, Precision Components faced increasing pressure for on-time delivery and quality excellence. However, their information systems were creating barriers to effective decision-making rather than enabling it.
      </p>

      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div class="bg-frame-gray-50 rounded-xl p-6">
          <h3 class="text-xl font-bold text-frame-gray-900 mb-4 flex items-center">
            <svg class="w-6 h-6 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            System Disconnection Issues
          </h3>
          <div class="space-y-3">
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Data Silos:</strong>
                <p class="text-frame-gray-700 text-sm mt-1">ERP, MES, and quality systems operating independently</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Manual Data Gathering:</strong>
                <p class="text-frame-gray-700 text-sm mt-1">Managers spending 2+ hours daily collecting information</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Delayed Response:</strong>
                <p class="text-frame-gray-700 text-sm mt-1">Issues discovered hours after occurrence</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-frame-gray-50 rounded-xl p-6">
          <h3 class="text-xl font-bold text-frame-gray-900 mb-4 flex items-center">
            <svg class="w-6 h-6 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
            </svg>
            Operational Impact
          </h3>
          <div class="space-y-3">
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Delivery Performance:</strong>
                <p class="text-frame-gray-700 text-sm mt-1">12% of orders shipped late due to visibility gaps</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Resource Allocation:</strong>
                <p class="text-frame-gray-700 text-sm mt-1">Suboptimal scheduling due to incomplete information</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Customer Satisfaction:</strong>
                <p class="text-frame-gray-700 text-sm mt-1">Reactive communication about potential delays</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">Solution Architecture: Unified Dashboard Platform</h2>

      <p class="text-lg text-frame-gray-700 mb-6 leading-relaxed">
        The solution involved creating a comprehensive dashboard ecosystem that aggregated data from all systems into role-specific views, enabling real-time decision-making at every level of the organization.
      </p>

      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Executive Dashboard</h4>
          <p class="text-frame-gray-600 text-sm">High-level KPIs, delivery performance, and financial metrics for strategic oversight</p>
        </div>
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Operations Dashboard</h4>
          <p class="text-frame-gray-600 text-sm">Production schedule, resource utilization, and quality metrics for daily management</p>
        </div>
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Shop Floor Dashboard</h4>
          <p class="text-frame-gray-600 text-sm">Real-time production status, work instructions, and quality alerts for operators</p>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-frame-gray-900 mb-4">Technology Integration Framework</h3>

      <div class="overflow-x-auto mb-8">
        <table class="w-full border border-frame-gray-200 rounded-lg overflow-hidden">
          <thead class="bg-frame-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">System Layer</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Data Sources</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Integration Method</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Update Frequency</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-frame-gray-200">
            <tr>
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">ERP System</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Orders, inventory, financials</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">REST API integration</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">15-minute intervals</td>
            </tr>
            <tr class="bg-frame-gray-50">
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">MES Platform</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Production status, labor tracking</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Database replication</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Real-time</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Shop Floor Systems</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Machine status, quality data</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">OPC-UA protocols</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">1-second intervals</td>
            </tr>
            <tr class="bg-frame-gray-50">
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Quality Systems</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Inspection results, NCRs</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">File-based integration</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Event-driven</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">Implementation Results</h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-gradient-to-br from-green-500 to-emerald-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">40%</div>
          <div class="text-green-100 text-sm">Faster response to issues</div>
        </div>
        <div class="bg-gradient-to-br from-blue-500 to-indigo-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">95%</div>
          <div class="text-blue-100 text-sm">On-time delivery rate</div>
        </div>
        <div class="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">60%</div>
          <div class="text-purple-100 text-sm">Reduction in data gathering time</div>
        </div>
        <div class="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">8</div>
          <div class="text-orange-100 text-sm">Month implementation timeline</div>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-frame-gray-900 mb-4">Key Success Factors</h3>

      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div class="space-y-4">
          <h4 class="text-lg font-semibold text-frame-gray-900">Technical Excellence</h4>
          <div class="space-y-3">
            <div class="flex items-start">
              <div class="w-2 h-2 bg-frame-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Scalable Architecture:</strong>
                <p class="text-frame-gray-700 text-sm mt-1">Microservices-based platform supporting future expansion</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-frame-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Data Quality Framework:</strong>
                <p class="text-frame-gray-700 text-sm mt-1">Automated validation and cleansing ensuring reliable insights</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-frame-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Performance Optimization:</strong>
                <p class="text-frame-gray-700 text-sm mt-1">Sub-second response times for critical production data</p>
              </div>
            </div>
          </div>
        </div>
        <div class="space-y-4">
          <h4 class="text-lg font-semibold text-frame-gray-900">User Adoption</h4>
          <div class="space-y-3">
            <div class="flex items-start">
              <div class="w-2 h-2 bg-frame-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Role-Based Design:</strong>
                <p class="text-frame-gray-700 text-sm mt-1">Customized views matching specific job responsibilities</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-frame-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Intuitive Interface:</strong>
                <p class="text-frame-gray-700 text-sm mt-1">Mobile-responsive design requiring minimal training</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-frame-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Phased Rollout:</strong>
                <p class="text-frame-gray-700 text-sm mt-1">Gradual deployment building user confidence and adoption</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    faqs: [
      {
        question: "What are the key requirements for successful dashboard integration in manufacturing?",
        answer: "Success requires: (1) Strong data governance ensuring clean, consistent data across systems, (2) Real-time or near-real-time integration capabilities, (3) Role-based access controls and customizable views, (4) Scalable architecture supporting future growth, (5) Mobile accessibility for shop floor use, (6) Robust security framework protecting operational data. Most importantly, involve end users in design to ensure the dashboards actually support their decision-making needs."
      },
      {
        question: "How do you ensure data accuracy when integrating multiple manufacturing systems?",
        answer: "Data accuracy requires a comprehensive approach: (1) Implement automated data validation rules at integration points, (2) Establish master data management for consistent definitions, (3) Use data profiling to identify quality issues early, (4) Create exception reporting for anomalies, (5) Implement version control for configuration changes, (6) Regular reconciliation between source systems and dashboards. The key is treating data quality as an ongoing process, not a one-time setup."
      },
      {
        question: "What's the typical ROI timeline for manufacturing dashboard implementations?",
        answer: "Most organizations see initial benefits within 3-6 months and full ROI within 12-18 months. Early wins include reduced time spent gathering data and faster issue identification. Longer-term benefits come from improved decision-making, better resource utilization, and enhanced customer service. The aerospace facility achieved 40% reduction in response times within 4 months and 95% on-time delivery within 8 months."
      },
      {
        question: "How do you drive user adoption of new dashboard systems?",
        answer: "User adoption success depends on: (1) Involving users in design and requirements gathering, (2) Creating role-specific views that match daily workflows, (3) Providing comprehensive but practical training, (4) Starting with pilot groups who become champions, (5) Ensuring mobile accessibility for shop floor workers, (6) Demonstrating clear value through quick wins. The most successful implementations show immediate value to users' daily tasks rather than requiring them to change established workflows."
      }
    ],
    relatedResources: [
      'erp-misalignment-manufacturing',
      'manufacturing-metrics-action',
      'practical-six-sigma-operations'
    ]
  },
  'predictive-maintenance-hvac': {
    title: 'Predictive Maintenance HVAC Optimization',
    company: 'Industrial Complex',
    industry: 'Manufacturing Facility Management',
    location: 'Multi-Building Campus',
    description: 'IoT-enabled predictive maintenance program reducing HVAC failures and energy consumption across industrial facilities.',
    readTime: '9 min read',
    publishDate: '2024-02-22',
    author: 'Vladimir Romanov',
    challenge: 'Reactive HVAC maintenance causing production disruptions and high energy costs',
    outcome: 'Proactive maintenance preventing failures while reducing energy consumption by 23%',
    content: `
      <div class="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg class="w-6 h-6 text-blue-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM15.95 9.95c-3.119-3.119-8.181-3.119-11.3 0a1 1 0 11-1.414-1.414c3.898-3.898 10.23-3.898 14.128 0a1 1 0 01-1.414 1.414zM14.121 11.778c-1.940-1.940-5.082-1.940-7.022 0a1 1 0 11-1.414-1.414c2.720-2.72 7.13-2.72 9.85 0a1 1 0 01-1.414 1.414zM12.293 13.607c-.765-.765-2.007-.765-2.772 0a1 1 0 11-1.414-1.414c1.545-1.545 4.055-1.545 5.6 0a1 1 0 01-1.414 1.414z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-lg font-semibold text-blue-800 mb-2">The Hidden Energy Drain</h3>
            <p class="text-blue-700 leading-relaxed">
              A 2.3 million square foot industrial complex was losing $340,000 annually to HVAC inefficiencies and emergency repairs. Aging equipment, reactive maintenance, and lack of system visibility created a cascade of problems: production disruptions during peak summer months, employee comfort complaints, and escalating energy costs that consumed 18% of operating budget.
            </p>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">The Challenge: Reactive Maintenance Spiral</h2>
      
      <p class="text-lg text-frame-gray-700 mb-6 leading-relaxed">
        The industrial complex housed precision manufacturing operations requiring strict environmental controls. However, their HVAC systems were managed reactively, creating costly disruptions and inefficiencies that impacted both production and profitability.
      </p>

      <div class="bg-frame-gray-50 rounded-xl p-8 mb-8">
        <h3 class="text-2xl font-bold text-frame-gray-900 mb-6 flex items-center">
          <svg class="w-8 h-8 mr-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
          Critical Operational Issues
        </h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Equipment Failures:</strong>
                <p class="text-frame-gray-700 mt-1">47 HVAC breakdowns annually causing production delays</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Energy Inefficiency:</strong>
                <p class="text-frame-gray-700 mt-1">18% higher consumption than industry benchmarks</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Maintenance Costs:</strong>
                <p class="text-frame-gray-700 mt-1">Emergency repairs costing 3x scheduled maintenance</p>
              </div>
            </div>
          </div>
          <div class="space-y-4">
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Environmental Control:</strong>
                <p class="text-frame-gray-700 mt-1">Temperature variations affecting precision manufacturing</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Resource Allocation:</strong>
                <p class="text-frame-gray-700 mt-1">Maintenance team overwhelmed with reactive work</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Data Visibility:</strong>
                <p class="text-frame-gray-700 mt-1">No early warning systems for potential failures</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">IoT-Enabled Predictive Maintenance Solution</h2>

      <p class="text-lg text-frame-gray-700 mb-6 leading-relaxed">
        The solution deployed a comprehensive IoT sensor network integrated with advanced analytics to transform HVAC operations from reactive to predictive, enabling proactive maintenance and optimized energy management.
      </p>

      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Sensor Network</h4>
          <p class="text-frame-gray-600 text-sm">450+ IoT sensors monitoring temperature, vibration, pressure, and energy consumption</p>
        </div>
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Analytics Platform</h4>
          <p class="text-frame-gray-600 text-sm">Machine learning algorithms predicting failures 7-14 days in advance</p>
        </div>
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Optimization Engine</h4>
          <p class="text-frame-gray-600 text-sm">Automated control adjustments reducing energy consumption while maintaining comfort</p>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-frame-gray-900 mb-4">Predictive Analytics Framework</h3>

      <div class="overflow-x-auto mb-8">
        <table class="w-full border border-frame-gray-200 rounded-lg overflow-hidden">
          <thead class="bg-frame-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Equipment Type</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Key Sensors</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Prediction Window</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Accuracy Rate</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-frame-gray-200">
            <tr>
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Chillers</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Vibration, temperature, pressure</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">14 days</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">94%</td>
            </tr>
            <tr class="bg-frame-gray-50">
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Air Handlers</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Motor current, airflow, filter pressure</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">10 days</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">91%</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Pumps</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Vibration, flow rate, power consumption</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">7 days</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">96%</td>
            </tr>
            <tr class="bg-frame-gray-50">
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Controls</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Response time, actuator position</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">5 days</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">89%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">Transformational Results</h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-gradient-to-br from-green-500 to-emerald-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">77%</div>
          <div class="text-green-100 text-sm">Reduction in equipment failures</div>
        </div>
        <div class="bg-gradient-to-br from-blue-500 to-indigo-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">23%</div>
          <div class="text-blue-100 text-sm">Energy consumption reduction</div>
        </div>
        <div class="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">$340K</div>
          <div class="text-purple-100 text-sm">Annual cost savings achieved</div>
        </div>
        <div class="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">14</div>
          <div class="text-orange-100 text-sm">Month ROI payback period</div>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-frame-gray-900 mb-4">Operational Excellence Achievements</h3>

      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div class="space-y-4">
          <h4 class="text-lg font-semibold text-frame-gray-900">Maintenance Optimization</h4>
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Emergency Repairs</span>
              <span class="font-semibold text-green-600">-77%</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Planned Maintenance Compliance</span>
              <span class="font-semibold text-green-600">+45%</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Equipment Uptime</span>
              <span class="font-semibold text-green-600">98.7%</span>
            </div>
          </div>
        </div>
        <div class="space-y-4">
          <h4 class="text-lg font-semibold text-frame-gray-900">Energy Performance</h4>
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Energy Efficiency Improvement</span>
              <span class="font-semibold text-green-600">+23%</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Peak Demand Reduction</span>
              <span class="font-semibold text-green-600">-18%</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Carbon Footprint Reduction</span>
              <span class="font-semibold text-green-600">-31%</span>
            </div>
          </div>
        </div>
      </div>
    `,
    faqs: [
      {
        question: "What are the key requirements for implementing predictive HVAC maintenance?",
        answer: "Success requires: (1) Comprehensive sensor coverage including vibration, temperature, pressure, and energy monitoring, (2) Reliable wireless or wired connectivity for data transmission, (3) Historical maintenance and failure data for model training, (4) Integration with existing building management systems, (5) Skilled maintenance team trained on predictive insights, (6) Clear escalation procedures for predicted failures. The most critical factor is ensuring data quality and consistency for accurate predictions."
      },
      {
        question: "How do predictive maintenance systems determine optimal sensor placement?",
        answer: "Sensor placement follows a systematic approach: (1) Failure mode analysis identifying critical failure points, (2) Equipment criticality assessment prioritizing high-impact systems, (3) Accessibility evaluation for maintenance and sensor replacement, (4) Power and connectivity requirements assessment, (5) Environmental conditions consideration (temperature, humidity, vibration), (6) Cost-benefit analysis balancing sensor costs with monitoring value. The industrial complex used 450+ sensors with strategically placed redundancy for mission-critical equipment."
      },
      {
        question: "What's the typical accuracy rate for HVAC predictive maintenance systems?",
        answer: "Well-implemented systems achieve 85-95% accuracy depending on equipment type and data quality. Chillers and pumps with clear vibration signatures typically achieve 94-96% accuracy, while complex air handling systems may be closer to 89-91%. Accuracy improves over time as models learn from more failure events. The key is balancing false positives (unnecessary maintenance) with false negatives (missed failures) based on equipment criticality."
      },
      {
        question: "How do you calculate ROI for predictive HVAC maintenance investments?",
        answer: "ROI calculation includes: (1) Avoided emergency repair costs (typically 3-5x planned maintenance), (2) Energy savings from optimized operation (15-25% typical), (3) Extended equipment life through proactive care, (4) Reduced production disruptions from HVAC failures, (5) Labor efficiency gains from planned vs reactive work. The industrial complex achieved 14-month payback primarily through emergency repair avoidance ($185K) and energy savings ($155K annually). Include ongoing sensor maintenance and platform costs in total cost calculations."
      }
    ],
    relatedResources: [
      'manufacturing-metrics-action',
      'improving-oee-interpretation',
      'practical-six-sigma-operations'
    ]
  },
  'energy-optimization-steel': {
    title: 'Energy Optimization Steel Production',
    company: 'MetalWorks Steel',
    industry: 'Steel Manufacturing',
    location: 'Integrated Steel Mill',
    description: 'AI-driven energy management system reducing power consumption by 15% while maintaining production capacity.',
    readTime: '11 min read',
    publishDate: '2024-02-24',
    author: 'Vladimir Romanov',
    challenge: 'Rising energy costs and inefficient power usage across steel production processes',
    outcome: '15% energy reduction saving $8.2M annually with improved production scheduling',
    content: `
      <div class="bg-gradient-to-br from-purple-50 to-indigo-50 border-l-4 border-purple-500 p-6 rounded-lg mb-8">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg class="w-6 h-6 text-purple-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-lg font-semibold text-purple-800 mb-2">The $54M Energy Challenge</h3>
            <p class="text-purple-700 leading-relaxed">
              MetalWorks Steel faced an energy crisis as power costs reached $54M annually—32% of total operating expenses. With energy-intensive processes like electric arc furnaces and rolling mills, inefficient power management was destroying profitability. Peak demand charges alone cost $12M yearly, while uncoordinated production scheduling created massive energy spikes during high-rate periods.
            </p>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">The Challenge: Energy-Intensive Operations</h2>
      
      <p class="text-lg text-frame-gray-700 mb-6 leading-relaxed">
        Steel production is inherently energy-intensive, but MetalWorks discovered their energy consumption patterns were creating unnecessary costs and environmental impact. Without coordinated energy management, they were paying premium rates while missing optimization opportunities.
      </p>

      <div class="bg-frame-gray-50 rounded-xl p-8 mb-8">
        <h3 class="text-2xl font-bold text-frame-gray-900 mb-6 flex items-center">
          <svg class="w-8 h-8 mr-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
          </svg>
          Energy Consumption Challenges
        </h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Peak Demand Penalties:</strong>
                <p class="text-frame-gray-700 mt-1">$12M annually in peak demand charges during high-rate periods</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Uncoordinated Scheduling:</strong>
                <p class="text-frame-gray-700 mt-1">Production units operating independently causing energy spikes</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Equipment Inefficiency:</strong>
                <p class="text-frame-gray-700 mt-1">Aging furnaces and motors operating below optimal efficiency</p>
              </div>
            </div>
          </div>
          <div class="space-y-4">
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Power Factor Issues:</strong>
                <p class="text-frame-gray-700 mt-1">Low power factor causing additional utility penalties</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Heat Recovery Losses:</strong>
                <p class="text-frame-gray-700 mt-1">Waste heat from furnaces not being captured and reused</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Reactive Management:</strong>
                <p class="text-frame-gray-700 mt-1">No predictive energy planning or load balancing</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">AI-Driven Energy Management System</h2>

      <p class="text-lg text-frame-gray-700 mb-6 leading-relaxed">
        The solution implemented an integrated AI platform that optimized energy consumption across all production processes while maintaining quality and throughput requirements. The system balanced load scheduling, predicted demand patterns, and automated energy-intensive equipment coordination.
      </p>

      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Predictive Scheduling</h4>
          <p class="text-frame-gray-600 text-sm">AI algorithms optimizing production schedules based on energy rates and demand forecasts</p>
        </div>
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Load Balancing</h4>
          <p class="text-frame-gray-600 text-sm">Real-time load distribution preventing peak demand spikes and optimizing power factor</p>
        </div>
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Heat Recovery</h4>
          <p class="text-frame-gray-600 text-sm">Automated waste heat capture and redistribution for preheating and auxiliary processes</p>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-frame-gray-900 mb-4">Energy Optimization Framework</h3>

      <div class="overflow-x-auto mb-8">
        <table class="w-full border border-frame-gray-200 rounded-lg overflow-hidden">
          <thead class="bg-frame-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Process Area</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Optimization Strategy</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Energy Reduction</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Annual Savings</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-frame-gray-200">
            <tr>
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Electric Arc Furnaces</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Predictive melt scheduling, power factor optimization</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">18%</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">$3.2M</td>
            </tr>
            <tr class="bg-frame-gray-50">
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Rolling Mills</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Load coordination, motor efficiency tuning</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">12%</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">$1.8M</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Auxiliary Systems</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Waste heat recovery, smart HVAC control</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">22%</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">$1.6M</td>
            </tr>
            <tr class="bg-frame-gray-50">
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Utilities</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Peak shaving, demand response programs</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">25%</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">$1.6M</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">Transformational Results</h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-gradient-to-br from-green-500 to-emerald-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">15%</div>
          <div class="text-green-100 text-sm">Overall energy reduction</div>
        </div>
        <div class="bg-gradient-to-br from-blue-500 to-indigo-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">$8.2M</div>
          <div class="text-blue-100 text-sm">Annual cost savings</div>
        </div>
        <div class="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">35%</div>
          <div class="text-purple-100 text-sm">Peak demand reduction</div>
        </div>
        <div class="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">18</div>
          <div class="text-orange-100 text-sm">Month implementation period</div>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-frame-gray-900 mb-4">Sustainability Impact</h3>

      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div class="space-y-4">
          <h4 class="text-lg font-semibold text-frame-gray-900">Environmental Benefits</h4>
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">CO2 Emissions Reduction</span>
              <span class="font-semibold text-green-600">-28,500 tons/year</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Energy Intensity Improvement</span>
              <span class="font-semibold text-green-600">-15%</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Waste Heat Recovery Rate</span>
              <span class="font-semibold text-green-600">65%</span>
            </div>
          </div>
        </div>
        <div class="space-y-4">
          <h4 class="text-lg font-semibold text-frame-gray-900">Operational Excellence</h4>
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Production Efficiency</span>
              <span class="font-semibold text-green-600">+8%</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Equipment Utilization</span>
              <span class="font-semibold text-green-600">+12%</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Power Factor</span>
              <span class="font-semibold text-green-600">0.96</span>
            </div>
          </div>
        </div>
      </div>
    `,
    faqs: [
      {
        question: "How does AI-driven energy optimization work in steel manufacturing?",
        answer: "AI energy optimization uses machine learning models to analyze historical production patterns, energy prices, and equipment performance to create optimal production schedules. The system considers factors like furnace heat-up times, rolling mill coordination, peak demand charges, and waste heat availability. It continuously learns from actual results to improve predictions. The steel mill's system processes 15,000+ data points per minute to balance energy costs against production requirements."
      },
      {
        question: "What are the key requirements for implementing energy optimization in heavy industry?",
        answer: "Success requires: (1) Comprehensive energy monitoring across all major consumers, (2) Real-time production scheduling systems that can accept optimization inputs, (3) Historical data for model training (minimum 12 months), (4) Integration with utility demand response programs, (5) Equipment capable of load modulation without compromising quality, (6) Cross-functional team including production, engineering, and finance. The most critical factor is having production flexibility to implement optimized schedules."
      },
      {
        question: "What's the typical ROI for industrial energy optimization projects?",
        answer: "Industrial energy optimization typically achieves 12-24 month payback periods with 10-20% energy reductions. ROI depends on energy intensity, utility rate structure, and production flexibility. Steel manufacturing sees higher returns due to massive energy consumption and peak demand charges. The MetalWorks facility achieved 18-month payback through $8.2M annual savings on $54M energy spend. Include ongoing software licensing and system maintenance in total cost calculations."
      },
      {
        question: "How do you balance energy optimization with production quality and schedules?",
        answer: "Successful optimization treats energy as one constraint among many (quality, delivery, safety). The AI system learns acceptable production parameter ranges and optimizes within those bounds. Key strategies include: (1) Flexible scheduling windows that allow load shifting, (2) Quality-based constraints that prevent over-optimization, (3) Multi-objective optimization balancing cost and delivery, (4) Human oversight for critical production decisions. The steel mill maintained 99.7% on-time delivery while achieving 15% energy reduction."
      }
    ],
    relatedResources: [
      'manufacturing-metrics-action',
      'practical-six-sigma-operations',
      'improving-oee-interpretation'
    ]
  },
  'supply-chain-visibility-pharma': {
    title: 'Supply Chain Visibility Pharmaceutical',
    company: 'BioPharma Solutions',
    industry: 'Pharmaceutical Manufacturing',
    location: 'Multi-Site Global Operations',
    description: 'End-to-end supply chain visibility platform ensuring regulatory compliance and reducing inventory costs.',
    readTime: '10 min read',
    publishDate: '2024-02-26',
    author: 'Vladimir Romanov',
    challenge: 'Complex global supply chain with limited visibility causing compliance risks and excess inventory',
    outcome: 'Full supply chain transparency reducing inventory by 28% while ensuring 100% regulatory compliance',
    content: `
      <div class="bg-gradient-to-br from-green-50 to-teal-50 border-l-4 border-green-500 p-6 rounded-lg mb-8">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg class="w-6 h-6 text-green-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-lg font-semibold text-green-800 mb-2">The $47M Visibility Gap</h3>
            <p class="text-green-700 leading-relaxed">
              BioPharma Solutions operated a complex global supply chain serving 85 countries but lacked end-to-end visibility. This blind spot cost them $47M annually through excess inventory, expired products, and compliance penalties. With 14-month lead times for critical APIs and stringent regulatory requirements, supply chain disruptions threatened both profitability and patient safety.
            </p>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">The Challenge: Complex Global Operations</h2>
      
      <p class="text-lg text-frame-gray-700 mb-6 leading-relaxed">
        Pharmaceutical supply chains face unique challenges combining long lead times, strict regulatory requirements, and life-critical quality standards. BioPharma's global operations spanned 23 manufacturing sites, 180+ suppliers, and complex distribution networks, creating visibility gaps that threatened both compliance and efficiency.
      </p>

      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div class="bg-frame-gray-50 rounded-xl p-6">
          <h3 class="text-xl font-bold text-frame-gray-900 mb-4 flex items-center">
            <svg class="w-6 h-6 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            Supply Chain Complexity
          </h3>
          <div class="space-y-3">
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Multi-Tier Suppliers:</strong>
                <p class="text-frame-gray-700 text-sm mt-1">180+ suppliers across 4 tiers with limited upstream visibility</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Regulatory Compliance:</strong>
                <p class="text-frame-gray-700 text-sm mt-1">FDA, EMA, and 15+ country-specific requirements</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Lead Time Variability:</strong>
                <p class="text-frame-gray-700 text-sm mt-1">3-14 month lead times with high uncertainty</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-frame-gray-50 rounded-xl p-6">
          <h3 class="text-xl font-bold text-frame-gray-900 mb-4 flex items-center">
            <svg class="w-6 h-6 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd" />
            </svg>
            Financial Impact
          </h3>
          <div class="space-y-3">
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Excess Inventory:</strong>
                <p class="text-frame-gray-700 text-sm mt-1">$28M tied up in safety stock and obsolete materials</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Expired Products:</strong>
                <p class="text-frame-gray-700 text-sm mt-1">$8.5M annual write-offs from expired materials</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Compliance Penalties:</strong>
                <p class="text-frame-gray-700 text-sm mt-1">$2.3M in regulatory fines for documentation gaps</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">End-to-End Visibility Platform</h2>

      <p class="text-lg text-frame-gray-700 mb-6 leading-relaxed">
        The solution implemented a comprehensive supply chain visibility platform that connected all stakeholders, from raw material suppliers to distribution centers, providing real-time transparency and predictive insights for proactive decision-making.
      </p>

      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Supplier Integration</h4>
          <p class="text-frame-gray-600 text-sm">Real-time connectivity with all tiers providing production status and quality data</p>
        </div>
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Regulatory Compliance</h4>
          <p class="text-frame-gray-600 text-sm">Automated compliance tracking and documentation across all jurisdictions</p>
        </div>
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Predictive Analytics</h4>
          <p class="text-frame-gray-600 text-sm">ML-powered demand forecasting and supply risk identification</p>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-frame-gray-900 mb-4">Platform Architecture</h3>

      <div class="overflow-x-auto mb-8">
        <table class="w-full border border-frame-gray-200 rounded-lg overflow-hidden">
          <thead class="bg-frame-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Layer</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Components</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Data Sources</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Update Frequency</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-frame-gray-200">
            <tr>
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Supplier Network</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">180+ supplier portals, EDI integration</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Production schedules, quality data</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Real-time</td>
            </tr>
            <tr class="bg-frame-gray-50">
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Manufacturing</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">23 plant MES systems</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Batch records, inventory levels</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Hourly</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Logistics</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Global shipping providers</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Shipment tracking, customs data</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">6-hour intervals</td>
            </tr>
            <tr class="bg-frame-gray-50">
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Distribution</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">85 country distribution centers</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Inventory, expiration tracking</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Daily</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">Transformational Results</h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-gradient-to-br from-green-500 to-emerald-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">28%</div>
          <div class="text-green-100 text-sm">Inventory reduction</div>
        </div>
        <div class="bg-gradient-to-br from-blue-500 to-indigo-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">100%</div>
          <div class="text-blue-100 text-sm">Regulatory compliance</div>
        </div>
        <div class="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">$13M</div>
          <div class="text-purple-100 text-sm">Annual cost savings</div>
        </div>
        <div class="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">95%</div>
          <div class="text-orange-100 text-sm">Forecast accuracy improvement</div>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-frame-gray-900 mb-4">Strategic Impact</h3>

      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div class="space-y-4">
          <h4 class="text-lg font-semibold text-frame-gray-900">Operational Excellence</h4>
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Supply Chain Visibility</span>
              <span class="font-semibold text-green-600">End-to-end</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Lead Time Reduction</span>
              <span class="font-semibold text-green-600">-22%</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Supplier Response Time</span>
              <span class="font-semibold text-green-600">-65%</span>
            </div>
          </div>
        </div>
        <div class="space-y-4">
          <h4 class="text-lg font-semibold text-frame-gray-900">Risk Management</h4>
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Supply Risk Incidents</span>
              <span class="font-semibold text-green-600">-78%</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Compliance Violations</span>
              <span class="font-semibold text-green-600">Zero</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Product Recalls</span>
              <span class="font-semibold text-green-600">-90%</span>
            </div>
          </div>
        </div>
      </div>
    `,
    faqs: [
      {
        question: "What are the unique challenges of pharmaceutical supply chain visibility?",
        answer: "Pharmaceutical supply chains face several unique challenges: (1) Stringent regulatory requirements across multiple jurisdictions, (2) Long lead times (3-14 months) requiring accurate long-term forecasting, (3) Temperature-sensitive products with strict storage requirements, (4) Lot traceability requirements for patient safety, (5) Multi-tier supplier networks with limited upstream visibility, (6) High product values making inventory optimization critical. The combination of regulatory complexity and financial impact makes visibility essential."
      },
      {
        question: "How do you ensure regulatory compliance across a global pharmaceutical supply chain?",
        answer: "Compliance requires automated tracking and documentation: (1) Real-time batch genealogy tracking from raw materials to finished products, (2) Automated regulatory submission preparation for multiple authorities, (3) Temperature and storage condition monitoring throughout transit, (4) Supplier audit trail maintenance with automated compliance scoring, (5) Change control documentation for all supply chain modifications, (6) Integration with regulatory databases for real-time requirement updates. The BioPharma platform maintains digital chain of custody for all products."
      },
      {
        question: "What's the ROI timeline for pharmaceutical supply chain visibility systems?",
        answer: "Pharmaceutical supply chain visibility typically shows ROI within 18-24 months due to high inventory values and regulatory compliance costs. Key benefits include inventory reduction (20-30%), reduced expired product write-offs (50-80%), elimination of compliance penalties, and improved forecast accuracy (90%+). BioPharma achieved $13M annual savings on $280M inventory investment. However, the real value is risk mitigation—avoiding a single major recall or compliance violation can justify the entire investment."
      },
      {
        question: "How do you manage supplier integration in complex pharmaceutical networks?",
        answer: "Successful supplier integration requires a tiered approach: (1) Critical suppliers (Tier 1) get full system integration with real-time data sharing, (2) Important suppliers (Tier 2) use standardized portals with daily updates, (3) Commodity suppliers (Tier 3) provide basic status through EDI or email, (4) All suppliers must meet minimum data quality standards, (5) Automated onboarding processes reduce integration time, (6) Performance scorecards drive continuous improvement. The key is balancing visibility needs with implementation complexity and supplier capabilities."
      }
    ],
    relatedResources: [
      'ai-manufacturing-vision-systems',
      'manufacturing-metrics-action',
      'erp-misalignment-manufacturing'
    ]
  },
  'robotic-process-automation-assembly': {
    title: 'Robotic Process Automation Assembly Line',
    company: 'Precision Electronics',
    industry: 'Electronics Manufacturing',
    location: 'Automated Assembly Facility',
    description: 'Collaborative robotics implementation transforming manual assembly into flexible, high-precision automated production.',
    readTime: '12 min read',
    publishDate: '2024-02-28',
    author: 'Vladimir Romanov',
    challenge: 'Manual assembly processes limiting throughput and consistency in electronics production',
    outcome: 'Flexible automation increasing production by 185% while improving quality and worker safety',
    content: `
      <div class="bg-gradient-to-br from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-6 rounded-lg mb-8">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg class="w-6 h-6 text-indigo-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-lg font-semibold text-indigo-800 mb-2">The Human Bottleneck</h3>
            <p class="text-indigo-700 leading-relaxed">
              Precision Electronics struggled to meet growing demand for complex electronic assemblies while maintaining strict quality standards. Manual assembly processes created throughput limitations, quality inconsistencies, and worker fatigue issues. With 47 assembly steps requiring sub-millimeter precision and growing orders outpacing capacity by 40%, traditional manufacturing approaches reached their limits.
            </p>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">The Challenge: Precision at Scale</h2>
      
      <p class="text-lg text-frame-gray-700 mb-6 leading-relaxed">
        Electronics manufacturing demands extraordinary precision combined with high throughput—requirements that often conflict in manual assembly environments. Precision Electronics needed to scale production while maintaining the exacting quality standards their aerospace and medical device customers required.
      </p>

      <div class="bg-frame-gray-50 rounded-xl p-8 mb-8">
        <h3 class="text-2xl font-bold text-frame-gray-900 mb-6 flex items-center">
          <svg class="w-8 h-8 mr-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
          Manufacturing Limitations
        </h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Throughput Constraints:</strong>
                <p class="text-frame-gray-700 mt-1">Manual assembly limiting production to 340 units/day vs 580 demand</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Quality Variability:</strong>
                <p class="text-frame-gray-700 mt-1">Human variation causing 3.2% defect rate in precision assemblies</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Ergonomic Issues:</strong>
                <p class="text-frame-gray-700 mt-1">Repetitive strain injuries affecting 18% of assembly workers</p>
              </div>
            </div>
          </div>
          <div class="space-y-4">
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Training Requirements:</strong>
                <p class="text-frame-gray-700 mt-1">6-week certification period for complex assembly procedures</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Flexibility Limitations:</strong>
                <p class="text-frame-gray-700 mt-1">Product changeovers requiring 4+ hours of line reconfiguration</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <div>
                <strong class="text-frame-gray-900">Labor Shortages:</strong>
                <p class="text-frame-gray-700 mt-1">Difficulty recruiting skilled assembly technicians</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">Collaborative Robotics Solution</h2>

      <p class="text-lg text-frame-gray-700 mb-6 leading-relaxed">
        The solution implemented a flexible collaborative robotics system that combined high-precision automation with human oversight, creating a hybrid manufacturing environment that maximized both quality and throughput while maintaining the adaptability needed for complex electronics assembly.
      </p>

      <div class="grid md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Collaborative Robots</h4>
          <p class="text-frame-gray-600 text-sm">12 cobots handling precision placement, soldering, and inspection tasks</p>
        </div>
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Vision Systems</h4>
          <p class="text-frame-gray-600 text-sm">AI-powered quality inspection achieving 99.97% defect detection accuracy</p>
        </div>
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Flexible Programming</h4>
          <p class="text-frame-gray-600 text-sm">No-code robot programming enabling 20-minute product changeovers</p>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-frame-gray-900 mb-4">Automation Implementation Framework</h3>

      <div class="overflow-x-auto mb-8">
        <table class="w-full border border-frame-gray-200 rounded-lg overflow-hidden">
          <thead class="bg-frame-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Process Step</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Automation Level</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Human Role</th>
              <th class="px-6 py-3 text-left text-sm font-semibold text-frame-gray-900">Quality Improvement</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-frame-gray-200">
            <tr>
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Component Placement</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Fully Automated</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Setup and monitoring</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">±0.02mm precision</td>
            </tr>
            <tr class="bg-frame-gray-50">
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Soldering</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Semi-Automated</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Complex joint oversight</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">100% joint consistency</td>
            </tr>
            <tr>
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Inspection</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">AI-Enhanced</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Exception handling</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">99.97% defect detection</td>
            </tr>
            <tr class="bg-frame-gray-50">
              <td class="px-6 py-4 text-sm font-medium text-frame-gray-900">Final Assembly</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Collaborative</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Complex procedures</td>
              <td class="px-6 py-4 text-sm text-frame-gray-700">Reduced human error</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-3xl font-bold text-frame-gray-900 mb-6">Transformational Results</h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-gradient-to-br from-green-500 to-emerald-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">185%</div>
          <div class="text-green-100 text-sm">Production increase</div>
        </div>
        <div class="bg-gradient-to-br from-blue-500 to-indigo-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">0.3%</div>
          <div class="text-blue-100 text-sm">Defect rate achieved</div>
        </div>
        <div class="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">20min</div>
          <div class="text-purple-100 text-sm">Product changeover time</div>
        </div>
        <div class="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-xl text-white">
          <div class="text-3xl font-bold mb-2">97%</div>
          <div class="text-orange-100 text-sm">Overall equipment effectiveness</div>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-frame-gray-900 mb-4">Operational Excellence Achievements</h3>

      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div class="space-y-4">
          <h4 class="text-lg font-semibold text-frame-gray-900">Quality Improvements</h4>
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Defect Rate Reduction</span>
              <span class="font-semibold text-green-600">-91%</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">First-Pass Yield</span>
              <span class="font-semibold text-green-600">99.7%</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Rework Elimination</span>
              <span class="font-semibold text-green-600">-84%</span>
            </div>
          </div>
        </div>
        <div class="space-y-4">
          <h4 class="text-lg font-semibold text-frame-gray-900">Workforce Impact</h4>
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Worker Safety Incidents</span>
              <span class="font-semibold text-green-600">-95%</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Skills Advancement</span>
              <span class="font-semibold text-green-600">+100%</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-frame-gray-700">Employee Satisfaction</span>
              <span class="font-semibold text-green-600">+68%</span>
            </div>
          </div>
        </div>
      </div>
    `,
    faqs: [
      {
        question: "How do collaborative robots differ from traditional industrial automation?",
        answer: "Collaborative robots (cobots) are designed to work safely alongside humans without safety cages, featuring force limiting technology, rounded surfaces, and intuitive programming interfaces. Unlike traditional robots that require extensive safety barriers and specialized programming, cobots can be taught tasks through demonstration and deployed flexibly across different workstations. The electronics facility's cobots handle precision tasks while humans manage complex decision-making and exception handling, creating optimal human-robot collaboration."
      },
      {
        question: "What factors determine which assembly tasks should be automated vs. remain manual?",
        answer: "Task selection depends on several factors: (1) Repeatability—high-volume, consistent tasks are ideal for automation, (2) Precision requirements—robots excel at sub-millimeter accuracy, (3) Ergonomics—automate tasks causing strain or injury, (4) Complexity—keep tasks requiring judgment and problem-solving with humans, (5) Changeover frequency—flexible tasks may stay manual, (6) Quality criticality—automate where consistency is paramount. The key is optimizing the human-robot combination rather than replacing humans entirely."
      },
      {
        question: "What's the typical ROI timeline for collaborative robotics in electronics manufacturing?",
        answer: "Electronics manufacturing typically sees ROI within 12-18 months due to high labor costs and quality requirements. Key benefits include increased throughput (50-200%), reduced defects (60-90%), improved worker safety, and labor redeployment to higher-value tasks. Precision Electronics achieved 18-month payback through 185% production increase and 91% defect reduction. Consider total cost including robot purchase, integration, training, and ongoing maintenance in ROI calculations."
      },
      {
        question: "How do you manage the workforce transition when implementing collaborative robotics?",
        answer: "Successful workforce transition requires: (1) Early communication about automation goals and job impact, (2) Retraining programs for robot programming and maintenance, (3) Involving workers in implementation planning and feedback, (4) Creating new roles in robot supervision and quality assurance, (5) Gradual deployment allowing adaptation time, (6) Demonstrating safety benefits and workload reduction. Most successful implementations upgrade worker roles rather than replace them—Precision Electronics retrained 85% of assembly workers for higher-skilled positions."
      }
    ],
    relatedResources: [
      'ai-manufacturing-vision-systems',
      'improving-oee-interpretation',
      'practical-six-sigma-operations'
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