import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Pricing = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [searchError, setSearchError] = useState('');

  const fetchCoinSuggestions = async (searchQuery) => {
    if (!searchQuery) {
      setSuggestions([]);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/search', {
        params: { query: searchQuery },
      });
      setSuggestions(response.data.coins.slice(0, 5));
      setLoading(false);
    } catch (err) {
      setError('Error fetching suggestions');
      setLoading(false);
    }
  };

  const fetchCoinDetails = async (coinId) => {
    if (!coinId) return;

    setLoading(true);
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd',
          ids: coinId,
        },
      });
      setCoins(response.data);
      setSuggestions([]);
      setLoading(false);
    } catch (err) {
      setError('Error fetching data');
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const searchQuery = e.target.value.trim();
    setQuery(searchQuery);
    setSearchError('');
    fetchCoinSuggestions(searchQuery);
  };

  const handleSuggestionClick = (coinId) => {
    setQuery('');
    fetchCoinDetails(coinId);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (!query) {
        setSearchError('No cryptocurrency searched.');
        return;
      }
      setSearchError('');
    }
  };

  return (
    <PageContainer>
      <SearchSection>
        <SearchInput
          type="text"
          placeholder="Search for a cryptocurrency..."
          value={query}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        {searchError && <ErrorText>{searchError}</ErrorText>}
        {suggestions.length > 0 && (
          <SuggestionsList>
            {suggestions.map((coin) => (
              <SuggestionItem key={coin.id} onClick={() => handleSuggestionClick(coin.id)}>
                {coin.name} ({coin.symbol.toUpperCase()})
              </SuggestionItem>
            ))}
          </SuggestionsList>
        )}
      </SearchSection>

      {loading && <LoadingText>Loading...</LoadingText>}
      {error && <ErrorText>{error}</ErrorText>}

      {!loading && !error && coins.length > 0 && (
        <CoinTable>
          <thead>
            <tr>
              <TableHeader>Coin</TableHeader>
              <TableHeader>Price (USD)</TableHeader>
              <TableHeader>24h Change</TableHeader>
              <TableHeader>Market Cap</TableHeader>
            </tr>
          </thead>

          
          <tbody>
            
            {coins.map((coin) => (
              <TableRow key={coin.id}>
                <TableData>{coin.name}</TableData>
                <TableData>${coin.current_price.toFixed(4)}</TableData>
                <TableData
                  className={coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </TableData>
                <TableData>${coin.market_cap.toLocaleString()}</TableData>
              </TableRow>
            ))}
          </tbody>
        </CoinTable>
      )}
    </PageContainer>
  );
};

export default Pricing;

// Styled Components
const PageContainer = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
  background-color: #f9f9f9;
  background-image: url('https://github.com/piyush-eon/react-crypto-tracker/blob/master/public/banner2.jpg?raw=true');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 80%;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #ffffff;
`;

const SuggestionsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 10px;
  width: 100%;
  max-width: 400px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: left;
`;

const SuggestionItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const LoadingText = styled.p`
  font-size: 1.2rem;
  color: #333;
`;

const ErrorText = styled.p`
  font-size: 0.9rem;
  color: red;
  margin-top: 5px;
`;

const CoinTable = styled.table`
  width: 100%;
  max-width: 800px;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableData = styled.td`
  padding: 10px;
  text-align: left;
  color : white;
  &.positive {
    color: green;
  }

  &.negative {
    color: red;
  }
`;