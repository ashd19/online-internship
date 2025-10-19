"use client";
import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaEnvelope, FaLock, FaUserShield } from "react-icons/fa";

const AdminLoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Link
            href="/"
            className="inline-flex items-center text-slate-300 hover:text-yellow-400 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Home
          </Link>

          {/* Admin Badge Icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 text-white flex items-center justify-center shadow-2xl">
              <FaUserShield className="text-4xl" />
            </div>
          </div>

          <h2 className="text-4xl font-bold text-white">Admin Login</h2>
          <p className="text-slate-400">
            Secure access for administrators only
          </p>
        </div>

        {/* Login Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
          <form className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="admin@onlyinternship.in"
                  className="w-full px-4 py-3 pl-12 bg-slate-50 border-2 border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent focus:bg-white transition-all text-slate-900"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 pl-12 bg-slate-50 border-2 border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent focus:bg-white transition-all text-slate-900"
                />
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-slate-300 rounded cursor-pointer"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-slate-700 cursor-pointer"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-yellow-600 hover:text-yellow-700 transition-colors"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="button"
              className="w-full inline-flex justify-center items-center px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-bold text-lg shadow-lg hover:from-yellow-500 hover:to-yellow-600 hover:shadow-xl transition-all duration-300"
            >
              <FaUserShield className="mr-2" />
              Sign In as Admin
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-center text-sm text-slate-600">
              Not an admin?{" "}
              <a
                href="/student-login"
                className="font-medium text-yellow-600 hover:text-yellow-700 transition-colors"
              >
                Student Login
              </a>
            </p>
          </div>
        </div>

        {/* Security Notice */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-yellow-400 mb-2 flex items-center">
            <FaLock className="mr-2" />
            Security Notice
          </h3>
          <ul className="text-xs text-slate-300 space-y-1">
            <li>• Admin access is monitored and logged</li>
            <li>• Use strong passwords and enable 2FA</li>
            <li>• Never share your credentials with anyone</li>
            <li>• Contact IT support for access issues</li>
          </ul>
        </div>

        {/* Footer Note */}
        <div className="text-center">
          <p className="text-xs text-slate-500">
            Protected by enterprise-grade security
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
