const express = require("express");
const cors = require('cors')
const cookieParser = require('cookie-parser');
const connectDb = require('./config/db');
const { getAllUsers, registerUser, loginUser } = require("./controllers/userController");
const authenticateToken = require("./middleware/authToken");

const app = express(express.json);
app.use(express.json())
app.use(cookieParser());
app.use(cors({
    credentials: true
})) 

app.get('/', (req, res) => {
    res.json({ message: 'This is my express app' });
})

app.get('/getUsers', authenticateToken, getAllUsers)

app.post('/register', registerUser);

app.post('/login', loginUser);

if(connectDb()) {
    app.listen(8080, () => {
        console.log('Server is now running on port 8080...');
    })
}