import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div
      className="h-screen flex flex-col items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/path-to-your-image.jpg')",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-8 bg-blue-800 bg-opacity-70 inline-block px-6 py-3 rounded-xl shadow-lg">
          Welcome to the Loan Application System
        </h1>

        <div className="grid gap-4 mt-6">
          <Link
            to="/register"
            className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-teal-500 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition"
          >
            Login
          </Link>
          <Link
            to="/apply-loan"
            className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition"
          >
            Apply for a Loan
          </Link>
          <Link
            to="/dashboard"
            className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-red-500 to-orange-500 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
