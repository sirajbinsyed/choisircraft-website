"use client";

import { useState, useEffect, useRef } from "react"; // Import useRef
import Image from "next/image";
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
  ExternalLink, // Import ExternalLink for demos
  Github, // Import Github for code links
} from "lucide-react";

export default function PortfolioPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContentUrl, setModalContentUrl] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showIframeModal, setShowIframeModal] = useState(false); // State for iframe modal
  const iframeRef = useRef(null); // Ref for iframe element

  const defaultImage = "/placeholder.svg";

  const projects = [
    {
      id: 1,
      title: "Adstudio (Menswear E-commerce)",
      description:
        "Full-fledged e-commerce website for a menswear brand, featuring product catalog, secure checkout, and order management.",
      longDescription:
        "Adstudio, a stylish menswear brand based in Kochi, required an online presence that matched their sophisticated image. We developed a comprehensive e-commerce platform, enabling them to showcase their collections, manage inventory, process secure online payments, and handle customer orders efficiently. The design emphasizes user experience, mobile responsiveness, and seamless navigation to drive sales.",
      coverImage: "/adstudios.png",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma", "Tailwind CSS"],
      features: [
        "Product Catalog & Filtering",
        "Shopping Cart & Secure Checkout",
        "Payment Gateway Integration (Stripe)",
        "Order Management Dashboard",
        "User Account Management",
        "Responsive Design",
        "Customer Support Chat Integration",
      ],
      websiteUrl: "https://adstudios.in/",
      githubUrl: null,
      client: "Adstudio, Kochi",
    },
    {
      id: 2,
      title: "BakeCity Hyper (Restaurant & Hotel)",
      description:
        "Integrated website for a restaurant, hotel, and bakery, showcasing services, menus, and booking.",
      longDescription:
        "BakeCity Hyper in Calicut sought a unified online platform to represent their multifaceted business – a restaurant, hotel, and bakery. Our solution provides an elegant website with detailed sections for each service. Diners can browse menus, while guests can explore accommodation and make bookings. The platform aims to attract and inform customers about their diverse offerings, enhancing their brand presence.",
      coverImage: "/bakecity.png",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      features: [
        "Restaurant Menu Showcase",
        "Hotel Booking & Room Management",
        "Bakery Product Display",
        "Contact & Location Integration",
        "Customer Inquiry Form",
        "Photo Gallery",
      ],
      websiteUrl: "https://bakecityhyper.com/",
      githubUrl: null,
      client: "BakeCity Hyper, Calicut",
    },
    {
      id: 3,
      title: "Mahesh GANGADHARAN (Portrait Artist)",
      description:
        "Artist portfolio website to showcase his renowned portrait works and facilitate inquiries.",
      longDescription:
        "Mahesh GANGADHARAN, a celebrated portrait artist, needed a sophisticated digital gallery to display his impressive body of work. We created a visually stunning portfolio website that highlights his artistry with high-resolution image galleries, detailed project descriptions, and an intuitive interface for potential clients to inquire about commissions. The design reflects the elegance and skill of his portraits.",
      coverImage: "/maheshgangatharan.png",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      features: [
        "High-Resolution Image Gallery",
        "Artwork Categorization",
        "Artist Biography & Philosophy",
        "Commission Inquiry Form",
        "Testimonials Section",
      ],
      websiteUrl: "https://sirajbinsyed.github.io/mahesh/",
      githubUrl: "https://github.com/sirajbinsyed/mahesh",
      client: "Mahesh GANGADHARAN, Portrait Artist",
    },
  ];

  const digitalMenuConcept = {
    title: "Digital Menu Concept",
    description:
      "Revolutionize your restaurant's ordering and customer experience with our interactive digital menu solution.",
    features: [
      "Interactive Dish Browsing",
      "Seamless QR Code Ordering",
      "Real-time Order Management",
      "Payment Gateway Integration",
      "Customizable UI/UX",
      "Staff Panel & Analytics",
    ],
    callToAction: "See Our Concept",
    externalLinkUrl:
      "https://sirajbinsyed.github.io/restaurant_menu_system_plans/", // URL for the concept demo
  };

  type Project = {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    coverImage: string;
    technologies: string[];
    features: string[];
    websiteUrl: string | null;
    githubUrl: string | null;
    client: string;
  };

  const openProjectModal = (project: Project) => {
    setModalContentUrl(project.websiteUrl || "");
    setIsModalOpen(true);
    setSelectedProject(project);
    setShowIframeModal(false); // Ensure iframe modal is closed when opening project modal
  };

  const openConceptModal = (concept: typeof digitalMenuConcept) => {
    setModalContentUrl(concept.externalLinkUrl); // This will be the iframe URL
    setShowIframeModal(true); // Open the iframe modal
    setSelectedProject({
      id: 999,
      title: concept.title,
      description: concept.description,
      longDescription: concept.description,
      coverImage: "/placeholder.svg",
      technologies: [],
      features: concept.features,
      websiteUrl: concept.externalLinkUrl,
      githubUrl: null,
      client: "Concept Demo",
    }); // Set selected project for title and description
    setIsModalOpen(false); // Close the other modal if it was open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowIframeModal(false); // Close iframe modal
    setModalContentUrl("");
    setSelectedProject(null);
  };

  // Function to handle iframe load
  const handleIframeLoad = () => {
    // If you want to perform actions after the iframe loads, you can do it here.
    // For now, it's just a placeholder.
  };

  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-blue-400 rounded-full animate-float"
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
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 text-center mb-6">
            Our Showcase
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
            Exploring our key projects that highlight our expertise in crafting
            tailored digital solutions for businesses and artists alike.
          </p>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 flex flex-col justify-between cursor-pointer"
                onClick={() => openProjectModal(project)}
              >
                <div className="relative h-56">
                  <Image
                    src={project.coverImage || defaultImage}
                    alt={project.title || "Project Image"}
                    layout="fill"
                    objectFit="contain"
                    className="group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.srcset = defaultImage;
                      img.src = defaultImage;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-800 shadow-sm">
                      {project.client}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-grow">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      {project.title.includes("Adstudio")
                        ? "E-commerce"
                        : project.title.includes("BakeCity")
                        ? "Service Platform"
                        : project.title.includes("Mahesh")
                        ? "Portfolio"
                        : "Project"}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500 mt-auto">
                    <div className="flex space-x-2">
                      {project.websiteUrl && (
                        <a
                          href={project.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-1 group/link"
                          onClick={(e) => e.stopPropagation()} // Prevent opening project modal
                        >
                          <span className="group-hover/link:underline">Website</span>{" "}
                          <ExternalLink className="w-3 h-3 opacity-70 group-hover/link:opacity-100" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-gray-900 font-medium flex items-center space-x-1 group/code"
                          onClick={(e) => e.stopPropagation()} // Prevent opening project modal
                        >
                          <span className="group-hover/code:underline">Code</span>{" "}
                          <Github className="w-3 h-3 opacity-70 group-hover/code:opacity-100" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      

      {/* Modal for Project Details */}
      {isModalOpen && selectedProject && !showIframeModal && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 ease-in-out"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transition-transform duration-300 ease-in-out transform scale-95 opacity-0 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between z-10">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedProject.title}
              </h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="lg:order-last">
                  <div className="relative h-64 rounded-xl overflow-hidden mb-6 border border-gray-200 shadow-sm">
                    <Image
                      src={selectedProject.coverImage || defaultImage}
                      alt={selectedProject.title || "Project Image"}
                      layout="fill"
                      objectFit="contain"
                      className="hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.srcset = defaultImage;
                        img.src = defaultImage;
                      }}
                    />
                  </div>

                  <div className="space-y-5">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 border-b pb-1 border-gray-200">
                        Project Overview
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {selectedProject.longDescription}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 border-b pb-1 border-gray-200">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies &&
                          selectedProject.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 border-b pb-1 border-gray-200">
                        Project Details
                      </h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>
                          <span className="font-medium text-gray-800">Client:</span>{" "}
                          {selectedProject.client}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 border-b pb-1 border-gray-200">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 gap-2 mb-6">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {selectedProject.websiteUrl && (
                    <a
                      href={selectedProject.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md mb-4 w-full"
                      onClick={(e) => e.stopPropagation()} // Prevent closing modal
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Visit {selectedProject.title.split(" ")[0]}'s Website</span>
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors duration-300 shadow-md w-full"
                      onClick={(e) => e.stopPropagation()} // Prevent closing modal
                    >
                      <Github className="w-4 h-4" />
                      <span>View {selectedProject.title.split(" ")[0]}'s Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* NEW Modal for Iframe Content */}
      {showIframeModal && selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex items-center justify-center p-8 transition-opacity duration-300 ease-in-out"
          onClick={closeModal} // Close when clicking outside
        >
          <div
            className="relative w-full h-full max-w-6xl max-h-[90vh] bg-white rounded-xl shadow-xl overflow-hidden flex flex-col" // Added flex flex-col for header and iframe
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing
          >
            <div className="sticky top-0 bg-gray-800 text-white px-6 py-4 flex items-center justify-between z-20 rounded-t-xl">
              <h3 className="text-xl font-semibold">{selectedProject.title} Demo</h3>
              <button
                onClick={closeModal}
                className="p-2 rounded-full bg-red-600 hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-grow w-full relative"> {/* Changed to flex-grow and relative for iframe */}
              <iframe
                ref={iframeRef}
                src={modalContentUrl}
                title="Concept Demo"
                onLoad={handleIframeLoad}
                className="absolute inset-0 rounded-b-xl border-none" // Use absolute positioning to fill the parent div
                sandbox="allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin" // Enhance security
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}