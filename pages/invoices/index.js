import InvoiceManager from "@/app/components/InvoiceManager";

export default function Invoices() {
  const invoices = [
    { id: "INV001", customer: "John Doe", amount: "$100", status: "Paid" },
    { id: "INV002", customer: "Jane Smith", amount: "$250", status: "Pending" },
  ];

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Invoices</h1>
      <InvoiceManager />
    </div>
  );
}
