"use client";
import React from "react";
import Link from "next/link";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Basic Assessment",
      price: "₹299",
      originalPrice: "₹499",
      features: [
        "35 Question Assessment",
        "60 Minutes Duration",
        "Instant Results",
        "Basic Report",
        "Email Certificate",
      ],
      popular: false,
    },
    {
      name: "Premium Assessment",
      price: "₹499",
      originalPrice: "₹799",
      features: [
        "35 Question Assessment",
        "60 Minutes Duration",
        "Instant Results",
        "Detailed Report",
        "Email Certificate",
        "Priority Support",
        "Resume Review",
      ],
      popular: true,
    },
    {
      name: "Enterprise Package",
      price: "₹999",
      originalPrice: "₹1499",
      features: [
        "35 Question Assessment",
        "60 Minutes Duration",
        "Instant Results",
        "Comprehensive Report",
        "Email Certificate",
        "Priority Support",
        "Resume Review",
        "Mock Interview",
        "Career Guidance",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Choose Your <span className="gradient-text">Assessment Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing with no hidden costs. All plans include GST and
            instant access.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 ${
                plan.popular
                  ? "bg-gradient-to-br from-orange-500 to-yellow-500 text-white border-4 border-orange-400"
                  : "bg-white text-gray-800 border-2 border-gray-100"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-orange-600 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3
                className={`text-2xl font-bold mb-4 ${
                  plan.popular ? "text-white" : "text-gray-800"
                }`}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline justify-center">
                  <span
                    className={`text-4xl font-bold ${
                      plan.popular ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`ml-2 text-lg ${
                      plan.popular ? "text-orange-100" : "text-gray-500"
                    }`}
                  >
                    + GST
                  </span>
                </div>
                <div className="text-center">
                  <span
                    className={`line-through text-sm ${
                      plan.popular ? "text-orange-200" : "text-gray-400"
                    }`}
                  >
                    {plan.originalPrice}
                  </span>
                  <span
                    className={`ml-2 text-sm font-semibold ${
                      plan.popular ? "text-yellow-200" : "text-green-600"
                    }`}
                  >
                    Save ₹
                    {parseInt(plan.originalPrice.replace("₹", "")) -
                      parseInt(plan.price.replace("₹", ""))}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg
                      className={`w-5 h-5 mr-3 flex-shrink-0 ${
                        plan.popular ? "text-yellow-200" : "text-green-500"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span
                      className={
                        plan.popular ? "text-orange-50" : "text-gray-600"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? "bg-white text-orange-600 hover:bg-gray-100"
                    : "bg-orange-600 text-white hover:bg-orange-700"
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>

        {/* Improved Custom Solution Box */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-10 max-w-4xl mx-auto border-2 border-yellow-200 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-50 rounded-full -ml-12 -mb-12 opacity-50"></div>

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>

              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Looking for enterprise solutions, bulk assessments, or custom
                integrations? Our sales team is ready to create a tailored
                package that fits your organization&apos;s needs.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center justify-center space-x-2 text-slate-700">
                  <svg
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">Bulk Discounts</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-slate-700">
                  <svg
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">Custom Integration</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-slate-700">
                  <svg
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">Dedicated Support</span>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-yellow-500 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:brightness-95 hover:scale-105 transition-all duration-300"
              >
                <span>Contact Sales Team</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
