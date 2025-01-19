import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Avatar,
  MenuItem,
} from '@mui/material'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'

function Register() {
  const { register } = useContext(AuthContext)
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('job-seeker')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const success = await register(email, password, role)
    if (success) {
      alert('Registered successfully! Please log in.')
      navigate('/login')
    } else {
      alert('Registration failed')
    }
  }

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: 8,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: '#e3f2fd', // Light blue background
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <PersonAddAltIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
          Register
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: '100%',
            mt: 1,
          }}
        >
          <TextField
            margin="normal"
            fullWidth
            label="Email Address"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            margin="normal"
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {/* Role selection if your app supports multiple roles */}
          <TextField
            margin="normal"
            select
            fullWidth
            label="Role"
            variant="outlined"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <MenuItem value="job-seeker">Job Seeker</MenuItem>
            <MenuItem value="recruiter">Recruiter</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </TextField>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              bgcolor: 'secondary.main',
              '&:hover': {
                bgcolor: 'secondary.dark',
              },
            }}
          >
            Register
          </Button>
        </Box>
        <Typography variant="body2" color="text.secondary" align="center">
          Already have an account?{' '}
          <Button
            variant="text"
            onClick={() => navigate('/login')}
            sx={{ textTransform: 'none' }}
          >
            Sign In
          </Button>
        </Typography>
      </Paper>
    </Container>
  )
}

export default Register
