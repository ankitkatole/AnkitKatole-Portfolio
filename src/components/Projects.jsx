import { useState, useEffect, useRef } from "react"
import { Github, ExternalLink, X } from "lucide-react"

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
      { threshold: 0.1 },
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
      title: "DevAuction",
      description: "A real-time auction platform with video conferencing and chat.",
      image: "assets/DevAuction.png",
      techStack: ["Node.js", "Express", "MongoDB", "WebRTC", "Socket.io", "Google OAuth"],
      githubUrl: "https://github.com/ankitkatole/DevAuction",
      demoUrl: "https://dev-auction.vercel.app/",
      longDescription:
        "DevAuction is a real-time auction platform featuring video conferencing via Zego Express Engine, real-time chat using Socket.IO, and secure user authentication through Google Sign-In. Designed for seamless and interactive bidding experiences.",
      color: "from-primary to-accent",
    },
    {
      id: 2,
      title: "SolDrop",
      description: "A decentralized Solana token airdrop tool.",
      image: "assets/soldrop.jpeg",
      techStack: ["Solana Web3.js", "React", "Burner Wallet Adapter"],
      githubUrl: "https://github.com/ankitkatole/Web3",
      demoUrl: "https://soldrop-peach.vercel.app/",
      longDescription:
        "SolDrop is a decentralized airdrop solution for distributing Solana tokens. Built on Devnet, it integrates Unsafe Burner Wallet for quick wallet connections and uses @solana/web3.js for secure blockchain transactions.",
      color: "from-secondary to-primary",
    },
    {
      id: 3,
      title: "Memoria Nexus",
      description: "A platform for diary logging, memory sharing, and collaborative storytelling.",
      image: "assets/image.png",
      techStack: ["Node.js", "Express", "MongoDB", "React", "JWT", "Nodemailer", "AI Bot"],
      githubUrl: "https://github.com/ankitkatole/MemoriaNexus",
      demoUrl: "https://memoria-nexus.vercel.app/",
      longDescription:
        "Memoria Nexus combines diary logging, memory vaults, global story collaboration, and an AI chatbot. Key features include Empathy Exchange, geo-tagged Time-Travel Photo Archive, and Horizon—the built-in AI companion. Built to preserve stories and bridge generational gaps.",
      color: "from-accent to-secondary",
    },
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
      <div className="absolute w-64 h-64 rounded-full top-20 right-10 bg-primary/5 blur-3xl animate-pulse-slow"></div>
      <div className="absolute rounded-full bottom-20 left-10 w-72 h-72 bg-secondary/5 blur-3xl animate-pulse-slow animate-delay-300"></div>

      <div className="container relative z-10 px-6 mx-auto">
        <div
          className={`mb-16 text-center transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary"></span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Featured Projects</h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-primary to-secondary"></div>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-300">
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new
            technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:translate-y-[-5px] border border-gray-100 dark:border-gray-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative h-48 overflow-hidden group">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80 transition-all duration-500 group-hover:opacity-90`}
                ></div>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 mix-blend-overlay group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="h-12 mb-4 overflow-hidden text-gray-600 dark:text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs transition-all duration-300 rounded-full bg-primary/10 text-primary hover:bg-primary/20"
                      style={{ transitionDelay: `${index * 100 + techIndex * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 transition-all duration-300 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:scale-110"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 transition-all duration-300 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:scale-110"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <button
                    onClick={() => openProjectModal(project)}
                    className="text-sm font-medium transition-all duration-300 text-primary hover:text-primary/80 hover:underline"
                  >
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
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-fade-in">
            <div className="relative h-64 sm:h-80">
              <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.color} opacity-80`}></div>
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="object-cover w-full h-full mix-blend-overlay"
              />
              <button
                onClick={closeProjectModal}
                className="absolute p-2 text-white transition-all duration-300 rounded-full top-4 right-4 bg-black/50 hover:bg-black/70 hover:rotate-90"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="mb-4 text-2xl font-bold">{selectedProject.title}</h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">{selectedProject.longDescription}</p>
              <div className="mb-6">
                <h4 className="mb-2 text-lg font-semibold">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm transition-all duration-300 rounded-full bg-primary/10 text-primary hover:bg-primary/20"
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
                  className="flex items-center gap-2 px-4 py-2 font-medium text-white transition-all duration-300 bg-gray-800 rounded-lg dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 font-medium text-white transition-all duration-300 rounded-lg bg-primary hover:bg-primary/90 hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5" />
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
