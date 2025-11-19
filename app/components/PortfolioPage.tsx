"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import {
  X,
  ExternalLink,
  Code,
  ArrowRight,
  Star,
  Sparkles,
} from "lucide-react";

export default function PortfolioPage() {
  // State for the concept demo iframe
  const [modalContentUrl, setModalContentUrl] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showIframeModal, setShowIframeModal] = useState(false);
  const iframeRef = useRef(null);

  const defaultImage = "/placeholder.svg";

  // Enhanced Project Data with categories and descriptions
  const projects = [
    {
      id: 1,
      title: "Adstudio",
      coverImage: "/adstudios.png",
      websiteUrl: "https://adstudios.in/",
      category: "E-commerce",
    },
    {
      id: 2,
      title: "BakeCity Hyper",
      coverImage: "/bakecity.png",
      websiteUrl: "https://bakecityhyper.com/",
      category: "Website",
    },
    {
      id: 3,
      title: "Amaze-ads",
      coverImage: "/amazeads.png",
      websiteUrl: "https://www.amazeads.in/",
      category: "Website",
    },
    {
      id: 4,
      title: "Zafera Spices",
      coverImage: "/zaferaspices.png",
      websiteUrl: "https://v0-spice-website-design-rdyx.vercel.app/",
      category: "Website",
    },
    {
      id: 5,
      title: "Bosco Bags",
      coverImage: "/boscobags.png",
      websiteUrl: "https://bosco-bags-6qb4.vercel.app/",
      category: "E-commerce",
    },
  ];

  // Concept data for the iframe demo
  const digitalMenuConcept = {
    title: "Digital Menu Concept",
    subtitle: "Interactive Restaurant Solution",
    description:
      "A conceptual interactive digital menu solution to revolutionize restaurant ordering and customer experience with modern UI/UX design principles.",
    callToAction: "Explore Live Demo",
    externalLinkUrl:
      "https://sirajbinsyed.github.io/restaurant_menu_system_plans/",
    features: ["Interactive Design", "Real-time Updates", "Seamless Ordering"],
  };

  type Project = {
    id: number;
    title: string;
    coverImage: string;
    websiteUrl: string | null;
  };

  // Function to open the concept demo iframe modal
  const openConceptModal = (concept: typeof digitalMenuConcept) => {
    setModalContentUrl(concept.externalLinkUrl);
    setShowIframeModal(true);
    setSelectedProject({
      id: 999,
      title: concept.title,
      coverImage: "/placeholder.svg",
      websiteUrl: concept.externalLinkUrl,
    });
  };

  const closeModal = () => {
    setShowIframeModal(false);
    setModalContentUrl("");
    setSelectedProject(null);
  };

  const handleIframeLoad = () => {
    // Optional: Actions after the iframe loads
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Enhanced Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-gray-200 shadow-sm">
              <Sparkles className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">Portfolio Showcase</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-8 leading-tight">
              Digital
              <span className="block text-green-600">
                Excellence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Transforming ideas into exceptional digital experiences through 
              <span className="font-semibold text-green-600"> innovative design</span> and 
              <span className="font-semibold text-green-600"> cutting-edge development</span>
            </p>

            {/* Stats */}
            <div className="flex justify-center gap-12 text-center">
              <div>
                <div className="text-3xl font-bold text-gray-900">{projects.length}+</div>
                <div className="text-gray-600">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">3+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured <span className="text-green-600">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A curated collection of our latest work, showcasing innovation and attention to detail
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a
                key={project.id}
                href={project.websiteUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100 relative focus:outline-none focus:ring-4 focus:ring-blue-300/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >

                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                  {project.category}
                </div>

                {/* Image Container - Full height and width */}
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.coverImage || defaultImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.srcset = defaultImage;
                      img.src = defaultImage;
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover Action Indicator */}
                  <div className="absolute bottom-4 right-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                      <ExternalLink className="w-5 h-5 text-gray-700" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* View Project Button */}
                  <div className="flex items-center justify-between">
                    <span className="text-green-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                      View Project
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Concept Demo Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-emerald-600/5"></div>
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-br from-gray-900 to-green-900 rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Content Side */}
              <div className="p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 w-fit">
                  <Code className="w-4 h-4 text-green-300" />
                  <span className="text-sm font-medium text-green-300">Concept Demo</span>
                </div>
                
                <h2 className="text-4xl font-bold text-white mb-4">
                  {digitalMenuConcept.title}
                </h2>
                <p className="text-xl text-green-100 mb-2 font-medium">
                  {digitalMenuConcept.subtitle}
                </p>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  {digitalMenuConcept.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {digitalMenuConcept.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-white/10 backdrop-blur-sm text-green-100 px-4 py-2 rounded-full text-sm font-medium border border-white/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => openConceptModal(digitalMenuConcept)}
                  className="group inline-flex items-center justify-center space-x-3 bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl font-bold text-lg w-fit focus:outline-none focus:ring-4 focus:ring-white/50"
                >
                  <Code className="w-5 h-5" />
                  <span>{digitalMenuConcept.callToAction}</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Visual Side */}
              <div className="relative min-h-[400px] bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-6">
                    <Code className="w-12 h-12 text-white" />
                  </div>
                  <div className="text-white/80 text-lg font-medium">
                    Interactive Prototype
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Modal */}
      {showIframeModal && selectedProject && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4 transition-all duration-300 ease-out"
          onClick={closeModal}
        >
          <div
            className="relative w-full h-full max-w-7xl max-h-[95vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col transform scale-95 animate-in fade-in-90 zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Enhanced Header */}
            <div className="sticky top-0 bg-gradient-to-r from-gray-900 to-green-900 text-white px-6 py-4 flex items-center justify-between z-20">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="text-xl font-bold">{selectedProject.title}</h3>
              </div>
              <button
                onClick={closeModal}
                className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Iframe Container */}
            <div className="flex-grow w-full relative bg-gray-100">
              <iframe
                ref={iframeRef}
                src={modalContentUrl}
                title="Concept Demo"
                onLoad={handleIframeLoad}
                className="absolute inset-0 w-full h-full border-none"
                sandbox="allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}