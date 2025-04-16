import { Briefcase, Calendar } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Full-Stack Developer Intern",
      company: "MagnifyX",
      duration: "Dec 2024 – Present",
      description:
        "Redesigned and optimized websites to enhance user engagement and streamline admin workflows.",
      responsibilities: [
        "Improved website UX/UI, increasing user engagement by ~30%",
        "Refactored admin panel workflows, reducing task time by ~50%",
        "Collaborated across design and backend teams to deliver scalable solutions",
        "Implemented performance-focused practices in full-stack development",
      ],
      color: "border-primary",
      iconColor: "bg-primary",
    },
    {
      id: 2,
      role: "AI Workshop Instructor",
      company: "Center for Advanced Technologies (CAT-India)",
      duration: "Feb 2025",
      description:
        "Conducted an AI workshop for 8th-grade students under NIELIT, simplifying complex topics into engaging, hands-on lessons.",
      responsibilities: [
        "Taught basics of AI, ML, and Python programming to school students",
        "Designed interactive lessons to make tech concepts beginner-friendly",
        "Improved communication and teaching skills through real-time mentoring",
        "Fostered curiosity and learning in young minds via practical examples",
      ],
      color: "border-muted",
      iconColor: "bg-muted",
    },
    {
      id: 3,
      role: "Full-Stack Developer (Freelance)",
      company: "KraftMonk",
      duration: "Aug 2024 – Nov 2024",
      description:
        "Delivered full-stack applications and mentored junior developers to improve team code quality.",
      responsibilities: [
        "Developed 2 full-stack apps, reducing load time by ~35%",
        "Mentored 3+ developers, improving code efficiency by ~20%",
        "Maintained scalable backend systems with Node.js and MongoDB",
        "Handled end-to-end development, from database to UI",
      ],
      color: "border-secondary",
      iconColor: "bg-secondary",
    },
    {
      id: 4,
      role: "Backend Developer Intern",
      company: "RentOut Homes",
      duration: "Sep 2024 – Oct 2024",
      description:
        "Contributed to backend API development and enhanced system performance and security.",
      responsibilities: [
        "Engineered RESTful APIs with Express.js and MongoDB",
        "Optimized system scalability and backend architecture",
        "Improved backend performance and integrated security layers",
        "Worked closely with frontend teams for seamless API integration",
      ],
      color: "border-accent",
      iconColor: "bg-accent",
    },
    
  ];


  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Professional Journey</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            My professional journey and the companies I've had the pleasure to work with.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-8 ml-4">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`mb-12 ${index === experiences.length - 1 ? "mb-0" : ""}`}>
                <div className={`absolute w-4 h-4 ${exp.iconColor} rounded-full -left-[9px]`}></div>
                <div
                  className={`bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg border-l-4 ${exp.color}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-2 sm:mt-0 bg-gray-100 dark:bg-gray-600/30 px-3 py-1 rounded-full">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.duration}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
