"use client";
import { User, BarChart3, FileText, DollarSign } from "lucide-react";
import Carousel from "../../../components/carousel";
import DashboardCards from "../../../components/dashboard-cards";

export default function DashboardPage() {
  // SVG images data for the carousel
  const carouselImages = [
    {
      src: "/assets/dashboar13.png",
      alt: "Dashboard Overview 1",
    },
    {
      src: "/assets/dashboard.png",
      alt: "Dashboard Overview 3",
    },
    {
      src: "/assets/main.jpg",
      alt: "Procedure Diagram",
    },
    {
      src: "/assets/dashboar12.png",
      alt: "Banner",
    },
  ];

  return (
    <div className="space-y-8 md:space-y-12">
      <div className="px-4 md:px-6 lg:px-8">
        <Carousel images={carouselImages} autoPlay={true} interval={3000} />
      </div>

      {/* Services Section */}
      <div className="px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
            Our Premium Services
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Discover our comprehensive range of services designed to help your
            business thrive in the digital era
          </p>
        </div>
        <DashboardCards />
      </div>
    </div>
  );
}
