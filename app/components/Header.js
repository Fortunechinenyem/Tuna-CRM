import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">TunaCRM</h1>
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center space-x-2 focus:outline-none"
        >
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="rounded-full"
          />
          <span>John Doe</span>
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
              Profile
            </Link>
            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
              Settings
            </Link>
            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
              Logout
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
