"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Users, Target, Award, TrendingUp, Clock, Shield, Zap, Rocket, Lightbulb, Heart, ArrowRight } from "lucide-react"

export default function AboutPage() {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    support: 0,
  })

  const stats = [
    { number: 10, label: "Projects Completed", icon: <Award className="w-8 h-8" /> },
    { number: 5, label: "Happy Clients", icon: <Users className="w-8 h-8" /> },
    { number: 1, label: "Years Experience", icon: <Clock className="w-8 h-8" /> },
    { number: 24, label: "24/7 Support", icon: <Shield className="w-8 h-8" /> },
  ]

  // Animated counters
  useEffect(() => {
    const animateCounters = () => {
      stats.forEach((stat, index) => {
        let start = 0
        const end = stat.number
        const duration = 2000
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            start = end
            clearInterval(timer)
          }
          setCounters((prev) => ({
            ...prev,
            [index === 0 ? "projects" : index === 1 ? "clients" : index === 2 ? "years" : "support"]: Math.floor(start),
          }))
        }, 16)
      })
    }

    const timer = setTimeout(animateCounters, 500)
    return () => clearTimeout(timer)
  }, [])

  const handleStartProject = () => {
    const message = "Hi Choisir Craft! I would like to discuss a project.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919495257093?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm border border-green-200 rounded-2xl text-green-600 font-semibold mb-6 shadow-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              ABOUT OUR COMPANY
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Choisir Craft</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Pioneering digital transformation with innovative solutions that empower businesses to thrive in the modern world
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl shadow-green-500/25 relative overflow-hidden">
                  {stat.icon}
                  <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-300"></div>
                </div>
                <div className="text-5xl font-black text-gray-900 mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  {index === 0
                    ? counters.projects
                    : index === 1
                      ? counters.clients
                      : index === 2
                        ? counters.years
                        : counters.support}
                  {index === 0 ? "+" : index === 1 ? "+" : index === 2 ? "+" : "/7"}
                </div>
                <div className="text-gray-600 font-semibold text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Story Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-50 rounded-full blur-3xl opacity-50"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                <Lightbulb className="w-4 h-4 mr-2" />
                OUR MISSION
              </div>
              
              <h2 className="text-5xl font-black text-gray-900 leading-tight">
                We Don't Just Build Websites — We <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Solve Problems</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Based in <strong className="text-gray-800">Eranakulam, Kerala</strong>, our mission is to uncover your business's pain points and deliver strategic, tailor-made digital solutions. Whether it's increasing your online visibility or streamlining operations, we help you take the right step forward.
                </p>
                
                <p>
                  With over <strong className="text-gray-800">10+ successful client partnerships</strong> and an expert team behind every project, we turn challenges into results. From initial planning to post-launch support — we stay connected and committed.
                </p>
                
                <p className="text-xl font-semibold text-gray-800 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border-l-4 border-green-500">
                  Let Choisir Craft be the force that drives your digital success.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button onClick={handleStartProject} className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/25 hover:scale-105 flex items-center justify-center">
                  Start Your Project
                  <Rocket className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                {/* <Link href="/portfolio">
                <button className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:border-green-500 hover:bg-green-50 hover:scale-105 flex items-center justify-center">
                  View Our Works
                </button>
                </Link> */}
              </div>
            </div>

            {/* Right Content - Feature Cards */}
            <div className="space-y-6">
              {/* Vision Card */}
              <div className="group p-8 bg-gradient-to-br from-green-50 to-white rounded-3xl border border-green-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading digital innovation partner for businesses seeking transformative growth through cutting-edge technology and strategic thinking.
                </p>
              </div>

              {/* Approach Card */}
              <div className="group p-8 bg-gradient-to-br from-emerald-50 to-white rounded-3xl border border-emerald-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  We combine technical expertise with creative problem-solving to deliver solutions that not only meet but exceed your business objectives.
                </p>
              </div>

              {/* Values Card */}
              <div className="group p-8 bg-gradient-to-br from-lime-50 to-white rounded-3xl border border-lime-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-500 to-lime-600 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  Commitment to excellence, transparency in communication, and building lasting partnerships based on trust and mutual success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-green-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl font-black text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-green-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can help you achieve your digital goals and drive meaningful growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button onClick={handleStartProject} className="group bg-white text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}