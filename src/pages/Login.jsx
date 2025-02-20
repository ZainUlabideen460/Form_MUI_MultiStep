import React from 'react'

export const Login = () => {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded-md" />
          <input type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded-md" />
          <div className="flex justify-between mb-4">
            <label className="text-sm">
              <input type="checkbox" className="mr-2" /> Remember Me
            </label>
            <a href="#" className="text-blue-500 text-sm">Forgot Password?</a>
          </div>
          <button className="w-full bg-blue-500 text-white p-2 rounded-md">Login</button>
        </div>
      </div>
    );
  };
