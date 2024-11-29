import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Welcome to the Loan Application System</h1>
      <div className="grid gap-4">
        <Link
          to="/register"
          className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="px-6 py-3 text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 transition"
        >
          Login
        </Link>
        <Link
          to="/apply-loan"
          className="px-6 py-3 text-white bg-purple-500 rounded-lg shadow-md hover:bg-purple-600 transition"
        >
          Apply for a Loan
        </Link>
        <Link
          to="/dashboard"
          className="px-6 py-3 text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 transition"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
