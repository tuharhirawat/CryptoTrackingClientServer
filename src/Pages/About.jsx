// import React from 'react';
// import styled from 'styled-components';

// const About = () => {
//   return (
//     <AboutContainer>
//       <Title>About Crypto Tracker</Title>
//       <Paragraph>
//         Crypto Tracker is a platform designed to help users keep track of the latest cryptocurrency trends and data. 
//         Whether you are an experienced trader or a beginner, our platform provides tools to track real-time prices, 
//         market trends, and the latest developments in the cryptocurrency world.
//       </Paragraph>
//       <Paragraph>
//         We offer both free and premium features to assist individuals in understanding and investing in cryptocurrency. 
//         From detailed charts to portfolio tracking, and even learning resources, Crypto Tracker aims to be your one-stop solution.
//       </Paragraph>
//       <Paragraph>
//         Our mission is to provide valuable and accurate data to users while ensuring ease of use and a seamless experience. 
//         With features like advanced market analysis, alerts for price changes, and earning opportunities like airdrops, 
//         Crypto Tracker makes it easier than ever to stay ahead in the crypto world.
//       </Paragraph>
//       <Paragraph>
//         Crypto Tracker is constantly evolving to bring you the most up-to-date and relevant information. 
//         We are committed to empowering our users with the knowledge and tools they need to navigate the ever-changing 
//         cryptocurrency landscape.
//       </Paragraph>
//       <Subtitle>Our Key Features</Subtitle>
//       <FeaturesList>
//         <li>Real-time cryptocurrency price tracking and market data.</li>
//         <li>Detailed charts and historical performance insights.</li>
//         <li>Portfolio tracking to manage your investments.</li>
//         <li>Customizable alerts for price changes and market updates.</li>
//         <li>Access to cryptocurrency learning resources.</li>
//         <li>Participation in airdrops and earning opportunities.</li>
//       </FeaturesList>
//       <Paragraph>
//         Join Crypto Tracker today and stay informed, confident, and prepared in your cryptocurrency journey.
//       </Paragraph>
//     </AboutContainer>
//   );
// };

// export default About;

// // Styled Components
// const AboutContainer = styled.div`
//   font-family: Arial, sans-serif;
//   margin: 0 auto;
//   padding: 20px;
//   max-width: 800px;
//   text-align: center;
//   background-color: #f9f9f9;
//   border-radius: 10px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
// `;

// const Title = styled.h2`
//   font-size: 2rem;
//   color: #007bff;
//   margin-bottom: 20px;
// `;

// const Subtitle = styled.h3`
//   font-size: 1.5rem;
//   color: #0056b3;
//   margin-top: 30px;
//   margin-bottom: 15px;
// `;

// const Paragraph = styled.p`
//   font-size: 1rem;
//   line-height: 1.6;
//   color: #333;
//   margin-bottom: 20px;
// `;

// const FeaturesList = styled.ul`
//   list-style-type: disc;
//   padding-left: 20px;
//   text-align: left;
//   font-size: 1rem;
//   line-height: 1.8;
//   color: #555;

//   li {
//     margin-bottom: 10px;
//   }
// `;


import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <PageWrapper>
      <AboutContainer>
        <Title>About Crypto Tracker</Title>
        <Paragraph>
          Crypto Tracker is a platform designed to help users keep track of the latest cryptocurrency trends and data. 
          Whether you are an experienced trader or a beginner, our platform provides tools to track real-time prices, 
          market trends, and the latest developments in the cryptocurrency world.
        </Paragraph>
        <Paragraph>
          We offer both free and premium features to assist individuals in understanding and investing in cryptocurrency. 
          From detailed charts to portfolio tracking, and even learning resources, Crypto Tracker aims to be your one-stop solution.
        </Paragraph>
        <Paragraph>
          Our mission is to provide valuable and accurate data to users while ensuring ease of use and a seamless experience. 
          With features like advanced market analysis, alerts for price changes, and earning opportunities like airdrops, 
          Crypto Tracker makes it easier than ever to stay ahead in the crypto world.
        </Paragraph>
        <Paragraph>
          Crypto Tracker is constantly evolving to bring you the most up-to-date and relevant information. 
          We are committed to empowering our users with the knowledge and tools they need to navigate the ever-changing 
          cryptocurrency landscape.
        </Paragraph>
        <Subtitle>Our Key Features</Subtitle>
        <FeaturesList>
          <li>Real-time cryptocurrency price tracking and market data.</li>
          <li>Detailed charts and historical performance insights.</li>
          <li>Portfolio tracking to manage your investments.</li>
          <li>Customizable alerts for price changes and market updates.</li>
          <li>Access to cryptocurrency learning resources.</li>
          <li>Participation in airdrops and earning opportunities.</li>
        </FeaturesList>
        <Paragraph>
          Join Crypto Tracker today and stay informed, confident, and prepared in your cryptocurrency journey.
        </Paragraph>
      </AboutContainer>
    </PageWrapper>
  );
};

export default About;

const PageWrapper = styled.div`
  background-image: url('https://github.com/piyush-eon/react-crypto-tracker/blob/master/public/banner2.jpg?raw=true');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  max-width: 800px;
  text-align: center;
  background-color: rgba(42, 42, 46, 0.5); 
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 2rem;
  color:rgb(255, 255, 255);
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  color:rgb(255, 252, 252);
  margin-top: 30px;
  margin-bottom: 15px;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: white;
  margin-bottom: 20px;
`;

const FeaturesList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  text-align: left;
  font-size: 1rem;
  line-height: 1.8;
  color: white;

  li {
    margin-bottom: 10px;
  }
`;