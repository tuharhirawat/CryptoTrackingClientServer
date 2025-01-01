// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import styled from "styled-components";

// const CoinDetails = () => {
//   const { coinId } = useParams(); 
//   const [coinData, setCoinData] = useState(null);

//   useEffect(() => {
//     const fetchCoinDetails = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.coingecko.com/api/v3/coins/${coinId}`
//         );
//         setCoinData(response.data);
//       } catch (error) {
//         console.error("Error fetching coin details:", error);
//       }
//     };

//     fetchCoinDetails();
//   }, [coinId]);

//   if (!coinData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <CoinDetailsContainer>
//       <CoinImage src={coinData.image.large} alt={coinData.name} />
//       <CoinName>{coinData.name}</CoinName>
//       <CoinSymbol>{coinData.symbol.toUpperCase()}</CoinSymbol>
//       <CoinPrice>
//         Price: ${coinData.market_data.current_price.usd.toFixed(2)}
//       </CoinPrice>
//       <CoinDescription>{coinData.description.en}</CoinDescription>
//     </CoinDetailsContainer>
//   );
// };

// export default CoinDetails;

// const CoinDetailsContainer = styled.div`
//   text-align: center;
//   padding: 50px;
// `;

// const CoinImage = styled.img`
//   width: 200px;
//   height: 200px;
//   border-radius: 10px;
// `;

// const CoinName = styled.h1`
//   font-size: 2.5rem;
//   margin-top: 20px;
// `;

// const CoinSymbol = styled.p`
//   font-size: 1.5rem;
//   color: #6a11cb;
//   margin-top: 10px;
// `;

// const CoinPrice = styled.p`
//   font-size: 1.2rem;
//   color: #ffcc00;
//   margin-top: 20px;
// `;

// const CoinDescription = styled.p`
//   font-size: 1rem;
//   margin-top: 20px;
//   color: #333;
//   text-align: justify;
// `;



// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import styled from "styled-components";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// // Register ChartJS components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const CoinDetails = () => {
//   const { coinId } = useParams();
//   const [coinData, setCoinData] = useState(null);
//   const [coinChartData, setCoinChartData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCoinDetails = async () => {
//       try {
//         const coinDetailsResponse = await axios.get(
//           `https://api.coingecko.com/api/v3/coins/${coinId}`
//         );
//         setCoinData(coinDetailsResponse.data);

//         // Fetching historical data for the chart (last 30 days)
//         const coinChartResponse = await axios.get(
//           `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart`,
//           {
//             params: {
//               vs_currency: "usd",
//               days: "30", // Last 30 days data
//             },
//           }
//         );
//         setCoinChartData(coinChartResponse.data.prices);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching coin details:", error);
//         setLoading(false);
//       }
//     };

//     fetchCoinDetails();
//   }, [coinId]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   // Prepare the chart data
//   const chartData = {
//     labels: coinChartData.map((item) => new Date(item[0]).toLocaleDateString()),
//     datasets: [
//       {
//         label: `${coinData.name} Price (USD)`,
//         data: coinChartData.map((item) => item[1]),
//         fill: false,
//         borderColor: "#ffcc00",
//         tension: 0.1,
//       },
//     ],
//   };

//   return (
//     <CoinDetailsContainer>
//       <CoinImage src={coinData.image.large} alt={coinData.name} />
//       <CoinName>{coinData.name}</CoinName>
//       <CoinSymbol>{coinData.symbol.toUpperCase()}</CoinSymbol>
//       <CoinPrice>
//         Price: ${coinData.market_data.current_price.usd.toFixed(2)}
//       </CoinPrice>
//       <CoinDescription>{coinData.description.en}</CoinDescription>

//       {/* Chart Section */}
//       <ChartContainer>
//         <h2>Price History (Last 30 Days)</h2>
//         <Line data={chartData} />
//       </ChartContainer>
//     </CoinDetailsContainer>
//   );
// };

// export default CoinDetails;

// const CoinDetailsContainer = styled.div`
//   text-align: center;
//   padding: 50px;
// `;

// const CoinImage = styled.img`
//   width: 200px;
//   height: 200px;
//   border-radius: 10px;
// `;

// const CoinName = styled.h1`
//   font-size: 2.5rem;
//   margin-top: 20px;
// `;

