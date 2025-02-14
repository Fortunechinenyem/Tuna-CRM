import { buffer } from "micro";
import Stripe from "stripe";

import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { sendInvoiceEmail } from "@/lib/email";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const customerEmail = session.customer_email;
    const customerName = session.customer_name;
    const items = [{ name: "TunaCRM Subscription", amount: 29.99 }];
    const total = 29.99;

    await sendInvoiceEmail({
      toEmail: customerEmail,
      customerName,
      invoiceFile: pdfBytes,
    });
  }

  const buf = await buffer(req);
  const sig = req.headers["stripe-signature"];

  let event;
  try {
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const userId = session.metadata.userId;
    const subscriptionId = session.subscription;

    await setDoc(doc(db, "subscriptions", userId), {
      subscriptionId,
      status: "active",
      email: session.customer_email,
    });
  }

  res.status(200).end();
}
