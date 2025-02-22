import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/sidbar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";

import Orders from "./pages/Orders";
import Users from "./pages/Users";
import { Logout } from "./pages/Logout";
import { Login } from "./pages/Login";

// Layout component to wrap authenticated routes
const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Full width header */}
      <Header />
      <div className="flex-1 flex">
        {/* Sidebar below the header */}
        <Sidebar />
        <div className="flex-1 p-4 bg-gray-100">
          {children}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  // You can add authentication check here
  const isAuthenticated = true; // Replace with your auth logic

  return (
    <Router>
      <Routes>
        {/* Public route */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />

        {/* Redirect root to dashboard */}
        {/* <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}

        {/* Protected routes */}
        <Route
          path="/*"
          element={
            isAuthenticated ? (
              <DashboardLayout>
                <Routes>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="users" element={<Users />} />
                  <Route path="logout" element={<Logout />} />
                </Routes>
              </DashboardLayout>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
 