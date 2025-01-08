
import React from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";  // Importing useNavigate
import { FaFacebook, FaTwitter, FaLinkedin, FaTelegram, FaGithub } from 'react-icons/fa';  // Importing social media icons

const Main = styled.footer`
  // background-color: #2c2c2c;
  // color: white;
  padding: 40px 20px;
  font-size: 14px;
  text-align: center;
  z-index: 

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  gap: 40px;
`;

// const LogoSection = styled.div`
//   text-align: center;
//     margin-bottom:0;


//   h3 {
//     color: #fff;
//     font-size: 28px;
//     font-weight: bold;
//     margin-bottom: 20px;
//   }
// `;

const LinksSection = styled.div`
  text-align: center;
    margin-bottom:0px;
  h3 {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
  }
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
    margin-bottom:0px;

  display: flex;
  align-content:space-between;
  align-items:space-between;
  justify-content: center;
  gap: 30px; /* Horizontal spacing between the links */
`;

const Li = styled.li`
  margin: 0;
`;

const A = styled.a`
  color: #ddd;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
 
  &:hover {
    color: #007bff;
  }
`;

const FooterSocial = styled.div`
  text-align: center;
  margin-bottom:1px;

  h3 {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Icon = styled.a`
  color: #ddd;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const FootBtm = styled.div`
  font-size: 16px;
  // background-color:black;
  margin-top:20px;
  padding:0;

  p {
    color: #bbb;
    margin: 0;
  }
`;

function Footer() {
  const navigate = useNavigate();  // Using the navigate hook

  // Function to handle navigation
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Main>
      <FooterContainer>
        {/* Logo Section */}
        {/* <LogoSection>
          <h3>Crypto Tracker</h3>
        </LogoSection> */}

        {/* Quick Links Section */}
        <LinksSection>
          <h3>Quick Links</h3>
          <Ul>
            <Li><A onClick={() => handleNavigation("/about")}>About Us</A></Li>
            <Li><A onClick={() => handleNavigation("/privacy-policy")}>Privacy Policy</A></Li>
            <Li><A onClick={() => handleNavigation("/terms-of-service")}>Terms of Service</A></Li>
            <Li><A onClick={() => handleNavigation("/contact")}>Contact Us</A></Li>
          </Ul>
        </LinksSection>

        {/* Follow Us Section */}
        <FooterSocial>
          <h3>Follow Us</h3>
          <IconWrapper>
            <Icon href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></Icon>
            <Icon href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></Icon>
            <Icon href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></Icon>
            <Icon href="https://t.me/CRYPTOLOOTTERSS" target="_blank" rel="noopener noreferrer"><FaTelegram /></Icon>
            <Icon href="https://github.com/tuharhirawat/CryptoTrackingClientServer.git" target="_blank" rel="noopener noreferrer"><FaGithub /></Icon>
          </IconWrapper>
        </FooterSocial>
      </FooterContainer>

      {/* Footer Bottom */}
      <FootBtm>
        {/* <p>&copy; 2024 Crypto Tracker. All Rights Reserved.</p> */}
      </FootBtm>
    </Main>
  );
}

export default Footer;
