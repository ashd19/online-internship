"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  FaClock,
  FaExclamationTriangle,
  FaCheck,
  FaArrowLeft,
  FaArrowRight,
  FaSave,
  FaShieldAlt,
  FaUser,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

type Difficulty = "easy" | "moderate" | "hard";

type Question = {
  id: number;
  question: string;
  options: string[];
  difficulty: Difficulty;
  category: string;
  correctIndex: number; // for demo scoring
};

const initialQuestions: Question[] = [
  {
    id: 1,
    question: "Which of the following best describes JavaScript?",
    options: [
      "A compiled language",
      "A scripting language",
      "A styling language",
      "A database query language",
    ],
    difficulty: "easy",
    category: "JavaScript",
    correctIndex: 1,
  },
  {
    id: 2,
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style System",
      "Cascaded Styling Script",
    ],
    difficulty: "moderate",
    category: "CSS",
    correctIndex: 0,
  },
  {
    id: 3,
    question: "Which HTTP method is idempotent?",
    options: ["POST", "PUT", "PATCH", "CONNECT"],
    difficulty: "moderate",
    category: "Web",
    correctIndex: 1,
  },
  {
    id: 4,
    question: "What is the default port for PostgreSQL?",
    options: ["3306", "5432", "8080", "27017"],
    difficulty: "easy",
    category: "Databases",
    correctIndex: 1,
  },
  {
    id: 5,
    question: "Which hook runs after every render by default?",
    options: ["useMemo", "useEffect", "useCallback", "useRef"],
    difficulty: "hard",
    category: "React",
    correctIndex: 1,
  },
];

export default function TestInterface() {
  // Page state
  const [timeRemaining, setTimeRemaining] = useState(45 * 60); // 45 mins
  const [warnings, setWarnings] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number | undefined>>(
    {}
  );
  const [showConfirm, setShowConfirm] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const questions = initialQuestions;
  const currentQuestion = questions[currentQuestionIndex];

  // Keep the light background regardless of global theme
  // and ensure the page renders client-side.
  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  // Timer countdown
  useEffect(() => {
    if (timeRemaining <= 0) {
      handleComplete();
      return;
    }
    const id = setInterval(() => setTimeRemaining((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [timeRemaining]);

  // Auto-save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("testAnswers", JSON.stringify(answers));
    } catch {}
  }, [answers]);

  // Load saved answers (optional)
  useEffect(() => {
    try {
      const raw = localStorage.getItem("testAnswers");
      if (raw)
        setAnswers(JSON.parse(raw) as Record<number, number | undefined>);
    } catch {}
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const answeredIds = useMemo(
    () => new Set(Object.keys(answers).map((k) => Number(k))),
    [answers]
  );
  const answeredCount = answeredIds.size;

  const handleSelect = (optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: optionIndex }));
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex((i) => Math.min(i + 1, questions.length - 1));
  };

  const prevQuestion = () => {
    setCurrentQuestionIndex((i) => Math.max(i - 1, 0));
  };

  const goToQuestion = (index: number) => {
    if (index >= 0 && index < questions.length) setCurrentQuestionIndex(index);
  };

  const handleSubmit = () => {
    setShowConfirm(true);
  };

  const handleComplete = () => {
    setShowConfirm(false);
    setShowResult(true);
  };

  const resetTest = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setTimeRemaining(45 * 60);
    setWarnings(0);
    setShowConfirm(false);
    setShowResult(false);
    try {
      localStorage.removeItem("testAnswers");
    } catch {}
  };

  const score = useMemo(() => {
    let s = 0;
    for (const q of questions) {
      if (answers[q.id] === q.correctIndex) s += 1;
    }
    return s;
  }, [answers, questions]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100 text-slate-900">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-lg border-b-2 border-yellow-500 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              {/* Logo */}
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center text-white font-bold text-lg shadow-lg border-2 border-yellow-300">
                  <FaShieldAlt className="text-lg" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">
                  Assessment Portal
                </h1>
                <p className="text-sm text-yellow-600 font-medium">
                  Technical Evaluation
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              {/* Progress Indicator */}
              <div className="hidden sm:flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <FaUser className="text-gray-400 text-sm" />
                  <span className="text-sm font-medium text-slate-700">
                    Candidate
                  </span>
                </div>
                <div className="w-px h-6 bg-gray-200"></div>
                <div className="flex items-center space-x-2">
                  <FaChartLine className="text-yellow-500 text-sm" />
                  <span className="text-sm font-medium text-slate-700">
                    {Math.round((answeredCount / questions.length) * 100)}%
                    Complete
                  </span>
                </div>
              </div>

              {/* Warnings */}
              {warnings > 0 && (
                <div className="flex items-center space-x-2 bg-amber-50 text-amber-700 px-3 py-2 rounded-lg border border-amber-200">
                  <FaExclamationTriangle className="text-sm" />
                  <span className="text-sm font-medium">
                    {warnings}/3 Warnings
                  </span>
                </div>
              )}

              {/* Timer */}
              <div
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg border ${
                  timeRemaining <= 300
                    ? "bg-red-50 text-red-700 border-red-200 animate-pulse"
                    : "bg-yellow-50 text-yellow-700 border-yellow-200"
                }`}
                aria-label="time remaining"
              >
                <FaClock className="text-sm" />
                <span className="font-mono font-semibold text-lg">
                  {formatTime(timeRemaining)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="bg-white rounded-xl shadow-sm border-2 border-yellow-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <h2 className="text-lg font-semibold text-slate-900">
                  Test Progress
                </h2>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </span>
              </div>
              <div className="text-sm text-gray-500">
                {answeredCount} answered • {questions.length - answeredCount}{" "}
                remaining
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${(answeredCount / questions.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Question Panel */}
          <div className="xl:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border-2 border-yellow-200 overflow-hidden">
              {/* Question Header */}
              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 px-6 py-5 border-b-2 border-yellow-200">
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-3">
                      <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-sm border-2 border-yellow-300">
                        Q{currentQuestionIndex + 1}
                      </span>
                      <span
                        className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium ${
                          currentQuestion.difficulty === "easy"
                            ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                            : currentQuestion.difficulty === "moderate"
                            ? "bg-amber-100 text-amber-700 border border-amber-200"
                            : "bg-red-100 text-red-700 border border-red-200"
                        }`}
                      >
                        {currentQuestion.difficulty.charAt(0).toUpperCase() +
                          currentQuestion.difficulty.slice(1)}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-slate-700">
                      {currentQuestion.category}
                    </div>
                    <div className="text-xs text-yellow-600 mt-1 font-medium">
                      Technical Assessment
                    </div>
                  </div>
                </div>
              </div>

              {/* Question Content */}
              <div className="p-6">
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-slate-900 leading-relaxed mb-6">
                    {currentQuestion.question}
                  </h3>

                  {/* Options */}
                  <div className="space-y-3">
                    {currentQuestion.options.map((option, index) => {
                      const selected = answers[currentQuestion.id] === index;
                      return (
                        <button
                          key={index}
                          onClick={() => handleSelect(index)}
                          className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 group ${
                            selected
                              ? "border-yellow-500 bg-gradient-to-r from-yellow-50 to-yellow-100 shadow-md"
                              : "border-gray-200 bg-white hover:border-yellow-300 hover:shadow-sm"
                          }`}
                          aria-pressed={selected}
                        >
                          <div className="flex items-center space-x-4">
                            <div
                              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-semibold text-sm transition-all ${
                                selected
                                  ? "border-yellow-500 bg-yellow-500 text-white"
                                  : "border-gray-300 bg-white text-gray-600 group-hover:border-yellow-300"
                              }`}
                            >
                              {String.fromCharCode(65 + index)}
                            </div>
                            <span
                              className={`text-lg leading-relaxed ${
                                selected
                                  ? "text-slate-900 font-medium"
                                  : "text-slate-700"
                              }`}
                            >
                              {option}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-6 border-t-2 border-yellow-200">
                  <button
                    onClick={prevQuestion}
                    disabled={currentQuestionIndex === 0}
                    className="inline-flex items-center px-4 py-2.5 text-sm font-medium text-slate-700 bg-white border-2 border-yellow-300 rounded-lg hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white transition-colors"
                  >
                    <FaArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                  </button>

                  <div className="flex items-center space-x-4">
                    <div className="text-sm text-slate-600 bg-yellow-50 px-3 py-2 rounded-lg border border-yellow-200">
                      <span className="font-medium">{answeredCount}</span> of{" "}
                      {questions.length} answered
                    </div>
                    <button
                      onClick={handleSubmit}
                      className="inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm transition-all"
                    >
                      <FaCheck className="w-4 h-4 mr-2" />
                      Submit Test
                    </button>
                  </div>

                  <button
                    onClick={nextQuestion}
                    disabled={currentQuestionIndex === questions.length - 1}
                    className="inline-flex items-center px-4 py-2.5 text-sm font-medium text-slate-700 bg-white border-2 border-yellow-300 rounded-lg hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white transition-colors"
                  >
                    Next
                    <FaArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="xl:col-span-1">
            <div className="space-y-6">
              {/* Question Navigator */}
              <div className="bg-white rounded-xl shadow-sm border-2 border-yellow-200 p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <FaChartLine className="text-yellow-500" />
                  <h3 className="text-lg font-semibold text-slate-900">
                    Question Navigator
                  </h3>
                </div>

                <div className="grid grid-cols-5 gap-2 mb-6">
                  {questions.map((q, index) => {
                    const isCurrent = index === currentQuestionIndex;
                    const isAnswered = answeredIds.has(q.id);
                    return (
                      <button
                        type="button"
                        key={q.id}
                        onClick={() => goToQuestion(index)}
                        className={`w-10 h-10 rounded-lg text-sm font-semibold flex items-center justify-center transition-all duration-200 ${
                          isCurrent
                            ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg transform scale-105 border-2 border-yellow-300"
                            : isAnswered
                            ? "bg-green-500 text-white hover:bg-green-600"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200"
                        }`}
                        aria-current={isCurrent ? "true" : "false"}
                        title={`Go to question ${index + 1}`}
                      >
                        {isAnswered && !isCurrent ? (
                          <FaCheckCircle className="text-sm" />
                        ) : (
                          index + 1
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded"></div>
                    <span className="text-slate-700">Current Question</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span className="text-slate-700">Answered</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-gray-100 rounded border border-gray-200"></div>
                    <span className="text-slate-700">Unanswered</span>
                  </div>
                </div>
              </div>

              {/* Auto-save Status */}
              <div className="bg-white rounded-xl shadow-sm border-2 border-yellow-200 p-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                    <FaSave className="text-green-600" />
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">
                    Auto-save Active
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Your progress is automatically saved locally as you work
                    through the assessment.
                  </p>
                </div>
              </div>

              {/* Test Info */}
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl border-2 border-yellow-200 p-6">
                <h4 className="text-sm font-semibold text-slate-900 mb-3">
                  Test Information
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Total Questions:</span>
                    <span className="font-medium text-slate-900">
                      {questions.length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Time Limit:</span>
                    <span className="font-medium text-slate-900">
                      45 minutes
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Passing Score:</span>
                    <span className="font-medium text-slate-900">70%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border-2 border-yellow-200 overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 px-6 py-4 border-b-2 border-yellow-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center border-2 border-yellow-300">
                  <FaExclamationTriangle className="text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Confirm Submission
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-slate-700 mb-6 leading-relaxed">
                You&apos;re about to submit your assessment. Please review your
                answers as you won&apos;t be able to make changes after
                submission.
              </p>
              <div className="bg-yellow-50 rounded-lg p-4 mb-6 border border-yellow-200">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-slate-600">Questions Answered:</span>
                    <div className="font-semibold text-slate-900">
                      {answeredCount} of {questions.length}
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-600">Time Remaining:</span>
                    <div className="font-semibold text-slate-900">
                      {formatTime(timeRemaining)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowConfirm(false)}
                  className="px-6 py-2.5 text-sm font-medium text-slate-700 bg-white border-2 border-yellow-300 rounded-lg hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors"
                >
                  Review Answers
                </button>
                <button
                  onClick={handleComplete}
                  className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm transition-all"
                >
                  Submit Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Result Modal */}
      {showResult && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border-2 border-yellow-200 overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 px-6 py-6 border-b-2 border-yellow-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-300">
                  <FaCheckCircle className="text-2xl text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Assessment Completed!
                </h3>
                <p className="text-slate-600">
                  Thank you for completing the technical assessment.
                </p>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-yellow-50 rounded-xl p-6 mb-6 border-2 border-yellow-200">
                <h4 className="text-lg font-semibold text-slate-900 mb-4">
                  Summary
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg border-2 border-yellow-200">
                    <div className="text-2xl font-bold text-yellow-600">
                      {answeredCount}
                    </div>
                    <div className="text-sm text-slate-600">
                      Questions Answered
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border-2 border-yellow-200">
                    <div className="text-2xl font-bold text-green-600">
                      {score}
                    </div>
                    <div className="text-sm text-slate-600">
                      Correct Answers
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-white rounded-lg border-2 border-yellow-200">
                    <div className="text-lg font-semibold text-slate-900">
                      {formatTime(45 * 60 - timeRemaining)}
                    </div>
                    <div className="text-xs text-slate-600">Time Used</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg border-2 border-yellow-200">
                    <div className="text-lg font-semibold text-slate-900">
                      {Math.round((score / questions.length) * 100)}%
                    </div>
                    <div className="text-xs text-slate-600">Score</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  className="px-6 py-2.5 text-sm font-medium text-slate-700 bg-white border-2 border-yellow-300 rounded-lg hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-colors"
                  onClick={() => setShowResult(false)}
                >
                  Close
                </button>
                <button
                  className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg hover:from-yellow-600 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm transition-all"
                  onClick={resetTest}
                >
                  Take Again
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
