// import React, { useState } from "react";
// import styled from "styled-components";

// const Airdrop = () => {
//   const dummyData = [
//     {
//       id: 1,
//       AirdropName: "BlockMesh Network Airdrop",
//       TokenSymbol: "NaN",
//       AirdropWebsite: "https://app.blockmesh.xyz/register",
//       SocialMediaRequirement: "True",
//       ReferralProgram: "True",
//       AirdropStatus: "Active",
//       Description:
//         "Join the BlockMesh Network and receive free airdrop tokens. Participate by registering with your invite code, completing social media tasks, and referring friends to earn additional rewards.",
//     },
//   ];

//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredAirdrops, setFilteredAirdrops] = useState([]);
//   const [suggestions, setSuggestions] = useState([]);

//   const handleInputChange = (e) => {
//     const value = e.target.value.toLowerCase().trim();
//     setSearchTerm(value);

//     if (value === "") {
//       setSuggestions([]);
//       setFilteredAirdrops([]);
//       return;
//     }

//     const matches = dummyData.filter((airdrop) =>
//       airdrop.AirdropName.toLowerCase().includes(value)
//     );

//     setSuggestions(matches);
//   };

//   const handleSearchClick = () => {
//     const matches = dummyData.filter((airdrop) =>
//       airdrop.AirdropName.toLowerCase().includes(searchTerm)
//     );

//     setFilteredAirdrops(matches);
//     setSuggestions([]);
//   };

//   const handleSuggestionClick = (airdrop) => {
//     setSearchTerm(airdrop.AirdropName);
//     setFilteredAirdrops([airdrop]);
//     setSuggestions([]);
//   };

//   return (
//     <Container>
//       <SearchSection>
//         <SearchContainer>
//           <Input
//             type="text"
//             placeholder="Search for airdrop project..."
//             value={searchTerm}
//             onChange={handleInputChange}
//           />
//           <Button onClick={handleSearchClick}>SEARCH</Button>
//         </SearchContainer>
//       </SearchSection>

//       {suggestions.length > 0 && (
//         <SuggestionList>
//           {suggestions.map((airdrop) => (
//             <SuggestionItem
//               key={airdrop.id}
//               onClick={() => handleSuggestionClick(airdrop)}
//             >
//               {airdrop.AirdropName}
//             </SuggestionItem>
//           ))}
//         </SuggestionList>
//       )}

//       {filteredAirdrops.length > 0 && (
//         <ResultsContainer>
//           {filteredAirdrops.map((airdrop) => (
//             <ProjectCard key={airdrop.id}>
//               <h3>{airdrop.AirdropName}</h3>
//               <p>
//                 <strong>Description:</strong> {airdrop.Description}
//               </p>
//               <p>
//                 <strong>Status:</strong> {airdrop.AirdropStatus}
//               </p>
//               <a
//                 href={airdrop.AirdropWebsite}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Join Airdrop
//               </a>
//             </ProjectCard>
//           ))}
//         </ResultsContainer>
//       )}

//       {filteredAirdrops.length === 0 && searchTerm !== "" && (
//         <NoResults>No results found</NoResults>
//       )}
//     </Container>
//   );
// };

// export default Airdrop;

// /* Styled Components */
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
//   height: calc(100vh - 60px - 40px); /* Space between header and footer */
//   padding: 0 20px;
//   box-sizing: border-box;
//   background-color: #f8f9fa;
// `;

// const SearchSection = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   margin-top: 30px; /* Space below the header */
// `;

// const SearchContainer = styled.div`
//   display: flex;
//   width: 50%; /* Search bar width - adjusts to screen size */
//   max-width: 600px; /* Limits maximum width */
// `;

// const Input = styled.input`
//   flex: 1;
//   padding: 12px 15px;
//   border: 1px solid #ccc;
//   border-radius: 6px 0 0 6px;
//   font-size: 1rem;
//   outline: none;
// `;

// const Button = styled.button`
//   padding: 12px 20px;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 0 6px 6px 0;
//   cursor: pointer;
//   font-size: 1rem;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const SuggestionList = styled.ul`
//   list-style: none;
//   width: 50%;
//   max-width: 600px;
//   margin: 10px 0 0;
//   padding: 0;
//   background-color: white;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   overflow-y: auto;
//   max-height: 200px;
// `;

