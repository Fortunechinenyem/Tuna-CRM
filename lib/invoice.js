import { PDFDocument, rgb } from "pdf-lib";

export async function generateInvoice({ customerName, items, total }) {
  const pdfDoc = await PDFDocument.create();

  const page = pdfDoc.addPage([600, 400]);
  const { height } = page.getSize();

  page.drawText(`Invoice for ${customerName}`, {
    x: 50,
    y: height - 50,
    size: 24,
    color: rgb(0, 0, 0),
  });

  page.drawText(`Items:`, {
    x: 50,
    y: height - 80,
    size: 18,
    color: rgb(0, 0, 0),
  });

  items.forEach((item, index) => {
    page.drawText(`${item.name} - $${item.amount}`, {
      x: 50,
      y: height - 110 - index * 20,
      size: 14,
      color: rgb(0, 0, 0),
    });
  });

  page.drawText(`Total: $${total}`, {
    x: 50,
    y: height - 110 - items.length * 20 - 20,
    size: 18,
    color: rgb(0, 0, 0),
  });

  const pdfBytes = await pdfDoc.save();

  return pdfBytes;
}
