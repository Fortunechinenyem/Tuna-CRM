import Layout from "@/app/components/Layout";

export default function Features() {
  const features = [
    {
      title: "Task Management",
      description:
        "Organize and track tasks efficiently with intuitive tools designed to boost productivity.",
      icon: "✅", // Replace with an actual icon or image
    },
    {
      title: "Invoice Generation",
      description:
        "Generate professional invoices and send them directly via email, saving time and effort.",
      icon: "📄", // Replace with an actual icon or image
    },
    {
      title: "Real-Time Updates",
      description:
        "Stay updated with live changes across your team and projects, ensuring everyone is on the same page.",
      icon: "🔄", // Replace with an actual icon or image
    },
    {
      title: "Role-Based Access",
      description:
        "Control access to sensitive data and features based on user roles, ensuring security and compliance.",
      icon: "🔒", // Replace with an actual icon or image
    },
    {
      title: "Advanced Analytics",
      description:
        "Gain actionable insights with powerful analytics and reporting tools tailored to your business needs.",
      icon: "📊", // Replace with an actual icon or image
    },
    {
      title: "24/7 Support",
      description:
        "Get dedicated support anytime, anywhere, with our team of experts ready to assist you.",
      icon: "📞", // Replace with an actual icon or image
    },
  ];

  return (
    <Layout>
      <div className="py-20 px-6 bg-gradient-to-r from-gray-50 to-purple-50">
        <div className="container mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-indigo-900 mb-4 animate-fade-in-up">
              Explore TunaCRM Features
            </h1>
            <p className="text-xl text-gray-600 animate-fade-in-up delay-100">
              Discover the tools and features designed to streamline your
              workflow and grow your business.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 animate-fade-in-up"
              >
                <div className="text-4xl text-purple-600 mb-4">
                  {feature.icon}
                </div>
                <h2 className="text-2xl font-bold text-indigo-900 mb-4">
                  {feature.title}
                </h2>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
