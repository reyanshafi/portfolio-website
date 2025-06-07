'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-950/95 backdrop-blur-md shadow-xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <span className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300 uppercase">
              Rayan<span className="text-yellow-400 group-hover:text-white transition-colors duration-300">Shafi</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${pathname === link.href ? 'text-yellow-400 font-medium' : 'text-gray-300 hover:text-white hover:bg-gray-800'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-gray-300 hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              aria-label="Toggle menu"
              onClick={toggleMobileMenu}
            >
              {/* Animated Hamburger Icon */}
              <div className="space-y-2">
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-sm" onClick={toggleMobileMenu}></div>
        <div className={`absolute top-0 right-0 w-64 h-full bg-gray-900 shadow-xl transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full p-6">
            <button
              className="self-end p-2 text-gray-400 hover:text-yellow-400 rounded-full hover:bg-gray-800 transition-colors duration-300"
              onClick={toggleMobileMenu}
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex flex-col space-y-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-lg transition-all duration-300 ${pathname === link.href ? ' text-yellow-400 font-medium' : 'text-gray-300 hover:text-white hover:bg-gray-800'}`}
                  onClick={toggleMobileMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            <div className="mt-auto pt-8 border-t border-gray-800">
              <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Rayan Shafi</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}