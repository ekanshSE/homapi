const fs = require('fs');

const TASK_FILE = 'tasks.json';

function readTasks() {
  if (!fs.existsSync(TASK_FILE)) return {};
  return JSON.parse(fs.readFileSync(TASK_FILE, 'utf8') || '{}');
}

function writeTasks(tasks) {
  fs.writeFileSync(TASK_FILE, JSON.stringify(tasks, null, 2));
}

module.exports = { readTasks, writeTasks };
