"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/dashboard/header/header";
import Footer from "@/components/dashboard/footer/footer";

function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>
  );
}

export default function DashboardLayout({ children }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return <LoadingSpinner />;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-blue-50/20 to-purple-50/20 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      <header className="fixed top-0 left-0 right-0 z-50 shadow-xl">
        <Header />
      </header>
      <main className="flex-1 pt-32 md:pt-36 pb-12 min-h-screen">
        <div className="animate-fade-in">
          {children}
        </div>
      </main>
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}
