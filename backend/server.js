// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

app.get('/api/sorting-data', (req, res) => {
  const data = [5, 3, 8, 6, 2, 7, 4, 1];
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
