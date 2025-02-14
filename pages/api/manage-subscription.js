import Stripe from "stripe";

import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { userId, action } = req.body;
    const subscriptionRef = doc(db, "subscriptions", userId);

    const subscriptionSnap = await stripe.subscriptions.retrieve(
      (await subscriptionRef.get()).data().subscriptionId
    );

    if (action === "cancel") {
      await stripe.subscriptions.update(subscriptionSnap.id, {
        cancel_at_period_end: true,
      });
      await updateDoc(subscriptionRef, { status: "cancelling" });
    } else if (action === "resume") {
      await stripe.subscriptions.update(subscriptionSnap.id, {
        cancel_at_period_end: false,
      });
      await updateDoc(subscriptionRef, { status: "active" });
    }

    res.status(200).json({ message: `Subscription ${action} successfully` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to manage subscription" });
  }
}
