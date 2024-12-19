import React, { useState } from 'react';
import styled from 'styled-components';

const WishlistContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 40px;
  text-align: center;
  margin-bottom: 30px;
  color: #333;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #0056b3;
  }
`;

const WishlistItem = styled.div`
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 15px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  text-align: left;
`;

const Wishlist = ({ wishlist, setWishlist }) => {
  const [sortOrder, setSortOrder] = useState('new');

  const sortedWishlist = [...wishlist].sort((a, b) => {
    return sortOrder === 'new' ? b.id - a.id : a.id - b.id;
  });

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <WishlistContainer>
      <Title>My Wishlist</Title>
      <Button onClick={() => setSortOrder(sortOrder === 'new' ? 'old' : 'new')}>
        Sort by: {sortOrder === 'new' ? 'Oldest' : 'Newest'}
      </Button>
      {sortedWishlist.length > 0 ? (
        sortedWishlist.map((item) => (
          <WishlistItem key={item.id}>
            <h3>{item.name}</h3>
            <p>Reward: {item.reward}</p>
            <p>Deadline: {new Date(item.deadline).toLocaleDateString()}</p>
            <Button onClick={() => removeFromWishlist(item.id)}>Remove</Button>
          </WishlistItem>
        ))
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </WishlistContainer>
  );
};

export default Wishlist;
