// components/Header.js
"use client";

export default function Header() {
  return (
    <header className="bg-[#06064d] px-4 sm:px-6 pt-6 pb-8">
      <nav className="flex flex-wrap gap-4 sm:gap-8 text-[#c8efbb] text-lg font-medium mb-6">
        <a href="#" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline">
          Profile
        </a>
        <a href="#" className="hover:underline">
          Login
        </a>
      </nav>

      <div className="inline-block bg-[#c8efbb] text-[#06064d] px-4 sm:px-5 py-3 rounded-2xl shadow-[6px_6px_0px_#7b7b7b]">
        <h1 className="text-4xl sm:text-5xl font-extrabold">
          The Tech Blog
        </h1>
      </div>
    </header>
  );
}