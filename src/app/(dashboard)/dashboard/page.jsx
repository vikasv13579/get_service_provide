"use client";
import { User, BarChart3, FileText, DollarSign } from "lucide-react";
import Carousel from "../../../components/carousel";
import DashboardCards from "../../../components/dashboard-cards";

export default function DashboardPage() {
  // SVG images data for the carousel
  const carouselImages = [
    {
      src: "/assets/banner.svg",
      alt: "Banner",
    },
    {
      src: "/assets/dashboard1.svg",
      alt: "Dashboard Overview 1",
    },
    {
      src: "/assets/dashboard3.svg",
      alt: "Dashboard Overview 3",
    },
    {
      src: "/assets/precedure.svg",
      alt: "Procedure Diagram",
    },
  ];

  return (
    <div className="space-y-1">
      <div className="mb-2">
        <Carousel images={carouselImages} autoPlay={true} interval={2500} />
      </div>
      <div className="px-2 pb-2">
        <DashboardCards />
      </div>
    </div>
  );
}
