"use client";
import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaPaperPlane,
  FaClock,
  FaBuilding,
  FaCheckCircle,
  FaQuestionCircle,
} from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setTimeout(() => {
        setFormStatus("idle");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: <FaPhone className="text-3xl" />,
      title: "Call Us",
      subtitle: "Mon-Sat, 9 AM - 6 PM",
      content: "+91 8757728679",
      link: "tel:+918757728679",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: "Email Us",
      subtitle: "Response within 24 hours",
      content: "yugayatra@gmail.com",
      link: "mailto:yugayatra@gmail.com",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: "Visit Us",
      subtitle: "Our Office Location",
      content: "Electronic City Phase 1, Bengaluru",
      link: null,
      color: "from-pink-400 to-pink-600",
    },
  ];

  const faqs = [
    {
      question: "How quickly will I get a response?",
      answer: "We typically respond within 24 hours on business days.",
    },
    {
      question: "Can I schedule a call?",
      answer: "Yes! Email us with your preferred time and we'll arrange it.",
    },
    {
      question: "Do you offer enterprise solutions?",
      answer: "Absolutely! Contact us for custom packages and bulk pricing.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Gradient Background */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-white to-yellow-50">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">
                We're Here to Help
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900">
              Let's Start a{" "}
              <span className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 bg-clip-text text-transparent">
                Conversation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
              Whether you have questions, need support, or want to explore
              enterprise solutions, our team is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods - Floating Cards */}
      <section className="relative -mt-16 z-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {method.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-4">
                    {method.subtitle}
                  </p>
                  {method.link ? (
                    <a
                      href={method.link}
                      className="text-lg font-semibold text-slate-700 hover:text-yellow-600 transition-colors"
                    >
                      {method.content}
                    </a>
                  ) : (
                    <p className="text-lg font-semibold text-slate-700">
                      {method.content}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content - Form & Info Side by Side */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form - Takes 3 columns */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                <div className="mb-8">
                  <h2 className="text-4xl font-bold text-slate-900 mb-3">
                    Send us a message
                  </h2>
                  <p className="text-slate-600">
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 transition-all text-slate-900 outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 transition-all text-slate-900 outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 transition-all text-slate-900 outline-none"
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 transition-all text-slate-900 outline-none"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="enterprise">Enterprise Solutions</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 transition-all text-slate-900 resize-none outline-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="w-full px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {formStatus === "sending" ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span className="text-lg">Sending...</span>
                      </>
                    ) : formStatus === "success" ? (
                      <>
                        <FaCheckCircle className="text-xl" />
                        <span className="text-lg">
                          Message Sent Successfully!
                        </span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-lg group-hover:translate-x-1 transition-transform" />
                        <span className="text-lg">Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-8">
              {/* Company Info Card */}
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl shadow-2xl p-8 text-white">
                <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mb-6">
                  <FaBuilding className="text-3xl" />
                </div>
                <h3 className="text-2xl font-bold mb-2">OnlyInternship.in</h3>
                <p className="text-yellow-50 text-sm font-medium mb-6">
                  Yuga Yatra Retail (OPC) Private Limited
                </p>
                <p className="text-white/90 leading-relaxed mb-8">
                  Empowering the next generation through innovative assessment
                  solutions and professional development programs.
                </p>

                {/* Social Links */}
                <div className="flex space-x-3">
                  {[
                    { Icon: FaLinkedin, href: "#" },
                    { Icon: FaTwitter, href: "#" },
                    { Icon: FaInstagram, href: "#" },
                    { Icon: FaFacebook, href: "#" },
                    { Icon: FaYoutube, href: "#" },
                  ].map(({ Icon, href }, index) => (
                    <a
                      key={index}
                      href={href}
                      className="w-11 h-11 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center hover:bg-white hover:text-yellow-500 transition-all duration-300"
                    >
                      <Icon className="text-lg" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick FAQs */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                    <FaQuestionCircle className="text-yellow-600 text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Quick Answers
                  </h3>
                </div>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-yellow-400 pl-4 py-2"
                    >
                      <h4 className="font-semibold text-slate-900 mb-1">
                        {faq.question}
                      </h4>
                      <p className="text-sm text-slate-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-slate-900 rounded-3xl shadow-xl p-8 text-white">
                <div className="flex items-center mb-4">
                  <FaClock className="text-yellow-400 text-2xl mr-3" />
                  <h3 className="text-xl font-bold">Business Hours</h3>
                </div>
                <div className="space-y-2 text-slate-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold text-white">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold text-white">
                      10:00 AM - 4:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold text-yellow-400">
                      Closed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
