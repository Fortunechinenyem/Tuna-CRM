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

  useEffect(() => {
    const loadInvoices = async () => {
      if (user) {
        const data = await fetchInvoices(user.uid);
        setInvoices(data);
      }
    };
    loadInvoices();
  }, [user]);

  const handleAddInvoice = async () => {
    if (!newInvoice.customerName || !newInvoice.customerEmail) return;
    const invoiceId = await addInvoice(user.uid, newInvoice);
    setInvoices([...invoices, { id: invoiceId, ...newInvoice }]);
    setNewInvoice({
      customerName: "",
      customerEmail: "",
      items: [],
      totalAmount: 0,
    });
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Invoice Manager</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Customer Name"
          className="border p-2 mb-2 w-full rounded"
          value={newInvoice.customerName}
          onChange={(e) =>
            setNewInvoice({ ...newInvoice, customerName: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Customer Email"
          className="border p-2 mb-2 w-full rounded"
          value={newInvoice.customerEmail}
          onChange={(e) =>
            setNewInvoice({ ...newInvoice, customerEmail: e.target.value })
          }
        />
        <button
          onClick={handleAddInvoice}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Invoice
        </button>
      </div>

      <ul>
        {invoices.map((invoice) => (
          <li
            key={invoice.id}
            className="flex justify-between items-center bg-gray-100 p-3 mb-2 rounded"
          >
            <div>
              <p className="font-semibold">{invoice.customerName}</p>
              <p className="text-sm text-gray-600">{invoice.customerEmail}</p>
              <p className="text-xs text-gray-500">
                Total: ${invoice.totalAmount}
              </p>
            </div>
            <button
              onClick={() => deleteInvoice(invoice.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
