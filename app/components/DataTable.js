export default function DataTable({ columns, data }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-6 py-3 border-b text-left text-sm font-medium text-gray-700"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="hover:bg-gray-50 transition duration-300"
            >
              {Object.values(row).map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-6 py-4 border-b text-sm text-gray-600"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
