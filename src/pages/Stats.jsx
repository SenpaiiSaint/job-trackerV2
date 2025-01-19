// src/pages/Stats.jsx
import React from 'react'
import './Stats.css'

// Recharts imports
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from 'recharts'

// Example data for the table and charts
const statsData = [
  { status: 'Applied', count: 10 },
  { status: 'Interviewing', count: 5 },
  { status: 'Offered', count: 2 },
  { status: 'Rejected', count: 8 },
]

function SummaryTable() {
  return (
    <table className="stats-table">
      <thead>
        <tr>
          <th>Status</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {statsData.map((item) => (
          <tr key={item.status}>
            <td>{item.status}</td>
            <td>{item.count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function Stats() {
  return (
    <div className="stats-page">
      <h1>Stats & Analytics</h1>

      {/* Section 1: Summary Table */}
      <div className="stats-section">
        <h2>Summary</h2>
        <SummaryTable />
      </div>

      {/* Section 2: Bar Chart */}
      <div className="stats-section chart-container">
        <h2>Jobs by Status (Bar Chart)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={statsData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="status" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Section 3: Pie/Donut Chart */}
      <div className="stats-section chart-container">
        <h2>Jobs by Status (Pie Chart)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={statsData}
              dataKey="count"
              nameKey="status"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#82ca9d"
              label
            >
              {/* Optional custom colors for each slice */}
              {statsData.map((entry, index) => {
                const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']
                return <Cell key={`cell-${entry.status}`} fill={COLORS[index % COLORS.length]} />
              })}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Stats
