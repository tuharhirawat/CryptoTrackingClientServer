// import React from "react";
// import styled from "styled-components";

// const Footer = () => {
//   return (
//     <FooterContainer>
//       <p>&copy; 2024 Crypto Tracker. All Rights Reserved.</p>
//     </FooterContainer>
//   );
// };

// export default Footer;

// const FooterContainer = styled.footer`
//   background-color: #222;
//   color: #fff;
//   text-align: center;
//   padding: 15px 0;
//   position: relative;
//   bottom: 0;
//   width: 100%;
// `;

import React from "react";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h3>Crypto Tracker</h3>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Crypto Tracker. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;