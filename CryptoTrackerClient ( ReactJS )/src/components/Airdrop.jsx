

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
//     if (!watchlist.some((item) => item.airdropId === airdrop.airdropId)) {
//       try {
//         await axios.post("http://localhost:5232/api/WishlistAirdrop", {
//           userId: userId,
//           airdropId: airdrop.airdropId,
//           airdropName: airdrop.airdropName,
//           airdropLink: airdrop.airdropLink,
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
//     setSuggestions(
//       airdrops.filter((airdrop) =>
//         airdrop.airdropName.toLowerCase().includes(value)
//       )
//     );
//   };

//   const handleSearchClick = () => {
//     setFilteredAirdrops(
//       airdrops.filter((airdrop) =>
//         airdrop.airdropName.toLowerCase().includes(searchTerm)
//       )
//     );
//     setSuggestions([]);
//   };

//   return (
//     <PageContainer>
//       <h2>Airdrop Listings</h2>
//       <SearchSection>
//         <SearchInput
//           type="text"
//           placeholder="Search for airdrops..."
//           value={searchTerm}
//           onChange={handleInputChange}
//         />
//         <SearchButton onClick={handleSearchClick}>Search</SearchButton>
//       </SearchSection>

//       {/* Display Suggestions */}
//       {suggestions.length > 0 && (
//         <SuggestionsWrapper>
//           {suggestions.map((airdrop) => (
//             <SuggestionCard
//               key={airdrop.airdropId}
//               onClick={() => handleAddToWatchlist(airdrop)}
//             >
//               {airdrop.airdropName}
//             </SuggestionCard>
//           ))}
//         </SuggestionsWrapper>
//       )}

//       {/* Display Results */}
//       {filteredAirdrops.length > 0 ? (
//         <ResultsContainer>
//           {filteredAirdrops.map((airdrop) => (
//             <ProjectDetails key={airdrop.airdropId}>
//               <h3>{airdrop.airdropName}</h3>
//               <p>Description: {airdrop.description}</p>
//               <AirdropLink href={airdrop.airdropLink} target="_blank" rel="noreferrer">
//                 Join Airdrop
//               </AirdropLink>
//               <ActionsContainer>
//                 <WatchlistButton onClick={() => handleAddToWatchlist(airdrop)}>
//                   Add to Watchlist
//                 </WatchlistButton>
//               </ActionsContainer>
//             </ProjectDetails>
//           ))}
//         </ResultsContainer>
//       ) : (
//         <NoResults>No airdrops found.</NoResults>
//       )}
//     </PageContainer>
//   );
// };

// export default Airdrop;

// const PageContainer = styled.div`
//   min-height: 100vh;
//   display: flex;
//   margin-top: 2cm;
//   height: auto;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   padding: 20px;
//   font-family: Arial, sans-serif;
//   background-image: url("https://github.com/piyush-eon/react-crypto-tracker/blob/master/public/banner2.jpg?raw=true");
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   color: white;
// `;

// const SuggestionsWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 20px;
//   justify-content: center;
//   margin-bottom: 20px;
// `;

// const SuggestionCard = styled.div`
//   background: rgba(0, 0, 0, 0.7);
//   border: 1px solid #ddd;
//   border-radius: 8px;
//   padding: 15px;
//   width: 250px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     transform: scale(1.05);
//     box-shadow: 0 8px 20px rgba(255, 255, 255, 0.8);
//   }

//   h3 {
//     font-size: 1.2rem;
//     margin-bottom: 10px;
//   }

//   p {
//     font-size: 0.9rem;
//     margin-bottom: 10px;
//   }
// `;

// const AirdropLink = styled.a`
//   color: gold;
//   text-decoration: none;
//   font-size: 1rem;
//   font-weight: bold;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const SearchSection = styled.div`
//   margin-top: 20px;
//   display: flex;
//   gap: 10px;
//   align-items: center;
// `;

// const SearchInput = styled.input`
//   padding: 10px;
//   font-size: 1rem;
//   border-radius: 5px;
//   border: 1px solid #ccc;
//   width: 300px;
// `;

// const SearchButton = styled.button`
//   background-color: gold;
//   color: black;
//   border: none;
//   padding: 10px;
//   font-size: 1rem;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: background-color 0.3s ease, color 0.3s ease;

//   &:hover {
//     background-color: white;
//     color: gold;
//   }
// `;

// const ResultsContainer = styled.div`
//   margin-top: 20px;
//   width: 100%;
//   max-width: 800px;
// `;

// const ProjectDetails = styled.div`
//   background-color: rgba(0, 0, 0, 0.8);
//   border-radius: 8px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
//   padding: 20px;
//   margin-bottom: 20px;
//   color: white;
// `;

// const ActionsContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 10px;
// `;

// const WatchlistButton = styled.button`
//   background-color: gold;
//   color: black;
//   padding: 10px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: white;
//     color: gold;
//   }
// `;

