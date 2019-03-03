import React, { Component } from 'react'
import '../../stylesheets/Navbar.css'

import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>HS CARDS</li>
          <li>ARENA TRACKER</li>
          <li>STATS</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
