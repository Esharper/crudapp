"use client"
import React, { useEffect } from "react";
import { app, analytics } from "./lib/firebase.config";
import Link from "next/link";

const Home = () => {
  useEffect(() => {
    // Example: Use Firebase services here, such as Firestore, Auth, etc.
    // Ensure Firebase Analytics runs only on the client side
    if (analytics) {
      console.log("Firebase Analytics is initialized");
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-green-100">
      {/* Navigation Bar */}
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

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow p-6">
        <h1 className="mb-6 text-4xl font-bold text-green-800">
          Welcome to Sharper Enterprise and Lawn Services
        </h1>

        <p className="mb-6 text-2xl font-bold text-green-700">
          Premier Luxury Lawn Care in Louisiana
        </p>

        <h3 className="mb-6 text-2xl font-bold text-green-600">Our Exclusive Services</h3>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Service 1 */}
          <div className="p-4 mb-4 bg-white rounded shadow-md">
            <div className="text-4xl mb-2">🌿</div>
            <h2 className="text-xl font-bold text-green-800">Executive Lawn Maintenance</h2>
            <p className="text-gray-700">Top-tier lawn care with weekly maintenance and premium products.</p>
            <p className="text-gray-500">Available: Yes</p>
            <p className="text-gray-700 font-bold">Price: Starting at $200/month</p>
          </div>

          {/* Service 2 */}
          <div className="p-4 mb-4 bg-white rounded shadow-md">
            <div className="text-4xl mb-2">🏡</div>
            <h2 className="text-xl font-bold text-green-800">Luxury Landscaping Design</h2>
            <p className="text-gray-700">Custom landscape designs with elegant touches, tailored to your preferences.</p>
            <p className="text-gray-500">Available: Yes</p>
            <p className="text-gray-700 font-bold">Price: Starting at $5,000</p>
          </div>

          {/* Service 3 */}
          <div className="p-4 mb-4 bg-white rounded shadow-md">
            <div className="text-4xl mb-2">🌻</div>
            <h2 className="text-xl font-bold text-green-800">Premium Seasonal Care</h2>
            <p className="text-gray-700">Seasonal treatments to keep your lawn pristine all year round.</p>
            <p className="text-gray-500">Available: Yes</p>
            <p className="text-gray-700 font-bold">Price: Starting at $500/season</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
