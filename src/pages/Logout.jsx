import React from 'react'
import { Link } from 'react-router-dom';

export const Logout = () => {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
          <h2 className="text-2xl font-bold mb-6">You have been logged out</h2>
          <p className="mb-4">Click below to log in again.</p>
          <Link to="/login" className="w-full bg-blue-500 text-white p-2 rounded-md inline-block">Login Again</Link>
        </div>
      </div>
    );
  };