// const SuggestionItem = styled.li`
//   padding: 10px;
//   cursor: pointer;
//   &:hover {
//     background-color: #f0f0f0;
//   }
// `;

// const ResultsContainer = styled.div`
//   margin-top: 20px;
//   width: 100%;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 20px;
// `;

// const ProjectCard = styled.div`
//   background: white;
//   padding: 15px;
//   border: 1px solid #ddd;
//   border-radius: 8px;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s;

//   &:hover {
//     transform: translateY(-5px);
//   }

//   h3 {
//     margin-bottom: 10px;
//     color: #007bff;
//   }

//   p {
//     margin: 5px 0;
//     color: #333;
//   }

//   a {
//     display: inline-block;
//     margin-top: 10px;
//     color: #007bff;
//     text-decoration: none;

//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

// const NoResults = styled.p`
//   color: #888;
//   margin-top: 20px;
// `;



// import React, { useState } from "react";
// import styled from "styled-components";

// const Airdrop = () => {
//   const dummyData = [
//     {
//       id: 1,
//       AirdropName: "BlockMesh Network Airdrop",
//       AirdropWebsite: "https://app.blockmesh.xyz/register",
//       AirdropStatus: "Active",
//       Description:
//         "Join the BlockMesh Network and receive free airdrop tokens. Participate by registering with your invite code, completing social media tasks, and referring friends to earn additional rewards.",
//     },
//     // Add more dummy data here...
//   ];

//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredAirdrops, setFilteredAirdrops] = useState([]);
//   const [suggestions, setSuggestions] = useState([]);

//   const handleInputChange = (e) => {
//     const value = e.target.value.toLowerCase().trim();
//     setSearchTerm(value);

//     if (value === "") {
//       setSuggestions([]);
//       setFilteredAirdrops([]);
//       return;
//     }

//     const matches = dummyData.filter((airdrop) =>
//       airdrop.AirdropName.toLowerCase().includes(value)
//     );
//     setSuggestions(matches);
//   };

//   const handleSearchClick = () => {
//     const matches = dummyData.filter((airdrop) =>
//       airdrop.AirdropName.toLowerCase().includes(searchTerm)
//     );
//     setFilteredAirdrops(matches);
//     setSuggestions([]);
//   };

//   const handleSuggestionClick = (airdrop) => {
//     setSearchTerm(airdrop.AirdropName);
//     setFilteredAirdrops([airdrop]);
//     setSuggestions([]);
//   };

//   return (
//     <Container>
//       <Content>
//         <SearchContainer>
//           <Input
//             type="text"
//             placeholder="Search for airdrop project..."
//             value={searchTerm}
//             onChange={handleInputChange}
//           />
//           <Button onClick={handleSearchClick}>SEARCH</Button>
//         </SearchContainer>

//         {suggestions.length > 0 && (
//           <SuggestionList>
//             {suggestions.map((airdrop) => (
//               <SuggestionItem
//                 key={airdrop.id}
//                 onClick={() => handleSuggestionClick(airdrop)}
//               >
//                 {airdrop.AirdropName}
//               </SuggestionItem>
//             ))}
//           </SuggestionList>
//         )}

//         {filteredAirdrops.length > 0 && (
//           <ResultsContainer>
//             {filteredAirdrops.map((airdrop) => (
//               <ProjectCard key={airdrop.id}>
//                 <h3>{airdrop.AirdropName}</h3>
//                 <p>{airdrop.Description}</p>
//                 <a
//                   href={airdrop.AirdropWebsite}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Join Airdrop
//                 </a>
//               </ProjectCard>
//             ))}
//           </ResultsContainer>
//         )}

//         {filteredAirdrops.length === 0 && searchTerm !== "" && (
//           <NoResults>No results found</NoResults>
//         )}
//       </Content>
//     </Container>
//   );
// };

// export default Airdrop;

