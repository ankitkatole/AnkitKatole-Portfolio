
import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "./ThemeProvider"

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md border-transparent"
          : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-gray-200 dark:border-gray-800"
      }`}
    >
      <nav className="container px-6 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">Portfolio</span>
          </div>

          <div className="items-center hidden space-x-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary ${
                  activeSection === item.id
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {item.label}
              </button>
            ))}

            {mounted && (
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="p-2 transition-all duration-300 bg-gray-100 rounded-full dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 hover:rotate-12"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-primary" />
                )}
              </button>
            )}
          </div>

          <div className="flex items-center md:hidden">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="p-2 mr-2 transition-all duration-300 bg-gray-100 rounded-full dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 hover:rotate-12"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-primary" />
                )}
              </button>
            )}
            <button
              onClick={toggleMenu}
              className="p-2 transition-all duration-300 bg-gray-100 rounded-md dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6 animate-fade-in" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="py-4 mt-4 border-t border-gray-200 md:hidden dark:border-gray-800 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium py-2 transition-all duration-300 hover:text-primary ${
                    activeSection === item.id
                      ? "text-primary bg-primary/5 rounded-lg px-3"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
