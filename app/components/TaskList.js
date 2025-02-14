import { useEffect, useState } from "react";

import TaskCard from "./TaskCard";
import { listenToTasks } from "@/lib/firestore";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const unsubscribe = listenToTasks(setTasks);
    return () => unsubscribe();
  }, []);

  const handleUpdateStatus = (taskId, status) => {};

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onUpdateStatus={handleUpdateStatus}
        />
      ))}
    </div>
  );
}
