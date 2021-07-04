import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  sectionId: String,
  name: String,
  description: String,
  status: String,
  priority: String,
  dueDate: String,
  createdOn: String,
});

export default mongoose.model("Task", TaskSchema);
