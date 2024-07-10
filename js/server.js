const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Add your login logic here (e.g., check credentials in the database)
    if (username === 'testuser' && password === 'testpass') {
        res.status(200).send({ message: 'Login successful' });
    } else {
        res.status(401).send({ message: 'Invalid credentials' });
    }
});

// Register endpoint
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    // Add your registration logic here (e.g., save user to the database)
    res.status(200).send({ message: 'Registration successful' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
