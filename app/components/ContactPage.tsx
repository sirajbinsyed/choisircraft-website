"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, Send, Clock, Users, Award, MessageCircle, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      info: "+91 94952 57093",
      description: "Call us for immediate assistance",
      link: "tel:+919495257093",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "choisircraft@gmail.com",
      description: "Send us your queries anytime",
      link: "mailto:choisircraft@gmail.com",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      info: "Chat with us",
      description: "Quick response guaranteed",
      link: "https://api.whatsapp.com/send/?phone=919495257093&text=Hello%2C+I%27m+interested+in+your+services&type=phone_number&app_absent=0",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      info: "Mon - Sat: 9AM - 7PM",
      description: "Sunday: 10AM - 4PM",
      link: null,
    },
  ]

  const services = [
    "ERP Systems",
    "Web & App Development",
    "E-Commerce Solutions",
    "Digital Excellence",
    "Custom Software",
    "Other",
  ]

  const whyChooseUs = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Skilled professionals with years of experience",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Timely Delivery",
      description: "On-time project completion guaranteed",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support",
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Format the message for WhatsApp
    const whatsappMessage = `
*New Contact Form Submission - Choisir Craft*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || "Not provided"}
*Service Interested:* ${formData.service}

*Project Details:*
${formData.message}

*Submitted via Website Contact Form*
    `.trim()

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage)
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/919495257093?text=${encodedMessage}`
    
    // Redirect to WhatsApp after a brief delay to show loading state
    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: ""
        })
        setIsSubmitted(false)
      }, 3000)
    }, 1500)
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-green-400 rounded-full animate-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm border border-green-200 rounded-2xl text-green-600 font-semibold mb-6 shadow-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              GET IN TOUCH
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-6">
              Contact <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business? Get in touch with our experts and let's discuss your next digital project
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up text-center border border-green-100 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {contact.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{contact.title}</h3>
                {contact.link ? (
                  <a
                    href={contact.link}
                    target={contact.link.startsWith("http") ? "_blank" : "_self"}
                    rel={contact.link.startsWith("http") ? "noopener noreferrer" : ""}
                    className="text-green-600 font-medium hover:text-green-700 transition-colors duration-300"
                  >
                    {contact.info}
                  </a>
                ) : (
                  <p className="text-green-600 font-medium">{contact.info}</p>
                )}
                <p className="text-sm text-gray-500 mt-1">{contact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-xl border border-gray-100">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for contacting us. We've redirected you to WhatsApp to continue the conversation.
                    </p>
                    <p className="text-sm text-gray-500">
                      If you weren't redirected, please check your pop-up settings.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Let's Start a <span className="text-green-600">Conversation</span>
                    </h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      Fill out the form below and we'll connect with you on WhatsApp immediately. Let's discuss how we can help transform your business.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-300 hover:border-green-300"
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-300 hover:border-green-300"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-300 hover:border-green-300"
                            placeholder="Enter your phone number"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested *</label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-300 hover:border-green-300"
                          >
                            <option value="">Select a service</option>
                            {services.map((service, index) => (
                              <option key={index} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-300 hover:border-green-300 resize-none"
                          placeholder="Tell us about your project requirements..."
                        />
                      </div>

                      {/* <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                        <p className="text-sm text-blue-700 text-center">
                          📱 After submitting, you'll be redirected to WhatsApp to continue the conversation with our team.
                        </p>
                      </div> */}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Preparing WhatsApp...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Continue on WhatsApp
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="animate-fade-in-up animation-delay-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Why Choose <span className="text-green-600">Choisir Craft?</span>
              </h2>

              <div className="space-y-6 mb-8">
                {whyChooseUs.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-gradient-to-r from-green-50 to-white rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 border border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Join 30+ satisfied clients who have transformed their businesses with our innovative solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+919495257093"
                    className="flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300 hover:scale-105"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                  <a
                    href="https://api.whatsapp.com/send/?phone=919495257093&text=Hello%2C+I%27m+interested+in+your+services&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-300 border border-green-200 hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp 
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}