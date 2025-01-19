// src/components/AdminRoute.jsx
import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

function AdminRoute({ children }) {
  const { token, role } = useContext(AuthContext)
  if (!token) {
    return <Navigate to="/login" replace />
  }
  if (role !== 'admin') {
    return <Navigate to="/dashboard" replace />
  }
  return children
}

export default AdminRoute
