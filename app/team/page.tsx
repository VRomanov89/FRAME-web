import { Linkedin, Globe, Mail } from 'lucide-react'

const team = [
  {
    name: 'Vladimir Romanov',
    title: 'Managing Partner',
    bio: 'Manufacturing operations expert with 15+ years of experience in industrial automation, reliability engineering, and operational excellence. Passionate about helping manufacturing professionals grow their careers and improve their factories.',
    image: '/vladimir-romanov.webp',
    linkedin: 'https://www.linkedin.com/in/vladimir-romanov/',
    website: 'https://vladimirromanov.com',
    email: 'vladimir@framexl.com',
    expertise: ['Operations Management', 'Industrial Automation', 'Reliability Engineering', 'Lean Manufacturing']
  }
]

export default function Team() {
  return (
    <div className="min-h-screen bg-frame-gray-50 py-16">
      <div className="container-custom max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-frame-gray-900 mb-4">Meet Our Team</h1>
          <p className="text-xl text-frame-gray-600 max-w-3xl mx-auto">
            Manufacturing professionals helping manufacturing professionals. 
            Our team brings decades of combined experience in operations, automation, and excellence.
          </p>
        </div>

        {/* Team Member */}
        <div className="flex justify-center">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded-2xl shadow-lg border border-frame-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-2xl">
              {/* Profile Image */}
              <div className="h-64 bg-gradient-to-br from-frame-blue/10 to-frame-blue/5 flex items-center justify-center">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-frame-blue/20 flex items-center justify-center border-4 border-white shadow-lg">
                    <span className="text-4xl font-bold text-frame-blue">{member.name[0]}</span>
                  </div>
                )}
              </div>

              {/* Profile Content */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-frame-gray-900 mb-1">{member.name}</h2>
                <p className="text-frame-blue font-semibold mb-4">{member.title}</p>
                
                <p className="text-frame-gray-600 mb-6 leading-relaxed">{member.bio}</p>

                {/* Expertise Tags */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-frame-gray-700 mb-3">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-3 py-1 bg-frame-blue/10 text-frame-blue text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

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
                  
                  {member.website && (
                    <a 
                      href={member.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-frame-gray-600 hover:text-frame-blue transition-colors"
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

        {/* Join Us Section */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-frame-gray-200">
            <h2 className="text-2xl font-bold text-frame-gray-900 mb-4">Get in Touch</h2>
            <p className="text-frame-gray-600 mb-6 max-w-2xl mx-auto">
              Have questions about manufacturing operations, automation, or career growth? 
              I'd love to hear from you and help you improve your factory and career.
            </p>
            <a 
              href="mailto:vladimir@framexl.com" 
              className="inline-flex items-center gap-2 bg-frame-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Send a Message
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 