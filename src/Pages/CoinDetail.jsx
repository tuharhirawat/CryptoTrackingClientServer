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


///////
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import styled from "styled-components";
// import { Line } from "react-chartjs-2";
// import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

// // Register chart components
// ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

// const CoinDetails = () => {
//   const { coinId } = useParams(); 
//   const [coinData, setCoinData] = useState(null);
//   const [chartData, setChartData] = useState({});
//   const [timeRange, setTimeRange] = useState("30"); // Default to 30 days

//   // Fetch coin details and price history
//   useEffect(() => {
//     const fetchCoinDetails = async () => {
//       try {
//         const [detailsResponse, historyResponse] = await Promise.all([
//           axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`),
//           axios.get(
//             `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart`,
//             {
//               params: {
//                 vs_currency: "usd",
//                 days: timeRange,
//               },
//             }
//           ),
//         ]);

//         setCoinData(detailsResponse.data);
//         setChartData(formatChartData(historyResponse.data));
//       } catch (error) {
//         console.error("Error fetching coin details:", error);
//       }
//     };

//     fetchCoinDetails();
//   }, [coinId, timeRange]);

//   // Format data for the graph
//   const formatChartData = (data) => {
//     return {
//       labels: data.prices.map((price) =>
//         new Date(price[0]).toLocaleDateString()
//       ),
//       datasets: [
//         {
//           label: `Price (Last ${timeRange} Days)`,
//           data: data.prices.map((price) => price[1]),
//           borderColor: "rgba(255, 206, 86, 1)",
//           backgroundColor: "rgba(255, 206, 86, 0.2)",
//           borderWidth: 2,
//           pointRadius: 0,
//         },
//       ],
//     };
//   };

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
//       <TimeRangeSelector>
//         <button onClick={() => setTimeRange("1")}>24 Hours</button>
//         <button onClick={() => setTimeRange("30")}>30 Days</button>
//         <button onClick={() => setTimeRange("180")}>6 Months</button>
//       </TimeRangeSelector>
//       <LineGraph>
//         <Line data={chartData} />
//       </LineGraph>
//       <CoinDescription>
//         <strong>Description: </strong>{coinData.description.en || "No description available"}
//       </CoinDescription>
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

// const TimeRangeSelector = styled.div`
//   margin: 20px 0;
//   button {
//     margin: 0 10px;
//     padding: 10px 20px;
//     border: none;
//     background-color: #6a11cb;
//     color: white;
//     border-radius: 5px;
//     cursor: pointer;
//     transition: background-color 0.3s ease;
//     &:hover {
//       background-color: #ffcc00;
//       color: black;
//     }
//   }
// `;

// const LineGraph = styled.div`
//   width: 90%;
//   max-width: 800px;
//   margin: 0 auto;
//   padding: 20px;
//   background: white;
//   border-radius: 10px;
// `;

// const CoinDescription = styled.p`
//   font-size: 1rem;
//   margin-top: 20px;
//   color: #333;
//   text-align: justify;
// `;



import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

// Register chart components
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const CoinDetails = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [chartData, setChartData] = useState({});
  const [timeRange, setTimeRange] = useState("30");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCoinDetails = async () => {
    try {
      setLoading(true);
      setError(null);

      const [detailsResponse, historyResponse] = await Promise.all([
        axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`),
        axios.get(
          `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart`,
          {
            params: { vs_currency: "usd", days: timeRange },
          }
        ),
      ]);

      setCoinData(detailsResponse.data);
      setChartData(formatChartData(historyResponse.data));
    } catch (err) {
      setError("Failed to fetch data. Retrying...");
      console.error("Error fetching coin details:", err);
      setTimeout(fetchCoinDetails, 5000); // Retry after 5 seconds
    } finally {
      setLoading(false);
    }
  };

  // Fetch data whenever `coinId` or `timeRange` changes
  useEffect(() => {
    fetchCoinDetails();
  }, [coinId, timeRange]);

  // Format data for the graph
  const formatChartData = (data) => {
    return {
      labels: data.prices.map((price) =>
        new Date(price[0]).toLocaleDateString()
      ),
      datasets: [
        {
          label: `Price (Last ${timeRange} Days)`,
          data: data.prices.map((price) => price[1]),
          borderColor: "rgba(255, 206, 86, 1)",
          backgroundColor: "rgba(255, 206, 86, 0.2)",
          borderWidth: 2,
          pointRadius: 0,
        },
      ],
    };
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!coinData) {
    return <div>No data available.</div>;
  }

  return (
    <CoinDetailsContainer>
      <CoinImage src={coinData.image.large} alt={coinData.name} />
      <CoinName>{coinData.name}</CoinName>
      <CoinSymbol>{coinData.symbol.toUpperCase()}</CoinSymbol>
      <CoinPrice>
        Price: ${coinData.market_data.current_price.usd.toFixed(2)}
      </CoinPrice>
      <TimeRangeSelector>
        <button onClick={() => setTimeRange("1")}>24 Hours</button>
        <button onClick={() => setTimeRange("30")}>30 Days</button>
        <button onClick={() => setTimeRange("180")}>6 Months</button>
      </TimeRangeSelector>
      <LineGraph>
        <Line data={chartData} />
      </LineGraph>
      <CoinDescription>
        <strong>Description: </strong>
        {coinData.description.en || "No description available"}
      </CoinDescription>
    </CoinDetailsContainer>
  );
};

export default CoinDetails;

// Styled Components
const CoinDetailsContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

const CoinImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
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

const TimeRangeSelector = styled.div`
  margin: 20px 0;
  button {
    margin: 0 10px;
    padding: 10px 20px;
    border: none;
    background-color: #6a11cb;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #ffcc00;
      color: black;
    }
  }
`;

const LineGraph = styled.div`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
`;

const CoinDescription = styled.p`
  font-size: 1rem;
  margin-top: 20px;
  color: #333;
  text-align: justify;
`;
