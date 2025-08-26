"use client"

// 1. Make sure you import the icons you need
import Image from "next/image"
import { Check, Phone, Mail, MapPin, ArrowRight, Linkedin, Instagram, Twitter } from "lucide-react"

interface FooterProps {
  setCurrentPage: (page: string) => void
}

// Component function name correctly capitalized to 'Footer'
export default function Footer({ setCurrentPage }: FooterProps) {
  const quickLinks = [
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ]

  const services = [
    "ERP Systems",
    "Web Development",
    "Mobile Apps",
    "E-Commerce",
    "Digital Marketing",
    "Cloud Solutions",
  ]

  const socialLinks = [
    { Icon: Mail, href: "mailto:choisircraft@gmail.com", name: "Email" },
    { Icon: Phone, href: "https://api.whatsapp.com/send/?phone=919495257093", name: "WhatsApp" },
    { Icon: Linkedin, href: "#", name: "LinkedIn" }, // Add your LinkedIn URL
    { Icon: Instagram, href: "#", name: "Instagram" }, // Add your Instagram URL
  ]

  return (
    <footer className="bg-gradient-to-t from-gray-50 to-white text-gray-800 relative pt-20">
      {/* Elegant Wave Divider SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[100px] fill-current text-white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6 cursor-pointer" onClick={() => setCurrentPage("home")}>
                <Image
                  src="/choisircraft_logo_transparent.png"
                  alt="Choisir Craft Logo"
                  width={150}
                  height={75}
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Transforming businesses with cutting-edge technology solutions and innovative digital experiences that drive growth.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 bg-sky-100 text-sky-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:bg-sky-200"
                  >
                    <social.Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-6 border-l-4 border-sky-500 pl-4">
                Quick Links
              </h4>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => setCurrentPage(link.id)}
                    className="flex items-center text-gray-600 hover:text-sky-600 transition-all duration-300 group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 text-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1" />
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-6 border-l-4 border-sky-500 pl-4">
                Our Services
              </h4>
              <div className="space-y-3">
                {services.map((service) => (
                  <div key={service} className="flex items-center text-gray-600">
                    <Check className="w-4 h-4 text-sky-500 mr-2 flex-shrink-0" />
                    {service}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-6 border-l-4 border-sky-500 pl-4">
                Get in Touch
              </h4>
              <div className="space-y-4">
                {/* Phone Section */}
                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-sky-100 text-sky-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-sky-200 transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Phone</p>
                    <p className="text-gray-700 group-hover:text-sky-600 transition-colors duration-300">+91 94952 57093</p>
                  </div>
                </div>
                {/* Email Section */}
                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-sky-100 text-sky-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-sky-200 transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <p className="text-gray-700 group-hover:text-sky-600 transition-colors duration-300">choisircraft@gmail.com</p>
                  </div>
                </div>
                {/* Location Section */}
                <div className="flex items-start space-x-3 group">
                  <div className="w-10 h-10 bg-sky-100 text-sky-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-sky-200 transition-all duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Location</p>
                    <p className="text-gray-700">Kerala, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm">
              <p className="text-gray-500 mb-4 md:mb-0">
                © {new Date().getFullYear()} Choisir Craft. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-500 hover:text-sky-600 transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="text-gray-500 hover:text-sky-600 transition-colors duration-300">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}