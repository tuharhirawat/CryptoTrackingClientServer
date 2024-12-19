// import React from 'react';
// import styled from 'styled-components';

// const TermsServ = styled.div`
//   max-width: 900px;
//     margin: 30px auto;
//     padding: 20px;
//     background-color: #f9f9f9;
//     border-radius: 8px;
//     box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//     font-family: 'Arial', sans-serif;
//     padding: 15px;

//     h1{
//      text-align: center;
//     color: #333;
//     font-size: 2.5rem;
//     margin-bottom: 20px;
//     font-size: 2rem;
//     };

//     h2{
//       color: #000;  
//     font-size: 1.8rem;
//     margin-top: 30px;
//     margin-bottom: 15px;
//     border-bottom: 2px solid #4caf50; 
//     padding-bottom: 5px;
//     font-size: 1.5rem;
//     };

//     p{
//      font-size: 1.1rem;
//     line-height: 1.6;
//     color: #555;
//     margin-bottom: 15px;
//     text-align: justify;
//     font-size: 1rem;
//     }
// `;

// const TermsOfService = () => {
//   return (
//     <TermsServ>
//       <h1>Terms of Service</h1>
//       <p>
//         Welcome to Crypto Tracker! By accessing or using this website, you agree to be bound by
//         the following Terms of Service. Please read these terms carefully.
//       </p>
      
//       <h2>Use of Service</h2>
//       <p>Crypto Tracker is provided as-is, and we make no guarantees regarding its accuracy or reliability.</p>
      
//       <h2>Account Registration</h2>
//       <p>You must register for an account to access certain features of the site.</p>
      
//       <h2>Prohibited Activities</h2>
//       <p>Any fraudulent, unlawful, or harmful activities are prohibited on Crypto Tracker.</p>
      
//       <h2>Limitation of Liability</h2>
//       <p>We are not liable for any damages that may occur while using the site.</p>
      
//       <h2>Modifications</h2>
//       <p>We reserve the right to modify or discontinue the service at any time.</p>
//     </TermsServ>
//   );
// };

// export default TermsOfService;




import React from "react";
import styled from "styled-components";

const TermsContainer = styled.div`
  background-image: url("https://github.com/piyush-eon/react-crypto-tracker/blob/master/public/banner2.jpg?raw=true");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TermsServ = styled.div`
  max-width: 900px;
  margin: 30px auto;
  padding: 20px;
  background-color: rgba(42, 42, 46, 0.5); /* Semi-transparent white */
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;

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