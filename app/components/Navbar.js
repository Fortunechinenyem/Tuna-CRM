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
        <Link href="/" className="text-2xl font-bold text-blue-800">
          TunaCRM
        </Link>

        <button
          onClick={toggleMenu}
          className="md:hidden text-blue-800 focus:outline-none"
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

        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/features" className="text-blue-800 hover:text-blue-600">
            Features
          </Link>
          <Link href="/pricing" className="text-blue-800 hover:text-blue-600">
            Pricing
          </Link>
          <Link href="/contact" className="text-blue-800 hover:text-blue-600">
            Contact
          </Link>
          <Link
            href="/auth/login"
            className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white px-6 py-4">
          <Link
            href="/features"
            className="block text-blue-800 hover:text-blue-600 py-2"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="block text-blue-800 hover:text-blue-600 py-2"
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className="block text-blue-800 hover:text-blue-600 py-2"
          >
            Contact
          </Link>
          <Link
            href="/auth/login"
            className="block bg-blue-800 text-white px-6 py-2 rounded-lg text-center hover:bg-blue-700 transition duration-300"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
