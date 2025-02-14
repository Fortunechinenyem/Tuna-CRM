import InvoiceManager from "@/app/components/InvoiceManager";
import Layout from "@/app/components/Layout";

export default function Invoices() {
  return (
    <Layout>
      <div className="py-20 px-6 bg-gradient-to-r from-gray-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-indigo-900 mb-4 animate-fade-in-up">
              Invoices
            </h1>
            <p className="text-xl text-gray-600 animate-fade-in-up delay-100">
              Manage and track your invoices efficiently with TunaCRM.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <InvoiceManager />
          </div>

          <div className="text-center mt-12">
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">
              Need More Features?
            </h2>
            <p className="text-gray-600 mb-6">
              Upgrade to our Pro plan to unlock advanced invoice management
              tools.
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
