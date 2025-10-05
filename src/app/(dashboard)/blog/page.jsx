"use client";
import React from "react";
import { BookOpen, PenTool, Sparkles, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated Icon */}
        <div className="relative inline-block mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl animate-float">
            <BookOpen className="w-16 h-16 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl animate-pulse">
            <PenTool className="w-6 h-6 text-white" />
          </div>
          <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center shadow-xl animate-bounce">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Content */}
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Blog Coming Soon
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-3">
          Our blog is being prepared with insightful content!
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mb-8">
          We're working on articles, tutorials, and industry insights to share
          with you. Stay tuned!
        </p>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full w-[45%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
            Progress: 45%
          </p>
        </div>

        {/* Back Button */}
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
