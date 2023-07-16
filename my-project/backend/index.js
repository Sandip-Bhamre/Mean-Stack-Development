const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db');
const userRoutes = require('./routes/user');

app.use(express.json());
app.use(cors());

// Use user routes
app.use('/api/users', userRoutes);

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});