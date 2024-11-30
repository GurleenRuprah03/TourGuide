const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
   const { name, email, password, isGuide, bio, experience } = req.body;

   try {
       const hashedPassword = await bcrypt.hash(password, 10);
       const newUser = new User({ name, email, password: hashedPassword, isGuide, bio, experience });
       await newUser.save();
       res.status(201).json({ message: 'User registered successfully' });
   } catch (err) {
       res.status(500).json({ error: 'Error registering user' });
   }
});

// Login
router.post('/login', async (req, res) => {
   const { email, password } = req.body;

   try {
       const user = await User.findOne({ email });
       if (!user) return res.status(404).json({ error: 'User not found' });

       const isPasswordValid = await bcrypt.compare(password, user.password);
       if (!isPasswordValid) return res.status(401).json({ error: 'Invalid credentials' });

       const token = jwt.sign({ id: user._id, isGuide: user.isGuide }, process.env.JWT_SECRET, { expiresIn: '1h' });
       res.status(200).json({ token, message: 'Login successful' });
   } catch (err) {
       res.status(500).json({ error: 'Error logging in' });
   }
});

module.exports = router;
