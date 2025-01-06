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
      <Overlay>
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
      </Overlay>
    </PageContainer>
  );
};

export default News;

// const BACKGROUND_IMAGE_URL = 'https://github.com/piyush-eon/react-crypto-tracker/blob/master/public/banner2.jpg?raw=true';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  margin-top: 60px;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const NewsContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  text-align: center;
  color: #fff;
  font-size: 2rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Message = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const NewsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
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

  @media (max-width: 768px) {
    height: 150px;
  }
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

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const NewsDescription = styled.p`
  font-size: 0.95rem;
  color: #555;
  margin: 0 0 10px 0;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const NewsSource = styled.span`
  font-size: 0.8rem;
  color: #888;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;
