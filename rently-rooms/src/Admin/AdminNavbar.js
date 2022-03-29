import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminNavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginTop: "-17px", padding: '10px'}} id="adminNavbar">
  <Link className="navbar-brand" to="/AdminDashboard">Rently-Rooms</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link active" to="/AdminDashboard" id="adminDashboardLink">Dashboard</Link>
      <Link className="nav-item nav-link" to="/AdminProfile" id="adminProfileLink">Profile</Link>
      <Link className="nav-item nav-link" to="/AdminAddRoom" id="adminBookingLink">Booking</Link>
      
    </div>
    <div style={{display:'flex', justifyContent:'flex-end', width:'100%', padding:'0px'}}>
        <button type='submit' style={{backgroundColor: "red", color: "white"}} id="adminLogoutButton">Logout</button>
    </div>
  </div>
</nav>
    </div>
  )
}
