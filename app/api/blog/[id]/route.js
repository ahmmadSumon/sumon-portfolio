import { dbConnect } from "@/lib/dbConnect";
import Blog from "@/models/blog";

export async function PUT(req, { params }) {
  try {
    await dbConnect();
    const { id } = params;
    const data = await req.json();
    const post = await Blog.findByIdAndUpdate(id, data, { new: true });
    if (!post) return Response.json({ error: "Post not found" }, { status: 404 });
    return Response.json({ success: true, post });
  } catch (error) {
    return Response.json({ error: "Failed to update post" }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await dbConnect();
    const { id } = params;
    await Blog.findByIdAndDelete(id);
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Failed to delete post" }, { status: 500 });
  }
}
