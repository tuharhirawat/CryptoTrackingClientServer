// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import styled from "styled-components";

// const Pricing = () => {
//   const [coins, setCoins] = useState([]);
//   const [filteredCoins, setFilteredCoins] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currency, setCurrency] = useState("usd");
//   const [conversionRate, setConversionRate] = useState(1);

//   const fetchCoinsData = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.get(
//         "https://api.coingecko.com/api/v3/coins/markets",
//         {
//           params: {
//             vs_currency: currency,
//             order: "market_cap_desc",
//             per_page: 120,
//             page: 1,
//           },
//         }
//       );
//       setCoins(response.data);
//       setFilteredCoins(response.data);
//     } catch (err) {
//       setError("Failed to fetch coin data. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCoinsData();
//   }, [currency]);

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//     filterCoins(e.target.value);
//   };

//   // Filter coins based on search
//   const filterCoins = (query) => {
//     if (!query) {
//       setFilteredCoins(coins);
//     } else {
//       setFilteredCoins(
//         coins.filter((coin) =>
//           coin.name.toLowerCase().includes(query.toLowerCase())
//         )
//       );
//     }
//   };

//   const scrollLeft = () => {
//     const container = document.getElementById("coins-container");
//     container.scrollBy({ left: -300, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     const container = document.getElementById("coins-container");
//     container.scrollBy({ left: 300, behavior: "smooth" });
//   };

//   const handleCurrencyChange = (e) => {
//     setCurrency(e.target.value);
//   };

//   if (loading) return <LoadingContainer>Loading...</LoadingContainer>;
//   if (error) return <ErrorContainer>{error}</ErrorContainer>;

//   return (
//     <PricingContainer>
//       <Title>Top Cryptocurrencies</Title>

//       <SearchContainer>
//         <SearchInput
//           type="text"
//           value={searchQuery}
//           onChange={handleSearch}
//           placeholder="Search for a coin..."
//         />
//         <CurrencySelect value={currency} onChange={handleCurrencyChange}>
//           <option value="usd">USD</option>
//           <option value="inr">INR</option>
//           <option value="eur">EUR</option>
//           <option value="gbp">GBP</option>
//           <option value="aud">AUD</option>
//         </CurrencySelect>
//       </SearchContainer>

//       <ScrollArea>
//         <ScrollButtonLeft onClick={scrollLeft}>←</ScrollButtonLeft>
//         <CoinsContainer id="coins-container">
//           {filteredCoins.map((coin) => (
//             <CoinItem key={coin.id}>
//               <CoinLogo src={coin.image} alt={coin.name} />
//               <CoinDescription>
//                 <b>Rank:</b> #{coin.market_cap_rank} <br />
//                 {coin.name} ({coin.symbol.toUpperCase()})
//               </CoinDescription>
//               <CoinPrice>
//                 {currency.toUpperCase()} {coin.current_price.toFixed(2)}
//               </CoinPrice>
//               <Link to={`/coin/${coin.id}`}>
//                 <ExploreMoreButton>Explore More</ExploreMoreButton>
//               </Link>
//             </CoinItem>
//           ))}
//         </CoinsContainer>
//         <ScrollButtonRight onClick={scrollRight}>→</ScrollButtonRight>
//       </ScrollArea>

//       {/* No Results */}
//       {filteredCoins.length === 0 && (
//         <NoResults>No coins found for "{searchQuery}"</NoResults>
//       )}
//     </PricingContainer>
//   );
// };

// export default Pricing;

// // Styled Components
// const PricingContainer = styled.div`
//   margin-top:20px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
// `;

// const Title = styled.h1`
//   font-size: 28px;
//   margin-top:150px;
//   margin-bottom: 20px;
//   color: #fff;
// `;

// const SearchContainer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   margin-bottom: 20px;
//   width: 80%;
//   max-width: 600px;
// `;

// const SearchInput = styled.input`
//   width: 70%;
//   padding: 10px;
//   font-size: 16px;
//   border-radius: 5px;
//   border: 1px solid #ccc;
//   outline: none;