// /* Styled Components */
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   flex-grow: 1; /* Ensures it takes up the remaining space */
//   width: 100%;
//   height: calc(100vh - 60px - 40px); /* Subtract header and footer height */
//   padding: 20px;
//   box-sizing: border-box;
//   background-color: #f8f9fa;
// `;

// const Content = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
// `;

// const SearchContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   max-width: 800px;
//   margin-bottom: 20px;
// `;

// const Input = styled.input`
//   flex: 1;
//   padding: 12px;
//   border: 1px solid #ccc;
//   border-radius: 6px 0 0 6px;
//   font-size: 1rem;
// `;

// const Button = styled.button`
//   padding: 12px 20px;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 0 6px 6px 0;
//   cursor: pointer;
//   font-size: 1rem;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const SuggestionList = styled.ul`
//   list-style: none;
//   width: 100%;
//   max-width: 800px;
//   margin: 0;
//   padding: 0;
//   background-color: white;
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
// `;

// const SuggestionItem = styled.li`
//   padding: 10px;
//   cursor: pointer;

//   &:hover {
//     background-color: #f0f0f0;
//   }
// `;

// const ResultsContainer = styled.div`
//   width: 100%;
//   max-width: 1200px;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 20px;
// `;

// const ProjectCard = styled.div`
//   background: white;
//   padding: 20px;
//   border: 1px solid #ddd;
//   border-radius: 8px;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//   text-align: center;

//   h3 {
//     color: #007bff;
//   }

//   a {
//     display: inline-block;
//     margin-top: 10px;
//     color: #007bff;
//     text-decoration: none;

//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

// const NoResults = styled.p`
//   margin-top: 20px;
//   color: red;
//   font-size: 1.2rem;
// `;


// import React, { useState } from "react";
// import styled from "styled-components";

// const AirdropPage = () => {
//   const dummyData = [
//     {
//       id: 1,
//       AirdropName: "BlockMesh Network Airdrop",
//       TokenSymbol: "NaN",
//       AirdropWebsite: "https://app.blockmesh.xyz/register",
//       SocialMediaRequirement: "True",
//       ReferralProgram: "True",
//       AirdropStatus: "Active",
//       Description:
//         "Join the BlockMesh Network and receive free airdrop tokens. Participate by registering with your invite code, completing social media tasks, and referring friends to earn additional rewards.",
//     },
//     {
//       id: 2,
//       AirdropName: "NodePay Airdrop",
//       TokenSymbol: "NaN",
//       AirdropWebsite: "https://app.nodepay.ai/register",
//       SocialMediaRequirement: "True",
//       ReferralProgram: "True",
//       AirdropStatus: "Active",
//       Description:
//         "Participate in the NodePay Airdrop by registering through the invite link, completing social media tasks, and referring others to earn additional rewards. Get free tokens and be part of the NodePay ecosystem.",
//     },
//   ];

//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredAirdrops, setFilteredAirdrops] = useState([]);
//   const [suggestions, setSuggestions] = useState([]);

//   const handleInputChange = (e) => {
//     const value = e.target.value.toLowerCase().trim();
//     setSearchTerm(value);

//     if (value === "") {
//       setSuggestions([]);
//       setFilteredAirdrops([]);
//       return;
//     }

//     const matches = dummyData.filter((airdrop) =>
//       airdrop.AirdropName.toLowerCase().includes(value)
//     );

//     setSuggestions(matches);
//   };

//   const handleSearchClick = () => {
//     const matches = dummyData.filter((airdrop) =>
//       airdrop.AirdropName.toLowerCase().includes(searchTerm)
//     );

//     setFilteredAirdrops(matches);
//     setSuggestions([]);
//   };

//   const handleSuggestionClick = (airdrop) => {
//     setSearchTerm(airdrop.AirdropName);
//     setFilteredAirdrops([airdrop]);
//     setSuggestions([]);
//   };

//   return (
//     <PageContainer>
//       <SearchSection>
//         <SearchInput
//           type="text"
//           placeholder="Search for airdrop project..."
//           value={searchTerm}
//           onChange={handleInputChange}
//         />
//         <SearchButton type="button" onClick={handleSearchClick}>
//           SEARCH
//         </SearchButton>
//       </SearchSection>

