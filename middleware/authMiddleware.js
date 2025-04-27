const { readSessions } = require('../models/sessionModel');

function authMiddleware(req, res, next) {
  const token = req.headers['authorization'];
  const sessions = readSessions();

  if (!token || !sessions[token]) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  req.username = sessions[token];
  next();
}

module.exports = { authMiddleware };
