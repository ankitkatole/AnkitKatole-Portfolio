import { Download } from "lucide-react"

const About = () => {
  const skills = [
    { name: "JavaScript", icon: "📜" },
    { name: "TypeScript", icon: "📝" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚀" },
    { name: "MongoDB", icon: "🍃" },
    { name: "MySQL", icon: "🗃️" },
    { name: "Tailwind CSS", icon: "🌊" },
    { name: "Git & GitHub", icon: "🔧" },
    { name: "REST APIs", icon: "🔌" },
    { name: "Solana Web3.js", icon: "🪙" },
  ];


  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/50">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">

          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Know Me Better</h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-primary to-secondary"></div>
        </div>

        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Full-Stack Developer (aka I break and fix things on both ends)
            </h3>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Hey, I’m Ankit — a full-stack dev who can’t decide whether backend bugs or frontend inconsistencies annoy me more, so I do both. I’m currently interning at MagnifyX, where I improved user engagement and made admin lives 50% easier (you’re welcome).</p>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Built real-time auction platforms, decentralized airdrop tools, and AI-powered map apps—basically, I thrive on chaos and challenges. Former dev at KraftMonk and RentOut Homes, AI workshop instructor, and a firm believer that explaining ML to 8th graders deserves a TED Talk.
            </p>
            {/* <p className="mb-8 text-gray-600 dark:text-gray-300">
              Former dev at KraftMonk and RentOut Homes, AI workshop instructor, and someone who thinks explaining ML to 8th graders should be a TED Talk category.
            </p> */}
            <p className="mb-8 text-gray-600 dark:text-gray-300">
              Outside the dev world, I read, overthink designs, experiment with tech I might never use in production, and dream of deploying side projects on time. Always learning, always shipping (eventually), and always down for meaningful collabs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="assets/AnkitKatole.pdf"
                download="AnkitKatole.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 font-medium text-white transition-all duration-300 rounded-lg shadow-lg bg-primary hover:bg-primary/90 shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 font-medium text-gray-800 transition-all duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:border-primary dark:hover:border-primary dark:text-gray-200 hover:text-primary dark:hover:text-primary hover:shadow"
              >
                Let's Talk
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-semibold text-center text-gray-800 lg:text-left dark:text-gray-100">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 transition-all duration-300 bg-white border border-gray-100 rounded-lg shadow-sm dark:bg-gray-700 hover:shadow-md hover:scale-105 hover:bg-primary/5 dark:hover:bg-primary/10 dark:border-gray-600"
                >
                  <span className="text-2xl" aria-hidden="true">
                    {skill.icon}
                  </span>
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
