import { dbConnect } from "@/lib/dbConnect";
import Project from "@/models/project";

export async function PUT(req, { params }) {
  try {
    await dbConnect();
    const { id } = params;
    const data = await req.json();
    const project = await Project.findByIdAndUpdate(id, data, { new: true });
    if (!project) {
      return Response.json({ error: "Project not found" }, { status: 404 });
    }
    return Response.json({ success: true, project });
  } catch (error) {
    return Response.json({ error: "Failed to update project" }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await dbConnect();
    const { id } = params;
    await Project.findByIdAndDelete(id);
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Failed to delete project" }, { status: 500 });
  }
}
