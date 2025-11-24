"use client"

import { Code, Cog, ShoppingCart, Star, ArrowRight, Check, Zap, Shield, TrendingUp, Layout, Smartphone, Database } from "lucide-react"
import { useState } from "react"


export default function ServicesPage() {
const [activeTab, setActiveTab] = useState(0)

 const services = [
    {
      id: 0,
      icon: <Cog className="w-6 h-6" />,
      title: "ERP Systems",
      subtitle: "Enterprise Resource Planning",
      description: "A centralized system to streamline your entire business operation. From inventory tracking to financial reports, we build custom ERPs that fit your exact workflow.",
      features: [
        { label: "Custom Workflows", icon: <Layout className="w-4 h-4"/> },
        { label: "Real-time Analytics", icon: <Database className="w-4 h-4"/> },
        { label: "HR & Payroll", icon: <Shield className="w-4 h-4"/> },
        { label: "Supply Chain", icon: <TrendingUp className="w-4 h-4"/> },
      ],
      color: "text-emerald-600",
      bgGradient: "from-emerald-500 to-green-600",
      lightBg: "bg-emerald-50",
      border: "border-emerald-200"
    },
    {
      id: 1,
      icon: <Code className="w-6 h-6" />,
      title: "Web & App Dev",
      subtitle: "Custom Digital Products",
      description: "We engineer pixel-perfect websites and robust mobile applications. Our focus is on speed, SEO optimization, and creating a seamless user experience across all devices.",
      features: [
        { label: "Next.js & React", icon: <Code className="w-4 h-4"/> },
        { label: "iOS & Android", icon: <Smartphone className="w-4 h-4"/> },
        { label: "Progressive Web Apps", icon: <Zap className="w-4 h-4"/> },
        { label: "API Integration", icon: <Database className="w-4 h-4"/> },
      ],
      color: "text-blue-600",
      bgGradient: "from-blue-500 to-indigo-600",
      lightBg: "bg-blue-50",
      border: "border-blue-200"
    },
    {
      id: 2,
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "E-Commerce",
      subtitle: "Scalable Online Stores",
      description: "Launch a powerful online store designed to convert visitors into customers. We handle everything from secure payment gateways to complex inventory management systems.",
      features: [
        { label: "Custom Storefronts", icon: <Layout className="w-4 h-4"/> },
        { label: "Payment Gateways", icon: <Shield className="w-4 h-4"/> },
        { label: "Order Management", icon: <ShoppingCart className="w-4 h-4"/> },
        { label: "Sales Dashboards", icon: <TrendingUp className="w-4 h-4"/> },
      ],
      color: "text-purple-600",
      bgGradient: "from-purple-500 to-violet-600",
      lightBg: "bg-purple-50",
      border: "border-purple-200"
    },
    {
      id: 3,
      icon: <Star className="w-6 h-6" />,
      title: "Digital Growth",
      subtitle: "Strategy & Automation",
      description: "Transform your business with cutting-edge digital strategies. We help you migrate to the cloud, automate repetitive tasks, and analyze data to make better decisions.",
      features: [
        { label: "Cloud Migration", icon: <Database className="w-4 h-4"/> },
        { label: "Process Automation", icon: <Cog className="w-4 h-4"/> },
        { label: "Digital Branding", icon: <Star className="w-4 h-4"/> },
        { label: "Growth Strategy", icon: <TrendingUp className="w-4 h-4"/> },
      ],
      color: "text-orange-600",
      bgGradient: "from-orange-500 to-amber-600",
      lightBg: "bg-orange-50",
      border: "border-orange-200"
    }
  ]

  const handleStartProject = () => {
    const message = "Hi Choisir Craft! I would like to discuss a project.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919495257093?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };


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

           {/* 2. INTERACTIVE SERVICES SPLIT-VIEW */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* LEFT COL: Navigation Menu */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`
                  group relative p-4 rounded-2xl text-left transition-all duration-300 border-2
                  ${activeTab === index 
                    ? `bg-white ${service.border} shadow-lg scale-100` 
                    : "bg-gray-50 border-transparent hover:bg-white hover:border-gray-200 hover:shadow-md scale-95 opacity-80 hover:opacity-100 hover:scale-100"
                  }
                `}
              >
                <div className="flex items-center gap-4">
                  <div className={`
                    w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300
                    ${activeTab === index ? `bg-gradient-to-br ${service.bgGradient} text-white shadow-md` : "bg-white text-gray-400 group-hover:text-gray-600"}
                  `}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg ${activeTab === index ? "text-gray-900" : "text-gray-600"}`}>
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-medium">
                      {service.subtitle}
                    </p>
                  </div>
                  {activeTab === index && (
                    <div className="absolute right-4 text-green-500 animate-pulse">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT COL: Detail View */}
          <div className="lg:col-span-8">
            <div className="relative h-full bg-white rounded-3xl border border-gray-100 shadow-2xl overflow-hidden p-8 md:p-10 flex flex-col justify-center">
              
              {/* Animated Background Blob */}
              <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${services[activeTab].bgGradient} opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-colors duration-500`}></div>
              
              <div className="relative z-10 animate-fade-in">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-6 ${services[activeTab].lightBg} ${services[activeTab].color}`}>
                  <Star className="w-4 h-4" fill="currentColor" />
                  <span>Premium Service</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {services[activeTab].title}
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-10">
                  {services[activeTab].description}
                </p>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {services[activeTab].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors">
                      <div className={`p-2 rounded-lg bg-white shadow-sm ${services[activeTab].color}`}>
                        {feature.icon}
                      </div>
                      <span className="font-semibold text-gray-700">{feature.label}</span>
                    </div>
                  ))}
                </div>

                <button className={`
                  inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold shadow-lg transition-transform hover:scale-105 active:scale-95
                  bg-gradient-to-r ${services[activeTab].bgGradient}
                `}>
                  Start {services[activeTab].title} Project
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

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
            <button onClick={handleStartProject} className="bg-white text-green-600 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-3" />
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