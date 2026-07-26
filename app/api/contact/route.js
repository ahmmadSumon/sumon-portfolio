import { dbConnect } from "@/lib/dbConnect";
import Contact from "@/models/contact";

const requestLog = new Map();

export async function POST(req) {
  try {
    const data = await req.json();

    // Honeypot check
    if (data.website) {
      return Response.json({ success: true });
    }

    // Rate limiting: max 3 messages per IP per hour
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();
    const windowMs = 60 * 60 * 1000;
    const userLog = requestLog.get(ip) || [];
    const recent = userLog.filter((t) => now - t < windowMs);
    if (recent.length >= 3) {
      return Response.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }
    recent.push(now);
    requestLog.set(ip, recent);

    await dbConnect();
    const contact = await Contact.create(data);

    return Response.json({ success: true, contact });
  } catch (error) {
    console.error("Error saving contact:", error);
    return Response.json({ error: "Failed to save message" }, { status: 500 });
  }
}

// 🧾 Optional: Get all messages (for admin dashboard)
export async function GET() {
  try {
    await dbConnect();
    const messages = await Contact.find().sort({ createdAt: -1 });
    return Response.json({ messages });
  } catch (error) {
    return Response.json({ error: "Failed to fetch messages" }, { status: 500 });
  }
}
