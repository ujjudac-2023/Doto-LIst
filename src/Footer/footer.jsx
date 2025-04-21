import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        rel="stylesheet"
      />

      <div className="flex justify-center space-x-6 mb-4">
        <a href="#!" className="text-white hover:text-blue-500">
          <i className="fab fa-facebook-f text-xl"></i>
        </a>
        <a href="#!" className="text-white hover:text-blue-500">
          <i className="fab fa-twitter text-xl"></i>
        </a>
        <a href="#!" className="text-white hover:text-blue-500">
          <i className="fab fa-google text-xl"></i>
        </a>
        <a href="#!" className="text-white hover:text-blue-500">
          <i className="fab fa-instagram text-xl"></i>
        </a>
        <a href="#!" className="text-white hover:text-blue-500">
          <i className="fab fa-linkedin text-xl"></i>
        </a>
        <a href="#!" className="text-white hover:text-blue-500">
          <i className="fab fa-github text-xl"></i>
        </a>
      </div>

      <div className="text-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} Sanvii Techmet. All Rights Reserved.
        </p>
       <p>
         Powered by{' '}
         <a
           href="/"
           target="_blank"
           rel="noopener noreferrer"
           className="text-blue-400 hover:text-blue-600"
         >
           Sanvii Techmet
         </a>
       </p>

      </div>
    </footer>
  );
};

export default Footer;
