import React from "react";

const WhatToImplement = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 to-pink-300 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-extrabold text-center text-purple-700 mb-6">
          🚀 What To Implement More
        </h2>

        <ul className="list-disc list-inside text-gray-700 space-y-4 text-lg">
          <li>
            ✅ <strong>User Authentication:</strong> Integrate JWT for secure login/signup.
          </li>
          <li>
            📝 <strong>Profile Page:</strong> Allow users to view and edit their profiles.
          </li>
          <li>
            📅 <strong>Due Dates:</strong> Add due dates and reminders to todos.
          </li>
          <li>
            📊 <strong>Analytics Dashboard:</strong> Visualize task completion stats.
          </li>
          <li>
            🌙 <strong>Dark Mode:</strong> Let users toggle between light and dark themes.
          </li>
          <li>
            🌐 <strong>Multi-language Support:</strong> Make the app accessible globally.
          </li>
          <li>
            📱 <strong>Mobile Responsiveness:</strong> Improve mobile UI and add PWA support.
          </li>
        </ul>

        <p className="text-center text-gray-500 mt-6">
          Got more ideas? Let us know or contribute on GitHub! 💡
        </p>
      </div>
    </div>
  );
};

export default WhatToImplement;
