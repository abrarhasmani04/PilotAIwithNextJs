"use client";

import { useState } from "react";

export default function RoadmapForm() {
  const [career, setCareer] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generateRoadmap = async () => {
    setLoading(true);

    const res = await fetch("/api/roadmap", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ career }),
    });

    const data = await res.json();

    setResult(data.response);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#0f172a,_#000)] text-white px-4 py-12">
      <div className="max-w-5xl mx-auto">
  
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            AI Roadmap Generator
          </h1>
  
          <p className="mt-4 text-gray-400 text-lg">
            Generate a complete learning roadmap for any career path
            This may take time because this is for study
          </p>
        </div>
  
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
            <h3 className="font-semibold text-cyan-400">
              Month Wise Plan
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Structured learning journey
            </p>
          </div>
  
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
            <h3 className="font-semibold text-purple-400">
              Projects
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Build portfolio-ready projects
            </p>
          </div>
  
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
            <h3 className="font-semibold text-pink-400">
              Resources
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Recommended learning materials
            </p>
          </div>
        </div>
  
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
  
          <input
            value={career}
            onChange={(e) => setCareer(e.target.value)}
            placeholder="Frontend Developer, Data Scientist, AI Engineer..."
            className="w-full bg-black/30 border border-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-purple-500 transition-all"
          />
  
          <button
            onClick={generateRoadmap}
            disabled={loading}
            className="mt-6 w-full md:w-auto px-8 py-4 rounded-2xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transition-all duration-300 disabled:opacity-50"
          >
            {loading ? "Generating Roadmap..." : "Generate Roadmap"}
          </button>
  
          {result && (
            <div className="mt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <h2 className="text-2xl font-semibold">
                  Career Roadmap
                </h2>
              </div>
  
              <div className="bg-black/30 border border-white/10 rounded-2xl p-6 overflow-auto">
                <pre className="whitespace-pre-wrap text-gray-300 leading-7">
                  {result}
                </pre>
              </div>
            </div>
          )}
        </div>
  
      </div>
    </div>
  );
}