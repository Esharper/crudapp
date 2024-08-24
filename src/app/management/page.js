"use client";
import React, { useState } from "react";
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";

const ManagementPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess("Registration successful!");
      setEmail("");
      setPassword("");
    } catch (error) {
      setError("Error: " + error.message);
    }
  };

  return (
    <div className="p-6 bg-green-100 min-h-screen">
      <nav className="bg-gray-800 p-4 text-white">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/management" className="hover:underline">
              Management
            </Link>
          </li>
        </ul>
      </nav>

      <h1 className="text-4xl font-bold text-green-800 mb-6">Management Page</h1>

      <div className="mb-6 flex justify-center">
        <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Register New Account</h2>
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded w-full"
            >
              Register
            </button>
          </form>
          {error && <p className="text-red-500 mt-4">{error}</p>}
          {success && <p className="text-green-500 mt-4">{success}</p>}
        </div>
      </div>
    </div>
  );
};

export default ManagementPage;
