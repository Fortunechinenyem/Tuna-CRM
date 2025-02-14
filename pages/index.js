import Layout from "@/app/components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-blue-100 to-purple-100">
        <nav className="container mx-auto p-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-800">TunaCRM</div>
          <div className="space-x-6">
            <Link
              href="/auth/login"
              className="text-blue-800 hover:text-blue-600"
            >
              Login
            </Link>
            <Link
              href="/auth/signup"
              className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Sign Up
            </Link>
          </div>
        </nav>

        <section className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold text-blue-800 mb-6">
            Manage Your Business with{" "}
            <span className="text-purple-600">TunaCRM</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            The world-class CRM solution designed to streamline your sales,
            manage contacts, and grow your business.
          </p>
          <div className="space-x-4">
            <Link
              href="/auth/signup"
              className="bg-blue-800 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Get Started
            </Link>
            <Link
              href="/features"
              className="bg-white text-blue-800 px-8 py-3 rounded-lg border border-blue-800 hover:bg-blue-50 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
              Why Choose TunaCRM?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold text-blue-800 mb-4">
                  Easy to Use
                </h3>
                <p className="text-gray-600">
                  Intuitive interface designed for both beginners and experts.
                </p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold text-blue-800 mb-4">
                  Powerful Analytics
                </h3>
                <p className="text-gray-600">
                  Gain insights with real-time data and reports.
                </p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold text-blue-800 mb-4">
                  24/7 Support
                </h3>
                <p className="text-gray-600">
                  Dedicated support team ready to assist you anytime.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">
                  "TunaCRM has transformed the way we manage our sales pipeline.
                  It's incredibly user-friendly and powerful!"
                </p>
                <div className="flex items-center">
                  {/* <img
                    src="https://via.placeholder.com/50"
                    alt="User"
                    className="w-12 h-12 rounded-full mr-4"
                  /> */}
                  <div>
                    <p className="font-bold text-blue-800">John Doe</p>
                    <p className="text-sm text-gray-500">CEO, Acme Inc.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">
                  "The analytics dashboard is a game-changer. We've seen a 30%
                  increase in sales since using TunaCRM."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="User"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold text-blue-800">Jane Smith</p>
                    <p className="text-sm text-gray-500">
                      Marketing Director, Globex Corp.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-800 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Join thousands of businesses using TunaCRM to grow and succeed.
            </p>
            <Link
              href="/auth/signup"
              className="bg-white text-blue-800 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition duration-300"
            >
              Sign Up Now
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
