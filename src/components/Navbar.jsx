import React from 'react'
import '../Navbar.css'
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="navbar">
<ul className="navbar-links">
<li><Link to="/Home">Home</Link></li>
<li><Link to="/">Start</Link></li>
      </ul>
    </nav>
  )
}
