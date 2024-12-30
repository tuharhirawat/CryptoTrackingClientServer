// import React, { useState } from "react";
// import styled from "styled-components";

// const Watchlist = ({ watchlist, setWatchlist }) => {
//   const [sortOption, setSortOption] = useState("newlyAdded");

//   const sortedWatchlist = [...watchlist].sort((a, b) => {
//     switch (sortOption) {
//       case "newlyAdded":
//         return b.id - a.id;
//       case "reverse":
//         return a.id - b.id;
//       case "alphabetical":
//         return a.AirdropName.localeCompare(b.AirdropName);
//       case "reverseAlphabetical":
//         return b.AirdropName.localeCompare(a.AirdropName);
//       default:
//         return 0;
//     }
//   });

//   const removeFromWatchlist = (id) => {
//     setWatchlist(watchlist.filter((item) => item.id !== id));
//   };

//   return (
//     <PageContainer>
//       <Header>
//         <h1>Watchlist</h1>
//         <SortOptions>
//           <label htmlFor="sort">Sort by:</label>
//           <Select
//             id="sort"
//             value={sortOption}
//             onChange={(e) => setSortOption(e.target.value)}
//           >
//             <option value="newlyAdded">Newly Added</option>
//             <option value="reverse">Oldest Added</option>
//             <option value="alphabetical">Alphabetical</option>
//             <option value="reverseAlphabetical">Reverse Alphabetical</option>
//           </Select>
//         </SortOptions>
//       </Header>

//       {sortedWatchlist.length > 0 ? (
//         <WatchlistContainer>
//           {sortedWatchlist.map((item) => (
//             <AirdropCard key={item.id}>
//               <h3>{item.AirdropName}</h3>
//               <Actions>
//                 <AirdropLink href={item.AirdropWebsite} target="_blank">
//                   Join Airdrop
//                 </AirdropLink>
//                 <RemoveButton onClick={() => removeFromWatchlist(item.id)}>
//                   Remove
//                 </RemoveButton>
//               </Actions>
//             </AirdropCard>
//           ))}
//         </WatchlistContainer>
//       ) : (
//         <NoItems>No items in your watchlist</NoItems>
//       )}
//     </PageContainer>
//   );
// };

// export default Watchlist;

// const PageContainer = styled.div`
//   padding: 20px;
//   font-family: Arial, sans-serif;
//   max-width: 1000px;
//   margin: 0 auto;
//   background-image: url('https://github.com/piyush-eon/react-crypto-tracker/blob/master/public/banner2.jpg?raw=true');
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   color: white; /* Adjust text color for better contrast with the background */
// `;

// const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// const SortOptions = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
// `;

// const Select = styled.select`
//   padding: 8px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const WatchlistContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
// `;

// const AirdropCard = styled.div`
//   background: rgba(255, 255, 255, 0.9); /* Add transparency for better contrast */
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   padding: 20px;

//   h3 {
//     color : #333;
//     margin: 0 0 10px;
//   }

//   p {
//     margin: 5px 0;
//   }
// `;

// const Actions = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 10px;
// `;

// const AirdropLink = styled.a`
//   padding: 8px 15px;
//   background-color: #28a745;
//   color: white;
//   text-decoration: none;
//   border-radius: 4px;

//   &:hover {
//     background-color: #218838;
//   }
// `;

// const RemoveButton = styled.button`
//   padding: 8px 15px;
//   background-color: #dc3545;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: #c82333;
//   }
// `;

// const NoItems = styled.p`
//   color: #f8f9fa; /* Light text color for better visibility */
//   text-align: center;
//   font-size: 1.2rem;
// `;





// import React, { useState } from "react";
// import styled from "styled-components";

// const Watchlist = ({ watchlist, setWatchlist }) => {
//   const [sortOption, setSortOption] = useState("newlyAdded");

//   const sortedWatchlist = [...watchlist].sort((a, b) => {
//     switch (sortOption) {
//       case "newlyAdded":
//         return b.id - a.id;
//       case "reverse":
//         return a.id - b.id;
//       case "alphabetical":
//         return a.AirdropName.localeCompare(b.AirdropName);
//       case "reverseAlphabetical":
//         return b.AirdropName.localeCompare(a.AirdropName);
//       default:
//         return 0;
//     }
//   });

//   const removeFromWatchlist = (id) => {
//     setWatchlist(watchlist.filter((item) => item.id !== id));
//   };

