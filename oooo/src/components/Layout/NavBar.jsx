import { useState } from "react";
import NavLinks from "./content/NavLinks";
import { useEffect } from "react";
import Auth from "./content/Autentication";
import { Link } from "react-router-dom";
import Profile from "./content/Profile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    setAuth(localStorage.getItem("usr_state"));
  }, [isAuth]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-white text-2xl font-semibold">
            MyLogo
          </Link>

          {/* Menu Button for mobile view */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          {!isMenuOpen && isAuth ? (
            <>
              <NavLinks isMenuOpen={isMenuOpen} />
              <Profile setAuth={setAuth}/>
            </>
          ) : (
            <Auth isMenuOpen={isMenuOpen} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-blue-600 py-4">
          {isAuth ? (
            <NavLinks isMenuOpen={isMenuOpen} />
          ) : (
            <Auth isMenuOpen={isMenuOpen} />
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
