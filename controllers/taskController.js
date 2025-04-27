const { readTasks, writeTasks } = require('../models/taskModel');

function addTask(req, res) {
  const { title } = req.body;
  const tasks = readTasks();

  if (!tasks[req.username]) {
    tasks[req.username] = [];
  }

  tasks[req.username].push({ id: Date.now(), title });
  writeTasks(tasks);

  res.json({ message: 'Task added' });
}

function getTasks(req, res) {
  const tasks = readTasks();
  res.json(tasks[req.username] || []);
}

function deleteTask(req, res) {
  const { id } = req.params;
  const tasks = readTasks();

  if (!tasks[req.username]) {
    return res.status(404).json({ message: 'No tasks found' });
  }

  tasks[req.username] = tasks[req.username].filter(task => task.id != id);
  writeTasks(tasks);

  res.json({ message: 'Task deleted' });
}

module.exports = { addTask, getTasks, deleteTask };
