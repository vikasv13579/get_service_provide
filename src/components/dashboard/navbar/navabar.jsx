"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Menu,
  X,
  Home,
  Settings,
  BarChart3,
  User,
  LogIn,
  UserPlus,
} from "lucide-react";
import { useAuth } from "@/lib/use-auth";

export default function Navbar({ onAuthClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser } = useAuth();
  const router = useRouter();

  const links = [
    { name: "Gem Advantage", href: "/dashboard", icon: Home },
    { name: "Service", href: "/service", icon: Settings },
    { name: "Blog", href: "/blog", icon: BarChart3 },
    { name: "Contact", href: "/contact", icon: User },
    { name: "Register Help", href: "/register-help", icon: User },
  ];

  const handleLinkClick = (href) => {
    if (!currentUser) {
      onAuthClick("login", href);
      return;
    }
    router.push(href);
  };

  return (
    <div className="flex items-center">
      <button
        onClick={() => setIsMenuOpen((v) => !v)}
        className="md:hidden p-1.5 sm:p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-nav"
      >
        {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>
      <nav className="hidden md:flex items-center gap-2 lg:gap-4 xl:gap-6">
        {links.map((link) => (
          <button
            key={link.name}
            onClick={() => handleLinkClick(link.href)}
            className="flex items-center gap-1 lg:gap-2 px-2 lg:px-3 py-1.5 lg:py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
          >
            <link.icon size={14} className="lg:w-4 lg:h-4 flex-shrink-0" />
            <span className="text-xs lg:text-sm font-medium whitespace-nowrap">
              {link.name}
            </span>
          </button>
        ))}
        <div className="ml-2 lg:ml-4">
          <ThemeToggle />
        </div>
      </nav>
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 mt-2 mx-3 sm:mx-4 md:mx-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-3 shadow-lg z-50 animate-slide-down animate-fade-in">
          <div className="space-y-1">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  handleLinkClick(link.href);
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 w-full text-left"
              >
                <link.icon size={16} className="flex-shrink-0" />
                <span className="text-sm font-medium">{link.name}</span>
              </button>
            ))}
            <div className="pt-2 mt-2 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-center">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}
