// app/login/page.js

"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { useAuth } from "../../../lib/authContext";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(null);
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);

        const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }, // <-- Add this to ensure JSON is parsed properly on server
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (res.ok) {
            login(data.token); // update context
            router.push('/'); // redirect
        } else {
            setMessage(data.error || 'Login failed');
        }
    };

    return (
        <main className="min-h-screen bg-[#c8efbb] border-[4px] border-[#0b82c4] flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-2xl border-[5px] border-[#06064d] bg-[#c8efbb]">
                <div className="bg-[#06064d] text-[#c8efbb] px-6 py-5">
                    <h1 className="text-3xl sm:text-5xl font-bold">Login</h1>
                    <p className="mt-2 text-sm sm:text-base">
                        Access your Tech Blog account
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
                    <div>
                        <label className="block text-[#06064d] text-sm font-bold mb-2">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border-[4px] border-[#06064d] bg-white px-4 py-3 text-lg outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-[#06064d] text-sm font-bold mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full border-[4px] border-[#06064d] bg-white px-4 py-3 text-lg outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#06064d] text-[#c8efbb] text-lg font-bold py-4 border-[4px] border-[#06064d] hover:bg-[#0b82c4] transition-colors disabled:opacity-50">
                        Sign In
                    </button>

                    {message && (
                        <p className="mt-4 text-sm text-red-600">{message}</p>
                    )}

                    <p className="text-center text-[#06064d] text-base">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/signup"
                            className="font-bold underline hover:text-[#0b82c4]">
                            Sign up
                        </Link>
                    </p>
                </form>

            </div>
        </main>
    );
}