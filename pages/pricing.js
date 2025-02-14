import { loadStripe } from "@stripe/stripe-js";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import Layout from "@/app/components/Layout";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Pricing() {
  const { user } = useAuth();
  const router = useRouter();

  const plans = [
    {
      name: "Basic",
      price: "$9.99/mo",
      priceId: "price_123_basic",
      features: [
        "1 User",
        "Basic CRM Features",
        "Email Support",
        "Limited Analytics",
      ],
    },
    {
      name: "Pro",
      price: "$19.99/mo",
      priceId: "price_123_pro",
      features: [
        "5 Users",
        "Advanced CRM Features",
        "Priority Email Support",
        "Advanced Analytics",
      ],
    },
    {
      name: "Enterprise",
      price: "$49.99/mo",
      priceId: "price_123_enterprise",
      features: [
        "Unlimited Users",
        "All Pro Features",
        "24/7 Priority Support",
        "Custom Integrations",
      ],
    },
  ];

  const handleSubscription = async (priceId) => {
    if (!user) {
      alert("Please log in to subscribe!");
      router.push("/login");
      return;
    }

    const stripe = await stripePromise;

    const response = await fetch("/api/checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId, email: user.email }),
    });

    const session = await response.json();
    if (session.url) {
      window.location.href = session.url;
    } else {
      alert("Failed to create checkout session.");
    }
  };

  return (
    <Layout>
      <div className="py-20 px-6 bg-gradient-to-r from-gray-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-indigo-900 mb-4 animate-fade-in-up">
              Pricing Plans
            </h1>
            <p className="text-xl text-gray-600 animate-fade-in-up delay-100">
              Choose the plan that fits your business needs and start growing
              today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 animate-fade-in-up"
              >
                <h2 className="text-2xl font-bold text-indigo-900 mb-4">
                  {plan.name}
                </h2>
                <p className="text-3xl font-bold text-purple-600 mb-6">
                  {plan.price}
                </p>
                <ul className="mb-6">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-gray-600 mb-3 flex items-center"
                    >
                      <span className="text-purple-600 mr-2">✔️</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-500 transition duration-300 transform hover:scale-105 shadow-lg"
                  onClick={() => handleSubscription(plan.priceId)}
                >
                  Subscribe
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
