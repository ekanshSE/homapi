const express = require('express');
const { addTask, getTasks, deleteTask } = require('../controllers/taskController');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, addTask);
router.get('/', authMiddleware, getTasks);
router.delete('/:id', authMiddleware, deleteTask);

module.exports = router;
