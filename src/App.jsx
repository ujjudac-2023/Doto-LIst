import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import TodoContainer from "./components/TodoContainer";
import Footer from "./Footer/Footer";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Services from "./pages/Service";
import WhatToImplement from "./pages/WhatToImplement";
import UserPage from "./pages/user";


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-pink-500">
        <Header />
        <Routes>
          <Route path="/" element={<TodoContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/services" element={<Services />} />
          <Route path="/what-to-implement" element={<WhatToImplement />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
