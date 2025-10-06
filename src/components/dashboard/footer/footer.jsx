// src/components/dashboard/footer/footer.js
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white transition-all duration-300 border-t border-gray-200 dark:border-gray-700">
      <div className="w-full px-6 md:px-12 lg:px-16 py-12 lg:py-16">
        <div className="w-full">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            {/* Brand & Description */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center mb-5 group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  G
                </div>
                <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
                  GeMCore
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Leading gem and mineral solutions provider, delivering
                excellence in quality, service, and innovation since 2020.
              </p>
              <div className="mt-6 flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:shadow-lg transform hover:scale-110 transition-all duration-300 cursor-pointer">
                  <span className="text-xl">🏆</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center text-green-600 dark:text-green-400 hover:shadow-lg transform hover:scale-110 transition-all duration-300 cursor-pointer">
                  <span className="text-xl">⭐</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center text-purple-600 dark:text-purple-400 hover:shadow-lg transform hover:scale-110 transition-all duration-300 cursor-pointer">
                  <span className="text-xl">💎</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-gray-900 dark:text-white font-bold mb-5 text-base flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></span>
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/dashboard"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 rounded-full transition-all duration-300"></span>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 rounded-full transition-all duration-300"></span>
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gem-advantages"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 rounded-full transition-all duration-300"></span>
                    Gem Advantages
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 rounded-full transition-all duration-300"></span>
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-gray-900 dark:text-white font-bold mb-5 text-base flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></span>
                Support
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 rounded-full transition-all duration-300"></span>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/register-help"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 rounded-full transition-all duration-300"></span>
                    Register Help
                  </Link>
                </li>
                <li>
                  <span className="text-gray-600 dark:text-gray-400 text-sm cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-all flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 rounded-full transition-all duration-300"></span>
                    FAQ
                  </span>
                </li>
                <li>
                  <span className="text-gray-600 dark:text-gray-400 text-sm cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-all flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-600 rounded-full transition-all duration-300"></span>
                    Help Center
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-gray-900 dark:text-white font-bold mb-5 text-base flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></span>
                Contact Info
              </h3>
              <ul className="space-y-4">
                <li className="text-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">📧</span>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">
                      Email
                    </span>
                  </div>
                  <a
                    href="mailto:support@gemcore.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    support@gemcore.com
                  </a>
                </li>
                <li className="text-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">📞</span>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">
                      Phone
                    </span>
                  </div>
                  <a
                    href="tel:+15551234567"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    +91 9199176163
                  </a>
                </li>
                <li className="text-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">📍</span>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">
                      Address
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    125 Chhattarpur encalve
                    <br />
                    New Delhi, India 110074
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 dark:border-gray-800 pt-8 mt-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Copyright */}
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium">© 2025 GeMCore Solutions.</span>
                <span className="mx-2">•</span>
                <span>Crafted with ❤️ by our team</span>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:shadow-lg transform hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-100 to-sky-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center text-sky-600 dark:text-sky-400 hover:shadow-lg transform hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center text-blue-700 dark:text-blue-400 hover:shadow-lg transform hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-100 to-rose-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center text-pink-600 dark:text-pink-400 hover:shadow-lg transform hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
