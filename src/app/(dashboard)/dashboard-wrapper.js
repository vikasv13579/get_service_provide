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
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 bg-[#07222e] z-50 h-20 border-b-2 border-border shadow-2xl">
        <Header />
      </header>
      <main className="flex-1 pt-20 pb-8">{children}</main>
      <footer className="w-full border-t border-gray-300 dark:border-gray-700">
        <Footer />
      </footer>
    </div>
  );
}
