import React, { useState } from "react";
import { FaCoffee, FaSearch, FaBox, FaCogs, FaHome, FaUsers, FaChartBar, FaClipboardList, FaCog, FaTachometerAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation(); // To determine active link

  return (
    <div className={`max-h-full bg-black to-brown-900 text-white ${isOpen ? "w-64" : "w-16"} transition-all duration-300 flex flex-col`}>
      {/* Logo and Toggle Button */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          {/* Logo */}
          {isOpen && <h1 className="text-xl font-bold">Tihami Coffee</h1>}
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-xl">
          <FaCoffee />
        </button>
      </div>

      {/* Search Bar */}
      <div className="p-3">
        <div className="relative">
          <FaSearch className="absolute left-4 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-800 pl-10 p-2 rounded-md text-white focus:outline-none"
          />
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 mt-4 bg-black">
        <ul className="space-y-2">
          <SidebarItem Icon={FaTachometerAlt} text="Dashboard" link="/dashboard" isOpen={isOpen} active={location.pathname === "/dashboard"} />
          <SidebarItem Icon={FaBox} text="Product" link="/product" isOpen={isOpen} active={location.pathname === "/product"} />
          <SidebarItem Icon={FaBox} text="Inventory Management" link="/inventory" isOpen={isOpen} active={location.pathname === "/inventory"} />
          <SidebarItem Icon={FaClipboardList} text="Orders" link="/orders" isOpen={isOpen} active={location.pathname === "/orders"} />
          <SidebarItem Icon={FaUsers} text="Suppliers" link="/suppliers" isOpen={isOpen} active={location.pathname === "/suppliers"} />
          <SidebarItem Icon={FaChartBar} text="Analytics" link="/analytics" isOpen={isOpen} active={location.pathname === "/analytics"} />
        </ul>
      </nav>

      {/* Settings */}
      <div className="p-4 border-t border-gray-700">
        <SidebarItem Icon={FaCog} text="Settings" link="/settings" isOpen={isOpen} active={location.pathname === "/settings"} />
      </div>
    </div>
  );
};

const SidebarItem = ({ Icon, text, link, isOpen, active }) => {
  return (
    <li className={`flex items-center p-3 hover:bg-brown-800 rounded-md cursor-pointer ${active ? "bg-brown-600" : ""}`}>
      <Link to={link} className="flex items-center w-full">
        <div className={`flex items-center justify-center ${isOpen ? "w-8" : "w-10"}`}>
          <Icon className={`text-lg ${active ? "text-yellow-300" : "text-white"}`} />
        </div>
        {isOpen && <span className="ml-4">{text}</span>}
      </Link>
    </li>
  );
};

export default Sidebar;
