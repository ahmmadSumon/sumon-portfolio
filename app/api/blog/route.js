import { dbConnect } from "@/lib/dbConnect";
import Blog from "@/models/blog";

export async function GET() {
  try {
    await dbConnect();
    const posts = await Blog.find().sort({ createdAt: -1 });
    return Response.json({ posts });
  } catch (error) {
    return Response.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const data = await req.json();
    const post = await Blog.create(data);
    return Response.json({ success: true, post });
  } catch (error) {
    return Response.json({ error: "Failed to create post" }, { status: 500 });
  }
}
