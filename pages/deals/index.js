export default function Deals() {
  const deals = [
    { id: "D001", name: "ABC Corp", amount: "$5,000", status: "Pending" },
    { id: "D002", name: "XYZ Ltd", amount: "$12,000", status: "Won" },
    { id: "D003", name: "LMN Inc", amount: "$7,500", status: "Lost" },
  ];

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Sales Deals</h1>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Deal ID</th>
            <th className="border p-2">Customer</th>
            <th className="border p-2">Amount</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {deals.map((deal) => (
            <tr key={deal.id} className="text-center">
              <td className="border p-2">{deal.id}</td>
              <td className="border p-2">{deal.name}</td>
              <td className="border p-2">{deal.amount}</td>
              <td className="border p-2">{deal.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
