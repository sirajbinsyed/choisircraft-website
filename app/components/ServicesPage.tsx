"use client"

import { Code, Cog, ShoppingCart, Star, ArrowRight, Check, Zap, Shield, TrendingUp } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: <Cog className="w-8 h-8" />,
      title: "ERP Systems",
      description: "Streamline your business operations with custom enterprise solutions",
      highlights: ["Custom Development", "System Integration", "Real-time Analytics"],
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web & App Development",
      description: "Build engaging digital experiences that drive business growth",
      highlights: ["Responsive Design", "Mobile Apps", "Performance Focused"],
      color: "from-blue-500 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-Commerce Solutions",
      description: "Launch your online store with secure, scalable platforms",
      highlights: ["Online Stores", "Payment Integration", "Inventory Management"],
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Digital Excellence",
      description: "Transform your business with cutting-edge digital solutions",
      highlights: ["Cloud Migration", "Digital Strategy", "Automation"],
      color: "from-orange-500 to-amber-600",
      bgColor: "from-orange-50 to-amber-50"
    }
  ]

  const process = [
    {
      step: "01",
      title: "Discover",
      description: "We understand your needs and plan the perfect solution",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      step: "02",
      title: "Design & Build",
      description: "Create and develop your solution with precision",
      icon: <Code className="w-6 h-6" />,
    },
    {
      step: "03",
      title: "Test & Refine",
      description: "Ensure quality and performance meet highest standards",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      step: "04",
      title: "Launch & Grow",
      description: "Deploy your solution and provide ongoing support",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
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

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm border border-green-200 rounded-2xl text-green-600 font-semibold mb-6 shadow-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              OUR SERVICES
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-6">
              What We <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Offer</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions designed to transform your business and accelerate growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - Simplified */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-200 hover:border-transparent transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {service.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-8">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                        <span className="font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`group w-full bg-gradient-to-r ${service.color} text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center`}>
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Simplified */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              How We <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A streamlined process designed for success and satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div
                key={index}
                className="relative group text-center"
              >
                {/* Step Card */}
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  {/* Step Number */}
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-green-400 opacity-60" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your ideas to life with our expert services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-3" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-white/10 hover:scale-105">
              View Our Work
            </button>
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