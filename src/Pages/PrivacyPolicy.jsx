import React from 'react';
import styled from 'styled-components';

const PriPol = styled.div`
  max-width: 900px;
    margin: 30px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;
    padding: 15px;

    h1{
     text-align: center;
    color: #333;
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-size: 2rem;
    };

    h2{
      color: #000;  
    font-size: 1.8rem;
    margin-top: 30px;
    margin-bottom: 15px;
    border-bottom: 2px solid #4caf50; 
    padding-bottom: 5px;
    font-size: 1.5rem;
    };

    p{
     font-size: 1.1rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 15px;
    text-align: justify;
    font-size: 1rem;
    }
`;

const PrivacyPolicy = () => {
  return (
    <PriPol>
      <h1>Privacy Policy</h1>
      <p>
        Your privacy is important to us. This Privacy Policy explains how we collect,
        use, and protect your personal data when you use Crypto Tracker. By using this website,
        you agree to the terms outlined in this policy.
      </p>
      <h2>Information We Collect</h2>
      <p>We collect personal information such as your name, email address, etc.</p>
      
      <h2>How We Use Your Information</h2>
      <p>Your information is used to improve our services and personalize your experience.</p>
      
      <h2>Data Security</h2>
      <p>We take all necessary measures to protect your personal data and ensure its safety.</p>
      
      <h2>Changes to Privacy Policy</h2>
      <p>We may update this Privacy Policy from time to time. Please check this page regularly for updates.</p>
    </PriPol>
  );
};

export default PrivacyPolicy;