// const CoinSymbol = styled.p`
//   font-size: 1.5rem;
//   color: #6a11cb;
//   margin-top: 10px;
// `;

// const CoinPrice = styled.p`
//   font-size: 1.2rem;
//   color: #ffcc00;
//   margin-top: 20px;
// `;

// const CoinDescription = styled.p`
//   font-size: 1rem;
//   margin-top: 20px;
//   color: #333;
//   text-align: justify;
// `;

// const ChartContainer = styled.div`
//   margin-top: 50px;
//   width: 80%;
//   max-width: 900px;
//   margin-left: auto;
//   margin-right: auto;
//   padding: 20px;
//   background-color: #f5f5f5;
//   border-radius: 10px;
// `;

/////////////////////////////////

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import styled from "styled-components";
// import { Line } from "react-chartjs-2"; // Importing Line chart from Chart.js
// import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

// const CoinDetails = () => {
//   const { coinId } = useParams();
//   const [coinData, setCoinData] = useState(null);
//   const [chartData, setChartData] = useState(null);
//   const [chartPeriod, setChartPeriod] = useState('7d');

//   useEffect(() => {
//     const fetchCoinDetails = async () => {
//       try {
//         const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`);
//         setCoinData(response.data);
//       } catch (error) {
//         console.error("Error fetching coin details:", error);
//       }
//     };
    
//     fetchCoinDetails();
//   }, [coinId]);

//   useEffect(() => {
//     const fetchCoinHistory = async () => {
//       let days = 7; // Default to 7 days
//       if (chartPeriod === '30d') days = 30;
//       if (chartPeriod === '6m') days = 180;

//       try {
//         const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart`, {
//           params: {
//             vs_currency: 'usd',
//             days: days,
//           }
//         });
        
//         const prices = response.data.prices;
        
//         // Format data for chart.js
//         const chartLabels = prices.map(price => new Date(price[0]).toLocaleDateString());
//         const chartPrices = prices.map(price => price[1]);

//         setChartData({
//           labels: chartLabels,
//           datasets: [
//             {
//               label: 'Price (USD)',
//               data: chartPrices,
//               fill: false,
//               borderColor: 'rgb(75, 192, 192)',
//               tension: 0.1,
//             },
//           ],
//         });
//       } catch (error) {
//         console.error("Error fetching coin history:", error);
//       }
//     };
    
//     if (coinId) {
//       fetchCoinHistory();
//     }
//   }, [coinId, chartPeriod]);

//   if (!coinData || !chartData) {
//     return <div>Loading...</div>;
//   }

//   const coinImage = coinData.image?.large || "https://via.placeholder.com/200";
//   const coinName = coinData.name || "Unknown Coin";
//   const coinSymbol = coinData.symbol?.toUpperCase() || "N/A";
//   const coinPrice = coinData.market_data?.current_price?.usd
//     ? `$${coinData.market_data.current_price.usd.toFixed(2)}`
//     : "Price not available";
//   const coinDescription =
//     coinData.description?.en ;

//   return (
//     <CoinDetailsContainer>
//       <CoinImage src={coinImage} alt={coinName} />
//       <CoinName>{coinName}</CoinName>
//       <CoinSymbol>{coinSymbol}</CoinSymbol>
//       <CoinPrice>{coinPrice}</CoinPrice>
//       <CoinDescription>{coinDescription}</CoinDescription>
      
//       {/* Chart Controls */}
//       <ChartControls>
//         <button onClick={() => setChartPeriod('7d')}>7 Days</button>
//         <button onClick={() => setChartPeriod('30d')}>30 Days</button>
//         <button onClick={() => setChartPeriod('6m')}>6 Months</button>
//       </ChartControls>

//       {/* Chart */}
//       {chartData && (
//         <CoinChartWrapper>
//           <Line data={chartData} />
//         </CoinChartWrapper>
//       )}
//     </CoinDetailsContainer>
//   );
// };

// export default CoinDetails;

// const CoinDetailsContainer = styled.div`
//   text-align: center;
//   padding: 50px;
//   background-image: url('https://github.com/piyush-eon/react-crypto-tracker/blob/master/public/banner2.jpg?raw=true');
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   min-height: 100vh;
//   color: white;  /* Ensures the text is visible on the background */
// `;

// const CoinImage = styled.img`
//   width: 200px;
//   height: 200px;
//   border-radius: 10px;
//   margin-bottom: 20px;
// `;

