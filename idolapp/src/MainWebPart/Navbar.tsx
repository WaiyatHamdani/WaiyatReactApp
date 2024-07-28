import React from 'react'
import { Link } from 'react-router-dom'
import '../CardWebContainer/main.css'

function Navbar() {
  return (
    <nav className="navbar"> 
        <div className="navbar-brand">My Kpop Bias</div>
        <ul className="navbar-links">
            <li><Link to="/">gidle</Link> </li>
            <li><Link to="/newjeans">NewJeans</Link> </li>
            <li><Link to="/twice">twice</Link> </li>
            <li><Link to="/blackpink">Blackpink</Link> </li>
            <li><Link to="/lesserafim">les serrafim</Link> </li>
            <li><Link to="/ive">Ive</Link> </li>
            
        </ul>
    </nav>
  )
}

export default Navbar
