import React, {useState} from 'react'
import JobForm from './components/JobForm';
import JobList from './components/JobList';


function App() {
  const [jobs, setJobs] = useState([])

  // Add a new Job
  const handleAddJob = (newJob) => {
    setJobs((prevJobs) => [...prevJobs, newJob])
  }

  // Update the status of a job
  const handleStatusChange = (id, newStatus) => {
    setJobs((prevJobs) =>
    prevJobs.map((job) =>
    job.id === id ? { ...job, status: newStatus } : job
      ) 
    )
  }

  //Remove a job from the list
  const handleRemoveJob = (id) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id ))
  }

  return (
    <div className='app-container'>
      <h1>Simple Job Tracker</h1>
      <JobForm onAddJob={handleAddJob} />
      <JobList
      jobs={jobs}
      onStatusChange={handleStatusChange}
      onRemoveJob={handleRemoveJob}
      />
    </div>
  )
}

export default App;