const fs = require('fs');
const crypto = require('crypto');

const SESSION_FILE = 'sessions.json';

function readSessions() {
  if (!fs.existsSync(SESSION_FILE)) return {};
  return JSON.parse(fs.readFileSync(SESSION_FILE, 'utf8') || '{}');
}

function writeSessions(sessions) {
  fs.writeFileSync(SESSION_FILE, JSON.stringify(sessions, null, 2));
}

function createSession(username) {
  const sessions = readSessions();
  const token = crypto.randomBytes(16).toString('hex');
  sessions[token] = username;
  writeSessions(sessions);
  return token;
}

module.exports = { readSessions, writeSessions, createSession };
