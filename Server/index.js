const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config(); 
require('./connection');
const path = require('path');
const User = require('./models/Student');
const bcrypt = require('bcrypt');

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
app.post('/api/signup', async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        // Generate a simple ID for now
        const generatedId = "STU-" + Math.floor(1000 + Math.random() * 9000);

        const newUser = new User({
            fullName: `${firstname} ${lastname}`,
            email,
            password: hashedPassword,
            studentId: generatedId, // This prevents the 'null' duplicate error
            role: 'student'
        });

        await newUser.save();
        res.status(201).json({ message: "Student registered!" });
    } catch (err) {
        // If the ID somehow duplicates, try again or handle it
        res.status(500).json({ error: err.message });
    }
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});