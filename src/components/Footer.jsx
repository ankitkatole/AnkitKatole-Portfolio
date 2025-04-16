import { Linkedin, Github, Twitter, Mail } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-4 w-4" />,
      url: "https://www.linkedin.com/in/ankitkatole/",
      color: "text-[#0077B5] hover:text-primary",
    },
    {
      name: "GitHub",
      icon: <Github className="h-4 w-4" />,
      url: "https://github.com/ankitkatole",
      color: "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary",
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-4 w-4" />,
      url: "https://x.com/ankxious",
      color: "text-[#1DA1F2] hover:text-primary",
    },
    {
      name: "Email",
      icon: <Mail className="h-4 w-4" />,
      url: "mailto:katoleankit06@gmail.com",
      color: "text-secondary hover:text-primary",
    },
  ]

  return (
    <footer className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a
              href="#home"
              className="text-xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text"
            >
              Ankit Katole
            </a>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">I Create Websites :)</p>
          </div>

          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.color} transition-colors`}
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

        {/* <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookie Policy
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div> */}
      </div>
    </footer>
  )
}

export default Footer
