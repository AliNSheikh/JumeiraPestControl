import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const parsed = leadSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source: "jpc-dubai-website", lead: parsed.data, receivedAt: new Date().toISOString() })
    });
    if (!response.ok) {
      return NextResponse.json({ ok: false, message: "Lead webhook failed" }, { status: 502 });
    }
  }

  return NextResponse.json({
    ok: true,
    message: webhookUrl ? "Lead delivered" : "Lead validated. Configure LEAD_WEBHOOK_URL or SMTP variables for production delivery."
  });
}
