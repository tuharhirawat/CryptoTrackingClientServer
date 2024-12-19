// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import styled, { createGlobalStyle } from "styled-components"; 
// import axios from "axios";


// const Home = () => {
//   const [coins, setCoins] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCoins = async () => {
//       try {
//         const response = await axios.get(
//           "https://api.coingecko.com/api/v3/coins/markets",
//           {
//             params: {
//               vs_currency: "usd",
//               order: "market_cap_desc",
//               per_page: 30,
//               page: 1,
//             },
//           }
//         );
//         setCoins(response.data);
//       } catch (error) {
//         console.error("Error fetching coins:", error);
//       }
//     };

//     fetchCoins();
//   }, []);

//   const handleCoinClick = (coinId) => {
//     navigate(`/coin/${coinId}`);
//   };

//   return (
//     <HomeContainer>
//       <HeaderContent>
//         <Title>Welcome to Crypto Tracker</Title>
//       </HeaderContent>

//       {/* Coins Section */}
//       <CoinsContainer>
//         <CoinsWrapper>
//           {coins.map((coin) => (
//             <CoinImageWrapper
//               key={coin.id}
//               onClick={() => handleCoinClick(coin.id)}
//             >
//               <CoinImage src={coin.image || "https://via.placeholder.com/80"} />
//               <CoinInfo>
//                 <CoinName>{coin.name}</CoinName>
//                 <CoinPrice>${coin.current_price.toFixed(2)}</CoinPrice>
//               </CoinInfo>
//             </CoinImageWrapper>
//           ))}
//         </CoinsWrapper>
//       </CoinsContainer>

     
//       <FeaturesSection>
//         <FeatureCard>
//           <Icon>
//             <i className="fas fa-chart-line"></i>
//           </Icon>
//           <CardTitle>Explore Cryptocurrency Markets</CardTitle>
//           <CardText>Stay ahead of market trends with real-time data, and make informed decisions by analyzing the global cryptocurrency landscape.</CardText>
//         </FeatureCard>

//         <FeatureCard>
//           <Icon>
//             <i className="fas fa-wallet"></i>
//           </Icon>
//           <CardTitle>Manage Your Crypto Portfolio</CardTitle>
//           <CardText>Track and optimize your cryptocurrency investments with ease. From Bitcoin to Altcoins, manage all your assets in one place.</CardText>
//         </FeatureCard>

//         <FeatureCard>
//           <Icon>
//             <i className="fas fa-graduation-cap"></i>
//           </Icon>
//           <CardTitle>Learn Crypto Basics</CardTitle>
//           <CardText>Get started with the fundamentals of blockchain technology, cryptocurrency investments, and how to stay safe in the digital economy.</CardText>
//         </FeatureCard>
//       </FeaturesSection>

//       <Footer />
//       <GlobalStyle /> 
//     </HomeContainer>
//   );
// };

// export default Home;

// // Styled Components
// const HomeContainer = styled.div`
//   height: 100%;
//   width: 100%;
//   margin: 0;
//   padding: 0;
//   background-image: url('https://github.com/piyush-eon/react-crypto-tracker/blob/master/public/banner2.jpg?raw=true');
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   overflow: hidden;
//   min-height: 100vh; /* Ensure it takes at least the full height of the viewport */
// `;

// const HeaderContent = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   color: white;
//   text-align: center;
//   padding-top: 80px; /* This adds space between the top and the title */
//   z-index: 10;
// `;

// const Title = styled.h1`
//   margin-top: 100px;
//   margin-bottom: 163px;
//   font-size: 3rem;
//   color: #ffcc00;
// `;

// const CoinsContainer = styled.div`
//   width: 100%;
//   margin-top: 50px; /* Adjust space between title and coins */
//   padding-bottom: 50px;
  
// `;

// const CoinsWrapper = styled.div`
//   display: flex;
//   flex-wrap: nowrap;
//   animation: scroll 30s linear infinite;
//   justify-content: flex-start;

  
// `;

// const CoinImageWrapper = styled.div`
//   flex-shrink: 0;
//   margin: 0 15px;
//   width: 120px;
//   height: 120px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   transition: transform 0.3s ease;
  
// `;

// const CoinImage = styled.img`
//   width: 80px;
//   height: 80px;
//   object-fit: contain;
//   border-radius: 10px;

//   &:hover {
//     transform: scale(1.1);
//     box-shadow: 0 0 20px 4px rgba(255, 255, 255, 0.8);
//   }
// `;

// const CoinInfo = styled.div`
//   margin-top: 10px;
//   text-align: center;
//   color: white;
// `;

