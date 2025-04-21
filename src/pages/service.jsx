import React from "react";

const Services = () => {
  const services = [
    {
      title: "Task Management",
      description: "Organize your daily tasks efficiently and never miss a deadline.",
      icon: "📝",
    },
    {
      title: "Reminders",
      description: "Set up timely reminders to stay on top of your goals and to-dos.",
      icon: "⏰",
    },
    {
      title: "Collaboration",
      description: "Share your task lists with team members for better productivity.",
      icon: "🤝",
    },
    {
      title: "Progress Tracking",
      description: "Monitor your progress and see completed tasks in one view.",
      icon: "📊",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 to-pink-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-purple-800 mb-10">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
