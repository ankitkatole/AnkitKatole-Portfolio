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
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">

          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Know Me Better</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Full-Stack Developer (aka I break and fix things on both ends)
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Hey, I’m Ankit — a full-stack dev who can’t decide whether backend bugs or frontend inconsistencies annoy me more, so I do both. I’m currently interning at MagnifyX, where I improved user engagement and made admin lives 50% easier (you’re welcome).</p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Built real-time auction platforms, decentralized airdrop tools, and AI-powered map apps—basically, I thrive on chaos and challenges. Former dev at KraftMonk and RentOut Homes, AI workshop instructor, and a firm believer that explaining ML to 8th graders deserves a TED Talk.
            </p>
            {/* <p className="text-gray-600 dark:text-gray-300 mb-8">
              Former dev at KraftMonk and RentOut Homes, AI workshop instructor, and someone who thinks explaining ML to 8th graders should be a TED Talk category.
            </p> */}
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Outside the dev world, I read, overthink designs, experiment with tech I might never use in production, and dream of deploying side projects on time. Always learning, always shipping (eventually), and always down for meaningful collabs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="../../AnkitKatole.pdf"
                download="AnkitKatole.pdf"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-sm hover:shadow"
              >
                Let's Talk
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left text-gray-800 dark:text-gray-100">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-primary/5 dark:hover:bg-primary/10 border border-gray-100 dark:border-gray-600 flex items-center gap-3"
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
