import { NextRequest, NextResponse } from "next/server";
import { BUSINESS } from "@/lib/constants";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { name, phone, zip, service, message } = data;

  if (!name || !phone) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Forward to email via Resend (or swap for any email provider)
  // Requires RESEND_API_KEY env var set in Cloudflare Pages dashboard
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // In dev without key, just log and return success
    console.log("Contact form submission:", { name, phone, zip, service, message });
    return NextResponse.json({ ok: true });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      from: "website@dawsjunk.com",
      to: BUSINESS.email,
      subject: `New Lead: ${name} — ${service || "General Inquiry"}`,
      text: `
Name: ${name}
Phone: ${phone}
ZIP: ${zip || "—"}
Service: ${service || "—"}
Message: ${message || "—"}
      `.trim(),
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Email send failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
