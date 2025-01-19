import React, { useState } from 'react'
import './JobForm.css'

function JobForm({ onAddJob }) {
  const [position, setPosition] = useState('')
  const [company, setCompany] = useState('')
  const [status, setStatus] = useState('Applied')

  const handleSubmit = (e) => {
    e.preventDefault()

    const newJob = {
      id: Date.now(), // simplistic unique ID
      position,
      company,
      status,
    }

    onAddJob(newJob)
    // Reset form fields
    setPosition('')
    setCompany('')
    setStatus('Applied')
  }

  return (
    <form className="job-form" onSubmit={handleSubmit}>
      <input
        className="job-form__input"
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        required
      />
      <input
        className="job-form__input"
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        required
      />
      <select
        className="job-form__select"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Applied">Applied</option>
        <option value="Interviewing">Interviewing</option>
        <option value="Offered">Offered</option>
        <option value="Rejected">Rejected</option>
      </select>
      <button className="job-form__button" type="submit">
        Add Job
      </button>
    </form>
  )
}

export default JobForm
