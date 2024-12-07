import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div
      className="h-screen flex flex-col items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-8 bg-opacity-5  inline-block px-6 py-3 rounded-xl ">
          Welcome to the Loan Application System
        </h1>

  <div className="flex justify-center gap-7">
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
