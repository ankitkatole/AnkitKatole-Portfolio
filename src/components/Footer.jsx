
import { useEffect, useState } from "react"
import { Linkedin, Github, Twitter, Mail } from "lucide-react"

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-4 h-4" />,
      url: "https://www.linkedin.com/in/ankitkatole/",
      color: "text-[#0077B5] hover:text-primary",
    },
    {
      name: "GitHub",
      icon: <Github className="w-4 h-4" />,
      url: "https://github.com/ankitkatole",
      color: "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary",
    },
    {
      name: "Leetcode",
      icon: <img src="/assets/Leetcode.png" alt="Leetcode" className="w-5 h-5" />,
      url: "https://leetcode.com/ankitkatole/",
      color: "text-[#FFA116] hover:text-primary",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-4 h-4" />,
      url: "https://x.com/ankxious",
      color: "text-[#1DA1F2] hover:text-primary",
    },
    {
      name: "Email",
      icon: <Mail className="w-4 h-4" />,
      url: "mailto:katoleankit06@gmail.com",
      color: "text-secondary hover:text-primary",
    },
  ]

  return (
    <footer className="border-t border-gray-200 bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 dark:border-gray-800">
      <div
        className={`container px-6 py-8 mx-auto transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <a
              href="#home"
              className="inline-block text-xl font-bold text-transparent transition-transform duration-300 bg-gradient-to-r from-primary to-secondary bg-clip-text hover:scale-105"
            >
              Ankit Katole
            </a>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">I Create Websites :)</p>
          </div>

          <div className="flex mb-4 space-x-4 md:mb-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.color} transition-all duration-300 hover:scale-125`}
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {currentYear} Ankit Katole. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
