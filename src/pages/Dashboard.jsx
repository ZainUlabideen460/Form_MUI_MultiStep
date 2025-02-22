import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCoffee, FaShoppingCart, FaExclamationTriangle, FaTruck, FaChartBar, FaClipboardList } from "react-icons/fa";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalInventoryValue: "Loading...",
    salesToday: "Loading...",
    lowStockAlerts: "Loading...",
    incomingDeliveries: "Loading...",
    recentActivities: []
  });

  useEffect(() => {
    // axios.get('https://localhost:7296/api/Dashboard')
    axios.get('http://raoyasirnisar-001-site5.ntempurl.com/api/Dashboard')
      .then(response => {
        setDashboardData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="p-8">
      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <DashboardCard
          title="Total Inventory Value"
          value={dashboardData.totalInventoryValue}
          icon={<FaCoffee />}
          color="bg-gradient-to-r from-teal-400 to-teal-600"
        />
        <DashboardCard
          title="Sales Today"
          value={dashboardData.salesToday}
          icon={<FaShoppingCart />}
          color="bg-gradient-to-r from-green-400 to-green-600"
        />
        <DashboardCard
          title="Low Stock Alerts"
          value={dashboardData.lowStockAlerts}
          icon={<FaExclamationTriangle />}
          color="bg-gradient-to-r from-yellow-400 to-yellow-600"
        />
        <DashboardCard
          title="Incoming Deliveries"
          value={dashboardData.incomingDeliveries}
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
            {dashboardData.recentActivities.map((activity, index) => (
              <RecentActivityCard
                key={index}
                title={activity.title}
                timestamp={activity.timestamp}
                icon={getIcon(activity.icon)}
                color={activity.color}
              />
            ))}
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

const getIcon = (iconName) => {
  switch (iconName) {
    case 'FaCoffee':
      return <FaCoffee />;
    case 'FaShoppingCart':
      return <FaShoppingCart />;
    case 'FaExclamationTriangle':
      return <FaExclamationTriangle />;
    case 'FaTruck':
      return <FaTruck />;
    case 'FaChartBar':
      return <FaChartBar />;
    case 'FaClipboardList':
      return <FaClipboardList />;
    default:
      return <FaClipboardList />;
  }
};

export default Dashboard;
