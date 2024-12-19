
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <HeaderContainer>
      <Logo>Crypto Tracker</Logo>
      <NavLinks>
        <StyledLink to="/">Home</StyledLink>
        {/* <Link to="/profile" style={styles.profileIcon}>
              🧑
        </Link> */}
        {isLoggedIn && <StyledLink to="/airdrop">Airdrop</StyledLink>}
        {isLoggedIn && <StyledLink to="/pricing">Pricing</StyledLink>}
        {isLoggedIn && <StyledLink to="/profile">Profile</StyledLink>} 
        {isLoggedIn && <StyledLink to="/watchlist">WishList</StyledLink>} 
        <StyledLink to="/news">News</StyledLink>
        <StyledLink to="/about">About</StyledLink> 
      </NavLinks>
      <AuthButtons>
        {!isLoggedIn ? (
          <>
            <StyledLink to="/signup">Sign Up</StyledLink>
            <StyledLink to="/login">Sign In</StyledLink>
          </>
        ) : (
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        )}
      </AuthButtons>
    </HeaderContainer>
  );
};

export default Header;

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
  color: #fff;
  margin: 0;
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  margin: 0 15px;
  text-decoration: none;
  color: #fff;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Adds spacing between buttons */
`;

const LogoutButton = styled.button`
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
`;



// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Header = ({ isLoggedIn, setIsLoggedIn }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("userData");
//     setIsLoggedIn(false);
//     navigate("/"); // Redirect to the homepage after logout
//   };

//   return (
//     <header style={styles.header}>
//       <h1 style={styles.title}>Crypto Website</h1>
//       <nav>
//         {isLoggedIn && (
//           <>
            // <Link to="/profile" style={styles.profileIcon}>
            //   🧑
            // </Link>
//             <button onClick={handleLogout} style={styles.logoutButton}>
//               Logout
//             </button>
//           </>
//         )}
//         {!isLoggedIn && (
//           <Link to="/login" style={styles.loginButton}>
//             Login
//           </Link>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;

// /* Inline Styles */
// const styles = {
//   header: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     backgroundColor: "#333",
//     color: "#fff",
//     padding: "10px 20px",
//     position: "fixed",
//     top: 0,
//     width: "100%",
//     zIndex: 1000,
//   },
//   title: {
//     margin: 0,
//   },
//   profileIcon: {
//     fontSize: "1.5rem",
//     marginRight: "20px",
//     color: "#fff",
//     textDecoration: "none",
//   },
//   logoutButton: {
//     padding: "8px 16px",
//     backgroundColor: "red",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
//   loginButton: {
//     padding: "8px 16px",
//     backgroundColor: "green",
//     color: "#fff",
//     textDecoration: "none",
//     borderRadius: "5px",
//   },
// };
