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

// const AirdropPage = () => {
  // const dummyData = [
  //   {
  //     id: 1,
  //     AirdropName: "BlockMesh Network Airdrop",
  //     TokenSymbol: "NaN",
  //     AirdropWebsite: "https://app.blockmesh.xyz/register",
  //     SocialMediaRequirement: "True",
  //     ReferralProgram: "True",
  //     AirdropStatus: "Active",
  //     Description:
  //       "Join the BlockMesh Network and receive free airdrop tokens. Participate by registering with your invite code, completing social media tasks, and referring friends to earn additional rewards.",
  //   },
  //   {
  //     id: 2,
  //     AirdropName: "NodePay Airdrop",
  //     TokenSymbol: "NaN",
  //     AirdropWebsite: "https://app.nodepay.ai/register",
  //     SocialMediaRequirement: "True",
  //     ReferralProgram: "True",
  //     AirdropStatus: "Active",
  //     Description:
  //       "Participate in the NodePay Airdrop by registering through the invite link, completing social media tasks, and referring others to earn additional rewards. Get free tokens and be part of the NodePay ecosystem.",
  //   },
  //   {
  //     id: 3,
  //     AirdropName: "BlockMesh Network Airdrop",
  //     TokenSymbol: "NaN",
  //     AirdropWebsite: "https://app.blockmesh.xyz/register?invite_code=c3f7ddd9-1707-4605-8fcd-ca6db305e071",
  //     SocialMediaRequirement: "True",
  //     ReferralProgram: "True",
  //     AirdropStatus: "Active",
  //     Description: "Join the BlockMesh Network and receive free airdrop tokens. Participate by registering with your invite code, completing social media tasks, and referring friends to earn additional rewards."
  //   },
  //   {
  //     id: 4,
  //     AirdropName: "NodePay Mining Airdrop",
  //     TokenSymbol: "NaN",
  //     AirdropWebsite: "https://app.nodepay.ai/register?ref=6c2pKkqo9ZYZATv",
  //     SocialMediaRequirement: "True",
  //     ReferralProgram: "True",
  //     AirdropStatus: "Active",
  //     Description: "Participate in the NodePay Airdrop by registering through the invite link, completing social media tasks, and referring others to earn additional rewards. Get free tokens and be part of the NodePay ecosystem."
  //   },
  //   {
  //     id: 5,
  //     AirdropName: "Pipe Network Airdrop",
  //     TokenSymbol: "NaN",
  //     AirdropWebsite: "https://pipecdn.app/signup?ref=dHVzaGFyaG",
  //     SocialMediaRequirement: "True",
  //     ReferralProgram: "True",
  //     AirdropStatus: "Active",
  //     Description: "Join the NodePay Airdrop by signing up via the referral link, completing social media requirements, and inviting friends to earn rewards. Gain free tokens and expand your NodePay network."
  //   },
  //   {
  //     id : 6,
  //     AirdropName: "OasisAI Airdrop",
  //     TokenSymbol: "NaN",
  //     AirdropWebsite: "https://r.distribute.ai/godhawkeye",
  //     SocialMediaRequirement: "True",
  //     ReferralProgram: "True",
  //     AirdropStatus: "Active",
  //     Description: "Take part in the OasisAI Airdrop by signing up through the referral link, completing social media tasks, and referring others to earn tokens. Join OasisAI to unlock rewards and grow your network."
  //   },
  //   {
  //     id : 7,
  //     AirdropName: "KaisarNetwork Airdrop",
  //     TokenSymbol: "NaN",
  //     AirdropWebsite: "https://zero.kaisar.io/register?ref=omfaPs346",
  //     SocialMediaRequirement: "True",
  //     ReferralProgram: "True",
  //     AirdropStatus: "Active",
  //     Description: "Participate in the KaisarNetwork Airdrop by registering through the referral link, completing social media tasks, and referring friends. Unlock free tokens and enhance your participation in the KaisarNetwork community."
  //   },
  //   {
  //     id: 8,
  //     AirdropName: "KaisarNetwork",
  //     TokenSymbol: "NaN",
  //     AirdropWebsite: "https://zero.kaisar.io/register?ref=omfaPs346",
  //     SocialMediaRequirement: "True",
  //     ReferralProgram: "True",
  //     AirdropStatus: "Active",
  //     Description: "Participate in the KaisarNetwork Airdrop by registering through the referral link, completing social media tasks, and referring friends. Unlock free tokens and enhance your participation in the KaisarNetwork community."
  //   },
  //   {
  //     id: 9,
  //     AirdropName: "KaisarNetwAirdrop",
  //     TokenSymbol: "NaN",
  //     AirdropWebsite: "https://zero.kaisar.io/register?ref=omfaPs346",
  //     SocialMediaRequirement: "True",
  //     ReferralProgram: "True",
  //     AirdropStatus: "Active",
  //     Description : "Participate in the KaisarNetwork Airdrop by registering through the referral link, completing social media tasks, and referring friends. Unlock free tokens and enhance your participation in the KaisarNetwork community."
  //   }
  // ];

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


