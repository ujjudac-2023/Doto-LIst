import React, { useEffect, useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLogin = () => {
    const user = localStorage.getItem("loggedInUser");
    setIsLoggedIn(!!user);
  };

  useEffect(() => {
    checkLogin(); // Initial check on mount

    // Listen to login/logout changes
    const handleAuthChange = () => checkLogin();
    window.addEventListener("authChange", handleAuthChange);

    // Clean up listener
    return () => window.removeEventListener("authChange", handleAuthChange);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");

    // Notify all components of auth change
    window.dispatchEvent(new Event("authChange"));

    // Redirect
    window.location.href = "/login";
  };

  return (
    <header className="bg-white shadow">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-14 lg:h-16">
          <div className="flex-shrink-0">
            <a href="/" className="flex">
              <h1 className="text-xl font-semibold text-black lg:text-2xl">
                MY TODO LIST
              </h1>
            </a>
          </div>

          <button
            onClick={toggleMobileMenu}
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>

          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            {[
              { name: "Home", link: "/" },
              { name: "About", link: "/about" },
              { name: "What?", link: "/what-to-implement" },
              { name: "Services", link: "/services" }
            ].map(({ name, link }) => (
              <a
                key={name}
                href={link}
                className="text-base font-medium text-black transition hover:text-blue-600"
              >
                {name}
              </a>
            ))}
          </div>

          {!isLoggedIn ? (
            <a
              href="/login"
              className="hidden lg:inline-flex items-center justify-center px-4 py-2 ml-10 text-base font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Login
            </a>
          ) : (
            <button
              onClick={handleLogout}
              className="hidden lg:inline-flex items-center justify-center px-4 py-2 ml-10 text-base font-semibold text-white bg-red-500 rounded-md hover:bg-red-600"
            >
              Logout
            </button>
          )}
        </nav>

        {isMobileMenuOpen && (
          <nav className="bg-white border-t border-gray-200 rounded-md shadow-md lg:hidden">
            <div className="flex flex-col px-6 py-4 space-y-2">
              {["Features", "Solutions", "Resources", "Pricing"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-base font-medium text-black transition hover:text-blue-600"
                >
                  {item}
                </a>
              ))}

              {!isLoggedIn ? (
                <a
                  href="/login"
                  className="mt-4 inline-flex justify-center px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  Login
                </a>
              ) : (
                <button
                  onClick={handleLogout}
                  className="mt-4 inline-flex justify-center px-4 py-2 text-base font-semibold text-white bg-red-500 rounded-md hover:bg-red-600"
                >
                  Logout
                </button>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;