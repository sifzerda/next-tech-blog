// app/signup/page.js
"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../lib/authContext";

export default function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();
    const { login } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const res = await fetch('/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, username }),
            });

            const text = await res.text();
            const data = text ? JSON.parse(text) : {};

            if (res.ok) {
                login(data.token); // update context with new token
                // Store JWT in localStorage
                if (data.token) {
                    localStorage.setItem('token', data.token);
                }
                // Redirect user
                router.push('/');
            } else {
                setMessage(data.message || data.error || 'Signup failed.');
            }
        } catch (err) {
            setMessage('Signup failed. Please try again.');
            console.error('Signup error:', err);
        }
    }

    return (
        <main className="bg-[#c8efbb] flex items-center justify-center px-2 py-7">
            <div className="w-full max-w-md border-[4px] border-[#06064d] bg-[#c8efbb] rounded-md shadow-lg">
                <div className="bg-[#06064d] text-[#c8efbb] px-4 py-3">
                    <h1 className="text-2xl sm:text-3xl font-bold">Sign Up</h1>
                    <p className="mt-2 text-sm sm:text-base">
                        Create your Tech Blog account
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-5">
                    <div>
                        <label className="block text-[#06064d] text-sm font-bold mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            placeholder="Choose a username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="w-full border-[3px] border-[#06064d] bg-white px-3 py-2 text-base text-black outline-none rounded"
                        />
                    </div>

                    <div>
                        <label className="block text-[#06064d] text-sm font-bold mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            className="w-full border-[3px] border-[#06064d] bg-white px-3 py-2 text-base text-black outline-none rounded"
                        />
                    </div>

                    <div>
                        <label className="block text-[#06064d] text-sm font-bold mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            className="w-full border-[3px] border-[#06064d] bg-white px-3 py-2 text-base text-black outline-none rounded"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#06064d] text-[#c8efbb] text-lg font-bold py-2 border-[4px] border-[#06064d] hover:bg-[#0b82c4] transition-colors disabled:opacity-50">
                        Sign Up
                    </button>

                    {message && <p className="mt-3 text-red-500 text-center">{message}</p>}

                    <p className="text-center text-[#06064d] text-sm">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="font-bold underline hover:text-[#0b82c4]">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </main>
    );
}