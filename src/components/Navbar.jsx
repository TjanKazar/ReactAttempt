import React from 'react'
import '../Navbar.css'
import { Link } from 'react-router-dom';
import Button1 from './ButtonLogin';
export default function Navbar() {
  return (
    <nav className="navbar">
<ul className="navbar-links">
<li><Link to="/Home">Home</Link></li>
<li><Link to="/">Start</Link></li>
      </ul>
      <ul className='navbar-logins'>
        <li><Link to ="/Registration"><Button1 text='Registration'/></Link></li>
        <li><Link to="/LoginPage"><Button1 text='Login' $primary/></Link></li>
      </ul>
    </nav>
  )
}
