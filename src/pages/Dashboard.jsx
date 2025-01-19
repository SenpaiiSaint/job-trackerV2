// src/pages/Dashboard.jsx

import React, { useState } from 'react'
import JobForm from '../components/JobForm'
import JobList from '../components/JobList'

// Material UI imports
import { 
  Container, 
  Box, 
  Typography, 
  TextField, 
  Grid, 
  Card, 
  CardContent, 
  Paper 
} from '@mui/material'

function Dashboard() {
  const [jobs, setJobs] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  // Handlers (same logic as your previous dashboard)
  const handleAddJob = (newJob) => {
    setJobs((prevJobs) => [...prevJobs, newJob])
  }
  const handleStatusChange = (id, newStatus) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) => (job.id === id ? { ...job, status: newStatus } : job))
    )
  }
  const handleRemoveJob = (id) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id))
  }

  // Simple filter
  const filteredJobs = jobs.filter((job) =>
    job.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Header Section */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" gutterBottom>
          Welcome to Your Dashboard
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Track your job applications, interviews, and more.
        </Typography>
      </Box>

      {/* Search Bar */}
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <TextField
          label="Search by position or company..."
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>

      {/* Material UI 'Card' or 'Paper' around the form */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Add a New Job
          </Typography>
          <JobForm onAddJob={handleAddJob} />
        </CardContent>
      </Card>

      {/* Job List in a Paper or Card */}
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Your Jobs
        </Typography>
        {/* 
          We can make a grid or keep it simple. 
          For each job, the JobItem could remain as-is, or you can 
          style it with MUI. For now, we just embed the list:
        */}
        <JobList
          jobs={filteredJobs}
          onStatusChange={handleStatusChange}
          onRemoveJob={handleRemoveJob}
        />
      </Paper>
    </Container>
  )
}

export default Dashboard
