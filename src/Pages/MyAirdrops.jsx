// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import axios from "axios";

// const MyAirdrops = () => {
//   const [airdropList, setAirdropList] = useState([]);
//   const [airdropName, setAirdropName] = useState("");
//   const [airdropType, setAirdropType] = useState("");
//   const [airdropLink, setAirdropLink] = useState("");
//   const [signupVia, setSignupVia] = useState("");
//   const [isEditing, setIsEditing] = useState(false);
//   const [editingId, setEditingId] = useState(null);
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const loggedInUser = localStorage.getItem("currentUser"); // Simulating login
//         if (!loggedInUser) {
//           console.error("No user is logged in.");
//           return;
//         }

//         const userResponse = await axios.get("https://cryptotrackingwebsever-1.onrender.com/users");
//         const user = userResponse.data.find((user) => user.name === loggedInUser);

//         if (!user) {
//           console.error("User not found in the system.");
//           return;
//         }

//         setCurrentUser(user);

//         const airdropResponse = await axios.get("https://cryptotrackingwebsever-1.onrender.com/myairdrops");
//         const userAirdrops = airdropResponse.data.filter((item) => item.user === user.id);
//         setAirdropList(userAirdrops);
//       } catch (error) {
//         console.error("Error fetching user or airdrop data:", error);
//       }
//     };

//     fetchUserData();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!airdropName || !airdropType || !airdropLink || !signupVia) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     const newAirdrop = {
//       name: airdropName,
//       type: airdropType,
//       link: airdropLink,
//       signupVia,
//       user: currentUser.id,
//     };

//     if (isEditing) {
//       try {
//         await axios.put(`https://cryptotrackingwebsever-1.onrender.com/myairdrops/${editingId}`, newAirdrop);
//         setAirdropList((prevList) =>
//           prevList.map((airdrop) =>
//             airdrop.id === editingId ? { ...airdrop, ...newAirdrop } : airdrop
//           )
//         );
//         setIsEditing(false);
//         setEditingId(null);
//       } catch (error) {
//         console.error("Error updating airdrop:", error);
//       }
//     } else {
//       try {
//         const response = await axios.post(
//           "https://cryptotrackingwebsever-1.onrender.com/myairdrops",
//           newAirdrop
//         );
//         setAirdropList((prevList) => [...prevList, response.data]);
//       } catch (error) {
//         console.error("Error adding airdrop:", error);
//       }
//     }

//     setAirdropName("");
//     setAirdropType("");
//     setAirdropLink("");
//     setSignupVia("");
//   };

//   const handleEdit = (id) => {
//     const airdropToEdit = airdropList.find((airdrop) => airdrop.id === id);
//     setAirdropName(airdropToEdit.name);
//     setAirdropType(airdropToEdit.type);
//     setAirdropLink(airdropToEdit.link);
//     setSignupVia(airdropToEdit.signupVia);
//     setIsEditing(true);
//     setEditingId(id);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`https://cryptotrackingwebsever-1.onrender.com/myairdrops/${id}`);
//       setAirdropList((prevList) => prevList.filter((airdrop) => airdrop.id !== id));
//     } catch (error) {
//       console.error("Error deleting airdrop:", error);
//     }
//   };

//   return (
//     <Container>
//       <Form onSubmit={handleSubmit}>
//         <h2>{currentUser ? `${currentUser.name}'s Airdrops` : "My Airdrops"}</h2>
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
//         <Button type="submit">{isEditing ? "Update Airdrop" : "Add Airdrop"}</Button>
//       </Form>
//       <Table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Type</th>
//             <th>Link</th>
//             <th>Signup Via</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {airdropList.map((airdrop) => (
//             <tr key={airdrop.id}>
//               <td>{airdrop.name}</td>
//               <td>{airdrop.type}</td>
//               <td>
//                 <a href={airdrop.link} target="_blank" rel="noopener noreferrer">
//                   {airdrop.link}
//                 </a>
//               </td>
//               <td>{airdrop.signupVia}</td>
//               <td>
//                 <ActionButton onClick={() => handleEdit(airdrop.id)}>Edit</ActionButton>
//                 <ActionButton delete onClick={() => handleDelete(airdrop.id)}>
//                   Delete
//                 </ActionButton>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </Container>
//   );
// };

