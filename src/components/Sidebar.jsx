import React, { useState } from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import { FaHome, FaChartBar, FaCog, FaBars, FaUserCircle } from 'react-icons/fa'

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      {/* Header: toggle button + optional title */}
      <div className="sidebar__header">
        <button className="sidebar__toggle-btn" onClick={toggleSidebar}>
          <FaBars />
        </button>
        {!collapsed && <h2 className="sidebar__title">Menu</h2>}
      </div>

      {/* Profile Section */}
      <div className="sidebar__profile">
        <FaUserCircle className="sidebar__profile-icon" />
        {!collapsed && (
          <div className="sidebar__profile-info">
            <span className="sidebar__profile-name">John Doe</span>
            <span className="sidebar__profile-email">john.doe@example.com</span>
          </div>
        )}
      </div>

      {/* Navigation Menu */}
      <nav className="sidebar__nav">
        <ul>
          <li>
            <Link to="/dashboard" className="sidebar__link">
              <FaHome className="sidebar__icon" />
              {!collapsed && <span className="sidebar__text">Dashboard</span>}
            </Link>
          </li>
          <li>
            <Link to="/stats" className="sidebar__link">
              <FaChartBar className="sidebar__icon" />
              {!collapsed && <span className="sidebar__text">Stats</span>}
            </Link>
          </li>
          <li>
            <Link to="/settings" className="sidebar__link">
              <FaCog className="sidebar__icon" />
              {!collapsed && <span className="sidebar__text">Settings</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
