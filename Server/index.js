const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config(); 
require('./connection');
const path = require('path');
const student = require('./models/Student');

app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(cors({
  origin: ["http://localhost:5173", ""],
  credentials: true
}));
app.use(express.json());

const port = process.env.PORT || 1500; 

app.get('/health', (req, res) => {
    res.status(200).send('Server is alive and kicking! 🚀');
});

app.get('/signup', (req, res) => {
    res.render('signup'); 
});

app.get('/', (req, res) => {
    res.send('API Live');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});