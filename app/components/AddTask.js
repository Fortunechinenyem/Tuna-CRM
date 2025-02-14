import { addTask } from "@/lib/firestore";
import { useState } from "react";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTask({
      title,
      description,
      dueDate,
      priority,
      assignee: "user-id",
    });
    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("medium");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-gray-100 rounded-lg shadow-md mb-6"
    >
      <h2 className="text-2xl font-bold mb-4">Create New Task</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="mb-4 w-full p-2 border border-gray-300 rounded"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="mb-4 w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
        className="mb-4 w-full p-2 border border-gray-300 rounded"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="mb-4 w-full p-2 border border-gray-300 rounded"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Create Task
      </button>
    </form>
  );
}
