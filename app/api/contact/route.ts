import { NextRequest, NextResponse } from "next/server";

const TO_EMAIL = "lerdotc@gmail.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Lerdo Travel Plaza <onboarding@resend.dev>";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    if (message.length < 10) {
      return NextResponse.json({ error: "Message must be at least 10 characters" }, { status: 400 });
    }

    if (message.length > 1000) {
      return NextResponse.json({ error: "Message must be less than 1000 characters" }, { status: 400 });
    }

    const subject = `New contact form message from ${name}`;
    const html = `
      <h2>New message from the Lerdo Travel Plaza website</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    `;
    const text = `New message from the Lerdo Travel Plaza website\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resp = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: [TO_EMAIL],
          reply_to: email,
          subject,
          html,
          text,
        }),
      });

      if (!resp.ok) {
        const detail = await resp.text();
        console.error("Resend send failed:", resp.status, detail);
        return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
      }
    } else {
      console.log("[contact] RESEND_API_KEY not set — would email", TO_EMAIL, {
        from: email,
        name,
        subject,
        message,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      { success: true, message: "Your message has been received. We'll get back to you soon!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to process your request" }, { status: 500 });
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
