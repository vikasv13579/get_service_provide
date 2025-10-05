// src/components/dashboard/header/header.js
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/dashboard/navbar/navabar";
import AuthModal from "@/components/auth-modal";
import { UserPlus, LogOut, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/use-auth";

export default function Header() {
  const router = useRouter();
  const { currentUser, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [redirectTo, setRedirectTo] = useState(null);

  const handleLogout = async () => {
    try {
      await logout();
      // Stay on the same page after logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleAuthClick = (mode, redirectUrl = null) => {
    setAuthMode(mode);
    setRedirectTo(redirectUrl);
    setShowAuthModal(true);
  };

  return (
    <header className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
      {/* Main Header Content */}
      <div className="h-16 sm:h-20 flex justify-between items-center px-3 sm:px-4 md:px-6 py-2 sm:py-4">
        {/* Brand */}
        <div className="flex items-center min-w-0 flex-1 md:flex-none">
          <div className="min-w-0">
            <Link href="/dashboard" className="group block">
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Iconic Logo */}
                <div className="relative">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg transform group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                    {/* Letter G */}
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.54 0 3-.35 4.29-.99L15 19.72c-.89.43-1.91.68-3 .68-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6v.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5V12c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c1.05 0 2-.41 2.71-1.08.27.65.92 1.08 1.79 1.08 1.38 0 2.5-1.12 2.5-2.5V12c0-5.52-4.48-10-10-10z" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  </div>

                  {/* Active Status Dot */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-green-500 animate-pulse">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-300 absolute top-0.5 left-0.5 sm:top-0.5 sm:left-0.5"></div>
                  </div>
                </div>

                {/* Enhanced Brand Text */}
                <div className="flex flex-col">
                  <h1 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-blue-800 dark:group-hover:from-blue-300 dark:group-hover:via-purple-300 dark:group-hover:to-blue-400 transition-all duration-300 truncate">
                    GeMCore Solutions
                  </h1>
                  <div className="flex items-center gap-1 mt-0.5">
                    <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60 group-hover:opacity-100 group-hover:w-16 sm:group-hover:w-20 transition-all duration-300"></div>
                    <span className="text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Premium
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <Navbar onAuthClick={handleAuthClick} />

        {/* User Menu */}
        {currentUser ? (
          <div className="relative flex-shrink-0 ml-2 sm:ml-4">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-1 sm:gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer p-1 sm:p-2 rounded-lg"
            >
              <User size={16} className="flex-shrink-0" />
              <span className="hidden sm:inline text-sm truncate max-w-[100px] lg:max-w-none">
                {currentUser.displayName || currentUser.email || "User"}
              </span>
            </button>

            {showUserMenu && (
              <div className="absolute right-0 top-full mt-2 w-48 sm:w-56 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                <div className="py-1">
                  <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                    <div className="font-medium text-gray-900 dark:text-white truncate">
                      {currentUser.displayName || "User"}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {currentUser.email}
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
                  >
                    <LogOut size={14} />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0 ml-2 sm:ml-4">
            <button
              onClick={() => handleAuthClick("login")}
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer p-1 sm:p-2 rounded-lg"
            >
              <UserPlus size={16} className="flex-shrink-0" />
              <span className="text-xs sm:text-sm">Login</span>
            </button>
            {/* <button
              onClick={() => handleAuthClick("signup")}
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer text-xs sm:text-sm p-1 sm:p-2 rounded-lg"
            >
              <span>Sign Up</span>
            </button> */}
          </div>
        )}
      </div>

      {/* Marquee Banner */}
      <div className="w-full bg-yellow-50 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 border-t border-yellow-100 dark:border-yellow-800 py-2">
        <div className="overflow-hidden">
          <div className="animate-marquee whitespace-nowrap text-sm">
            🌐 Our expert team is available 24×7 to assist you with all your
            technical needs and services. 📞 Contact us anytime at +91 99176
            16163 or 📧 email us at zemtechexperts@gmail.com. 💡 Whether you
            need immediate support, professional guidance, or reliable service —
            we're here to help you around the clock!
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        defaultMode={authMode}
        redirectTo={redirectTo}
      />
    </header>
  );
}
