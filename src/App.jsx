import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import styled from "styled-components";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsOfService from "./Pages/TermsOfService";
import Contact from "./Pages/Contact";
import Pricing from "./components/Pricing"
import CoinDetails from "./components/CoinDetails";
import News from "./components/News";
import WishList from "./components/Wishlist"
import Airdrop from "./components/Airdrop"
import MyAirdrops from "./components/MyAirdrops"

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedLoggedIn = localStorage.getItem("isLoggedIn");
    return storedLoggedIn === "true"; // Ensure it's a boolean
  });

  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("currentUser");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error parsing currentUser from localStorage:", error);
      return null;
    }
  });

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
  };

  // Sync the state across tabs when `isLoggedIn` or `currentUser` changes
  useEffect(() => {
    const syncLoginState = (event) => {
      if (event.key === "isLoggedIn" || event.key === "currentUser") {
        // When logout happens, the state is updated in all tabs immediately
        setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
        const storedUser = localStorage.getItem("currentUser");
        setCurrentUser(storedUser ? JSON.parse(storedUser) : null);
      }
    };

    // Add event listener for `storage` events
    window.addEventListener("storage", syncLoginState);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("storage", syncLoginState);
    };
  }, []);

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} handleLogout={handleLogout} />
      <Main>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/login"
            element={<Login  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} />}
          />
          <Route
            path="/dashboard"
            element={
              isLoggedIn ? (
                <Dashboard currentUser={currentUser} handleLogout={handleLogout} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/watchlist"
            element={
              isLoggedIn ? (
                <WishList currentUser={currentUser} handleLogout={handleLogout} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/airdrop"
            element={
              isLoggedIn ? (
                <Airdrop currentUser={currentUser}/>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/myairdrops"
            element={
              isLoggedIn ? (
                <MyAirdrops currentUser={currentUser} handleLogout={handleLogout} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/pricing"
            element={
              isLoggedIn ? (
                <Pricing currentUser={currentUser} handleLogout={handleLogout} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/coin/:coinId"
            element={
              isLoggedIn ? (
                <CoinDetails currentUser={currentUser} handleLogout={handleLogout} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/news" element={<News />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to={isLoggedIn ? "/dashboard" : "/signup"} />} />
        </Routes>
      </Main>
      <Footer />
    </Router>
  );
};

const Main = styled.main`
  min-height: calc(100vh - 200px);
`;

export default App;
