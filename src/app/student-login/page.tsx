"use client";
import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaEnvelope, FaKey } from "react-icons/fa";

type Step = "email" | "otp";

interface StudentLoginFormProps {
  // Choose which view to render; default is "email"
  step?: Step;
  // Optional: prefill email shown under OTP field (display only)
  emailHint?: string;
}

export const StudentEmailForm: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <form className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaEnvelope className="h-5 w-5 text-slate-400" />
            </div>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 pl-10 border-2 border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all text-slate-900"
            />
          </div>
        </div>

        <button
          type="button"
          className="w-full inline-flex justify-center items-center px-4 py-3 rounded-lg bg-yellow-500 text-white font-semibold shadow hover:brightness-95 transition"
        >
          <FaEnvelope className="mr-2" />
          Send OTP
        </button>

        <div className="text-center pt-4 border-t border-slate-200">
          <p className="text-sm text-slate-600 mb-2">
            Don&apos;t have an account?
          </p>
          <a
            href="#"
            className="text-yellow-600 hover:text-yellow-700 text-sm font-medium underline"
          >
            Create Account
          </a>
        </div>
      </form>
    </div>
  );
};

export const StudentOtpForm: React.FC<{ emailHint?: string }> = ({
  emailHint,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <form className="space-y-6">
        <div>
          <label
            htmlFor="otp"
            className="block text-sm font-medium text-slate-700 mb-2"
          >
            OTP Code
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaKey className="h-5 w-5 text-slate-400" />
            </div>
            <input
              id="otp"
              name="otp"
              type="text"
              inputMode="numeric"
              placeholder="000000"
              maxLength={6}
              className="w-full px-4 py-3 pl-10 border-2 border-slate-200 rounded-lg text-center text-2xl tracking-widest focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all text-slate-900"
            />
          </div>
          {emailHint && (
            <p className="text-sm text-slate-500 mt-2">
              Enter the 6-digit code sent to {emailHint}
            </p>
          )}
        </div>

        <button
          type="button"
          className="w-full inline-flex justify-center items-center px-4 py-3 rounded-lg bg-yellow-500 text-white font-semibold shadow hover:brightness-95 transition"
        >
          <FaKey className="mr-2" />
          Verify OTP
        </button>

        <div className="text-center space-y-3">
          <a
            href="#"
            className="text-red-600 hover:text-red-700 text-sm font-medium transition-colors"
          >
            Didn&apos;t receive OTP? Resend
          </a>
          <div>
            <a
              href="#"
              className="text-slate-900 hover:text-yellow-600 text-sm font-medium transition-colors"
            >
              ← Back to Email
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

const StudentLoginForm: React.FC<StudentLoginFormProps> = ({
  step = "email",
  emailHint,
}) => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Link
            href="/"
            className="inline-flex items-center text-slate-900 hover:text-yellow-600 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Home
          </Link>

          {/* Simple brand circle (replace with your logo/img if needed) */}
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold text-2xl flex items-center justify-center shadow">
              OI
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900">Student Login</h2>
          <p className="text-slate-600">
            {step === "email"
              ? "Enter your email to receive OTP"
              : "Enter the OTP sent to your email"}
          </p>
        </div>

        {/* Form Card */}
        {step === "email" ? (
          <StudentEmailForm />
        ) : (
          <StudentOtpForm emailHint={emailHint} />
        )}

        {/* Security Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-sm font-medium text-blue-800 mb-2">
            Security Notice
          </h3>
          <ul className="text-xs text-blue-700 space-y-1">
            <li>• OTP is valid for 10 minutes only</li>
            <li>• Do not share your OTP with anyone</li>
            <li>
              • Check your spam folder if you don&apos;t receive the email
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentLoginForm;