//   &:focus {
//     border-color: #888;
//   }
// `;

// const CurrencySelect = styled.select`
//   width: 25%;
//   padding: 10px;
//   font-size: 16px;
//   border-radius: 5px;
//   border: 1px solid #ccc;
//   outline: none;

//   &:focus {
//     border-color: #888;
//   }
// `;

// const ScrollArea = styled.div`
//   display: flex;
//   align-items: center;
//   position: relative;
//   width: 100%;
//   max-width: 90%;
// `;

// const ScrollButtonLeft = styled.button`
//   position: absolute;
//   left: -40px;
//   background-color: rgba(0, 0, 0, 0.5);
//   color: white;
//   border: none;
//   padding: 10px;
//   cursor: pointer;
//   border-radius: 50%;
//   z-index: 1;

//   &:hover {
//     background-color: rgba(0, 0, 0, 0.7);
//   }
// `;

// const ScrollButtonRight = styled.button`
//   position: absolute;
//   right: -40px;
//   background-color: rgba(0, 0, 0, 0.5);
//   color: white;
//   border: none;
//   padding: 10px;
//   cursor: pointer;
//   border-radius: 50%;
//   z-index: 1;

//   &:hover {
//     background-color: rgba(0, 0, 0, 0.7);
//   }
// `;

// const CoinsContainer = styled.div`
//   border-radius:30px;
//   display: flex;
//   gap: 15px;
//   overflow-x: auto;
//   padding: 10px;
//   scroll-behavior: smooth;
//   max-width: 100%;
// `;

// const CoinItem = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: rgba(255, 255, 255, 0.9);
//   padding: 15px;
//   border-radius: 8px;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//   width: 180px;
//   // min-height: 300px; /* Adjusted to fit description */
//   text-align: center;
//   flex-shrink: 0;
// `;

// const CoinLogo = styled.img`
//   width: 50px;
//   height: 50px;
//   margin-bottom: 10px;
// `;

const CoinDescription = styled.p`
  font-size: 14px;
  color: white;
  margin-bottom: 10px;
`;

const CoinPrice = styled.p`
  font-size: 16px;
  color: white;
`;

// const ExploreMoreButton = styled.button`
//   background-color: gold;
//   color: black;
//   padding: 10px;
//   border: none;
//   border-radius: 5px;
//   margin-top: 10px;
//   cursor: pointer;
//   font-size: 16px;

//   &:hover {
//     background-color: darkgoldenrod;
//   }
// `;

// const NoResults = styled.p`
//   font-size: 18px;
//   color: #fff;
// `;

// const LoadingContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   font-size: 20px;
//   color: #fff;
// `;

// const ErrorContainer = styled.div`
//   color: red;
//   text-align: center;
//   font-size: 18px;
//   padding: 20px;
// `;











