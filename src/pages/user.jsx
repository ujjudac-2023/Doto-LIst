import React, { useEffect, useState } from "react";

const UserPage = () => {
  const [user, setUser] = useState({ username: "", email: "" });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 to-pink-300 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Welcome, {user.username || "User"}! 🌟
        </h2>

        <div className="space-y-4 text-gray-700">
          <div className="flex justify-between">
            <span className="font-medium">Username:</span>
            <span>{user.username}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Email:</span>
            <span>{user.email}</span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">You're now logged in. Enjoy your stay!</p>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
