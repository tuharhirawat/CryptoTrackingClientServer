

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import axios from "axios";

// const Airdrop = ({ userId, watchlist, setWatchlist }) => {
//   const navigate = useNavigate();
//   const [airdrops, setAirdrops] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredAirdrops, setFilteredAirdrops] = useState([]);
//   const [suggestions, setSuggestions] = useState([]);

//   useEffect(() => {
//     const fetchAirdrops = async () => {
//       try {
//         const response = await axios.get("http://localhost:5232/api/Airdrops");
//         setAirdrops(response.data);
//       } catch (error) {
//         console.error("Error fetching airdrop data:", error);
//       }
//     };

//     fetchAirdrops();
//   }, []);

//   const handleAddToWatchlist = async (airdrop) => {
//     if (!watchlist.some((item) => item.id === airdrop.id)) {
//       try {
//         await axios.post(`http://localhost:5232/api/WishlistAirdrop`, {
//           userId,
//           airdropId: airdrop.id,

//         });
//         setWatchlist([...watchlist, airdrop]);
//         navigate("/watchlist");
//       } catch (error) {
//         console.error("Error adding to watchlist:", error);
//       }
//     }
//   };

//   const handleInputChange = (e) => {
//     const value = e.target.value.toLowerCase().trim();
//     setSearchTerm(value);

//     if (value === "") {
//       setSuggestions([]);
//       setFilteredAirdrops([]);
//       return;
//     }

//     const matches = airdrops.filter((airdrop) =>
//       airdrop.airdropName.toLowerCase().includes(value)
//     );
//     setSuggestions(matches);
//   };

//   const handleSearchClick = () => {
//     const matches = airdrops.filter((airdrop) =>
//       airdrop.airdropName.toLowerCase().includes(searchTerm)
//     );
//     setFilteredAirdrops(matches);
//     setSuggestions([]);
//   };

//   const handleSuggestionClick = (airdrop) => {
//     setSearchTerm(airdrop.airdropName);
//     setFilteredAirdrops([airdrop]);
//     setSuggestions([]);
//   };

//   return (
//     <PageContainer>
//       <SuggestionsWrapper>
//         {airdrops.slice(0, 4).map((airdrop) => (
//           <SuggestionCard key={airdrop.id}>
//             <h3>{airdrop.airdropName}</h3>
//             <p>{airdrop.description}</p>
//             <AirdropLink href={airdrop.airdropWebsite} target="_blank">
//               Join Airdrop
//             </AirdropLink>
//           </SuggestionCard>
//         ))}
//       </SuggestionsWrapper>

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
//               {airdrop.airdropName}
//             </SuggestionItem>
//           ))}
//         </SuggestionsList>
//       )}

//       {filteredAirdrops.length > 0 && (
//         <ResultsContainer>
//           {filteredAirdrops.map((airdrop) => (
//             <ProjectDetails key={airdrop.id}>
//               <h3>{airdrop.airdropName}</h3>
//               <p>
//                 <strong>Description:</strong> {airdrop.description}
//               </p>
//               <ActionsContainer>
//                 <AirdropLink href={airdrop.airdropWebsite} target="_blank">
//                   Join Airdrop
//                 </AirdropLink>
//                 <WatchlistButton onClick={() => handleAddToWatchlist(airdrop)}>
//                   Add to Watchlist
//                 </WatchlistButton>
//               </ActionsContainer>
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

// export default Airdrop;
































// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import axios from "axios";

// const Airdrop = ({ userId, watchlist, setWatchlist }) => {
//   const navigate = useNavigate();
//   const [airdrops, setAirdrops] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredAirdrops, setFilteredAirdrops] = useState([]);
//   const [suggestions, setSuggestions] = useState([]);

//   useEffect(() => {
//     const fetchAirdrops = async () => {
//       try {
//         const response = await axios.get("http://localhost:5232/api/Airdrops");
//         setAirdrops(response.data);
//       } catch (error) {
//         console.error("Error fetching airdrop data:", error);
//       }
//     };

//     fetchAirdrops();
//   }, []);

//   const handleAddToWatchlist = async (airdrop) => {
//     if (!watchlist.some((item) => item.id === airdrop.id)) {
//       try {
//         await axios.post("http://localhost:5232/api/WishlistAirdrop", {
//           userId:userId,
//           airdropId: airdrop.id,
//           airdropName: airdrop.airdropName,
//           airdropWebsite: airdrop.airdropWebsite,
//         });
//         setWatchlist([...watchlist, airdrop]);
//         navigate("/watchlist"); // Automatically redirect to Wishlist page
//       } catch (error) {
//         console.error("Error adding to watchlist:", error);
//       }
//     }
//   };

//   const handleInputChange = (e) => {
//     const value = e.target.value.toLowerCase().trim();
//     setSearchTerm(value);

