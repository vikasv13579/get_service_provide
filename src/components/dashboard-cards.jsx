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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {servicesData.map((service, index) => {
        const IconComponent = service.icon;
        const isHovered = hoveredCard === index;

        return (
          <div
            key={index}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-fadeIn cursor-pointer overflow-hidden hover:border-transparent"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            {/* Gradient border effect */}
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
              style={{ padding: "2px" }}
            />

            {/* Background gradient overlay on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
            />

            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>

            <div className="relative z-10">
              {/* Icon section */}
              <div className="flex items-center justify-center mb-6">
                <div
                  className={`p-5 rounded-2xl bg-gradient-to-br ${
                    service.gradient
                  } shadow-lg transform transition-all duration-500 ${
                    isHovered ? "scale-110 rotate-6" : ""
                  }`}
                >
                  <IconComponent
                    className={`w-9 h-9 text-white transition-transform duration-500 ${
                      isHovered ? "scale-110" : ""
                    }`}
                  />
                </div>
              </div>

              {/* Content section */}
              <div className="text-center">
                <h3
                  className={`text-xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-300 ${
                    isHovered
                      ? "bg-gradient-to-r bg-clip-text text-transparent"
                      : ""
                  }`}
                  style={
                    isHovered
                      ? {
                          backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                        }
                      : {}
                  }
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>

              {/* Action indicator */}
              <div className="flex justify-center items-center mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 group-hover:border-transparent transition-all duration-300">
                <span
                  className={`text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    isHovered
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
                      : "text-gray-400 dark:text-gray-500"
                  }`}
                >
                  Learn More →
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardCards;
