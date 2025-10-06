import nodemailer from "nodemailer";
import { createWelcomeEmailTemplate } from "./emailtemplate.js";
import "dotenv/config"
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});
console.log(`${process.env.SMTP_HOST}, ${process.env.SMTP_PASS} ${process.env.SMTP_USER}`)
export default async function sendMail(email, name) {
  try {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "Welcome to Tuchat",
      html: createWelcomeEmailTemplate(name, process.env.CLIENT_URL)
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent:", result.messageId);
    return result;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
