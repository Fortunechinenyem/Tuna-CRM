import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getUserRole } from "@/lib/auth";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user } = useAuth();
  const [role, setRole] = useState(null);

  useEffect(() => {
    if (user) {
      getUserRole(user.uid).then(setRole);
    }
  }, [user]);

  return (
    <>
      <div
        className={`hidden md:block w-64 bg-gradient-to-r from-indigo-900 to-purple-900 text-white min-h-screen p-4`}
      >
        <div className="sidebar">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/sales">Sales</Link>
          {role === "admin" && <Link href="/admin">Manage Users</Link>}
        </div>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link
                href="/dashboard"
                className="block py-2 px-4 hover:bg-blue-700 rounded-lg transition duration-300"
              >
                🏠 Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/customers"
                className="block py-2 px-4 hover:bg-blue-700 rounded-lg transition duration-300"
              >
                👥 Customers
              </Link>
            </li>
            <li>
              <Link
                href="/deals"
                className="block py-2 px-4 hover:bg-blue-700 rounded-lg transition duration-300"
              >
                💼 Deals
              </Link>
            </li>
            <li>
              <Link
                href="/tasks"
                className="block py-2 px-4 hover:bg-blue-700 rounded-lg transition duration-300"
              >
                📅 Tasks
              </Link>
            </li>
            <li>
              <Link
                href="/invoices"
                className="block py-2 px-4 hover:bg-blue-700 rounded-lg transition duration-300"
              >
                📜 Invoices
              </Link>
            </li>
            <li>
              <Link
                href="/settings"
                className="block py-2 px-4 hover:bg-blue-700 rounded-lg transition duration-300"
              >
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gradient-to-r from-indigo-900 to-purple-900 text-white min-h-screen p-4 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <nav>
          <ul className="space-y-2">
            <li>
              <Link
                href="/dashboard"
                className="block py-2 px-4 hover:bg-blue-700 rounded-lg transition duration-300"
              >
                🏠 Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/customers"
                className="block py-2 px-4 hover:bg-blue-700 rounded-lg transition duration-300"
              >
                👥 Customers
              </Link>
            </li>
            <li>
              <Link
                href="/deals"
                className="block py-2 px-4 hover:bg-blue-700 rounded-lg transition duration-300"
              >
                💼 Deals
              </Link>
            </li>
            <li>
              <Link
                href="/tasks"
                className="block py-2 px-4 hover:bg-blue-700 rounded-lg transition duration-300"
              >
                📅 Tasks
              </Link>
            </li>
            <li>
              <Link
                href="/invoices"
                className="block py-2 px-4 hover:bg-blue-700 rounded-lg transition duration-300"
              >
                📜 Invoices
              </Link>
            </li>
            <li>
              <Link
                href="/settings"
                className="block py-2 px-4 hover:bg-blue-700 rounded-lg transition duration-300"
              >
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 bg-indigo-900 text-white p-2 rounded-lg md:hidden z-50"
      >
        {isSidebarOpen ? "✕" : "☰"}
      </button>
    </>
  );
}
