import React from 'react'
import './JobList.css'
import JobItem from './JobItem'

function JobList({ jobs, onStatusChange, onRemoveJob }) {
  if (jobs.length === 0) {
    return <p className="job-list__empty">No jobs added yet.</p>
  }

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <JobItem
          key={job.id}
          job={job}
          onStatusChange={onStatusChange}
          onRemoveJob={onRemoveJob}
        />
      ))}
    </div>
  )
}

export default JobList
