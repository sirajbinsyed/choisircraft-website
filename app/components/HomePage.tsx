"use client"

import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import {
  ChevronLeft,
  ChevronRight,
  Check,
  Star,
  ShoppingCart,
  Code,
  Cog as Cogs,
  ArrowRight,
  X, // Import the X icon for closing
  ExternalLink, // Import the ExternalLink icon
  Github // Import the Github icon
} from "lucide-react"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false) // State to control modal visibility
  const [modalContentUrl, setModalContentUrl] = useState("") // State to hold the URL for the modal
  const showcaseRef = useRef<HTMLDivElement>(null)

  // Hero Slider Data
  const slides = [
    {
      title: "Digital Excellence",
      subtitle: "Transforming businesses with cutting-edge technology solutions",
      cta: "Get Started",
      image: "/slider-1.jpg", // Ensure you have public/slider-1.jpg
    },
    {
      title: "Web & App Development",
      subtitle: "Creating responsive and user-friendly digital experiences",
      cta: "Our Services",
      image: "/slider-2.jpg", // Ensure you have public/slider-2.jpg
    },
    {
      title: "ERP Solutions",
      subtitle: "Streamline your business operations with our ERP systems",
      cta: "View Portfolio",
      image: "/slider-3.jpg", // Ensure you have public/slider-3.jpg
    },
  ]

  // Services Section Data
  const services = [
    {
      icon: <Cogs className="w-8 h-8 text-green-600" />,
      title: "ERP Systems",
      description: "Comprehensive enterprise resource planning solutions to streamline your business operations, from inventory to financial reporting.",
      features: ["Inventory Management", "Financial Reporting", "HR Management", "Production Planning"],
      image: "/erp.jpg", // Ensure you have public/erp.png
    },
    {
      icon: <Code className="w-8 h-8 text-green-600" />,
      title: "Web & App Development",
      description: "Custom web and mobile applications built with modern technologies and best practices for a seamless user experience.",
      features: ["Responsive Design", "Mobile Apps (iOS & Android)", "Progressive Web Apps", "API Development"],
      image: "/development.jpg", // Ensure you have public/development.png
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-green-600" />,
      title: "E-Commerce Solutions",
      description: "Complete e-commerce platforms with secure payment integration, inventory management, and powerful analytics.",
      features: ["Online Storefronts", "Secure Payment Gateway", "Order Management", "Sales Analytics"],
      image: "/ecommerce.jpg", // Ensure you have public/ecommerce.png
    },
    {
      icon: <Star className="w-8 h-8 text-green-600" />,
      title: "Digital Excellence",
      description: "Comprehensive digital transformation services including strategy, cloud solutions, and automation to elevate your business.",
      features: ["Digital Strategy", "Cloud Solutions", "Business Analytics", "Process Automation"],
      image: "/analysis.jpg", // Ensure you have public/analysis.png
    },
  ]

  // Showcase Projects
  const showcaseProjects = [
    {
      id: 1,
      title: "Adstudio (Menswear E-commerce)",
      coverImage: "/adstudios.png",
      websiteUrl: "https://adstudios.in/",
      client: "Adstudio, Kochi",
      category: "E-commerce"
    },
    {
      id: 2,
      title: "Bosco Bags (Manufacturing Company)",
      coverImage: "/boscobags.png",
      websiteUrl: "https://bosco-bags-6qb4.vercel.app/",
      client: "BakeCity Hyper, Calicut",
      category: "E-commerce"
    },
    {
      id: 3,
      title: "Zafera Spices (Distributed Company)",
      coverImage: "/zaferaspices.png",
      websiteUrl: "https://v0-spice-website-design-rdyx.vercel.app/",
      client: "Zafera Spices, Pattambi,pallippuram",
      category: "Website"
    }
  ]

  // CLIENTS ARRAY - The one you want to map
  const clients = [
    {
      name: "Bosco Bags",
      img: "/boscobags-logo.jpg"
    },
    {
      name: "Amaze ads",
      img: "/amazeads-logo.jpg"
    },
    {
      name: "Adstudio",
      img: "/adstudio-logo.png"
    },
    {
      name: "Back City",
      img: "/backcity-logo.png" // Corrected to use '/' for Next.js public directory
    },
    {
      name: "Zafera Spices",
      img: "/zaferaspices-logo.png" // Corrected to use '/' for Next.js public directory
    }
  ]
  // Duplicate the list to ensure seamless, continuous loop
  const allClientsForMarquee = [...clients, ...clients]

  const handleStartProject = () => {
    const message = "Hi Choisir Craft! I would like to discuss a project.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919495257093?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };


  // Effect for typing animation on the hero section
  useEffect(() => {
    const text = "Welcome to Choisir Craft"
    let index = 0
    const timer = setInterval(() => {
      if (index < text.length) {
        setTypedText(text.slice(0, index + 1))
        index++
      } else {
        setIsTyping(false)
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  // Effect for hero slider auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  // Navigation functions for hero slider
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  // Handler for opening the modal
  const handleOpenModal = (url: string) => {
    setModalContentUrl(url);
    setIsModalOpen(true);
  };

  // Handler for closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContentUrl(""); // Clear the URL when closing
  };

  const openProjectModal = (project: typeof showcaseProjects[number]) => {
    setModalContentUrl(project.websiteUrl || "")
    setIsModalOpen(true)
  }


  return (
    <div className="pt-16 bg-white">
      {/* 
        Custom CSS for Marquee Animation
        NOTE: In a real-world Next.js app, this animation should be defined 
        in your global CSS file or your tailwind.config.js utility section.
      */}
      <style jsx global>{`
        @keyframes marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%); /* Moves exactly half the content */
          }
        }
        .animate-marquee-custom {
          animation: marquee-scroll 40s linear infinite; /* Adjust duration to control speed */
        }
      `}</style>

      {/* 1. Hero Slider Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Enhanced background particle effects */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-float"
              style={{
                width: `${2 + Math.random() * 6}px`,
                height: `${2 + Math.random() * 6}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `rgba(255, 255, 255, ${0.15 + Math.random() * 0.2})`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
              }`}
          >
            <div className="absolute inset-0">
              <img src={slide.image} alt="Slide Background" className="w-full h-full object-cover" />
            </div>

            {/* Normal content container */}
            <div className="flex items-center justify-center h-full text-white text-center px-4 relative z-10">
              <div className="max-w-4xl mx-auto">
                {/* Normal badge */}
                <div className="mb-6">
                  <span className="inline-block px-6 py-3 bg-gray-800/80 rounded-2xl text-base font-medium text-white shadow-lg animate-fade-in-up">
                    {typedText}
                    {isTyping && <span className="animate-pulse">|</span>}
                  </span>
                </div>

                {/* Normal title */}
                <h1 className="text-5xl md:text-8xl font-bold mb-8 animate-fade-in-up animation-delay-300 text-white">
                  {slide.title}
                </h1>

                {/* Normal subtitle */}
                <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-600 leading-relaxed font-light text-gray-200">
                  {slide.subtitle}
                </p>

                {/* Normal button */}
                <button className="group bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 animate-fade-in-up animation-delay-900 shadow-xl hover:shadow-2xl">
                  {slide.cta}
                  <ArrowRight className="inline-block ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Normal Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-900 text-white p-4 rounded-2xl transition-all duration-300 group z-20 shadow-lg hover:shadow-xl"
        >
          <ChevronLeft className="w-7 h-7 group-hover:-translate-x-1 transition-transform duration-300" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-800/80 hover:bg-gray-900 text-white p-4 rounded-2xl transition-all duration-300 group z-20 shadow-lg hover:shadow-xl"
        >
          <ChevronRight className="w-7 h-7 group-hover:translate-x-1 transition-transform duration-300" />
        </button>

        {/* Normal Dots Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`rounded-full transition-all duration-500 ${index === currentSlide
                  ? "bg-white scale-125 w-4 h-4"
                  : "bg-gray-400 hover:bg-gray-300 w-3 h-3"
                }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-600/50 z-20">
          <div
            className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-1000 ease-out"
            style={{ width: `${(currentSlide + 1) / slides.length * 100}%` }}
          ></div>
        </div>
      </section>


      {/* 2. Classic Services Section */}
      <section id="services" className="py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-600 font-medium text-sm mb-4">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Solutions That Drive <span className="text-green-600">Your Growth</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver comprehensive digital solutions tailored to your unique business challenges and goals.
            </p>
          </div>
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-dense' : ''}`}>
                <div className={`relative w-full h-80 overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className={`${index % 2 !== 0 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    {React.cloneElement(service.icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#" className="inline-flex items-center group font-semibold text-green-600 hover:text-green-700">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Clients Marquee Section */}
      <section id="clients" className="py-12 md:py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-600 font-medium text-sm mb-4">
            Our Partners
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
            Trusted by <span className="text-green-600">Innovative Companies</span>
          </h3>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            A selection of the businesses that rely on our expertise for their digital journey.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div
            className="flex items-center justify-center space-x-12 [&_img]:max-w-none animate-marquee-custom"
            style={{ width: `${(allClientsForMarquee.length) * 200}px` }}
          >
            {allClientsForMarquee.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-40 relative flex items-center justify-center"
              >
                <Image
                  src={client.img}
                  alt={client.name}
                  width={200}
                  height={48}
                  objectFit="contain"
                  className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Showcase Section */}
      <section id="showcase" className="py-24 bg-white relative overflow-hidden" ref={showcaseRef}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-green-50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-50 rounded-full blur-2xl"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl text-base font-semibold text-green-700 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              PROJECT SHOWCASE
            </div>
            <h2 className="text-6xl font-black text-gray-900 mb-6">
              Digital <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 bg-clip-text text-transparent">Innovations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Where cutting-edge technology meets exceptional design to create unforgettable digital experiences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 auto-rows-fr">
            {showcaseProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white border border-gray-200 rounded-3xl overflow-hidden hover:border-green-300 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Project Image with Hover Effect */}
                <div
                  className="relative h-56 overflow-hidden cursor-pointer"
                  onClick={() => openProjectModal(project)}
                >
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent"></div>

                  {/* Hover Effect Layer */}
                  <div className="absolute inset-0 bg-green-400/0 group-hover:bg-green-400/5 transition-all duration-500"></div>

                  {/* Project Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200 shadow-lg">
                    <span className="text-gray-800 text-sm font-semibold">
                      {project.client}
                    </span>
                  </div>

                </div>

                {/* Content Section */}
                <div className="p-6 relative">
                  {/* Project Title and Category */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 bg-green-50 border border-green-200 text-green-700 rounded-full text-xs font-medium">
                      {project?.category || "Web App"}
                    </span>
                  </div>



                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    {project.websiteUrl && (
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-3 px-4 rounded-xl text-sm font-semibold text-center transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 flex items-center justify-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-green-400/0 group-hover:bg-green-400/5 transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl px-8 py-6 shadow-lg">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Start Your Project?</h3>
                <p className="text-gray-600">Let's build something amazing together</p>
              </div>
              <button
                onClick={handleStartProject}
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                Start Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Component */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm overflow-y-auto p-4 transition-all duration-300">
          <div className="relative w-full max-w-screen-lg bg-white rounded-2xl shadow-2xl p-4 animate-fade-in-up">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-20 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
            <div className="w-full h-[70vh] flex justify-center items-center">
              <iframe
                src={modalContentUrl}
                title="Digital Restaurant Menu Plans"
                className="w-full h-full rounded-lg border-0"
                sandbox="allow-scripts allow-same-origin allow-popups"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}