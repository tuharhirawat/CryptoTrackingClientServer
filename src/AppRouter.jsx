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
// import TermsOfService from "./Pages/TermsOfService";
// import Contact from "./Pages/Contact";
// import WatchlistPage from "./Pages/WishList";
// // import styled from "styled-components";

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [watchlist, setWatchlist] = useState([]);

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
//             element={<ProtectedRoute isLoggedIn={isLoggedIn} Component={Airdrop} watchlist={watchlist} setWatchlist={setWatchlist} />}
//           />
//           <Route
//             path="/pricing"
//             element={<ProtectedRoute isLoggedIn={isLoggedIn} Component={Pricing} />}
//           />
//           <Route
//             path="/watchlist"
//             element={<ProtectedRoute isLoggedIn={isLoggedIn} Component={WatchlistPage} watchlist={watchlist} setWatchlist={setWatchlist} />}
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
//         <Route path="/terms-of-service" element={<TermsOfService />} />
//         <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>
//       <Footer />
//     </Router>
//   );
// };

// export default App;

// ///////////////////////////////////////////////////////////////
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
// import TermsOfService from "./Pages/TermsOfService";
// import Contact from "./Pages/Contact";
// import Watchlist from "./Pages/WishList";

// const AppRouter = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [watchlist, setWatchlist] = useState([]);

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
//         <Route path="/" element={<Home />} />
//           <Route path="/news" element={<News />} />
//           <Route path="/about" element={<About />} />
//           <Route
//             path="/airdrop"
//             element={
//               <ProtectedRoute
//                 isLoggedIn={isLoggedIn}
//                 Component={Airdrop}
//                 watchlist={watchlist}
//                 setWatchlist={setWatchlist}
//               />
//             }
//           />
//           <Route
//             path="/watchlist"
//             element={
//               <ProtectedRoute
//                 isLoggedIn={isLoggedIn}
//                 Component={Watchlist}
//                 watchlist={watchlist}
//                 setWatchlist={setWatchlist}
//               />
//             }
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
//           <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route
//             path="/"
//             element={<Navigate to={isLoggedIn ? "/profile" : "/login"} />}
//           />
//           <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//           <Route path="/terms-of-service" element={<TermsOfService />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>
//       <Footer />
//     </Router>
//   );
// };

// export default AppRouter;


/////////////////////////////////////////////////////////////////////////
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
// import TermsOfService from "./Pages/TermsOfService";
// import Contact from "./Pages/Contact";
// import Watchlist from "./Pages/WishList";  // Make sure this is the correct path

// const AppRouter = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [watchlist, setWatchlist] = useState([]);

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
//             element={
//               <ProtectedRoute
//                 isLoggedIn={isLoggedIn}
//                 Component={Airdrop}
//                 watchlist={watchlist}
//                 setWatchlist={setWatchlist}
//               />
//             }
//           />
//           <Route
//             path="/watchlist"
//             element={
//               <ProtectedRoute
//                 isLoggedIn={isLoggedIn}
//                 Component={Watchlist}
//                 watchlist={watchlist}
//                 setWatchlist={setWatchlist}
//               />
//             }
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
//           <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route
//             path="/"
//             element={<Navigate to={isLoggedIn ? "/profile" : "/login"} />}
//           />
//           <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//           <Route path="/terms-of-service" element={<TermsOfService />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>
//       <Footer />
//     </Router>
//   );
// };

// export default AppRouter;


import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import News from "./Pages/News";
import About from "./Pages/About";
import Airdrop from "./Pages/Airdrop";
import Pricing from "./Pages/Pricing";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import ProtectedRoute from "./Components/ProtectedRoute";
import Profile from "./Pages/Profile";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsOfService from "./Pages/TermsOfService";
import Contact from "./Pages/Contact";
import Watchlist from "./Pages/WishList";  // Make sure this is the correct path
import CoinDetails from "./Pages/CoinDetails";  // Import CoinDetails component

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [watchlist, setWatchlist] = useState([]);

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
                Component={Airdrop}
                watchlist={watchlist}
                setWatchlist={setWatchlist}
              />
            }
          />
          <Route
            path="/watchlist"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                Component={Watchlist}
                watchlist={watchlist}
                setWatchlist={setWatchlist}
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
          <Route
            path="/"
            element={<Navigate to={isLoggedIn ? "/profile" : "/login"} />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/contact" element={<Contact />} />

          {/* Add the CoinDetails route */}
          <Route path="/coin/:coinId" element={<CoinDetails />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default AppRouter;
