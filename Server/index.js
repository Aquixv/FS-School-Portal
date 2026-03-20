const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config(); 
require('./connection');

const student = require('./models/Student');
app.use(cors({
  origin: ["http://localhost:5173", ""],
  credentials: true
}));
app.use(express.json());

const port = process.env.PORT || 1500; 

app.get('/health', (req, res) => {
    res.status(200).send('Server is alive and kicking! 🚀');
});

app.get('/', (req, res) => {
    res.send('API Live');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});