// const NoResults = styled.p`
//   color: white;
//   font-size: 1.1rem;
//   margin-top: 20px;
//   text-align: center;
// `;





// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';

// const AirdropContainer = styled.div`
//   margin-top: 20px;
//   padding: 20px;
//   min-height: 100vph; 
//   padding-bottom: 100px; /* To create space for the footer */
// `;

// const Title = styled.h1`
// margin-top:200px ;  
// font-size: 38px;
//   margin-bottom: 20px;
//   color: white;
//   text-align: center;
// `;

// const SearchContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-bottom: 50px;
// `;

// const SearchInput = styled.input`
//   width: 50%; /* Smaller size */
//   padding: 8px 15px;
//   font-size: 16px;
//   border-radius: 5px;
//   border: 1px solid #ccc;
//   outline: none;
//   margin-right: 10px;

//   &:focus {
//     border-color: #888;
//   }
// `;

// const AirdropList = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 20px;
// `;

// const AirdropCard = styled.div`
//   // background-color: gold;
//   padding: 15px;
//   border-radius: 10px;
//   width: 250px;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//   text-align: center;
//   flex-shrink: 0; /* Prevent shrinking */
//   margin-bottom: 20px; /* Space between rows */
//   // height: 300px; /* Fixed height to prevent compression */

//   &:hover {
//   box-shadow: 0 0 15px rgba(255, 215, 0, 0.8);
//   transform: scale(1.05);  
//   }

//   &:hover h3{
//   color:gold;
//   }
  
//   &:hover p{
//   color:gold;
//   }

//   &:hover a{
//   color:gold;
//   }
  
//   &:hover button{
//   color:gold;
//   }
//   `;

// const AirdropName = styled.h3`
//   font-size: 20px;
//   color:white;
//   margin-bottom: 10px;
// `;

// const AirdropDescription = styled.p`
//   font-size: 14px;
//   color: white;
//   margin-bottom: 10px;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   height: 60px;
// `;

// const VisitButton = styled.a`
//   display: inline-block;
//   padding: 10px 20px;
//   // background-color:gold;
//   color: white;
//   text-decoration: none;
//   border-radius: 5px;
//   margin-bottom: 10px;

//   &:hover {
//     background-color: gold;
//     color:black;
//   }
// `;

// const WishlistButton = styled.button`
//   display: inline-block;
//   padding: 10px 20px;
//   background: none;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: gold;
//     color:black;
//   }
// `;

// const Footer = styled.footer`
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   background-color: #333;
//   color: white;
//   text-align: center;
//   padding: 10px;
//   font-size: 14px;
// `;

// const Airdrop = () => {
//   const [airdrops, setAirdrops] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchAirdrops = async () => {
//       try {
//         const response = await fetch('http://localhost:5232/api/Airdrops');
//         const data = await response.json();
//         console.log('Fetched Airdrops:', data); 

//         if (data && data.length > 0) {
//           setAirdrops(data);  
//         } else {
//           console.error('No airdrops found!');
//         }
//       } catch (error) {
//         console.error('Error fetching airdrops:', error);
//       }
//     };

