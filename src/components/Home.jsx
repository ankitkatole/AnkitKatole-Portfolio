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
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              FullStack Developer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-primary">Ankit Katole</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">FullStack Developer</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
            I craft scalable, user-centric web applications with modern JavaScript frameworks. Passionate about building clean, performant, and accessible digital solutions that drive real-world impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToAbout}
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:translate-y-1"
              >
                Learn more about me
                <ArrowDown className="h-4 w-4" />
              </button>
              <a
                href="#contact"
                className="flex items-center justify-center bg-secondary/10 hover:bg-secondary/20 text-secondary font-medium py-3 px-6 rounded-lg transition-all duration-300"
              >
                Get in touch
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-20 blur-md"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <img src="../../public/image.png" alt="Profile-image" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
