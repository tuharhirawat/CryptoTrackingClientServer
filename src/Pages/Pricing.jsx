// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Pricing = () => {
//   const [coins, setCoins] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [query, setQuery] = useState(''); 
//   const [suggestions, setSuggestions] = useState([]);

//   const fetchCoinSuggestions = async (searchQuery) => {
//     if (!searchQuery) {
//       setSuggestions([]);
//       return ;
//     }

//     setLoading(true);
//     try {
//       const response = await axios.get('https://api.coingecko.com/api/v3/search', {
//         params: { query: searchQuery },
//       });
//       setSuggestions(response.data.coins.slice(0, 5)); 
//       setLoading(false);
//     } catch (err) {
//       setError('Error fetching suggestions');
//       setLoading(false);
//     }
//   };

//   const fetchCoinDetails = async (coinId) => {
//     if (!coinId) return;

//     setLoading(true);
//     try {
//       const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
//         params: {
//           vs_currency: 'usd',
//           ids: coinId,
//         },
//       });
//       setCoins(response.data);
//       setSuggestions([]); 
//       setLoading(false);
//     } catch (err) {
//       setError('Error fetching data');
//       setLoading(false);
//     }
//   };

//   const handleInputChange = (e) => {
//     const searchQuery = e.target.value;
//     setQuery(searchQuery);
//     fetchCoinSuggestions(searchQuery);
//   };

//   const handleSuggestionClick = (coinId) => {
//     setQuery('');
//     fetchCoinDetails(coinId);
//   };

//   return (
//     <div className="coin-pricing-container">
//       <h2>Cryptocurrency Prices</h2>

//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search for a cryptocurrency..."
//           value={query}
//           onChange={handleInputChange}
//           className="search-box"
//         />
//         {suggestions.length > 0 && (
//           <ul className="suggestions-list">
//             {suggestions.map((coin) => (
//               <li key={coin.id} onClick={() => handleSuggestionClick(coin.id)}>
//                 {coin.name} ({coin.symbol.toUpperCase()})
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       {loading && <p>Loading...</p>}
//       {error && <p>{error}</p>}

//       {!loading && !error && coins.length > 0 && (
//         <table className="coin-pricing-table">
//           <thead>
//             <tr>
//               <th>Coin</th>
//               <th>Price (USD)</th>
//               <th>24h Change</th>
//               <th>Market Cap</th>
//             </tr>
//           </thead>
//           <tbody>
//             {coins.map((coin) => (
//               <tr key={coin.id}>
//                 <td>{coin.name}</td>
//                 <td>${coin.current_price.toFixed(4)}</td>
//                 <td
//                   className={coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}
//                 >
//                   {coin.price_change_percentage_24h.toFixed(2)}%
//                 </td>
//                 <td>${coin.market_cap.toLocaleString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default Pricing;



// import React, { useState } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';

// const Pricing = () => {
//   const [coins, setCoins] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [query, setQuery] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   const [searchError, setSearchError] = useState('');

