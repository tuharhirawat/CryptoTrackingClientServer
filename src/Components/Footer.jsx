// import React from "react";
// import styled from "styled-components";

// const Footer = () => {
//   return (
//     <FooterContainer>
//       <p>&copy; 2024 Crypto Tracker. All Rights Reserved.</p>
//     </FooterContainer>
//   );
// };

// export default Footer;

// const FooterContainer = styled.footer`
//   background-color: #222;
//   color: #fff;
//   text-align: center;
//   padding: 15px 0;
//   position: relative;
//   bottom: 0;
//   width: 100%;
// `;


import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2024 Crypto Tracker. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #222;
  color: #fff;
  text-align: center;
  padding: 10px 0;
  font-size: 0.9rem;
`;
