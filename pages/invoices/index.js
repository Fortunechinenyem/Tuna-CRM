export default function Invoices() {
  const invoices = [
    { id: "INV001", customer: "John Doe", amount: "$100", status: "Paid" },
    { id: "INV002", customer: "Jane Smith", amount: "$250", status: "Pending" },
  ];

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Invoices</h1>
      <div className="space-y-4">
        {invoices.map((invoice) => (
          <div
            key={invoice.id}
            className="p-4 border rounded-lg flex justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold">{invoice.customer}</h2>
              <p>Amount: {invoice.amount}</p>
            </div>
            <p
              className={`font-bold ${
                invoice.status === "Paid" ? "text-green-500" : "text-red-500"
              }`}
            >
              {invoice.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
