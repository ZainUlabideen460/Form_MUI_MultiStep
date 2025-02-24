import React, { useState, useRef, useEffect } from "react";
import { FaBell, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from '../images/logo.png';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const [time, setTime] = useState(new Date());

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format time as HH:MM:SS AM/PM
  const formattedTime = time.toLocaleTimeString();

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-900 h-36 flex items-center justify-between px-6 shadow-md">
      {/* Left side - Logo */}
      <div className="flex items-center space-x-3">
        <img
          src={logo}
          alt="Tihami Coffee"
          className="w-32 h-28 "
        />
      </div>

      {/* Center - Title */}
      <div className="flex-1 flex justify-center">
        <h1 className="text-white font-extrabold text-lg md:text-xl font-poppins tracking-wide">
          Tihami Inventory Management System
        </h1>
      </div>

      {/* Right side - Notifications, Time, and Profile */}
      <div className="flex items-center space-x-5">
        {/* Time Display */}
        <span className="text-white text-lg font-bold">
          {formattedTime}
        </span>

        {/* Notifications */}
        <button className="p-2 hover:bg-blue-500 rounded-full transition duration-200">
          <FaBell className="text-white text-xl" />
        </button>

        {/* Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <div
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="w-10 h-10 bg-purple-800 hover:bg-purple-900 rounded-full flex items-center justify-center transition duration-200 ring-2 ring-purple-300">
              <FaUser className="text-white text-lg" />
            </div>
            <span className="text-white text-sm font-medium hidden md:inline group-hover:text-purple-200 transition">
              John Doe
            </span>
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50 overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="text-gray-800 font-semibold">John Doe</p>
                <p className="text-gray-500 text-sm truncate">admin@example.com</p>
              </div>

              <a href="/profile" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 transition">
                <FaUser className="text-gray-600 mr-3" />
                <span className="font-medium">Profile</span>
              </a>

              <a href="/settings" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 transition">
                <FaCog className="text-gray-600 mr-3" />
                <span className="font-medium">Settings</span>
              </a>

              <button 
                onClick={() => navigate("/login")}
                className="flex items-center w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 transition border-t border-gray-100"
              >
                <FaSignOutAlt className="mr-3" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
