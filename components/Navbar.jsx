'use client'
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-[#101011] to-[#090909] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold">
              Rayan <span className="text-yellow-400">Shafi</span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-yellow-400 hover:text-white focus:outline-none focus:text-white"
              aria-label="Toggle menu"
              onClick={toggleMobileMenu}
            >
              {/* Hamburger Icon */}
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
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
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-[#101011] to-[#090909] text-white fixed top-0 right-0 w-64 h-full z-40 shadow-lg">
          <div className="flex flex-col space-y-6 p-6">
            <button
              className="self-end text-gray-400 hover:text-white"
              onClick={toggleMobileMenu}
            >
              {/* Close Icon */}
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Link
              href="/"
              className="hover:text-yellow-400 transition-colors duration-300"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-yellow-400 transition-colors duration-300"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link
              href="/projects"
              className="hover:text-yellow-400 transition-colors duration-300"
              onClick={toggleMobileMenu}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="hover:text-yellow-400 transition-colors duration-300"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}