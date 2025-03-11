// components/Navbar.tsx
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavbarLogic } from "./js/navbar.ts";
import "./css/navbar.css";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/supabaseClient";

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/exercise', label: 'Demo' },
  { path: '/album', label: 'Gallery' },
  { path: '/community', label: 'Community' },
  { path: '/terms', label: 'Terms' },
];

const Navbar: React.FC = () => {
  const { linkClasses } = useNavbarLogic();
  const { isLoggedIn, user } = useAuth();
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const avatarRef = useRef<HTMLImageElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => (location.pathname === path ? "active-link" : "");
  const firstName = user?.user_metadata?.firstName || "";

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        avatarRef.current &&
        !avatarRef.current.contains(e.target as Node) &&
        !(e.target as Element).closest(".navbar-dropdown")
      ) {
        setShowDropdown(false);
      }

      if (
        isMenuOpen &&
        burgerRef.current &&
        !burgerRef.current.contains(e.target as Node) &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className="w-full h-[7vh] bg-[#F9F5F3] flex items-center justify-between px-8 lg:px-16 shadow-md navbar relative">
      <div className="flex items-center space-x-4 lg:space-x-10">
        {/* Burger Menu (hidden on LG+) */}
        <button
          ref={burgerRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-[#5b352e] bg-transparent"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Logo (visible only on LG+) */}
        <Link to="/" aria-label="Home" className="hidden lg:block">
          <img
            src="/ArtistryHealsLogoNoBg.png"
            alt="Logo"
            className="h-12"
          />
        </Link>

        {/* Desktop Nav Links (visible only on LG+) */}
        <div className="hidden lg:flex items-center space-x-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${linkClasses(link.path)} ${isActive(link.path)}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu (hidden on LG+) */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute lg:hidden top-full left-0 w-full bg-[#F9F5F3] shadow-lg z-50"
        >
          <div className="flex flex-col p-4 space-y-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${linkClasses(link.path)} ${isActive(link.path)} p-3 rounded-lg hover:bg-gray-100`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Right Side Content */}
      <div className="flex items-center space-x-4 relative">
        {isLoggedIn ? (
          <>
            <span className="hidden lg:inline text-[#5b352e] font-medium">
              Welcome, {firstName}
            </span>
            <img
              ref={avatarRef}
              src="https://i.postimg.cc/nrsfy05S/screenshot-20240808-102244.png"
              alt="User Avatar"
              className="w-8 h-8 rounded-full cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && (
              <div className="navbar-dropdown absolute top-14 right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md py-2">
                <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  My Profile
                </Link>
                <Link to="/" onClick={handleLogout} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Sign Out
                </Link>
                <Link to="/terms" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Terms
                </Link>
              </div>
            )}
          </>
        ) : (
          <>
            {/* Login Button (visible only on LG+) */}
            <Link
              to="/login"
              className="hidden lg:inline-block bg-[#5b352e] text-white px-4 py-2 rounded hover:bg-opacity-90"
            >
              Login
            </Link>
            <img
              src="https://i.postimg.cc/nrsfy05S/screenshot-20240808-102244.png"
              alt="Guest Avatar"
              className="w-8 h-8 rounded-full cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown && (
              <div className="navbar-dropdown absolute top-14 right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md py-2">
                <Link to="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Log In
                </Link>
                <Link to="/terms" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Terms
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;