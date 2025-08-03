import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, BookOpen, Download, Share2, CheckCircle, AlertCircle, TrendingUp, Users } from 'lucide-react'
import FAQSection from '@/components/FAQSection'

// Resource data with enhanced content
const resources = {
  'hidden-cost-manufacturing-obsolescence': {
    title: 'Hidden Cost of Manufacturing Obsolescence',
    description: 'Discover the hidden costs of legacy systems in manufacturing. Learn how to assess obsolescence risk and build a proactive upgrade strategy.',
    category: 'Operations Excellence',
    readTime: '12 min read',
    publishDate: '2024-01-15',
    author: 'Vladimir Romanov',
    featured: true,
    content: `
      <div class="bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg mb-8">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg class="w-6 h-6 text-red-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-lg font-semibold text-red-800 mb-2">The $2.3 Million Wake-Up Call</h3>
            <p class="text-red-700">A major automotive supplier learned this lesson the hard way when their 15-year-old PLC system failed during peak production. Parts were discontinued, documentation was incomplete, and the only technician who understood the system had retired six months earlier. Total cost: $2.3M in downtime, emergency repairs, and rushed replacement.</p>
          </div>
        </div>
      </div>

      <h2>Why This Matters on the Plant Floor</h2>
      <p>Manufacturing obsolescence isn't just about old equipment—it's about the compounding costs that silently erode your operational efficiency. When control systems age beyond vendor support, when spare parts become scarce, and when tribal knowledge walks out the door, the true cost extends far beyond the equipment itself.</p>
      
      <div class="bg-white border border-frame-gray-200 rounded-xl p-6 my-8">
        <h3 class="text-xl font-bold text-frame-gray-900 mb-4 flex items-center">
          <svg class="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
          </svg>
          The Hidden Cost Multipliers
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="text-center">
            <div class="bg-red-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
            </div>
            <h4 class="font-semibold text-frame-gray-900 mb-2">Unplanned Downtime Risk</h4>
            <p class="text-sm text-frame-gray-600">Legacy systems fail without warning, and repairs take 3-5x longer when parts are scarce</p>
          </div>
          <div class="text-center">
            <div class="bg-orange-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <svg class="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
              </svg>
            </div>
            <h4 class="font-semibold text-frame-gray-900 mb-2">Knowledge Drain</h4>
            <p class="text-sm text-frame-gray-600">As experienced technicians retire, maintaining obsolete systems becomes increasingly difficult</p>
          </div>
          <div class="text-center">
            <div class="bg-yellow-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <svg class="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
              </svg>
            </div>
            <h4 class="font-semibold text-frame-gray-900 mb-2">Integration Barriers</h4>
            <p class="text-sm text-frame-gray-600">Old systems can't communicate with modern equipment, creating data silos</p>
          </div>
        </div>
      </div>

      <h2>Signs and Signals to Watch For</h2>
      <p>Identifying obsolescence risk requires looking beyond equipment age. Use this comprehensive checklist to assess your systems:</p>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <h3 class="text-xl font-bold text-frame-gray-900 mb-4 flex items-center">
            <svg class="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
            Physical Indicators
          </h3>
          <ul class="space-y-3">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
              <span class="text-frame-gray-700">Electrical panels with components from discontinued product lines</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
              <span class="text-frame-gray-700">Control systems running on unsupported operating systems (Windows XP, etc.)</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
              <span class="text-frame-gray-700">Equipment requiring custom-fabricated replacement parts</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
              <span class="text-frame-gray-700">Documentation that exists only in paper form or tribal knowledge</span>
            </li>
          </ul>
        </div>

        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <h3 class="text-xl font-bold text-frame-gray-900 mb-4 flex items-center">
            <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
            </svg>
            Operational Indicators
          </h3>
          <ul class="space-y-3">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              <span class="text-frame-gray-700">Increasing mean time to repair (MTTR) for specific equipment</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              <span class="text-frame-gray-700">Growing inventory of "insurance spares" for critical components</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              <span class="text-frame-gray-700">Reliance on third-party repair shops for basic maintenance</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              <span class="text-frame-gray-700">Inability to find qualified technicians familiar with the technology</span>
            </li>
          </ul>
        </div>
      </div>

      <h2>How to Assess and Act</h2>
      <p>Building a comprehensive obsolescence management strategy requires systematic assessment and prioritized action. Here's the proven FRAME methodology:</p>

      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 my-8">
        <h3 class="text-2xl font-bold text-frame-gray-900 mb-6 text-center">The FRAME Obsolescence Assessment Framework</h3>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <h4 class="text-lg font-semibold text-frame-gray-900 mb-3">Risk Register</h4>
            <p class="text-frame-gray-600">Document and score all critical assets</p>
          </div>
          <div class="text-center">
            <div class="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <h4 class="text-lg font-semibold text-frame-gray-900 mb-3">True Cost Analysis</h4>
            <p class="text-frame-gray-600">Calculate full replacement economics</p>
          </div>
          <div class="text-center">
            <div class="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <h4 class="text-lg font-semibold text-frame-gray-900 mb-3">Modernization Roadmap</h4>
            <p class="text-frame-gray-600">Prioritize and phase upgrades strategically</p>
          </div>
        </div>
      </div>

      <h3>Step 1: Create an Obsolescence Risk Register</h3>
      <p>Your risk register is the foundation of proactive obsolescence management. Score each asset across four critical dimensions:</p>
      
      <div class="overflow-x-auto my-6">
        <table class="min-w-full bg-white border border-frame-gray-200 rounded-lg">
          <thead class="bg-frame-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-frame-gray-500 uppercase tracking-wider">Risk Factor</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-frame-gray-500 uppercase tracking-wider">Low Risk (1)</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-frame-gray-500 uppercase tracking-wider">Medium Risk (2)</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-frame-gray-500 uppercase tracking-wider">High Risk (3)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-frame-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-frame-gray-900">Vendor Support</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-frame-gray-500">Full support available</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-frame-gray-500">Limited/legacy support</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-frame-gray-500">No vendor support</td>
            </tr>
            <tr class="bg-frame-gray-50">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-frame-gray-900">Parts Availability</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-frame-gray-500">Readily available</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-frame-gray-500">Limited availability</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-frame-gray-500">Custom fabrication only</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-frame-gray-900">Technical Expertise</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-frame-gray-500">Multiple internal experts</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-frame-gray-500">Limited internal knowledge</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-frame-gray-500">External experts only</td>
            </tr>
            <tr class="bg-frame-gray-50">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-frame-gray-900">Business Criticality</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-frame-gray-500">Non-critical process</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-frame-gray-500">Important but not critical</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-frame-gray-500">Critical path equipment</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg my-6">
        <div class="flex items-start">
          <svg class="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <h4 class="text-lg font-semibold text-green-800 mb-2">Pro Tip: Risk Score Calculation</h4>
            <p class="text-green-700">Multiply the four risk factors to get your obsolescence risk score. Scores of 18+ require immediate attention, 12-17 need planning within 12 months, and scores below 12 can be monitored annually.</p>
          </div>
        </div>
      </div>

      <h3>Step 2: Calculate True Replacement Cost</h3>
      <p>Most organizations dramatically underestimate replacement costs by focusing only on equipment purchase price. Include these often-overlooked factors:</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-4 flex items-center">
            <svg class="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
            </svg>
            Direct Costs
          </h4>
          <ul class="space-y-2 text-frame-gray-700">
            <li>• Equipment purchase price</li>
            <li>• Installation and commissioning</li>
            <li>• Engineering and integration</li>
            <li>• Training and certification</li>
            <li>• Documentation and procedures</li>
          </ul>
        </div>
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <h4 class="text-lg font-semibold text-frame-gray-900 mb-4 flex items-center">
            <svg class="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
            Hidden Costs
          </h4>
          <ul class="space-y-2 text-frame-gray-700">
            <li>• Production downtime during changeover</li>
            <li>• Reduced efficiency during ramp-up</li>
            <li>• Quality issues during transition</li>
            <li>• Disposal of old equipment</li>
            <li>• Opportunity cost of delayed benefits</li>
          </ul>
        </div>
      </div>

      <h3>Step 3: Build a Phased Modernization Roadmap</h3>
      <p>Strategic replacement requires careful sequencing. Use this prioritization matrix:</p>
      
      <div class="bg-white border-2 border-frame-blue rounded-2xl p-6 my-8">
        <h4 class="text-xl font-bold text-frame-gray-900 mb-6 text-center">Replacement Priority Matrix</h4>
        <div class="grid grid-cols-2 gap-4 text-center">
          <div class="bg-red-100 border border-red-300 rounded-lg p-4">
            <div class="text-red-800 font-bold mb-2">HIGH RISK / HIGH IMPACT</div>
            <div class="text-sm text-red-700">Replace within 6 months</div>
            <div class="text-xs text-red-600 mt-1">Critical path equipment with obsolescence risk</div>
          </div>
          <div class="bg-yellow-100 border border-yellow-300 rounded-lg p-4">
            <div class="text-yellow-800 font-bold mb-2">HIGH RISK / LOW IMPACT</div>
            <div class="text-sm text-yellow-700">Replace within 12 months</div>
            <div class="text-xs text-yellow-600 mt-1">Non-critical but high obsolescence risk</div>
          </div>
          <div class="bg-orange-100 border border-orange-300 rounded-lg p-4">
            <div class="text-orange-800 font-bold mb-2">LOW RISK / HIGH IMPACT</div>
            <div class="text-sm text-orange-700">Strategic replacement</div>
            <div class="text-xs text-orange-600 mt-1">Upgrade during planned outages</div>
          </div>
          <div class="bg-green-100 border border-green-300 rounded-lg p-4">
            <div class="text-green-800 font-bold mb-2">LOW RISK / LOW IMPACT</div>
            <div class="text-sm text-green-700">Monitor annually</div>
            <div class="text-xs text-green-600 mt-1">Replace only when convenient</div>
          </div>
        </div>
      </div>

      <h3>Common Pitfalls to Avoid</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div class="bg-red-50 border border-red-200 rounded-xl p-6">
          <div class="text-red-500 mb-3">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
          </div>
          <h4 class="font-bold text-red-800 mb-2">"Run to Failure" Mentality</h4>
          <p class="text-red-700 text-sm">Waiting for catastrophic failure costs 3-5x more than planned replacement and often happens at the worst possible time.</p>
        </div>
        <div class="bg-orange-50 border border-orange-200 rounded-xl p-6">
          <div class="text-orange-500 mb-3">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
          </div>
          <h4 class="font-bold text-orange-800 mb-2">Like-for-Like Replacement</h4>
          <p class="text-orange-700 text-sm">Missing opportunities to upgrade capabilities during replacement. Modern systems offer 10-20% efficiency gains.</p>
        </div>
        <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <div class="text-yellow-500 mb-3">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
            </svg>
          </div>
          <h4 class="font-bold text-yellow-800 mb-2">Ignoring Integration Costs</h4>
          <p class="text-yellow-700 text-sm">Failing to budget for making new systems work with existing infrastructure. Integration often costs 30-50% of equipment price.</p>
        </div>
      </div>

      <h2>Broader Strategy Alignment</h2>
      <p>Obsolescence management isn't just about avoiding problems—it's about creating opportunities. Smart replacement strategies align with broader business objectives:</p>

      <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 my-8">
        <h3 class="text-2xl font-bold text-frame-gray-900 mb-6">Digital Transformation Enablers</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 class="text-lg font-semibold text-frame-gray-900 mb-3 flex items-center">
              <svg class="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
              Data & Analytics
            </h4>
            <ul class="space-y-2 text-frame-gray-700">
              <li>• Real-time production data collection</li>
              <li>• Advanced process analytics</li>
              <li>• Integration with MES/ERP systems</li>
              <li>• Cloud connectivity and remote access</li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold text-frame-gray-900 mb-3 flex items-center">
              <svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
              Predictive Capabilities
            </h4>
            <ul class="space-y-2 text-frame-gray-700">
              <li>• Predictive maintenance algorithms</li>
              <li>• Early warning systems</li>
              <li>• Condition-based monitoring</li>
              <li>• Automated diagnostics</li>
            </ul>
          </div>
        </div>
      </div>

      <h3>When This Becomes a Leadership Challenge</h3>
      <p>Obsolescence management requires strong leadership in three critical areas:</p>
      
      <div class="space-y-6 my-8">
        <div class="flex items-start">
          <div class="bg-red-100 rounded-full p-2 mr-4 flex-shrink-0">
            <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
            </svg>
          </div>
          <div>
            <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Capital Allocation Decisions</h4>
            <p class="text-frame-gray-700">When quarterly pressure conflicts with long-term equipment needs, leaders must advocate for proactive replacement over short-term cost avoidance.</p>
          </div>
        </div>
        <div class="flex items-start">
          <div class="bg-blue-100 rounded-full p-2 mr-4 flex-shrink-0">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <div>
            <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Cross-Functional Alignment</h4>
            <p class="text-frame-gray-700">Maintenance, operations, engineering, and finance must work together. Leaders facilitate these conversations and drive consensus.</p>
          </div>
        </div>
        <div class="flex items-start">
          <div class="bg-green-100 rounded-full p-2 mr-4 flex-shrink-0">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
          </div>
          <div>
            <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Cultural Change</h4>
            <p class="text-frame-gray-700">Overcoming "if it ain't broke, don't fix it" mentality requires education about hidden costs and long-term consequences.</p>
          </div>
        </div>
      </div>

      <h2>How FRAME Readers Handle This</h2>
      <div class="bg-white border border-frame-gray-200 rounded-2xl p-8 my-8">
        <div class="flex items-start mb-6">
          <div class="bg-frame-blue rounded-full p-2 mr-4 flex-shrink-0">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
          </div>
          <div>
            <h4 class="text-lg font-semibold text-frame-gray-900 mb-3">Success Story: Proactive Transformation</h4>
            <p class="text-frame-gray-700 mb-4">A FRAME reader at a major food processor used our framework to identify 15 critical systems with high obsolescence risk. Instead of waiting for failures, they created a 3-year modernization plan tied to their digital transformation initiative.</p>
            
            <div class="bg-green-50 rounded-lg p-4">
              <h5 class="font-semibold text-green-800 mb-2">Results after 18 months:</h5>
              <ul class="text-green-700 space-y-1">
                <li>• 35% reduction in unplanned downtime</li>
                <li>• $1.2M avoided in emergency repair costs</li>
                <li>• 90% improvement in data collection capability</li>
                <li>• ROI achieved 8 months ahead of projection</li>
              </ul>
            </div>
          </div>
        </div>
        
        <p class="text-frame-gray-700 italic">"The key was shifting from reactive to proactive management. Instead of waiting for failure, we built obsolescence planning into our standard operating procedures, making it part of our continuous improvement culture." - Plant Manager, Fortune 500 Food Processor</p>
      </div>

      <div class="bg-frame-blue text-white rounded-2xl p-8 my-12">
        <h3 class="text-2xl font-bold mb-4">Take Action This Week</h3>
        <p class="text-blue-100 mb-6">Don't wait for the next failure to force your hand. Here are three concrete steps you can take immediately:</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white/10 rounded-lg p-4">
            <div class="text-2xl font-bold text-blue-200 mb-2">01</div>
            <h4 class="font-semibold mb-2">Audit One Critical System</h4>
            <p class="text-blue-100 text-sm">Pick your most important production line and document the obsolescence status of every major component using our risk register framework.</p>
          </div>
          <div class="bg-white/10 rounded-lg p-4">
            <div class="text-2xl font-bold text-blue-200 mb-2">02</div>
            <h4 class="font-semibold mb-2">Start Your Risk Register</h4>
            <p class="text-blue-100 text-sm">Even a simple spreadsheet beats having no documentation. Use our scoring matrix to prioritize your highest-risk assets.</p>
          </div>
          <div class="bg-white/10 rounded-lg p-4">
            <div class="text-2xl font-bold text-blue-200 mb-2">03</div>
            <h4 class="font-semibold mb-2">Calculate One ROI</h4>
            <p class="text-blue-100 text-sm">Pick one obsolete system and calculate the full cost of both keeping it and replacing it. Include all hidden costs for accurate comparison.</p>
          </div>
        </div>
      </div>
    `,
    faqs: [
      {
        question: "How do I determine if a system is truly obsolete or just old?",
        answer: "True obsolescence is defined by vendor support status, not age. A 10-year-old system with full vendor support is less risky than a 3-year-old system from a discontinued product line. Use our risk register to evaluate vendor support, parts availability, technical expertise, and business criticality."
      },
      {
        question: "What's the biggest mistake companies make with obsolescence management?",
        answer: "The 'run to failure' mentality. Companies wait until catastrophic failure forces replacement, which costs 3-5x more than planned replacement and often happens at the worst possible time. Proactive replacement during planned outages saves money and reduces risk."
      },
      {
        question: "How do I justify replacement costs to management when the system still works?",
        answer: "Focus on total cost of ownership, not just replacement cost. Calculate the hidden costs of obsolescence: increased MTTR, growing spare parts inventory, third-party repair premiums, and opportunity costs of missed digital transformation benefits. Present the business case in terms of risk mitigation and competitive advantage."
      },
      {
        question: "Should I replace obsolete systems with identical technology or upgrade?",
        answer: "Upgrade whenever possible. Like-for-like replacement misses opportunities for 10-20% efficiency gains, better data collection, and digital transformation enablement. The incremental cost of upgrading is usually justified by improved capabilities and longer technology lifecycle."
      },
      {
        question: "How often should I update my obsolescence risk register?",
        answer: "Review high-risk assets (score 18+) quarterly, medium-risk assets (12-17) semi-annually, and low-risk assets annually. Also update whenever vendor support changes, major failures occur, or business criticality shifts."
      }
    ],
    relatedResources: [
      'ai-manufacturing-vision-systems',
      'time-first-action-downtime',
      'practical-six-sigma-operations'
    ]
  },
  'ai-manufacturing-vision-systems': {
    title: 'AI in Manufacturing Vision Systems Use Cases',
    description: 'Practical applications of AI-enhanced vision systems for defect detection, quality control, and process optimization in manufacturing environments.',
    category: 'Digital Transformation',
    readTime: '10 min read',
    publishDate: '2024-01-20',
    author: 'Vladimir Romanov',
    featured: true,
    content: `
      <div class="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg class="w-6 h-6 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-lg font-semibold text-blue-800 mb-2">Real-World Impact: 99.7% Defect Detection</h3>
            <p class="text-blue-700">A leading electronics manufacturer implemented AI vision systems for PCB inspection, achieving 99.7% defect detection accuracy while reducing inspection time by 85%. The system now catches defects that human inspectors missed 15% of the time.</p>
          </div>
        </div>
      </div>

      <h2>Why AI Vision Systems Matter Now</h2>
      <p>Manufacturing quality demands have never been higher. Zero-defect expectations, complex product variations, and labor shortages are pushing traditional visual inspection to its limits. AI-enhanced vision systems offer a practical solution that's finally ready for widespread manufacturing adoption.</p>
      
      <p>Unlike the hype-driven AI implementations of the past decade, modern manufacturing vision systems deliver measurable ROI through three core capabilities:</p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6 text-center">
          <div class="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-frame-gray-900 mb-2">Superior Accuracy</h3>
          <p class="text-frame-gray-600 text-sm">Detect defects humans miss while reducing false positives by 70-90%</p>
        </div>
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6 text-center">
          <div class="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-frame-gray-900 mb-2">Consistent Speed</h3>
          <p class="text-frame-gray-600 text-sm">Process thousands of parts per hour without fatigue or quality drift</p>
        </div>
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6 text-center">
          <div class="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-frame-gray-900 mb-2">Rich Data</h3>
          <p class="text-frame-gray-600 text-sm">Generate actionable insights about process trends and quality patterns</p>
        </div>
      </div>

      <h2>Proven Use Cases by Industry</h2>
      <p>AI vision systems have moved beyond pilot projects to production-proven applications. Here are the most successful implementations across manufacturing sectors:</p>

      <div class="space-y-8 my-8">
        <div class="bg-white border border-frame-gray-200 rounded-2xl overflow-hidden">
          <div class="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
            <h3 class="text-2xl font-bold flex items-center">
              <svg class="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Electronics & Semiconductors
            </h3>
          </div>
          <div class="p-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 class="text-lg font-semibold text-frame-gray-900 mb-3">Primary Applications:</h4>
                <ul class="space-y-2 text-frame-gray-700">
                  <li class="flex items-start">
                    <span class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>PCB Assembly Inspection:</strong> Solder joint quality, component placement, missing components</span>
                  </li>
                  <li class="flex items-start">
                    <span class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Wafer Defect Detection:</strong> Surface scratches, contamination, pattern defects</span>
                  </li>
                  <li class="flex items-start">
                    <span class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Wire Bond Inspection:</strong> Bond quality, placement accuracy, wire integrity</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-frame-gray-900 mb-3">Typical Results:</h4>
                <div class="bg-green-50 rounded-lg p-4">
                  <div class="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div class="text-2xl font-bold text-green-600">99.5%</div>
                      <div class="text-sm text-green-700">Detection Accuracy</div>
                    </div>
                    <div>
                      <div class="text-2xl font-bold text-green-600">85%</div>
                      <div class="text-sm text-green-700">Speed Increase</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white border border-frame-gray-200 rounded-2xl overflow-hidden">
          <div class="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
            <h3 class="text-2xl font-bold flex items-center">
              <svg class="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
              </svg>
              Automotive Manufacturing
            </h3>
          </div>
          <div class="p-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 class="text-lg font-semibold text-frame-gray-900 mb-3">Primary Applications:</h4>
                <ul class="space-y-2 text-frame-gray-700">
                  <li class="flex items-start">
                    <span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Weld Quality Assessment:</strong> Spot weld diameter, penetration, surface quality</span>
                  </li>
                  <li class="flex items-start">
                    <span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Paint Defect Detection:</strong> Orange peel, fisheyes, dirt contamination, coverage gaps</span>
                  </li>
                  <li class="flex items-start">
                    <span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Assembly Verification:</strong> Part presence, orientation, fit and finish</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-frame-gray-900 mb-3">Business Impact:</h4>
                <div class="bg-blue-50 rounded-lg p-4">
                  <div class="space-y-2">
                    <div class="flex justify-between">
                      <span class="text-frame-gray-700">Warranty Claims</span>
                      <span class="font-semibold text-blue-600">↓ 40%</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-frame-gray-700">Rework Costs</span>
                      <span class="font-semibold text-blue-600">↓ 60%</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-frame-gray-700">Inspection Labor</span>
                      <span class="font-semibold text-blue-600">↓ 70%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white border border-frame-gray-200 rounded-2xl overflow-hidden">
          <div class="bg-gradient-to-r from-purple-500 to-purple-600 p-6 text-white">
            <h3 class="text-2xl font-bold flex items-center">
              <svg class="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
              </svg>
              Food & Beverage
            </h3>
          </div>
          <div class="p-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 class="text-lg font-semibold text-frame-gray-900 mb-3">Primary Applications:</h4>
                <ul class="space-y-2 text-frame-gray-700">
                  <li class="flex items-start">
                    <span class="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Foreign Object Detection:</strong> Metal, plastic, glass contamination in products</span>
                  </li>
                  <li class="flex items-start">
                    <span class="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Product Classification:</strong> Size grading, ripeness assessment, quality sorting</span>
                  </li>
                  <li class="flex items-start">
                    <span class="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Packaging Inspection:</strong> Label placement, seal integrity, fill levels</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-frame-gray-900 mb-3">Compliance Benefits:</h4>
                <div class="bg-red-50 rounded-lg p-4">
                  <div class="space-y-2 text-sm">
                    <div class="flex items-center">
                      <svg class="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span class="text-red-700">HACCP Compliance Documentation</span>
                    </div>
                    <div class="flex items-center">
                      <svg class="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span class="text-red-700">Audit Trail Generation</span>
                    </div>
                    <div class="flex items-center">
                      <svg class="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span class="text-red-700">Recall Prevention & Traceability</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>Implementation Roadmap</h2>
      <p>Successful AI vision deployment follows a proven progression from pilot to production. Here's the roadmap that works:</p>

      <div class="bg-gradient-to-r from-frame-gray-50 to-white rounded-2xl p-8 my-8">
        <h3 class="text-2xl font-bold text-frame-gray-900 mb-8 text-center">5-Phase Implementation Strategy</h3>
        
        <div class="space-y-6">
          <div class="flex items-start">
            <div class="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 font-bold">1</div>
            <div class="flex-1">
              <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Assessment & Use Case Selection</h4>
              <p class="text-frame-gray-700 mb-3">Identify high-impact applications where vision systems can deliver immediate value. Focus on processes with clear quality criteria, high defect costs, or labor constraints.</p>
              <div class="bg-blue-50 rounded-lg p-3">
                <strong class="text-blue-800">Timeline:</strong> <span class="text-blue-700">2-4 weeks</span> | 
                <strong class="text-blue-800 ml-4">Key Deliverable:</strong> <span class="text-blue-700">Prioritized use case matrix</span>
              </div>
            </div>
          </div>

          <div class="flex items-start">
            <div class="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 font-bold">2</div>
            <div class="flex-1">
              <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Proof of Concept Development</h4>
              <p class="text-frame-gray-700 mb-3">Build and test AI models using representative production data. Establish baseline performance metrics and validate technical feasibility.</p>
              <div class="bg-green-50 rounded-lg p-3">
                <strong class="text-green-800">Timeline:</strong> <span class="text-green-700">6-8 weeks</span> | 
                <strong class="text-green-800 ml-4">Key Deliverable:</strong> <span class="text-green-700">Validated accuracy metrics (>95% target)</span>
              </div>
            </div>
          </div>

          <div class="flex items-start">
            <div class="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 font-bold">3</div>
            <div class="flex-1">
              <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Pilot Implementation</h4>
              <p class="text-frame-gray-700 mb-3">Deploy system in controlled production environment. Run parallel with existing inspection for validation and model refinement.</p>
              <div class="bg-orange-50 rounded-lg p-3">
                <strong class="text-orange-800">Timeline:</strong> <span class="text-orange-700">8-12 weeks</span> | 
                <strong class="text-orange-800 ml-4">Key Deliverable:</strong> <span class="text-orange-700">Production-validated performance data</span>
              </div>
            </div>
          </div>

          <div class="flex items-start">
            <div class="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 font-bold">4</div>
            <div class="flex-1">
              <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Production Deployment</h4>
              <p class="text-frame-gray-700 mb-3">Full production implementation with operator training, integration documentation, and performance monitoring systems.</p>
              <div class="bg-purple-50 rounded-lg p-3">
                <strong class="text-purple-800">Timeline:</strong> <span class="text-purple-700">4-6 weeks</span> | 
                <strong class="text-purple-800 ml-4">Key Deliverable:</strong> <span class="text-purple-700">Fully operational system with trained operators</span>
              </div>
            </div>
          </div>

          <div class="flex items-start">
            <div class="bg-indigo-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 font-bold">5</div>
            <div class="flex-1">
              <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Scale & Optimize</h4>
              <p class="text-frame-gray-700 mb-3">Expand to additional production lines, implement continuous learning capabilities, and develop advanced analytics.</p>
              <div class="bg-indigo-50 rounded-lg p-3">
                <strong class="text-indigo-800">Timeline:</strong> <span class="text-indigo-700">Ongoing</span> | 
                <strong class="text-indigo-800 ml-4">Key Deliverable:</strong> <span class="text-indigo-700">Scalable platform for enterprise deployment</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>Technology Selection Framework</h2>
      <p>Not all AI vision systems are created equal. Use this framework to evaluate technologies and vendors:</p>

      <div class="overflow-x-auto my-8">
        <table class="min-w-full bg-white border border-frame-gray-200 rounded-lg">
          <thead class="bg-frame-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-frame-gray-500 uppercase tracking-wider">Evaluation Criteria</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-frame-gray-500 uppercase tracking-wider">Weight</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-frame-gray-500 uppercase tracking-wider">Key Questions</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-frame-gray-500 uppercase tracking-wider">Red Flags</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-frame-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-frame-gray-900">Accuracy & Reliability</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-frame-gray-500">35%</td>
              <td class="px-6 py-4 text-sm text-frame-gray-500">Can they demonstrate >95% accuracy on your specific defect types?</td>
              <td class="px-6 py-4 text-sm text-red-600">No production validation data</td>
            </tr>
            <tr class="bg-frame-gray-50">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-frame-gray-900">Integration Capabilities</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-frame-gray-500">25%</td>
              <td class="px-6 py-4 text-sm text-frame-gray-500">How easily does it integrate with existing MES/ERP systems?</td>
              <td class="px-6 py-4 text-sm text-red-600">Proprietary protocols only</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-frame-gray-900">Scalability & Performance</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-frame-gray-500">20%</td>
              <td class="px-6 py-4 text-sm text-frame-gray-500">Can it handle your production speeds and volumes?</td>
              <td class="px-6 py-4 text-sm text-red-600">Untested at production speeds</td>
            </tr>
            <tr class="bg-frame-gray-50">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-frame-gray-900">Vendor Support & Expertise</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-frame-gray-500">15%</td>
              <td class="px-6 py-4 text-sm text-frame-gray-500">Do they have manufacturing domain expertise?</td>
              <td class="px-6 py-4 text-sm text-red-600">No manufacturing experience</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-frame-gray-900">Total Cost of Ownership</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-frame-gray-500">5%</td>
              <td class="px-6 py-4 text-sm text-frame-gray-500">What are the ongoing licensing and maintenance costs?</td>
              <td class="px-6 py-4 text-sm text-red-600">Hidden recurring fees</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Common Implementation Pitfalls</h2>
      <p>Learn from others' mistakes. These are the most common pitfalls that derail AI vision projects:</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div class="bg-red-50 border border-red-200 rounded-xl p-6">
          <div class="flex items-start">
            <svg class="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
            <div>
              <h4 class="font-bold text-red-800 mb-2">Insufficient Training Data</h4>
              <p class="text-red-700 text-sm mb-2">AI models need thousands of properly labeled examples. Many projects fail because they underestimate data requirements.</p>
              <div class="text-xs text-red-600 font-medium">Solution: Plan for 6-8 weeks of data collection before model training</div>
            </div>
          </div>
        </div>

        <div class="bg-orange-50 border border-orange-200 rounded-xl p-6">
          <div class="flex items-start">
            <svg class="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
            </svg>
            <div>
              <h4 class="font-bold text-orange-800 mb-2">Poor Integration Planning</h4>
              <p class="text-orange-700 text-sm mb-2">Vision systems that don't integrate with existing quality systems create data silos and workflow disruptions.</p>
              <div class="text-xs text-orange-600 font-medium">Solution: Map integration requirements during vendor selection</div>
            </div>
          </div>
        </div>

        <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <div class="flex items-start">
            <svg class="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <h4 class="font-bold text-yellow-800 mb-2">Unrealistic Expectations</h4>
              <p class="text-yellow-700 text-sm mb-2">Expecting 100% accuracy or instant deployment leads to disappointment. AI vision is powerful but not perfect.</p>
              <div class="text-xs text-yellow-600 font-medium">Solution: Set realistic targets (95-99% accuracy) and plan for gradual improvement</div>
            </div>
          </div>
        </div>

        <div class="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div class="flex items-start">
            <svg class="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <div>
              <h4 class="font-bold text-blue-800 mb-2">Inadequate Change Management</h4>
              <p class="text-blue-700 text-sm mb-2">Operators fear job displacement. Without proper communication and training, even great technology fails adoption.</p>
              <div class="text-xs text-blue-600 font-medium">Solution: Emphasize augmentation over replacement, provide comprehensive training</div>
            </div>
          </div>
        </div>
      </div>

      <h2>ROI Calculation Framework</h2>
      <p>Build a compelling business case using this proven ROI calculation framework:</p>

      <div class="bg-white border-2 border-frame-blue rounded-2xl p-8 my-8">
        <h3 class="text-2xl font-bold text-frame-gray-900 mb-6 text-center">AI Vision ROI Calculator</h3>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 class="text-lg font-semibold text-frame-gray-900 mb-4 text-green-600">Cost Savings (Annual)</h4>
            <div class="space-y-3">
              <div class="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span class="text-frame-gray-700">Reduced Scrap/Rework</span>
                <span class="font-semibold text-green-600">$180K - $500K</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span class="text-frame-gray-700">Labor Cost Reduction</span>
                <span class="font-semibold text-green-600">$120K - $300K</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span class="text-frame-gray-700">Warranty Claim Reduction</span>
                <span class="font-semibold text-green-600">$50K - $200K</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span class="text-frame-gray-700">Throughput Improvement</span>
                <span class="font-semibold text-green-600">$100K - $400K</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold text-frame-gray-900 mb-4 text-red-600">Implementation Costs</h4>
            <div class="space-y-3">
              <div class="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <span class="text-frame-gray-700">Hardware & Software</span>
                <span class="font-semibold text-red-600">$150K - $400K</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <span class="text-frame-gray-700">Integration & Setup</span>
                <span class="font-semibold text-red-600">$50K - $150K</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <span class="text-frame-gray-700">Training & Change Mgmt</span>
                <span class="font-semibold text-red-600">$25K - $75K</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <span class="text-frame-gray-700">Annual Maintenance</span>
                <span class="font-semibold text-red-600">$30K - $80K</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-8 p-6 bg-frame-blue text-white rounded-lg text-center">
          <h4 class="text-xl font-bold mb-2">Typical ROI: 150% - 400%</h4>
          <p class="text-blue-100">Payback period: 8-18 months | Net 3-year value: $1.2M - $3.5M</p>
        </div>
      </div>

      <h2>How FRAME Readers Handle This</h2>
      <div class="bg-white border border-frame-gray-200 rounded-2xl p-8 my-8">
        <div class="flex items-start mb-6">
          <div class="bg-frame-blue rounded-full p-2 mr-4 flex-shrink-0">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
          </div>
          <div>
            <h4 class="text-lg font-semibold text-frame-gray-900 mb-3">Success Story: Pharmaceutical Packaging</h4>
            <p class="text-frame-gray-700 mb-4">A FRAME reader at a major pharmaceutical company implemented AI vision for tablet inspection and blister pack verification. The system now processes 50,000 packages per hour with 99.8% accuracy.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-green-50 rounded-lg p-4">
                <h5 class="font-semibold text-green-800 mb-2">Quantified Results:</h5>
                <ul class="text-green-700 space-y-1 text-sm">
                  <li>• 94% reduction in false rejects</li>
                  <li>• $2.3M annual scrap cost savings</li>
                  <li>• Zero FDA inspection findings</li>
                  <li>• 18-month ROI payback</li>
                </ul>
              </div>
              <div class="bg-blue-50 rounded-lg p-4">
                <h5 class="font-semibold text-blue-800 mb-2">Implementation Keys:</h5>
                <ul class="text-blue-700 space-y-1 text-sm">
                  <li>• Started with highest-value defect types</li>
                  <li>• Built comprehensive training dataset</li>
                  <li>• Integrated with existing track-and-trace</li>
                  <li>• Focused on operator augmentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <p class="text-frame-gray-700 italic">"The key was treating AI vision as an operational capability, not just a technology project. We focused on solving real quality problems, not chasing the latest algorithms." - QA Director, Top 10 Pharma Company</p>
      </div>

      <div class="bg-frame-gray-900 text-white rounded-2xl p-8 my-12">
        <h3 class="text-2xl font-bold mb-4">Ready to Start Your AI Vision Journey?</h3>
        <p class="text-gray-300 mb-6">Don't wait for perfect conditions. Start with a focused pilot that delivers quick wins and builds organizational confidence.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white/10 rounded-lg p-4">
            <div class="text-2xl font-bold text-blue-400 mb-2">Week 1</div>
            <h4 class="font-semibold mb-2">Identify Your Sweet Spot</h4>
            <p class="text-gray-300 text-sm">Find processes with clear defect criteria, high inspection costs, or quality escapes. Document current performance baseline.</p>
          </div>
          <div class="bg-white/10 rounded-lg p-4">
            <div class="text-2xl font-bold text-blue-400 mb-2">Week 2</div>
            <h4 class="font-semibold mb-2">Gather Production Data</h4>
            <p class="text-gray-300 text-sm">Collect images of good and defective parts. You need 500-1000 examples per defect type for effective training.</p>
          </div>
          <div class="bg-white/10 rounded-lg p-4">
            <div class="text-2xl font-bold text-blue-400 mb-2">Week 3</div>
            <h4 class="font-semibold mb-2">Request Vendor PoCs</h4>
            <p class="text-gray-300 text-sm">Get 2-3 vendors to build proof-of-concept models with your data. Compare accuracy, speed, and integration capabilities.</p>
          </div>
        </div>
      </div>
    `,
    faqs: [
      {
        question: "What accuracy should I expect from AI vision systems?",
        answer: "Production-ready AI vision systems typically achieve 95-99.5% accuracy, depending on the application. Simple defects like dimensional variations often reach 99%+, while complex surface defects may start at 95% and improve with more training data. Don't expect 100% - even humans achieve only 80-95% accuracy on many inspection tasks."
      },
      {
        question: "How much training data do I need to build an effective model?",
        answer: "Plan for 500-1000 images per defect type as a minimum. Complex defects may need 2000+ examples. The key is balanced datasets - you need roughly equal numbers of good and defective examples. Collect data across different shifts, lighting conditions, and product variations to ensure robust performance."
      },
      {
        question: "Can AI vision systems integrate with my existing quality management system?",
        answer: "Modern AI vision platforms offer standard APIs and protocols for integration with MES, ERP, and QMS systems. Look for systems that support OPC-UA, REST APIs, or database connectivity. Integration complexity depends on your existing infrastructure - simple data logging is straightforward, while closed-loop process control requires more planning."
      },
      {
        question: "What's the typical implementation timeline for AI vision systems?",
        answer: "From project kickoff to production deployment: 4-6 months total. This includes 1 month assessment, 2 months proof-of-concept development, 2-3 months pilot implementation, and 1 month production rollout. Complex integrations or novel defect types may extend timelines."
      },
      {
        question: "How do I handle operator resistance to AI vision implementation?",
        answer: "Focus on augmentation, not replacement. Emphasize how AI vision helps operators catch defects they might miss and reduces tedious inspection tasks. Involve operators in training data collection and system validation. Provide comprehensive training and clear career development paths. Transparency and inclusion are key to successful adoption."
      }
    ],
    relatedResources: [
      'hidden-cost-manufacturing-obsolescence',
      'time-first-action-downtime',
      'floor-presence-standards-teaching'
    ]
  },
  'time-first-action-downtime': {
    title: 'Time to First Action Downtime Metric',
    description: 'Implement response time visibility in plant operations. Learn how to measure and improve time to first action for downtime events.',
    category: 'Quality & Metrics',
    readTime: '9 min read',
    publishDate: '2024-01-25',
    author: 'Vladimir Romanov',
    content: `
      <div class="bg-gradient-to-br from-orange-50 to-red-50 border-l-4 border-orange-500 p-6 rounded-lg mb-8">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg class="w-6 h-6 text-orange-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-lg font-semibold text-orange-800 mb-2">The 47-Minute Problem</h3>
            <p class="text-orange-700">A major automotive plant discovered their average "time to first action" was 47 minutes. Equipment would fail, but it took nearly an hour before anyone actually started working on the problem. Fixing this one metric reduced their unplanned downtime by 35%.</p>
          </div>
        </div>
      </div>

      <h2>Why Response Time Beats Repair Time</h2>
      <p>Most plants obsess over Mean Time to Repair (MTTR) but ignore the hidden killer: response time. The clock starts ticking the moment equipment fails, not when maintenance arrives. Understanding and optimizing time to first action is critical for minimizing production losses.</p>
      
      <div class="bg-white border border-frame-gray-200 rounded-xl p-6 my-8">
        <h3 class="text-xl font-bold text-frame-gray-900 mb-4">The Anatomy of Downtime</h3>
        <div class="space-y-4">
          <div class="flex items-center justify-between p-3 bg-red-50 rounded-lg">
            <span class="text-frame-gray-700">Detection Time</span>
            <span class="font-semibold text-red-600">2-15 minutes</span>
          </div>
          <div class="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
            <span class="text-frame-gray-700">Communication & Dispatch</span>
            <span class="font-semibold text-orange-600">5-30 minutes</span>
          </div>
          <div class="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
            <span class="text-frame-gray-700">Travel & Assessment</span>
            <span class="font-semibold text-yellow-600">3-20 minutes</span>
          </div>
          <div class="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <span class="text-frame-gray-700">Actual Repair Work</span>
            <span class="font-semibold text-blue-600">15-120 minutes</span>
          </div>
        </div>
        <div class="mt-4 p-3 bg-frame-blue text-white rounded-lg text-center">
          <strong>Key Insight:</strong> Response activities often take longer than repairs
        </div>
      </div>

      <h2>Measuring Time to First Action</h2>
      <p>Define clear measurement standards to drive consistent improvement:</p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div class="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
          <div class="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-green-800 mb-2">Start Timer</h3>
          <p class="text-green-700 text-sm">Equipment stop detected (automatic or manual)</p>
        </div>
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
          <div class="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-blue-800 mb-2">First Action</h3>
          <p class="text-blue-700 text-sm">Qualified person begins diagnosis or repair</p>
        </div>
        <div class="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
          <div class="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-purple-800 mb-2">Track & Analyze</h3>
          <p class="text-purple-700 text-sm">Identify patterns and improvement opportunities</p>
        </div>
      </div>

      <h2>Implementation Strategy</h2>
      <p>Roll out time to first action tracking systematically across your operation:</p>

      <div class="overflow-x-auto my-8">
        <table class="min-w-full bg-white border border-frame-gray-200 rounded-lg">
          <thead class="bg-frame-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-frame-gray-500 uppercase tracking-wider">Phase</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-frame-gray-500 uppercase tracking-wider">Focus</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-frame-gray-500 uppercase tracking-wider">Target Response</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-frame-gray-500 uppercase tracking-wider">Tools Required</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-frame-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-frame-gray-900">Critical Systems</td>
              <td class="px-6 py-4 text-sm text-frame-gray-500">Main production lines</td>
              <td class="px-6 py-4 text-sm text-green-600">< 5 minutes</td>
              <td class="px-6 py-4 text-sm text-frame-gray-500">Automated alerts, dedicated response team</td>
            </tr>
            <tr class="bg-frame-gray-50">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-frame-gray-900">Important Systems</td>
              <td class="px-6 py-4 text-sm text-frame-gray-500">Support equipment</td>
              <td class="px-6 py-4 text-sm text-yellow-600">< 15 minutes</td>
              <td class="px-6 py-4 text-sm text-frame-gray-500">Work order system, standard dispatch</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-frame-gray-900">Secondary Systems</td>
              <td class="px-6 py-4 text-sm text-frame-gray-500">Non-critical equipment</td>
              <td class="px-6 py-4 text-sm text-blue-600">< 60 minutes</td>
              <td class="px-6 py-4 text-sm text-frame-gray-500">Scheduled rounds, planned maintenance</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Technology Enablers</h2>
      <p>Modern technology can dramatically improve response times when implemented strategically:</p>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <h3 class="text-xl font-bold text-frame-gray-900 mb-4">Automated Detection</h3>
          <ul class="space-y-3">
            <li class="flex items-start">
              <span class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span class="text-frame-gray-700">Equipment sensors with alarm thresholds</span>
            </li>
            <li class="flex items-start">
              <span class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span class="text-frame-gray-700">Production monitoring systems</span>
            </li>
            <li class="flex items-start">
              <span class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span class="text-frame-gray-700">Operator alert buttons</span>
            </li>
          </ul>
        </div>
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <h3 class="text-xl font-bold text-frame-gray-900 mb-4">Smart Dispatch</h3>
          <ul class="space-y-3">
            <li class="flex items-start">
              <span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span class="text-frame-gray-700">Mobile notifications with location data</span>
            </li>
            <li class="flex items-start">
              <span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span class="text-frame-gray-700">Skill-based routing algorithms</span>
            </li>
            <li class="flex items-start">
              <span class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span class="text-frame-gray-700">Real-time technician availability</span>
            </li>
          </ul>
        </div>
      </div>

      <h2>Breakthrough Results</h2>
      <p>Plants that master time to first action see dramatic improvements in overall equipment effectiveness:</p>

      <div class="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 my-8">
        <h3 class="text-2xl font-bold text-frame-gray-900 mb-6 text-center">Typical Improvement Results</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="text-center">
            <div class="text-4xl font-bold text-green-600 mb-2">25-40%</div>
            <div class="text-lg font-semibold text-frame-gray-900">Downtime Reduction</div>
            <div class="text-sm text-frame-gray-600">From faster response times</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-blue-600 mb-2">15-25%</div>
            <div class="text-lg font-semibold text-frame-gray-900">OEE Improvement</div>
            <div class="text-sm text-frame-gray-600">Higher availability rates</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-purple-600 mb-2">50-70%</div>
            <div class="text-lg font-semibold text-frame-gray-900">Response Consistency</div>
            <div class="text-sm text-frame-gray-600">Reduced variation in response</div>
          </div>
        </div>
      </div>
    `,
    faqs: [
      {
        question: "What's the difference between time to first action and MTTR?",
        answer: "MTTR (Mean Time to Repair) measures only the actual repair work time. Time to first action includes detection, communication, dispatch, and travel time - everything before repair work begins. Often, response time is longer than repair time."
      },
      {
        question: "How do I measure time to first action without sophisticated systems?",
        answer: "Start with manual tracking using timestamps in your work order system. Record equipment stop time (or detection time) and when the first qualified person arrives on scene. Even simple spreadsheet tracking reveals patterns and improvement opportunities."
      },
      {
        question: "What's a realistic target for time to first action?",
        answer: "It depends on criticality: Critical production equipment should target <5 minutes, important support equipment <15 minutes, and non-critical systems <60 minutes. Start by measuring current performance, then set aggressive but achievable targets."
      }
    ],
    relatedResources: [
      'hidden-cost-manufacturing-obsolescence',
      'ai-manufacturing-vision-systems',
      'practical-six-sigma-operations'
    ]
  },
  'floor-presence-standards-teaching': {
    title: 'Floor Presence Standards Teaching Manufacturing Teams',
    description: 'Learn how to teach and maintain effective floor presence standards that drive operational stability and continuous improvement.',
    category: 'Leadership & Culture',
    readTime: '11 min read',
    publishDate: '2024-01-30',
    author: 'Vladimir Romanov',
    content: `
      <div class="bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-lg mb-8">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg class="w-6 h-6 text-green-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-lg font-semibold text-green-800 mb-2">The Invisible Leader Phenomenon</h3>
            <p class="text-green-700">A plant manager discovered that her most effective supervisors averaged 80% floor time, while struggling supervisors spent less than 30% on the floor. The difference wasn't in their technical knowledge - it was in their presence and coaching capability.</p>
          </div>
        </div>
      </div>

      <h2>Why Floor Presence Matters More Than Ever</h2>
      <p>In an era of digital dashboards and remote monitoring, physical presence on the plant floor remains irreplaceable. Floor presence isn't about micromanagement - it's about creating the conditions for teams to self-correct, continuously improve, and respond rapidly to problems.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6 text-center">
          <div class="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-frame-gray-900 mb-2">Real-Time Problem Solving</h3>
          <p class="text-frame-gray-600 text-sm">Issues are caught and resolved before they become crises</p>
        </div>
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6 text-center">
          <div class="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-frame-gray-900 mb-2">Continuous Learning</h3>
          <p class="text-frame-gray-600 text-sm">Knowledge transfer happens naturally through observation and coaching</p>
        </div>
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6 text-center">
          <div class="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-frame-gray-900 mb-2">Cultural Reinforcement</h3>
          <p class="text-frame-gray-600 text-sm">Values and standards are reinforced through visible leadership</p>
        </div>
      </div>

      <h2>The FRAME Floor Presence Framework</h2>
      <p>Effective floor presence follows a structured approach. It's not wandering around - it's purposeful engagement that drives results:</p>

      <div class="bg-gradient-to-r from-frame-gray-50 to-white rounded-2xl p-8 my-8">
        <h3 class="text-2xl font-bold text-frame-gray-900 mb-8 text-center">The 4P Framework</h3>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0 text-lg font-bold">P</div>
              <div>
                <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Purpose</h4>
                <p class="text-frame-gray-700">Every floor visit has a clear objective: safety check, quality review, problem-solving, or coaching.</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0 text-lg font-bold">P</div>
              <div>
                <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Presence</h4>
                <p class="text-frame-gray-700">Physical location matters, but mental presence matters more. Be fully engaged with people and processes.</p>
              </div>
            </div>
          </div>
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0 text-lg font-bold">P</div>
              <div>
                <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Process</h4>
                <p class="text-frame-gray-700">Follow consistent routines: safety first, observe before speaking, ask questions, provide feedback.</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0 text-lg font-bold">P</div>
              <div>
                <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Persistence</h4>
                <p class="text-frame-gray-700">Consistent daily engagement builds trust and drives cultural change over time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>Teaching Floor Presence Skills</h2>
      <p>Floor presence is a learnable skill. Here's how to develop this capability in your leadership team:</p>

      <div class="space-y-8 my-8">
        <div class="bg-white border-l-4 border-blue-500 p-6 rounded-lg">
          <h3 class="text-xl font-bold text-frame-gray-900 mb-3">Level 1: Observation Skills</h3>
          <p class="text-frame-gray-700 mb-4">Teach leaders what to look for during floor visits:</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 class="font-semibold text-frame-gray-900 mb-2">Safety Indicators</h4>
              <ul class="text-sm text-frame-gray-600 space-y-1">
                <li>• PPE compliance and condition</li>
                <li>• Housekeeping and walkway clarity</li>
                <li>• Lockout/tagout procedures</li>
                <li>• Near-miss situations</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-frame-gray-900 mb-2">Operational Health</h4>
              <ul class="text-sm text-frame-gray-600 space-y-1">
                <li>• Equipment sounds and vibrations</li>
                <li>• Process flow and bottlenecks</li>
                <li>• Quality issues and trends</li>
                <li>• Team dynamics and engagement</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white border-l-4 border-green-500 p-6 rounded-lg">
          <h3 class="text-xl font-bold text-frame-gray-900 mb-3">Level 2: Engagement Techniques</h3>
          <p class="text-frame-gray-700 mb-4">Develop productive conversation skills:</p>
          <div class="overflow-x-auto">
            <table class="min-w-full">
              <thead>
                <tr class="bg-frame-gray-50">
                  <th class="px-4 py-2 text-left text-sm font-medium text-frame-gray-700">Situation</th>
                  <th class="px-4 py-2 text-left text-sm font-medium text-frame-gray-700">Instead of Saying</th>
                  <th class="px-4 py-2 text-left text-sm font-medium text-frame-gray-700">Try This</th>
                </tr>
              </thead>
              <tbody class="text-sm">
                <tr class="border-t">
                  <td class="px-4 py-2 text-frame-gray-900">Equipment issue</td>
                  <td class="px-4 py-2 text-red-600">"Why didn't you call maintenance?"</td>
                  <td class="px-4 py-2 text-green-600">"What's happening with this equipment?"</td>
                </tr>
                <tr class="border-t bg-frame-gray-50">
                  <td class="px-4 py-2 text-frame-gray-900">Quality problem</td>
                  <td class="px-4 py-2 text-red-600">"You need to be more careful"</td>
                  <td class="px-4 py-2 text-green-600">"Help me understand this defect pattern"</td>
                </tr>
                <tr class="border-t">
                  <td class="px-4 py-2 text-frame-gray-900">Process deviation</td>
                  <td class="px-4 py-2 text-red-600">"That's not how we do it"</td>
                  <td class="px-4 py-2 text-green-600">"Walk me through your process"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="bg-white border-l-4 border-orange-500 p-6 rounded-lg">
          <h3 class="text-xl font-bold text-frame-gray-900 mb-3">Level 3: Coaching Mindset</h3>
          <p class="text-frame-gray-700 mb-4">Transform floor visits into development opportunities:</p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-semibold text-blue-800 mb-2">Ask Before Telling</h4>
              <p class="text-blue-700 text-sm">Lead with questions to understand thinking before providing solutions</p>
            </div>
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-semibold text-green-800 mb-2">Praise Specifically</h4>
              <p class="text-green-700 text-sm">Recognize exact behaviors and their impact on results</p>
            </div>
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-semibold text-purple-800 mb-2">Follow Through</h4>
              <p class="text-purple-700 text-sm">Check back on commitments and improvements made</p>
            </div>
          </div>
        </div>
      </div>

      <h2>Creating Accountability Systems</h2>
      <p>Make floor presence a measured and managed behavior, not a nice-to-have activity:</p>

      <div class="bg-frame-blue text-white rounded-2xl p-8 my-8">
        <h3 class="text-2xl font-bold mb-6">Floor Presence Scorecard</h3>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-200 mb-2">70%</div>
            <div class="text-sm">Minimum Floor Time</div>
            <div class="text-xs text-blue-200">For supervisors</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-200 mb-2">50%</div>
            <div class="text-sm">Minimum Floor Time</div>
            <div class="text-xs text-blue-200">For managers</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-200 mb-2">3x</div>
            <div class="text-sm">Daily Interactions</div>
            <div class="text-xs text-blue-200">Per leader minimum</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-200 mb-2">90%</div>
            <div class="text-sm">Follow-up Rate</div>
            <div class="text-xs text-blue-200">On commitments made</div>
          </div>
        </div>
      </div>

      <h2>Overcoming Common Barriers</h2>
      <p>Address the typical obstacles that prevent consistent floor presence:</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div class="bg-red-50 border border-red-200 rounded-xl p-6">
          <h4 class="font-bold text-red-800 mb-3 flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            "Too Many Meetings"
          </h4>
          <p class="text-red-700 text-sm mb-3">Leaders claim they're stuck in conference rooms all day.</p>
          <div class="bg-red-100 p-3 rounded text-xs text-red-800">
            <strong>Solution:</strong> Audit meetings ruthlessly. Eliminate, delegate, or shorten non-essential meetings. Block floor time in calendar.
          </div>
        </div>

        <div class="bg-orange-50 border border-orange-200 rounded-xl p-6">
          <h4 class="font-bold text-orange-800 mb-3 flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
            "Operators Don't Want Us There"
          </h4>
          <p class="text-orange-700 text-sm mb-3">Teams view management presence as interference or fault-finding.</p>
          <div class="bg-orange-100 p-3 rounded text-xs text-orange-800">
            <strong>Solution:</strong> Start with helping, not judging. Ask "What can I help with?" instead of "What's wrong here?"
          </div>
        </div>

        <div class="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <h4 class="font-bold text-yellow-800 mb-3 flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            "Don't Know What to Look For"
          </h4>
          <p class="text-yellow-700 text-sm mb-3">Leaders feel unprepared to add value during floor visits.</p>
          <div class="bg-yellow-100 p-3 rounded text-xs text-yellow-800">
            <strong>Solution:</strong> Create floor walk checklists. Pair new leaders with experienced coaches. Focus on learning, not perfection.
          </div>
        </div>

        <div class="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h4 class="font-bold text-blue-800 mb-3 flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            "Administrative Burden"
          </h4>
          <p class="text-blue-700 text-sm mb-3">Paperwork and reports consume available time.</p>
          <div class="bg-blue-100 p-3 rounded text-xs text-blue-800">
            <strong>Solution:</strong> Streamline reporting. Use mobile tools for floor data capture. Delegate non-essential administrative tasks.
          </div>
        </div>
      </div>
    `,
    faqs: [
      {
        question: "How much time should leaders spend on the floor?",
        answer: "Supervisors should target 70%+ floor time, managers 50%+, and senior leaders 25%+. The key is consistency and quality of engagement, not just time spent. Even 30 minutes of focused, purposeful floor presence can drive significant impact."
      },
      {
        question: "What's the difference between floor presence and micromanagement?",
        answer: "Floor presence involves coaching, supporting, and removing barriers. Micromanagement involves controlling and correcting every detail. Good floor presence empowers teams to solve problems; micromanagement creates dependency on leadership for every decision."
      },
      {
        question: "How do I measure the effectiveness of floor presence?",
        answer: "Track leading indicators: safety observations, improvement suggestions from the floor, response time to problems, and employee engagement scores. Also measure lagging indicators: safety incidents, quality metrics, and operational performance."
      }
    ],
    relatedResources: [
      'time-first-action-downtime',
      'hidden-cost-manufacturing-obsolescence',
      'practical-six-sigma-operations'
    ]
  },
  'practical-six-sigma-operations': {
    title: 'Practical Six Sigma in Plant Operations',
    description: 'Apply Six Sigma principles to real-world manufacturing challenges. Learn how to implement DMAIC methodology for sustainable operational improvements.',
    category: 'Process Optimization',
    readTime: '13 min read',
    publishDate: '2024-02-05',
    author: 'Vladimir Romanov',
    content: `
      <div class="bg-gradient-to-br from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-6 rounded-lg mb-8">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg class="w-6 h-6 text-indigo-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
          </div>
          <div class="ml-3">
            <h3 class="text-lg font-semibold text-indigo-800 mb-2">$1.8M from One Six Sigma Project</h3>
            <p class="text-indigo-700">A packaging plant reduced filling variation by 0.2ml using DMAIC methodology. This small improvement eliminated $1.8M in annual product giveaway while improving customer satisfaction. The project took 4 months and cost $15K to implement.</p>
          </div>
        </div>
      </div>

      <h2>Six Sigma for Manufacturing Reality</h2>
      <p>Six Sigma works in manufacturing - when it's applied practically. Forget the consultant-heavy, statistially complex approaches. Focus on the core methodology: Define, Measure, Analyze, Improve, Control (DMAIC) as a problem-solving framework that drives measurable results.</p>
      
      <div class="bg-white border border-frame-gray-200 rounded-xl p-6 my-8">
        <h3 class="text-xl font-bold text-frame-gray-900 mb-4">Six Sigma Success Factors in Manufacturing</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="text-center">
            <div class="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Clear Problem Definition</h4>
            <p class="text-frame-gray-600 text-sm">Focus on specific, measurable problems with business impact</p>
          </div>
          <div class="text-center">
            <div class="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
            </div>
            <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Data-Driven Analysis</h4>
            <p class="text-frame-gray-600 text-sm">Use production data to identify root causes, not opinions</p>
          </div>
          <div class="text-center">
            <div class="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            </div>
            <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Sustainable Controls</h4>
            <p class="text-frame-gray-600 text-sm">Build systems that maintain improvements long-term</p>
          </div>
        </div>
      </div>

      <h2>The Manufacturing DMAIC Playbook</h2>
      <p>Here's how to apply each DMAIC phase effectively in plant operations:</p>

      <div class="space-y-8 my-8">
        <div class="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
          <div class="flex items-center mb-4">
            <div class="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 text-lg font-bold">D</div>
            <h3 class="text-2xl font-bold text-red-800">Define: Nail the Problem Statement</h3>
          </div>
          <p class="text-red-700 mb-4">Most Six Sigma projects fail here. Vague problem statements lead to unfocused solutions.</p>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold text-red-800 mb-2">Bad Problem Statements:</h4>
              <ul class="space-y-2 text-red-700 text-sm">
                <li>❌ "Improve quality"</li>
                <li>❌ "Reduce downtime"</li>
                <li>❌ "Make the line run better"</li>
                <li>❌ "Fix the packaging issues"</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-red-800 mb-2">Good Problem Statements:</h4>
              <ul class="space-y-2 text-red-700 text-sm">
                <li>✅ "Reduce filling weight variation from 2.1g to 0.8g"</li>
                <li>✅ "Decrease changeover time from 45 to 20 minutes"</li>
                <li>✅ "Reduce misaligned label defects from 2.3% to 0.5%"</li>
                <li>✅ "Eliminate weekly calibration drift on Line 3"</li>
              </ul>
            </div>
          </div>
          
          <div class="mt-4 p-4 bg-red-100 rounded-lg">
            <h4 class="font-semibold text-red-800 mb-2">FRAME Problem Statement Template:</h4>
            <p class="text-red-700 text-sm italic">"[Specific process/equipment] currently [current performance] causing [business impact]. We need to achieve [target performance] by [timeframe] to [benefit]."</p>
          </div>
        </div>

        <div class="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
          <div class="flex items-center mb-4">
            <div class="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 text-lg font-bold">M</div>
            <h3 class="text-2xl font-bold text-orange-800">Measure: Establish Your Baseline</h3>
          </div>
          <p class="text-orange-700 mb-4">You can't improve what you can't measure. Establish current performance with real production data.</p>
          
          <div class="overflow-x-auto">
            <table class="min-w-full bg-white border border-orange-200 rounded-lg">
              <thead class="bg-orange-100">
                <tr>
                  <th class="px-4 py-2 text-left text-sm font-medium text-orange-800">Data Type</th>
                  <th class="px-4 py-2 text-left text-sm font-medium text-orange-800">Collection Method</th>
                  <th class="px-4 py-2 text-left text-sm font-medium text-orange-800">Sample Size</th>
                  <th class="px-4 py-2 text-left text-sm font-medium text-orange-800">Duration</th>
                </tr>
              </thead>
              <tbody class="text-sm">
                <tr class="border-t border-orange-200">
                  <td class="px-4 py-2 text-orange-900">Quality Data</td>
                  <td class="px-4 py-2 text-orange-700">Automated inspection systems</td>
                  <td class="px-4 py-2 text-orange-700">1000+ parts</td>
                  <td class="px-4 py-2 text-orange-700">2-4 weeks</td>
                </tr>
                <tr class="border-t border-orange-200 bg-orange-50">
                  <td class="px-4 py-2 text-orange-900">Process Parameters</td>
                  <td class="px-4 py-2 text-orange-700">HMI/SCADA systems</td>
                  <td class="px-4 py-2 text-orange-700">Continuous logging</td>
                  <td class="px-4 py-2 text-orange-700">1-2 weeks</td>
                </tr>
                <tr class="border-t border-orange-200">
                  <td class="px-4 py-2 text-orange-900">Timing Data</td>
                  <td class="px-4 py-2 text-orange-700">Time studies/video analysis</td>
                  <td class="px-4 py-2 text-orange-700">30+ cycles</td>
                  <td class="px-4 py-2 text-orange-700">3-5 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6">
          <div class="flex items-center mb-4">
            <div class="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 text-lg font-bold">A</div>
            <h3 class="text-2xl font-bold text-yellow-800">Analyze: Find the Real Root Causes</h3>
          </div>
          <p class="text-yellow-700 mb-4">Skip the blame game. Use data and proven analysis tools to identify true root causes.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg border border-yellow-200">
              <h4 class="font-semibold text-yellow-800 mb-3">Primary Analysis Tools</h4>
              <ul class="space-y-2 text-yellow-700 text-sm">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  <span><strong>Pareto Charts:</strong> Identify the vital few causes</span>
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  <span><strong>Fishbone Diagrams:</strong> Systematic cause exploration</span>
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  <span><strong>5 Whys:</strong> Drill down to root causes</span>
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  <span><strong>Statistical Analysis:</strong> Correlation and regression</span>
                </li>
              </ul>
            </div>
            <div class="bg-yellow-100 p-4 rounded-lg">
              <h4 class="font-semibold text-yellow-800 mb-3">Analysis Success Tips</h4>
              <ul class="space-y-2 text-yellow-700 text-sm">
                <li>• Include operators in analysis sessions</li>
                <li>• Test hypotheses with experiments</li>
                <li>• Look for patterns across shifts/time</li>
                <li>• Validate findings with additional data</li>
                <li>• Focus on controllable factors</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
          <div class="flex items-center mb-4">
            <div class="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 text-lg font-bold">I</div>
            <h3 class="text-2xl font-bold text-green-800">Improve: Implement Smart Solutions</h3>
          </div>
          <p class="text-green-700 mb-4">Design solutions that address root causes, not symptoms. Pilot before full implementation.</p>
          
          <div class="bg-white p-6 rounded-lg border border-green-200">
            <h4 class="font-semibold text-green-800 mb-4">Solution Development Framework</h4>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div class="text-center">
                <div class="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <span class="text-green-600 font-bold">1</span>
                </div>
                <h5 class="text-sm font-semibold text-green-800">Brainstorm</h5>
                <p class="text-xs text-green-700">Generate multiple solution options</p>
              </div>
              <div class="text-center">
                <div class="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <span class="text-green-600 font-bold">2</span>
                </div>
                <h5 class="text-sm font-semibold text-green-800">Evaluate</h5>
                <p class="text-xs text-green-700">Score options on impact vs effort</p>
              </div>
              <div class="text-center">
                <div class="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <span class="text-green-600 font-bold">3</span>
                </div>
                <h5 class="text-sm font-semibold text-green-800">Pilot</h5>
                <p class="text-xs text-green-700">Test on small scale first</p>
              </div>
              <div class="text-center">
                <div class="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <span class="text-green-600 font-bold">4</span>
                </div>
                <h5 class="text-sm font-semibold text-green-800">Scale</h5>
                <p class="text-xs text-green-700">Roll out proven solutions</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
          <div class="flex items-center mb-4">
            <div class="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 text-lg font-bold">C</div>
            <h3 class="text-2xl font-bold text-blue-800">Control: Sustain the Gains</h3>
          </div>
          <p class="text-blue-700 mb-4">Most improvements fade without proper controls. Build systems that maintain performance automatically.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white p-4 rounded-lg border border-blue-200">
              <h4 class="font-semibold text-blue-800 mb-3">Process Controls</h4>
              <ul class="space-y-2 text-blue-700 text-sm">
                <li>• Updated work instructions</li>
                <li>• Automated process limits</li>
                <li>• Error-proofing devices</li>
                <li>• Standard operating procedures</li>
              </ul>
            </div>
            <div class="bg-white p-4 rounded-lg border border-blue-200">
              <h4 class="font-semibold text-blue-800 mb-3">Monitoring Systems</h4>
              <ul class="space-y-2 text-blue-700 text-sm">
                <li>• Real-time dashboards</li>
                <li>• Statistical process control</li>
                <li>• Automated alerts</li>
                <li>• Regular audits</li>
              </ul>
            </div>
            <div class="bg-white p-4 rounded-lg border border-blue-200">
              <h4 class="font-semibold text-blue-800 mb-3">People Systems</h4>
              <ul class="space-y-2 text-blue-700 text-sm">
                <li>• Training programs</li>
                <li>• Performance metrics</li>
                <li>• Escalation procedures</li>
                <li>• Continuous improvement culture</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h2>Real Manufacturing Examples</h2>
      <p>See how leading manufacturers apply Six Sigma to solve common operational challenges:</p>

      <div class="space-y-6 my-8">
        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <div class="flex items-start mb-4">
            <div class="bg-blue-100 rounded-full p-2 mr-4 flex-shrink-0">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Electronics Manufacturer: Solder Defect Reduction</h4>
              <p class="text-frame-gray-700 mb-3">Problem: 3.2% solder joint defects causing $400K annual rework costs</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-semibold text-frame-gray-900 mb-2">Root Causes Found:</h5>
                  <ul class="text-sm text-frame-gray-600 space-y-1">
                    <li>• Temperature variation ±8°C vs. ±2°C spec</li>
                    <li>• Conveyor speed inconsistency</li>
                    <li>• Flux application variation</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-semibold text-frame-gray-900 mb-2">Results After 6 Months:</h5>
                  <ul class="text-sm text-green-600 space-y-1">
                    <li>• Defect rate: 3.2% → 0.8%</li>
                    <li>• Rework cost: $400K → $95K saved</li>
                    <li>• Customer complaints: 85% reduction</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white border border-frame-gray-200 rounded-xl p-6">
          <div class="flex items-start mb-4">
            <div class="bg-green-100 rounded-full p-2 mr-4 flex-shrink-0">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-frame-gray-900 mb-2">Automotive Plant: Changeover Time Improvement</h4>
              <p class="text-frame-gray-700 mb-3">Problem: 47-minute average changeovers limiting production flexibility</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 class="font-semibold text-frame-gray-900 mb-2">Key Improvements:</h5>
                  <ul class="text-sm text-frame-gray-600 space-y-1">
                    <li>• Pre-staged tooling and materials</li>
                    <li>• Standardized changeover sequence</li>
                    <li>• External setup optimization</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-semibold text-frame-gray-900 mb-2">Business Impact:</h5>
                  <ul class="text-sm text-green-600 space-y-1">
                    <li>• Changeover time: 47 → 18 minutes</li>
                    <li>• Production capacity: +12%</li>
                    <li>• Revenue impact: +$2.1M annually</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>Building Your Six Sigma Program</h2>
      <p>Start small and scale systematically. Here's the proven approach for manufacturing environments:</p>

      <div class="bg-frame-blue text-white rounded-2xl p-8 my-8">
        <h3 class="text-2xl font-bold mb-6">Six Sigma Implementation Roadmap</h3>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-200 mb-2">Month 1-3</div>
            <div class="text-lg font-semibold mb-2">Foundation</div>
            <div class="text-sm text-blue-100">Train core team, select first project, establish baseline</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-200 mb-2">Month 4-6</div>
            <div class="text-lg font-semibold mb-2">First Success</div>
            <div class="text-sm text-blue-100">Complete first project, document lessons, celebrate wins</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-200 mb-2">Month 7-12</div>
            <div class="text-lg font-semibold mb-2">Expansion</div>
            <div class="text-sm text-blue-100">Launch 3-5 additional projects, train more team members</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-200 mb-2">Year 2+</div>
            <div class="text-lg font-semibold mb-2">Culture</div>
            <div class="text-sm text-blue-100">Integrate into daily operations, continuous pipeline</div>
          </div>
        </div>
      </div>
    `,
    faqs: [
      {
        question: "Do I need Black Belts and Green Belts for Six Sigma in manufacturing?",
        answer: "Belt programs help with advanced projects, but you can start with basic DMAIC training for your team. Focus on practical problem-solving skills rather than certification requirements. Many successful manufacturing Six Sigma programs use simplified training focused on tools and methodology."
      },
      {
        question: "How do I choose the right Six Sigma projects?",
        answer: "Select projects with clear business impact ($50K+ savings potential), manageable scope (3-6 months), available data, and team ownership. Avoid projects that require major capital investment or depend heavily on external factors you can't control."
      },
      {
        question: "What's the minimum data needed for Six Sigma analysis?",
        answer: "For basic analysis, aim for 30+ data points for timing studies, 100+ for quality measurements, and 2+ weeks of process data. The key is representative data that captures normal variation. Don't delay projects waiting for perfect data - start with what you have and improve data collection as you go."
      }
    ],
    relatedResources: [
      'time-first-action-downtime',
      'floor-presence-standards-teaching',
      'ai-manufacturing-vision-systems'
    ]
  }
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
    return (
      <div className="min-h-screen bg-white py-16">
        <div className="container-custom max-w-4xl text-center">
          <h1 className="text-3xl font-bold mb-4 text-frame-gray-900">Resource Not Found</h1>
          <p className="text-frame-gray-600 mb-8">The resource you're looking for doesn't exist or has been moved.</p>
          <Link href="/resources" className="btn-primary">
            Back to Resources
          </Link>
        </div>
      </div>
    )
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

          {/* FAQ Section */}
          {resource.faqs && resource.faqs.length > 0 && (
            <FAQSection faqs={resource.faqs} />
          )}

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