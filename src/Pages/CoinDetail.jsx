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
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [chartPeriod, setChartPeriod] = useState("7d");

  useEffect(() => {
    const fetchCoinDetails = async () => {
      try {
        // Using the new endpoint to fetch market data
        const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
          params: {
            vs_currency: "usd",
            ids: coinId, // Filtering by specific coinId
          },
        });
        if (response.data && response.data.length > 0) {
          setCoinData(response.data[0]); // Set the first (and only) result
        }
      } catch (error) {
        console.error("Error fetching coin details:", error);
      }
    };

    fetchCoinDetails();
  }, [coinId]);

  useEffect(() => {
    const fetchCoinHistory = async () => {
      let days = 7; // Default to 7 days
      if (chartPeriod === "30d") days = 30;
      if (chartPeriod === "6m") days = 180;

      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart`,
          {
            params: {
              vs_currency: "usd",
              days: days,
            },
          }
        );

        const prices = response.data.prices;

        // Format data for chart.js
        const chartLabels = prices.map((price) => new Date(price[0]).toLocaleDateString());
        const chartPrices = prices.map((price) => price[1]);

        setChartData({
          labels: chartLabels,
          datasets: [
            {
              label: "Price (USD)",
              data: chartPrices,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
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

  const coinImage = coinData.image || "https://via.placeholder.com/200";
  const coinName = coinData.name || "Unknown Coin";
  const coinSymbol = coinData.symbol?.toUpperCase() || "N/A";
  const coinPrice = coinData.current_price
    ? `$${coinData.current_price.toFixed(2)}`
    : "Price not available";
  const coinMarketCap = coinData.market_cap
    ? `$${coinData.market_cap.toLocaleString()}`
    : "Market Cap not available";

  return (
    <CoinDetailsContainer>
      <CoinImage src={coinImage} alt={coinName} />
      <CoinName>{coinName}</CoinName>
      <CoinSymbol>{coinSymbol}</CoinSymbol>
      <CoinPrice>{coinPrice}</CoinPrice>
      <CoinMarketCap>Market Cap: {coinMarketCap}</CoinMarketCap>

      {/* Chart Controls */}
      <ChartControls>
        <button onClick={() => setChartPeriod("7d")}>7 Days</button>
        <button onClick={() => setChartPeriod("30d")}>30 Days</button>
        <button onClick={() => setChartPeriod("6m")}>6 Months</button>
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

// Styled Components
const CoinDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
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

const ChartControls = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const CoinChartWrapper = styled.div`
  width: 100%;
  max-width: 800px;
`;