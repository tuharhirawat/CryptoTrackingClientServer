
import React from "react";
import styled from "styled-components";

export const ListCards = ({ airdrops }) => {
  return (
    <CardsContainer>
      {airdrops.map((airdrop) => (
        <Card key={airdrop.id}>
          <h3>{airdrop.AirdropName}</h3>
          <p>
            <strong>Status:</strong> {airdrop.AirdropStatus}
          </p>
          <p>
            <strong>Referral Program:</strong>{" "}
            {airdrop.ReferralProgram === "True" ? "Available" : "Unavailable"}
          </p>
          <AirdropLink href={airdrop.AirdropWebsite} target="_blank">
            Join Airdrop
          </AirdropLink>
        </Card>
      ))}
    </CardsContainer>
  );
};

// export default ListCards;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const Card = styled.div`
  width: 250px;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  h3 {
    margin: 0 0 10px;
  }

  p {
    margin: 5px 0;
  }
`;

const AirdropLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;
