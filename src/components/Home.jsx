import { ArrowDown } from "lucide-react"

const Home = () => {
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
      <div className="absolute w-64 h-64 rounded-full top-20 right-10 bg-primary/10 blur-3xl"></div>
      <div className="absolute rounded-full bottom-20 left-10 w-72 h-72 bg-secondary/10 blur-3xl"></div>
      <div className="absolute w-48 h-48 rounded-full top-1/3 left-1/4 bg-accent/10 blur-3xl"></div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="flex flex-col-reverse items-center justify-between gap-12 lg:flex-row">
          <div className="text-center lg:w-1/2 lg:text-left">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
              FullStack Developer
            </span>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Hi, I'm <span className="text-primary">Ankit Katole</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">FullStack Developer</span>
            </h1>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600 md:text-xl dark:text-gray-400 lg:mx-0">
            I craft scalable, user-centric web applications with modern JavaScript frameworks. Passionate about building clean, performant, and accessible digital solutions that drive real-world impact.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <button
                onClick={scrollToAbout}
                className="flex items-center justify-center gap-2 px-6 py-3 font-medium text-white transition-all duration-300 transform rounded-lg bg-primary hover:bg-primary/90 hover:translate-y-1"
              >
                Learn more about me
                <ArrowDown className="w-4 h-4" />
              </button>
              <a
                href="#contact"
                className="flex items-center justify-center px-6 py-3 font-medium transition-all duration-300 rounded-lg bg-secondary/10 hover:bg-secondary/20 text-secondary"
              >
                Get in touch
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:w-1/2">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-20 blur-md"></div>
              <div className="relative w-full h-full overflow-hidden border-4 border-white rounded-full shadow-xl dark:border-gray-800">
                <img src="public/image.png" alt="Profile-image" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
