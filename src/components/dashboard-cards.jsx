"use client";
import { useState } from "react";
import {
  FileCheck,
  Upload,
  Gavel,
  ClipboardCheck,
  FileText,
  Building2,
} from "lucide-react";

const DashboardCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const servicesData = [
    {
      title: "GeM Portal Registration",
      description: "Get registered on GeM with our GeM registration services.",
      icon: FileCheck,
      color: "bg-orange-500",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Upload Products Or Services",
      description:
        "Make your products & services live on GeM & sell to all government departments.",
      icon: Upload,
      color: "bg-blue-500",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Bidding On GeM Portal",
      description: "Bid on the e tenders you want to on the GeM portal.",
      icon: Gavel,
      color: "bg-purple-500",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Vendor Assessment Guidance",
      description:
        "We will guide you through all the requirements and process of Vendor Assessment on GeM portal.",
      icon: ClipboardCheck,
      color: "bg-green-500",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "GST Registration",
      description:
        "Register your company or business with the GST registration certificate.",
      icon: FileText,
      color: "bg-indigo-500",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      title: "MSME Registration",
      description: "Get registered with MSME.",
      icon: Building2,
      color: "bg-rose-500",
      gradient: "from-rose-500 to-red-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {servicesData.map((service, index) => {
        const IconComponent = service.icon;
        const isHovered = hoveredCard === index;

        return (
          <div
            key={index}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeIn cursor-pointer overflow-hidden"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            {/* Background gradient overlay on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
            />

            {/* Spinning border effect */}
            <div
              className={`absolute inset-0 rounded-xl border-2 border-transparent ${
                isHovered ? "animate-spin-slow border-opacity-20" : ""
              }`}
              style={{
                borderImage: isHovered
                  ? `linear-gradient(45deg, ${service.color}, transparent) 1`
                  : "none",
              }}
            />

            <div className="relative z-10">
              {/* Icon section */}
              <div className="flex items-center justify-center mb-6">
                <div
                  className={`p-4 rounded-full ${
                    service.color
                  } bg-gradient-to-br ${
                    service.gradient
                  } transform transition-all duration-500 ${
                    isHovered ? "scale-110 animate-pulse" : ""
                  }`}
                >
                  <IconComponent
                    className={`w-8 h-8 text-white transition-transform duration-500 ${
                      isHovered ? "animate-spin-slow" : ""
                    }`}
                  />
                </div>
              </div>

              {/* Content section */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>

              {/* Animated dots indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {[0, 1, 2].map((dot) => (
                  <div
                    key={dot}
                    className={`w-2 h-2 rounded-full ${
                      service.color
                    } transition-all duration-300 ${
                      isHovered ? "animate-bounce" : "opacity-40"
                    }`}
                    style={{
                      animationDelay: `${dot * 100}ms`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardCards;
