const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello from users service!');
});

// Start server
app.listen(PORT, () => {
  console.log('users service running on port', PORT);
});