// const CoinName = styled.p`
//   font-size: 0.9rem;
//   font-weight: bold;
// `;

// const CoinPrice = styled.p`
//   font-size: 0.8rem;
//   color: #ffcc00;
// `;

// const GlobalStyle = createGlobalStyle`
//   @keyframes scroll {
//     0% {
//       transform: translateX(0);
//     }
//     100% {
//       transform: translateX(-100%);
//     }
//   }
// `;

// const FeaturesSection = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 50px; /* Add margin to ensure proper space between coins and cards */
//   flex-wrap: wrap;
//   gap: 100px;
//   padding: 20px;
//   width: 100%;
//   margin-bottom: 100px; /* Add space before footer */
// `;

// const FeatureCard = styled.div`

//   background-color: gold;
//   opacity:0.8;
//   color: black;
//   border-radius: 10px;
//   width: 250px;
//   padding: 20px;
//   text-align: center;
//   transition: transform 0.3s ease;
  
//   &:hover {
//     transform: scale(1.05);
//     box-shadow: 0 0 20px 4px rgba(255, 255, 255, 0.8);
//   }
// `;

// const Icon = styled.div`
//   font-size: 3rem;
//   color: #ffcc00;
//   margin-bottom: 15px;
// `;

// const CardTitle = styled.h3`
//   font-size: 1.5rem;
//   margin-bottom: 10px;
// `;

// const CardText = styled.p`
//   font-size: 1rem;
//   line-height: 1.5;
// `;

// const Footer = styled.footer`
//   width: 100%;
//   padding: 0px 0;
//   text-align: center;
//   background-color: #333;
//   color: white;
//   position: relative;
//   bottom: 0;
//   z-index: 5;
// `;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
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
    navigate(`/${coinId}`);
  };

  return (
    <HomeContainer>
      <HeaderContent>
        <Title>
        <h1>Welcome to Crypto Tracker</h1>
        <p>Simplified Crypto , Amplified profits</p>
        </Title>
      </HeaderContent>

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

      <FeaturesSection>
        <FeatureCard>
          <Icon>
            <i className="fas fa-chart-line"></i>
          </Icon>
          <CardTitle>Explore Cryptocurrency Markets</CardTitle>
          <CardText>
            Stay ahead of market trends with real-time data, and make informed
            decisions by analyzing the global cryptocurrency landscape.
          </CardText>
        </FeatureCard>

        <FeatureCard>
          <Icon>
            <i className="fas fa-wallet"></i>
          </Icon>
          <CardTitle>Manage Your Crypto Portfolio</CardTitle>
          <CardText>
            Track and optimize your cryptocurrency investments with ease. From
            Bitcoin to Altcoins, manage all your assets in one place.
          </CardText>
        </FeatureCard>

        <FeatureCard>
          <Icon>
            <i className="fas fa-graduation-cap"></i>
          </Icon>
          <CardTitle>Learn Crypto Basics</CardTitle>
          <CardText>
            Get started with the fundamentals of blockchain technology,
            cryptocurrency investments, and how to stay safe in the digital
            economy.
          </CardText>
        </FeatureCard>
      </FeaturesSection>

      <Footer />
      <GlobalStyle />
    </HomeContainer>
  );
};

export default Home;

// Styled Components
const HomeContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-image: url('https://github.com/piyush-eon/react-crypto-tracker/blob/master/public/banner2.jpg?raw=true');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  min-height: 100vh;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  text-align: center;
  padding-top: 40px;
  z-index: 10;
`;

const Title = styled.h1`
  margin-top: 100px;
  margin-bottom: 163px;
  font-size: 3rem;
  color: #ffcc00;
`;

const CoinsContainer = styled.div`
  width: 100%;
  margin-top: 50px;
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
`;

const CoinImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 10px;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px 4px rgba(255, 255, 255, 0.8);
  }
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

const FeaturesSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  flex-wrap: wrap;
  gap: 100px;
  padding: 20px;
  width: 100%;
  margin-bottom: 100px;
`;

const FeatureCard = styled.div`
  background-color: gold;
  opacity: 0.8;
  color: black;
  border-radius: 10px;
  width: 250px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px 4px rgba(255, 255, 255, 0.8);
  }
`;

const Icon = styled.div`
  font-size: 3rem;
  color: #ffcc00;
  margin-bottom: 15px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const CardText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const Footer = styled.footer`
  width: 100%;
  padding: 0px 0;
  text-align: center;
  background-color: #333;
  color: white;
  position: relative;
  bottom: 0;
  z-index: 5;
`;