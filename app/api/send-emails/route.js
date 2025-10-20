require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const helmet = require("helmet");

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: "https://www.globalclink.com",
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  allowedHeaders: "Content-Type,Authorization",
  credentials: true,
};

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());

app.post("/send-email", async (req, res, next) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "Missing required fields." });
    }

    // ✅ Transporter seguro con variables de entorno
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const COMPANY_EMAIL = process.env.SMTP_USER;
    const CEO_EMAIL = process.env.CEO_EMAIL;

    // ✅ Email al Cliente
    const userMailOptions = {
      from: COMPANY_EMAIL,
      to: email,
      subject: "Message Confirmation - Global Communications Link",
      html: `
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: 'Arial', sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f8fafc;
              line-height: 1.6;
            }
            .email-container {
              max-width: 600px;
              margin: 20px auto;
              background-color: #ffffff;
              padding: 40px 30px;
              text-align: center;
              border-radius: 12px;
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            }
            .header {
              color: #1e40af;
              font-size: 28px;
              font-weight: bold;
              margin-bottom: 10px;
            }
            .greeting {
              font-size: 20px;
              color: #374151;
              margin-bottom: 25px;
            }
            .message {
              font-size: 16px;
              color: #6b7280;
              margin-bottom: 30px;
              max-width: 500px;
              margin-left: auto;
              margin-right: auto;
            }
            .info-box {
              background-color: #f0f9ff;
              border-left: 4px solid #0ea5e9;
              padding: 20px;
              margin: 25px 0;
              text-align: left;
              border-radius: 0 8px 8px 0;
            }
            .info-title {
              font-weight: bold;
              color: #0c4a6e;
              margin-bottom: 10px;
            }
            .divider {
              margin: 40px 0;
              border-top: 2px solid #e5e7eb;
            }
            .footer {
              font-size: 14px;
              color: #9ca3af;
            }
            .contact-info {
              margin-top: 20px;
              font-size: 14px;
              color: #6b7280;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <h1 class="header">Message Received!</h1>
            <p class="greeting">Hello <strong>${name}</strong>,</p>
            <p class="message">
              Thank you for contacting Global Communications Link. We have successfully received your message and our team will get back to you as soon as possible.
            </p>
            <div class="info-box">
              <div class="info-title">What happens next?</div>
              <p>• Our technical team will review your inquiry<br>
              • We'll contact you within 24-48 hours<br>
              • You'll receive a personalized consultation</p>
            </div>
            <div class="contact-info">
              <strong>Global Communications Link</strong><br>
              Email: malmonte@globalclink.com<br>
              Phone: +1 (929) 384-2944
            </div>
            <div class="divider"></div>
            <p class="footer">&copy; 2025 Global Communications Link. All rights reserved.</p>
          </div>
        </body>
        </html>
      `,
    };

    // ✅ Email al CEO y a la empresa
    const companyMailOptions = {
      from: COMPANY_EMAIL,
      to: `${COMPANY_EMAIL}, ${CEO_EMAIL}`,
      subject: `New Contact Form Submission - ${name}`,
      html: `
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body {
              font-family: 'Arial', sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f8fafc;
              line-height: 1.6;
            }
            .email-container {
              max-width: 650px;
              margin: 20px auto;
              background-color: #ffffff;
              padding: 30px;
              border-radius: 12px;
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            }
            .header {
              background: linear-gradient(135deg, #1e40af, #0ea5e9);
              color: white;
              padding: 20px;
              text-align: center;
              font-size: 24px;
              font-weight: bold;
              margin: -30px -30px 30px -30px;
              border-radius: 12px 12px 0 0;
            }
            .section {
              margin: 25px 0;
              padding: 20px;
              background-color: #f8fafc;
              border-radius: 8px;
              border-left: 4px solid #3b82f6;
            }
            .section-title {
              font-size: 18px;
              font-weight: bold;
              color: #1e40af;
              margin-bottom: 15px;
            }
            .info-row {
              display: flex;
              margin-bottom: 10px;
              align-items: start;
            }
            .info-label {
              font-weight: bold;
              color: #374151;
              width: 120px;
              flex-shrink: 0;
            }
            .info-value {
              color: #6b7280;
              flex: 1;
            }
            .message-content {
              background-color: white;
              padding: 15px;
              border-radius: 6px;
              border: 1px solid #e5e7eb;
              white-space: pre-wrap;
              font-family: 'Courier New', monospace;
              font-size: 14px;
            }
            .priority-notice {
              background-color: #fef3c7;
              border: 1px solid #f59e0b;
              color: #92400e;
              padding: 15px;
              border-radius: 8px;
              margin-top: 20px;
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="header">NEW CONTACT FORM SUBMISSION</div>
            <div class="section">
              <div class="section-title">Contact Information</div>
              <div class="info-row"><span class="info-label">Name:</span><span class="info-value">${name || ""}</span></div>
              <div class="info-row"><span class="info-label">Email:</span><span class="info-value"><a href="mailto:${email}">${email}</a></span></div>
              <div class="info-row"><span class="info-label">Phone:</span><span class="info-value">${phone || "Not provided"}</span></div>
              <div class="info-row"><span class="info-label">Timestamp:</span><span class="info-value">${new Date().toLocaleString()}</span></div>
            </div>
            <div class="section">
              <div class="section-title">💬 Message</div>
              <div class="message-content">${message}</div>
            </div>
            <div class="priority-notice">
              ⚡ Remember to respond within 24-48 hours to maintain excellent customer service.
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // ✅ Enviar ambos correos simultáneamente
    await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(companyMailOptions),
    ]);

    res.json({ success: true, message: "Emails sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Error sending email" });
  }
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