//   const fetchCoinSuggestions = async (searchQuery) => {
//     if (!searchQuery) {
//       setSuggestions([]);
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await axios.get('https://api.coingecko.com/api/v3/search', {
//         params: { query: searchQuery },
//       });
//       setSuggestions(response.data.coins.slice(0, 5));
//       setLoading(false);
//     } catch (err) {
//       setError('Error fetching suggestions');
//       setLoading(false);
//     }
//   };

//   const fetchCoinDetails = async (coinId) => {
//     if (!coinId) return;

//     setLoading(true);
//     try {
//       const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
//         params: {
//           vs_currency: 'usd',
//           ids: coinId,
//         },
//       });
//       setCoins(response.data);
//       setSuggestions([]);
//       setLoading(false);
//     } catch (err) {
//       setError('Error fetching data');
//       setLoading(false);
//     }
//   };

//   const handleInputChange = (e) => {
//     const searchQuery = e.target.value.trim();
//     setQuery(searchQuery);
//     setSearchError('');
//     fetchCoinSuggestions(searchQuery);
//   };

//   const handleSuggestionClick = (coinId) => {
//     setQuery('');
//     fetchCoinDetails(coinId);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       if (!query) {
//         setSearchError('No cryptocurrency searched.');
//         return;
//       }
//       setSearchError('');
//     }
//   };

//   return (
//     <PageContainer>
//       <SearchSection>
//         <SearchInput
//           type="text"
//           placeholder="Search for a cryptocurrency..."
//           value={query}
//           onChange={handleInputChange}
//           onKeyPress={handleKeyPress}
//         />
//         {searchError && <ErrorText>{searchError}</ErrorText>}
//         {suggestions.length > 0 && (
//           <SuggestionsList>
//             {suggestions.map((coin) => (
//               <SuggestionItem key={coin.id} onClick={() => handleSuggestionClick(coin.id)}>
//                 {coin.name} ({coin.symbol.toUpperCase()})
//               </SuggestionItem>
//             ))}
//           </SuggestionsList>
//         )}
//       </SearchSection>

//       {loading && <LoadingText>Loading...</LoadingText>}
//       {error && <ErrorText>{error}</ErrorText>}

//       {!loading && !error && coins.length > 0 && (
//         <CoinTable>
//           <thead>
//             <tr>
//               <TableHeader>Coin</TableHeader>
//               <TableHeader>Price (USD)</TableHeader>
//               <TableHeader>24h Change</TableHeader>
//               <TableHeader>Market Cap</TableHeader>
//             </tr>
//           </thead>

          
//           <tbody>
            
//             {coins.map((coin) => (
//               <TableRow key={coin.id}>
//                 <TableData>{coin.name}</TableData>
//                 <TableData>${coin.current_price.toFixed(4)}</TableData>
//                 <TableData
//                   className={coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}
//                 >
//                   {coin.price_change_percentage_24h.toFixed(2)}%
//                 </TableData>
//                 <TableData>${coin.market_cap.toLocaleString()}</TableData>
//               </TableRow>
//             ))}
//           </tbody>
//         </CoinTable>
//       )}
//     </PageContainer>
//   );
// };

// export default Pricing;

// const PageContainer = styled.div`
//   font-family: Arial, sans-serif;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   min-height: 100vh;
//   text-align: center;
//   background-color: #f9f9f9;
// `;

// const SearchSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   position: relative;
//   width: 80%;
// `;

// const SearchInput = styled.input`
//   width: 100%;
//   max-width: 400px;
//   padding: 10px;
//   font-size: 1rem;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   margin-bottom: 10px;
//   background-color: #ffffff;
// `;

// const SuggestionsList = styled.ul`
//   list-style: none;
//   margin: 0;
//   padding: 10px;
//   width: 100%;
//   max-width: 400px;
//   background: #fff;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   text-align: left;
// `;

// const SuggestionItem = styled.li`
//   padding: 10px;
//   cursor: pointer;
//   &:hover {
//     background-color: #f1f1f1;
//   }
// `;

// const LoadingText = styled.p`
//   font-size: 1.2rem;
//   color: #333;
// `;

// const ErrorText = styled.p`
//   font-size: 0.9rem;
//   color: red;
//   margin-top: 5px;
// `;

// const CoinTable = styled.table`
//   width: 100%;
//   max-width: 800px;
//   border-collapse: collapse;
//   margin-top: 20px;
// `;

// const TableHeader = styled.th`
//   background-color: #007bff;
//   color: white;
//   padding: 10px;
//   text-align: left;
// `;

// const TableRow = styled.tr`
//   &:nth-child(even) {
//     background-color: #f9f9f9;
//   }
// `;

// const TableData = styled.td`
//   padding: 10px;
//   text-align: left;

//   &.positive {
//     color: green;
//   }

//   &.negative {
//     color: red;
//   }
// `;



// import React, { useState } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';

// const Pricing = () => {
//   const [coins, setCoins] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [query, setQuery] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   const [searchError, setSearchError] = useState('');

//   const fetchCoinSuggestions = async (searchQuery) => {
//     if (!searchQuery) {
//       setSuggestions([]);
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await axios.get('https://api.coingecko.com/api/v3/search', {
//         params: { query: searchQuery },
//       });
//       setSuggestions(response.data.coins.slice(0, 5));
//       setLoading(false);
//     } catch (err) {
//       setError('Error fetching suggestions');
//       setLoading(false);
//     }
//   };

//   const fetchCoinDetails = async (coinId) => {
//     if (!coinId) return;

//     setLoading(true);
//     try {
//       const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
//         params: {
//           vs_currency: 'usd',
//           ids: coinId,
//         },
//       });
//       setCoins(response.data);
//       setSuggestions([]);
//       setLoading(false);
//     } catch (err) {
//       setError('Error fetching data');
//       setLoading(false);
//     }
//   };

//   const handleInputChange = (e) => {
//     const searchQuery = e.target.value.trim();
//     setQuery(searchQuery);
//     setSearchError('');
//     fetchCoinSuggestions(searchQuery);
//   };

//   const handleSuggestionClick = (coinId) => {
//     setQuery('');
//     fetchCoinDetails(coinId);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       if (!query) {
//         setSearchError('No cryptocurrency searched.');
//         return;
//       }
//       setSearchError('');
//     }
//   };

//   return (
//     <PageContainer>
//       <SearchSection>
//         <SearchInput
//           type="text"
//           placeholder="Search for a cryptocurrency..."
//           value={query}
//           onChange={handleInputChange}
//           onKeyPress={handleKeyPress}
//         />
//         {searchError && <ErrorText>{searchError}</ErrorText>}
//         {suggestions.length > 0 && (
//           <SuggestionsList>
//             {suggestions.map((coin) => (
//               <SuggestionItem key={coin.id} onClick={() => handleSuggestionClick(coin.id)}>
//                 {coin.name} ({coin.symbol.toUpperCase()})
//               </SuggestionItem>
//             ))}
//           </SuggestionsList>
//         )}
//       </SearchSection>

//       {loading && <LoadingText>Loading...</LoadingText>}
//       {error && <ErrorText>{error}</ErrorText>}

//       {!loading && !error && coins.length > 0 && (
//         <CoinTable>
//           <thead>
//             <tr>
//               <TableHeader>Coin</TableHeader>
//               <TableHeader>Price (USD)</TableHeader>
//               <TableHeader>24h Change</TableHeader>
//               <TableHeader>Market Cap</TableHeader>
//             </tr>
//           </thead>

          
//           <tbody>
            
//             {coins.map((coin) => (
//               <TableRow key={coin.id}>
//                 <TableData>{coin.name}</TableData>
//                 <TableData>${coin.current_price.toFixed(4)}</TableData>
//                 <TableData
//                   className={coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}
//                 >
//                   {coin.price_change_percentage_24h.toFixed(2)}%
//                 </TableData>
//                 <TableData>${coin.market_cap.toLocaleString()}</TableData>
//               </TableRow>
//             ))}
//           </tbody>
//         </CoinTable>
//       )}
//     </PageContainer>
//   );
// };

// export default Pricing;

// // Styled Components
// const PageContainer = styled.div`
//   font-family: Arial, sans-serif;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   min-height: 100vh;
//   text-align: center;
//   background-color: #f9f9f9;
//   background-image: url('https://github.com/piyush-eon/react-crypto-tracker/blob/master/public/banner2.jpg?raw=true');
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
// `;

// const SearchSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   position: relative;
//   width: 80%;
// `;

// const SearchInput = styled.input`
//   width: 100%;
//   max-width: 400px;
//   padding: 10px;
//   font-size: 1rem;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   margin-bottom: 10px;
//   background-color: #ffffff;
// `;

// const SuggestionsList = styled.ul`
//   list-style: none;
//   margin: 0;
//   padding: 10px;
//   width: 100%;
//   max-width: 400px;
//   background: #fff;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   text-align: left;
// `;

// const SuggestionItem = styled.li`
//   padding: 10px;
//   cursor: pointer;
//   &:hover {
//     background-color: #f1f1f1;
//   }
// `;

// const LoadingText = styled.p`
//   font-size: 1.2rem;
//   color: #333;
// `;

// const ErrorText = styled.p`
//   font-size: 0.9rem;
//   color: red;
//   margin-top: 5px;
// `;

// const CoinTable = styled.table`
//   width: 100%;
//   max-width: 800px;
//   border-collapse: collapse;
//   margin-top: 20px;
// `;

// const TableHeader = styled.th`
//   background-color: #007bff;
//   color: white;
//   padding: 10px;
//   text-align: left;
// `;

// const TableRow = styled.tr`
//   &:nth-child(even) {
//     background-color: #f9f9f9;
//   }
// `;

// const TableData = styled.td`
//   padding: 10px;
//   text-align: left;

//   &.positive {
//     color: green;
//   }

//   &.negative {
//     color: red;
//   }
// `;

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

//   // Fetching the list of coins with prices, logos, and descriptions
//   const fetchCoinsData = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.get(
//         "https://api.coingecko.com/api/v3/coins/markets",
//         {
//           params: {
//             vs_currency: "usd",
//             order: "market_cap_desc",
//             per_page: 50, // Fetch more coins for searching
//             page: 1,
//           },
//         }
//       );
//       setCoins(response.data);
//       setFilteredCoins(response.data); // Initially show all coins
//     } catch (err) {
//       setError("Failed to fetch coin data. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch coins on component mount
//   useEffect(() => {
//     fetchCoinsData();
//   }, []);

//   // Handle search input change
//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//     filterCoins(e.target.value);
//   };

//   // Filter coins based on search query
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

//   if (loading) {
//     return <LoadingContainer>Loading...</LoadingContainer>;
//   }

//   if (error) {
//     return <ErrorContainer>{error}</ErrorContainer>;
//   }

//   return (
//     <PricingContainer>
//       <Title>Top Cryptocurrencies</Title>

//       {/* Search Bar */}
//       <SearchContainer>
//         <SearchInput
//           type="text"
//           value={searchQuery}
//           onChange={handleSearch}
//           placeholder="Search for a coin..."
//         />
//       </SearchContainer>

//       <CoinsList>
//         {filteredCoins.length > 0 ? (
//           filteredCoins.map((coin) => (
//             <CoinItem key={coin.id}>
//               <CoinLogo src={coin.image} alt={coin.name} />
//               <CoinDetails>
//                 <CoinName>{coin.name}</CoinName>
//                 <CoinPrice>${coin.current_price.toFixed(2)}</CoinPrice>
//                 <Link to={`/coin/${coin.id}`}>
//                   <ExploreMoreButton>Explore More</ExploreMoreButton>
//                 </Link>
//               </CoinDetails>
//             </CoinItem>
//           ))
//         ) : (
//           <NoResults>No coins found for "{searchQuery}"</NoResults>
//         )}
//       </CoinsList>
//     </PricingContainer>
//   );
// };

// export default Pricing;

// // Styled Components
// const PricingContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
//   background-color: #f5f5f5;
// `;

// const Title = styled.h1`
//   font-size: 28px;
//   margin-bottom: 20px;
//   color: #333;
// `;

// const SearchContainer = styled.div`
//   margin-bottom: 20px;
//   width: 80%;
//   max-width: 600px;
// `;

// const SearchInput = styled.input`
//   width: 100%;
//   padding: 10px;
//   font-size: 16px;
//   border-radius: 5px;
//   border: 1px solid #ccc;
//   outline: none;

//   &:focus {
//     border-color: #888;
//   }
// `;

// const CoinsList = styled.div`
//   display: flex;
//   flex-wrap: nowrap;
//   gap: 15px;
//   overflow-x: auto;
//   padding: 10px;
// `;

// const CoinItem = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: #fff;
//   padding: 15px;
//   border-radius: 8px;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//   width: 180px;
//   min-height: 250px;
//   text-align: center;
// `;

// const CoinLogo = styled.img`
//   width: 50px;
//   height: 50px;
//   margin-bottom: 15px;
// `;

// const CoinDetails = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const CoinName = styled.h3`
//   font-size: 18px;
//   color: #333;
// `;

// const CoinPrice = styled.p`
//   font-size: 16px;
//   color: #666;
// `;

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
//   color: #777;
// `;

// const LoadingContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   font-size: 20px;
// `;

// const ErrorContainer = styled.div`
//   color: red;
//   text-align: center;
//   font-size: 18px;
//   padding: 20px;
// `;

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

//   // Fetch coins data
//   const fetchCoinsData = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.get(
//         "https://api.coingecko.com/api/v3/coins/markets",
//         {
//           params: {
//             vs_currency: "usd",
//             order: "market_cap_desc",
//             per_page: 50,
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

//   // Fetch coins on mount
//   useEffect(() => {
//     fetchCoinsData();
//   }, []);

//   // Handle search input
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

//   // Scroll handlers
//   const scrollLeft = () => {
//     const container = document.getElementById("coins-container");
//     container.scrollBy({ left: -300, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     const container = document.getElementById("coins-container");
//     container.scrollBy({ left: 300, behavior: "smooth" });
//   };

//   if (loading) return <LoadingContainer>Loading...</LoadingContainer>;
//   if (error) return <ErrorContainer>{error}</ErrorContainer>;

//   return (
//     <PricingContainer>
//       <Title>Top Cryptocurrencies</Title>

//       {/* Search Bar */}
//       <SearchContainer>
//         <SearchInput
//           type="text"
//           value={searchQuery}
//           onChange={handleSearch}
//           placeholder="Search for a coin..."
//         />
//       </SearchContainer>

//       {/* Coins Display */}
//       <ScrollArea>
//         <ScrollButtonLeft onClick={scrollLeft}>←</ScrollButtonLeft>
//         <CoinsContainer id="coins-container">
//           {filteredCoins.map((coin) => (
//             <CoinItem key={coin.id}>
//               <CoinLogo src={coin.image} alt={coin.name} />
//               <CoinDetails>
//                 <CoinName>{coin.name}</CoinName>
//                 <CoinPrice>${coin.current_price.toFixed(2)}</CoinPrice>
//                 <Link to={`/coin/${coin.id}`}>
//                   <ExploreMoreButton>Explore More</ExploreMoreButton>
//                 </Link>
//               </CoinDetails>
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
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
//   background-color: #f5f5f5;
// `;

// const Title = styled.h1`
//   font-size: 28px;
//   margin-bottom: 20px;
//   color: #333;
// `;

// const SearchContainer = styled.div`
//   margin-bottom: 20px;
//   width: 80%;
//   max-width: 600px;
// `;

// const SearchInput = styled.input`
//   width: 100%;
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
//   background-color: #fff;
//   padding: 15px;
//   border-radius: 8px;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//   width: 180px;
//   min-height: 250px;
//   text-align: center;
//   flex-shrink: 0;
// `;

// const CoinLogo = styled.img`
//   width: 50px;
//   height: 50px;
//   margin-bottom: 15px;
// `;

// const CoinDetails = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const CoinName = styled.h3`
//   font-size: 18px;
//   color: #333;
// `;

// const CoinPrice = styled.p`
//   font-size: 16px;
//   color: #666;
// `;

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
//   color: #777;
// `;

// const LoadingContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   font-size: 20px;
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
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currency, setCurrency] = useState("usd");
  const [conversionRate, setConversionRate] = useState(1);

  // Fetch coins data
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
            per_page: 50,
            page: 1,
          },
        }
      );
      setCoins(response.data);
      setFilteredCoins(response.data);
    } catch (err) {
      setError("Failed to fetch coin data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch coins whenever the currency changes
  useEffect(() => {
    fetchCoinsData();
  }, [currency]);

  // Handle search input
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    filterCoins(e.target.value);
  };

  // Filter coins based on search
  const filterCoins = (query) => {
    if (!query) {
      setFilteredCoins(coins);
    } else {
      setFilteredCoins(
        coins.filter((coin) =>
          coin.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  // Scroll handlers
  const scrollLeft = () => {
    const container = document.getElementById("coins-container");
    container.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    const container = document.getElementById("coins-container");
    container.scrollBy({ left: 300, behavior: "smooth" });
  };

  // Handle currency change
  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  if (loading) return <LoadingContainer>Loading...</LoadingContainer>;
  if (error) return <ErrorContainer>{error}</ErrorContainer>;

  return (
    <PricingContainer>
      <Title>Top Cryptocurrencies</Title>

      {/* Search Bar and Currency Converter */}
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
          <option value="aud">AUD</option>
        </CurrencySelect>
      </SearchContainer>

      {/* Coins Display */}
      <ScrollArea>
        <ScrollButtonLeft onClick={scrollLeft}>←</ScrollButtonLeft>
        <CoinsContainer id="coins-container">
          {filteredCoins.map((coin) => (
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
        <ScrollButtonRight onClick={scrollRight}>→</ScrollButtonRight>
      </ScrollArea>

      {/* No Results */}
      {filteredCoins.length === 0 && (
        <NoResults>No coins found for "{searchQuery}"</NoResults>
      )}
    </PricingContainer>
  );
};

export default Pricing;

// Styled Components
const PricingContainer = styled.div`
  margin-top:20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-image: url("https://github.com/piyush-eon/react-crypto-tracker/blob/master/public/banner2.jpg?raw=true");
  background-size: cover;
  background-position: center;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: #fff;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  width: 80%;
  max-width: 600px;
`;

const SearchInput = styled.input`
  width: 70%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;

  &:focus {
    border-color: #888;
  }
`;

const CurrencySelect = styled.select`
  width: 25%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;

  &:focus {
    border-color: #888;
  }
`;

const ScrollArea = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 90%;
`;

const ScrollButtonLeft = styled.button`
  position: absolute;
  left: -40px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  z-index: 1;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const ScrollButtonRight = styled.button`
  position: absolute;
  right: -40px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  z-index: 1;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const CoinsContainer = styled.div`
  border-radius:30px;
  display: flex;
  gap: 15px;
  overflow-x: auto;
  padding: 10px;
  scroll-behavior: smooth;
  max-width: 100%;
`;

const CoinItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 180px;
  // min-height: 300px; /* Adjusted to fit description */
  text-align: center;
  flex-shrink: 0;
`;

const CoinLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

const CoinDescription = styled.p`
  font-size: 14px;
  color: #333;
  margin-bottom: 10px;
`;

const CoinPrice = styled.p`
  font-size: 16px;
  color: #666;
`;

const ExploreMoreButton = styled.button`
  background-color: gold;
  color: black;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: darkgoldenrod;
  }
`;

const NoResults = styled.p`
  font-size: 18px;
  color: #fff;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 20px;
  color: #fff;
`;

const ErrorContainer = styled.div`
  color: red;
  text-align: center;
  font-size: 18px;
  padding: 20px;
`;
