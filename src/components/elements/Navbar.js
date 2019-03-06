import React, { Component } from 'react'
import '../../stylesheets/Navbar.css'

import { Link } from "react-router-dom"

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <Link to="/"><li>HOME</li></Link>
          <Link to="/hscards"><li>HS CARDS</li></Link>
          <Link to="/arena"><li>ARENA TRACKER</li></Link>
          <Link to="stats"><li>STATS</li></Link>
        </ul>
      </nav>
    )}
}

export default Navbar
