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