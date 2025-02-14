import nodemailer from "nodemailer";

export async function sendInvoiceEmail({ toEmail, customerName, invoiceFile }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: toEmail,
    subject: `Your Invoice from TunaCRM`,
    text: `Dear ${customerName},\n\nPlease find attached your invoice from TunaCRM.\n\nBest regards,\nTunaCRM Team`,
    attachments: [
      {
        filename: "invoice.pdf",
        content: invoiceFile,
        encoding: "base64",
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Invoice email sent successfully");
  } catch (error) {
    console.error("Error sending invoice email:", error);
  }
}
