"use client";

import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaArrowLeft, FaEnvelope, FaKey } from "react-icons/fa";

type Step = "email" | "otp";

export default function StudentLoginPage() {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/student-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data?.message || "Failed to send OTP");
        return;
      }

      toast.success(data?.message || "OTP sent successfully");
      setStep("otp");
    } catch (error) {
      console.error("Error in student login:", error);
      toast.error("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // TODO: Implement OTP verification API call
      console.log("Verifying OTP:", otp, "for email:", email);
      toast.success("OTP verified successfully!");
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error("Invalid OTP. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleResendOtp = async () => {
    setSubmitting(true);
    try {
      const response = await fetch("/api/student-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data?.message || "Failed to resend OTP");
        return;
      }

      toast.success("OTP resent successfully");
    } catch (error) {
      console.error("Error resending OTP:", error);
      toast.error("Failed to resend OTP");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          {/* Header Section */}
          <header className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold text-2xl flex items-center justify-center shadow">
                OI
              </div>
            </div>
            <h1 className="text-3xl font-bold text-slate-900">Student Login</h1>
            <p className="text-slate-600">
              {step === "email"
                ? "Enter your email to receive OTP"
                : "Enter the OTP sent to your email"}
            </p>
          </header>
          {/* Form Section */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            {step === "email" ? (
              // Email Form
              <form className="space-y-6" onSubmit={handleEmailSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope
                        className="h-5 w-5 text-slate-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      disabled={submitting}
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 pl-10 border-2 border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all text-slate-900 disabled:opacity-60 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={submitting || !email}
                  className="w-full inline-flex justify-center items-center px-4 py-3 rounded-lg bg-yellow-500 text-white font-semibold shadow hover:brightness-95 disabled:opacity-60 disabled:cursor-not-allowed transition"
                >
                  <FaEnvelope className="mr-2" aria-hidden="true" />
                  {submitting ? "Sending..." : "Send OTP"}
                </button>
                <div className="text-center pt-4 border-t border-slate-200">
                  <p className="text-sm text-slate-600 mb-2">
                    Don&apos;t have an account?
                  </p>
                  <Link
                    href="#"
                    className="text-yellow-600 hover:text-yellow-700 text-sm font-medium underline"
                  >
                    Create Account
                  </Link>
                </div>
              </form>
            ) : (
              // OTP Form
              <form className="space-y-6" onSubmit={handleOtpSubmit}>
                <div>
                  <label
                    htmlFor="otp"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    OTP Code
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaKey
                        className="h-5 w-5 text-slate-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="otp"
                      name="otp"
                      type="text"
                      inputMode="numeric"
                      autoComplete="one-time-code"
                      pattern="[0-9]*"
                      required
                      disabled={submitting}
                      placeholder="000000"
                      maxLength={6}
                      value={otp}
                      onChange={(e) =>
                        setOtp(e.target.value.replace(/\D/g, ""))
                      }
                      className="w-full px-4 py-3 pl-10 border-2 border-slate-200 rounded-lg text-center text-2xl tracking-widest focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all text-slate-900 disabled:opacity-60 disabled:cursor-not-allowed"
                    />
                  </div>
                  <p className="text-sm text-slate-500 mt-2">
                    Enter the 6-digit code sent to {email}
                  </p>
                </div>
                <button
                  type="submit"
                  disabled={submitting || otp.length !== 6}
                  className="w-full inline-flex justify-center items-center px-4 py-3 rounded-lg bg-yellow-500 text-white font-semibold shadow hover:brightness-95 disabled:opacity-60 disabled:cursor-not-allowed transition"
                >
                  <FaKey className="mr-2" aria-hidden="true" />
                  {submitting ? "Verifying..." : "Verify OTP"}
                </button>
                <div className="text-center space-y-3">
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    disabled={submitting}
                    className="text-red-600 hover:text-red-700 text-sm font-medium transition-colors disabled:opacity-60"
                  >
                    Didn&apos;t receive OTP? Resend
                  </button>
                  <div>
                    <button
                      type="button"
                      onClick={() => setStep("email")}
                      disabled={submitting}
                      className="text-slate-900 hover:text-yellow-600 text-sm font-medium transition-colors disabled:opacity-60"
                    >
                      ← Back to Email
                    </button>
                  </div>
                </div>
              </form>
            )}
          </section>
          {/* Security Notice */}
          <aside className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h2 className="text-sm font-medium text-blue-800 mb-2">
              Security Notice
            </h2>
            <ul className="text-xs text-blue-700 space-y-1">
              <li>• OTP is valid for 10 minutes only</li>
              <li>• Do not share your OTP with anyone</li>
              <li>
                • Check your spam folder if you don&apos;t receive the email
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
}
