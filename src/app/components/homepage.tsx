"use client";
import React, { useState } from "react";
import {
  FaGraduationCap,
  FaUserShield,
  FaClock,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import ChatBot from "./chatbot";
import Link from "next/link";

const HomePage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      <ChatBot />
      
      {/* Hero Section - Matching header yellow theme */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-yellow-50 via-white to-yellow-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            Online Internship Test Platform
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-slate-700">
            Take your internship assessment online with our secure, proctored
            testing platform. Get instant results and merit-based rankings.
          </p>

          {/* Test Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-yellow-200 hover:shadow-xl hover:border-yellow-400 transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <FaClock className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">
                35 Questions
              </h3>
              <p className="text-slate-600">Comprehensive assessment</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-yellow-200 hover:shadow-xl hover:border-yellow-400 transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <FaClock className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">
                30 Minutes
              </h3>
              <p className="text-slate-600">Timed assessment</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-yellow-200 hover:shadow-xl hover:border-yellow-400 transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <MdPayment className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">
                ₹250 + GST
              </h3>
              <p className="text-slate-600">One-time fee</p>
            </div>
          </div>

          {/* Login Buttons - Matching header button styles */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/student/login"
              className="bg-yellow-500 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:brightness-95 hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-3"
            >
              <FaGraduationCap className="text-2xl" />
              <span>Student Login</span>
            </Link>
            <Link
              href="/admin/login"
              className="border-2 border-yellow-500 text-yellow-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 hover:text-white hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-3"
            >
              <FaUserShield className="text-2xl" />
              <span>Admin Login</span>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section - Consistent styling */}
      <section className="py-20 bg-gradient-to-b from-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
            How It Works
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-yellow-300 transform -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Step 1 */}
              <div className="text-center relative">
                <div className="bg-yellow-500 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-white relative z-10">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-yellow-200 hover:border-yellow-400 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    Register & Login
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Create your account with email verification and secure OTP
                    authentication.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="text-center relative">
                <div className="bg-yellow-500 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-white relative z-10">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-yellow-200 hover:border-yellow-400 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    Complete Profile
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Fill in your details and agree to terms before proceeding to
                    the test.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="text-center relative">
                <div className="bg-yellow-500 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-white relative z-10">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-yellow-200 hover:border-yellow-400 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    Take the Test
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Complete 35 questions in 30 minutes with secure
                    anti-cheating monitoring.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="text-center relative">
                <div className="bg-yellow-500 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-white relative z-10">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-yellow-200 hover:border-yellow-400 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    Get Results
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Receive instant results with detailed analysis and
                    merit-based ranking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Matching header styling */}
      <footer className="bg-white border-t-2 border-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg mr-4 border-2 border-yellow-300">
                  <span className="text-white font-bold text-xl">O</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    OnlyInternship.in
                  </h3>
                  <p className="text-sm text-yellow-600 font-medium">
                    Yuga Yatra Retail (OPC) Private Limited
                  </p>
                </div>
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Secure online internship assessment platform with advanced
                anti-cheating technology and instant results for merit-based
                rankings. Professional testing solutions for modern educational
                needs.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-slate-700 hover:text-yellow-600 transition-colors font-medium"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-conditions"
                    className="text-slate-700 hover:text-yellow-600 transition-colors font-medium"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/student/login"
                    className="text-slate-700 hover:text-yellow-600 transition-colors font-medium"
                  >
                    Student Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/login"
                    className="text-slate-700 hover:text-yellow-600 transition-colors font-medium"
                  >
                    Admin Login
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-6">
                Contact
              </h4>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="font-medium">Email:</span>
                  <span className="ml-2">support@onlyinternship.in</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium">Phone:</span>
                  <span className="ml-2">+91-XXXXXXXXXX</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium">Address:</span>
                  <span className="ml-2">
                    Yuga Yatra Retail (OPC) Private Limited
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t-2 border-yellow-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-700 text-sm font-medium">
              © 2024 OnlyInternship.in. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-slate-700 text-sm font-medium">
                GST Compliant
              </span>
              <span className="text-yellow-500">•</span>
              <span className="text-slate-700 text-sm font-medium">
                Secure Platform
              </span> 
              <span className="text-yellow-500">•</span>
              <span className="text-slate-700 text-sm font-medium">
                Anti-Cheating
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;