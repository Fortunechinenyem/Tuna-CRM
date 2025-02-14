export default function CustomerCard({ contact }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center space-x-4">
        <img
          src={contact.avatar || "https://via.placeholder.com/50"}
          alt={contact.name}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="text-lg font-semibold">{contact.name}</h3>
          <p className="text-sm text-gray-500">{contact.email}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-600">
          <span className="font-medium">Phone:</span> {contact.phone}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Company:</span> {contact.company}
        </p>
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