// const CoinName = styled.h1`
//   font-size: 2.5rem;
//   margin-top: 20px;
// `;

// const CoinSymbol = styled.p`
//   font-size: 1.5rem;
//   color: #6a11cb;
//   margin-top: 10px;
// `;

// const CoinPrice = styled.p`
//   font-size: 1.2rem;
//   color: #ffcc00;
//   margin-top: 20px;
// `;

// const CoinDescription = styled.p`
//   font-size: 1rem;
//   margin-top: 20px;
//   color: #f0f0f0;
//   text-align: justify;
// `;

// const CoinChartWrapper = styled.div`
//   margin-top: 50px;
//   width: 100%;
//   max-width: 800px;
//   margin-left: auto;
//   margin-right: auto;
// `;

// const ChartControls = styled.div`
//   margin-top: 30px;
//   display: flex;
//   justify-content: center;
//   gap: 20px;

//   button {
//     padding: 10px 20px;
//     border: 1px solid #ccc;
//     background-color: #333;
//     color: white;
//     border-radius: 5px;
//     cursor: pointer;
//     transition: background-color 0.3s ease;
//   }

//   button:hover {
//     background-color: #555;
//   }
// `;


// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import styled from "styled-components";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

// const CoinDetails = () => {
//   const { coinId } = useParams();
//   const [coinData, setCoinData] = useState(null);
//   const [chartData, setChartData] = useState(null);
//   const [chartPeriod, setChartPeriod] = useState("7d");

//   useEffect(() => {
//     const fetchCoinDetails = async () => {
//       try {
//         // Using the new endpoint to fetch market data
//         const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
//           params: {
//             vs_currency: "usd",
//             ids: coinId, // Filtering by specific coinId
//           },
//         });
//         if (response.data && response.data.length > 0) {
//           setCoinData(response.data[0]); // Set the first (and only) result
//         }
//       } catch (error) {
//         console.error("Error fetching coin details:", error);
//       }
//     };

//     fetchCoinDetails();
//   }, [coinId]);

//   useEffect(() => {
//     const fetchCoinHistory = async () => {
//       let days = 7; // Default to 7 days
//       if (chartPeriod === "30d") days = 30;
//       if (chartPeriod === "6m") days = 180;

//       try {
//         const response = await axios.get(
//           `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart`,
//           {
//             params: {
//               vs_currency: "usd",
//               days: days,
//             },
//           }
//         );

//         const prices = response.data.prices;

//         // Format data for chart.js
//         const chartLabels = prices.map((price) => new Date(price[0]).toLocaleDateString());
//         const chartPrices = prices.map((price) => price[1]);

//         setChartData({
//           labels: chartLabels,
//           datasets: [
//             {
//               label: "Price (USD)",
//               data: chartPrices,
//               fill: false,
//               borderColor: "rgb(75, 192, 192)",
//               tension: 0.1,
//             },
//           ],
//         });
//       } catch (error) {
//         console.error("Error fetching coin history:", error);
//       }
//     };

//     if (coinId) {
//       fetchCoinHistory();
//     }
//   }, [coinId, chartPeriod]);

//   if (!coinData || !chartData) {
//     return <div>Loading...</div>;
//   }

//   const coinImage = coinData.image || "https://via.placeholder.com/200";
//   const coinName = coinData.name || "Unknown Coin";
//   const coinSymbol = coinData.symbol?.toUpperCase() || "N/A";
//   const coinPrice = coinData.current_price
//     ? `$${coinData.current_price.toFixed(2)}`
//     : "Price not available";
//   const coinMarketCap = coinData.market_cap
//     ? `$${coinData.market_cap.toLocaleString()}`
//     : "Market Cap not available";

//   return (
//     <CoinDetailsContainer>
//       <CoinImage src={coinImage} alt={coinName} />
//       <CoinName>{coinName}</CoinName>
//       <CoinSymbol>{coinSymbol}</CoinSymbol>
//       <CoinPrice>{coinPrice}</CoinPrice>
//       <CoinMarketCap>Market Cap: {coinMarketCap}</CoinMarketCap>

//       {/* Chart Controls */}
//       <ChartControls>
//         <button onClick={() => setChartPeriod("7d")}>7 Days</button>
//         <button onClick={() => setChartPeriod("30d")}>30 Days</button>
//         <button onClick={() => setChartPeriod("6m")}>6 Months</button>
//       </ChartControls>

