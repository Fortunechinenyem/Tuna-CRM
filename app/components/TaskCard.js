export default function TaskCard({ task, onUpdateStatus }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{task.title}</h2>
          <p className="text-gray-600 mt-2">{task.description}</p>
          <div className="mt-4 space-y-1">
            <p className="text-sm text-gray-500">
              Due: {new Date(task.dueDate.seconds * 1000).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-500">Priority: {task.priority}</p>
            <p className="text-sm text-gray-500">Assignee: {task.assignee}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {task.status !== "Completed" && (
            <button
              onClick={() => onUpdateStatus(task.id, "Completed")}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
            >
              Complete
            </button>
          )}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-500">
          Status:{" "}
          <span
            className={`font-semibold ${
              task.status === "Completed" ? "text-green-500" : "text-red-500"
            }`}
          >
            {task.status}
          </span>
        </p>
      </div>
    </div>
  );
}
