export default function Features() {
  const features = [
    {
      title: "Task Management",
      description: "Organize and track tasks efficiently.",
    },
    {
      title: "Invoice Generation",
      description: "Generate invoices and send via email.",
    },
    {
      title: "Real-Time Updates",
      description: "Stay updated with live changes.",
    },
    {
      title: "Role-Based Access",
      description: "Control access based on roles.",
    },
  ];

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">TunaCRM Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{feature.title}</h2>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