//       {/* Chart */}
//       {chartData && (
//         <CoinChartWrapper>
//           <Line data={chartData} />
//         </CoinChartWrapper>
//       )}
//     </CoinDetailsContainer>
//   );
// };

// export default CoinDetails;

// // Styled Components
// const CoinDetailsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
// `;

// const CoinImage = styled.img`
//   width: 150px;
//   height: 150px;
//   margin-bottom: 20px;
// `;

// const CoinName = styled.h1`
//   font-size: 24px;
//   margin-bottom: 10px;
// `;

// const CoinSymbol = styled.h2`
//   font-size: 20px;
//   color: gray;
//   margin-bottom: 10px;
// `;

// const CoinPrice = styled.p`
//   font-size: 18px;
//   margin-bottom: 10px;
// `;

// const CoinMarketCap = styled.p`
//   font-size: 16px;
//   margin-bottom: 20px;
// `;

// const ChartControls = styled.div`
//   display: flex;
//   gap: 10px;
//   margin-bottom: 20px;
// `;

// const CoinChartWrapper = styled.div`
//   width: 100%;
//   max-width: 800px;
// `;


// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import styled from "styled-components";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

// const CoinDetails = () => {
//   const { coinId } = useParams();
//   const [coinData, setCoinData] = useState(null);
//   const [coinDescription, setCoinDescription] = useState("");
//   const [chartData, setChartData] = useState(null);
//   const [chartPeriod, setChartPeriod] = useState("24h");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch Coin Details
//   useEffect(() => {
//     const fetchCoinDetails = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`);
//         setCoinData(response.data);
//         setCoinDescription(response.data.description.en || "No description available.");
//       } catch (err) {
//         setError("Failed to fetch coin details. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCoinDetails();
//   }, [coinId]);

//   // Fetch Historical Data
//   useEffect(() => {
//     const fetchCoinHistory = async () => {
//       setError(null);
//       try {
//         const days =
//           chartPeriod === "24h"
//             ? 1
//             : chartPeriod === "7d"
//             ? 7
//             : chartPeriod === "30d"
//             ? 30
//             : 180;

//         const response = await axios.get(
//           `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart`,
//           {
//             params: {
//               vs_currency: "usd",
//               days: days,
//             },
//           }
//         );

//         const prices = response.data.prices;

//         const chartLabels = prices.map((price) =>
//           new Date(price[0]).toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           })
//         );
//         const chartPrices = prices.map((price) => price[1]);

//         setChartData({
//           labels: days === 1 ? chartLabels : chartLabels.map((label) => label.split(",")[0]),
//           datasets: [
//             {
//               label: "Price (USD)",
//               data: chartPrices,
//               fill: false,
//               borderColor: "rgb(75, 192, 192)",
//               tension: 0.1,
//             },
//           ],
//         });
//       } catch (err) {
//         setError("Failed to fetch historical data. Please try again later.");
//       }
//     };

//     if (coinId) {
//       fetchCoinHistory();
//     }
//   }, [coinId, chartPeriod]);

//   if (loading) {
//     return <LoadingContainer>Loading...</LoadingContainer>;
//   }

//   if (error) {
//     return <ErrorContainer>{error}</ErrorContainer>;
//   }

//   if (!coinData || !chartData) {
//     return <div>Data not available</div>;
//   }

//   const coinImage = coinData.image?.large || "https://via.placeholder.com/200";
//   const coinName = coinData.name || "Unknown Coin";
//   const coinSymbol = coinData.symbol?.toUpperCase() || "N/A";
//   const coinPrice = coinData.market_data?.current_price?.usd
//     ? `$${coinData.market_data.current_price.usd.toFixed(2)}`
//     : "Price not available";
//   const coinMarketCap = coinData.market_data?.market_cap?.usd
//     ? `$${coinData.market_data.market_cap.usd.toLocaleString()}`
//     : "Market Cap not available";

//   return (
//     <CoinDetailsContainer>
//       <CoinImage src={coinImage} alt={coinName} />
//       <CoinName>{coinName}</CoinName>
//       <CoinSymbol>{coinSymbol}</CoinSymbol>
//       <CoinPrice>{coinPrice}</CoinPrice>
//       <CoinMarketCap>Market Cap: {coinMarketCap}</CoinMarketCap>
//       <CoinDescription>{coinDescription}</CoinDescription>

