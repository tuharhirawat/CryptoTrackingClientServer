// import React from "react";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

// const Header = ({ isLoggedIn, handleLogout }) => {
//   const navigate = useNavigate();

//   return (
//     <HeaderContainer>
//       <Logo onClick={() => navigate(isLoggedIn ? "/dashboard" : "/signup")}>Crypto Tracker</Logo>
//       <Nav>
//       <NavLink onClick={() => navigate("/home")}>Home</NavLink>
//       <NavLink onClick={() => navigate("/news")}>News</NavLink>
//       <NavLink onClick={() => navigate("/about")}>About</NavLink>
//         {isLoggedIn ? (
//           <>
//             <NavLink onClick={() => navigate("/watchlist")}>WatchList</NavLink>
//             <NavLink onClick={() => navigate("/airdrop")}>Airdrop</NavLink>
//             <NavLink onClick={() => navigate("/myairdrops")}>MyAirdrops</NavLink>
//             <NavLink onClick={() => navigate("/dashboard")}>Dashboard</NavLink>
//             <NavLink onClick={() => navigate("/pricing")}>Pricing</NavLink>
//             <Button onClick={handleLogout}>Logout</Button>
//           </>
//         ) : (
//           <>
//             <NavLink onClick={() => navigate("/signup")}>Signup</NavLink>
//             <NavLink onClick={() => navigate("/login")}>Login</NavLink>
//           </>
//         )}
//       </Nav>
//     </HeaderContainer>
//   );
// };

// const HeaderContainer = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem 2rem;
//   background-color: #007bff;
//   color: white;
// `;

// const Logo = styled.h1`
//   font-size: 1.5rem;
//   font-weight: bold;
//   cursor: pointer;
// `;

// const Nav = styled.nav`
//   display: flex;
  // gap: 1rem;
// `;

// const NavLink = styled.span`
//   color: white;
//   cursor: pointer;
//   font-size: 1rem;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const Button = styled.button`
//   background: white;
//   color: #007bff;
//   padding: 0.5rem 1rem;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//     color: white;
//   }
// `;

// export default Header;





















import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = ({ isLoggedIn, handleLogout }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Logo onClick={() => navigate(isLoggedIn ? "/dashboard" : "/signup")}>Crypto Tracker</Logo>
      <HamburgerIcon onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerIcon>
      <Nav isMenuOpen={isMenuOpen}>
        <NavLink onClick={() => navigate("/home")}>Home</NavLink>
        <NavLink onClick={() => navigate("/news")}>News</NavLink>
        <NavLink onClick={() => navigate("/about")}>About</NavLink>
        {isLoggedIn ? (
          <>
            <NavLink onClick={() => navigate("/myairdrops")}>My-Airdrops</NavLink>
            <NavLink onClick={() => navigate("/airdrop")}>Airdrop</NavLink>
            <NavLink onClick={() => navigate("/watchlist")}>WishList</NavLink>
            <NavLink onClick={() => navigate("/profile")}>Profile</NavLink>
            <NavLink onClick={() => navigate("/pricing")}>Pricing</NavLink>
            <Button onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <>
            <NavLink onClick={() => navigate("/signup")}>Signup</NavLink>
            <NavLink onClick={() => navigate("/login")}>Login</NavLink>
          </>
        )}
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  margin-bottom: 2cm;
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
    position: absolute;
    top: 60px;
    gap: 1rem;
    left: 0;
    width: 100%;
    background-color: #222;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
    padding: 20px 0;
  }
`;

const NavLink = styled.span`
  margin: 0 15px;
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
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

export default Header;