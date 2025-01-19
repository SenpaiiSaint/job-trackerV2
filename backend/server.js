// server.js
require('dotenv').config()  // Load .env variables first
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const authRoutes = require('./routes/authRoutes')

const app = express()

// Middleware
app.use(cors())
app.use(express.json()) // Parse JSON request bodies

// Connect to MongoDB
// Use either the MONGO_URI from .env or fallback to local
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/job-tracker'

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err))

// Routes
app.use('/api/auth', authRoutes)

// Basic test route
app.get('/', (req, res) => {
  res.send('Job Tracker API is running...')
})

// Listen on PORT (default to 5000)
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