import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Pricing = () => {
  const [coins, setCoins] = useState([]); // All fetched coins
  const [filteredCoins, setFilteredCoins] = useState([]); // Coins after search filtering
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // Search input state
  const [currency, setCurrency] = useState("usd"); // Currency selector state
  const [page, setPage] = useState(1); // Current page
  const [totalPages, setTotalPages] = useState(1); // Total pages based on coins count
  const [coinsPerPage] = useState(500); // Number of coins to display per page

  const fetchCoinsData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: currency,
            order: "market_cap_desc",
            per_page: 2000, 
            page: 1, 
          },
        }
      );
      setCoins(response.data);
      setFilteredCoins(response.data);
      setTotalPages(Math.ceil(response.data.length / coinsPerPage)); 
    } catch (err) {
      setError("Failed to fetch coin data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoinsData();
  }, [currency]); 

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const filtered = coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredCoins(filtered);
    setPage(1); 
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const indexOfLastCoin = page * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const coinsToDisplay = filteredCoins.slice(indexOfFirstCoin, indexOfLastCoin);

  const nextPage = () => setPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setPage((prev) => Math.max(prev - 1, 1));

  const shouldShowPagination = searchQuery.length <= 1;

  if (loading) return <LoadingContainer>Loading...</LoadingContainer>;
  if (error) return <ErrorContainer>{error}</ErrorContainer>;

  return (
    <PricingContainer>
      <Title>Top Cryptocurrencies</Title>
      <SearchContainer>
        <SearchInput
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search for a coin..."
        />
        <CurrencySelect value={currency} onChange={handleCurrencyChange}>
          <option value="usd">USD</option>
          <option value="inr">INR</option>
          <option value="eur">EUR</option>
          <option value="gbp">GBP</option>
        </CurrencySelect>
      </SearchContainer>

      <CoinsContainer>
        {coinsToDisplay.map((coin) => (
          <CoinItem key={coin.id}>
            <CoinLogo src={coin.image} alt={coin.name} />
            <CoinDescription>
              <b>Rank:</b> #{coin.market_cap_rank} <br />
              {coin.name} ({coin.symbol.toUpperCase()})
            </CoinDescription>
            <CoinPrice>
              {currency.toUpperCase()} {coin.current_price.toFixed(2)}
            </CoinPrice>
            <Link to={`/coin/${coin.id}`}>
              <ExploreMoreButton>Explore More</ExploreMoreButton>
            </Link>
          </CoinItem>
        ))}
      </CoinsContainer>

      {shouldShowPagination && (
        <PaginationContainer>
          <PaginationButton onClick={prevPage} disabled={page === 1}>Previous</PaginationButton>
          <PageIndicator>Page {page} of {totalPages}</PageIndicator>
          <PaginationButton onClick={nextPage} disabled={page === totalPages}>Next</PaginationButton>
        </PaginationContainer>
      )}

      {filteredCoins.length === 0 && (
        <NoResults>No coins found for "{searchQuery}"</NoResults>
      )}
    </PricingContainer>
  );
};

export default Pricing;

// Styled components

const PricingContainer = styled.div`
  color: white;
  padding: 20px;
  min-height: 100vh;
`;

const Title = styled.h1`
  text-align: center;
  color: gold;
  margin-top: 100px;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  gap: 10px;
  width: 100%;
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
  outline: none;
`;

const CurrencySelect = styled.select`
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;

const CoinsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
`;

const CoinItem = styled.div`
  padding: 20px;
  background: #1e1e1e;
  border-radius: 10px;
  text-align: center;
  &:hover {
    border: 4px solid;
    border-image-slice: 1;
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.8);
    transform: scale(1.05);
  }
`;

const CoinLogo = styled.img`
  width: 50px;
`;

const ExploreMoreButton = styled.button`
  background-color: gold;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 40px;
`;

const PaginationButton = styled.button`
  padding: 10px;
  border: none;
  background: gold;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const PageIndicator = styled.span`
  color: white;
`;

const LoadingContainer = styled.div`
  text-align: center;
  font-size: 20px;
  color: white;
  margin-top: 250px;
`;

const ErrorContainer = styled.div`
  color: red;
  text-align: center;
  margin-top: 250px;
`;

const NoResults = styled.div`
  text-align: center;
  color: red;
  font-size: 18px;
