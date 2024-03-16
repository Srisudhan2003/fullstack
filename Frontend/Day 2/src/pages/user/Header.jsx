import React from 'react';
import "../../assets/css/Header.css"

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <a id='list'>
          <li><a href="/wishlist">Wishlist</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/signup">Signup</a></li>
          </a>
        </ul>
      </nav>
    </header>
  );
}

export default Header;