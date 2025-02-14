import Layout from "@/app/components/Layout";
import TaskManager from "@/app/components/TaskManager";

export default function Tasks() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-indigo-900 mb-4 animate-fade-in-up">
              Task Management
            </h1>
            <p className="text-xl text-gray-600 animate-fade-in-up delay-100">
              Organize your tasks efficiently and stay productive with TunaCRM.
            </p>
          </header>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <TaskManager />
          </div>

          <div className="text-center mt-12">
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">
              Need More Features?
            </h2>
            <p className="text-gray-600 mb-6">
              Upgrade to our Pro plan to unlock advanced task management tools.
            </p>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-purple-500 transition duration-300 transform hover:scale-105 shadow-lg">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
