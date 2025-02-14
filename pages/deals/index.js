import Layout from "@/app/components/Layout";

export default function Deals() {
  const deals = [
    { id: "D001", name: "ABC Corp", amount: "$5,000", status: "Pending" },
    { id: "D002", name: "XYZ Ltd", amount: "$12,000", status: "Won" },
    { id: "D003", name: "LMN Inc", amount: "$7,500", status: "Lost" },
    { id: "D004", name: "PQR Solutions", amount: "$9,000", status: "Pending" },
    { id: "D005", name: "Global Tech", amount: "$15,000", status: "Won" },
    { id: "D006", name: "Innovate Inc", amount: "$6,500", status: "Lost" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Won":
        return "bg-green-100 text-green-800";
      case "Lost":
        return "bg-red-100 text-red-800";
      default:
        return "bg-yellow-100 text-yellow-800";
    }
  };

  return (
    <Layout>
      <div className="py-20 px-6 bg-gradient-to-r from-gray-50 to-purple-50">
        <div className="container mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-indigo-900 mb-4 animate-fade-in-up">
              Sales Deals
            </h1>
            <p className="text-xl text-gray-600 animate-fade-in-up delay-100">
              Track and manage your sales deals efficiently with TunaCRM.
            </p>
          </div>

          {/* Deals Table */}
          <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-indigo-900 text-white">
                  <th className="p-4 text-left">Deal ID</th>
                  <th className="p-4 text-left">Customer</th>
                  <th className="p-4 text-left">Amount</th>
                  <th className="p-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {deals.map((deal) => (
                  <tr
                    key={deal.id}
                    className="hover:bg-gray-50 transition duration-200"
                  >
                    <td className="p-4 border-b border-gray-200">{deal.id}</td>
                    <td className="p-4 border-b border-gray-200">
                      {deal.name}
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      {deal.amount}
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                          deal.status
                        )}`}
                      >
                        {deal.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
