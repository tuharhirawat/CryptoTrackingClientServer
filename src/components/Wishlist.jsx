import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Wishlist = ({ currentUser }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5232/api/Wishlist?userId=${currentUser?.id}`
        );
        setWishlist(response.data);
      } catch (error) {
        console.error("Error fetching wishlist data:", error);
      }
    };

    if (currentUser?.id) {
      fetchWishlist();
    }
  }, [currentUser]);

  const handleRemoveFromWishlist = async (wishlistId) => {
    try {
      await axios.delete(`http://localhost:5232/api/Wishlist/${wishlistId}`);
      setWishlist(wishlist.filter((item) => item.wishlistId !== wishlistId));
    } catch (error) {
      console.error("Error removing from wishlist:", error);
    }
  };

  return (
    <WishlistContainer>
      <Heading>Your Wishlist</Heading>
      {wishlist.length > 0 ? (
        <WishlistGrid>
          {wishlist.map((item) => (
            <WishlistCard key={item.wishlistId}>
              <h3>{item.airdropName}</h3>
              <p>
                <strong>Link:</strong> <AirdropLink href={item.airdropLink} target="_blank">Visit Airdrop</AirdropLink>
              </p>
              <RemoveButton onClick={() => handleRemoveFromWishlist(item.wishlistId)}>
                Remove from Wishlist
              </RemoveButton>
            </WishlistCard>
          ))}
        </WishlistGrid>
      ) : (
        <NoItemsMessage>No items in your wishlist.</NoItemsMessage>
      )}
    </WishlistContainer>
  );
};

export default Wishlist;

const WishlistContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: black;
  color: white;
  font-family: Arial, sans-serif;
`;

const Heading = styled.h1`
  margin-bottom: 20px;
  color: gold;
`;

const WishlistGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const WishlistCard = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid #444;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(255, 255, 255, 0.3);
  }

  h3 {
    margin-bottom: 10px;
    color: gold;
  }

  p {
    margin-bottom: 10px;
  }
`;

const AirdropLink = styled.a`
  color: gold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const RemoveButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darkred;
  }
`;

const NoItemsMessage = styled.p`
  font-size: 1.2rem;
  color: white;
  margin-top: 20px;
`;
