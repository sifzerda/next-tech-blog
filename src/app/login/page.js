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
        <main className="bg-[#c8efbb] flex items-center justify-center px-2 py-7">
            <div className="w-full max-w-md border-[4px] border-[#06064d] bg-[#c8efbb] rounded-md shadow-lg">
                 <div className="bg-[#06064d] text-[#c8efbb] px-4 py-3">
                    <h1 className="text-2xl sm:text-3xl font-bold">Login</h1>
                    <p className="mt-2 text-sm sm:text-base">
                        Access your Tech Blog account
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-5">
                    <div>
                        <label className="block text-[#06064d] text-sm font-bold mb-1">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border-[3px] border-[#06064d] bg-white px-3 py-2 text-base text-black outline-none rounded"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-[#06064d] text-sm font-bold mb-1">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full border-[3px] border-[#06064d] bg-white px-3 py-2 text-base text-black outline-none rounded"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#06064d] text-[#c8efbb] text-lg font-bold py-2 border-[4px] border-[#06064d] hover:bg-[#0b82c4] transition-colors disabled:opacity-50">
                        Sign In
                    </button>

                    {message && (
                        <p className="mt-3 text-red-500 text-center">{message}</p>
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