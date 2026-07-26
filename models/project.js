import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    num: { type: String, required: true },
    category: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    stack: [{ name: { type: String } }],
    image: { type: String, default: "" },
    imageMobile: { type: String, default: "" },
    live: { type: String, default: "" },
    github: { type: String, default: "" },
  },
  { timestamps: true }
);

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
