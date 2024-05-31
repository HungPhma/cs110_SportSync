const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('./routes/authRoute'); // Import your auth routes

// Create an Express application
const app = express();
//1) middlewares

app.use(cors);
app.use(express.json());

//2)Route
app.use('/api/auth', authRouter);

//3) Moongo db connection
const uri = "mongodb+srv://hpham097:Ps8i1WvMaZg9VZpU@cluster0.budpssk.mongodb.net/"

mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1); // Exit the process if MongoDB connection fails
  });

// 4) Global error handler
app.use((err, req, res, next) => {

    err.statuCode = err.statuCode || 500;
    err.status = err.status || 'error';

    res.status(err.statuCode).json({
        status : err.status,
        message : err.message,
    });
});

// 5) Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});