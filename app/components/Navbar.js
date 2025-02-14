import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-indigo-900">
          TunaCRM
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-indigo-900 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            href="/features"
            className="text-indigo-900 hover:text-purple-600 transition duration-300"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="text-indigo-900 hover:text-purple-600 transition duration-300"
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className="text-indigo-900 hover:text-purple-600 transition duration-300"
          >
            Contact
          </Link>
          <Link
            href="/auth/login"
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-500 transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-6 py-4">
          <Link
            href="/features"
            className="block text-indigo-900 hover:text-purple-600 py-2 transition duration-300"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="block text-indigo-900 hover:text-purple-600 py-2 transition duration-300"
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className="block text-indigo-900 hover:text-purple-600 py-2 transition duration-300"
          >
            Contact
          </Link>
          <Link
            href="/auth/login"
            className="block bg-purple-600 text-white px-6 py-2 rounded-lg text-center hover:bg-purple-500 transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
