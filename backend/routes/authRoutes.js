// routes/authRoutes.js
const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const router = express.Router()
const SECRET = 'SUPERSECRETKEY' 
// In production, store in .env or config

// REGISTER
router.post('/register', async (req, res) => {
  try {
    const { email, password, role } = req.body

    // Check if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user
    const newUser = new User({
      email,
      password: hashedPassword,
      role: role || 'job-seeker',
    })
    await newUser.save()

    res.status(201).json({ message: 'User registered successfully' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
})

// LOGIN
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    // Compare password
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    // Create JWT
    const token = jwt.sign({ userId: user._id, role: user.role }, SECRET, {
      expiresIn: '1d',
    })

    res.json({ token, role: user.role })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
})

// PROTECTED EXAMPLE: GET CURRENT USER
// (Used by the frontend to confirm login status/role)
router.get('/currentUser', async (req, res) => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader) {
      return res.status(401).json({ message: 'Missing Authorization header' })
    }

    const token = authHeader.split(' ')[1]
    const decoded = jwt.verify(token, SECRET)
    const user = await User.findById(decoded.userId).select('-password')
    if (!user) {
      return res.status(401).json({ message: 'User not found' })
    }

    res.json({ user })
  } catch (err) {
    console.error(err)
    return res.status(401).json({ message: 'Invalid token' })
  }
})

module.exports = router
