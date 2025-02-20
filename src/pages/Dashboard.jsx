import React from "react";
import { FaCoffee, FaShoppingCart, FaExclamationTriangle, FaTruck, FaChartBar, FaClipboardList } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="p-8">
      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <DashboardCard
          title="Total Inventory Value"
          value="AED 100,000"
          icon={<FaCoffee />}
          color="bg-gradient-to-r from-teal-400 to-teal-600"
        />
        <DashboardCard
          title="Sales Today"
          value="AED 5,000"
          icon={<FaShoppingCart />}
          color="bg-gradient-to-r from-green-400 to-green-600"
        />
        <DashboardCard
          title="Low Stock Alerts"
          value="3 Items"
          icon={<FaExclamationTriangle />}
          color="bg-gradient-to-r from-yellow-400 to-yellow-600"
        />
        <DashboardCard
          title="Incoming Deliveries"
          value="2 Orders"
          icon={<FaTruck />}
          color="bg-gradient-to-r from-red-400 to-red-600"
        />
      </div>

      {/* Inventory Trends and Recent Activity in the Same Row */}
      <div className="mt-12 flex flex-col sm:flex-row sm:space-x-8">
        {/* Inventory Trends Section */}
        <div className="flex-1 p-6 bg-white rounded-lg shadow-lg mb-8 sm:mb-0">
          <h2 className="text-xl font-semibold mb-4">Inventory Trends</h2>
          <div className="h-64">
            <FaChartBar className="text-gray-400 text-6xl mx-auto" />
            {/* Replace with actual chart */}
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="flex-1 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <RecentActivityCard
              title="New inventory received"
              timestamp="2 hours ago"
              icon={<FaClipboardList />}
              color="bg-gradient-to-r from-teal-500 to-teal-700"
            />
            <RecentActivityCard
              title="Order #123 shipped"
              timestamp="5 hours ago"
              icon={<FaShoppingCart />}
              color="bg-gradient-to-r from-green-500 to-green-700"
            />
            <RecentActivityCard
              title="Low stock alert on Tapioca Pearls"
              timestamp="1 day ago"
              icon={<FaExclamationTriangle />}
              color="bg-gradient-to-r from-yellow-500 to-yellow-700"
            />
            <RecentActivityCard
              title="Supplier update: Green Coffee Beans"
              timestamp="2 days ago"
              icon={<FaTruck />}
              color="bg-gradient-to-r from-red-500 to-red-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ title, value, icon, color }) => {
  return (
    <div className={`${color} text-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow flex items-center cursor-pointer`}>
      <div className="text-4xl">{icon}</div>
      <div className="ml-5">
        <p className="text-sm font-medium text-gray-100">{title}</p>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
    </div>
  );
};

const RecentActivityCard = ({ title, timestamp, icon, color }) => {
  return (
    <div className={`${color} text-white p-4 rounded-lg shadow-md flex items-center space-x-4 hover:shadow-lg transition-shadow`}>
      <div className="text-3xl">{icon}</div>
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-gray-200">{timestamp}</p>
      </div>
    </div>
  );
};

export default Dashboard;
