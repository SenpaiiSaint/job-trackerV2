// src/components/JobItem.jsx
import React from 'react'
import './JobItem.css'

function JobItem({ job, onStatusChange, onRemoveJob }) {
  const { id, position, company, status } = job

  const handleStatusChange = (e) => {
    onStatusChange(id, e.target.value)
  }

  const handleRemove = () => {
    onRemoveJob(id)
  }

  return (
    <div className="job-item">
      <div className="job-item__info">
        <h3 className="job-item__position">{position}</h3>
        <p className="job-item__company">{company}</p>
      </div>
      <div className="job-item__controls">
        <select value={status} onChange={handleStatusChange}>
          <option value="Applied">Applied</option>
          <option value="Interviewing">Interviewing</option>
          <option value="Offered">Offered</option>
          <option value="Rejected">Rejected</option>
        </select>
        <button onClick={handleRemove} className="job-item__remove">Remove</button>
      </div>
    </div>
  )
}

export default JobItem
