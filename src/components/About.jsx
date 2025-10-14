import { useEffect, useState, useRef } from "react"
import { Download, Coffee, Music, BookOpen, Palette, Zap } from "lucide-react"

const About = () => {
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

  const interests = [
    { icon: Coffee, label: "Chai" },
    { icon: Music, label: "Music" },
    { icon: BookOpen, label: "Reading" },
    { icon: Palette, label: "Design" },
    { icon: Zap, label: "Tech" },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white via-purple-50/30 to-pink-50/30 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20"
    >
      <div className="container px-6 mx-auto">
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 text-purple-700 dark:text-purple-300">
            <span className="text-lg">👋</span>
            Get to know me better
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </div>

        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="relative">
              <h3 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                Hey! I'm Ankit, a Full-Stack Developer who's passionate about creating amazing digital experiences! 🚀
              </h3>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p className="text-lg leading-relaxed">
                  I'm currently looking for new internship opportunities to continue growing my technical expertise! I recently completed my Full-stack Developer Internship at <span className="font-semibold text-purple-600 dark:text-purple-400">MagnifyX</span> (London, Remote), 
                  where I built 3+ responsive admin dashboards, reducing task execution time by 40% through API-first development.
                </p>
                
                <p className="text-lg leading-relaxed">
                  I'm pursuing my Bachelor of Technology in Computer Science and Engineering from G H Raisoni College of Engineering and Management, Nagpur, 
                  with a CGPA of 9.54. I've also worked as a Back-End Developer Intern at RentOut Homes, improving API response times by 35%.
                </p>
                
                <p className="text-lg leading-relaxed">
                  I've built everything from real-time auction platforms to decentralized data marketplaces and AI-powered applications. 
                  I'm passionate about solving complex problems and creating scalable software solutions. When I'm not coding, 
                  you'll find me solving DSA problems on LeetCode (100+ solved) or conducting tech workshops! 🎤
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="assets/AnkitKatole.pdf"
                  download="AnkitKatole.pdf"
                  className="group inline-flex items-center gap-2 px-6 py-3 font-medium text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105"
                >
                  <Download className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                  Download Resume
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 font-medium transition-all duration-300 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:scale-105"
                >
                  <span className="text-lg">💬</span>
                  Let's Chat!
                </a>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "0.5s" }}
          >
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-center text-gray-800 lg:text-left dark:text-gray-100">
                What I'm passionate about 🎯
              </h3>
              
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="group flex flex-col items-center gap-3 p-6 transition-all duration-300 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-purple-100 dark:border-purple-800 rounded-2xl hover:shadow-lg hover:scale-105 hover:bg-purple-50/80 dark:hover:bg-purple-900/20"
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateY(0)" : "translateY(20px)"
                    }}
                  >
                    <interest.icon className="w-8 h-8 text-purple-600 dark:text-purple-400 group-hover:animate-bounce" style={{ animationDelay: `${index * 200}ms` }} />
                    <span className="font-medium text-gray-700 dark:text-gray-300">{interest.label}</span>
                  </div>
                ))}
              </div>

              {/* Fun facts */}
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-6 border border-purple-200 dark:border-purple-700">
                <h4 className="mb-4 text-lg font-semibold text-purple-800 dark:text-purple-200">
                  Fun Facts About Me 🎉
                </h4>
                <ul className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
                  <li className="flex items-center gap-2">
                    <Coffee className="w-4 h-4" />
                    I drink more chai than water (probably not healthy)
                  </li>
                  <li className="flex items-center gap-2">
                    <Music className="w-4 h-4" />
                    Music is my stress buster and inspiration source
                  </li>
                  <li className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    I read tech blogs like novels
                  </li>
                  <li className="flex items-center gap-2">
                    <Palette className="w-4 h-4" />
                    I'm obsessed with perfect color palettes
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    I learn new tech just for fun (even if I never use it)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About