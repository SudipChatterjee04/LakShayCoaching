import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import lakshyamLogo from './lakshyamlogo.png';

const Navbar = () => {
  return (
    <div>
    <header className="main-header clearfix">
      <div className="logo">
        <Link to="/">
          <img
            src={lakshyamLogo }
            alt="logo"
            height="60px"
            width="60px"
            
          />
        </Link>
      </div>
      <a href="#menu" className="menu-link">
        <i className="fa fa-bars"></i>
      </a>
      <nav id="menu" className="main-nav" role="navigation">
        <ul className="main-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/freetutorial">Free Tutorial</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a href="tel:+918001100314" target="/" style={{ backgroundColor: '#3fe503dd' }}>
              Call Now
            </a>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  )
}

export default Navbar