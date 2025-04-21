import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 to-pink-300">
      <div className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Welcome to our website! We are dedicated to providing excellent service and products to our users.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="relative flex flex-col items-center text-center">
              <div className="max-w-lg mx-auto">
                <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
                <p className="mt-4 text-gray-600">
                  Our mission is to make life easier by offering innovative solutions that address the core needs of our customers. We are committed to excellence in everything we do.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col items-center text-center">
              <div className="max-w-lg mx-auto">
                <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
                <p className="mt-4 text-gray-600">
                  Our vision is to be the leading provider of cutting-edge solutions, building long-term relationships with our customers by understanding their evolving needs and delivering exceptional value.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Meet Our Team</h3>
            <p className="mt-4 text-lg text-gray-500">A group of passionate individuals working together to bring the best results for you.</p>

            <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center">
                <img
                  className="w-24 h-24 rounded-full"
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Team member"
                />
                <h4 className="mt-4 text-xl font-semibold text-gray-800">John Doe</h4>
                <p className="mt-2 text-gray-600">CEO & Founder</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-24 h-24 rounded-full"
                  src="https://randomuser.me/api/portraits/women/50.jpg"
                  alt="Team member"
                />
                <h4 className="mt-4 text-xl font-semibold text-gray-800">Jane Smith</h4>
                <p className="mt-2 text-gray-600">Chief Technology Officer</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-24 h-24 rounded-full"
                  src="https://randomuser.me/api/portraits/men/15.jpg"
                  alt="Team member"
                />
                <h4 className="mt-4 text-xl font-semibold text-gray-800">Sam Wilson</h4>
                <p className="mt-2 text-gray-600">Product Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
