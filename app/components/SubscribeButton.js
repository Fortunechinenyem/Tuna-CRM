import { useState } from "react";

export default function SubscribeButton({ userId, email }) {
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    setLoading(true);
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, email }),
    });

    const { sessionId } = await res.json();
    setLoading(false);
    window.location.href = `https://checkout.stripe.com/pay/${sessionId}`;
  };

  return (
    <button
      onClick={handleSubscribe}
      disabled={loading}
      className="bg-blue-600 text-white px-4 py-2 rounded"
    >
      {loading ? "Processing..." : "Subscribe"}
    </button>
  );
}
