// app/api/waitlist/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const response = await fetch(
      "https://68bb1b7284055bce63f136f0.mockapi.io/waitlist/email",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }), // ✅ FIXED
      }
    );

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
