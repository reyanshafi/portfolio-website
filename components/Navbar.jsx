'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" }
  ];

  const bgClass = (isScrolled || menuOpen)
    ? 'bg-[#1f1f1f] shadow-sm border-b border-gray-700'
    : 'bg-[#1f1f1f]';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="text-white text-xl font-semibold uppercase tracking-wider hover:text-red-400 transition-all duration-300">
            Rayan<span className="text-red-600">Shafi</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 text-sm font-light tracking-wide">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-all duration-200 border-b-2 ${
                  pathname === link.href
                    ? 'text-red-600 border-red-600'
                    : 'text-white border-transparent hover:text-red-400 hover:border-red-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Resume Button */}
          <div className="hidden md:flex">
            <a
              href="/resume.pdf"
              download
              className="bg-red-600 text-white px-4 py-2 text-sm font-medium hover:bg-red-700 transition-all duration-300"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#1f1f1f] shadow-md border-l border-gray-700 transform transition-transform duration-300 ease-in-out
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-white hover:text-red-400 focus:outline-none"
          aria-label="Close menu"
        >
          <FaTimes size={20} />
        </button>

        <div className="flex flex-col space-y-6 px-6 pt-16 pb-10 text-white font-light tracking-wide h-full">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-2 text-lg ${
                pathname === link.href
                  ? 'text-red-400 font-semibold'
                  : 'text-white hover:text-red-400'
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            download
            className="mt-auto inline-block bg-red-500 text-white px-6 py-2 text-sm font-medium hover:bg-red-600 transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}
