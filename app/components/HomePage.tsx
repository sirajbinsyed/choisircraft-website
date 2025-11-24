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
  X,
  ExternalLink,
  Github,
  Play,
  Activity,
  PieChart,
  Zap,
  Layers
} from "lucide-react"

export default function HomePage() {
  // State variables
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeService, setActiveService] = useState(0) // NEW: Tracks the active service
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContentUrl, setModalContentUrl] = useState("")
  const showcaseRef = useRef<HTMLDivElement>(null)

  // Services Section Data (Images removed from objects as requested)
  const services = [
    {
      icon: <Cogs className="w-6 h-6" />,
      title: "ERP Systems",
      description: "Comprehensive enterprise resource planning solutions to streamline your business operations, from inventory to financial reporting.",
      features: ["Inventory Management", "Financial Reporting", "HR Management", "Production Planning"],
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web & App Development",
      description: "Custom web and mobile applications built with modern technologies and best practices for a seamless user experience.",
      features: ["Responsive Design", "iOS & Android Apps", "Progressive Web Apps", "API Development"],
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "E-Commerce Solutions",
      description: "Complete e-commerce platforms with secure payment integration, inventory management, and powerful analytics.",
      features: ["Online Storefronts", "Secure Payments", "Order Management", "Sales Analytics"],
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Digital Excellence",
      description: "Comprehensive digital transformation services including strategy, cloud solutions, and automation to elevate your business.",
      features: ["Digital Strategy", "Cloud Solutions", "Business Analytics", "Process Automation"],
    },
  ]

  // Showcase Projects
  const showcaseProjects = [
    {
      id: 1,
      title: "Adstudio (Menswear E-commerce)",
      coverImage: "/adstudios.png",
      websiteUrl: "https://adstudios.in/",
      category: "E-commerce"
    },
    {
      id: 2,
      title: "Amaze-ads (Frame Shop)",
      coverImage: "/amazeads.png",
      websiteUrl: "https://www.amazeads.in/",
      category: "Website"
    },
    {
      id: 3,
      title: "Zafera Spices (Distributed Company)",
      coverImage: "/zaferaspices.png",
      websiteUrl: "https://v0-spice-website-design-rdyx.vercel.app/",
      category: "Website"
    }
  ]

  // CLIENTS ARRAY
  const clients = [
    { name: "Bosco Bags", img: "/boscobags-logo.jpg" },
    { name: "Amaze ads", img: "/amazeads-logo.jpg" },
    { name: "Adstudio", img: "/adstudio-logo.png" },
    { name: "Back City", img: "/backcity-logo.png" },
    { name: "Zafera Spices", img: "/zaferaspices-logo.png" }
  ]
  const allClientsForMarquee = [...clients, ...clients]

  const handleStartProject = () => {
    const message = "Hi Choisir Craft! I would like to discuss a project.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919495257093?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContentUrl("");
  };

  const openProjectModal = (project: typeof showcaseProjects[number]) => {
    setModalContentUrl(project.websiteUrl || "")
    setIsModalOpen(true)
  }

  return (
    <div className="pt-16 bg-white">
      <style jsx global>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee-custom {
          animation: marquee-scroll 40s linear infinite;
        }
        @keyframes float-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        .animate-float-slow {
            animation: float-slow 4s ease-in-out infinite;
        }
        .animate-float-delayed {
            animation: float-slow 4s ease-in-out infinite 2s;
        }
      `}</style>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Right Content: IMAGE FIRST on Mobile */}
          <div className="relative h-[500px] lg:h-[600px] w-full flex items-center justify-center order-1 lg:order-2">
            <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-green-500 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="mt-[-50px] lg:mt-[-120px] relative z-10 h-full flex items-end justify-center">
              <img
                src="/hero-slider.png"
                alt="Software Developer"
                className="w-full h-full object-cover drop-shadow-2xl"
              />
            </div>
            {/* Floating Widgets... */}
            <div className="absolute top-16 left-0 md:left-10 bg-white p-3 rounded-xl shadow-xl z-20 animate-float-slow max-w-[140px]">
              <div className="flex justify-between items-center mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <div className="h-1 w-10 bg-gray-200 rounded"></div>
              </div>
              <div className="flex items-end gap-1 h-10 border-b border-gray-100 pb-1">
                <Activity className="text-green-600" />
              </div>
            </div>
            <div className="absolute top-20 right-0 md:right-10 bg-white p-4 rounded-xl shadow-xl z-20 animate-float-delayed">
              <div className="flex flex-col items-center gap-2">
                <PieChart className="w-10 h-10 text-green-600" />
                <div className="h-2 w-16 bg-gray-100 rounded"></div>
                <div className="h-1 w-12 bg-gray-100 rounded"></div>
              </div>
            </div>
            <div className="absolute bottom-20 left-0 md:left-12 bg-white p-4 rounded-2xl shadow-xl z-20 animate-float-slow w-48">
              <h4 className="font-bold text-sm text-slate-800 mb-3">Performance</h4>
              <div className="flex items-end justify-between gap-2 h-12">
                <div className="w-3 bg-green-200 rounded-t-md h-[40%]"></div>
                <div className="w-3 bg-emerald-300 rounded-t-md h-[60%]"></div>
                <div className="w-3 bg-green-600 rounded-t-md h-[100%]"></div>
                <div className="w-3 bg-emerald-300 rounded-t-md h-[50%]"></div>
                <div className="w-3 bg-green-200 rounded-t-md h-[30%]"></div>
                <div className="w-3 bg-green-600 rounded-t-md h-[80%]"></div>
              </div>
            </div>
            <div className="absolute bottom-32 right-0 md:-right-4 bg-white/90 backdrop-blur px-4 py-3 rounded-full shadow-xl z-20 animate-float-delayed flex items-center gap-3">
              <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full w-[70%] bg-green-600 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Left Content: TEXT SECOND on Mobile */}
          <div className="space-y-8 z-10 pt-10 lg:pt-0 order-2 lg:order-1">
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
              Future-Ready <br />
              Software <br />
              Development
            </h1>
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              We engineer robust, scalable, and innovative digital solutions tailored
              to your business goals. Transform your ideas into reality with our expert team.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button onClick={handleStartProject} className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-semibold shadow-lg shadow-green-200 transition-all hover:scale-105">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. NEW REIMAGINED SERVICES SECTION */}
      <section id="services" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-16 md:text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 font-bold text-sm mb-4 tracking-wide">
              OUR EXPERTISE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We Build <span className="text-green-600">Digital Growth</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explore our core services designed to take your business to the next level.
              Everything you need, under one roof.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* LEFT COLUMN: The Single "Master" Image (Sticky) */}
            <div className="hidden lg:block sticky top-24 h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
              {/* 
                  NOTE: Replace '/development.jpg' with a general high-quality image 
                  that represents your team, a dashboard, or a collage of your work.
              */}
              <Image
                src="/hero-sliderr.jpg"
                alt="Our Services Overview"
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm mb-3">
                  <Zap className="w-4 h-4 text-yellow-400" fill="currentColor" />
                  <span>Innovation First</span>
                </div>
                <h3 className="text-2xl font-bold">Transforming Ideas into Reality</h3>
                <p className="text-gray-200 mt-2 text-sm">
                  Our unified approach ensures every aspect of your digital presence works in harmony.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive Service List (Accordion) */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`
                    cursor-pointer rounded-2xl transition-all duration-300 border overflow-hidden
                    ${activeService === index
                      ? "bg-green-50 border-green-500 shadow-lg scale-[1.02]"
                      : "bg-white border-gray-200 hover:border-green-300 hover:bg-gray-50"
                    }
                  `}
                >
                  {/* Header of the Card */}
                  <div className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`
                        w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300
                        ${activeService === index ? "bg-green-600 text-white shadow-lg shadow-green-200" : "bg-gray-100 text-gray-500"}
                      `}>
                        {/* Clone icon to enforce size/color if needed */}
                        {React.cloneElement(service.icon, { className: "w-6 h-6" })}
                      </div>
                      <h3 className={`text-xl font-bold ${activeService === index ? "text-gray-900" : "text-gray-700"}`}>
                        {service.title}
                      </h3>
                    </div>

                    {/* Arrow Icon indicating state */}
                    <div className={`
                      w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                      ${activeService === index ? "bg-green-200 rotate-90" : "bg-transparent"}
                    `}>
                      <ChevronRight className={`w-5 h-5 ${activeService === index ? "text-green-700" : "text-gray-400"}`} />
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <div className={`
                    transition-[max-height] duration-500 ease-in-out overflow-hidden
                    ${activeService === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
                  `}>
                    <div className="px-6 pb-6 pt-0 ml-[64px]">
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center gap-2 text-sm text-gray-700">
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-4 border-t border-green-200/50">
                        <button className="text-sm font-semibold text-green-700 flex items-center hover:gap-2 transition-all">
                          Learn more about {service.title.split(" ")[0]} <ArrowRight className="ml-1 w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Only Image (Visbile only on small screens) */}
            <div className="lg:hidden w-full h-64 rounded-2xl overflow-hidden relative shadow-lg">
              <Image
                src="/hero-mobile.jpg"
                alt="Services"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute bottom-4 left-4 text-white font-bold text-xl">
                Our Expertise
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Clients Marquee Section (UNCHANGED) */}
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
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Showcase Section (UNCHANGED) */}
      <section id="showcase" className="py-24 bg-white relative overflow-hidden" ref={showcaseRef}>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-green-50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-50 rounded-full blur-2xl"></div>
        </div>
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
                <div
                  className="relative h-56 overflow-hidden cursor-pointer"
                  onClick={() => openProjectModal(project)}
                >
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-green-400/0 group-hover:bg-green-400/5 transition-all duration-500"></div>

                </div>

                <div className="p-6 relative">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 bg-green-50 border border-green-200 text-green-700 rounded-full text-xs font-medium">
                      {project?.category || "Web App"}
                    </span>
                  </div>
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
                <div className="absolute inset-0 rounded-3xl bg-green-400/0 group-hover:bg-green-400/5 transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

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

      {/* Modal Component (UNCHANGED) */}
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