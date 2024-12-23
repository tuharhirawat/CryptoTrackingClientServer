
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
import Watchlist from "./Pages/WishList";
import CoinDetails from "./Pages/CoinDetail";
import MyAirdrops from "./Pages/MyAirdrops";

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
            path="/myairdrops"
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                Component={MyAirdrops}
                user={localStorage.getItem("currentUser")}
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
          <Route path="/coin/:coinId" element={<CoinDetails />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={<Navigate to={isLoggedIn ? "/profile" : "/login"} />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default AppRouter;
