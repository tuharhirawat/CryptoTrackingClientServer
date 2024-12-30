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



import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { Line } from "react-chartjs-2"; // Importing Line chart from Chart.js
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const CoinDetails = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [chartPeriod, setChartPeriod] = useState('7d');

  useEffect(() => {
    const fetchCoinDetails = async () => {
      try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`);
        setCoinData(response.data);
      } catch (error) {
        console.error("Error fetching coin details:", error);
      }
    };
    
    fetchCoinDetails();
  }, [coinId]);

  useEffect(() => {
    const fetchCoinHistory = async () => {
      let days = 7; // Default to 7 days
      if (chartPeriod === '30d') days = 30;
      if (chartPeriod === '6m') days = 180;

      try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart`, {
          params: {
            vs_currency: 'usd',
            days: days,
          }
        });
        
        const prices = response.data.prices;
        
        // Format data for chart.js
        const chartLabels = prices.map(price => new Date(price[0]).toLocaleDateString());
        const chartPrices = prices.map(price => price[1]);

        setChartData({
          labels: chartLabels,
          datasets: [
            {
              label: 'Price (USD)',
              data: chartPrices,
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching coin history:", error);
      }
    };
    
    if (coinId) {
      fetchCoinHistory();
    }
  }, [coinId, chartPeriod]);

  if (!coinData || !chartData) {
    return <div>Loading...</div>;
  }

  const coinImage = coinData.image?.large || "https://via.placeholder.com/200";
  const coinName = coinData.name || "Unknown Coin";
  const coinSymbol = coinData.symbol?.toUpperCase() || "N/A";
  const coinPrice = coinData.market_data?.current_price?.usd
    ? `$${coinData.market_data.current_price.usd.toFixed(2)}`
    : "Price not available";
  const coinDescription =
    coinData.description?.en || "Description not available.";

  return (
    <CoinDetailsContainer>
      <CoinImage src={coinImage} alt={coinName} />
      <CoinName>{coinName}</CoinName>
      <CoinSymbol>{coinSymbol}</CoinSymbol>
      <CoinPrice>{coinPrice}</CoinPrice>
      <CoinDescription>{coinDescription}</CoinDescription>
      
      {/* Chart Controls */}
      <ChartControls>
        <button onClick={() => setChartPeriod('7d')}>7 Days</button>
        <button onClick={() => setChartPeriod('30d')}>30 Days</button>
        <button onClick={() => setChartPeriod('6m')}>6 Months</button>
      </ChartControls>

      {/* Chart */}
      {chartData && (
        <CoinChartWrapper>
          <Line data={chartData} />
        </CoinChartWrapper>
      )}
    </CoinDetailsContainer>
  );
};

export default CoinDetails;

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


const CoinDetailsContainer = styled.div`
  text-align: center;
  padding: 50px;
  background-image: url('https://github.com/piyush-eon/react-crypto-tracker/blob/master/public/banner2.jpg?raw=true');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  color: white;  /* Ensures the text is visible on the background */
`;

const CoinImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const CoinName = styled.h1`
  font-size: 2.5rem;
  margin-top: 20px;
`;

const CoinSymbol = styled.p`
  font-size: 1.5rem;
  color: #6a11cb;
  margin-top: 10px;
`;

const CoinPrice = styled.p`
  font-size: 1.2rem;
  color: #ffcc00;
  margin-top: 20px;
`;

const CoinDescription = styled.p`
  font-size: 1rem;
  margin-top: 20px;
  color: #f0f0f0;
  text-align: justify;
`;

const CoinChartWrapper = styled.div`
  margin-top: 50px;
  width: 100%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const ChartControls = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;

  button {
    padding: 10px 20px;
    border: 1px solid #ccc;
    background-color: #333;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #555;
  }
`;
