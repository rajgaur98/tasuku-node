import mongoose from "mongoose";

const SectionModel = new mongoose.Schema({
  name: String,
  description: String,
});

export default mongoose.model("Section", SectionModel);