//       {suggestions.length > 0 && (
//         <SuggestionsList>
//           {suggestions.map((airdrop) => (
//             <SuggestionItem
//               key={airdrop.id}
//               onClick={() => handleSuggestionClick(airdrop)}
//             >
//               {airdrop.AirdropName}
//             </SuggestionItem>
//           ))}
//         </SuggestionsList>
//       )}

//       {filteredAirdrops.length > 0 && (
//         <ResultsContainer>
//           {filteredAirdrops.map((airdrop) => (
//             <ProjectDetails key={airdrop.id}>
//               <h3>{airdrop.AirdropName}</h3>
//               <p>
//                 <strong>Description:</strong> {airdrop.Description}
//               </p>
//               <p>
//                 <strong>Status:</strong> {airdrop.AirdropStatus}
//               </p>
//               <p>
//                 <strong>Referral Program:</strong> {airdrop.ReferralProgram}
//               </p>
//               <p>
//                 <strong>Social Media Requirement:</strong> {airdrop.SocialMediaRequirement}
//               </p>
//               <AirdropLink
//                 href={airdrop.AirdropWebsite}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Join Airdrop
//               </AirdropLink>
//             </ProjectDetails>
//           ))}
//         </ResultsContainer>
//       )}

//       {filteredAirdrops.length === 0 && searchTerm !== "" && (
//         <NoResults>No results found</NoResults>
//       )}
//     </PageContainer>
//   );
// };

// export default AirdropPage;

// // Styled Components
// const PageContainer = styled.div`
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   font-family: Arial, sans-serif;
//   padding: 0 20px;
//   background-image: url('https://github.com/piyush-eon/react-crypto-tracker/blob/master/public/banner2.jpg?raw=true');
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
// `;


// const SearchSection = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// const SearchInput = styled.input`
//   width: 60%;
//   padding: 12px;
//   margin-right: 10px;
//   font-size: 1rem;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const SearchButton = styled.button`
//   padding: 12px 20px;
//   font-size: 1rem;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const SuggestionsList = styled.ul`
//   list-style: none;
//   margin: 10px auto;
//   padding: 0;
//   max-width: 70%;
// `;

// const SuggestionItem = styled.li`
//   background: #f9f9f9;
//   padding: 10px;
//   margin: 5px 0;
//   cursor: pointer;
//   border: 1px solid #ddd;
//   border-radius: 4px;

//   &:hover {
//     background: #f1f1f1;
//   }
// `;

// const ResultsContainer = styled.div`
//   margin: 20px auto;
//   max-width: 70%;
// `;

// const ProjectDetails = styled.div`
//   background: #f9f9f9;
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   padding: 20px;
//   margin-bottom: 20px;

//   h3 {
//     margin: 0 0 10px;
//   }

//   p {
//     margin: 5px 0;
//   }
// `;

// const AirdropLink = styled.a`
//   display: inline-block;
//   margin-top: 10px;
//   padding: 8px 15px;
//   background-color: #28a745;
//   color: white;
//   text-decoration: none;
//   border-radius: 4px;

//   &:hover {
//     background-color: #218838;
//   }
// `;

// const NoResults = styled.p`
//   color: #ff0000;
//   font-weight: bold;
//   margin-top: 20px;
// `;


// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';

// // Styled Components
// const PageContainer = styled.div`
//   background-image: url('https://github.com/piyush-eon/react-crypto-tracker/blob/master/public/banner2.jpg?raw=true');
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 20px;
// `;

// const AirdropContainer = styled.div`
//   padding: 20px;
//   max-width: 800px;
//   margin: auto;
//   text-align: center;
// `;

// const Title = styled.h2`
//   font-size: 40px;
//   margin-bottom: 30px;
//   color: #333;
// `;

// const SearchBar = styled.input`
//   width: 100%;
//   max-width: 400px;
//   padding: 15px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   font-size: 16px;
//   margin-bottom: 50px;
// `;

// const AirdropListContainer = styled.div`
//   width: 100%;
//   padding: 20px;
// `;

// const AirdropList = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//   gap: 20px;
// `;

