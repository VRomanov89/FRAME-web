import { Linkedin } from 'lucide-react'

const team = [
  {
    name: 'Vladimir Romanov',
    title: 'Managing Partner',
    linkedin: 'https://www.linkedin.com/in/vladimir-romanov/',
  },
  {
    name: 'Your Team Member 2',
    title: 'Title 2',
    linkedin: 'https://www.linkedin.com/in/member2/',
  },
  // Add more team members as needed
]

export default function Team() {
  return (
    <div className="min-h-screen bg-frame-gray-50 py-16">
      <div className="container-custom max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-frame-gray-900 mb-8 text-center">Our Team</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded-2xl p-8 shadow-lg border border-frame-gray-200 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-frame-blue/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-frame-blue">{member.name[0]}</span>
              </div>
              <h2 className="text-xl font-bold text-frame-gray-900 mb-1">{member.name}</h2>
              <p className="text-frame-gray-600 mb-4">{member.title}</p>
              <div className="flex gap-4 justify-center">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-frame-blue hover:text-blue-700 flex items-center gap-2">
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 