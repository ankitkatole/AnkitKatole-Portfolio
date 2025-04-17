
import { useEffect, useState, useRef } from "react"

const Education = () => {
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

  const educationData = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "G.H. Raisoni College of Engineering and Management, Nagpur",
      duration: "Nov 2022 – June 2026",
      details: ["Current CGPA: 9.54"],
    },
    {
      degree: "High School",
      institution: "Jawahar Navodaya Vidyalaya (JNV)",
      duration: "July 2014 – June 2021",
      details: [
        "Achieved a distinguished 90.6% in HSC under the CBSE curriculum, with a solid grasp of PCM.",
        "Honored with the position of School Prefect, demonstrating leadership and active participation in various school activities.",
      ],
    },
  ]

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/50"
    >
      <div className="container px-6 mx-auto">
        <div
          className={`mb-16 text-center transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-secondary/10 text-secondary"></span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Education</h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-secondary to-primary"></div>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-300">
            From solving equations in school to building full-stack apps in college—here's where I picked up the skills
            that now fuel my code.
          </p>
        </div>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`p-6 bg-white border border-gray-100 shadow-md dark:bg-gray-800 rounded-xl dark:border-gray-700 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <h3 className="mb-2 text-xl font-semibold text-primary">{edu.degree}</h3>
              <p className="mb-1 font-medium text-gray-700 dark:text-gray-300">{edu.institution}</p>
              <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">{edu.duration}</p>
              <ul className="space-y-1 text-gray-600 list-disc list-inside dark:text-gray-300">
                {edu.details.map((point, i) => (
                  <li
                    key={i}
                    className="transition-all duration-500"
                    style={{ transitionDelay: `${index * 200 + i * 100}ms` }}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
