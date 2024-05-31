import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.listen(process.env.PORT, () => {
  console.log("Server is Running")
});
