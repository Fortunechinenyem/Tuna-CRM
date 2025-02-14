import { sendInvoiceEmail } from "@/lib/email";
import { generateInvoice } from "@/lib/invoice";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { customerName, email, items, total } = req.body;

    const pdfBytes = await generateInvoice({ customerName, items, total });

    await sendInvoiceEmail({
      toEmail: email,
      customerName,
      invoiceFile: pdfBytes,
    });

    res.status(200).json({ message: "Invoice email sent successfully!" });
  } catch (error) {
    console.error("Error sending invoice email:", error);
    res.status(500).json({ error: "Failed to send invoice email" });
  }
}
