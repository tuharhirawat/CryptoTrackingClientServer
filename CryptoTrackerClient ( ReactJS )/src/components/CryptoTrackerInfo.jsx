import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Arial', sans-serif;
  padding: 10px;
  color: #fff;
  border-radius: 10px;
  width:80%;
//   max-width: 900px;
  margin: 20px auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
  color: gold;
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  color: gold;
  font-size: 2rem;
  border-bottom: 3px solid gold;
  padding-bottom: 10px;
`;

const Paragraph = styled.p`
  line-height: 1.8;
  font-size: 1.1rem;
  margin-top: 15px;
`;

const List = styled.ul`
  padding-left: 25px;
  font-size: 1.1rem;
  margin-top: 15px;
`;

const ListItem = styled.li`
  margin: 12px 0;
`;


const CryptoTrackerInfo = () => {
  return (
    <Container>
      <Title>
        <h1>Welcome to Crypto Tracker</h1> 
        <p>Your Guide To Free Airdrops & Crypto Earning Oppurtunities</p>
        </Title>
      
      <Section>
        <Subtitle>What Are Crypto Airdrops?</Subtitle>
        <Paragraph>A crypto airdrop is a distribution of free cryptocurrency tokens by a blockchain project to promote its platform, build community engagement, and reward loyal users.</Paragraph>
        <Paragraph>These tokens are often distributed for free but can require minimal tasks like social media engagement or wallet holding.</Paragraph>
      </Section>

      <Section>
        <Subtitle>How Do Airdrops Work?</Subtitle>
        <List>
          <ListItem><strong>Announcement:</strong> Projects announce airdrops on their official platforms.</ListItem>
          <ListItem><strong>Eligibility:</strong> Requirements may include signing up, social media interaction, or holding tokens.</ListItem>
          <ListItem><strong>Snapshot & Distribution:</strong> Tokens are distributed after meeting eligibility criteria.</ListItem>
          <ListItem><strong>Types:</strong> Standard, Bounty, Holder, and Exclusive Airdrops.</ListItem>
        </List>
      </Section>

      <Section>
        <Subtitle>Benefits of Participating in Airdrops</Subtitle>
        <List>
          <ListItem>Get Free Tokens without Investment</ListItem>
          <ListItem>Discover Emerging Crypto Projects</ListItem>
          <ListItem>Expand Your Cryptocurrency Portfolio</ListItem>
          <ListItem>Potential for Token Value Appreciation</ListItem>
          <ListItem>Support Decentralized Communities</ListItem>
        </List>
      </Section>

      <Section>
        <Subtitle>Why Choose Crypto Tracker?</Subtitle>
        <List>
          <ListItem>Regular Updates on New Airdrops</ListItem>
          <ListItem>Comprehensive and Easy-to-Follow Guides</ListItem>
          <ListItem>Exclusive Airdrop Listings</ListItem>
          <ListItem>Expert Market Insights</ListItem>
          <ListItem>Engaged Crypto Community</ListItem>
        </List>
      </Section>

      <Section>
        <Subtitle>Get Started with Crypto Tracker</Subtitle>
        <List>
          <ListItem>Create a Free Account</ListItem>
          <ListItem>Browse the Latest Airdrops</ListItem>
          <ListItem>Follow Steps to Participate</ListItem>
          <ListItem>Track Your Earnings</ListItem>
          <ListItem>Join Our Community to always stay updated</ListItem>
        </List>
      </Section>

      <Section>
        <Paragraph> Join Crypto Tracker today and start exploring free token opportunities. Our platform ensures you stay updated with the latest airdrop events while providing expert insights and a supportive community.</Paragraph>
      </Section>

    </Container>
  );
};

export default CryptoTrackerInfo;