`;
















// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import styled from "styled-components";

// const Pricing = () => {
//   const [coins, setCoins] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currency, setCurrency] = useState("usd");
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   const fetchCoinsData = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.get(
//         "https://api.coingecko.com/api/v3/coins/markets",
//         {
//           params: {
//             vs_currency: currency,
//             order: "market_cap_desc",
//             per_page: 50,
//             page: page,
//           },
//         }
//       );
//       setCoins(response.data);
//       setTotalPages(10); 
//     } catch (err) {
//       setError("Failed to fetch coin data. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCoinsData();
//   }, [currency, page]);

//   const handleCurrencyChange = (e) => setCurrency(e.target.value);

//   const handleSearch = (e) => setSearchQuery(e.target.value);

//   const filteredCoins = coins.filter((coin) =>
//     coin.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const nextPage = () => setPage((prev) => Math.min(prev + 1, totalPages));

//   const prevPage = () => setPage((prev) => Math.max(prev - 1, 1));

//   if (loading) return <LoadingContainer>Loading...</LoadingContainer>;
//   if (error) return <ErrorContainer>{error}</ErrorContainer>;

  // const shouldShowPagination = searchQuery.length <= 2;

//   return (
//     <PricingContainer>
//       <Title>Top Cryptocurrencies</Title>
//       <SearchContainer>
//         <SearchInput
//           type="text"
//           value={searchQuery}
//           onChange={handleSearch}
//           placeholder="Search for a coin..."
//         />
//         <CurrencySelect value={currency} onChange={handleCurrencyChange}>
//           <option value="usd">USD</option>
//           <option value="inr">INR</option>
//           <option value="eur">EUR</option>
//           <option value="gbp">GBP</option>
//         </CurrencySelect>
//       </SearchContainer>

//       <CoinsContainer>
//         {filteredCoins.map((coin) => (
//           <CoinItem key={coin.id}>
//             <CoinLogo src={coin.image} alt={coin.name} />
//             <CoinDescription>
//               <b>Rank:</b> #{coin.market_cap_rank} <br />
//               {coin.name} ({coin.symbol.toUpperCase()})
//             </CoinDescription>
//             <CoinPrice>
//               {currency.toUpperCase()} {coin.current_price.toFixed(2)}
//             </CoinPrice>
//             <Link to={`/coin/${coin.id}`}>
//               <ExploreMoreButton>Explore More</ExploreMoreButton>
//             </Link>
//           </CoinItem>
//         ))}
//       </CoinsContainer>

      // {shouldShowPagination && (
      //   <PaginationContainer>
      //     <PaginationButton onClick={prevPage} disabled={page === 1}>Previous</PaginationButton>
      //     <PageIndicator>Page {page} of {totalPages}</PageIndicator>
      //     <PaginationButton onClick={nextPage} disabled={page === totalPages}>Next</PaginationButton>
      //   </PaginationContainer>
      // )}

//       {filteredCoins.length === 0 && (
//         <NoResults>No coins found for "{searchQuery}"</NoResults>
//       )}
//     </PricingContainer>
//   );
// };

// export default Pricing;

// const PricingContainer = styled.div`
//   color: white;
//   padding: 20px;
//   min-height: 100vh;
// `;

// const Title = styled.h1`
//   text-align: center;
//   color: gold;
//   margin-top: 100px;
// `;

// const SearchContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-bottom: 40px;
//   gap: 10px;
//   width: 100%;
// `;

// const SearchInput = styled.input`
//   padding: 10px;
//   border: 1px solid gray;
//   border-radius: 5px;
//   outline: none;
// `;

// const CurrencySelect = styled.select`
//   padding: 10px;
//   border: 1px solid gray;
//   border-radius: 5px;
// `;

// const CoinsContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
//   gap: 20px;
// `;

// const CoinItem = styled.div`
//   padding: 20px;
//   background: #1e1e1e;
//   border-radius: 10px;
//   text-align: center;
//   &:hover {
//     border: 4px solid;
//     border-image-slice: 1;
//     box-shadow: 0 0 15px rgba(255, 215, 0, 0.8);
//     transform: scale(1.05);  
//   }
// `;

// const CoinLogo = styled.img`
//   width: 50px;
// `;

// const ExploreMoreButton = styled.button`
//   background-color: gold;
//   border: none;
//   padding: 10px;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// const PaginationContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 10px;
//   margin-top: 40px;
// `;

// const PaginationButton = styled.button`
//   padding: 10px;
//   border: none;
//   background: gold;
//   cursor: pointer;
//   &:disabled {
//     opacity: 0.5;
//     cursor: not-allowed;
//   }
// `;

// const PageIndicator = styled.span`
//   color: white;
// `;

// const LoadingContainer = styled.div`
//   text-align: center;
//   font-size: 20px;
//   color: white;
//   margin-top: 250px;
// `;

// const ErrorContainer = styled.div`
//   color: red;
//   text-align: center;
//   margin-top: 250px;
// `;

// const NoResults = styled.div`
//   text-align: center;
//   color: red;
//   font-size: 18px;
// `;