import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 0.75rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #0056b3;
  }
`;

const AirdropList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 2rem;
`;

const AirdropItem = styled.li`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 1rem;
  background: #ffffff;
`;

const MyAirdrops = ({ user }) => {
  const [airdropName, setAirdropName] = useState("");
  const [airdropType, setAirdropType] = useState("");
  const [airdropLink, setAirdropLink] = useState("");
  const [signupVia, setSignupVia] = useState("");
  const [airdropList, setAirdropList] = useState(() => {
    const savedData = localStorage.getItem(`airdrops_${user}`);
    return savedData ? JSON.parse(savedData) : [];
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAirdrop = { name: airdropName, type: airdropType, link: airdropLink, signupVia };
    const updatedList = [...airdropList, newAirdrop];
    setAirdropList(updatedList);
    setAirdropName("");
    setAirdropType("");
    setAirdropLink("");
    setSignupVia("");
    localStorage.setItem(`airdrops_${user}`, JSON.stringify(updatedList));
  };

  return (
    <Container>
      <Title>My Airdrops</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter Airdrop Name"
          value={airdropName}
          onChange={(e) => setAirdropName(e.target.value)}
          required
        />
        <Select value={airdropType} onChange={(e) => setAirdropType(e.target.value)} required>
          <option value="" disabled>
            Select Airdrop Type
          </option>
          <option value="Crypto">Crypto</option>
          <option value="NFT">NFT</option>
          <option value="Token">Token</option>
        </Select>
        <Input
          type="url"
          placeholder="Enter Airdrop Link"
          value={airdropLink}
          onChange={(e) => setAirdropLink(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Signup Via"
          value={signupVia}
          onChange={(e) => setSignupVia(e.target.value)}
          required
        />
        <Button type="submit">Add Airdrop</Button>
      </Form>
      <AirdropList>
        {airdropList.map((airdrop, index) => (
          <AirdropItem key={index}>
            <strong>{airdrop.name}</strong> - {airdrop.type}
            <div>
              <a href={airdrop.link} target="_blank" rel="noopener noreferrer">
                Airdrop Link
              </a>
            </div>
            <div>Signup Via: {airdrop.signupVia}</div>
          </AirdropItem>
        ))}
      </AirdropList>
    </Container>
  );
};

export default MyAirdrops;
