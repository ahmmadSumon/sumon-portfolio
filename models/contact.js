import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    service: String,
    message: String,
  },
  { timestamps: true }
);

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);
export default Contact;
