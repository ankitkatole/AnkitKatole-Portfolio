const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "G.H. Raisoni College of Engineering and Management, Nagpur",
      duration: "Nov 2022 – June 2026",
      details: [
        "Current CGPA: 9.54",
        "Coursework includes Data Structures, Algorithms, Full-Stack Development, and Web3.",
      ],
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
    <section id="education" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            From solving equations in school to building full-stack apps in college—here's where I picked up the skills that now fuel my code.
          </p>
        </div>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-2 text-primary">{edu.degree}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-1 font-medium">{edu.institution}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{edu.duration}</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                {edu.details.map((point, i) => (
                  <li key={i}>{point}</li>
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
