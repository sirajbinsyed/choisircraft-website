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
      icon: <Cogs className="w-8 h-8 text-blue-600" />,
      title: "ERP Systems",
      description: "Comprehensive enterprise resource planning solutions to streamline your business operations, from inventory to financial reporting.",
      features: ["Inventory Management", "Financial Reporting", "HR Management", "Production Planning"],
      image: "/erp.jpg", // Ensure you have public/erp.png
    },
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Web & App Development",
      description: "Custom web and mobile applications built with modern technologies and best practices for a seamless user experience.",
      features: ["Responsive Design", "Mobile Apps (iOS & Android)", "Progressive Web Apps", "API Development"],
      image: "/development.jpg", // Ensure you have public/development.png
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-blue-600" />,
      title: "E-Commerce Solutions",
      description: "Complete e-commerce platforms with secure payment integration, inventory management, and powerful analytics.",
      features: ["Online Storefronts", "Secure Payment Gateway", "Order Management", "Sales Analytics"],
      image: "/ecommerce.jpg", // Ensure you have public/ecommerce.png
    },
    {
      icon: <Star className="w-8 h-8 text-blue-600" />,
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
      description: "Full-fledged e-commerce website for a menswear brand, featuring product catalog, secure checkout, and order management.",
      coverImage: "/adstudios.png",
      websiteUrl: "https://adstudios.in/",
      githubUrl: null,
      client: "Adstudio, Kochi",
      techStack : ["React"],
      category: "E-commerce"
    },
    {
      id: 2,
      title: "BakeCity Hyper (Restaurant & Hotel)",
      description: "Integrated website for a restaurant, hotel, and bakery, showcasing services, menus, and booking.",
      coverImage: "/bakecity.png",
      websiteUrl: "https://bakecityhyper.com/",
      githubUrl: null,
      client: "BakeCity Hyper, Calicut",
      techStack : ["HTML", "CSS"],
      category: "Static"
    },
    {
      id: 3,
      title: "Mahesh GANGADHARAN (Portrait Artist)",
      description: "Artist portfolio website to showcase his renowned portrait works and facilitate inquiries.",
      coverImage: "/maheshgangatharan.png",
      websiteUrl: "https://sirajbinsyed.github.io/mahesh/",
      githubUrl: "https://github.com/sirajbinsyed/mahesh",
      client: "Mahesh GANGADHARAN, Portrait Artist",
      techStack : ["React"],
      category: "Static"
    }
  ]


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
      {/* 1. Hero Slider Section */}
     <section className="relative h-screen overflow-hidden">
  {/* Enhanced background particle effects */}
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(30)].map((_, i) => (
      <div 
        key={i} 
        className="absolute rounded-full animate-float backdrop-blur-sm"
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

  {/* Gradient overlay for better glass effect */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 z-0"></div>

  {slides.map((slide, index) => (
    <div 
      key={index} 
      className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
        index === currentSlide 
          ? "opacity-100 scale-100" 
          : "opacity-0 scale-105"
      }`}
    >
      <div className="absolute inset-0">
        <img src={slide.image} alt="Slide Background" className="w-full h-full object-cover"/>
        {/* Enhanced overlay with blur */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      </div>
      
      {/* Glass content container */}
      <div className="flex items-center justify-center h-full text-white text-center px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced glass badge */}
          <div className="mb-6">
            <span className="inline-block px-6 py-3 bg-white/15 backdrop-blur-md rounded-2xl text-base font-medium border border-white/20 shadow-lg animate-fade-in-up">
              {typedText}
              {isTyping && <span className="animate-pulse">|</span>}
            </span>
          </div>
          
          {/* Enhanced title with gradient text */}
          <h1 className="text-5xl md:text-8xl font-bold mb-8 animate-fade-in-up animation-delay-300 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            {slide.title}
          </h1>
          
          {/* Enhanced subtitle */}
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-600 leading-relaxed font-light">
            {slide.subtitle}
          </p>
          
          {/* Enhanced glass button */}
          <button className="group bg-white/15 hover:bg-white/25 backdrop-blur-md text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 animate-fade-in-up animation-delay-900 border border-white/30 shadow-xl hover:shadow-2xl">
            {slide.cta}
            <ArrowRight className="inline-block ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  ))}

  {/* Enhanced Navigation Buttons */}
  <button 
    onClick={prevSlide} 
    className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/15 hover:bg-white/25 backdrop-blur-md text-white p-4 rounded-2xl transition-all duration-300 group z-20 border border-white/20 shadow-lg hover:shadow-xl"
  >
    <ChevronLeft className="w-7 h-7 group-hover:-translate-x-1 transition-transform duration-300" />
  </button>
  
  <button 
    onClick={nextSlide} 
    className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/15 hover:bg-white/25 backdrop-blur-md text-white p-4 rounded-2xl transition-all duration-300 group z-20 border border-white/20 shadow-lg hover:shadow-xl"
  >
    <ChevronRight className="w-7 h-7 group-hover:translate-x-1 transition-transform duration-300" />
  </button>

  {/* Enhanced Dots Indicator */}
  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
    {slides.map((_, index) => (
      <button 
        key={index} 
        onClick={() => setCurrentSlide(index)}
        className={`rounded-full transition-all duration-500 backdrop-blur-sm border border-white/30 ${
          index === currentSlide 
            ? "bg-white/40 scale-125 w-4 h-4" 
            : "bg-white/20 hover:bg-white/30 w-3 h-3"
        }`}
      />
    ))}
  </div>

  {/* Progress Bar */}
  <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-20">
    <div 
      className="h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-1000 ease-out"
      style={{ width: `${(currentSlide + 1) / slides.length * 100}%` }}
    ></div>
  </div>
</section>

      
      {/* 2. Classic Services Section */}
      <section id="services" className="py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-20">
      <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4">
        Our Services
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        Solutions That Drive <span className="text-blue-600">Your Growth</span>
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
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
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
            <a href="#" className="inline-flex items-center group font-semibold text-blue-600 hover:text-blue-700">
              Learn More
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Showcase Section */}
<section id="showcase" className="py-24 bg-white relative overflow-hidden" ref={showcaseRef}>
  {/* Animated Background Elements */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-50 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-50 rounded-full blur-2xl"></div>
  </div>

  {/* Grid Pattern Overlay */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-20">
      <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-2xl text-base font-semibold text-cyan-700 mb-6">
        <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
        PROJECT SHOWCASE
      </div>
      <h2 className="text-6xl font-black text-gray-900 mb-6">
        Digital <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Innovations</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Where cutting-edge technology meets exceptional design to create unforgettable digital experiences
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 auto-rows-fr">
      {showcaseProjects.map((project, index) => (
        <div
          key={project.id}
          className="group relative bg-white border border-gray-200 rounded-3xl overflow-hidden hover:border-cyan-300 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
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
            <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/5 transition-all duration-500"></div>
            
            {/* Project Badge */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200 shadow-lg">
              <span className="text-gray-800 text-sm font-semibold">
                {project.client}
              </span>
            </div>

            {/* Tech Stack Floating Icons */}
            <div className="absolute bottom-4 left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {project.techStack?.map((tech : any, techIndex : any) => (
                <div key={techIndex} className="w-8 h-8 bg-white/90 backdrop-blur-md rounded-lg flex items-center justify-center border border-gray-200 shadow-sm">
                  <span className="text-gray-700 text-xs font-bold">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 relative">
            {/* Project Title and Category */}
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-cyan-700 transition-colors duration-300">
                {project.title}
              </h3>
              <span className="px-3 py-1 bg-cyan-50 border border-cyan-200 text-cyan-700 rounded-full text-xs font-medium">
                {project?.category || "Web App"}
              </span>
            </div>

            {/* Project Description */}
            <p className="text-gray-600 mb-6 leading-relaxed text-sm line-clamp-2">
              {project.description}
            </p>

            {/* Stats Bar */}
            <div className="flex justify-between items-center mb-6 text-xs text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Completed
              </div>
              <div className="flex items-center space-x-4">
                <span>🚀 Production Ready</span>
                <span>⭐ 4.8/5</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              {project.websiteUrl && (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-4 rounded-xl text-sm font-semibold text-center transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              )}
              
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-3xl bg-cyan-400/0 group-hover:bg-cyan-400/5 transition-all duration-500 pointer-events-none"></div>
        </div>
      ))}
    </div>

    {/* CTA Section */}
    <div className="text-center mt-16">
      <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-2xl px-8 py-6 shadow-lg">
        <div className="text-left">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Start Your Project?</h3>
          <p className="text-gray-600">Let's build something amazing together</p>
        </div>
        <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
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
              className="absolute top-4 right-4 z-20 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
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

