import { dbConnect } from "@/lib/dbConnect";
import Project from "@/models/project";

export async function GET() {
  try {
    await dbConnect();
    const projects = await Project.find().sort({ createdAt: -1 });
    return Response.json({ projects });
  } catch (error) {
    return Response.json({ error: "Failed to fetch projects" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await dbConnect();
    const data = await req.json();
    const project = await Project.create(data);
    return Response.json({ success: true, project });
  } catch (error) {
    return Response.json({ error: "Failed to create project" }, { status: 500 });
  }
}
