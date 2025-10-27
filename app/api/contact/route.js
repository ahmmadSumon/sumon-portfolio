import { NextResponse } from "next/server";
import { dbConnect } from "../../../lib/dbConnect";
import Contact from "../../../models/contact";

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    const { firstname, lastname, email, phone, service, message } = body;

    if (!firstname || !lastname || !email || !phone || !service || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const newContact = new Contact({
      firstname,
      lastname,
      email,
      phone,
      service,
      message,
    });

    await newContact.save();
    return NextResponse.json({ success: true, message: "Message saved successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to save message" }, { status: 500 });
  }
}