import React, { useState } from "react";
import styled from "styled-components";

const Airdrop = ({ addToWatchlist }) => {
  const dummyData = [
    {
      id: 1,
      AirdropName: "BlockMesh Network Airdrop",
      TokenSymbol: "NaN",
      AirdropWebsite: "https://app.blockmesh.xyz/register",
      SocialMediaRequirement: "True",
      ReferralProgram: "True",
      AirdropStatus: "Active",
      Description:
        "Join the BlockMesh Network and receive free airdrop tokens. Participate by registering with your invite code, completing social media tasks, and referring friends to earn additional rewards.",
    },
    {
      id: 2,
      AirdropName: "NodePay Airdrop",
      TokenSymbol: "NaN",
      AirdropWebsite: "https://app.nodepay.ai/register",
      SocialMediaRequirement: "True",
      ReferralProgram: "True",
      AirdropStatus: "Active",
      Description:
        "Participate in the NodePay Airdrop by registering through the invite link, completing social media tasks, and referring others to earn additional rewards. Get free tokens and be part of the NodePay ecosystem.",
    },
    {
      id: 3,
      AirdropName: "BlockMesh Network Airdrop",
      TokenSymbol: "NaN",
      AirdropWebsite: "https://app.blockmesh.xyz/register?invite_code=c3f7ddd9-1707-4605-8fcd-ca6db305e071",
      SocialMediaRequirement: "True",
      ReferralProgram: "True",
      AirdropStatus: "Active",
      Description: "Join the BlockMesh Network and receive free airdrop tokens. Participate by registering with your invite code, completing social media tasks, and referring friends to earn additional rewards."
    },
    {
      id: 4,
      AirdropName: "NodePay Mining Airdrop",
      TokenSymbol: "NaN",
      AirdropWebsite: "https://app.nodepay.ai/register?ref=6c2pKkqo9ZYZATv",
      SocialMediaRequirement: "True",
      ReferralProgram: "True",
      AirdropStatus: "Active",
      Description: "Participate in the NodePay Airdrop by registering through the invite link, completing social media tasks, and referring others to earn additional rewards. Get free tokens and be part of the NodePay ecosystem."
    },
    {
      id: 5,
      AirdropName: "Pipe Network Airdrop",
      TokenSymbol: "NaN",
      AirdropWebsite: "https://pipecdn.app/signup?ref=dHVzaGFyaG",
      SocialMediaRequirement: "True",
      ReferralProgram: "True",
      AirdropStatus: "Active",
      Description: "Join the NodePay Airdrop by signing up via the referral link, completing social media requirements, and inviting friends to earn rewards. Gain free tokens and expand your NodePay network."
    },
    {
      id : 6,
      AirdropName: "OasisAI Airdrop",
      TokenSymbol: "NaN",
      AirdropWebsite: "https://r.distribute.ai/godhawkeye",
      SocialMediaRequirement: "True",
      ReferralProgram: "True",
      AirdropStatus: "Active",
      Description: "Take part in the OasisAI Airdrop by signing up through the referral link, completing social media tasks, and referring others to earn tokens. Join OasisAI to unlock rewards and grow your network."
    },
    {
      id : 7,
      AirdropName: "KaisarNetwork Airdrop",
      TokenSymbol: "NaN",
      AirdropWebsite: "https://zero.kaisar.io/register?ref=omfaPs346",
      SocialMediaRequirement: "True",
      ReferralProgram: "True",
      AirdropStatus: "Active",
      Description: "Participate in the KaisarNetwork Airdrop by registering through the referral link, completing social media tasks, and referring friends. Unlock free tokens and enhance your participation in the KaisarNetwork community."
    },
    {
      id: 8,
      AirdropName: "KaisarNetwork",
      TokenSymbol: "NaN",
      AirdropWebsite: "https://zero.kaisar.io/register?ref=omfaPs346",
      SocialMediaRequirement: "True",
      ReferralProgram: "True",
      AirdropStatus: "Active",
      Description: "Participate in the KaisarNetwork Airdrop by registering through the referral link, completing social media tasks, and referring friends. Unlock free tokens and enhance your participation in the KaisarNetwork community."
    },
    {
      id: 9,
      AirdropName: "KaisarNetwAirdrop",
      TokenSymbol: "NaN",
      AirdropWebsite: "https://zero.kaisar.io/register?ref=omfaPs346",
      SocialMediaRequirement: "True",
      ReferralProgram: "True",
      AirdropStatus: "Active",
      Description : "Participate in the KaisarNetwork Airdrop by registering through the referral link, completing social media tasks, and referring friends. Unlock free tokens and enhance your participation in the KaisarNetwork community."
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAirdrops, setFilteredAirdrops] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase().trim();
    setSearchTerm(value);

    if (value === "") {
      setFilteredAirdrops([]);
      return;
    }

    const matches = dummyData.filter((airdrop) =>
      airdrop.AirdropName.toLowerCase().includes(value)
    );

    setFilteredAirdrops(matches);
  };

  return (
    <PageContainer>
      <SearchSection>
        <SearchInput
          type="text"
          placeholder="Search for airdrop project..."
          value={searchTerm}
          onChange={handleInputChange}
        />
      </SearchSection>

      {filteredAirdrops.length > 0 && (
        <ResultsContainer>
          {filteredAirdrops.map((airdrop) => (
            <ProjectDetails key={airdrop.id}>
              <h3>{airdrop.AirdropName}</h3>
              <p>
                <strong>Description:</strong> {airdrop.Description}
              </p>
              <p>
                <strong>Status:</strong> {airdrop.AirdropStatus}
              </p>
              <p>
                <strong>Referral Program:</strong> {airdrop.ReferralProgram}
              </p>
              <p>
                <strong>Social Media Requirement:</strong> {airdrop.SocialMediaRequirement}
              </p>
              <ActionsContainer>
                <AirdropLink
                  href={airdrop.AirdropWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Airdrop
                </AirdropLink>
                <WatchlistButton onClick={() => addToWatchlist(airdrop)}>
                  Add to Watchlist
                </WatchlistButton>
              </ActionsContainer>
            </ProjectDetails>
          ))}
        </ResultsContainer>
      )}

      {filteredAirdrops.length === 0 && searchTerm !== "" && (
        <NoResults>No results found</NoResults>
      )}
    </PageContainer>
  );
};

export default Airdrop;

const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  padding: 0 20px;
`;

const SearchSection = styled.div`
  margin: 20px;
`;

const SearchInput = styled.input`
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ResultsContainer = styled.div`
  margin: 20px auto;
  max-width: 800px;
`;

const ProjectDetails = styled.div`
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const AirdropLink = styled.a`
  padding: 8px 15px;
  background-color: #28a745;
  color: white;
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    background-color: #218838;
  }
`;

const WatchlistButton = styled.button`
  padding: 8px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const NoResults = styled.p`
  color: #ff0000;
  font-weight: bold;
  margin-top: 20px;
`;
