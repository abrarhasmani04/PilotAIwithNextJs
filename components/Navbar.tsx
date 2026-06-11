import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="group">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">
            CareerPilot AI
          </h1>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
          <Link
            href="/"
            className="rounded-full px-5 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/interview"
            className="rounded-full px-5 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
          >
            Interview
          </Link>

          <Link
            href="/resume"
            className="rounded-full px-5 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
          >
            Resume
          </Link>

          <Link
            href="/roadmap"
            className="rounded-full px-5 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
          >
            Roadmap
          </Link>

        </div>

        {/* CTA Button */}
        <button className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;