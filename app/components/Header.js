import { useState } from "react";
import { Logo } from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const { user, loading } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold ">
        <Image src={Logo} width={90} height={90} alt="Logo" priority />
      </Link>

      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center space-x-2 focus:outline-none"
        >
          <img
            src={user?.photoURL || "https://via.placeholder.com/40"}
            alt="User"
            className="w-10 h-10 rounded-full border-2 border-purple-500"
          />

          <span className="text-gray-700 font-medium">
            {user?.displayName || "User"}
          </span>

          <svg
            className={`w-4 h-4 text-gray-700 transition-transform duration-200 ${
              isDropdownOpen ? "transform rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isDropdownOpen && (
          <>
            <div
              className="fixed inset-0 bg-black opacity-30 z-40"
              onClick={() => setIsDropdownOpen(false)}
            ></div>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100 z-50">
              <Link
                href="/profile"
                className="block px-4 py-2 text-gray-700 hover:bg-purple-50 transition duration-300"
              >
                Profile
              </Link>
              <Link
                href="/settings"
                className="block px-4 py-2 text-gray-700 hover:bg-purple-50 transition duration-300"
              >
                Settings
              </Link>
              <Link
                href="/logout"
                className="block px-4 py-2 text-gray-700 hover:bg-purple-50 transition duration-300"
              >
                Logout
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
