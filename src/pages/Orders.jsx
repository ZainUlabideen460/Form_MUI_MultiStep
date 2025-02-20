import React, { useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([
    { id: 101, customer: "John Doe", status: "Processing", total: 120.99 },
    { id: 102, customer: "Alice Smith", status: "Shipped", total: 89.5 },
    { id: 103, customer: "David Wilson", status: "Delivered", total: 240.0 },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  // Handle Status Change
  const handleStatusChange = (index, newStatus) => {
    const updatedOrders = [...orders];
    updatedOrders[index].status = newStatus;
    setOrders(updatedOrders);
  };

  // Handle Order Deletion
  const handleDeleteOrder = (index) => {
    setOrders(orders.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>

      {/* Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-4">
        <input
          type="text"
          placeholder="Search orders..."
          className="w-full md:w-1/2 p-2 border rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-700 text-white">
              <th className="p-2 border">Order ID</th>
              <th className="p-2 border">Customer Name</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Total Price</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders
              .filter((order) =>
                order.customer.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((order, index) => (
                <tr key={index} className="text-center border">
                  <td className="p-2 border">{order.id}</td>
                  <td className="p-2 border">{order.customer}</td>
                  <td className="p-2 border">
                    <select
                      value={order.status}
                      className="p-1 border rounded-lg"
                      onChange={(e) => handleStatusChange(index, e.target.value)}
                    >
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Canceled">Canceled</option>
                    </select>
                  </td>
                  <td className="p-2 border">${order.total.toFixed(2)}</td>
                  <td className="p-2 border">
                    <button
                      className="bg-red-600 text-white px-3 py-1 rounded-lg"
                      onClick={() => handleDeleteOrder(index)}
                    >
                      Delete
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

export default Orders;
