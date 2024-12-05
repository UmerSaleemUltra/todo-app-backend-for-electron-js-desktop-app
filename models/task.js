import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

// Use `export default` for ES Modules
const Task = mongoose.model("Task", TaskSchema);
export default Task;
