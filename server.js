const express = require('express');
const athRoutes = require('./routes/auth');
const tskRoutes = require('./routes/tasks');

const app = express();

const PORT = 3000;

app.use(express.json());

app.use('/auth', athRoutes);
app.use('/tasks', tskRoutes);
app.get('/', (req, res) => {
    res.send('Welcome to the Express server!');
  });



app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
