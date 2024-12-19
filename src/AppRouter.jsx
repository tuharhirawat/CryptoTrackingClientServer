// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import Home from "./Pages/Home";
// import News from "./Pages/News";
// import About from "./Pages/About";
// import Airdrop from "./Pages/Airdrop";
// import Pricing from "./Pages/Pricing";
// import Signup from "./Pages/Signup";
// import Login from "./Pages/Login";
// import ProtectedRoute from "./Components/ProtectedRoute";
// import styled from "styled-components";

// const AppRouter = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const loggedInStatus = localStorage.getItem("isLoggedIn");
//     setIsLoggedIn(!!loggedInStatus);
//   }, []);


//   return (<>
//     <Router>
//       <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
//       <MainContainer>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/news" element={<News />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
//           <Route
//             path="/airdrop"
//             element={<ProtectedRoute isLoggedIn={isLoggedIn} Component={Airdrop} />}
//           />
//           <Route
//             path="/pricing"
//             element={<ProtectedRoute isLoggedIn={isLoggedIn} Component={Pricing} />}
//           />
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       </MainContainer>
//       <Footer />
//     </Router>

//     </>);
// };

// export default AppRouter;

// const MainContainer = styled.div`
//   min-height: 80vh;
//   padding: 20px;
// `;


// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import Home from "./Pages/Home";
// import News from "./Pages/News";
// import About from "./Pages/About";
// import Airdrop from "./Pages/Airdrop";
// import Pricing from "./Pages/Pricing";
// import Signup from "./Pages/Signup";
// import Login from "./Pages/Login";
// import ProtectedRoute from "./Components/ProtectedRoute";
// // import styled from "styled-components";

// const AppRouter = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     // Check localStorage for login status
//     const loggedInStatus = localStorage.getItem("isLoggedIn");
//     if (loggedInStatus === "true") {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   return (
//     <Router>
//       <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/news" element={<News />} />
//         <Route path="/about" element={<About />} />
//         <Route
//           path="/airdrop"
//           element={<ProtectedRoute isLoggedIn={isLoggedIn} Component={Airdrop} />}
//         />
//         <Route
//           path="/pricing"
//           element={<ProtectedRoute isLoggedIn={isLoggedIn} Component={Pricing} />}
//         />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default AppRouter;

////////////*
// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import Home from "./Pages/Home";
// import News from "./Pages/News";
// import About from "./Pages/About";
// import Airdrop from "./Pages/Airdrop";
// import Pricing from "./Pages/Pricing";
// import Signup from "./Pages/Signup";
// import Login from "./Pages/Login";
// import ProtectedRoute from "./Components/ProtectedRoute";
// import Profile from "./Pages/Profile";
// import PrivacyPolicy from "./Pages/PrivacyPolicy";
// import CoinDetail from "./Pages/CoinDetail";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";

// import styled from "styled-components";

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const loggedInStatus = localStorage.getItem("isLoggedIn");
//     if (loggedInStatus === "true") {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   return (
//     <Router>
//       <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/news" element={<News />} />
//           <Route path="/about" element={<About />} />
//           <Route
//             path="/airdrop"
//             element={<ProtectedRoute isLoggedIn={isLoggedIn} Component={Airdrop} />}
//           />
//           <Route
//             path="/pricing"
//             element={<ProtectedRoute isLoggedIn={isLoggedIn} Component={Pricing} />}
//           />
//            <Route
//           path="/profile"
//           element={
//             isLoggedIn ? (
//               <Profile setIsLoggedIn={setIsLoggedIn} />
//             ) : (
//               <Navigate to="/login" replace />
//             )
//           }
//         />
//         <Route
//           path="/login"
//           element={<Login setIsLoggedIn={setIsLoggedIn} />}
//         />
//         <Route path="/signup" element={<Signup />} />
//         <Route
//           path="/"
//           element={<Navigate to={isLoggedIn ? "/profile" : "/login"} />}
//         />
//         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//         </Routes>
        
//       </main>
//       <Footer />
//     </Router>
//   );
// };

// export default App;





// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import Home from "./Pages/Home";
// import News from "./Pages/News";
// import About from "./Pages/About";
// import Airdrop from "./Pages/Airdrop";
// import Pricing from "./Pages/Pricing";
// import Signup from "./Pages/Signup";
// import Login from "./Pages/Login";
// import ProtectedRoute from "./Components/ProtectedRoute";
// import Profile from "./Pages/Profile";
// import PrivacyPolicy from "./Pages/PrivacyPolicy";
// import CoinDetail from "./Pages/CoinDetail"; 
// import styled from "styled-components";
// import TermsOfService from "./Pages/TermsOfService";
// import Contact from "./Pages/Contact";

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const loggedInStatus = localStorage.getItem("isLoggedIn");
//     if (loggedInStatus === "true") {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   return (
//     <Router>
//       <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/news" element={<News />} />
//           <Route path="/about" element={<About />} />
//           <Route
//             path="/airdrop"
//             element={<ProtectedRoute isLoggedIn={isLoggedIn} Component={Airdrop} />}
//           />
//           <Route
//             path="/pricing"
//             element={<ProtectedRoute isLoggedIn={isLoggedIn} Component={Pricing} />}
//           />
//           <Route
//             path="/profile"
//             element={
//               isLoggedIn ? (
//                 <Profile setIsLoggedIn={setIsLoggedIn} />
//               ) : (
//                 <Navigate to="/login" replace />
//               )
//             }
//           />
//           <Route
//             path="/login"
//             element={<Login setIsLoggedIn={setIsLoggedIn} />}
//           />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//           <Route path="/terms-of-service" element={<TermsOfService />} />
//           <Route path="/contact" element={<Contact />} />
          
//           {/* Add the CoinDetail route */}
//           <Route path="/coin/:coinId" element={<CoinDetail />} /> {/* This route will capture the coinId from the URL */}
          
//           {/* Default Route */}
//           <Route
//             path="/"
//             element={<Navigate to={isLoggedIn ? "/profile" : "/login"} />}
//           />
//         </Routes>
//       </main>
//       <Footer />
//     </Router>
//   );
// };

// export default App;


import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import News from "./Pages/News";
import About from "./Pages/About";
import Airdrop from "./Pages/Airdrop";
import Wishlist from "./Pages/Wishlist"; // Import the Wishlist component
import Pricing from "./Pages/Pricing";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import Profile from "./Pages/Profile";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import CoinDetails from "./Pages/CoinDetail"; // Updated Component Import
import styled from "styled-components";
import TermsOfService from "./Pages/TermsOfService";
import Contact from "./Pages/Contact";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Wishlist state
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/airdrop"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                Component={() => (
                  <Airdrop wishlist={wishlist} setWishlist={setWishlist} />
                )}
              />
            }
          />
          <Route
            path="/wishlist"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                Component={() => (
                  <Wishlist wishlist={wishlist} setWishlist={setWishlist} />
                )}
              />
            }
          />
          <Route
            path="/pricing"
            element={<ProtectedRoute isLoggedIn={isLoggedIn} Component={Pricing} />}
          />
          <Route
            path="/profile"
            element={
              isLoggedIn ? (
                <Profile setIsLoggedIn={setIsLoggedIn} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/coin/:coinId" element={<CoinDetails />} /> {/* Added Route */}
          {/* Default Route */}
          <Route
            path="*"
            element={<Navigate to={isLoggedIn ? "/profile" : "/login"} />}
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

