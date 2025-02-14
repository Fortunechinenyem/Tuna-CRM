import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import {
  addInvoice,
  fetchInvoices,
  updateInvoice,
  deleteInvoice,
} from "@/lib/firestore";

export default function InvoiceManager() {
  const { user } = useAuth();
  const [invoices, setInvoices] = useState([]);
  const [newInvoice, setNewInvoice] = useState({
    customerName: "",
    customerEmail: "",
    items: [],
    totalAmount: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadInvoices = async () => {
      if (user) {
        setIsLoading(true);
        try {
          const data = await fetchInvoices(user.uid);
          setInvoices(data);
        } catch (err) {
          setError("Failed to load invoices. Please try again.");
        } finally {
          setIsLoading(false);
        }
      }
    };
    loadInvoices();
  }, [user]);

  const handleAddInvoice = async () => {
    if (!newInvoice.customerName || !newInvoice.customerEmail) {
      setError("Please fill in all required fields.");
      return;
    }
    try {
      const invoiceId = await addInvoice(user.uid, newInvoice);
      setInvoices([...invoices, { id: invoiceId, ...newInvoice }]);
      setNewInvoice({
        customerName: "",
        customerEmail: "",
        items: [],
        totalAmount: 0,
      });
      setError("");
    } catch (err) {
      setError("Failed to add invoice. Please try again.");
    }
  };

  const handleDeleteInvoice = async (invoiceId) => {
    try {
      await deleteInvoice(invoiceId);
      setInvoices(invoices.filter((invoice) => invoice.id !== invoiceId));
    } catch (err) {
      setError("Failed to delete invoice. Please try again.");
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-indigo-900 mb-6">
        Invoice Manager
      </h2>

      {/* Add Invoice Form */}
      <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Customer Name"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={newInvoice.customerName}
            onChange={(e) =>
              setNewInvoice({ ...newInvoice, customerName: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Customer Email"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={newInvoice.customerEmail}
            onChange={(e) =>
              setNewInvoice({ ...newInvoice, customerEmail: e.target.value })
            }
          />
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          onClick={handleAddInvoice}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-500 transition duration-300 transform hover:scale-105"
        >
          Add Invoice
        </button>
      </div>

      {/* Invoice List */}
      {isLoading ? (
        <p className="text-center text-gray-600">Loading invoices...</p>
      ) : invoices.length === 0 ? (
        <p className="text-center text-gray-600">No invoices found.</p>
      ) : (
        <ul className="space-y-4">
          {invoices.map((invoice) => (
            <li
              key={invoice.id}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div>
                <p className="font-semibold text-indigo-900">
                  {invoice.customerName}
                </p>
                <p className="text-sm text-gray-600">{invoice.customerEmail}</p>
                <p className="text-xs text-gray-500">
                  Total: ${invoice.totalAmount}
                </p>
              </div>
              <button
                onClick={() => handleDeleteInvoice(invoice.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
