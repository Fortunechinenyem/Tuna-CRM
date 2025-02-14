import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { addTask, fetchTasks, updateTask, deleteTask } from "@/lib/firestore";

export default function TaskManager() {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "Medium",
    dueDate: "",
    assignee: "",
  });

  useEffect(() => {
    if (user) {
      const unsubscribe = fetchTasks(user.uid, setTasks);
      return () => unsubscribe();
    }
  }, [user]);

  const handleAddTask = async () => {
    if (!newTask.title.trim()) return;
    await addTask(user.uid, newTask);
    setNewTask({
      title: "",
      description: "",
      priority: "Medium",
      dueDate: "",
      assignee: "",
    });
  };

  const handleUpdateTask = async (taskId, status) => {
    await updateTask(taskId, { status });
  };

  const handleDeleteTask = async (taskId) => {
    await deleteTask(taskId);
  };

  return (
    <div>
      {/* Add Task Form */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Add New Task
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Task Title"
            className="border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            className="border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newTask.description}
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
          />
          <select
            className="border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newTask.priority}
            onChange={(e) =>
              setNewTask({ ...newTask, priority: e.target.value })
            }
          >
            <option value="Low">Low Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="High">High Priority</option>
          </select>
          <input
            type="date"
            className="border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newTask.dueDate}
            onChange={(e) =>
              setNewTask({ ...newTask, dueDate: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Assignee"
            className="border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newTask.assignee}
            onChange={(e) =>
              setNewTask({ ...newTask, assignee: e.target.value })
            }
          />
        </div>
        <button
          onClick={handleAddTask}
          className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Add Task
        </button>
      </div>

      {/* Task List */}
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {task.title}
                </h2>
                <p className="text-gray-600 mt-2">{task.description}</p>
                <div className="mt-4 space-y-1">
                  <p className="text-sm text-gray-500">
                    Due:{" "}
                    {new Date(task.dueDate.seconds * 1000).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-500">
                    Priority: {task.priority}
                  </p>
                  <p className="text-sm text-gray-500">
                    Assignee: {task.assignee}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {task.status !== "Completed" && (
                  <button
                    onClick={() => handleUpdateTask(task.id, "Completed")}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
                  >
                    Complete
                  </button>
                )}
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500">
                Status:{" "}
                <span
                  className={`font-semibold ${
                    task.status === "Completed"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {task.status}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
