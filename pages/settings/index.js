import Layout from "@/app/components/Layout";
import { useState } from "react";

export default function Settings() {
  const [form, setForm] = useState({
    username: "johndoe",
    email: "john@example.com",
    notifications: true,
    theme: "light",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Settings updated successfully!");
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-indigo-900 mb-4 animate-fade-in-up">
              Settings
            </h1>
            <p className="text-xl text-gray-600 animate-fade-in-up delay-100">
              Customize your account and preferences to suit your needs.
            </p>
          </header>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-indigo-900 mb-4">
                  Profile Settings
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Username
                    </label>
                    <input
                      name="username"
                      value={form.username}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
              </div>

              {/* Notification Settings */}
              <div>
                <h2 className="text-2xl font-bold text-indigo-900 mb-4">
                  Notification Settings
                </h2>
                <div className="flex items-center">
                  <input
                    name="notifications"
                    type="checkbox"
                    checked={form.notifications}
                    onChange={handleChange}
                    className="h-5 w-5 text-purple-600 rounded focus:ring-purple-500"
                  />
                  <label className="ml-2 text-gray-700">
                    Enable email notifications
                  </label>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-indigo-900 mb-4">
                  Theme Settings
                </h2>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      name="theme"
                      type="radio"
                      value="light"
                      checked={form.theme === "light"}
                      onChange={handleChange}
                      className="h-5 w-5 text-purple-600 focus:ring-purple-500"
                    />
                    <label className="ml-2 text-gray-700">Light Theme</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      name="theme"
                      type="radio"
                      value="dark"
                      checked={form.theme === "dark"}
                      onChange={handleChange}
                      className="h-5 w-5 text-purple-600 focus:ring-purple-500"
                    />
                    <label className="ml-2 text-gray-700">Dark Theme</label>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-500 transition duration-300 transform hover:scale-105 shadow-lg"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
