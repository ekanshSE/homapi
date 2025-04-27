const { readUsers, writeUsers } = require('../models/userModel');
const { createSession } = require('../models/sessionModel');
const bcrypt = require('bcryptjs');

async function registerUser(req, res) {
  const { username, password } = req.body;
  const users = readUsers();

  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({ username, password: hashedPassword });
  writeUsers(users);

  res.json({ message: 'Registration successful' });
}

async function loginUser(req, res) {
  const { username, password } = req.body;
  const users = readUsers();

  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = createSession(username);

  res.json({ message: 'Login successful', token });
}

module.exports = { registerUser, loginUser };
