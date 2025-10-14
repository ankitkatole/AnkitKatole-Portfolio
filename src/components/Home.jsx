import { useEffect, useState } from "react"
import { ArrowDown, Sparkles, Rocket, Code, Heart } from "lucide-react"

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentEmoji, setCurrentEmoji] = useState("👨‍💻")

  useEffect(() => {
    setIsVisible(true)
    
    const emojis = ["👨‍💻", "🚀", "⚡", "🎨", "💡", "🔥"]
    const interval = setInterval(() => {
      setCurrentEmoji(emojis[Math.floor(Math.random() * emojis.length)])
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen pt-20 pb-16 overflow-hidden">
      {/* Animated doodle background elements */}
      <div className="absolute top-20 right-20 text-6xl animate-bounce" style={{ animationDelay: '0s' }}>✨</div>
      <div className="absolute top-40 left-20 text-4xl animate-bounce" style={{ animationDelay: '0.5s' }}>🌟</div>
      <div className="absolute bottom-40 right-40 text-5xl animate-bounce" style={{ animationDelay: '1s' }}>💫</div>
      <div className="absolute bottom-20 left-40 text-3xl animate-bounce" style={{ animationDelay: '1.5s' }}>⭐</div>
      <div className="absolute top-1/2 left-10 text-4xl animate-pulse" style={{ animationDelay: '2s' }}>🎨</div>
      <div className="absolute top-1/3 right-10 text-3xl animate-pulse" style={{ animationDelay: '2.5s' }}>🖌️</div>

      {/* Gradient orbs */}
      <div className="absolute w-96 h-96 rounded-full top-20 right-10 bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-3xl animate-pulse"></div>
      <div className="absolute rounded-full bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute w-64 h-64 rounded-full top-1/3 left-1/4 bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="flex flex-col-reverse items-center justify-between gap-12 lg:flex-row">
          <div
            className={`text-center lg:w-1/2 lg:text-left transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 text-purple-700 dark:text-purple-300">
              <Sparkles className="w-4 h-4" />
              FullStack Developer & Creative Problem Solver
            </div>
            
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Hey there! I'm{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                Ankit Katole
              </span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {currentEmoji} FullStack Developer
              </span>
            </h1>
            
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-700 md:text-xl dark:text-gray-300 lg:mx-0">
              I'm a passionate developer who loves creating{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">scalable web applications</span>{" "}
              and exploring the latest tech trends. When I'm not coding, you'll find me doodling, 
              experimenting with new frameworks, or probably overthinking about the perfect color palette! 🎨
            </p>
            
            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <button
                onClick={scrollToAbout}
                className="group flex items-center justify-center gap-2 px-8 py-4 font-medium text-white transition-all duration-300 transform rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:translate-y-[-2px] hover:shadow-xl hover:shadow-purple-500/25"
              >
                <Rocket className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                Let's explore together!
                <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
              </button>
              
              <a
                href="#contact"
                className="group flex items-center justify-center gap-2 px-8 py-4 font-medium transition-all duration-300 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:scale-105 hover:shadow-lg"
              >
                <Heart className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                Get in touch
              </a>
            </div>

            {/* Fun stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-12 lg:justify-start">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Coding</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">∞</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Cups of Chai</div>
              </div>
            </div>
          </div>

          <div
            className={`flex justify-center lg:w-1/2 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ animationDelay: '0.5s' }}
          >
            <div className="relative">
              {/* Profile image with doodle decorations */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 opacity-20 blur-md animate-pulse"></div>
                <div className="relative w-full h-full overflow-hidden border-4 border-white dark:border-gray-800 rounded-full shadow-2xl">
                  <img 
                    src="assets/ak-passport.jpg" 
                    alt="Ankit Katole" 
                    className="object-cover w-full h-full" 
                  />
                </div>
                
                {/* Floating doodle elements around profile */}
                <div className="absolute -top-4 -right-4 text-4xl animate-bounce" style={{ animationDelay: '0s' }}>🚀</div>
                <div className="absolute -bottom-4 -left-4 text-3xl animate-bounce" style={{ animationDelay: '0.5s' }}>💻</div>
                <div className="absolute top-1/2 -left-8 text-2xl animate-bounce" style={{ animationDelay: '1s' }}>⚡</div>
                <div className="absolute top-1/2 -right-8 text-2xl animate-bounce" style={{ animationDelay: '1.5s' }}>🎨</div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-3xl animate-bounce" style={{ animationDelay: '2s' }}>✨</div>
              </div>
              
              {/* Code snippet doodle */}
              <div className="absolute -bottom-8 -right-8 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border-2 border-purple-200 dark:border-purple-700 animate-pulse">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs font-mono text-gray-600 dark:text-gray-300">
                  <div className="text-purple-600 dark:text-purple-400">const</div>
                  <div className="text-blue-600 dark:text-blue-400"> developer</div>
                  <div className="text-gray-600 dark:text-gray-300"> = </div>
                  <div className="text-green-600 dark:text-green-400">"awesome"</div>
                  <div className="text-gray-600 dark:text-gray-300">;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home