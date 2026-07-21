import { NextRequest, NextResponse } from "next/server";

type TelegramUpdate = {
  message?: {
    chat?: {
      id?: number;
    };
    text?: string;
  };
};

export async function POST(request: NextRequest) {
  try {
    const update = (await request.json()) as TelegramUpdate;

    const chatId = update.message?.chat?.id;
    const text = update.message?.text?.trim();

    if (!chatId || !text) {
      return NextResponse.json({ ok: true });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;

    if (!token) {
      return NextResponse.json(
        { ok: false, error: "TELEGRAM_BOT_TOKEN is missing" },
        { status: 500 }
      );
    }

    let reply =
      "Thank you for contacting R&M Company. How can we help with your renovation project?";

    if (text === "/start") {
      reply =
        "Welcome to R&M Company.\n\nPlease tell us what type of renovation project you need.";
    } else if (text.toLowerCase().includes("kitchen")) {
      reply =
        "We would be happy to help with your kitchen renovation. What city is the property located in?";
    } else if (text.toLowerCase().includes("bathroom")) {
      reply =
        "We would be happy to help with your bathroom renovation. Please tell us your location and timeline.";
    }

    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: reply,
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error("Telegram API error:", result);

      return NextResponse.json(
        { ok: false, error: "Failed to send Telegram message" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Telegram webhook error:", error);

    return NextResponse.json(
      { ok: false, error: "Webhook failed" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: "R&M Telegram webhook",
  });
}