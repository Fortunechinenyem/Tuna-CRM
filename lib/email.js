import nodemailer from "nodemailer";

export async function sendInvoiceEmail({ toEmail, customerName, invoiceFile }) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"TunaCRM" <${process.env.EMAIL_USER}>`,
      to: toEmail,
      subject: "Your Invoice from TunaCRM",
      text: `Dear ${customerName},\n\nPlease find attached your invoice.\n\nBest regards,\nTunaCRM Team`,
      attachments: [
        {
          filename: "invoice.pdf",
          content: invoiceFile,
          encoding: "base64",
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ Invoice email sent successfully to ${toEmail}`);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("❌ Error sending invoice email:", error);
    return { success: false, message: error.message };
  }
}
