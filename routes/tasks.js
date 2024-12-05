// tasks.js (ES Module)
import express from 'express';
import Task from '../models/task.js'; // Ensure Task model exists

const router = express.Router();

// Get all tasks
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Add a task
router.post("/", async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.status(201).json(task);
});

// Update a task
router.put("/:id", async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
});

// Delete a task
router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

// Export as ES module
export default router;