//     if (value === "") {
//       setSuggestions([]);
//       setFilteredAirdrops([]);
//       return;
//     }

//     const matches = airdrops.filter((airdrop) =>
//       airdrop.airdropName.toLowerCase().includes(value)
//     );
//     setSuggestions(matches);
//   };

//   const handleSearchClick = () => {
//     const matches = airdrops.filter((airdrop) =>
//       airdrop.airdropName.toLowerCase().includes(searchTerm)
//     );
//     setFilteredAirdrops(matches);
//     setSuggestions([]);
//   };

//   const handleSuggestionClick = (airdrop) => {
//     setSearchTerm(airdrop.airdropName);
//     setFilteredAirdrops([airdrop]);
//     setSuggestions([]);
//   };

//   return (
//     <PageContainer>
//       <SuggestionsWrapper>
//         {airdrops.slice(0, 4).map((airdrop) => (
//           <SuggestionCard key={airdrop.id}>
//             <h3>{airdrop.airdropName}</h3>
//             <p>{airdrop.description}</p>
//             <AirdropLink href={airdrop.airdropWebsite} target="_blank">
//               Join Airdrop
//             </AirdropLink>
//           </SuggestionCard>
//         ))}
//       </SuggestionsWrapper>

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
//               {airdrop.airdropName}
//             </SuggestionItem>
//           ))}
//         </SuggestionsList>
//       )}

//       {filteredAirdrops.length > 0 && (
//         <ResultsContainer>
//           {filteredAirdrops.map((airdrop) => (
//             <ProjectDetails key={airdrop.id}>
//               <h3>{airdrop.airdropName}</h3>
//               <p>
//                 <strong>Description:</strong> {airdrop.description}
//               </p>
//               <ActionsContainer>
//                 <AirdropLink href={airdrop.airdropWebsite} target="_blank">
//                   Join Airdrop
//                 </AirdropLink>
//                 <WatchlistButton onClick={() => handleAddToWatchlist(airdrop)}>
//                   Add to Watchlist
//                 </WatchlistButton>
//               </ActionsContainer>
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

// export default Airdrop;
























// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import styled from "styled-components";

// const Airdrop = ({ userId, watchlist, setWatchlist }) => {
//   const navigate = useNavigate();
//   const [airdrops, setAirdrops] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredAirdrops, setFilteredAirdrops] = useState([]);
//   const [suggestions, setSuggestions] = useState([]);

//   useEffect(() => {
//     const fetchAirdrops = async () => {
//       try {
//         const response = await axios.get("http://localhost:5232/api/Airdrops");
//         setAirdrops(response.data);
//       } catch (error) {
//         console.error("Error fetching airdrop data:", error);
//       }
//     };

//     fetchAirdrops();
//   }, []);

//   const handleAddToWatchlist = async (airdrop) => {
//     if (!watchlist.some((item) => item.id === airdrop.id)) {
//       try {
//         await axios.post("http://localhost:5232/api/WishlistAirdrop", {
//           userId,
//           airdropId: airdrop.id,
//           airdropName: airdrop.airdropName,
//           airdropWebsite: airdrop.airdropWebsite,
//         });
//         setWatchlist([...watchlist, airdrop]);
//         navigate("/watchlist"); // Automatically redirect to Wishlist page
//       } catch (error) {
//         console.error("Error adding to watchlist:", error);
//       }
//     }
//   };

//   const handleInputChange = (e) => {
//     const value = e.target.value.toLowerCase().trim();
//     setSearchTerm(value);

//     if (value === "") {
//       setSuggestions([]);
//       setFilteredAirdrops([]);
//       return;
//     }

//     const matches = airdrops.filter((airdrop) =>
//       airdrop.airdropName.toLowerCase().includes(value)
//     );
//     setSuggestions(matches);
//   };

//   const handleSearchClick = () => {
//     const matches = airdrops.filter((airdrop) =>
//       airdrop.airdropName.toLowerCase().includes(searchTerm)
//     );
//     setFilteredAirdrops(matches);
//     setSuggestions([]);
//   };

//   const handleSuggestionClick = (airdrop) => {
//     setSearchTerm(airdrop.airdropName);
//     setFilteredAirdrops([airdrop]);
//     setSuggestions([]);
//   };

//   return (
//     <PageContainer>
//       <SuggestionsWrapper>
//         {airdrops.slice(0, 4).map((airdrop) => (
//           <SuggestionCard key={airdrop.id}>
//             <h3>{airdrop.airdropName}</h3>
//             <p>{airdrop.description}</p>
//             <AirdropLink href={airdrop.airdropWebsite} target="_blank" rel="noreferrer">
//               Join Airdrop
//             </AirdropLink>
//           </SuggestionCard>
//         ))}
//       </SuggestionsWrapper>

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
//               {airdrop.airdropName}
//             </SuggestionItem>
//           ))}
//         </SuggestionsList>
//       )}

