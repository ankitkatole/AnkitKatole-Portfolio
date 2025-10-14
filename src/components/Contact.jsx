import { useState, useRef } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle, Heart, Coffee } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const sectionRef = useRef(null)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "katoleankit06@gmail.com",
      emoji: "📧",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9307512981",
      emoji: "📱",
      color: "from-green-400 to-blue-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nagpur, Maharashtra, India",
      emoji: "📍",
      color: "from-pink-400 to-red-500"
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/ankitkatole",
      emoji: "",
      color: "from-gray-400 to-gray-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/ankitkatole",
      emoji: "",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Twitter,
      label: "Twitter",
      url: "https://twitter.com/ankitkatole",
      emoji: "",
      color: "from-sky-400 to-blue-500"
    }
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-pink-50/30 via-white to-purple-50/30 dark:from-pink-900/20 dark:via-gray-900 dark:to-purple-900/20"
    >
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium rounded-full bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900 dark:to-purple-900 text-pink-700 dark:text-pink-300">
            <span className="text-lg">📧</span>
            Let's connect!
          </span>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-300">
            Have a project in mind or just want to chat about tech? I'd love to hear from you! 
            Let's create something amazing together! 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-gray-800 dark:text-gray-100">
                Let's start a conversation! 💬
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on projects, 
                or just have a friendly chat about technology and life! Whether you have a 
                project idea, need help with development, or want to share your latest tech 
                discovery, I'm all ears! 👂
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 p-4 transition-all duration-300 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300`}>
                    {info.emoji}
                  </div>
                  <div>
                    <div className="font-medium text-gray-800 dark:text-gray-100">{info.label}</div>
                    <div className="text-gray-600 dark:text-gray-300">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-100">
                Follow me on social media! 🌟
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-2 px-4 py-3 transition-all duration-300 rounded-full bg-gradient-to-r ${social.color} text-white hover:scale-110 hover:shadow-lg`}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{social.label}</span>
                    <span className="text-lg group-hover:animate-bounce">{social.emoji}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
            <h3 className="mb-6 text-2xl font-bold text-gray-800 dark:text-gray-100">
              Send me a message! 📝
            </h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4 animate-bounce">🎉</div>
                <h4 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">
                  Message sent successfully!
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Thanks for reaching out! I'll get back to you soon! 😊
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="What should I call you? 😊"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com 📧"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="What's this about? 🤔"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hi! 👋"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full flex items-center justify-center gap-2 px-6 py-4 font-medium text-white transition-all duration-300 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending your message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      Send Message
                      <Heart className="w-4 h-4 transition-transform group-hover:scale-110" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Fun footer message */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-6 border border-purple-200 dark:border-purple-700">
            <p className="text-lg text-purple-700 dark:text-purple-300">
              {/* <span className="text-2xl mr-2">☕</span> */}
              P.S. I'm always up for a virtual chai chat! Let's discuss your ideas over a cup of chai (or coffee, I'm not picky)! 
              {/* <span className="text-2xl ml-2">🚀</span> */}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact