// server.js
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()  // if using .env for secrets

const authRoutes = require('./routes/authRoutes')

const app = express()
app.use(cors())
app.use(express.json()) // parse JSON request bodies

// Connect to MongoDB (example)
mongoose
  .connect('mongodb://127.0.0.1:27017/job-tracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err))

app.use('/api/auth', authRoutes)

app.get('/', (req, res) => {
  res.send('Job Tracker API is running...')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
