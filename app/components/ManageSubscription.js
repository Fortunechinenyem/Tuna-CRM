import { useState } from "react";

export default function ManageSubscription({ userId, status }) {
  const [loading, setLoading] = useState(false);

  const handleSubscription = async (action) => {
    setLoading(true);
    await fetch("/api/manage-subscription", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, action }),
    });
    setLoading(false);
    window.location.reload();
  };

  return (
    <div>
      {status === "active" && (
        <button
          onClick={() => handleSubscription("cancel")}
          className="bg-red-500 text-white px-4 py-2"
        >
          {loading ? "Processing..." : "Cancel Subscription"}
        </button>
      )}
      {status === "cancelling" && (
        <button
          onClick={() => handleSubscription("resume")}
          className="bg-green-500 text-white px-4 py-2"
        >
          {loading ? "Processing..." : "Resume Subscription"}
        </button>
      )}
    </div>
  );
}
