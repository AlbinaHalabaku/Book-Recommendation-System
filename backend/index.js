const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());  // Lejon të pranojmë JSON në kërkesat POST

app.get('/', (req, res) => {
  res.send('Book Recommendation System API');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
