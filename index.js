// Import necessary modules
const express = require('express');
const app = express();

// Middleware for error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Your routes and application logic here

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).send('404: Not Found');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});