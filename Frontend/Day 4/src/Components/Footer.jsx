import React from 'react';
import './Footer.css'; // Import the CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 by Craftify. All Rights Reserved.</p>
      <nav className="footer-nav">
        <a href="/privacy-policy">Privacy Policy</a>
        <span> | </span>
        <a href="/terms-conditions">Terms &amp; Conditions</a>
        <span> | </span>
        <a href="/cancellation-refund-policy">Cancellation &amp; Refund Policy</a>
      </nav>
    </footer>
  );
}

export default Footer;
