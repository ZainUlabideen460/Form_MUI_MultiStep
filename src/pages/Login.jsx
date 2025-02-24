import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'animate.css';

// Import logo
import logo from '../images/logo.png'; // Adjust the path as necessary

export const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [checkRemember, setCheckRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true); // Start loading animation

    // Simulate async action (e.g. API call)
    setTimeout(() => {
      if (!username.trim()) {
        setError("Please enter a username");
        setLoading(false);
        return;
      }
      if (!password.trim()) {
        setError("Please enter a password");
        setLoading(false);
        return;
      }
      // if (!checkRemember) {
      //   setError("Please remember me");
      //   setLoading(false);
      //   return;
      // }
      if (username === "admin" && password === "1234") {
        setError("");
        navigate("/dashboard");
      } else {
        setError("Invalid credentials");
      }
      setLoading(false); // End loading animation
    }, 2000); // Simulate delay
  };

  const handleChange = (e) => {
    setError("");
    if (e.target.name === "username") {
      setUsername(e.target.value);
    }
    // if (e.target.name === "checkRemember") {
    //   setCheckRemember(e.target.checked);
    // }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-teal-500 bg-fixed bg-cover">
      <div className="bg-white p-10 rounded-xl shadow-xl w-96 max-w-sm relative animate__animated animate__fadeInUp">
        {/* Logo at the top */}
        <div className="flex justify-center mb-8">
          <img src={logo} alt="Tihami Coffee Logo" className="h-20 w-20 rounded-full transform transition-transform duration-300 hover:scale-110" />
        </div>

        {/* Tihami Coffee Title with Animation */}
        <h2 className="text-4xl font-semibold text-center text-gray-700 mb-8 animate__animated animate__fadeIn animate__delay-1s">
          Tihami Coffee
        </h2>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        {/* Username and Password Fields */}
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          value={username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-3 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          value={password}
          onChange={handleChange}
        />

        {/* Remember Me Checkbox */}
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center text-sm text-gray-600">
            <input
              type="checkbox"
              name="checkRemember"
              className="mr-2"
              checked={checkRemember}
              onChange={handleChange}
            />
            Remember Me
          </label>
          <a href="#" className="text-blue-500 text-sm">
            Forgot Password?
          </a>
        </div>

        {/* Login Button with Animation */}
        <button
          className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-all duration-300"
          onClick={handleClick}
          disabled={loading}
        >
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="loader"></div>
              <span className="ml-2">Loading...</span>
            </div>
          ) : (
            "Login"
          )}
        </button>

        {/* Loader (Overlay) */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 rounded-md z-10">
            <div className="flex flex-col items-center">
              <div className="spinner-border animate-spin rounded-full h-20 w-20 border-t-4 border-blue-500">
                <img src={logo} alt="Logo" className="h-14 w-14 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
