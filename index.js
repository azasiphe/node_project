import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import productsRouter from './routes/products.js';
import UserRouter from './routes/users.js';
import jwt from 'jsonwebtoken';
import cookieParser from "cookie-parser";

config();

const PORT = process.env.PORT || 3500;

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.static('public'));
app.use('/products', productsRouter);
app.use('/users', UserRouter);

const users = [];

// Registration
app.post('/register', async (req, res) => {
    const { email, password } = req.body;
   
    const hashedPassword = await bcrypt.hash(password, 10);
    // Add user to "database"
    users.push({ email, password: hashedPassword });
    res.status(201).json({ message: 'User created successfully' });
});

// Login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    // Find user by email
    const user = users.find(user => user.email === email);
    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    // Compare password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    // Generate JWT token
    const token = jwt.sign({ email: user.email }, 'secret', { expiresIn: '1h' });
    // Set token in cookie
    res.cookie('token', token, { httpOnly: true });
    res.json({ msg: 'Logged in successfully', token });
});

// Protected route
app.get('/protected', authenticateToken, (req, res) => {
    res.json({ msg: 'This is a protected route', user: req.user });
});

//  Middleware for Authentication
function authenticateToken(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    jwt.verify(token, 'secret', (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Forbidden' });
        }
        req.user = user;
        next();
    });
}
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
