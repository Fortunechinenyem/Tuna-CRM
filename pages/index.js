import FAQ from "@/app/components/FAQ";
import Layout from "@/app/components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div className="py-20">
        <section className="bg-gradient-to-r from-indigo-900 to-purple-900 py-20 md:py-32 px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Transform Your Business with{" "}
            <span className="text-purple-400">TunaCRM</span>
          </h1>
          <p className="text-lg md:text-xl text-purple-200 mb-8 animate-fade-in-up delay-100">
            The ultimate CRM solution designed to streamline your sales, manage
            contacts, and drive growth with precision and ease.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 animate-fade-in-up delay-200">
            <Link
              href="/auth/signup"
              className="w-full max-w-xs md:w-auto bg-purple-600 text-white px-6 py-3 md:px-8 md:py-3 rounded-lg hover:bg-purple-500 transition duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base"
            >
              Get Started
            </Link>
            <Link
              href="/features"
              className="w-full max-w-xs md:w-auto bg-white text-purple-900 px-6 py-3 md:px-8 md:py-3 rounded-lg border border-purple-600 hover:bg-purple-50 transition duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base"
            >
              Learn More
            </Link>
          </div>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12 animate-fade-in-up">
              Why Choose TunaCRM?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105">
                <h3 className="text-xl font-bold text-indigo-900 mb-4">
                  Effortless Integration
                </h3>
                <p className="text-gray-600">
                  Seamlessly connect with your existing tools and workflows.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105">
                <h3 className="text-xl font-bold text-indigo-900 mb-4">
                  Advanced Analytics
                </h3>
                <p className="text-gray-600">
                  Make data-driven decisions with real-time insights and
                  reports.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105">
                <h3 className="text-xl font-bold text-indigo-900 mb-4">
                  Scalable Solutions
                </h3>
                <p className="text-gray-600">
                  Grow your business with a CRM that scales with you.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-indigo-900 to-purple-900 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-white mb-12 animate-fade-in-up">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105">
                <h3 className="text-xl font-bold text-indigo-900 mb-4">
                  Step 1: Sign Up
                </h3>
                <p className="text-gray-600">
                  Create your account in minutes and start your free trial.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105">
                <h3 className="text-xl font-bold text-indigo-900 mb-4">
                  Step 2: Customize
                </h3>
                <p className="text-gray-600">
                  Tailor TunaCRM to fit your business needs.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105">
                <h3 className="text-xl font-bold text-indigo-900 mb-4">
                  Step 3: Grow
                </h3>
                <p className="text-gray-600">
                  Watch your business thrive with powerful tools at your
                  fingertips.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12 animate-fade-in-up">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                <p className="text-gray-600 mb-4">
                  "TunaCRM has transformed the way we manage our sales pipeline.
                  It's incredibly user-friendly and powerful!"
                </p>
                <div className="flex items-center">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="User"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold text-indigo-900">John Doe</p>
                    <p className="text-sm text-gray-500">CEO, Acme Inc.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
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
                    <p className="font-bold text-indigo-900">Jane Smith</p>
                    <p className="text-sm text-gray-500">
                      Marketing Director, Globex Corp.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12 animate-fade-in-up">
              Flexible Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105">
                <h3 className="text-xl font-bold text-indigo-900 mb-4">
                  Starter
                </h3>
                <p className="text-gray-600 mb-4">Perfect for small teams</p>
                <p className="text-4xl font-bold text-indigo-900 mb-4">
                  $29<span className="text-lg text-gray-500">/mo</span>
                </p>
                <Link
                  href="/pricing"
                  className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-500 transition duration-300 transform hover:scale-105 shadow-lg"
                >
                  Choose Plan
                </Link>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105">
                <h3 className="text-xl font-bold text-indigo-900 mb-4">
                  Professional
                </h3>
                <p className="text-gray-600 mb-4">Ideal for growing teams</p>
                <p className="text-4xl font-bold text-indigo-900 mb-4">
                  $59<span className="text-lg text-gray-500">/mo</span>
                </p>
                <Link
                  href="/pricing"
                  className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-500 transition duration-300 transform hover:scale-105 shadow-lg"
                >
                  Choose Plan
                </Link>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105">
                <h3 className="text-xl font-bold text-indigo-900 mb-4">
                  Enterprise
                </h3>
                <p className="text-gray-600 mb-4">Built for large businesses</p>
                <p className="text-4xl font-bold text-indigo-900 mb-4">
                  $99<span className="text-lg text-gray-500">/mo</span>
                </p>
                <Link
                  href="/pricing"
                  className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-500 transition duration-300 transform hover:scale-105 shadow-lg"
                >
                  Choose Plan
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQ />

        <section className="bg-gradient-to-r from-indigo-900 to-purple-900 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-6 animate-fade-in-up">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-purple-200 mb-8 animate-fade-in-up delay-100">
              Join thousands of businesses using TunaCRM to grow and succeed.
            </p>
            <Link
              href="/auth/signup"
              className="bg-white text-purple-900 px-8 py-3 rounded-lg font-bold hover:bg-purple-50 transition duration-300 transform hover:scale-105 shadow-lg animate-fade-in-up delay-200"
            >
              Sign Up Now
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