//       {/* Chart Controls */}
//       <ChartControls>
//         <label htmlFor="chart-period">Select Period: </label>
//         <select
//           id="chart-period"
//           value={chartPeriod}
//           onChange={(e) => setChartPeriod(e.target.value)}
//         >
//           <option value="24h">24 Hours</option>
//           <option value="7d">7 Days</option>
//           <option value="30d">30 Days</option>
//           <option value="6m">6 Months</option>
//         </select>
//       </ChartControls>

//       {/* Chart */}
//       <CoinChartWrapper>
//         <Line data={chartData} />
//       </CoinChartWrapper>
//     </CoinDetailsContainer>
//   );
// };

// export default CoinDetails;

// // Styled Components
// const CoinDetailsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
// `;

// const CoinImage = styled.img`
//   width: 150px;
//   height: 150px;
//   margin-bottom: 20px;
// `;

// const CoinName = styled.h1`
//   font-size: 24px;
//   margin-bottom: 10px;
// `;

// const CoinSymbol = styled.h2`
//   font-size: 20px;
//   color: gray;
//   margin-bottom: 10px;
// `;

// const CoinPrice = styled.p`
//   font-size: 18px;
//   margin-bottom: 10px;
// `;

// const CoinMarketCap = styled.p`
//   font-size: 16px;
//   margin-bottom: 20px;
// `;

// const CoinDescription = styled.p`
//   font-size: 14px;
//   line-height: 1.5;
//   max-width: 800px;
//   text-align: center;
//   margin-bottom: 20px;
// `;

// const ChartControls = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   margin-bottom: 20px;

//   select {
//     padding: 5px;
//     font-size: 16px;
//   }
// `;

// const CoinChartWrapper = styled.div`
//   width: 90%;
//   max-width: 800px;
//   margin: 0 auto;
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
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import styled from "styled-components";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

// const CoinDetails = () => {
//   const { coinId } = useParams();
//   const [coinData, setCoinData] = useState(null);
//   const [coinDescription, setCoinDescription] = useState("");
//   const [chartData, setChartData] = useState(null);
//   const [chartPeriod, setChartPeriod] = useState("24h");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Function to fetch data with retries
//   const fetchDataWithRetry = async (url, retries = 3) => {
//     try {
//       const response = await axios.get(url);
//       return response.data;
//     } catch (err) {
//       if (retries > 0) {
//         console.warn(`Retrying fetch: ${url} (${3 - retries} attempt left)`);
//         return await fetchDataWithRetry(url, retries - 1);
//       } else {
//         throw err;
//       }
//     }
//   };

//   // Fetch Coin Details
//   useEffect(() => {
//     const fetchCoinDetails = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const data = await fetchDataWithRetry(
//           `https://api.coingecko.com/api/v3/coins/${coinId}`
//         );
//         setCoinData(data);
//         setCoinDescription(data.description?.en || "No description available.");
//       } catch (err) {
//         setError("Failed to fetch coin details. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCoinDetails();
//   }, [coinId]);

//   // Fetch Historical Data
//   useEffect(() => {
//     const fetchCoinHistory = async () => {
//       setError(null);
//       try {
//         const days =
//           chartPeriod === "24h"
//             ? 1
//             : chartPeriod === "7d"
//             ? 7
//             : chartPeriod === "30d"
//             ? 30
//             : 180;

//         const data = await fetchDataWithRetry(
//           `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`
//         );

//         const prices = data.prices || [];

//         const chartLabels = prices.map((price) =>
//           new Date(price[0]).toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           })
//         );
//         const chartPrices = prices.map((price) => price[1]);

//         setChartData({
//           labels: chartLabels,
//           datasets: [
//             {
//               label: "Price (USD)",
//               data: chartPrices,
//               fill: false,
//               borderColor: "gold",
//               backgroundColor: "black",
//               tension: 0.1,
//             },
//           ],
//         });
//       } catch (err) {
//         setError("Failed to fetch historical data. Please try again later.");
//       }
//     };

//     if (coinId) {
//       fetchCoinHistory();
//     }
//   }, [coinId, chartPeriod]);

