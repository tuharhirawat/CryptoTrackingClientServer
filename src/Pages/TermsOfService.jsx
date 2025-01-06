import React from "react";
import styled from "styled-components";

const TermsContainer = styled.div`
  min-height: 100vh;
  margin-top:40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const TermsServ = styled.div`
  max-width: 900px;
  margin: 30px auto;
  padding: 20px;
  background-color: rgba(42, 42, 46, 0.5); /* Semi-transparent white */
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
  width: 100%; /* Ensures it takes up full available width on smaller devices */

  h1 {
    text-align: center;
    color: white;
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  h2 {
    color: white;
    font-size: 1.8rem;
    margin-top: 30px;
    margin-bottom: 15px;
    border-bottom: 2px solid #4caf50;
    padding-bottom: 5px;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: white;
    margin-bottom: 15px;
    text-align: justify;
  }

  /* Media Queries for responsiveness */
  @media (max-width: 768px) {
    padding: 15px;
    max-width: 100%; /* Full width on smaller screens */
    
    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 10px;
    
    h1 {
      font-size: 1.8rem;
    }

    h2 {
      font-size: 1.4rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

const TermsOfService = () => {
  return (
    <TermsContainer>
      <TermsServ>
        <h1>Terms of Service</h1>
        <p>
          Welcome to Crypto Tracker! By accessing or using this website, you agree to be bound by
          the following Terms of Service. Please read these terms carefully.
        </p>

        <h2>Use of Service</h2>
        <p>Crypto Tracker is provided as-is, and we make no guarantees regarding its accuracy or reliability.</p>

        <h2>Account Registration</h2>
        <p>You must register for an account to access certain features of the site.</p>

        <h2>Prohibited Activities</h2>
        <p>Any fraudulent, unlawful, or harmful activities are prohibited on Crypto Tracker.</p>

        <h2>Limitation of Liability</h2>
        <p>We are not liable for any damages that may occur while using the site.</p>

        <h2>Modifications</h2>
        <p>We reserve the right to modify or discontinue the service at any time.</p>
      </TermsServ>
    </TermsContainer>
  );
};

export default TermsOfService;
