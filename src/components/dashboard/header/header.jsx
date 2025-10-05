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
    <header className="w-full h-16 sm:h-20 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
      <div className="h-full flex justify-between items-center px-3 sm:px-4 md:px-6 py-2 sm:py-4">
        {/* Brand */}
        <div className="flex items-center min-w-0 flex-1 md:flex-none">
          <div className="min-w-0">
            <Link href="/">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate">
                Gem Services
              </h1>
            </Link>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-0.5 sm:mt-1 hidden sm:block"></p>
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
            <button
              onClick={() => handleAuthClick("signup")}
              className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer text-xs sm:text-sm p-1 sm:p-2 rounded-lg"
            >
              <span>Sign Up</span>
            </button>
          </div>
        )}
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
