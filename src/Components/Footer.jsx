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

import styled from 'styled-components';
import Pricing from "../Pages/Pricing";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import TermsOfService from "../Pages/TermsOfService";
import Contact from "../Pages/Contact";

const Main = styled.footer`
background-color: #2c2c2c;
    color: white;
    padding: 40px 20px;
    font-size: 14px;
    text-align: center;

    @media (max-width: 768px) {
    .footer-container {
      flex-direction: column;
      align-items: center;
    }
`;

const FooterContainer = styled.div`
display: flex;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: wrap;
`;

const H3 = styled.h3`
color: #fff;
    font-size: 24px;
    font-weight: bold; 
`;

const Ul = styled.ul`
 list-style: none;
    padding: 0;
`;

const Li = styled.li`
margin: 10px 0;

`;

const A = styled.a`
color: #ddd;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease;

    &:hover{
    color: #007bff;}
`;

const FooterSocial = styled.div`
display: flex;
    flex-direction: column;
    gap: 15px;
`;

const Icon = styled.a`
 color: #ddd;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease;

    &:hover{
    color: #007bff;}
`;

const FootBtm = styled.div`
margin-top: 20px;
    font-size: 18px;

    p{
    color: #bbb;
    margin: 0;}
`;



function Footer() {
  return (
    <Main>
      <FooterContainer>
        <div className="footer-logo">
          <H3>Crypto Tracker</H3>
        </div>
        <div className="footer-links">
          <Ul>
            {/* <Li><A href="/about">About Us</A></Li> */}
            <Li><A href="/privacy-policy" Component={PrivacyPolicy}>Privacy Policy</A></Li>
            <Li><A href="/terms-of-service" Component={TermsOfService}>Terms of Service</A></Li>
            <Li><A href="/contact" Component={Contact}>Contact Us</A></Li>
          </Ul>
        </div>
        <FooterSocial>
          <Icon href="https://facebook.com" target="_blank" rel="noopener noreferrer" >Facebook</Icon>
          <Icon href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</Icon>
          <Icon href="https://linkedin.com" target="_blank" rel="noopener noreferrer" >LinkedIn</Icon>
        </FooterSocial>
      </FooterContainer>
      <FootBtm>
        <p>&copy; 2024 Crypto Tracker. All Rights Reserved.</p>
      </FootBtm>
    </Main>
  );
}

export default Footer;