// export default MyAirdrops;

// const Container = styled.div`
//   padding: 20px;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background: linear-gradient(to right, #283048, #859398);
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
//   &:focus {
//     border-color: #007bff;
//     outline: none;
//   }
// `;

// const Select = styled.select`
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const Button = styled.button`
//   background-color: #4caf50;
//   padding: 10px;
//   border: none;
//   border-radius: 4px;
//   color: white;
//   cursor: pointer;
//   &:hover {
//     background-color: #45a049;
//   }
// `;

// const Table = styled.table`
//   width: 100%;
//   margin-top: 20px;
//   border-collapse: collapse;

//   th,
//   td {
//     padding: 10px;
//     border: 1px solid #ccc;
//     text-align: center;
//   }

//   th {
//     background-color: #f2f2f2;
//   }

//   tr:hover {
//     background-color: #f1f1f1;
//   }
// `;

// const ActionButton = styled.button`
//   background-color: ${(props) => (props.delete ? "#f44336" : "#2196f3")};
//   color: white;
//   border: none;
//   padding: 5px 10px;
//   border-radius: 4px;
//   cursor: pointer;
//   &:hover {
//     opacity: 0.9;
//   }
// `;







// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import axios from "axios";

// const MyAirdrops = ({ loggedInUser }) => {
//   const [airdropList, setAirdropList] = useState([]);
//   const [airdropName, setAirdropName] = useState("");
//   const [airdropType, setAirdropType] = useState("");
//   const [airdropLink, setAirdropLink] = useState("");
//   const [signupVia, setSignupVia] = useState("");

//   useEffect(() => {
//     if (!loggedInUser) return;

//     const fetchAirdrops = async () => {
//       try {
//         const response = await axios.get(
//           "https://cryptotrackingwebsever-1.onrender.com/myairdrops"
//         );
//         const userAirdrops = response.data.filter(
//           (item) => item.user === loggedInUser.email
//         );
//         setAirdropList(userAirdrops);
//       } catch (error) {
//         console.error("Error fetching airdrop data:", error);
//       }
//     };

//     fetchAirdrops();
//   }, [loggedInUser]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!loggedInUser) return;

//     const newAirdrop = {
//       name: airdropName,
//       type: airdropType,
//       link: airdropLink,
//       signupVia,
//       user: loggedInUser.email,
//     };

//     try {
//       const response = await axios.post(
//         "https://cryptotrackingwebsever-1.onrender.com/myairdrops",
//         newAirdrop
//       );
//       setAirdropList((prevList) => [...prevList, response.data]);
//     } catch (error) {
//       console.error("Error adding airdrop:", error);
//     }

//     setAirdropName("");
//     setAirdropType("");
//     setAirdropLink("");
//     setSignupVia("");
//   };

//   return (
//     <Container>
//       <WelcomeMessage>
//         Welcome, {loggedInUser?.name || "User"}!
//       </WelcomeMessage>
//       <Form onSubmit={handleSubmit}>
//         <h2>My Airdrops</h2>
//         <Input
//           type="text"
//           placeholder="Airdrop Name"
//           value={airdropName}
//           onChange={(e) => setAirdropName(e.target.value)}
//         />
//         <Select
//           value={airdropType}
//           onChange={(e) => setAirdropType(e.target.value)}
//         >
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
//             <strong>{airdrop.name}</strong> - {airdrop.type} -
//             <a href={airdrop.link} target="_blank" rel="noopener noreferrer">
//               {airdrop.link}
//             </a>{" "}
//             - {airdrop.signupVia}
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

// const WelcomeMessage = styled.h1`
//   font-size: 1.5rem;
//   color: #333;
//   margin-bottom: 20px;
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
background-image: url("https://github.com/piyush-eon/react-crypto-tracker/blob/master/public/banner2.jpg?raw=true");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display:flex;
  flex-direction:column;
  align-items:center;


  padding: 20px;
  margin-top: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2{
  color:white;}
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
    background-color: rgb(60, 50, 54);
  color: white;
  border: 3px solid transparent;
  padding: 10px;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    color: black;
    background-color: gold;
  }
`;

const List = styled.div`
  margin-top: 20px;
  h3{
  color:white;}
`;

const ListItem = styled.div`
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;

  color:white;
`;