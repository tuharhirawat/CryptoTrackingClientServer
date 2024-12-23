// import React, { useState } from "react";
// import styled from "styled-components";

// const MyAirdrops = () => {
//   const currentUser = localStorage.getItem("currentUser");
//   const [airdropList, setAirdropList] = useState(() => {
//     const savedData = localStorage.getItem(`airdrops_${currentUser}`);
//     return savedData ? JSON.parse(savedData) : [];
//   });

//   const [airdropName, setAirdropName] = useState("");
//   const [airdropType, setAirdropType] = useState("");
//   const [airdropLink, setAirdropLink] = useState("");
//   const [signupVia, setSignupVia] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newAirdrop = { name: airdropName, type: airdropType, link: airdropLink, signupVia };
//     const updatedList = [...airdropList, newAirdrop];
//     setAirdropList(updatedList);
//     localStorage.setItem(`airdrops_${currentUser}`, JSON.stringify(updatedList));
//     setAirdropName("");
//     setAirdropType("");
//     setAirdropLink("");
//     setSignupVia("");
//   };

//   return (
//     <Container>
//       <Form onSubmit={handleSubmit}>
//         <h2>My Airdrops</h2>
//         <Input
//           type="text"
//           placeholder="Airdrop Name"
//           value={airdropName}
//           onChange={(e) => setAirdropName(e.target.value)}
//         />
//         <Select value={airdropType} onChange={(e) => setAirdropType(e.target.value)}>
//           <option value="">Select Type</option>
//           <option value="Crypto">Crypto</option>
//           <option value="NFT">NFT</option>
//           <option value="Token">Token</option>
//         </Select>
//         <Input
//           type="text"
//           placeholder="Airdrop Link"
//           value={airdropLink}
//           onChange={(e) => setAirdropLink(e.target.value)}
//         />
//         <Input
//           type="text"
//           placeholder="Signup Via"
//           value={signupVia}
//           onChange={(e) => setSignupVia(e.target.value)}
//         />
//         <Button type="submit">Add Airdrop</Button>
//       </Form>
//       <List>
//         <h3>Your Airdrops</h3>
//         {airdropList.map((airdrop, index) => (
//           <ListItem key={index}>
//             <strong>{airdrop.name}</strong> - {airdrop.type} - {airdrop.link} - {airdrop.signupVia}
//           </ListItem>
//         ))}
//       </List>
//     </Container>
//   );
// };

// export default MyAirdrops;

// const Container = styled.div`
//   padding: 20px;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// `;

// const Input = styled.input`
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const Select = styled.select`
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const Button = styled.button`
//   background-color: gold;
//   padding: 10px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   &:hover {
//     background-color: #ffc107;
//   }
// `;

// const List = styled.div`
//   margin-top: 20px;
// `;

// const ListItem = styled.div`
//   margin-bottom: 10px;
//   border-bottom: 1px solid #ccc;
//   padding-bottom: 5px;
// `;




import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const MyAirdrops = () => {
  const currentUser = localStorage.getItem("currentUser");
  const [airdropList, setAirdropList] = useState([]);
  const [airdropName, setAirdropName] = useState("");
  const [airdropType, setAirdropType] = useState("");
  const [airdropLink, setAirdropLink] = useState("");
  const [signupVia, setSignupVia] = useState("");

  // Fetch data globally from the JSON server
  useEffect(() => {
    const fetchAirdrops = async () => {
      try {
        const response = await axios.get("https://cryptotrackingwebsever-1.onrender.com/myairdrops");
        const userAirdrops = response.data.filter((item) => item.user === currentUser);
        setAirdropList(userAirdrops);
      } catch (error) {
        console.error("Error fetching airdrop data:", error);
      }
    };

    fetchAirdrops();
  }, [currentUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAirdrop = {
      name: airdropName,
      type: airdropType,
      link: airdropLink,
      signupVia,
      user: currentUser,
    };

    try {
      // Save new airdrop to the JSON server
      const response = await axios.post(
        "https://cryptotrackingwebsever-1.onrender.com/myairdrops",
        newAirdrop
      );
      // Update the local state with the newly added airdrop
      setAirdropList((prevList) => [...prevList, response.data]);
    } catch (error) {
      console.error("Error adding airdrop:", error);
    }

    // Reset input fields
    setAirdropName("");
    setAirdropType("");
    setAirdropLink("");
    setSignupVia("");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>My Airdrops</h2>
        <Input
          type="text"
          placeholder="Airdrop Name"
          value={airdropName}
          onChange={(e) => setAirdropName(e.target.value)}
        />
        <Select value={airdropType} onChange={(e) => setAirdropType(e.target.value)}>
          <option value="">Select Type</option>
          <option value="Crypto">Crypto</option>
          <option value="NFT">NFT</option>
          <option value="Token">Token</option>
        </Select>
        <Input
          type="text"
          placeholder="Airdrop Link"
          value={airdropLink}
          onChange={(e) => setAirdropLink(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Signup Via"
          value={signupVia}
          onChange={(e) => setSignupVia(e.target.value)}
        />
        <Button type="submit">Add Airdrop</Button>
      </Form>
      <List>
        <h3>Your Airdrops</h3>
        {airdropList.map((airdrop, index) => (
          <ListItem key={index}>
            <strong>{airdrop.name}</strong> - {airdrop.type} -{" "}
            <a href={airdrop.link} target="_blank" rel="noopener noreferrer">
              {airdrop.link}
            </a>{" "}
            - {airdrop.signupVia}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default MyAirdrops;

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: gold;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #ffc107;
  }
`;

const List = styled.div`
  margin-top: 20px;
`;

const ListItem = styled.div`
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
`;
