// src/components/dashboard/footer/footer.js
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <div className="h-full bg-gray-900 text-white">
      <div className="h-full flex items-center justify-center px-6">
        <div className="w-full max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Brand */}
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold mr-3">
                N
              </div>
              <span className="text-sm text-gray-300">
                © 2025 NetAI Services. All rights reserved.
              </span>
            </div>

            {/* Links */}
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
