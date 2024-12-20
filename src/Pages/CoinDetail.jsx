import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const CoinDetails = () => {
  const { coinId } = useParams(); 
  const [coinData, setCoinData] = useState(null);

  useEffect(() => {
    const fetchCoinDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${coinId}`
        );
        setCoinData(response.data);
      } catch (error) {
        console.error("Error fetching coin details:", error);
      }
    };

    fetchCoinDetails();
  }, [coinId]);

  if (!coinData) {
    return <div>Loading...</div>;
  }

  return (
    <CoinDetailsContainer>
      <CoinImage src={coinData.image.large} alt={coinData.name} />
      <CoinName>{coinData.name}</CoinName>
      <CoinSymbol>{coinData.symbol.toUpperCase()}</CoinSymbol>
      <CoinPrice>
        Price: ${coinData.market_data.current_price.usd.toFixed(2)}
      </CoinPrice>
      <CoinDescription>{coinData.description.en}</CoinDescription>
    </CoinDetailsContainer>
  );
};

export default CoinDetails;

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

const CoinDescription = styled.p`
  font-size: 1rem;
  margin-top: 20px;
  color: #333;
  text-align: justify;
`;