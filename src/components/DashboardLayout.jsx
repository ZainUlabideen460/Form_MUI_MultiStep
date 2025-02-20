import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  LayoutDashboard,
  MessageSquare,
  Calendar,
  ContactRound,
  Megaphone,
  Globe,
  BarChart3,
  AppWindow,
  Smartphone,
  Settings,
  ChevronDown,
  Bell,
  Menu
} from 'lucide-react';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className={`bg-[#1e2532] text-gray-300 ${isSidebarOpen ? 'w-60' : 'w-20'} transition-all duration-300`}>
        {/* Logo Section */}
        <div className="p-4 flex items-center">
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500 text-2xl">↑↑</span>
            {isSidebarOpen && <span className="font-semibold">Blitz - Tritanium</span>}
          </div>
        </div>

        {/* Search Bar */}
        <div className="px-4 py-2">
          <div className="flex items-center bg-[#2a3441] rounded-md p-2">
            <Search size={18} className="text-gray-400" />
            {isSidebarOpen && (
              <>
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent border-none focus:outline-none text-sm ml-2 w-full text-gray-300"
                />
                <span className="text-xs text-gray-500">ctrl K</span>
              </>
            )}
          </div>
        </div>

        {/* Menu Items */}
        <nav className="mt-4">
          <MenuItem icon={<LayoutDashboard size={20} />} text="Dashboard" isOpen={isSidebarOpen} />
          <MenuItem icon={<MessageSquare size={20} />} text="Conversations" isOpen={isSidebarOpen} />
          <MenuItem icon={<Calendar size={20} />} text="Calendars" isOpen={isSidebarOpen} />
          <MenuItem icon={<ContactRound size={20} />} text="Contacts" isOpen={isSidebarOpen} />
          <MenuItem icon={<Megaphone size={20} />} text="Marketing" isOpen={isSidebarOpen} />
          <MenuItem icon={<Globe size={20} />} text="Sites" isOpen={isSidebarOpen} />
          <MenuItem icon={<BarChart3 size={20} />} text="Reporting" isOpen={isSidebarOpen} />
          <MenuItem icon={<AppWindow size={20} />} text="App Marketplace" isOpen={isSidebarOpen} />
          <MenuItem icon={<Smartphone size={20} />} text="Mobile App" isOpen={isSidebarOpen} />
          <MenuItem icon={<Settings size={20} />} text="Settings" isOpen={isSidebarOpen} />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white h-16 border-b flex items-center justify-between px-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-600 hover:text-gray-900"
          >
            <Menu size={24} />
          </button>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <Bell size={20} />
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                MG
              </div>
              <ChevronDown size={20} className="text-gray-600" />
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-6">
          <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
            <div className="text-center">
              <div className="mb-4">
                <span className="text-blue-500 text-5xl">🔒</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-700">
                You do not have permission to view the dashboard
              </h2>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const MenuItem = ({ icon, text, isOpen }) => {
  return (
    <Link 
      to="#" 
      className="flex items-center px-4 py-3 text-gray-300 hover:bg-[#2a3441] transition-colors"
    >
      <span className="flex items-center justify-center w-6">{icon}</span>
      {isOpen && <span className="ml-3 text-sm">{text}</span>}
    </Link>
  );
};

export default DashboardLayout;