import { dbConnect } from "@/lib/dbConnect";
import Testimonial from "@/models/testimonial";

export async function PUT(req, { params }) {
  try {
    await dbConnect();
    const { id } = await params;
    const data = await req.json();
    const testimonial = await Testimonial.findByIdAndUpdate(id, data, { new: true });
    if (!testimonial) return Response.json({ error: "Testimonial not found" }, { status: 404 });
    return Response.json({ success: true, testimonial });
  } catch (error) {
    return Response.json({ error: "Failed to update testimonial" }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await dbConnect();
    const { id } = await params;
    await Testimonial.findByIdAndDelete(id);
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Failed to delete testimonial" }, { status: 500 });
  }
}