//   return (
//     <PageContainer>
//       <Header>
//         <h1>Watchlist</h1>
//         <SortOptions>
//           <label htmlFor="sort">Sort by:</label>
//           <Select
//             id="sort"
//             value={sortOption}
//             onChange={(e) => setSortOption(e.target.value)}
//           >
//             <option value="newlyAdded">Newly Added</option>
//             <option value="reverse">Oldest Added</option>
//             <option value="alphabetical">Alphabetical</option>
//             <option value="reverseAlphabetical">Reverse Alphabetical</option>
//           </Select>
//         </SortOptions>
//       </Header>

//       {sortedWatchlist.length > 0 ? (
//         <WatchlistContainer>
//           {sortedWatchlist.map((item) => (
//             <AirdropCard key={item.id}>
//               <h3>{item.AirdropName}</h3>
//               <Actions>
//                 <AirdropLink href={item.AirdropWebsite} target="_blank">
//                   Join Airdrop
//                 </AirdropLink>
//                 <RemoveButton onClick={() => removeFromWatchlist(item.id)}>
//                   Remove
//                 </RemoveButton>
//               </Actions>
//             </AirdropCard>
//           ))}
//         </WatchlistContainer>
//       ) : (
//         <NoItems>No items in your watchlist</NoItems>
//       )}
//     </PageContainer>
//   );
// };

// export default Watchlist;

// const PageContainer = styled.div`
//   padding: 20px;
//   font-family: Arial, sans-serif;
//   max-width: 100%; /* Ensure it spans the full width of the viewport */
//   margin: 0; /* Remove default margin */
//   background-image: url('https://github.com/piyush-eon/react-crypto-tracker/blob/master/public/banner2.jpg?raw=true');
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   height: 90vh; 
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start; 
  
// `;

// const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// const SortOptions = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;

//   label{
//   color:white;}
// `;

// const Select = styled.select`
//   padding: 8px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const WatchlistContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   flex-grow: 1; /* Allow container to grow and take available space */
//   overflow-y: auto; /* Scroll if content exceeds the available height */
// `;

// const AirdropCard = styled.div`
//   background: rgba(255, 255, 255, 0.9); /* Add transparency for better contrast */
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   padding: 20px;

//   h3 {
//     color: #333;
//     margin: 0 0 10px;
//   }

//   p {
//     margin: 5px 0;
//   }
// `;

// const Actions = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 10px;
// `;

// const AirdropLink = styled.a`
//   padding: 8px 15px;
//   background-color: #28a745;
//   color: white;
//   text-decoration: none;
//   border-radius: 4px;

//   &:hover {
//     background-color: #218838;
//   }
// `;

// const RemoveButton = styled.button`
//   padding: 8px 15px;
//   background-color: #dc3545;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: #c82333;
//   }
// `;

// const NoItems = styled.p`
//   color: #f8f9fa; /* Light text color for better visibility */
//   text-align: center;
//   font-size: 1.2rem;
// `;










// import React, { useState, useEffect } from "react";
// import styled from "styled-components";

// const Watchlist = () => {
//   const [watchlist, setWatchlist] = useState([]);
//   const [sortOption, setSortOption] = useState("newlyAdded");

//   // Fetch the watchlist from the backend for the logged-in user
//   useEffect(() => {
//     const fetchWatchlist = async () => {
//       try {
//         const userId = "1"; // This should be the logged-in user's ID
//         const response = await fetch(`/api/Users/${userId}`);
//         const data = await response.json();

//         if (data && data.watchlist) {
//           setWatchlist(data.watchlist);
//         }
//       } catch (error) {
//         console.error("Error fetching watchlist:", error);
//       }
//     };

//     fetchWatchlist();
//   }, []);

//   const sortedWatchlist = [...watchlist].sort((a, b) => {
//     switch (sortOption) {
//       case "newlyAdded":
//         return b.id - a.id;
//       case "reverse":
//         return a.id - b.id;
//       case "alphabetical":
//         return a.airdropName.localeCompare(b.AirdropName);
//       case "reverseAlphabetical":
//         return b.airdropName.localeCompare(a.AirdropName);
//       default:
//         return 0;
//     }
//   });

//   const removeFromWatchlist = async (id) => {
//     // Remove from the watchlist state
//     const updatedWatchlist = watchlist.filter((item) => item.id !== id);
//     setWatchlist(updatedWatchlist);

//     // Update the watchlist in the backend
//     try {
//       const userId = "1"; // This should be the logged-in user's ID
//       const response = await fetch(`/api/Users/${userId}`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           watchlist: updatedWatchlist,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to update watchlist in the backend.");
//       }
//     } catch (error) {
//       console.error("Error removing from watchlist:", error);
//     }
//   };

