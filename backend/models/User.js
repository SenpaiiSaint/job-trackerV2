// models/User.js
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'job-seeker' }, 
  // e.g., 'admin', 'recruiter', or 'job-seeker'
})

module.exports = mongoose.model('User', userSchema)
