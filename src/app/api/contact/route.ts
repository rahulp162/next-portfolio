import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import * as brevo from "@getbrevo/brevo";

const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Save to MongoDB
    const client = new MongoClient(process.env.MONGODB_URI!);
    await client.connect();
    
    const db = client.db("portfolio");
    const collection = db.collection("contacts");
    
    const contactData = {
      name,
      email,
      message,
      createdAt: new Date(),
    };
    
    await collection.insertOne(contactData);
    await client.close();

    // Send email notification
    const sendSmtpEmail = new brevo.SendSmtpEmail();
    sendSmtpEmail.to = [{ email: process.env.YOUR_EMAIL!, name: "Portfolio Owner" }];
    sendSmtpEmail.sender = { email: "noreply@yourdomain.com", name: "Portfolio Contact" };
    sendSmtpEmail.subject = `New Contact Form Message from ${name}`;
    sendSmtpEmail.htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
    `;
    
    await apiInstance.sendTransacEmail(sendSmtpEmail);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}