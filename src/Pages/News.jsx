import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCryptoNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'cryptocurrency',
            sortBy: 'publishedAt',
            apiKey: '06ef5516cde44ce18d1155439de795d0',
          },
        });

        setNews(response.data.articles);
        setLoading(false);
      } catch (error) {
        setError('Error fetching news');
        setLoading(false);
      }
    };

    fetchCryptoNews();
  }, []);

  return (
    <PageContainer>
      <NewsContainer>
        <Title>Latest Cryptocurrency News</Title>

        {loading && <Message>Loading news...</Message>}
        {error && <Message>{error}</Message>}

        {!loading && !error && (
          <NewsList>
            {news.map((article, index) => (
              <NewsItem key={index}>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.urlToImage && (
                    <NewsImage src={article.urlToImage} alt={article.title} />
                  )}
                  <NewsContent>
                    <NewsTitle>{article.title}</NewsTitle>
                    <NewsDescription>
                      {article.description || 'No description available'}
                    </NewsDescription>
                    <NewsSource>Source: {article.source.name}</NewsSource>
                  </NewsContent>
                </a>
              </NewsItem>
            ))}
          </NewsList>
        )}
      </NewsContainer>
    </PageContainer>
  );
};

export default News;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1; /* Take full available space */
  margin: 0;
  padding: 0;
  height: calc(100vh - 60px - 40px); /* Subtract header and footer height */
  width: 100%; /* Take full width */
  box-sizing: border-box;
`;

const NewsContainer = styled.div`
  flex: 1; /* Fill all available space */
  overflow-y: auto; /* Scrollable if content overflows */
  padding: 20px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Message = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
`;

const NewsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const NewsItem = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

const NewsImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const NewsContent = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

const NewsTitle = styled.h3`
  font-size: 1.1rem;
  color: #333;
  margin: 0 0 10px 0;
  font-weight: bold;
`;

const NewsDescription = styled.p`
  font-size: 0.95rem;
  color: #555;
  margin: 0 0 10px 0;
  line-height: 1.4;
`;

const NewsSource = styled.span`
  font-size: 0.8rem;
  color: #888;
  margin-top: auto;
`;
