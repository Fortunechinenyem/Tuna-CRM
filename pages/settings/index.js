import { useState } from "react";

export default function Settings() {
  const [form, setForm] = useState({
    username: "johndoe",
    email: "john@example.com",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Settings updated!");
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
        <input
          name="username"
          value={form.username}
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          value={form.email}
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update Settings
        </button>
      </form>
    </div>
  );
}
