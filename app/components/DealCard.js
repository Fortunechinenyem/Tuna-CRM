export default function DealCard({ deal }) {
  const statusColors = {
    New: "bg-blue-100 text-blue-800",
    InProgress: "bg-yellow-100 text-yellow-800",
    Closed: "bg-green-100 text-green-800",
    Lost: "bg-red-100 text-red-800",
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-2">{deal.name}</h3>
      <p className="text-sm text-gray-600 mb-4">{deal.description}</p>
      <div className="flex justify-between items-center">
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            statusColors[deal.status]
          }`}
        >
          {deal.status}
        </span>
        <p className="text-lg font-bold">${deal.amount}</p>
      </div>
      <div className="mt-4 flex space-x-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
          Edit
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300">
          Delete
        </button>
      </div>
    </div>
  );
}
