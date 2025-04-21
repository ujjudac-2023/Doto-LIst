import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const signUp = async (username, email, password) => {
    try {
      const response = await fetch("http://localhost:8080/api/todos/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const responseText = await response.text(); // ✅ get text response

      if (response.ok) {
        console.log("User registered successfully:", responseText);
        navigate("/login");
      } else {
        setErrorMessage(responseText || "Error registering user");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setErrorMessage("An error occurred while registering. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    signUp(formData.name, formData.email, formData.password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 to-pink-300 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-purple-700 mb-6">
          Sign Up
        </h2>

        {errorMessage && (
          <div className="text-red-500 mb-4">{errorMessage}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-800">
              Username
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-pink-500 text-white font-semibold text-lg rounded-md shadow-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-pink-500 hover:text-pink-600 font-semibold"
            >
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
