import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");
  const [checkrember, setcheckrember] = useState(false);

  const handleClick = () => {
    if (!username.trim()) {
      seterror("Please enter a username");
      return;
    }
    if (!password.trim()) {
      seterror("Please enter a password");
      return;
    }
    if (!checkrember) { // Fix: No need to use checkrember.checked
      seterror("Please remember me");
      return;
    }
    if (username === "admin" && password === "1234") {
      seterror("");
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  const handleChange = (e) => {
    seterror("");
    if (e.target.name === "username") {
      setUsername(e.target.value);
    }
    if (e.target.name === "checkrember") {
      setcheckrember(e.target.checked); // Fix: Correctly updating checkbox state
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full p-2 mb-4 border rounded-md"
          value={username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded-md"
          value={password}
          onChange={handleChange}
        />
        <div className="flex justify-between mb-4">
          <label className="text-sm">
            <input
              type="checkbox"
              name="checkrember"
              className="mr-2"
              checked={checkrember} // Fix: Use checked instead of value
              onChange={handleChange}
            />{" "}
            Remember Me
          </label>
          <a href="#" className="text-blue-500 text-sm">
            Forgot Password?
          </a>
        </div>
        <button
          className="w-full bg-blue-500 text-white p-2 rounded-md"
          onClick={handleClick}
        >
          Login
        </button>
      </div>
    </div>
  );
};