//       <ResultsContainer>
//         {filteredAirdrops.length > 0 ? (
//           filteredAirdrops.map((airdrop) => (
//             <ProjectDetails key={airdrop.id}>
//               <h3>{airdrop.airdropName}</h3>
//               <p>
//                 <strong>Description:</strong> {airdrop.description}
//               </p>
//               <ActionsContainer>
//                 <AirdropLink
//                   href={airdrop.airdropWebsite}
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   Join Airdrop
//                 </AirdropLink>
//                 <WatchlistButton onClick={() => handleAddToWatchlist(airdrop)}>
//                   Add to Watchlist
//                 </WatchlistButton>
//               </ActionsContainer>
//             </ProjectDetails>
//           ))
//         ) : (
//           searchTerm !== "" && <NoResults>No results found</NoResults>
//         )}
//       </ResultsContainer>
//     </PageContainer>
//   );
// };

// export default Airdrop;









import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Airdrop = ({ userId, watchlist, setWatchlist }) => {
  const navigate = useNavigate();
  const [airdrops, setAirdrops] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAirdrops, setFilteredAirdrops] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchAirdrops = async () => {
      try {
        const response = await axios.get("http://localhost:5232/api/Airdrops");
        setAirdrops(response.data);
      } catch (error) {
        console.error("Error fetching airdrop data:", error);
      }
    };

    fetchAirdrops();
  }, []);

  const handleAddToWatchlist = async (airdrop) => {
    if (!watchlist.some((item) => item.airdropId === airdrop.airdropId)) {
      try {
        await axios.post("http://localhost:5232/api/WishlistAirdrop", {
          userId: userId,
          airdropId: airdrop.airdropId,
          airdropName: airdrop.airdropName,
          airdropLink: airdrop.airdropLink,
        });
        setWatchlist([...watchlist, airdrop]);
        navigate("/watchlist");
      } catch (error) {
        console.error("Error adding to watchlist:", error);
      }
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase().trim();
    setSearchTerm(value);
    setSuggestions(
      airdrops.filter((airdrop) =>
        airdrop.airdropName.toLowerCase().includes(value)
      )
    );
  };

  const handleSearchClick = () => {
    setFilteredAirdrops(
      airdrops.filter((airdrop) =>
        airdrop.airdropName.toLowerCase().includes(searchTerm)
      )
    );
    setSuggestions([]);
  };

  return (
    <PageContainer>
      <h2>Airdrop Listings</h2>
      <SearchSection>
        <SearchInput
          type="text"
          placeholder="Search for airdrops..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <SearchButton onClick={handleSearchClick}>Search</SearchButton>
      </SearchSection>

      {/* Display Suggestions */}
      {suggestions.length > 0 && (
        <SuggestionsWrapper>
          {suggestions.map((airdrop) => (
            <SuggestionCard
              key={airdrop.airdropId}
              onClick={() => handleAddToWatchlist(airdrop)}
            >
              {airdrop.airdropName}
            </SuggestionCard>
          ))}
        </SuggestionsWrapper>
      )}

      {/* Display Results */}
      {filteredAirdrops.length > 0 ? (
        <ResultsContainer>
          {filteredAirdrops.map((airdrop) => (
            <ProjectDetails key={airdrop.airdropId}>
              <h3>{airdrop.airdropName}</h3>
              <p>Description: {airdrop.description}</p>
              <AirdropLink href={airdrop.airdropLink} target="_blank" rel="noreferrer">
                Join Airdrop
              </AirdropLink>
              <ActionsContainer>
                <WatchlistButton onClick={() => handleAddToWatchlist(airdrop)}>
                  Add to Watchlist
                </WatchlistButton>
              </ActionsContainer>
            </ProjectDetails>
          ))}
        </ResultsContainer>
      ) : (
        <NoResults>No airdrops found.</NoResults>
      )}
    </PageContainer>
  );
};

export default Airdrop;

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  margin-top: 2cm;
  height: auto;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-image: url("https://github.com/piyush-eon/react-crypto-tracker/blob/master/public/banner2.jpg?raw=true");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
`;

const SuggestionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-bottom: 20px;
`;

const SuggestionCard = styled.div`
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  width: 250px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(255, 255, 255, 0.8);
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
`;

const AirdropLink = styled.a`
  color: gold;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const SearchSection = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 300px;
`;

const SearchButton = styled.button`
  background-color: gold;
  color: black;
  border: none;
  padding: 10px;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: white;
    color: gold;
  }
`;

const ResultsContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 800px;
`;

const ProjectDetails = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  padding: 20px;
  margin-bottom: 20px;
  color: white;
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const WatchlistButton = styled.button`
  background-color: gold;
  color: black;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: white;
    color: gold;
  }
`;

const NoResults = styled.p`
  color: white;
  font-size: 1.1rem;
  margin-top: 20px;
  text-align: center;
`;
