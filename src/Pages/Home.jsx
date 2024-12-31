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
//     navigate(`/${coinId}`);
//   };

//   return (
//     <HomeContainer>
//       <HeaderContent>
//         <Title>
//         <h1>Welcome to Crypto Tracker</h1>
//         <p>Simplified Crypto , Amplified profits</p>
//         </Title>
//       </HeaderContent>

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

      // <FeaturesSection>
      //   <FeatureCard>
      //     <Icon>
      //       <i className="fas fa-chart-line"></i>
      //     </Icon>
      //     <CardTitle>Explore Cryptocurrency Markets</CardTitle>
      //     <CardText>
      //       Stay ahead of market trends with real-time data, and make informed
      //       decisions by analyzing the global cryptocurrency landscape.
      //     </CardText>
      //   </FeatureCard>

      //   <FeatureCard>
      //     <Icon>
      //       <i className="fas fa-wallet"></i>
      //     </Icon>
      //     <CardTitle>Manage Your Crypto Portfolio</CardTitle>
      //     <CardText>
      //       Track and optimize your cryptocurrency investments with ease. From
      //       Bitcoin to Altcoins, manage all your assets in one place.
      //     </CardText>
      //   </FeatureCard>

      //   <FeatureCard>
      //     <Icon>
      //       <i className="fas fa-graduation-cap"></i>
      //     </Icon>
      //     <CardTitle>Learn Crypto Basics</CardTitle>
      //     <CardText>
      //       Get started with the fundamentals of blockchain technology,
      //       cryptocurrency investments, and how to stay safe in the digital
      //       economy.
      //     </CardText>
      //   </FeatureCard>
      // </FeaturesSection>

//       <Footer />
//       <GlobalStyle />
//     </HomeContainer>
//   );
// };

// export default Home;

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
//   min-height: 100vh;
// `;

// const HeaderContent = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   color: white;
//   text-align: center;
//   padding-top: 40px;
//   z-index: 10;
// `;

// const Title = styled.h1`
//   margin-top: 80px;
//   margin-bottom: 60px;
//   font-size: 3rem;
//   color: #ffcc00;
// `;

// const CoinsContainer = styled.div`
//   width: 100%;
//   margin-top: 50px;
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
//     box-shadow: 2px 2px 20px 4px rgba(255, 255, 255, 0.8);
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
//   margin-top: 50px;
//   flex-wrap: wrap;
//   gap: 100px;
//   padding: 20px;
//   width: 100%;
//   margin-bottom: 100px;
// `;

// const FeatureCard = styled.div`
//   background-color: gold;
//   opacity: 0.8;
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
  const [coins, setCoins] = useState([]); // Coins to be displayed
  const [loading, setLoading] = useState(true); // Loading state to show a loading message
  const [currency, setCurrency] = useState("usd"); // Default currency (USD)
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const coinsPerPage = 10; // Number of coins to show per page
  const navigate = useNavigate();

  const currencySymbols = {
    usd: "$",
    eur: "€",
    inr: "₹",
  };

  useEffect(() => {
    const fetchCoins = async () => {
      setLoading(true); // Set loading to true when fetching data
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: currency,
              order: "market_cap_desc",
              per_page: 30, // Fetch 30 coins for trending table
              page: 1,
            },
          }
        );
        setCoins(response.data); // Update coins state with fetched data
      } catch (error) {
        console.error("Error fetching coins:", error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchCoins();
  }, [currency]); // Re-fetch when the currency changes

  // Handle coin click
  const handleCoinClick = (coinId) => {
    navigate(`/coin/${coinId}`); // Navigate to the coin details page
  };

  // Handle currency change
  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value); // Set the selected currency
  };

  // Pagination logic
  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = coins.slice(indexOfFirstCoin, indexOfLastCoin);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <HomeContainer>
      <HeaderContent>
        <Title>
        <h1>Welcome to Crypto Tracker</h1>
        <p>Simplified Crypto , Amplified profits</p>
        </Title>
      </HeaderContent>

      {/* Coins Section */}
      <CoinsContainer>
        {loading ? (
          <LoadingMessage>Loading coins...</LoadingMessage> // Show loading message while fetching
        ) : (
          <CoinsWrapper>
            {coins.map((coin) => (
              <CoinImageWrapper
                key={coin.id}
                onClick={() => handleCoinClick(coin.id)}
              >
                <CoinImage src={coin.image || "https://via.placeholder.com/80"} />
                <CoinInfo>
                  <CoinName>{coin.name}</CoinName>
                  <CoinPrice>
                    {currencySymbols[currency]}
                    {coin.current_price.toFixed(2)}
                  </CoinPrice>
                </CoinInfo>
              </CoinImageWrapper>
            ))}
          </CoinsWrapper>
        )}
      </CoinsContainer>

      {/* Currency Selector */}
      <CurrencySelector>
        <label htmlFor="currency">Select Currency : </label>
        <select id="currency" value={currency} onChange={handleCurrencyChange}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
      </CurrencySelector>

      {/* Trending Coins Table */}
      <TrendingCoinsTable>
        <thead>
          <tr>
            <th>Coin</th>
            {/* <th>Price Change (24h)</th>
            <th>Market Cap</th> */}
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {currentCoins.map((coin) => (
            <tr key={coin.id}>
              <td style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                <img src={coin.image} alt={coin.name} width="30" height="30" />
                <span>{coin.name}</span>
              </td>
              <td>
              {currencySymbols[currency]}
              {coin.current_price.toFixed(2)}
              </td>
              {/* <td>
                {currencySymbols[currency]}
                {coin.market_cap.toLocaleString()}
              </td> */}
              <td>
                <button onClick={() => handleCoinClick(coin.id)}>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </TrendingCoinsTable>

      {/* Pagination Controls */}
      <Pagination>
        {[1, 2, 3].map((page) => (
          <PageButton
            key={page}
            onClick={() => handlePageChange(page)}
            active={page === currentPage}
          >
            {page}
          </PageButton>
        ))}
      </Pagination>


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

// Styled Components for Pagination
const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const PageButton = styled.button`
  margin: 0 5px;
  padding: 8px 16px;
  background-color: ${(props) => (props.active ? "#ffcc00" : "#333")};
  color: ${(props) => (props.active ? "black" : "white")};
  border: none;
  cursor: pointer;
  &:hover {
    background-color: gold;
  }
`;

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
  padding-top: 80px;
  z-index: 10;
`;

const Title = styled.h1`
  margin-top: 20px;
  margin-bottom: 63px;
  font-size: 2rem;
  color: #ffcc00;
`;

const CoinsContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  padding-bottom: 50px;
  margin-bottom: 80px;
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
  font-size: 1.2rem;
  color: #ffcc00;
`;

const CurrencySelector = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  color: white;
  font-size: 2rem;
`;

const TrendingCoinsTable = styled.table`
  width: 80%;
  margin: 30px 0;
  border-collapse: collapse;
  color: white;
  th, td {
    padding: 12px 15px;
    text-align: center;
  }

  th {
    color: white;
    // background-color:gold;
      font-size:2rem;
    
    font-weight: bold;
  }

  td {
    text-align: center;
  }

  button {
    padding: 6px 12px;
    background-color: #ffcc00;
    color: black;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    transition-duration: 1s;
    color: black;
    background-color: gold;
  }
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

const LoadingMessage = styled.div`
  font-size: 1.5rem;
  color: white;
  text-align: center;
  margin-top: 20px;
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