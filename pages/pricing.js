import { loadStripe } from "@stripe/stripe-js";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";

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
      features: ["1 User", "Basic CRM Features"],
    },
    {
      name: "Pro",
      price: "$19.99/mo",
      priceId: "price_123_pro",
      features: ["5 Users", "Advanced Features"],
    },
    {
      name: "Enterprise",
      price: "$49.99/mo",
      priceId: "price_123_enterprise",
      features: ["Unlimited Users", "Priority Support"],
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
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Pricing Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow-md text-center"
          >
            <h2 className="text-xl font-semibold">{plan.name}</h2>
            <p className="text-2xl font-bold my-2">{plan.price}</p>
            <ul className="mb-4">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-gray-600">
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => handleSubscription(plan.priceId)}
            >
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
