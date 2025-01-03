// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import axios from "axios";

// const Wishlist = ({ currentUser }) => {
//   const [wishlist, setWishlist] = useState([]);

//   useEffect(() => {
//     const fetchWishlist = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5232/api/Wishlist?userId=${currentUser?.id}`
//         );
//         setWishlist(response.data);
//       } catch (error) {
//         console.error("Error fetching wishlist data:", error);
//       }
//     };

//     if (currentUser?.id) {
//       fetchWishlist();
//     }
//   }, [currentUser]);

//   const handleRemoveFromWishlist = async (wishlistId) => {
//     try {
//       await axios.delete(`http://localhost:5232/api/Wishlist/${wishlistId}`);
//       setWishlist(wishlist.filter((item) => item.wishlistId !== wishlistId));
//     } catch (error) {
//       console.error("Error removing from wishlist:", error);
//     }
//   };

//   return (
//     <WishlistContainer>
//       <Heading>Your Wishlist</Heading>
//       {wishlist.length > 0 ? (
//         <WishlistGrid>
//           {wishlist.map((item) => (
//             <WishlistCard key={item.wishlistId}>
//               <h3>{item.airdropName}</h3>
//               <p>
//                 <strong>Link:</strong> <AirdropLink href={item.airdropLink} target="_blank">Visit Airdrop</AirdropLink>
//               </p>
//               <RemoveButton onClick={() => handleRemoveFromWishlist(item.wishlistId)}>
//                 Remove from Wishlist
//               </RemoveButton>
//             </WishlistCard>
//           ))}
//         </WishlistGrid>
//       ) : (
//         <NoItemsMessage>No items in your wishlist.</NoItemsMessage>
//       )}
//     </WishlistContainer>
//   );
// };

// export default Wishlist;

// const WishlistContainer = styled.div`
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
//   background-color: black;
//   color: white;
//   font-family: Arial, sans-serif;
// `;

// const Heading = styled.h1`
//   margin-bottom: 20px;
//   color: gold;
// `;

// const WishlistGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 20px;
//   width: 100%;
//   max-width: 1200px;
// `;

// const WishlistCard = styled.div`
//   background-color: rgba(0, 0, 0, 0.8);
//   border: 1px solid #444;
//   border-radius: 8px;
//   padding: 20px;
//   box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     transform: scale(1.05);
//     box-shadow: 0 8px 20px rgba(255, 255, 255, 0.3);
//   }

//   h3 {
//     margin-bottom: 10px;
//     color: gold;
//   }

//   p {
//     margin-bottom: 10px;
//   }
// `;

// const AirdropLink = styled.a`
//   color: gold;
//   text-decoration: none;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const RemoveButton = styled.button`
//   background-color: red;
//   color: white;
//   border: none;
//   padding: 10px;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 1rem;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: darkred;
//   }
// `;

// const NoItemsMessage = styled.p`
//   font-size: 1.2rem;
//   color: white;
//   margin-top: 20px;
// `;



















// import React, { useEffect } from "react";
// import styled from "styled-components";
// import axios from "axios";

// const Wishlist = ({ userId, watchlist, setWatchlist }) => {
//   useEffect(() => {
//     const fetchWatchlist = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5232/api/WishlistAirdrop/${userId}`
//         );
//         setWatchlist(response.data);
//       } catch (error) {
//         console.error("Error fetching watchlist data:", error);
//       }
//     };

//     fetchWatchlist();
//   }, [userId, setWatchlist]);

//   return (
//     <PageContainer>
//       <h2>Your Watchlist</h2>
//       {watchlist.length > 0 ? (
//         <WatchlistContainer>
//           {watchlist.map((item) => (
//             <WatchlistItem key={item.id}>
//               <h3>{item.airdropName}</h3>
//               <AirdropLink href={item.airdropWebsite} target="_blank">
//                 Visit Website
//               </AirdropLink>
//             </WatchlistItem>
//           ))}
//         </WatchlistContainer>
//       ) : (
//         <NoResults>Your watchlist is empty</NoResults>
//       )}
//     </PageContainer>
//   );
// };

// export default Wishlist;

















// import React, { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
// import styled from "styled-components";
// import Airdrop from "./Airdrop";
// import axios from "axios";

// const Wishlist = ({ userId }) => {
//   const [watchlist, setWatchlist] = useState([]);

//   useEffect(() => {
//     const fetchWatchlist = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5232/api/WishlistAirdrop/${userId}`
//         );
//         setWatchlist(response.data);
//       } catch (error) {
//         console.error("Error fetching watchlist data:", error);
//       }
//     };

//     fetchWatchlist();
//   }, [userId]);

//   return (
//     <PageContainer>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <Airdrop userId={userId} watchlist={watchlist} setWatchlist={setWatchlist} />
//           }
//         />
//       </Routes>

