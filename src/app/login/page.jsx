"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaLock } from "react-icons/fa";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hardcoded Admin Credentials
  const adminCredentials = {
    username: "admin",
    password: "admin123",
    email: "admin@gmail.com",
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      username === adminCredentials.username &&
      password === adminCredentials.password
    ) {
      // Save in localStorage
      localStorage.setItem("role", "admin");
      localStorage.setItem("username", username);
      localStorage.setItem("email", adminCredentials.email);

      // Redirect to home
      router.push("/");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <form
        onSubmit={handleLogin}
        className="bg-white w-full max-w-md rounded-2xl shadow-md px-8 py-10"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Admin Login
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <div className="flex items-center border rounded-xl px-4 py-2 mb-4 bg-gray-50">
          <FaUser className="text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        <div className="flex items-center border rounded-xl px-4 py-2 mb-6 bg-gray-50">
          <FaLock className="text-gray-400 mr-3" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition"
        >
          Login
        </button>

        <p className="text-gray-500 text-sm text-center mt-4 cursor-pointer hover:underline">
          Forgot password?
        </p>
      </form>
    </div>
  );
}