//   if (loading) {
//     return <LoadingContainer>Loading...</LoadingContainer>;
//   }

//   if (error) {
//     return <ErrorContainer>{error}</ErrorContainer>;
//   }

//   if (!coinData || !chartData) {
//     return <div>Data not available</div>;
//   }

//   const coinImage = coinData.image?.large || "https://via.placeholder.com/200";
//   const coinName = coinData.name || "Unknown Coin";
//   const coinSymbol = coinData.symbol?.toUpperCase() || "N/A";
//   const coinPrice = coinData.market_data?.current_price?.usd
//     ? `$${coinData.market_data.current_price.usd.toFixed(2)}`
//     : "Price not available";
//   const coinMarketCap = coinData.market_data?.market_cap?.usd
//     ? `$${coinData.market_data.market_cap.usd.toLocaleString()}`
//     : "Market Cap not available";

//   return (
//     <CoinDetailsContainer>
//       <CoinImage src={coinImage} alt={coinName} />
//       <CoinName>{coinName}</CoinName>
//       <CoinSymbol>{coinSymbol}</CoinSymbol>
//       <CoinPrice>{coinPrice}</CoinPrice>
//       <CoinMarketCap>Market Cap: {coinMarketCap}</CoinMarketCap>
//       <CoinDescription dangerouslySetInnerHTML={{ __html: coinDescription }} />

//       {/* Chart Controls */}
//       <ChartControls>
//         <label htmlFor="chart-period">Select Period: </label>
//         <select
//           id="chart-period"
//           value={chartPeriod}
//           onChange={(e) => setChartPeriod(e.target.value)}
//         >
//           <option value="24h">24 Hours</option>
//           <option value="7d">7 Days</option>
//           <option value="30d">30 Days</option>
//           <option value="6m">6 Months</option>
//         </select>
//       </ChartControls>

//       {/* Chart */}
//       <CoinChartWrapper>
//         <Line data={chartData} />
//       </CoinChartWrapper>
//     </CoinDetailsContainer>
//   );
// };

// export default CoinDetails;

// // Styled Components
// const CoinDetailsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
//   background-image: url("https://github.com/piyush-eon/react-crypto-tracker/blob/master/public/banner2.jpg?raw=true");
//   background-size: cover;
//   background-position: center;
//   color: white;
// `;

// const CoinImage = styled.img`
//   width: 150px;
//   height: 150px;
//   margin-bottom: 20px;
// `;

// const CoinName = styled.h1`
//   font-size: 24px;
//   margin-bottom: 10px;
// `;

// const CoinSymbol = styled.h2`
//   font-size: 20px;
//   color: gray;
//   margin-bottom: 10px;
// `;

// const CoinPrice = styled.p`
//   font-size: 18px;
//   margin-bottom: 10px;
// `;

// const CoinMarketCap = styled.p`
//   font-size: 16px;
//   margin-bottom: 20px;
// `;

// const CoinDescription = styled.div`
//   font-size: 14px;
//   line-height: 1.5;
//   max-width: 800px;
//   text-align: center;
//   margin-bottom: 20px;
// `;

// const ChartControls = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   margin-bottom: 20px;

//   select {
//     padding: 5px;
//     font-size: 16px;
//   }
// `;

