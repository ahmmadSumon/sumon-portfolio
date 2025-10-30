import { dbConnect } from "@/lib/dbConnect";
import Contact from "../../../models/contact";

export async function POST(req) {
  try {
    await dbConnect();
    const data = await req.json();
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
