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
// ``
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
//   margin-bottom:80px
  
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
//   font-size: 1.2rem;
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
//               order: "market_cap_desc", // Orders coins by market cap
//               per_page: 50, // Increase this number to fetch more coins
//               page: 1, // You can change this to fetch more pages if necessary
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
//   margin-bottom:80px
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
//   font-size: 1.2rem;
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



/////////////////////////////////////////////////////
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";

const Home = () => {
  const [coins, setCoins] = useState([]);  // Coins to be displayed
  const [loading, setLoading] = useState(true);  // Loading state to show a loading message
  const [page, setPage] = useState(1);  // Current page for pagination
  const navigate = useNavigate();
  const location = useLocation();

  const coinsPerPage = 15;  // 15 coins per page
  const totalCoins = 150;   // Total number of coins to show (can be changed)

  useEffect(() => {
    // Get page number from URL query string if present
    const params = new URLSearchParams(location.search);
    const pageFromUrl = params.get("page");
    if (pageFromUrl) {
      setPage(parseInt(pageFromUrl));
    }
  }, [location]);

  useEffect(() => {
    const fetchCoins = async () => {
      setLoading(true);  // Set loading to true when fetching data
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets", 
          {
            params: {
              vs_currency: "usd", 
              order: "market_cap_desc", 
              per_page: totalCoins,  // Fetch all the coins to be shown
              page: 1,  // Only one page needed to fetch all coins
            }
          }
        );
        setCoins(response.data);  // Update coins state with fetched data
      } catch (error) {
        console.error("Error fetching coins:", error);
      } finally {
        setLoading(false);  // Set loading to false once data is fetched
      }
    };

    fetchCoins();
  }, []);  // Fetch once when the component loads

  // Handle coin click
  const handleCoinClick = (coinId) => {
    navigate(`/coin/${coinId}`);  // Navigate to the coin details page
  };

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= Math.ceil(totalCoins / coinsPerPage)) {
      setPage(newPage);  // Update the page number
      navigate(`/?page=${newPage}`);  // Update the URL to reflect the current page
    }
  };

  // Get coins for the current page
  const paginatedCoins = coins.slice((page - 1) * coinsPerPage, page * coinsPerPage);

  return (
    <HomeContainer>
      <HeaderContent>
        <Title>Welcome to Crypto Tracker</Title>
      </HeaderContent>

      {/* Coins Section */}
      <CoinsContainer>
        {loading ? (
          <LoadingMessage>Loading coins...</LoadingMessage>  // Show loading message while fetching
        ) : (
          <CoinsWrapper>
            {paginatedCoins.map((coin) => (
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
        )}
      </CoinsContainer>

      {/* Pagination Section */}
      <PaginationContainer>
        <PageButton onClick={() => handlePageChange(page - 1)}>Prev</PageButton>
        <PageNumber>{`Page ${page}`}</PageNumber>
        <PageButton onClick={() => handlePageChange(page + 1)}>Next</PageButton>
      </PaginationContainer>

      <Footer />
      <GlobalStyle />
    </HomeContainer>
  );
};

export default Home;


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
  margin-top: 100px;
  margin-bottom: 163px;
  font-size: 3rem;
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

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px 4px rgba(255, 255, 255, 0.8);
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
  font-size: 1.2rem;
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

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
`;

const PageButton = styled.button`
  padding: 10px 20px;
  background-color: #ffcc00;
  border: none;
  color: black;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #e0b000;
  }
`;

const PageNumber = styled.div`
  font-size: 1.2rem;
  color: white;
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

