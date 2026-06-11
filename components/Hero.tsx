"use client";

import { SparklesCore } from "./ui/sparkles";

export default function Hero() {
  return (
    <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <h1 className="md:text-7xl text-5xl lg:text-8xl font-bold text-center relative z-20 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
        CareerPilot AI
      </h1>

      <div className="w-[40rem] h-40 relative ">
        {/* blue line */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[2px] w-3/4 blur-sm" />

        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px w-3/4" />

        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />

        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={1000}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* THIS IS THE IMPORTANT PART */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_180px_at_top,transparent_20%,white)]"></div>
      </div>

      <p className="text-neutral-400 mt-4">
        Prepare for Interviews Using AI
      </p>
    </div>
  );
}