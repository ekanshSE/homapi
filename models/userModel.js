const fs = require('fs');

const USER_FILE = 'users.json';

function readUsers() {
  if (!fs.existsSync(USER_FILE)) return [];
  return JSON.parse(fs.readFileSync(USER_FILE, 'utf8') || '[]');
}

function writeUsers(users) {
  fs.writeFileSync(USER_FILE, JSON.stringify(users, null, 2));
}

module.exports = { readUsers, writeUsers };