//       <WatchlistContainer>
//         <h2>Your Watchlist</h2>
//         {watchlist.length > 0 ? (
//           <div>
//             {watchlist.map((item) => (
//               <WatchlistItem key={item.id}>
//                 <h3>{item.airdropName}</h3>
//                 <AirdropLink href={item.airdropWebsite} target="_blank" rel="noreferrer">
//                   Visit Website
//                 </AirdropLink>
//               </WatchlistItem>
//             ))}
//           </div>
//         ) : (
//           <NoResults>Your watchlist is empty</NoResults>
//         )}
//       </WatchlistContainer>
//     </PageContainer>
//   );
// };

// export default Wishlist;

























// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import styled from "styled-components";

// const Wishlist = ({ userId }) => {
//   const [watchlist, setWatchlist] = useState([]);

//   useEffect(() => {
//     const fetchWatchlist = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5232/api/WishlistAirdrop/${userId}`
//         );
//         setWatchlist(response.data);
//       } catch (error) {
//         console.error("Error fetching watchlist data:", error);
//       }
//     };

//     fetchWatchlist();
//   }, [userId]);

//   const handleRemoveFromWatchlist = async (wishlistId) => {
//     try {
//       await axios.delete(`http://localhost:5232/api/WishlistAirdrop/${wishlistId}`);
//       setWatchlist(watchlist.filter((item) => item.wishlistId !== wishlistId));
//     } catch (error) {
//       console.error("Error deleting airdrop from watchlist:", error);
//     }
//   };

//   return (
//     <PageContainer>
//       <h2>Your Watchlist</h2>
//       {watchlist.length > 0 ? (
//         <WatchlistContainer>
//           {watchlist.map((item) => (
//             <WatchlistItem key={item.wishlistId}>
//               <h3>{item.airdropName}</h3>
//               <AirdropLink href={item.airdropLink} target="_blank" rel="noreferrer">
//                 Visit Website
//               </AirdropLink>
//               <button onClick={() => handleRemoveFromWatchlist(item.wishlistId)}>
//                 Remove
//               </button>
//             </WatchlistItem>
//           ))}
//         </WatchlistContainer>
//       ) : (
//         <NoResults>Your watchlist is empty</NoResults>
//       )}
//     </PageContainer>
//   );
// };

// export default Wishlist;

// // Styled Components
// const PageContainer = styled.div`
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   padding: 20px;
//   font-family: Arial, sans-serif;
//   background: black;
//   color: white;
// `;

// const WatchlistContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   width: 100%;
//   max-width: 800px;
// `;

// const WatchlistItem = styled.div`
//   background-color: rgba(0, 0, 0, 0.8);
//   border: 1px solid #ddd;
//   border-radius: 8px;
//   padding: 15px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
// `;

// const AirdropLink = styled.a`
//   color: gold;
//   text-decoration: none;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const NoResults = styled.p`
//   color: white;
//   font-size: 1.1rem;
//   margin-top: 20px;
//   text-align: center;
// `;







import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Wishlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const response = await axios.get("http://localhost:5232/api/WishlistAirdrop");
        const storedUserData = JSON.parse(localStorage.getItem('userData'));
        const storedUserId = storedUserData ? storedUserData.id : null;

        if (storedUserId) {
          const filteredData = response.data.filter(item => item.userId === storedUserId);
          setWatchlist(filteredData);
        } else {
          console.warn("No user data found in localStorage.");
        }
      } catch (error) {
        console.error("Error fetching watchlist data:", error);
      }
    };

    fetchWatchlist();
  }, []);

  const handleRemoveFromWatchlist = async (wishlistId) => {
    try {
      await axios.delete(`http://localhost:5232/api/WishlistAirdrop/${wishlistId}`);
      setWatchlist(watchlist.filter((item) => item.wishlistId !== wishlistId));
    } catch (error) {
      console.error("Error deleting airdrop from watchlist:", error);
    }
  };

  return (
    <PageContainer>
      <h2>Your Watchlist</h2>
      {watchlist.length > 0 ? (
        <WatchlistContainer>
          {watchlist.map((item) => (
            <WatchlistItem key={item.wishlistId}>
              <h3>{item.airdropName}</h3>
              <AirdropLink href={item.airdropLink} target="_blank" rel="noreferrer">
                Visit Website
              </AirdropLink>
              <button onClick={() => handleRemoveFromWatchlist(item.wishlistId)}>
                Remove
              </button>
            </WatchlistItem>
          ))}
        </WatchlistContainer>
      ) : (
        <NoResults>Your watchlist is empty</NoResults>
      )}
    </PageContainer>
  );
};

export default Wishlist;

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  background: black;
  color: white;
`;

const WatchlistContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 800px;
`;

const WatchlistItem = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const AirdropLink = styled.a`
  color: gold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const NoResults = styled.p`
  color: white;
  font-size: 1.1rem;
  margin-top: 20px;
  text-align: center;
`;
