


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







// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import styled from "styled-components";

// const Wishlist = () => {
//   const [watchlist, setWatchlist] = useState([]);

//   useEffect(() => {
//     const fetchWatchlist = async () => {
//       try {
//         const response = await axios.get("http://localhost:5232/api/WishlistAirdrop");
//         const storedUserData = JSON.parse(localStorage.getItem('currentUser'));
//         const storedUserId = storedUserData ? storedUserData.id : null;

//         if (storedUserId) {
//           const filteredData = response.data.filter(item => item.userId === storedUserId);
//           setWatchlist(filteredData);
//         } else {
//           console.warn("No user data found in localStorage.");
//         }
//       } catch (error) {
//         console.error("Error fetching watchlist data:", error);
//       }
//     };

//     fetchWatchlist();
//   }, []);

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

// const PageContainer = styled.div`
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   padding: 20px;
//   font-family: Arial, sans-serif;
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
//   border: 1px solid #ddd;
//   color:white;
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














// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import styled from "styled-components";

// const Wishlist = () => {
//   const [watchlist, setWatchlist] = useState([]);

//   useEffect(() => {
//     const fetchWatchlist = async () => {
//       try {
//         const response = await axios.get("http://localhost:5232/api/WishlistAirdrop");
//         const storedUserData = JSON.parse(localStorage.getItem('currentUser'));
//         const storedUserId = storedUserData ? storedUserData.id : null;

//         if (storedUserId) {
//           const filteredData = response.data.filter(item => item.userId === storedUserId);
//           setWatchlist(filteredData);
//         } else {
//           console.warn("No user data found in localStorage.");
//         }
//       } catch (error) {
//         console.error("Error fetching watchlist data:", error);
//       }
//     };

//     fetchWatchlist();
//   }, []);

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

// const PageContainer = styled.div`
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   padding: 20px;
//   font-family: Arial, sans-serif;
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
//   border: 1px solid #ddd;
//   color:white;
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

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: white;
  margin-top:80px;
`;

const WatchlistContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top:50px;
  width: 80%;
  max-width: 800px;
`;

const WatchlistItem = styled.div`
  border: 1px solid #ddd;
  color: white;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.8);
    transform: scale(1.02);
  }
`;

const AirdropLink = styled.a`
  color: gold;
  text-decoration: none;
  padding:20px;

  &:hover {
    text-decoration: underline;
  }
`;

const RemoveButton = styled.button`
  background: none;
  color: white;
  border: 1px solid gold;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: gold;
    color: black;
  }
`;

const NoResults = styled.p`
  color: white;
  font-size: 1.1rem;
  margin-top: 20px;
  text-align: center;
`;

const Wishlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const response = await axios.get("http://localhost:5232/api/WishlistAirdrop");
        const storedUserData = JSON.parse(localStorage.getItem("currentUser"));
        const storedUserId = storedUserData ? storedUserData.id : null;

        if (storedUserId) {
          const filteredData = response.data.filter(
            (item) => item.userId === storedUserId
          );
          setWatchlist(filteredData);
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
      <h2>Your Wishlist</h2>
      {watchlist.length > 0 ? (
        <WatchlistContainer>
          {watchlist.map((item) => (
            <WatchlistItem key={item.wishlistId}>
              <h3>{item.airdropName}</h3>
              <AirdropLink href={item.airdropLink} target="_blank" rel="noreferrer">
                Visit Website
              </AirdropLink>
              <RemoveButton onClick={() => handleRemoveFromWatchlist(item.wishlistId)}>
                Remove
              </RemoveButton>
            </WatchlistItem>
          ))}
        </WatchlistContainer>
      ) : (
        <NoResults>Your wishlist is empty</NoResults>
      )}
    </PageContainer>
  );
};

export default Wishlist;
