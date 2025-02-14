export default function TaskCard({ task, onUpdateStatus }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-semibold">{task.title}</h2>
      <p>{task.description}</p>
      <p className="text-gray-500">
        Due: {new Date(task.dueDate.seconds * 1000).toLocaleDateString()}
      </p>
      <p className="text-gray-500">Priority: {task.priority}</p>
      <p className="text-gray-500">Assignee: {task.assignee}</p>
      <p>
        Status:
        <span
          className={`text-${
            task.status === "completed" ? "green" : "red"
          }-500`}
        >
          {task.status}
        </span>
      </p>
      <button
        onClick={() => onUpdateStatus(task.id, "completed")}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Mark as Completed
      </button>
    </div>
  );
}
