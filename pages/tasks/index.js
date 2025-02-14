import AddTask from "@/app/components/AddTask";
import TaskList from "@/app/components/TaskList";

export default function Tasks() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Task Management</h1>
      <AddTask />
      <TaskList />
    </div>
  );
}
