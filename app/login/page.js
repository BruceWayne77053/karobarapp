"use client";

import { useState } from "react";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();

            if (data.success) {
                setMessage("Login successful! Welcome " + data.user.username);
            } else {
                setMessage(data.message);
            }
        } catch (err) {
            setMessage("Something went wrong");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 p-8 border rounded-lg shadow-md w-80"
            >
                <h1 className="text-2xl font-bold text-center">Login</h1>

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border p-2 rounded"
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 rounded"
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-green-500 text-white p-2 rounded hover:bg-green-600 disabled:opacity-50"
                >
                    {loading ? "Logging in..." : "Login"}
                </button>

                {message && (
                    <p className="text-center text-sm text-red-500">{message}</p>
                )}
            </form>
        </div>
    );
}
