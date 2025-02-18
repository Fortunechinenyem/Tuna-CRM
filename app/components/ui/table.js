export function Table({ children, className = "" }) {
  return (
    <table
      className={`min-w-full bg-white border border-gray-200 ${className}`}
    >
      {children}
    </table>
  );
}

export function TableHeader({ children }) {
  return <thead className="bg-gray-200">{children}</thead>;
}

export function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

export function TableRow({ children, className = "" }) {
  return (
    <tr className={`border-b border-gray-200 ${className}`}>{children}</tr>
  );
}

export function TableHead({ children }) {
  return (
    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase">
      {children}
    </th>
  );
}

export function TableCell({ children }) {
  return <td className="px-4 py-3 text-gray-600">{children}</td>;
}
