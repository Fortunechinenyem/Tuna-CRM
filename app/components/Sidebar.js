import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-blue-800 text-white min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">TunaCRM</h2>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              href="/dashboard"
              className="block py-2 px-4 hover:bg-blue-700 rounded-lg"
            >
              🏠 Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/customers"
              className="block py-2 px-4 hover:bg-blue-700 rounded-lg"
            >
              👥Customers
            </Link>
          </li>
          <li>
            <Link
              href="/deals"
              className="block py-2 px-4 hover:bg-blue-700 rounded-lg"
            >
              💼 Deals
            </Link>
          </li>
          <li>
            <Link
              href="/tasks"
              className="block py-2 px-4 hover:bg-blue-700 rounded-lg"
            >
              📅 Tasks
            </Link>
          </li>
          <li>
            <Link
              href="/invoices"
              className="block py-2 px-4 hover:bg-blue-700 rounded-lg"
            >
              📜 Invoices
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className="block py-2 px-4 hover:bg-blue-700 rounded-lg"
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
