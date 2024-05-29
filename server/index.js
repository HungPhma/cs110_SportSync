const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Create an Express application
const app = express();
//1) middlewares

app.use(cors);
app.use(express.json());

//2)Route
app.get('/', (req, res) => {
    res.send('Welcome to the API');
  });

//3) Moongo db connection
const uri = "mongodb+srv://hpham097:Ps8i1WvMaZg9VZpU@cluster0.budpssk.mongodb.net/"

mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1); // Exit the process if MongoDB connection fails
  });

// 4) Global error handler


// 5) Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});