//   return (
//     <PageContainer>
//       <Header>
//         <h1>Watchlist</h1>
//         <SortOptions>
//           <label htmlFor="sort">Sort by:</label>
//           <Select
//             id="sort"
//             value={sortOption}
//             onChange={(e) => setSortOption(e.target.value)}
//           >
//             <option value="newlyAdded">Newly Added</option>
//             <option value="reverse">Oldest Added</option>
//             <option value="alphabetical">Alphabetical</option>
//             <option value="reverseAlphabetical">Reverse Alphabetical</option>
//           </Select>
//         </SortOptions>
//       </Header>

//       {sortedWatchlist.length > 0 ? (
//         <WatchlistContainer>
//           {sortedWatchlist.map((item) => (
//             <AirdropCard key={item.id}>
//               <h3>{item.airdropName}</h3>
//               <Actions>
//                 <AirdropLink href={item.airdropWebsite} target="_blank">
//                   Join Airdrop
//                 </AirdropLink>
//                 <RemoveButton onClick={() => removeFromWatchlist(item.id)}>
//                   Remove
//                 </RemoveButton>
//               </Actions>
//             </AirdropCard>
//           ))}
//         </WatchlistContainer>
//       ) : (
//         <NoItems>No items in your watchlist</NoItems>
//       )}
//     </PageContainer>
//   );
// };

// export default Watchlist;




















import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [sortOption, setSortOption] = useState("newlyAdded");

  // Fetch the watchlist from the backend for the logged-in user
  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const userId = "1"; // This should be the logged-in user's ID
        const response = await fetch(`/api/Users/${userId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch watchlist from the backend.");
        }

        const data = await response.json();
        if (data && data.watchlist) {
          setWatchlist(data.watchlist);
        }
      } catch (error) {
        console.error("Error fetching watchlist:", error);
      }
    };

    fetchWatchlist();
  }, []);

  const sortedWatchlist = [...watchlist].sort((a, b) => {
    switch (sortOption) {
      case "newlyAdded":
        return b.id - a.id;
      case "reverse":
        return a.id - b.id;
      case "alphabetical":
        return a.airdropName.localeCompare(b.airdropName);
      case "reverseAlphabetical":
        return b.airdropName.localeCompare(a.airdropName);
      default:
        return 0;
    }
  });

  const removeFromWatchlist = async (id) => {
    const updatedWatchlist = watchlist.filter((item) => item.id !== id);
    setWatchlist(updatedWatchlist);

    try {
      const userId = "1"; // This should be the logged-in user's ID
      const response = await fetch(`/api/Users/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          watchlist: updatedWatchlist,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update watchlist in the backend.");
      }
    } catch (error) {
      console.error("Error removing from watchlist:", error);
    }
  };

  return (
    <PageContainer>
      <Header>
        <h1>Watchlist</h1>
        <SortOptions>
          <label htmlFor="sort">Sort by:</label>
          <Select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="newlyAdded">Newly Added</option>
            <option value="reverse">Oldest Added</option>
            <option value="alphabetical">Alphabetical</option>
            <option value="reverseAlphabetical">Reverse Alphabetical</option>
          </Select>
        </SortOptions>
      </Header>

      {sortedWatchlist.length > 0 ? (
        <WatchlistContainer>
          {sortedWatchlist.map((item) => (
            <AirdropCard key={item.id}>
              <h3>{item.airdropName}</h3>
              <Actions>
                <AirdropLink href={item.airdropWebsite} target="_blank">
                  Join Airdrop
                </AirdropLink>
                <RemoveButton onClick={() => removeFromWatchlist(item.id)}>
                  Remove
                </RemoveButton>
              </Actions>
            </AirdropCard>
          ))}
        </WatchlistContainer>
      ) : (
        <NoItems>No items in your watchlist</NoItems>
      )}
    </PageContainer>
  );
};

export default Watchlist;


const PageContainer = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  max-width: 100%; /* Ensure it spans the full width of the viewport */
  margin: 0; /* Remove default margin */
  background-image: url('https://github.com/piyush-eon/react-crypto-tracker/blob/master/public/banner2.jpg?raw=true');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 90vh; 
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin-top:50px;

  h1{
  color:white;}
`;

const SortOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  label{
  color:white;}
`;



const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const WatchlistContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 1; /* Allow container to grow and take available space */
  overflow-y: auto; /* Scroll if content exceeds the available height */
`;

const AirdropCard = styled.div`
  background: rgba(255, 255, 255, 0.9); /* Add transparency for better contrast */
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;

  h3 {
    color: #333;
    margin: 0 0 10px;
  }

  p {
    margin: 5px 0;
  }
`;

const Actions = styled.div`
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

const RemoveButton = styled.button`
  padding: 8px 15px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

const NoItems = styled.p`
  color: #f8f9fa; /* Light text color for better visibility */
  text-align: center;
  font-size: 1.2rem;
`;