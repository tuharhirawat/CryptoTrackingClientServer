import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = ({ isLoggedIn, handleLogout }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the sidebar menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when the close button is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle navigation and close the sidebar
  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close the menu after navigation
  };

  return (
    <HeaderContainer>
      <Logo onClick={() => handleNavigation(isLoggedIn ? "/dashboard" : "/signup")}>
        Crypto Tracker
      </Logo>
      <HamburgerIcon onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerIcon>
      <Nav isMenuOpen={isMenuOpen}>
        {/* Close Button */}
        {isMenuOpen && (
          <CloseButton onClick={closeMenu}>
            <span>&#10005;</span>
          </CloseButton>
        )}
        <NavLink onClick={() => handleNavigation("/home")}>Home</NavLink>
        <NavLink onClick={() => handleNavigation("/news")}>News</NavLink>
        <NavLink onClick={() => handleNavigation("/about")}>About</NavLink>
        {isLoggedIn ? (
          <>
            <NavLink onClick={() => handleNavigation("/myairdrops")}>My-Airdrops</NavLink>
            <NavLink onClick={() => handleNavigation("/airdrop")}>Airdrop</NavLink>
            <NavLink onClick={() => handleNavigation("/watchlist")}>WishList</NavLink>
            <NavLink onClick={() => handleNavigation("/profile")}>Profile</NavLink>
            <NavLink onClick={() => handleNavigation("/pricing")}>Pricing</NavLink>
            <Button onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <>
            <NavLink onClick={() => handleNavigation("/signup")}>Signup</NavLink>
            <NavLink onClick={() => handleNavigation("/login")}>Login</NavLink>
          </>
        )}
      </Nav>
    </HeaderContainer>
  );
};

// Styled Components
const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #222;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  z-index: 1000;
  box-sizing: border-box;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
`;

const HamburgerIcon = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 30px;
  height: 25px;
  cursor: pointer;
  div {
    width: 25px;
    height: 4px;
    background-color: #fff;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0; /* Move sidebar to the right */
    height: 100%;
    width: 250px; /* Adjust the width of the sidebar */
    background-color: #222;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 60px; /* To offset the header's height */
    transform: ${({ isMenuOpen }) => (isMenuOpen ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;
    z-index: 999;
  }
`;

const NavLink = styled.span`
  margin: 20px 0;
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  padding-left: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  background-color: #ff4d4d;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;

  &:hover {
    background-color: #ff1a1a;
  }

  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;

// Close Button for the sliding menu
const CloseButton = styled.div`
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 30px;
  color: #fff;
  cursor: pointer;
  z-index: 1001;

  &:hover {
    color: #ffcc00;
  }

  @media (min-width: 769px) {
    display: none; /* Hide the close button on larger screens */
  }
`;

export default Header;