//     fetchAirdrops();
//   }, []);

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const filteredAirdrops = airdrops.filter(
//     (airdrop) =>
//       airdrop.airdropName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       (airdrop.description && airdrop.description.toLowerCase().includes(searchQuery.toLowerCase()))
//   );

//   const addToWishlist = (airdrop) => {
//     console.log('Adding to wishlist:', airdrop);
    
//     let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
//     wishlist.push(airdrop);
//     localStorage.setItem('wishlist', JSON.stringify(wishlist));
    
//     setTimeout(() => {
//       navigate('/wishlist');
//     }, 2000);
//   };

//   return (
//     <AirdropContainer>
//       <Title>Active Airdrops</Title>
      
//       <SearchContainer>
//         <SearchInput
//           type="text"
//           placeholder="Search Airdrops..."
//           value={searchQuery}
//           onChange={handleSearch}
//         />
//       </SearchContainer>
      
//       <AirdropList>
//         {filteredAirdrops.slice(0, 5).map((airdrop) => (
//           <AirdropCard key={airdrop.airdropId}>
//             <AirdropName>{airdrop.airdropName}</AirdropName>
//             {airdrop.description ? (
//               <AirdropDescription>{airdrop.description}</AirdropDescription>
//             ) : (
//               <AirdropDescription>No description available</AirdropDescription>
//             )}
//             <VisitButton href={airdrop.airdropWebsite} target="_blank" rel="noopener noreferrer">
//               Visit Airdrop
//             </VisitButton>
//             <WishlistButton onClick={() => addToWishlist(airdrop)}>
//               Add to Wishlist
//             </WishlistButton>
//           </AirdropCard>
//         ))}
//       </AirdropList>

//       <Footer>
//         <p>Footer Content - &copy; 2025 Airdrop Service</p>
//       </Footer>
//     </AirdropContainer>
//   );
// };

// export default Airdrop;















// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import axios from 'axios';

// const AirdropContainer = styled.div`
//   margin-top: 20px;
//   padding: 20px;
//   min-height: 100vph; 
//   padding-bottom: 100px;
// `;

// const Title = styled.h1`
//   margin-top: 200px;
//   font-size: 38px;
//   margin-bottom: 20px;
//   color: white;
//   text-align: center;
// `;

// const SearchContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-bottom: 50px;
// `;

// const SearchInput = styled.input`
//   width: 50%;
//   padding: 8px 15px;
//   font-size: 16px;
//   border-radius: 5px;
//   border: 1px solid #ccc;
//   outline: none;
//   margin-right: 10px;

//   &:focus {
//     border-color: #888;
//   }
// `;

// const AirdropList = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 20px;
// `;

// const AirdropCard = styled.div`
//   padding: 15px;
//   border-radius: 10px;
//   width: 250px;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//   text-align: center;
//   flex-shrink: 0;
//   margin-bottom: 20px;

//   &:hover {
//     box-shadow: 0 0 15px rgba(255, 215, 0, 0.8);
//     transform: scale(1.05);
//   }

//   &:hover h3, &:hover p, &:hover a, &:hover button {
//     color: gold;
//   }
// `;

// const AirdropName = styled.h3`
//   font-size: 20px;
//   color: white;
//   margin-bottom: 10px;
// `;

// const AirdropDescription = styled.p`
//   font-size: 14px;
//   color: white;
//   margin-bottom: 10px;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   height: 60px;
// `;

// const VisitButton = styled.a`
//   display: inline-block;
//   padding: 10px 20px;
//   color: white;
//   text-decoration: none;
//   border-radius: 5px;
//   margin-bottom: 10px;

//   &:hover {
//     background-color: gold;
//     color: black;
//   }
// `;

// const WishlistButton = styled.button`
//   display: inline-block;
//   padding: 10px 20px;
//   background: none;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: gold;
//     color: black;
//   }
// `;

// const Footer = styled.footer`
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   background-color: #333;
//   color: white;
//   text-align: center;
//   padding: 10px;
//   font-size: 14px;
// `;

// const Airdrop = () => {
//   const [airdrops, setAirdrops] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const navigate = useNavigate();
//   const currentUser = localStorage.getItem('currentUser');

//   useEffect(() => {
//     const fetchAirdrops = async () => {
//       try {
//         const response = await axios.get('http://localhost:5232/api/Airdrops');
//         setAirdrops(response.data);
//       } catch (error) {
//         console.error('Error fetching airdrops:', error);
//       }
//     };

//     fetchAirdrops();
//   }, []);

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const filteredAirdrops = airdrops.filter(
//     (airdrop) =>
//       airdrop.airdropName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       (airdrop.description && airdrop.description.toLowerCase().includes(searchQuery.toLowerCase()))
//   );

//   const addToWishlist = async (airdrop) => {
//     try {
//       const response = await axios.post('http://localhost:5232/api/WishlistAirdrop', {
//         userId: currentUser.id,
//         airdropId: airdrop.airdropId,
//         airdropName: airdrop.airdropName,
//         airdropLink: airdrop.airdropWebsite
//       });

//       alert('Airdrop added to watchlist successfully!');
//       setTimeout(() => navigate('/watchlist'), 2000);

//     } catch (error) {
//       if (error.response && error.response.status === 409) {
//         alert('Airdrop already exists in your watchlist!');
//         setTimeout(() => navigate('/watchlist'), 2000);
//       } else {
//         console.error('Error adding to watchlist:', error);
//       }
//     }
//   };

//   return (
//     <AirdropContainer>
//       <Title>Active Airdrops</Title>
      
//       <SearchContainer>
//         <SearchInput
//           type="text"
//           placeholder="Search Airdrops..."
//           value={searchQuery}
//           onChange={handleSearch}
//         />
//       </SearchContainer>
      
//       <AirdropList>
//         {filteredAirdrops.slice(0, 5).map((airdrop) => (
//           <AirdropCard key={airdrop.airdropId}>
//             <AirdropName>{airdrop.airdropName}</AirdropName>
//             <AirdropDescription>{airdrop.description || 'No description available'}</AirdropDescription>
//             <VisitButton href={airdrop.airdropWebsite} target="_blank" rel="noopener noreferrer">
//               Visit Airdrop
//             </VisitButton>
//             <WishlistButton onClick={() => addToWishlist(airdrop)}>
//               Add to Wishlist
//             </WishlistButton>
//           </AirdropCard>
//         ))}
//       </AirdropList>

//       <Footer>
//         <p>Footer Content - &copy; 2025 Airdrop Service</p>
//       </Footer>
//     </AirdropContainer>
//   );
// };

// export default Airdrop;






// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import axios from 'axios';

// const AirdropContainer = styled.div`
//   margin-top: 20px;
//   padding: 20px;
//   min-height: 100vph; 
//   padding-bottom: 100px;
// `;

// const Title = styled.h1`
//   margin-top: 200px;
//   font-size: 38px;
//   margin-bottom: 20px;
//   color: white;
//   text-align: center;
// `;

// const SearchContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-bottom: 50px;
// `;

// const SearchInput = styled.input`
//   width: 50%;
//   padding: 8px 15px;
//   font-size: 16px;
//   border-radius: 5px;
//   border: 1px solid #ccc;
//   outline: none;
//   margin-right: 10px;

//   &:focus {
//     border-color: #888;
//   }
// `;

// const AirdropList = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 20px;
// `;

// const AirdropCard = styled.div`
//   padding: 15px;
//   border-radius: 10px;
//   width: 250px;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//   text-align: center;
//   flex-shrink: 0;
//   margin-bottom: 20px;

//   &:hover {
//     box-shadow: 0 0 15px rgba(255, 215, 0, 0.8);
//     transform: scale(1.05);
//   }

//   &:hover h3, &:hover p, &:hover a, &:hover button {
//     color: gold;
//   }
// `;

// const AirdropName = styled.h3`
//   font-size: 20px;
//   color: white;
//   margin-bottom: 10px;
// `;

// const AirdropDescription = styled.p`
//   font-size: 14px;
//   color: white;
//   margin-bottom: 10px;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   height: 60px;
// `;

// const VisitButton = styled.a`
//   display: inline-block;
//   padding: 10px 20px;
//   color: white;
//   text-decoration: none;
//   border-radius: 5px;
//   margin-bottom: 10px;

//   &:hover {
//     background-color: gold;
//     color: black;
//   }
// `;

// const WishlistButton = styled.button`
//   display: inline-block;
//   padding: 10px 20px;
//   background: none;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: gold;
//     color: black;
//   }
// `;

// const Footer = styled.footer`
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   background-color: #333;
//   color: white;
//   text-align: center;
//   padding: 10px;
//   font-size: 14px;
// `;

// const Airdrop = () => {
//   const [airdrops, setAirdrops] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchAirdrops = async () => {
//       try {
//         const response = await fetch('http://localhost:5232/api/Airdrops');
//         const data = await response.json();
//         const storedUserData = JSON.parse(localStorage.getItem('currentUser'));
//         const storedUserId = storedUserData ? storedUserData.id : null;

//         if (data && data.length > 0) {
//           setAirdrops(data);
//         } else {
//           console.error('No airdrops found!');
//         }
//       } catch (error) {
//         console.error('Error fetching airdrops:', error);
//       }
//     };

//     fetchAirdrops();
//   }, []);

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const filteredAirdrops = airdrops.filter(
//     (airdrop) =>
//       airdrop.airdropName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       (airdrop.description && airdrop.description.toLowerCase().includes(searchQuery.toLowerCase()))
//   );

//   const addToWishlist = async (airdrop) => {
//     const storedUserData = JSON.parse(localStorage.getItem('currentUser'));
//     const storedUserId = storedUserData ? storedUserData.id : null;

//     if (!storedUserId) {
//       alert('You must be logged in to add to wishlist.');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:5232/api/WishlistAirdrop', {
//         userId: storedUserId,
//         airdropId: airdrop.airdropId,
//         airdropName: airdrop.airdropName,
//         airdropLink: airdrop.airdropWebsite
//       });
//       alert('Airdrop added to your wishlist!');
//       setTimeout(() => navigate('/watchlist'), 2000);
//     } catch (error) {
//       alert('Airdrop already exists in your wishlist! Redirecting...');
//       setTimeout(() => navigate('/watchlist'), 2000);
//     }
//   };

//   return (
//     <AirdropContainer>
//       <Title>Active Airdrops</Title>
//       <SearchContainer>
//         <SearchInput
//           type="text"
//           placeholder="Search Airdrops..."
//           value={searchQuery}
//           onChange={handleSearch}
//         />
//       </SearchContainer>
//       <AirdropList>
//         {filteredAirdrops.slice(0, 5).map((airdrop) => (
//           <AirdropCard key={airdrop.airdropId}>
//             <AirdropName>{airdrop.airdropName}</AirdropName>
//             <AirdropDescription>
//               {airdrop.description || 'No description available'}
//             </AirdropDescription>
//             <VisitButton href={airdrop.airdropWebsite} target="_blank" rel="noopener noreferrer">
//               Visit Airdrop
//             </VisitButton>
//             <WishlistButton onClick={() => addToWishlist(airdrop)}>
//               Add to Wishlist
//             </WishlistButton>
//           </AirdropCard>
//         ))}
//       </AirdropList>
//       <Footer>
//         <p>Footer Content - &copy; 2025 Airdrop Service</p>
//       </Footer>
//     </AirdropContainer>
//   );
// };

// export default Airdrop;
































// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import axios from "axios";

// const AirdropContainer = styled.div`
//   margin-top: 20px;
//   padding: 20px;
//   min-height: 100vh;
//   padding-bottom: 100px;
// `;

// const Title = styled.h1`
//   margin-top: 200px;
//   font-size: 38px;
//   margin-bottom: 20px;
//   color: white;
//   text-align: center;
// `;

// const SearchContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-bottom: 50px;
// `;

// const SearchInput = styled.input`
//   width: 50%;
//   padding: 8px 15px;
//   font-size: 16px;
//   border-radius: 5px;
//   border: 1px solid #ccc;
//   outline: none;
//   margin-right: 10px;

//   &:focus {
//     border-color: gold;
//     box-shadow: 0 0 5px gold;
//   }
// `;

// const AirdropList = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 20px;
// `;

// const AirdropCard = styled.div`
//   padding: 15px;
//   border-radius: 10px;
//   width: 250px;
//   background-color: #222;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//   text-align: center;
//   flex-shrink: 0;
//   margin-bottom: 20px;

//   &:hover {
//     box-shadow: 0 0 15px rgba(255, 215, 0, 0.8);
//     transform: scale(1.05);
//     transition: all 0.3s ease;
//   }
// `;

// const AirdropName = styled.h3`
//   font-size: 20px;
//   color: white;
//   margin-bottom: 10px;
// `;

// const AirdropDescription = styled.p`
//   font-size: 14px;
//   color: white;
//   margin-bottom: 10px;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   height: 60px;
// `;

// const VisitButton = styled.a`
//   display: inline-block;
//   padding: 10px 20px;
//   color: white;
//   text-decoration: none;
//   border-radius: 5px;
//   margin-bottom: 10px;
//   background-color: #444;

//   &:hover {
//     background-color: gold;
//     color: black;
//   }
// `;

// const WishlistButton = styled.button`
//   display: inline-block;
//   padding: 10px 20px;
//   background: none;
//   color: white;
//   border: 1px solid gold;
//   border-radius: 5px;
//   cursor: pointer;
//   margin-top: 5px;

//   &:hover {
//     background-color: gold;
//     color: black;
//   }
// `;

// const Footer = styled.footer`
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   background-color: #333;
//   color: white;
//   text-align: center;
//   padding: 10px;
//   font-size: 14px;
// `;

// const Airdrop = () => {
//   const [airdrops, setAirdrops] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchAirdrops = async () => {
//       try {
//         const response = await fetch("http://localhost:5232/api/Airdrops");
//         const data = await response.json();
//         setAirdrops(data || []);
//       } catch (error) {
//         console.error("Error fetching airdrops:", error);
//       }
//     };

//     fetchAirdrops();
//   }, []);

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const addToWishlist = async (airdrop) => {
//     const storedUserData = JSON.parse(localStorage.getItem("currentUser"));
//     const storedUserId = storedUserData ? storedUserData.id : null;

//     try {
//       await axios.post("http://localhost:5232/api/WishlistAirdrop", {
//         userId: storedUserId,
//         airdropId: airdrop.airdropId,
//         airdropName: airdrop.airdropName,
//         airdropLink: airdrop.airdropWebsite,
//       });
//       navigate("/watchlist");
//     } catch (error) {
//       console.error("Error adding airdrop to wishlist:", error);
//       navigate("/watchlist");
//     }
//   };

//   const filteredAirdrops = airdrops.filter(
//     (airdrop) =>
//       airdrop.airdropName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       (airdrop.description &&
//         airdrop.description.toLowerCase().includes(searchQuery.toLowerCase()))
//   );

//   return (
//     <AirdropContainer>
//       <Title>Active Airdrops</Title>
//       <SearchContainer>
//         <SearchInput
//           type="text"
//           placeholder="Search Airdrops..."
//           value={searchQuery}
//           onChange={handleSearch}
//         />
//       </SearchContainer>
//       <AirdropList>
//         {filteredAirdrops.map((airdrop) => (
//           <AirdropCard key={airdrop.airdropId}>
//             <AirdropName>{airdrop.airdropName}</AirdropName>
//             <AirdropDescription>
//               {airdrop.description || "No description available"}
//             </AirdropDescription>
//             <VisitButton
//               href={airdrop.airdropWebsite}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Visit Airdrop
//             </VisitButton>
//             <WishlistButton onClick={() => addToWishlist(airdrop)}>
//               Add to Wishlist
//             </WishlistButton>
//           </AirdropCard>
//         ))}
//       </AirdropList>
//       <Footer>
//         <p>&copy; 2025 Airdrop Service</p>
//       </Footer>
//     </AirdropContainer>
//   );
// };

// export default Airdrop;







// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import axios from "axios";

// const AirdropContainer = styled.div`
//   margin-top: 20px;
//   padding: 20px;
//   min-height: 100vh;
//   padding-bottom: 100px;
// `;

// const Title = styled.h1`
//   margin-top: 200px;
//   font-size: 38px;
//   margin-bottom: 20px;
//   color: white;
//   text-align: center;
// `;

// const SearchContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-bottom: 50px;
// `;

// const SearchInput = styled.input`
//   width: 50%;
//   padding: 8px 15px;
//   font-size: 16px;
//   border-radius: 5px;
//   border: 1px solid #ccc;
//   outline: none;
//   margin-right: 10px;

//   &:focus {
//     border-color: gold;
//     box-shadow: 0 0 5px gold;
//   }
// `;

// const AirdropList = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 20px;
// `;

// const AirdropCard = styled.div`
//   padding: 15px;
//   border-radius: 10px;
//   width: 250px;
//   background-color: #222;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//   text-align: center;
//   flex-shrink: 0;
//   margin-bottom: 20px;

//   &:hover {
//     box-shadow: 0 0 15px rgba(255, 215, 0, 0.8);
//     transform: scale(1.05);
//     transition: all 0.3s ease;
//   }
// `;

// const AirdropName = styled.h3`
//   font-size: 20px;
//   color: white;
//   margin-bottom: 10px;
// `;

// const AirdropDescription = styled.p`
//   font-size: 14px;
//   color: white;
//   margin-bottom: 10px;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   height: 60px;
// `;

// const VisitButton = styled.a`
//   display: inline-block;
//   padding: 10px 20px;
//   color: white;
//   text-decoration: none;
//   border-radius: 5px;
//   margin-bottom: 10px;
//   background-color: #444;

//   &:hover {
//     background-color: gold;
//     color: black;
//   }
// `;

// const WishlistButton = styled.button`
//   display: inline-block;
//   padding: 10px 20px;
//   background: none;
//   color: white;
//   border: 1px solid gold;
//   border-radius: 5px;
//   cursor: pointer;
//   margin-top: 5px;

//   &:hover {
//     background-color: gold;
//     color: black;
//   }
// `;

// const Footer = styled.footer`
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   background-color: #333;
//   color: white;
//   text-align: center;
//   padding: 10px;
//   font-size: 14px;
// `;

// const Airdrop = () => {
//   const [airdrops, setAirdrops] = useState([]);
//   const [watchlist, setWatchlist] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchAirdrops = async () => {
//       try {
//         const response = await axios.get("http://localhost:5232/api/Airdrops");
//         setAirdrops(response.data || []);
//       } catch (error) {
//         console.error("Error fetching airdrops:", error);
//       }
//     };

//     const fetchWatchlist = async () => {
//       try {
//         const response = await axios.get("http://localhost:5232/api/WishlistAirdrop");
//         setWatchlist(response.data || []);
//       } catch (error) {
//         console.error("Error fetching watchlist:", error);
//       }
//     };

//     fetchAirdrops();
//     fetchWatchlist();
//   }, []);

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const addToWishlist = async (airdrop) => {
//     const storedUserData = JSON.parse(localStorage.getItem("currentUser"));
//     const storedUserId = storedUserData ? storedUserData.id : null;
    
//      const watchListData = await axios.get("http://localhost:5232/api/WishlistAirdrop");
      



//     // Check for duplication using `airdropWebsite`
//     const alreadyInWatchlist = watchlist.some(
//       (item) => item.airdropLink === airdrop.airdropWebsite
//     );

//     if (alreadyInWatchlist) {
//       alert("Airdrop already exists in your watchlist!");
//       navigate("/watchlist");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:5232/api/WishlistAirdrop", {
//         userId: storedUserId,
//         airdropId: airdrop.airdropId,
//         airdropName: airdrop.airdropName,
//         airdropLink: airdrop.airdropWebsite,
//       });

//       // Update local watchlist state to reflect the change
//       setWatchlist((prev) => [
//         ...prev,
//         {
//           userId: storedUserId,
//           airdropId: airdrop.airdropId,
//           airdropName: airdrop.airdropName,
//           airdropLink: airdrop.airdropWebsite,
//         },
//       ]);

//       alert("Airdrop added to your watchlist!");
//       navigate("/watchlist");
//     } catch (error) {
//       console.error("Error adding airdrop to wishlist:", error);
//     }
//   };

//   const filteredAirdrops = airdrops.filter(
//     (airdrop) =>
//       airdrop.airdropName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       (airdrop.description &&
//         airdrop.description.toLowerCase().includes(searchQuery.toLowerCase()))
//   );

//   return (
//     <AirdropContainer>
//       <Title>Active Airdrops</Title>
//       <SearchContainer>
//         <SearchInput
//           type="text"
//           placeholder="Search Airdrops..."
//           value={searchQuery}
//           onChange={handleSearch}
//         />
//       </SearchContainer>
//       <AirdropList>
//         {filteredAirdrops.map((airdrop) => (
//           <AirdropCard key={airdrop.airdropId}>
//             <AirdropName>{airdrop.airdropName}</AirdropName>
//             <AirdropDescription>
//               {airdrop.description || "No description available"}
//             </AirdropDescription>
//             <VisitButton
//               href={airdrop.airdropWebsite}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Visit Airdrop
//             </VisitButton>
//             <WishlistButton onClick={() => addToWishlist(airdrop)}>
//               Add to Wishlist
//             </WishlistButton>
//           </AirdropCard>
//         ))}
//       </AirdropList>
//       <Footer>
//         <p>&copy; 2025 Airdrop Service</p>
//       </Footer>
//     </AirdropContainer>
//   );
// };

// export default Airdrop;














import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const AirdropContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  min-height: 100vh;
  padding-bottom: 100px;
`;

const Title = styled.h1`
  margin-top: 200px;
  font-size: 38px;
  margin-bottom: 20px;
  color: white;
  text-align: center;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const SearchInput = styled.input`
  width: 50%;
  padding: 8px 15px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
  margin-right: 10px;

  &:focus {
    border-color: gold;
    box-shadow: 0 0 5px gold;
  }
`;

const AirdropList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const AirdropCard = styled.div`
  padding: 15px;
  border-radius: 10px;
  width: 250px;
  background-color: #222;
  text-align: center;
  flex-shrink: 0;
  margin-bottom: 20px;

  &:hover {
  border: 4px solid;
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.8);
    transform: scale(1.05);
    transition: all 0.3s ease;
  }
`;

const AirdropName = styled.h3`
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
`;

const AirdropDescription = styled.p`
  font-size: 14px;
  color: white;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 60px;
`;

const VisitButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: #444;

  &:hover {
    background-color: gold;
    color: black;
  }
`;

const WishlistButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  background: none;
  color: white;
  border: 1px solid gold;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 5px;

  &:hover {
    background-color: gold;
    color: black;
  }
`;

// const Footer = styled.footer`
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   background-color: #333;
//   color: white;
//   text-align: center;
//   padding: 10px;
//   font-size: 14px;
// `;

const Airdrop = () => {
  const [airdrops, setAirdrops] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAirdrops = async () => {
      try {
        const response = await axios.get("http://localhost:5232/api/Airdrops");
        setAirdrops(response.data || []);
      } catch (error) {
        console.error("Error fetching airdrops:", error);
      }
    };

    const fetchWatchlist = async () => {
      try {
        const response = await axios.get("http://localhost:5232/api/WishlistAirdrop");
        setWatchlist(response.data || []);
      } catch (error) {
        console.error("Error fetching watchlist:", error);
      }
    };

    fetchAirdrops();
    fetchWatchlist();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const addToWishlist = async (airdrop) => {
    const storedUserData = JSON.parse(localStorage.getItem("currentUser"));
    const storedUserId = storedUserData ? storedUserData.id : null;


    // Check for duplication using `airdropWebsite`
    const alreadyInWatchlist = watchlist.some(
      (item) => item.userId === storedUserId && item.airdropLink === airdrop.airdropWebsite
    );

    if (alreadyInWatchlist) {
      alert("Airdrop already exists in your watchlist!");
      navigate("/watchlist");
      return;
    }

    try {
      await axios.post("http://localhost:5232/api/WishlistAirdrop", {
        userId: storedUserId,
        airdropId: airdrop.airdropId,
        airdropName: airdrop.airdropName,
        airdropLink: airdrop.airdropWebsite,
      });

      // Update local watchlist state to reflect the change
      setWatchlist((prev) => [
        ...prev,
        {
          userId: storedUserId,
          airdropId: airdrop.airdropId,
          airdropName: airdrop.airdropName,
          airdropLink: airdrop.airdropWebsite,
        },
      ]);

      alert("Airdrop added to your watchlist!");
      navigate("/watchlist");
    } catch (error) {
      console.error("Error adding airdrop to wishlist:", error);
    }
  };

  const filteredAirdrops = airdrops.filter(
    (airdrop) =>
      airdrop.airdropName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (airdrop.description &&
        airdrop.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <AirdropContainer>
      <Title>Active Airdrops</Title>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search Airdrops..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </SearchContainer>
      <AirdropList>
        {filteredAirdrops.map((airdrop) => (
          <AirdropCard key={airdrop.airdropId}>
            <AirdropName>{airdrop.airdropName}</AirdropName>
            <AirdropDescription>
              {airdrop.description || "No description available"}
            </AirdropDescription>
            <VisitButton
              href={airdrop.airdropWebsite}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Airdrop
            </VisitButton>
            <WishlistButton onClick={() => addToWishlist(airdrop)}>
              Add to Wishlist
            </WishlistButton>
          </AirdropCard>
        ))}
      </AirdropList>
      {/* <Footer>
        <p>&copy; 2025 Airdrop Service</p>
      </Footer> */}
    </AirdropContainer>
  );
};

export default Airdrop;





// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import axios from 'axios';

// const AirdropContainer = styled.div`
//   margin-top: 20px;
//   padding: 20px;
//   min-height: 100vh; 
//   padding-bottom: 100px;
// `;

// const Title = styled.h1`
//   margin-top: 200px;
//   font-size: 38px;
//   margin-bottom: 20px;
//   color: white;
//   text-align: center;
// `;

// const SearchContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-bottom: 50px;
// `;

// const SearchInput = styled.input`
//   width: 50%;
//   padding: 8px 15px;
//   font-size: 16px;
//   border-radius: 5px;
//   border: 1px solid #ccc;
//   outline: none;
//   margin-right: 10px;

//   &:focus {
//     border-color: #888;
//   }
// `;

// const AirdropList = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 20px;
// `;

// const AirdropCard = styled.div`
//   padding: 15px;
//   border-radius: 10px;
//   width: 250px;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//   text-align: center;
//   flex-shrink: 0;
//   margin-bottom: 20px;

//   &:hover {
//     box-shadow: 0 0 15px rgba(255, 215, 0, 0.8);
//     transform: scale(1.05);
//   }

//   &:hover h3, &:hover p, &:hover a, &:hover button {
//     color: gold;
//   }
// `;

// const AirdropName = styled.h3`
//   font-size: 20px;
//   color: white;
//   margin-bottom: 10px;
// `;

// const AirdropDescription = styled.p`
//   font-size: 14px;
//   color: white;
//   margin-bottom: 10px;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   height: 60px;
// `;

// const VisitButton = styled.a`
//   display: inline-block;
//   padding: 10px 20px;
//   color: white;
//   text-decoration: none;
//   border-radius: 5px;
//   margin-bottom: 10px;

//   &:hover {
//     background-color: gold;
//     color: black;
//   }
// `;

// const WishlistButton = styled.button`
//   display: inline-block;
//   padding: 10px 20px;
//   background: none;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;

//   &:hover {
//     background-color: gold;
//     color: black;
//   }
// `;

// const Footer = styled.footer`
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   background-color: #333;
//   color: white;
//   text-align: center;
//   padding: 10px;
//   font-size: 14px;
// `;

// const Airdrop = () => {
//   const [airdrops, setAirdrops] = useState([]);
  // const [watchlist, setWatchlist] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchAirdrops = async () => {
//       try {
//         const response = await axios.get('http://localhost:5232/api/Airdrops');
//         setAirdrops(response.data);
//       } catch (error) {
//         console.error('Error fetching airdrops:', error);
//       }
//     };

//     const fetchWatchlist = async () => {
//       try {
//         const response = await axios.get('http://localhost:5232/api/WishlistAirdrop');
//         setWatchlist(response.data);
//       } catch (error) {
//         console.error('Error fetching watchlist:', error);
//       }
//     };

//     fetchAirdrops();
//     fetchWatchlist();
//   }, []);

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const filteredAirdrops = airdrops.filter(
//     (airdrop) =>
//       airdrop.airdropName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       (airdrop.description && airdrop.description.toLowerCase().includes(searchQuery.toLowerCase()))
//   );

//   const addToWishlist = async (airdrop) => {
//     const storedUserData = JSON.parse(localStorage.getItem('currentUser'));
//     const storedUserId = storedUserData ? storedUserData.id : null;

//     if (!storedUserId) {
//       console.warn('User not logged in');
//       return;
//     }

//     // Check if the airdrop already exists in the watchlist
//     const airdropExists = watchlist.some(
//       (item) => item.airdropLink === airdrop.airdropWebsite && item.userId === storedUserId
//     );

//     if (airdropExists) {
//       console.warn('Airdrop already exists in the watchlist');
//       navigate('/watchlist');
//       return;
//     }

//     try {
//       await axios.post('http://localhost:5232/api/WishlistAirdrop', {
//         userId: storedUserId,
//         airdropId: airdrop.airdropId,
//         airdropName: airdrop.airdropName,
//         airdropLink: airdrop.airdropWebsite
//       });
//       navigate('/watchlist');
//     } catch (error) {
//       console.error('Error adding airdrop to the watchlist:', error);
//     }
//   };

//   return (
//     <AirdropContainer>
//       <Title>Active Airdrops</Title>
//       <SearchContainer>
//         <SearchInput
//           type="text"
//           placeholder="Search Airdrops..."
//           value={searchQuery}
//           onChange={handleSearch}
//         />
//       </SearchContainer>
//       <AirdropList>
//         {filteredAirdrops.map((airdrop) => (
//           <AirdropCard key={airdrop.airdropId}>
//             <AirdropName>{airdrop.airdropName}</AirdropName>
//             <AirdropDescription>
//               {airdrop.description || 'No description available'}
//             </AirdropDescription>
//             <VisitButton href={airdrop.airdropWebsite} target="_blank" rel="noopener noreferrer">
//               Visit Airdrop
//             </VisitButton>
//             <WishlistButton onClick={() => addToWishlist(airdrop)}>
//               Add to Wishlist
//             </WishlistButton>
//           </AirdropCard>
//         ))}
//       </AirdropList>
//       <Footer>
//         <p>Footer Content - &copy; 2025 Airdrop Service</p>
//       </Footer>
//     </AirdropContainer>
//   );
// };

// export default Airdrop;


