import { useState, useEffect, useRef } from "react"
import { Github, ExternalLink, X, Star, Zap, Rocket } from "lucide-react"

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
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

  const projects = [
    {
      id: 1,
      title: "Key-N-Share (Devnet)",
      description: "A decentralized data marketplace on Solana enabling secure and anti-piracy dataset exchange with cryptographic proof of integrity! 🔐",
      image: "assets/image.png",
      techStack: ["Next.js", "Solana", "IPFS", "Node.js", "Mongoose", "Web3.js", "Pinata"],
      githubUrl: "https://github.com/ankitkatole/Key-N-Share",
      demoUrl: "https://key-n-share.vercel.app/",
      longDescription: "Engineered a decentralized data marketplace on Solana and Next.js, enabling secure and anti-piracy dataset exchange. Implemented a unique data processing pipeline with user-specific re-encryption and on-chain hashing to ensure cryptographic proof of data integrity and traceability. Perfect for secure data sharing in the Web3 ecosystem! 🚀",
      color: "from-purple-500 to-pink-500",
      emoji: "🔐",
      features: ["Decentralized marketplace", "Cryptographic integrity", "Anti-piracy protection", "Solana blockchain"]
    },
    {
      id: 2,
      title: "Memoria Nexus",
      description: "A platform for diary logging, story sharing, and memory preservation across generations with AI integration! 📖",
      image: "assets/image.png",
      techStack: ["Node.js", "MongoDB", "React", "JWT", "Google Gemini API", "ZEGOCLOUD"],
      githubUrl: "https://github.com/ankitkatole/MemoriaNexus",
      demoUrl: "https://memoria-nexus.vercel.app/",
      longDescription: "Platform for diary logging, story sharing, and memory preservation across generations. Integrated features like Empathy Exchange, AI Chatbot, Time-Travel Archive, and Forum Chat. Developed REST APIs, secure authentication, AI-driven interactions, and real-time audio/video communication modules using Google Gemini API and ZEGOCLOUD! 🌉",
      color: "from-blue-500 to-purple-500",
      emoji: "📖",
      features: ["AI Chatbot", "Real-time communication", "Memory preservation", "Cross-generational sharing"]
    },
    {
      id: 3,
      title: "DevAuction",
      description: "A real-time auction platform with live video bidding and chat functionality - bringing auctions to the digital age! 🎯",
      image: "assets/DevAuction.png",
      techStack: ["Node.js", "MongoDB", "Socket.IO", "WebRTC", "OAuth"],
      githubUrl: "https://github.com/ankitkatole/DevAuction",
      demoUrl: "https://dev-auction.vercel.app/",
      longDescription: "Real-time auction platform with live video bidding (WebRTC) and chat (Socket.IO). Built Google OAuth login, secure backend, and bidding workflows. Features include real-time bidding, video conferencing, live chat, and secure authentication for seamless auction experiences! 🏛️",
      color: "from-orange-500 to-red-500",
      emoji: "🎯",
      features: ["Live video bidding", "Real-time chat", "Google OAuth", "Secure backend"]
    }
  ]

  const openProjectModal = (project) => {
    setSelectedProject(project)
    document.body.style.overflow = "hidden"
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = "auto"
  }

  return (
    <section id="projects" ref={sectionRef} className="relative py-20">
      {/* Animated doodle background elements */}
      <div className="absolute top-20 right-20 text-6xl animate-bounce" style={{ animationDelay: '0s' }}>🚀</div>
      <div className="absolute top-40 left-20 text-4xl animate-bounce" style={{ animationDelay: '0.5s' }}>💻</div>
      <div className="absolute bottom-40 right-40 text-5xl animate-bounce" style={{ animationDelay: '1s' }}>⚡</div>
      <div className="absolute bottom-20 left-40 text-3xl animate-bounce" style={{ animationDelay: '1.5s' }}>🎨</div>

      {/* Gradient orbs */}
      <div className="absolute w-96 h-96 rounded-full top-20 right-10 bg-gradient-to-br from-purple-400/10 to-pink-400/10 blur-3xl animate-pulse"></div>
      <div className="absolute rounded-full bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container relative z-10 px-6 mx-auto">
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 text-purple-700 dark:text-purple-300">
            <span className="text-lg">🚀</span>
            My creative playground
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-300">
            Here are some of my recent projects that I'm really proud of! Each one was built with love, chai, and a lot of debugging! ☕
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:translate-y-[-10px] border border-gray-200 dark:border-gray-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80 transition-all duration-500 group-hover:opacity-90`}></div>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 mix-blend-overlay group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 text-4xl animate-bounce" style={{ animationDelay: `${index * 200}ms` }}>
                  {project.emoji}
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-white">Featured</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-100">{project.title}</h3>
                <p className="h-16 mb-4 overflow-hidden text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium transition-all duration-300 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 text-purple-700 dark:text-purple-300 hover:from-purple-200 hover:to-pink-200 dark:hover:from-purple-800 dark:hover:to-pink-800"
                      style={{ transitionDelay: `${index * 100 + techIndex * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 dark:text-gray-300 transition-all duration-300 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-110 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-full"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 dark:text-gray-300 transition-all duration-300 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-110 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-full"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <button
                    onClick={() => openProjectModal(project)}
                    className="group flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 hover:scale-105 hover:shadow-lg"
                  >
                    <Zap className="w-4 h-4 transition-transform group-hover:rotate-12" />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-fade-in">
            <div className="relative h-64 sm:h-80">
              <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.color} opacity-80`}></div>
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="object-cover w-full h-full mix-blend-overlay"
              />
              <div className="absolute top-4 left-4 text-6xl animate-bounce">
                {selectedProject.emoji}
              </div>
              <button
                onClick={closeProjectModal}
                className="absolute p-2 text-white transition-all duration-300 rounded-full top-4 right-4 bg-black/50 hover:bg-black/70 hover:rotate-90"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              <h3 className="mb-4 text-3xl font-bold text-gray-800 dark:text-gray-100">{selectedProject.title}</h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{selectedProject.longDescription}</p>
              
              <div className="mb-6">
                <h4 className="mb-3 text-lg font-semibold text-gray-800 dark:text-gray-100">Key Features ✨</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <span className="text-purple-500">•</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="mb-3 text-lg font-semibold text-gray-800 dark:text-gray-100">Technologies Used 🛠️</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium transition-all duration-300 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 text-purple-700 dark:text-purple-300 hover:from-purple-200 hover:to-pink-200 dark:hover:from-purple-800 dark:hover:to-pink-800"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-6 py-3 font-medium text-white transition-all duration-300 bg-gray-800 rounded-full hover:bg-gray-700 hover:scale-105 hover:shadow-lg"
                >
                  <Github className="w-5 h-5 transition-transform group-hover:rotate-12" />
                  View Code
                </a>
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-6 py-3 font-medium text-white transition-all duration-300 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:scale-105 hover:shadow-lg"
                >
                  <Rocket className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects