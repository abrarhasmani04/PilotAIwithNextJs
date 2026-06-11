"use client";

import React, { useState } from "react";

const InterviewForm = () => {
  const [role, setRole] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generateQuestions = async () => {
    if (!role.trim()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/interview", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role }),
      });

      const data = await res.json();
      setResult(data.response);
    } catch (error) {
      console.error(error);
      setResult("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-black px-4 py-10 text-white">
      <div className="w-full max-w-3xl mx-auto">
        {/* Card */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-8 shadow-2xl">
          {/* Heading */}
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            AI Interview Generator
          </h2>

          <p className="mt-3 text-center text-sm sm:text-base text-gray-400">
            Generate personalized interview questions using AI
          </p>

          {/* Input Section */}
          <div className="mt-8 flex flex-col gap-4">
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Frontend Developer"
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base text-white placeholder:text-gray-500 outline-none transition-all focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            />

            <button
              onClick={generateQuestions}
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                  Generating...
                </span>
              ) : (
                "Generate Questions"
              )}
            </button>
          </div>

          {/* Result Section */}
          {result && (
            <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-4 sm:p-6">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                <h3 className="text-lg font-semibold text-cyan-400">
                  Generated Questions
                </h3>
              </div>

              <pre className="whitespace-pre-wrap break-words text-sm sm:text-base text-gray-300 font-sans leading-6 sm:leading-7 overflow-x-auto">
                {result}
              </pre>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InterviewForm;