import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Layout from "@/app/components/Layout";

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadCustomers = async () => {
      try {
        const snapshot = await getDocs(collection(db, "customers"));
        setCustomers(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
        setError("");
      } catch (err) {
        setError("Failed to load customers. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };
    loadCustomers();
  }, []);

  return (
    <Layout>
      <div className="py-20 px-6 bg-gradient-to-r from-gray-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-indigo-900 mb-4 animate-fade-in-up">
              Customers
            </h1>
            <p className="text-xl text-gray-600 animate-fade-in-up delay-100">
              Manage and track your customers efficiently with TunaCRM.
            </p>
          </div>

          {isLoading ? (
            <p className="text-center text-gray-600">Loading customers...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : customers.length === 0 ? (
            <p className="text-center text-gray-600">No customers found.</p>
          ) : (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-indigo-900 text-white">
                  <tr>
                    <th className="p-4 text-left">Name</th>
                    <th className="p-4 text-left">Email</th>
                    <th className="p-4 text-left">Phone</th>
                    <th className="p-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer) => (
                    <tr
                      key={customer.id}
                      className="hover:bg-gray-50 transition duration-200"
                    >
                      <td className="p-4 border-b border-gray-200">
                        {customer.name}
                      </td>
                      <td className="p-4 border-b border-gray-200">
                        {customer.email}
                      </td>
                      <td className="p-4 border-b border-gray-200">
                        {customer.phone || "N/A"}
                      </td>
                      <td className="p-4 border-b border-gray-200">
                        <button className="text-purple-600 hover:text-purple-500 mr-4">
                          Edit
                        </button>
                        <button className="text-red-600 hover:text-red-500">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