// const AirdropItem = styled.div`
//   border: 1px solid #eee;
//   border-radius: 10px;
//   padding: 15px;
//   background-color: #f9f9f9;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   transition: transform 0.2s ease, box-shadow 0.2s ease;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
//   }
// `;

// const AirdropName = styled.h3`
//   margin: 0 0 10px;
//   color: #111;
// `;

// const AirdropDetails = styled.p`
//   margin: 5px 0;
//   color: #555;
// `;

// const ClaimLink = styled.a`
//   color: #007bff;
//   text-decoration: none;
//   font-weight: bold;

//   &:hover {
//     text-decoration: underline;
//     color: #0056b3;
//   }
// `;

// const Airdrop = () => {
//   const [airdrops, setAirdrops] = useState([]);
//   const [filteredAirdrops, setFilteredAirdrops] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetchAirdrops();
//   }, []);

//   const fetchAirdrops = async () => {
//     const mockData = [
//       { id: 1, name: "Uniswap V3 Rewards", reward: "400 UNI Tokens", deadline: "2024-12-31", link: "https://uniswap.org" },
//       { id: 2, name: "Aave Loyalty Program", reward: "50 AAVE Tokens", deadline: "2024-12-25", link: "https://aave.com" },
//       { id: 3, name: "Curve Governance Incentives", reward: "30 CRV Tokens", deadline: "2025-01-10", link: "https://curve.fi" },
//       { id: 4, name: "SushiSwap Community Giveaway", reward: "200 SUSHI Tokens", deadline: "2024-12-20", link: "https://sushi.com" },
//       { id: 5, name: "PancakeSwap Early Access", reward: "100 CAKE Tokens", deadline: "2025-01-15", link: "https://pancakeswap.finance" },
//       { id: 6, name: "Optimism Layer 2 Rollout", reward: "300 OP Tokens", deadline: "2024-12-28", link: "https://optimism.io" },
//       { id: 7, name: "Arbitrum Ecosystem Boost", reward: "150 ARB Tokens", deadline: "2024-12-30", link: "https://arbitrum.io" },
//       { id: 8, name: "Solana NFT Marketplace Airdrop", reward: "10 SOL Tokens", deadline: "2025-01-20", link: "https://solana.com" },
//       { id: 9, name: "Polygon zkEVM Incentives", reward: "200 MATIC Tokens", deadline: "2025-01-05", link: "https://polygon.technology" },
//       { id: 10, name: "Avalanche DeFi Grant", reward: "300 AVAX Tokens", deadline: "2025-02-01", link: "https://avax.network" },
//       { id: 11, name: "Stellar Network Rewards", reward: "100 XLM Tokens", deadline: "2025-01-10", link: "https://stellar.org" },
//       { id: 12, name: "Ripple Developer Program", reward: "250 XRP Tokens", deadline: "2025-01-15", link: "https://ripple.com" },
//       { id: 13, name: "Terra Community Growth Airdrop", reward: "150 LUNA Tokens", deadline: "2024-12-31", link: "https://terra.money" },
//       { id: 14, name: "Chainlink Oracle Rewards", reward: "75 LINK Tokens", deadline: "2025-01-25", link: "https://chain.link" },
//       { id: 15, name: "Cosmos Hub Support Incentives", reward: "120 ATOM Tokens", deadline: "2025-02-10", link: "https://cosmos.network" },
//       { id: 16, name: "NEAR Protocol Expansion", reward: "180 NEAR Tokens", deadline: "2025-01-22", link: "https://near.org" },
//       { id: 17, name: "Algorand Ecosystem Growth", reward: "200 ALGO Tokens", deadline: "2025-02-15", link: "https://algorand.com" },
//       { id: 18, name: "Filecoin Storage Airdrop", reward: "5 FIL Tokens", deadline: "2025-03-01", link: "https://filecoin.io" },
//       { id: 19, name: "Tezos Delegator Rewards", reward: "50 XTZ Tokens", deadline: "2025-02-28", link: "https://tezos.com" },
//       { id: 20, name: "EOS Token Airdrop Campaign", reward: "100 EOS Tokens", deadline: "2025-03-15", link: "https://eos.io" },
//     ];
//     setAirdrops(mockData);
//     setFilteredAirdrops(mockData.slice(0, 4)); // Show only first 4 airdrops initially
//   };

