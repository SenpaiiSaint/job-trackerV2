// src/context/AuthContext.jsx
import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token') || null)
  const [role, setRole] = useState(localStorage.getItem('role') || null)
  const [user, setUser] = useState(null)

  // If a token exists, fetch current user to verify
  useEffect(() => {
    if (token) {
      axios
        .get('http://localhost:5000/api/auth/currentUser', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setUser(res.data.user))
        .catch(() => {
          // If token is invalid, remove it
          logout()
        })
    }
  }, [token])

  const login = async (email, password) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      })
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('role', res.data.role)
      setToken(res.data.token)
      setRole(res.data.role)
      return true
    } catch (err) {
      console.error(err)
      return false
    }
  }

  const register = async (email, password, role) => {
    try {
      await axios.post('http://localhost:5000/api/auth/register', {
        email,
        password,
        role,
      })
      return true
    } catch (err) {
      console.error(err)
      return false
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    setToken(null)
    setRole(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        role,
        user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
