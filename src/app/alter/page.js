// this is a demo page to test front GUI

// app/page.js

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
    ];

    return (
        <main className="min-h-screen bg-[#c8efbb] border-[4px] border-[#0b82c4] flex flex-col">
            <header className="bg-[#06064d] px-6 pt-6 pb-8">
                <nav className="flex gap-8 text-[#c8efbb] text-lg font-medium mb-6">
                    <a href="#" className="hover:underline">Home</a>
                    <a href="#" className="hover:underline">Profile</a>
                    <a href="#" className="hover:underline">Login</a>
                </nav>

                <div className="inline-block bg-[#c8efbb] text-[#06064d] px-5 py-3 rounded-2xl shadow-[6px_6px_0px_#7b7b7b]">
                    <h1 className="text-5xl font-extrabold">The Tech Blog</h1>
                </div>
            </header>

            <section className="flex-1 flex justify-center py-12 px-4">
                <div className="w-full max-w-4xl space-y-6">
                    {posts.map((post, index) => (
                        <article key={index} className="border-[5px] border-[#06064d] bg-[#c8efbb]">
                            <div className="bg-[#06064d] text-[#c8efbb] flex justify-between items-start px-4 py-4 gap-4">
                                <h2 className="text-4xl font-bold leading-tight max-w-[70%]">{post.title}</h2>

                                <div className="text-right text-base leading-snug font-medium whitespace-nowrap">
                                    <p>
                                        {post.author} on {post.date}
                                    </p>
                                </div>
                            </div>

                            <div className="px-4 py-5 text-[#222] text-xl leading-relaxed max-w-3xl">
                                {post.excerpt}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <footer className="bg-[#06064d] text-[#c8efbb] py-14 px-4">
                <div className="flex flex-col items-center gap-8">
                    <div className="text-xl font-medium text-center">
                        2024 &nbsp; || &nbsp; Tech Blog &nbsp; || &nbsp; siferzda
                    </div>

                    <div className="flex items-center gap-16 text-[#c8efbb] text-5xl">
                        <a href="#" className="hover:scale-110 transition-transform">
                            {/* GitHub Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
                                <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 10.95c.6.1.8-.25.8-.58v-2.17c-3.26.71-3.95-1.57-3.95-1.57-.53-1.35-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.39.96.1-.75.41-1.26.74-1.55-2.6-.3-5.34-1.3-5.34-5.8 0-1.28.46-2.33 1.2-3.15-.12-.3-.52-1.5.11-3.12 0 0 .98-.31 3.2 1.2a11.1 11.1 0 015.82 0c2.22-1.51 3.2-1.2 3.2-1.2.63 1.62.23 2.82.11 3.12.75.82 1.2 1.87 1.2 3.15 0 4.51-2.75 5.49-5.36 5.79.42.37.79 1.1.79 2.22v3.29c0 .33.2.69.81.58A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
                            </svg>
                        </a>

                        <a href="#" className="text-2xl font-semibold hover:underline">Contact me</a>
                    </div>
                </div>
            </footer>
        </main>
    );
}