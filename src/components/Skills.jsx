import { useEffect, useState, useRef } from "react"

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Languages",
      emoji: "💻",
      color: "from-blue-400 to-purple-500",
      skills: [
        { name: "JavaScript (ES6+)", emoji: "📜" },
        { name: "TypeScript", emoji: "📝" },
        { name: "Python", emoji: "🐍" },
        { name: "Java", emoji: "☕" },
        { name: "PHP", emoji: "🐘" },
        { name: "Solidity", emoji: "⛓️" },
      ]
    },
    {
      title: "Web Technologies",
      emoji: "🌐",
      color: "from-green-400 to-blue-500",
      skills: [
        { name: "HTML5", emoji: "🏗️" },
        { name: "CSS3", emoji: "🎨" },
        { name: "Tailwind CSS", emoji: "🌊" },
        { name: "REST APIs", emoji: "🔌" },
        { name: "JWT", emoji: "🔑" },
        { name: "OAuth", emoji: "🔐" },
      ]
    },
    {
      title: "Frameworks & Libraries",
      emoji: "⚡",
      color: "from-orange-400 to-red-500",
      skills: [
        { name: "React.js", emoji: "⚛️" },
        { name: "Node.js", emoji: "🟢" },
        { name: "Express.js", emoji: "🚀" },
        { name: "Prisma", emoji: "🗄️" },
        { name: "Mongoose", emoji: "🍃" },
        { name: "Socket.IO", emoji: "🔌" },
      ]
    },
    {
      title: "Blockchain/Web3",
      emoji: "🪙",
      color: "from-purple-400 to-pink-500",
      skills: [
        { name: "Solana Web3.js", emoji: "🪙" },
        { name: "Burner Wallet Adapter", emoji: "👛" },
        { name: "IPFS", emoji: "🌐" },
        { name: "Web3.Storage", emoji: "💾" },
      ]
    },
    {
      title: "Databases",
      emoji: "🗃️",
      color: "from-teal-400 to-green-500",
      skills: [
        { name: "MongoDB", emoji: "🍃" },
        { name: "MySQL", emoji: "🗃️" },
        { name: "MongoDB Atlas", emoji: "☁️" },
      ]
    },
    {
      title: "Tools & Platforms",
      emoji: "🛠️",
      color: "from-pink-400 to-purple-500",
      skills: [
        { name: "Git & GitHub", emoji: "🔧" },
        { name: "VS Code", emoji: "💻" },
        { name: "Postman", emoji: "📮" },
        { name: "Linux", emoji: "🐧" },
        { name: "IntelliJ", emoji: "🧠" },
      ]
    }
  ]

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-pink-50/30 via-white to-purple-50/30 dark:from-pink-900/20 dark:via-gray-900 dark:to-purple-900/20"
    >
      <div className="container px-6 mx-auto">
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300">
            <span className="text-lg">⚡</span>
            My superpowers
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-300">
            Here are the tools and technologies I use to bring ideas to life! 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl group-hover:animate-bounce">{category.emoji}</span>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                    {category.title}
                  </h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group/skill flex items-center gap-2 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-900/20 dark:hover:to-pink-900/20 transition-all duration-300 hover:scale-105 hover:shadow-md"
                      style={{ 
                        transitionDelay: `${(categoryIndex * 150) + (skillIndex * 50) + 200}ms`,
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateY(0)" : "translateY(10px)"
                      }}
                    >
                      <span className="text-lg group-hover/skill:animate-bounce" style={{ animationDelay: `${skillIndex * 100}ms` }}>
                        {skill.emoji}
                      </span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover/skill:text-purple-600 dark:group-hover/skill:text-purple-400 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fun skill showcase */}
        <div
          className={`mt-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
          style={{ transitionDelay: "1s" }}
        >
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-8 border border-purple-200 dark:border-purple-700">
            <h3 className="mb-6 text-2xl font-bold text-center text-purple-800 dark:text-purple-200">
              What makes me special? 🌟
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3 animate-bounce">🚀</div>
                <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Fast Learner</h4>
                <p className="text-sm text-purple-600 dark:text-purple-400">
                  I pick up new technologies quickly and love exploring the latest trends
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3 animate-bounce" style={{ animationDelay: '0.5s' }}>🎨</div>
                <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Creative Problem Solver</h4>
                <p className="text-sm text-purple-600 dark:text-purple-400">
                  I approach challenges with creativity and find innovative solutions
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl mb-3 animate-bounce" style={{ animationDelay: '1s' }}>🤝</div>
                <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Team Player</h4>
                <p className="text-sm text-purple-600 dark:text-purple-400">
                  I love collaborating and helping others grow in their coding journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
