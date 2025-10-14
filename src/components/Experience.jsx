import { useEffect, useState, useRef } from "react"
import { Briefcase, Calendar, MapPin, Award, Users, Code, Lightbulb } from "lucide-react"

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const experiences = [
    {
      id: 1,
      role: "Full-stack Developer Intern",
      company: "MagnifyX",
      duration: "Dec 2024 – Apr 2025",
      location: "London (Remote)",
      description: "Building responsive admin dashboards and optimizing workflows for better efficiency",
      responsibilities: [
        "Built 3+ responsive admin dashboards, reducing task execution time by 40% through API-first development",
        "Enhanced website visibility and SEO by optimizing dashboards and workflows",
        "Collaborated in 8+ agile sprints, ensuring 100% browser compatibility across major platforms",
        "Implemented performance-focused practices in full-stack development",
      ],
      color: "from-purple-500 to-pink-500",
      emoji: "🚀",
      icon: Code,
      achievements: ["40% reduction in task execution time", "100% browser compatibility"]
    },
    {
      id: 2,
      role: "Workshop Instructor – AI & Python",
      company: "CAT-India (NIELIT, KV Mudkhed)",
      duration: "Feb 2025",
      location: "NIELIT",
      description: "Teaching AI and Python fundamentals to students through hands-on sessions",
      responsibilities: [
        "Taught 40+ students the fundamentals of AI and Python through hands-on sessions and live coding",
        "Designed interactive lessons to make tech concepts beginner-friendly",
        "Improved communication and teaching skills through real-time mentoring",
        "Fostered curiosity and learning in young minds via practical examples",
      ],
      color: "from-blue-500 to-purple-500",
      emoji: "🎓",
      icon: Lightbulb,
      achievements: ["40+ students taught", "Hands-on learning approach"]
    },
    {
      id: 3,
      role: "Back-End Developer Intern",
      company: "RentOut Homes",
      duration: "Sep 2024 – Oct 2024",
      location: "Remote",
      description: "Optimizing backend performance and implementing role-based access control",
      responsibilities: [
        "Improved API response times by 35% via MongoDB query optimization",
        "Introduced role-based access for 2 user types",
        "Documented over 20 API endpoints and maintained a GitHub repository",
        "Worked closely with frontend teams for seamless API integration",
      ],
      color: "from-green-500 to-blue-500",
      emoji: "⚡",
      icon: Award,
      achievements: ["35% faster API response times", "20+ API endpoints documented"]
    },
  ]

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-purple-50/30 via-white to-pink-50/30 dark:from-purple-900/20 dark:via-gray-900 dark:to-pink-900/20"
    >
      <div className="container px-6 mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 text-purple-700 dark:text-purple-300">
            <span className="text-lg">💼</span>
            My professional journey
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-300">
            Here's where I've been making magic happen! Each experience taught me something new and exciting! ✨
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 via-pink-400 to-orange-400 rounded-full"></div>
            
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative mb-12 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-white dark:bg-gray-800 border-4 border-purple-500 rounded-full z-10"></div>
                
                {/* Experience card */}
                <div className="ml-16 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="flex items-center gap-3 mb-2 lg:mb-0">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center text-white text-xl`}>
                        {exp.emoji}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                          <Briefcase className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2">
                      <div className="flex items-center gap-1 px-3 py-1 text-sm text-gray-500 bg-gray-100 dark:bg-gray-700 dark:text-gray-400 rounded-full">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1 px-3 py-1 text-sm text-gray-500 bg-gray-100 dark:bg-gray-700 dark:text-gray-400 rounded-full">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="mb-4 text-gray-600 dark:text-gray-300 text-lg">{exp.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="mb-2 font-semibold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                      <exp.icon className="w-4 h-4 text-purple-500" />
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-gray-600 dark:text-gray-300 transition-all duration-500"
                          style={{
                            transitionDelay: `${(index * 200) + (i * 100) + 400}ms`,
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? "translateX(0)" : "translateX(-10px)",
                          }}
                        >
                          <span className="text-purple-500 mt-1">•</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 text-purple-700 dark:text-purple-300"
                      >
                        🏆 {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun stats section */}
        <div
          className={`mt-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
          style={{ transitionDelay: "1s" }}
        >
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-8 border border-purple-200 dark:border-purple-700">
            <h3 className="mb-6 text-2xl font-bold text-center text-purple-800 dark:text-purple-200">
              Experience Highlights 🌟
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3 animate-bounce">🚀</div>
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">4+</div>
                <div className="text-sm text-purple-700 dark:text-purple-300">Companies Worked</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3 animate-bounce" style={{ animationDelay: '0.5s' }}>💻</div>
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">10+</div>
                <div className="text-sm text-purple-700 dark:text-purple-300">Projects Delivered</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3 animate-bounce" style={{ animationDelay: '1s' }}>👥</div>
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">3+</div>
                <div className="text-sm text-purple-700 dark:text-purple-300">Developers Mentored</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3 animate-bounce" style={{ animationDelay: '1.5s' }}>🎓</div>
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">50+</div>
                <div className="text-sm text-purple-700 dark:text-purple-300">Students Taught</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience