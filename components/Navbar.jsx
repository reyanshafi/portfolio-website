'use client'
import { useState, useEffect, useCallback, memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaBlog, FaEnvelope, FaDownload, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import OptimizedImage from "./OptimizedImage";

const Navbar = memo(function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home", icon: FaHome },
    { href: "/about", label: "About", icon: FaUser },
    { href: "/projects", label: "Projects", icon: FaCode },
    { href: "/blog", label: "Blog", icon: FaBlog },
    { href: "/contact", label: "Contact", icon: FaEnvelope }
  ];

  const resumeLink = {
    href: "/resume.pdf",
    label: "Download CV",
    icon: FaDownload,
    download: true
  };

  const socialLinks = [
    { href: "https://github.com", label: "GitHub", icon: FaGithub },
    { href: "https://linkedin.com", label: "LinkedIn", icon: FaLinkedin },
    { href: "tel:+919906512509", label: "Call Me", icon: FaPhone }
  ];

  const bgClass = (isScrolled || menuOpen)
    ? 'bg-[#171717] shadow-lg'
    : 'bg-transparent';

  return (
    <>
      {/* Top Bar with Logo and Navigation - Scrolls with page on Desktop */}
      <nav className={`absolute w-full z-50 transition-all duration-300 mt-4 ${bgClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 rounded-full">
            {/* Logo - Desktop Only */}
            <Link href="/" className="hidden md:flex items-center space-x-3 text-white text-xl font-semibold uppercase tracking-wider hover:text-red-400 transition-all duration-300 ml-4">
              <OptimizedImage
                src="/assets/logo.png"
                alt="Rayan Shafi Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-cover"
              />
              <span>Rayan <span className="text-red-600 font-extrabold">Shafi</span></span>
            </Link>

            {/* Social Media Links - Desktop Center */}
            <div className="hidden md:flex items-center space-x-2 bg-[#2a2a2a] p-2 rounded-full border border-gray-700">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target={social.href.startsWith('tel:') ? '_self' : '_blank'}
                    rel={social.href.startsWith('tel:') ? '' : 'noopener noreferrer'}
                    className="flex items-center justify-center w-9 h-9 rounded-full text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-300"
                    title={social.label}
                  >
                    <IconComponent size={16} />
                  </a>
                );
              })}
            </div>

            {/* Resume Button - Desktop */}
            <div className="hidden md:flex mr-4">
              <a
                href="/resume.pdf"
                download
                className="bg-red-600 text-white px-4 py-2 text-sm font-medium hover:bg-red-700 transition-all duration-300 rounded-full"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Fixed Mobile Navigation Icons - Top */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden">              <div className="flex items-center space-x-3 bg-[#171717] p-3 rounded-full shadow-lg border border-gray-700">
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                  pathname === link.href
                    ? 'bg-red-600 text-white scale-110'
                    : 'text-gray-400 hover:bg-red-600 hover:text-white hover:scale-105'
                }`}
                title={link.label}
              >
                <IconComponent size={18} />
              </Link>
            );
          })}
          {/* Resume Download Icon - Mobile */}
          <a
            href={resumeLink.href}
            download
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/90 text-red-600 hover:bg-red-700 transition-all duration-300"
            title={resumeLink.label}
          >
            <resumeLink.icon size={18} />
          </a>
        </div>
      </div>

      {/* Floating Left Navigation - Desktop */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
        <div className="flex flex-col space-y-4 bg-[#1f1f1f] p-3 rounded-full shadow-lg border border-gray-700">
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                  pathname === link.href
                    ? 'bg-red-600 text-white scale-110'
                    : 'text-gray-400 hover:bg-red-600 hover:text-white hover:scale-105'
                }`}
                title={link.label}
              >
                <IconComponent size={20} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
});

export default Navbar;
