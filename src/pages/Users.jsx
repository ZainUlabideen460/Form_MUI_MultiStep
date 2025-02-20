import React, { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", enabled: true },
    { id: 2, name: "Alice Smith", email: "alice@example.com", role: "User", enabled: true },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  // Toggle User Enable/Disable
  const handleToggleUser = (id) => {
    setUsers(users.map(user => user.id === id ? { ...user, enabled: !user.enabled } : user));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>

      {/* Search Input */}
      <div className="flex items-center justify-between mb-4 gap-4">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full md:w-1/2 p-2 border rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-700 text-white">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Role</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter((user) =>
                user.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((user) => (
                <tr key={user.id} className="text-center border">
                  <td className="p-2 border">{user.id}</td>
                  <td className="p-2 border">{user.name}</td>
                  <td className="p-2 border">{user.email}</td>
                  <td className="p-2 border">{user.role}</td>
                  <td className="p-2 border">{user.enabled ? "Enabled" : "Disabled"}</td>
                  <td className="p-2 border">
                    <button
                      className={`px-3 py-1 rounded-lg ${user.enabled ? "bg-red-600" : "bg-green-600"} text-white`}
                      onClick={() => handleToggleUser(user.id)}
                    >
                      {user.enabled ? "Disable" : "Enable"}
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
