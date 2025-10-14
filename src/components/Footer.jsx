import { Heart, Coffee, Code, Github, Linkedin, Twitter, Mail } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/ankitkatole",
      emoji: ""
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/ankitkatole",
      emoji: ""
    },
    {
      icon: Twitter,
      label: "Twitter",
      url: "https://twitter.com/ankxious",
      emoji: ""
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:ankitkatole@gmail.com",
      emoji: ""
    }
  ]

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <footer className="bg-gradient-to-r from-purple-900 via-pink-900 to-orange-900 text-white relative overflow-hidden">
      {/* Animated doodle background elements */}
      <div className="absolute top-4 left-4 text-2xl animate-bounce" style={{ animationDelay: '0s' }}>✨</div>
      <div className="absolute top-8 right-8 text-3xl animate-bounce" style={{ animationDelay: '0.5s' }}>🌟</div>
      <div className="absolute bottom-8 left-8 text-2xl animate-bounce" style={{ animationDelay: '1s' }}>💫</div>
      <div className="absolute bottom-4 right-4 text-2xl animate-bounce" style={{ animationDelay: '1.5s' }}>⭐</div>
      <div className="absolute top-1/2 left-1/4 text-2xl animate-pulse" style={{ animationDelay: '2s' }}>🎨</div>
      <div className="absolute top-1/3 right-1/4 text-2xl animate-pulse" style={{ animationDelay: '2.5s' }}>🖌️</div>

      <div className="container relative z-10 px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 flex items-center justify-center animate-pulse">
                <span className="text-white font-bold text-lg">AK</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Ankit Katole
              </span>
            </div>
            <p className="text-purple-200 mb-6 text-lg leading-relaxed">
              Full-Stack Developer passionate about creating amazing digital experiences. 
              When I'm not coding, you'll find me doodling, experimenting with new tech, 
              or probably overthinking about the perfect color palette! 🎨
            </p>
            <div className="flex items-center gap-2 text-purple-200">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>and lots of</span>
              <Coffee className="w-4 h-4 text-yellow-400 animate-bounce" />
              <span>chai by Ankit</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-200">Quick Links 🚀</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="group flex items-center gap-2 text-purple-200 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-200">Let's Connect! 🌟</h3>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <social.icon className="w-5 h-5 text-purple-300 group-hover:text-white transition-colors duration-300" />
                  <span className="text-purple-200 group-hover:text-white transition-colors duration-300">
                    {social.label}
                  </span>
                  <span className="text-lg group-hover:animate-bounce ml-auto">{social.emoji}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Fun Stats */}
        <div className="mt-12 pt-8 border-t border-purple-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-purple-300 mb-1">3+</div>
              <div className="text-sm text-purple-200">Years Coding</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-300 mb-1">10+</div>
              <div className="text-sm text-purple-200">Projects Built</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-300 mb-1">∞</div>
              <div className="text-sm text-purple-200">Cups of Chai</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-300 mb-1">100%</div>
              <div className="text-sm text-purple-200">Passion</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-purple-700 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-purple-200">
              © {currentYear} Ankit Katole. All rights reserved. Built with React, Tailwind CSS, and lots of creativity! 🎨
            </p>
            <div className="flex items-center gap-2 text-purple-200">
              <Code className="w-4 h-4 animate-pulse" />
              <span>Always learning, always building</span>
              <span className="text-lg animate-bounce">🚀</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer