"use client";

import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function HomePage() {

  const posts = [
    {
      title: "Why MVC is so important",
      author: "Amiko",
      date: "March 28, 2024",
      excerpt:
        "MVC allows developers to maintain a true separation of concerns by keeping the Controller layer for application logic.",
    },
    {
      title: "Authentication vs. Authorization",
      author: "Amiko",
      date: "March 28, 2024",
      excerpt:
        "Authentication and Authorization serve different purposes; one verifies identity, the other verifies permissions.",
    },
    {
      title: "Understanding State Management",
      author: "Amiko",
      date: "March 28, 2024",
      excerpt:
        "State management is crucial in React apps to maintain consistency and prevent unnecessary re-renders.",
    },
    {
      title: "React Hooks Deep Dive",
      author: "Jordan",
      date: "April 1, 2024",
      excerpt:
        "Hooks let you use state and other React features without writing a class component.",
    },
    {
      title: "Optimizing Web Performance",
      author: "Taylor",
      date: "April 2, 2024",
      excerpt:
        "Learn strategies to reduce load times and improve user experience with modern performance optimization techniques.",
    },
    {
      title: "Tailwind CSS Tips and Tricks",
      author: "Amiko",
      date: "April 3, 2024",
      excerpt:
        "Tailwind CSS can speed up your UI development — discover hidden features and shortcuts for rapid styling.",
    },
    {
      title: "Deploying Next.js Apps",
      author: "Jordan",
      date: "April 4, 2024",
      excerpt:
        "Explore different deployment options for Next.js applications, including Vercel, Netlify, and custom server setups.",
    },
    {
      title: "Understanding API Routes",
      author: "Taylor",
      date: "April 5, 2024",
      excerpt:
        "API routes in Next.js allow you to build backend endpoints directly in your app for full-stack functionality.",
    },
    {
      title: "JavaScript ES2024 Features",
      author: "Amiko",
      date: "April 6, 2024",
      excerpt:
        "Stay up to date with the latest JavaScript features, from logical assignment operators to new Array methods.",
    },
    {
      title: "Writing Effective Unit Tests",
      author: "Jordan",
      date: "April 7, 2024",
      excerpt:
        "Unit tests are essential for catching bugs early — learn best practices and tools for testing your React components.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#c8efbb] border-[4px] border-[#0b82c4] flex flex-col">
      <header className="bg-[#06064d] px-4 sm:px-6 pt-6 pb-8">
        <nav className="flex flex-wrap gap-4 sm:gap-8 text-[#c8efbb] text-lg font-medium mb-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Profile</a>
          <a href="#" className="hover:underline">Login</a>
        </nav>

        <div className="inline-block bg-[#c8efbb] text-[#06064d] px-4 sm:px-5 py-3 rounded-2xl shadow-[6px_6px_0px_#7b7b7b]">
          <h1 className="text-4xl sm:text-5xl font-extrabold">The Tech Blog</h1>
        </div>
      </header>

      <section className="flex-1 flex justify-center py-12 px-4">
        <div className="w-full max-w-4xl space-y-6">
          {posts.map((post, index) => (
            <article key={index} className="border-[5px] border-[#06064d] bg-[#c8efbb]">
              <div className="bg-[#06064d] text-[#c8efbb] flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 py-4 gap-4">
                <h2 className="text-2xl sm:text-4xl font-bold leading-tight sm:max-w-[70%] break-words">
                  {post.title}
                </h2>
                <div className="text-right text-sm sm:text-base leading-snug font-medium flex-shrink-0 mt-2 sm:mt-0">
                  <p>{post.author} • {post.date}</p>
                </div>
              </div>

              <div className="px-4 py-5 text-[#222] text-base sm:text-xl leading-relaxed max-w-3xl">
                {post.excerpt}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}

      <footer className="bg-[#06064d] text-[#c8efbb] py-4 px-4 sm:px-6">
        <div className="flex flex-col items-center max-w-4xl mx-auto space-y-1">

          <div className="w-full border-t border-[#c8efbb]/40 mb-4"></div>

          <div className="text-sm sm:text-base font-medium tracking-wide">
            tech-blog
          </div>

          <div className="text-sm sm:text-base font-medium tracking-wide">
            siferzda 2026
          </div>

          <div>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>

        </div>
      </footer>
    </main>
  );
}