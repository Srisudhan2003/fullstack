import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <a href="/Home">Home</a>
        <a href="/Item">Explore</a>
        <a href="/Cart">Cart</a>
        <a href="/Signup">Sign Up</a>
        <a href="/">Login</a>
        <a href="/Contact">Contact</a>
        <a href="#explore">Profile</a>
      </div>
    </div>
  );
}

export default Navbar;
