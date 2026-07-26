import { dbConnect } from "@/lib/dbConnect";
import Testimonial from "@/models/testimonial";

export async function GET() {
  try {
    await dbConnect();
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    return Response.json({ testimonials });
  } catch (error) {
    return Response.json({ error: "Failed to fetch testimonials" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const data = await req.json();
    const testimonial = await Testimonial.create(data);
    return Response.json({ success: true, testimonial });
  } catch (error) {
    return Response.json({ error: "Failed to create testimonial" }, { status: 500 });
  }
}
