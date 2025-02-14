import Layout from "@/app/components/Layout";
import TaskManager from "@/app/components/TaskManager";

export default function Tasks() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Task Management
            </h1>
            <p className="text-lg text-gray-600">
              Organize your tasks efficiently and stay productive.
            </p>
          </header>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <TaskManager />
          </div>
        </div>
      </div>
    </Layout>
  );
}
