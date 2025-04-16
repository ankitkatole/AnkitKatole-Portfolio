import { useState } from "react"
import { Send, Linkedin, Github, Twitter, Mail } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }

    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", message: "" })

      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/ankitkatole/",
      color: "bg-[#0077B5]/10 text-[#0077B5] hover:bg-[#0077B5] hover:text-white",
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/ankitkatole",
      color: "bg-[#333]/10 text-[#333] dark:text-white hover:bg-[#333] hover:text-white",
    },
    {
      name: "Leetcode",
      icon: <img src="/assets/Leetcode.png" alt="Leetcode" className="w-5 h-5" />,
      url: "https://leetcode.com/ankitkatole/",
      color: "text-[#FFA116] hover:text-primary",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      url: "https://x.com/ankxious",
      color: "bg-[#1DA1F2]/10 text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white",
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:katoleankit06@gmail.com",
      color: "bg-secondary/10 text-secondary hover:bg-secondary hover:text-white",
    },
  ]

  return (
    <section id="contact" className="relative py-20">
      <div className="absolute w-64 h-64 rounded-full top-20 right-10 bg-primary/5 blur-3xl"></div>
      <div className="absolute rounded-full bottom-20 left-10 w-72 h-72 bg-secondary/5 blur-3xl"></div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Contact Me</h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-primary to-secondary"></div>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-300">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-gray-100">Let's Talk</h3>
            <p className="mb-8 text-gray-600 dark:text-gray-300">
              I'm currently open to freelance opportunities and interesting projects. Whether you have a question or
              just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="mb-8 space-y-4">
              <div className="p-4 bg-white border border-gray-100 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <h4 className="mb-2 text-lg font-medium text-primary">Email</h4>
                <p className="text-gray-600 dark:text-gray-300">katoleankit06@gmail.com</p>
              </div>
              <div className="p-4 bg-white border border-gray-100 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <h4 className="mb-2 text-lg font-medium text-secondary">Location</h4>
                <p className="text-gray-600 dark:text-gray-300">Nagpur, Maharashtra, India</p>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-medium text-gray-800 dark:text-gray-100">Connect with me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300 ${link.color}`}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 bg-white border border-gray-100 shadow-md dark:bg-gray-800 rounded-xl lg:p-8 dark:border-gray-700">
            <h3 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-gray-100">Send a Message</h3>
            {submitSuccess ? (
              <div className="p-4 mb-6 text-green-800 bg-green-100 rounded-lg dark:bg-green-900/30 dark:text-green-200">
                Thank you for your message! I'll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name ? "border-red-500 dark:border-red-400" : "border-gray-300 dark:border-gray-600"
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? "border-red-500 dark:border-red-400" : "border-gray-300 dark:border-gray-600"
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary`}
                    placeholder="Your email"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message ? "border-red-500 dark:border-red-400" : "border-gray-300 dark:border-gray-600"
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary`}
                    placeholder="Your message"
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center w-full px-6 py-3 font-medium text-white transition-all duration-300 rounded-lg shadow-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-primary/20"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
