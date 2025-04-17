
import { useEffect, useState, useRef } from "react"
import { Briefcase, Calendar } from "lucide-react"

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const experiences = [
    {
      id: 1,
      role: "Full-Stack Developer Intern",
      company: "MagnifyX",
      duration: "Dec 2024 – Present",
      description: "Redesigned and optimized websites to enhance user engagement and streamline admin workflows.",
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
      color: "border-secondary",
      iconColor: "bg-secondary",
    },
    {
      id: 3,
      role: "Full-Stack Developer (Freelance)",
      company: "KraftMonk",
      duration: "Aug 2024 – Nov 2024",
      description: "Delivered full-stack applications and mentored junior developers to improve team code quality.",
      responsibilities: [
        "Developed 2 full-stack apps, reducing load time by ~35%",
        "Mentored 3+ developers, improving code efficiency by ~20%",
        "Maintained scalable backend systems with Node.js and MongoDB",
        "Handled end-to-end development, from database to UI",
      ],
      color: "border-accent",
      iconColor: "bg-accent",
    },
    {
      id: 4,
      role: "Backend Developer Intern",
      company: "RentOut Homes",
      duration: "Sep 2024 – Oct 2024",
      description: "Contributed to backend API development and enhanced system performance and security.",
      responsibilities: [
        "Engineered RESTful APIs with Express.js and MongoDB",
        "Optimized system scalability and backend architecture",
        "Improved backend performance and integrated security layers",
        "Worked closely with frontend teams for seamless API integration",
      ],
      color: "border-primary/70",
      iconColor: "bg-primary/70",
    },
  ]

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900"
    >
      <div className="container px-6 mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary"></span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">My Professional Journey</h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-primary to-secondary"></div>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-300">
            My professional journey and the companies I've had the pleasure to work with.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 ml-4 border-l-2 border-gray-200 dark:border-gray-700">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`mb-12 ${index === experiences.length - 1 ? "mb-0" : ""} transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div
                  className={`absolute w-4 h-4 ${exp.iconColor} rounded-full -left-[9px] transition-all duration-500 ${isVisible ? "scale-100" : "scale-0"}`}
                  style={{ transitionDelay: `${index * 200 + 300}ms` }}
                ></div>
                <div
                  className={`bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition-all duration-500 hover:shadow-lg border-l-4 ${exp.color} hover:translate-x-2`}
                >
                  <div className="flex flex-col justify-between mb-4 sm:flex-row sm:items-center">
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <div className="flex items-center px-3 py-1 mt-2 text-sm text-gray-500 bg-gray-100 rounded-full dark:text-gray-400 sm:mt-0 dark:bg-gray-600/30">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.duration}
                    </div>
                  </div>
                  <div className="flex items-center mb-4 text-gray-600 dark:text-gray-300">
                    <Briefcase className="w-4 h-4 mr-2" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">{exp.description}</p>
                  <div>
                    <h4 className="mb-2 font-semibold">Key Responsibilities:</h4>
                    <ul className="pl-5 space-y-1 text-gray-600 list-disc dark:text-gray-300">
                      {exp.responsibilities.map((resp, i) => (
                        <li
                          key={i}
                          className="transition-all duration-500"
                          style={{
                            transitionDelay: `${(index * 200) + (i * 100) + 400}ms`,
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? "translateX(0)" : "translateX(-10px)",
                          }}
                        >
                          {resp}
                        </li>
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
