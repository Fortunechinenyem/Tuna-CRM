import Layout from "@/app/components/Layout";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccess(
        `Message sent successfully! We'll get back to you soon, ${form.name}.`
      );
      setForm({ name: "", email: "", message: "" }); // Reset form
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-indigo-900 mb-4 animate-fade-in-up">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 animate-fade-in-up delay-100">
              We'd love to hear from you! Reach out to us for any questions,
              feedback, or inquiries.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  name="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-500 transition duration-300 transform hover:scale-105 shadow-lg"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}
              {success && (
                <p className="text-green-600 text-sm text-center">{success}</p>
              )}
            </form>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">
              Our Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-indigo-900 mb-2">
                  Email
                </h3>
                <p className="text-gray-600">support@tunacrm.com</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-indigo-900 mb-2">
                  Phone
                </h3>
                <p className="text-gray-600">+1 (123) 456-7890</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-indigo-900 mb-2">
                  Address
                </h3>
                <p className="text-gray-600">
                  123 Business St, Suite 456, City, Country
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
