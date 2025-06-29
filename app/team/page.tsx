import { Linkedin, Globe, Mail, Github, Twitter, Award, Users, Factory, TrendingUp } from 'lucide-react'

const team = [
  {
    name: 'Vladimir Romanov',
    title: 'Managing Partner',
    bio: 'Manufacturing operations expert with 15+ years of experience in industrial automation, reliability engineering, and operational excellence. Passionate about helping manufacturing professionals grow their careers and improve their factories.',
    image: '/team/vladimir-romanov.webp',
    linkedin: 'https://www.linkedin.com/in/vladromanov/',
    github: 'https://github.com/VRomanov89',
    twitter: 'https://x.com/VRomanov89',
    website: 'https://www.joltek.com/',
    email: 'vladimir@framexl.com',
    expertise: ['Operations Management', 'Industrial Automation', 'Reliability Engineering', 'Lean Manufacturing']
  }
]

const achievements = [
  {
    icon: Factory,
    title: '15+ Years Experience',
    description: 'Deep expertise across automotive, aerospace, and consumer goods manufacturing'
  },
  {
    icon: Users,
    title: '500+ Professionals',
    description: 'Mentored and trained manufacturing teams across North America and Europe'
  },
  {
    icon: TrendingUp,
    title: '$50M+ in Savings',
    description: 'Delivered operational improvements and cost savings for Fortune 500 manufacturers'
  },
  {
    icon: Award,
    title: 'Industry Recognition',
    description: 'Published author and speaker on manufacturing excellence and automation'
  }
]

const expertiseAreas = [
  {
    category: 'Operations Excellence',
    skills: ['Lean Manufacturing', 'Six Sigma', 'Continuous Improvement', 'Process Optimization', 'Quality Management']
  },
  {
    category: 'Industrial Automation',
    skills: ['PLC Programming', 'SCADA Systems', 'Robotics Integration', 'Industry 4.0', 'IoT Implementation']
  },
  {
    category: 'Reliability Engineering',
    skills: ['Predictive Maintenance', 'Equipment Reliability', 'Root Cause Analysis', 'Preventive Maintenance', 'Asset Management']
  },
  {
    category: 'Leadership & Strategy',
    skills: ['Team Development', 'Change Management', 'Strategic Planning', 'Performance Management', 'Cross-functional Leadership']
  }
]

export default function Team() {
  return (
    <div className="min-h-screen bg-frame-gray-50 py-16">
      <div className="container-custom max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-frame-gray-900 mb-4">Meet Our Team</h1>
          <p className="text-xl text-frame-gray-600 max-w-3xl mx-auto">
            Manufacturing professionals helping manufacturing professionals. 
            Our team brings decades of combined experience in operations, automation, and excellence.
          </p>
        </div>

        {/* Team Member */}
        <div className="flex justify-center mb-20">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded-2xl shadow-lg border border-frame-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-2xl">
              {/* Industrial Background with Profile Image */}
              <div className="h-64 relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
                {/* Industrial Background Elements */}
                <div className="absolute inset-0 opacity-20">
                  {/* Circuit Board Pattern */}
                  <div className="absolute top-4 left-4 w-16 h-16 border border-frame-blue/30 rounded"></div>
                  <div className="absolute top-8 left-8 w-8 h-8 border border-frame-blue/20 rounded"></div>
                  <div className="absolute top-12 left-12 w-4 h-4 bg-frame-blue/20 rounded-full"></div>
                  
                  {/* Factory Silhouette */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
                    <div className="absolute bottom-0 right-0 w-24 h-16 bg-frame-blue/30 rounded-t"></div>
                    <div className="absolute bottom-0 right-2 w-4 h-20 bg-frame-blue/20"></div>
                    <div className="absolute bottom-0 right-8 w-4 h-16 bg-frame-blue/20"></div>
                    <div className="absolute bottom-0 right-14 w-4 h-18 bg-frame-blue/20"></div>
                    <div className="absolute bottom-0 right-20 w-4 h-14 bg-frame-blue/20"></div>
                  </div>
                  
                  {/* Gear Elements */}
                  <div className="absolute top-1/4 right-1/4 w-12 h-12 opacity-10">
                    <div className="w-full h-full border-2 border-frame-blue/30 rounded-full relative">
                      <div className="absolute top-1/2 left-1/2 w-1 h-6 bg-frame-blue/30 transform -translate-x-1/2 -translate-y-1/2"></div>
                      <div className="absolute top-1/2 left-1/2 w-6 h-1 bg-frame-blue/30 transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                  </div>
                  
                  {/* Data Flow Lines */}
                  <div className="absolute top-1/3 left-1/3 w-20 h-1 bg-gradient-to-r from-transparent via-frame-blue/20 to-transparent"></div>
                  <div className="absolute top-2/3 right-1/3 w-16 h-1 bg-gradient-to-r from-transparent via-frame-blue/20 to-transparent"></div>
                </div>
                
                {/* Profile Photo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-2xl ring-4 ring-frame-blue/20"
                      />
                    ) : (
                      <div className="w-32 h-32 rounded-full bg-frame-blue/20 flex items-center justify-center border-4 border-white shadow-2xl ring-4 ring-frame-blue/20">
                        <span className="text-4xl font-bold text-frame-blue">{member.name[0]}</span>
                      </div>
                    )}
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 w-32 h-32 rounded-full bg-frame-blue/10 blur-xl"></div>
                  </div>
                </div>
              </div>

              {/* Profile Content */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-frame-gray-900 mb-1">{member.name}</h2>
                <p className="text-frame-blue font-semibold mb-4">{member.title}</p>
                
                <p className="text-frame-gray-600 mb-6 leading-relaxed">{member.bio}</p>

                {/* Contact Links */}
                <div className="flex gap-3 justify-center">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-frame-gray-600 hover:text-frame-blue transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  
                  <a 
                    href={member.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-frame-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">GitHub</span>
                  </a>
                  
                  <a 
                    href={member.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-frame-gray-600 hover:text-black transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                    <span className="text-sm">Twitter</span>
                  </a>
                  
                  {member.website && (
                    <a 
                      href={member.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-frame-gray-600 hover:text-green-600 transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                      <span className="text-sm">Website</span>
                    </a>
                  )}
                  
                  <a 
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-frame-gray-600 hover:text-frame-blue transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">Email</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-frame-gray-900 text-center mb-12">Track Record of Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-frame-gray-200 text-center">
                <div className="w-12 h-12 bg-frame-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-6 h-6 text-frame-blue" />
                </div>
                <h3 className="text-lg font-semibold text-frame-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-frame-gray-600 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Areas */}
        <div>
          <h2 className="text-3xl font-bold text-frame-gray-900 text-center mb-12">Areas of Expertise</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-frame-gray-200">
                <h3 className="text-xl font-semibold text-frame-gray-900 mb-4">{area.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-frame-blue/10 text-frame-blue text-sm font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 