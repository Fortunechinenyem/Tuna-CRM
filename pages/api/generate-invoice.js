import { generateInvoice } from "@/lib/invoice";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { customerName, items, total } = req.body;

    const pdfBytes = await generateInvoice({ customerName, items, total });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=invoice.pdf");
    res.status(200).send(Buffer.from(pdfBytes));
  } catch (error) {
    console.error("Error generating invoice:", error);
    res.status(500).json({ error: "Failed to generate invoice" });
  }
}
