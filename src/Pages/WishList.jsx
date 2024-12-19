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
//   background: #f9f9f9;
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   padding: 20px;

//   h3 {
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
//   color: #6c757d;
//   text-align: center;
//   font-size: 1.2rem;
// `;




import React, { useState } from "react";
import styled from "styled-components";

const Watchlist = ({ watchlist, setWatchlist }) => {
  const [sortOption, setSortOption] = useState("newlyAdded");

  const sortedWatchlist = [...watchlist].sort((a, b) => {
    switch (sortOption) {
      case "newlyAdded":
        return b.id - a.id;
      case "reverse":
        return a.id - b.id;
      case "alphabetical":
        return a.AirdropName.localeCompare(b.AirdropName);
      case "reverseAlphabetical":
        return b.AirdropName.localeCompare(a.AirdropName);
      default:
        return 0;
    }
  });

  const removeFromWatchlist = (id) => {
    setWatchlist(watchlist.filter((item) => item.id !== id));
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
              <h3>{item.AirdropName}</h3>
              <Actions>
                <AirdropLink href={item.AirdropWebsite} target="_blank">
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
  max-width: 1000px;
  margin: 0 auto;
  background-image: url('https://github.com/piyush-eon/react-crypto-tracker/blob/master/public/banner2.jpg?raw=true');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white; /* Adjust text color for better contrast with the background */
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SortOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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
`;

const AirdropCard = styled.div`
  background: rgba(255, 255, 255, 0.9); /* Add transparency for better contrast */
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;

  h3 {
    color : #333;
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