// const CoinChartWrapper = styled.div`
//   width: 90%;
//   max-width: 800px;
//   margin: 0 auto;
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
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const CoinDetails = () => {
  const { coinId } = useParams();  // Get the coinId from the URL
  const [coinData, setCoinData] = useState(null);
  const [coinDescription, setCoinDescription] = useState("");
  const [chartData, setChartData] = useState(null);
  const [chartPeriod, setChartPeriod] = useState("24h");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch data with retries
  const fetchDataWithRetry = async (url, retries = 3) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (err) {
      if (retries > 0) {
        console.warn(`Retrying fetch: ${url} (${3 - retries} attempt left)`);
        return await fetchDataWithRetry(url, retries - 1);
      } else {
        console.error("Error fetching data:", err);  // Log error if retries fail
        throw err;
      }
    }
  };

  // Fetch Coin Details
  useEffect(() => {
    const fetchCoinDetails = async () => {
      if (!coinId) return;  // Ensure coinId is available before making the API call

      setLoading(true);
      setError(null);  // Reset error before making a new request
      try {
        const data = await fetchDataWithRetry(
          `https://api.coingecko.com/api/v3/coins/${coinId}`
        );
        console.log("Fetched Coin Details:", data);  // Debug: log coin data
        setCoinData(data);
        setCoinDescription(data.description?.en || "No description available.");
      } catch (err) {
        console.error("Error fetching coin details:", err);
        setError("Failed to fetch coin details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (coinId) {
      fetchCoinDetails();
    }
  }, [coinId]);

  // Fetch Historical Data
  useEffect(() => {
    const fetchCoinHistory = async () => {
      if (!coinId) return;

      setError(null);
      try {
        const days =
          chartPeriod === "24h"
            ? 1
            : chartPeriod === "7d"
            ? 7
            : chartPeriod === "30d"
            ? 30
            : 180;

        const data = await fetchDataWithRetry(
          `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`
        );

        const prices = data.prices || [];
        const chartLabels = prices.map((price) =>
          new Date(price[0]).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        );
        const chartPrices = prices.map((price) => price[1]);

        setChartData({
          labels: chartLabels,
          datasets: [
            {
              label: "Price (USD)",
              data: chartPrices,
              fill: false,
              borderColor: "gold",
              backgroundColor: "black",
              tension: 0.1,
            },
          ],
        });
      } catch (err) {
        console.error("Error fetching historical data:", err);
        setError("Failed to fetch historical data. Please try again later.");
      }
    };

    if (coinId) {
      fetchCoinHistory();
    }
  }, [coinId, chartPeriod]);

  // Loading and Error States
  if (loading) {
    return <LoadingContainer>Loading...</LoadingContainer>;
  }

  if (error) {
    return <ErrorContainer>{error}</ErrorContainer>;
  }

  if (!coinData || !chartData) {
    return <div>Data not available</div>;
  }

  const coinImage = coinData.image?.large || "https://via.placeholder.com/200";
  const coinName = coinData.name || "Unknown Coin";
  const coinSymbol = coinData.symbol?.toUpperCase() || "N/A";
  const coinPrice = coinData.market_data?.current_price?.usd
    ? `$${coinData.market_data.current_price.usd.toFixed(2)}`
    : "Price not available";
  const coinMarketCap = coinData.market_data?.market_cap?.usd
    ? `$${coinData.market_data.market_cap.usd.toLocaleString()}`
    : "Market Cap not available";

  return (
    <CoinDetailsContainer>
      <CoinImage src={coinImage} alt={coinName} />
      <CoinName>{coinName}</CoinName>
      <CoinSymbol>{coinSymbol}</CoinSymbol>
      <CoinPrice>{coinPrice}</CoinPrice>
      <CoinMarketCap>Market Cap: {coinMarketCap}</CoinMarketCap>
      <CoinDescription dangerouslySetInnerHTML={{ __html: coinDescription }} />

      {/* Chart Controls */}
      <ChartControls>
        <label htmlFor="chart-period">Select Period: </label>
        <select
          id="chart-period"
          value={chartPeriod}
          onChange={(e) => setChartPeriod(e.target.value)}
        >
          <option value="24h">24 Hours</option>
          <option value="7d">7 Days</option>
          <option value="30d">30 Days</option>
          <option value="6m">6 Months</option>
        </select>
      </ChartControls>

      {/* Chart */}
      <CoinChartWrapper>
        <Line data={chartData} />
      </CoinChartWrapper>
    </CoinDetailsContainer>
  );
};

export default CoinDetails;

// Styled Components
const CoinDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-image: url("https://github.com/piyush-eon/react-crypto-tracker/blob/master/public/banner2.jpg?raw=true");
  background-size: cover;
  background-position: center;
  color: white;
`;

const CoinImage = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;

const CoinName = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const CoinSymbol = styled.h2`
  font-size: 20px;
  color: gray;
  margin-bottom: 10px;
`;

const CoinPrice = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const CoinMarketCap = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const CoinDescription = styled.div`
  font-size: 14px;
  line-height: 1.5;
  max-width: 800px;
  text-align: center;
  margin-bottom: 20px;
`;

const ChartControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  select {
    padding: 5px;
    font-size: 16px;
  }
`;

const CoinChartWrapper = styled.div`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 20px;
`;

const ErrorContainer = styled.div`
  color: red;
  text-align: center;
  font-size: 18px;
  padding: 20px;
`;

