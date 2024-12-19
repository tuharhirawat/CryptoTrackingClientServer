// import React from 'react';
// import styled from 'styled-components';

// const Home = () => {
//   return (
//     <HomeContainer>
//       <Overlay>
//         <Content>
//           <Title>Welcome to Crypto Tracker</Title>
//           <Paragraph>
//             Stay updated with the latest cryptocurrency trends, prices, and insights. Whether you're a seasoned investor 
//             or just starting your journey, Crypto Tracker is here to provide you with real-time data, tools, and resources 
//             to navigate the world of cryptocurrency with confidence.
//           </Paragraph>
//           <Paragraph>
//             Start exploring the crypto market today and take control of your investments with Crypto Tracker.
//           </Paragraph>
//         </Content>
//       </Overlay>
//     </HomeContainer>
//   );
// };

// export default Home;

// // Styled Components
// const HomeContainer = styled.div`
//   height: 100vh;
//   width: 100%;
//   margin: 0;
//   padding: 0;
//   background-image: url('https://github.com/piyush-eon/react-crypto-tracker/blob/master/public/banner2.jpg?raw=true');
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Overlay = styled.div`
//   background-color: rgba(0, 0, 0, 0.6); /* Dark overlay for better contrast */
//   border-radius: 10px;
//   padding: 20px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
//   max-width: 800px;
//   width: 90%;
//   text-align: center;
// `;

// const Content = styled.div`
//   color: #fff; /* White text for better contrast on dark overlay */
// `;

// const Title = styled.h1`
//   font-size: 2.5rem;
//   color: #ffcc00;
//   margin-bottom: 20px;
// `;

// const Paragraph = styled.p`
//   font-size: 1.2rem;
//   line-height: 1.8;
//   margin-bottom: 20px;
// `;




import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components"; // Import createGlobalStyle here
import axios from "axios";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 30,
              page: 1,
            },
          }
        );
        setCoins(response.data);
      } catch (error) {
        console.error("Error fetching coins:", error);
      }
    };

    fetchCoins();
  }, []);

  const handleCoinClick = (coinId) => {
    navigate(`/coin/${coinId}`);
  };

  return (
    <HomeContainer>
      <HeaderContent>
        <Title>Welcome to Crypto Tracker</Title>
        {/* <Paragraph>
          Stay updated with the latest cryptocurrency trends, prices, and
          insights. Whether you're a seasoned investor or just starting your
          journey, Crypto Tracker is here to provide you with real-time data,
          tools, and resources to navigate the world of cryptocurrency with
          confidence.
        </Paragraph> */}
      </HeaderContent>

      {/* Coins Section */}
      <CoinsContainer>
        <CoinsWrapper>
          {coins.map((coin) => (
            <CoinImageWrapper
              key={coin.id}
              onClick={() => handleCoinClick(coin.id)}
            >
              <CoinImage src={coin.image || "https://via.placeholder.com/80"} />
              <CoinInfo>
                <CoinName>{coin.name}</CoinName>
                <CoinPrice>${coin.current_price.toFixed(2)}</CoinPrice>
              </CoinInfo>
            </CoinImageWrapper>
          ))}
        </CoinsWrapper>
      </CoinsContainer>

      <GlobalStyle /> {/* Include the global styles here */}
    </HomeContainer>
  );
};

export default Home;

// Styled Components
const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  background-image: url('https://github.com/piyush-eon/react-crypto-tracker/blob/master/public/banner2.jpg?raw=true');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  overflow: hidden;
`;

const HeaderContent = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  text-align: center;
  z-index: 10;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #ffcc00;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  line-height: 1.8;
  margin-bottom: 20px;
`;

const CoinsContainer = styled.div`
  width: 100%;
  margin-top: 150px;
  padding-bottom: 50px;
`;

const CoinsWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  animation: scroll 30s linear infinite;
  justify-content: flex-start;
`;

const CoinImageWrapper = styled.div`
  flex-shrink: 0;
  margin: 0 15px;
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const CoinImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 10px;
`;

const CoinInfo = styled.div`
  margin-top: 10px;
  text-align: center;
  color: white;
`;

const CoinName = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
`;

const CoinPrice = styled.p`
  font-size: 0.8rem;
  color: #ffcc00;
`;

// Keyframes for continuous scrolling animation
const GlobalStyle = createGlobalStyle`
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;




