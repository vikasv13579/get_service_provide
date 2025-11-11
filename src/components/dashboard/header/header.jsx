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
      router.push("/dashboard");
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
    <header className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg transition-all duration-300">
      {/* Main Header Content */}
      <div className="h-16 sm:h-20 flex justify-between items-center px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-4">
        {/* Brand */}
        <div className="flex items-center min-w-0 flex-1 md:flex-none">
          <div className="min-w-0">
            <Link href="/dashboard" className="group block">
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Iconic Logo */}
                <div className="relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 shadow-xl transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-500 flex items-center justify-center relative overflow-hidden">
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                    {/* Letter G */}
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white relative z-10"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.54 0 3-.35 4.29-.99L15 19.72c-.89.43-1.91.68-3 .68-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6v.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5V12c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c1.05 0 2-.41 2.71-1.08.27.65.92 1.08 1.79 1.08 1.38 0 2.5-1.12 2.5-2.5V12c0-5.52-4.48-10-10-10z" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  </div>

                  {/* Active Status Dot */}
                  <div className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse shadow-lg">
                    <div className="w-2.5 h-2.5 rounded-full bg-white absolute top-0.5 left-0.5"></div>
                  </div>
                </div>

                {/* Enhanced Brand Text */}
                <div className="flex flex-col">
                  <h1 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-blue-800 dark:group-hover:from-blue-300 dark:group-hover:via-purple-300 dark:group-hover:to-blue-400 transition-all duration-300 truncate">
                    GeMCore
                  </h1>
                  <div className="flex items-center gap-1 mt-0.5">
                    <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60 group-hover:opacity-100 group-hover:w-16 sm:group-hover:w-20 transition-all duration-300"></div>
                    {/* <span className="text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"> */}
                      {/* Premium */}
                    {/* </span> */}
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
              className="flex items-center gap-1 sm:gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 hover:from-blue-100 hover:to-purple-100 dark:hover:from-gray-700 dark:hover:to-gray-600 border border-gray-200 dark:border-gray-600 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                {(currentUser.displayName || currentUser.email || "U")
                  .charAt(0)
                  .toUpperCase()}
              </div>
              <span className="hidden sm:inline text-sm font-medium text-gray-700 dark:text-gray-200 truncate max-w-[100px] lg:max-w-none">
                {currentUser.displayName || currentUser.email || "User"}
              </span>
            </button>

            {showUserMenu && (
              <div className="absolute right-0 top-full mt-3 w-56 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 animate-slide-down overflow-hidden">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 border-b border-gray-200 dark:border-gray-700">
                  <div className="font-semibold text-gray-900 dark:text-white truncate">
                    {currentUser.displayName || "User"}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 truncate mt-1">
                    {currentUser.email}
                  </div>
                </div>
                <div className="p-2">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex items-center gap-3 rounded-xl font-medium"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 ml-2 sm:ml-4">
            <button
              onClick={() => handleAuthClick("login")}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              <UserPlus size={16} className="flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">Login</span>
            </button>
          </div>
        )}
      </div>

      {/* Marquee Banner */}
      <div className="w-full bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 dark:from-yellow-900/30 dark:via-amber-900/30 dark:to-yellow-900/30 border-t border-amber-200/50 dark:border-yellow-700/50 py-2.5 shadow-inner">
        <div className="overflow-hidden">
          <div className="animate-marquee whitespace-nowrap text-sm font-medium">
            <span className="text-amber-800 dark:text-amber-200">
              🌐 Our expert team is available 24×7 to assist you with all your
              technical needs and services.
            </span>
            <span className="mx-4 text-amber-600 dark:text-amber-300">•</span>
            <span className="text-amber-800 dark:text-amber-200">
              📞 Contact us anytime at{" "}
              <span className="font-semibold">+91 9199176163</span>
            </span>
            <span className="mx-4 text-amber-600 dark:text-amber-300">•</span>
            <span className="text-amber-800 dark:text-amber-200">
              📧 Email:{" "}
              <span className="font-semibold">zemtechexperts@gmail.com</span>
            </span>
            <span className="mx-4 text-amber-600 dark:text-amber-300">•</span>
            <span className="text-amber-800 dark:text-amber-200">
              💡 Whether you need immediate support, professional guidance, or
              reliable service — we're here to help you around the clock!
            </span>
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
