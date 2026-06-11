"use client";

import { useState } from "react";

export default function ResumeForm() {
  const [resume, setResume] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeResume = async () => {
    setLoading(true);

    const res = await fetch("/api/resume", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ resume }),
    });

    const data = await res.json();

    setResult(data.response);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#3b0764,_#000)] text-white px-4 py-12">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            AI Resume Analyzer
          </h1>
  
          <p className="mt-4 text-gray-400 text-lg">
            Get instant AI feedback on your resume
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
    <h3 className="font-semibold">Strength Analysis</h3>
  </div>

  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
    <h3 className="font-semibold">Skill Gap Detection</h3>
  </div>

  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
    <h3 className="font-semibold">Career Suggestions</h3>
  </div>
</div>
  
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">
          
          <textarea
            rows={12}
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            placeholder="Paste your resume here..."
            className="w-full bg-black/30 border border-gray-700 rounded-2xl p-5 outline-none resize-none focus:border-purple-500 transition-all"
          />
  
          <button
            onClick={analyzeResume}
            disabled={loading}
            className="mt-6 w-full md:w-auto px-8 py-4 rounded-2xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transition-all duration-300 disabled:opacity-50"
          >
            {loading ? "Analyzing Resume..." : "Analyze Resume"}
          </button>
  
          {result && (
            <div className="mt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <h2 className="text-2xl font-semibold">
                  Analysis Report
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