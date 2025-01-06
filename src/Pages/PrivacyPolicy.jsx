import React from "react";
import styled from "styled-components";

const PriPolContainer = styled.div`
  min-height: 100vh;
  display: flex;
  margin-top:20px;
  align-items: center;
  justify-content: center;
  padding: 20px; /* Added padding to prevent content from sticking to the edges */
`;

const PriPol = styled.div`
  max-width: 900px;
  margin: 30px auto;
  padding: 20px;
  background-color: rgba(42, 42, 46, 0.7); /* Increased opacity for better readability */
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  font-family: "Arial", sans-serif;
  color: white;

  h1 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 20px;
    @media (max-width: 768px) {
      font-size: 2rem; /* Slightly smaller font size on mobile */
    }
  }

  h2 {
    font-size: 1.8rem;
    margin-top: 30px;
    margin-bottom: 15px;
    border-bottom: 2px solid #4caf50;
    padding-bottom: 5px;
    @media (max-width: 768px) {
      font-size: 1.6rem; /* Slightly smaller font size on mobile */
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 15px;
    text-align: justify;
    @media (max-width: 768px) {
      font-size: 1rem; /* Adjust font size for readability on mobile */
      margin-bottom: 10px; /* Reduced space between paragraphs */
    }
  }

  /* Added responsiveness for small devices */
  @media (max-width: 768px) {
    max-width: 100%; /* Make container full width */
    padding: 15px;
  }
`;

const PrivacyPolicy = () => {
  return (
    <PriPolContainer>
      <PriPol>
        <h1>Privacy Policy</h1>
        <p>
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your personal data when you use Crypto
          Tracker. By using this website, you agree to the terms outlined in
          this policy.
        </p>
        <h2>Information We Collect</h2>
        <p>We collect personal information such as your name, email address, etc.</p>

        <h2>How We Use Your Information</h2>
        <p>Your information is used to improve our services and personalize your experience.</p>

        <h2>Data Security</h2>
        <p>We take all necessary measures to protect your personal data and ensure its safety.</p>

        <h2>Changes to Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Please check this
          page regularly for updates.
        </p>
      </PriPol>
    </PriPolContainer>
  );
};

export default PrivacyPolicy;