//   const handleSearch = (event) => {
//     setSearch(event.target.value);

//     // Filter the airdrops based on the search input
//     const filtered = airdrops.filter((airdrop) =>
//       airdrop.name.toLowerCase().includes(event.target.value.toLowerCase())
//     );

//     // Show all filtered results after searching
//     setFilteredAirdrops(filtered);
//   };

//   return (
//     <PageContainer>
//       <AirdropContainer>
//         <Title>Crypto Airdrops</Title>
//         <SearchBar
//           type="text"
//           placeholder="Search airdrops..."
//           value={search}
//           onChange={handleSearch}
//         />
//       </AirdropContainer>

//       {/* Filtered Airdrop List */}
//       <AirdropListContainer>
//         {filteredAirdrops.length > 0 ? (
//           <AirdropList>
//             {filteredAirdrops.map((airdrop) => (
//               <AirdropItem key={airdrop.id}>
//                 <AirdropName>{airdrop.name}</AirdropName>
//                 <AirdropDetails>Reward: {airdrop.reward}</AirdropDetails>
//                 <AirdropDetails>Deadline: {new Date(airdrop.deadline).toLocaleDateString()}</AirdropDetails>
//                 <ClaimLink href={airdrop.link} target="_blank" rel="noopener noreferrer">
//                   Claim Now
//                 </ClaimLink>
//               </AirdropItem>
//             ))}
//           </AirdropList>
//         ) : (
//           <p>No airdrops found.</p>
//         )}
//       </AirdropListContainer>
//     </PageContainer>
//   );
// };

// export default Airdrop;


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const CoinDetails = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [chartData, setChartData] = useState({});
  const [timeRange, setTimeRange] = useState("30");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch Coin Data and Price History
  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const [details, history] = await Promise.all([
        axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`),
        axios.get(
          `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart`,
          { params: { vs_currency: "usd", days: timeRange } }
        ),
      ]);

      setCoinData(details.data);
      setChartData(formatChartData(history.data));
    } catch (err) {
      setError("Failed to fetch data. Please try again later.");
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [coinId, timeRange]);

  const formatChartData = (data) => ({
    labels: data.prices.map((price) => new Date(price[0]).toLocaleDateString()),
    datasets: [
      {
        label: `Price (Last ${timeRange} Days)`,
        data: data.prices.map((price) => price[1]),
        borderColor: "rgba(255, 206, 86, 1)",
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  });

  const handleTimeRangeChange = (range) => {
    if (timeRange !== range) {
      setTimeRange(range);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!coinData) return <div>No data available</div>;

  return (
    <CoinDetailsContainer>
      <CoinImage src={coinData.image.large} alt={coinData.name} />
      <CoinName>{coinData.name}</CoinName>
      <CoinSymbol>{coinData.symbol.toUpperCase()}</CoinSymbol>
      <CoinPrice>
        Price: ${coinData.market_data.current_price.usd.toFixed(2)}
      </CoinPrice>
      <TimeRangeSelector>
        <button onClick={() => handleTimeRangeChange("1")}>24 Hours</button>
        <button onClick={() => handleTimeRangeChange("30")}>30 Days</button>
        <button onClick={() => handleTimeRangeChange("180")}>6 Months</button>
      </TimeRangeSelector>
      <LineGraph>
        <Line data={chartData} />
      </LineGraph>
      <CoinDescription>
        <strong>Description: </strong>
        {coinData.description.en || "No description available"}
      </CoinDescription>
    </CoinDetailsContainer>
  );
};

export default CoinDetails;

// Styled Components
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

const TimeRangeSelector = styled.div`
  margin: 20px 0;
  button {
    margin: 0 10px;
    padding: 10px 20px;
    border: none;
    background-color: #6a11cb;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #ffcc00;
      color: black;
    }
  }
`;

const LineGraph = styled.div`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
`;

const CoinDescription = styled.p`
  font-size: 1rem;
  margin-top: 20px;
  color: #333;
  text-align: justify;
`;


