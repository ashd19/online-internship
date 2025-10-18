"use client";
import Link from "next/link";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white stick y top-0 z-50 border-b-2 border-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            {/* Use plain img so the data-URI in public/logo.txt loads without Image optimizations */}
            <img
              src={"./logo.svg"}
              alt="OnlyInternship logo"
              className="h-10 w-10 rounded-full object-cover"
              width={40}
              height={40}
            />
            <span className="text-2xl font-bold text-slate-800">
              OnlyInternship.in
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/features"
              className="text-slate-700 hover:text-yellow-600 transition-colors"
            >
              Features
            </a>
            <a
              href="/pricing"
              className="text-slate-700 hover:text-yellow-600 transition-colors"
            >
              Pricing
            </a>
            <a
              href="/contact"
              className="text-slate-700 hover:text-yellow-600 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* CTA Buttons (desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#student-login"
              className="inline-block px-4 py-2 rounded-lg border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white transition"
            >
              Student Login
            </a>
            <a
              href="#admin-login"
              className="inline-block px-4 py-2 rounded-lg bg-yellow-500 text-white shadow hover:brightness-95 transition"
            >
              Admin Login
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="text-slate-700 hover:text-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <a
                href="#home"
                className="block px-3 py-2 text-slate-700 hover:bg-yellow-50 rounded"
              >
                Home
              </a>
              <a
                href="#features"
                className="block px-3 py-2 text-slate-700 hover:bg-yellow-50 rounded"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-slate-700 hover:bg-yellow-50 rounded"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-slate-700 hover:bg-yellow-50 rounded"
              >
                Contact
              </a>

              <div className="pt-4 space-y-2">
                <a
                  href="#student-login"
                  className="block w-full text-center px-4 py-2 rounded-lg border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white transition"
                >
                  Student Login
                </a>
                <a
                  href="#admin-login"
                  className="block w-full text-center px-4 py-2 rounded-lg bg-yellow-500 text-white shadow hover:brightness-95 transition"
                >
                  Admin Login
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
