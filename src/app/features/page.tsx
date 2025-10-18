"use client";
import Link from "next/link";

const Features = () => {
  const features = [
    {
      icon: "🎯",
      title: "Comprehensive Assessment",
      description:
        "35 carefully crafted questions covering technical skills, problem-solving, and industry knowledge.",
    },
    {
      icon: "🔒",
      title: "Anti-Cheating System",
      description:
        "Advanced security measures including tab switching detection and screen recording prevention.",
    },
    {
      icon: "⏱️",
      title: "Timed Evaluation",
      description:
        "60-minute assessment with real-time timer and automatic submission to ensure fair evaluation.",
    },
    {
      icon: "📊",
      title: "Instant Results",
      description:
        "Get your detailed performance report immediately with score breakdown and improvement suggestions.",
    },
    {
      icon: "💳",
      title: "Secure Payment",
      description:
        "GST-compliant payment processing with multiple payment options and instant confirmation.",
    },
    {
      icon: "📧",
      title: "Email Notifications",
      description:
        "Automated email confirmations and result notifications for seamless communication.",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-white to-yellow-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              OnlyInternship.in
            </span>
            ?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our platform combines cutting-edge technology with industry
            expertise to deliver the most reliable internship assessment
            experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center border-2 border-yellow-200 hover:shadow-xl hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border-2 border-yellow-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-slate-600 mb-6">
              Join thousands of students who have already taken the first step
              towards their dream internship.
            </p>
            <Link
              href="/student/login"
              className="inline-block bg-yellow-500 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:brightness-95 hover:scale-105 transition-all duration-300"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
