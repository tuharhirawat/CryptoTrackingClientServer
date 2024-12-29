
// import React from "react";

// const Profile = () => {
//   const userData = JSON.parse(localStorage.getItem("userData")) || {};

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>User Profile</h2>
//       <div style={styles.profileCard}>
//         <p><strong>Name:</strong> {userData.name || "Guest"}</p>
//         <p><strong>Email:</strong> {userData.email || "Not Provided"}</p>
//         <p><strong>Joined:</strong> {userData.date || "N/A"}</p>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "column",
//     height: "100vh",
//     backgroundColor: "#f4f4f4",
//   },
//   title: {
//     fontSize: "2rem",
//     marginBottom: "20px",
//   },
//   profileCard: {
//     backgroundColor: "#fff",
//     padding: "20px",
//     borderRadius: "8px",
//     boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
//     width: "300px",
//     textAlign: "center",
//   },
// };


// import React, { useState, useEffect } from "react";

// const Profile = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem("userData"));
//     setUser(userData);
//   }, []);

//   if (!user) {
//     return <p>Loading profile...</p>;
//   }

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>User Profile</h2>
//       <div style={styles.profileCard}>
//         <p><strong>Name:</strong> {user.name}</p>
//         <p><strong>Email:</strong> {user.email}</p>
//         <p><strong>Joined:</strong> {user.date}</p>
//         <p><strong>Role:</strong> {user.role || "User"}</p>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "column",
//     height: "100vh",
//     backgroundColor: "#f4f4f4",
//   },
//   title: {
//     fontSize: "2rem",
//     marginBottom: "20px",
//   },
//   profileCard: {
//     backgroundColor: "#fff",
//     padding: "20px",
//     borderRadius: "8px",
//     boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
//     width: "300px",
//     textAlign: "center",
//   },
// };



// import React, { useState, useEffect } from "react";

// const Profile = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem("userData"));
//     setUser(userData);
//   }, []);

//   if (!user) {
//     return <p>Loading profile...</p>;
//   }

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>User Profile</h2>
//       <div style={styles.profileCard}>
//         <p><strong>Name:</strong> {user.name}</p>
//         <p><strong>Email:</strong> {user.email}</p>
//         <p><strong>Joined:</strong> {user.date}</p>
//         <p><strong>Role:</strong> {user.role || "User"}</p>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "column",
//     height: "100vh",
//     backgroundColor: "#f4f4f4",
//   },
//   title: {
//     fontSize: "2rem",
//     marginBottom: "20px",
//   },
//   profileCard: {
//     backgroundColor: "#fff",
//     padding: "20px",
//     borderRadius: "8px",
//     boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
//     width: "300px",
//     textAlign: "center",
//   },
// };




// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Profile = ({ setIsLoggedIn }) => {
//   const [user, setUser] = useState(null);
//   const [editing, setEditing] = useState(false);
//   const [updatedUser, setUpdatedUser] = useState({});
//   const [changePassword, setChangePassword] = useState(false);
//   const [passwordData, setPasswordData] = useState({ currentPassword: "", newPassword: "" });
//   const navigate = useNavigate();

//   useEffect(() => {
//     const userData = localStorage.getItem("userData");
//     if (userData) {
//       setUser(JSON.parse(userData));
//       setUpdatedUser(JSON.parse(userData));
//     } else {
//       navigate("/login");
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("userData");
//     setIsLoggedIn(false);
//     navigate("/login");
//   };

//   const handleEditToggle = () => {
//     setEditing(!editing);
//     setChangePassword(false);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedUser({ ...updatedUser, [name]: value });
//   };

//   const handlePasswordChange = (e) => {
//     const { name, value } = e.target;
//     setPasswordData({ ...passwordData, [name]: value });
//   };

//   const handleUpdateProfile = async () => {
//     try {
//       await axios.put(`http://localhost:3000/users/${user.id}`, updatedUser);
//       localStorage.setItem("userData", JSON.stringify(updatedUser));
//       setUser(updatedUser);
//       setEditing(false);
//       alert("Profile updated successfully!");
//     } catch (err) {
//       console.error("Error updating profile:", err);
//       alert("Failed to update profile.");
//     }
//   };

//   const handleDeleteProfile = async () => {
//     try {
//       await axios.delete(`http://localhost:3000/users/${user.id}`);
//       localStorage.removeItem("userData");
//       setIsLoggedIn(false);
//       navigate("/signup");
//       alert("Profile deleted successfully.");
//     } catch (err) {
//       console.error("Error deleting profile:", err);
//       alert("Failed to delete profile.");
//     }
//   };

//   const handleUpdatePassword = async () => {
//     if (passwordData.currentPassword !== user.password) {
//       alert("Current password is incorrect!");
//       return;
//     }
//     if (!passwordData.newPassword) {
//       alert("New password cannot be empty!");
//       return;
//     }

//     try {
//       const updatedPasswordUser = { ...user, password: passwordData.newPassword };
//       await axios.put(`http://localhost:3000/users/${user.id}`, updatedPasswordUser);
//       localStorage.setItem("userData", JSON.stringify(updatedPasswordUser));
//       setUser(updatedPasswordUser);
//       setChangePassword(false);
//       alert("Password updated successfully!");
//     } catch (err) {
//       console.error("Error updating password:", err);
//       alert("Failed to update password.");
//     }
//   };

//   if (!user) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <ProfileContainer>
//       <h2>Welcome, {user.name}!</h2>

//       {editing ? (
//         <div>
//           <FormInput
//             type="text"
//             name="name"
//             value={updatedUser.name}
//             placeholder="Name"
//             onChange={handleInputChange}
//           />
//           <FormInput
//             type="text"
//             name="mobile"
//             value={updatedUser.mobile}
//             placeholder="Mobile Number"
//             onChange={handleInputChange}
//           />
//           <FormInput
//             type="email"
//             name="email"
//             value={updatedUser.email}
//             placeholder="Email"
//             onChange={handleInputChange}
//           />
//           <ActionButton onClick={handleUpdateProfile}>Save</ActionButton>
//           <CancelButton onClick={handleEditToggle}>Cancel</CancelButton>
//         </div>
//       ) : changePassword ? (
//         <div>
//           <FormInput
//             type="password"
//             name="currentPassword"
//             placeholder="Current Password"
//             value={passwordData.currentPassword}
//             onChange={handlePasswordChange}
//           />
//           <FormInput
//             type="password"
//             name="newPassword"
//             placeholder="New Password"
//             value={passwordData.newPassword}
//             onChange={handlePasswordChange}
//           />
//           <ActionButton onClick={handleUpdatePassword}>Update Password</ActionButton>
//           <CancelButton onClick={() => setChangePassword(false)}>Cancel</CancelButton>
//         </div>
//       ) : (
//         <ProfileDetails>
//           <p>
//             <strong>Name:</strong> {user.name}
//           </p>
//           <p>
//             <strong>Email:</strong> {user.email}
//           </p>
//           <p>
//             <strong>Mobile:</strong> {user.mobile}
//           </p>
//           <EditButton onClick={handleEditToggle}>Edit Profile</EditButton>
//           <EditButton onClick={() => setChangePassword(true)}>Change Password</EditButton>
//           <DeleteButton onClick={handleDeleteProfile}>Delete Profile</DeleteButton>
//           <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
//         </ProfileDetails>
//       )}
//     </ProfileContainer>
//   );
// };

// export default Profile;

// const ProfileContainer = styled.div`
//   max-width: 600px;
//   margin: 50px auto;
//   padding: 20px;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
//   text-align: center;
// `;

// const ProfileDetails = styled.div`
//   margin: 20px 0;
//   text-align: left;
// `;

// const FormInput = styled.input`
//   width: 100%;
//   padding: 10px;
//   margin: 10px 0;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const ActionButton = styled.button`
//   background-color: #007bff;
//   color: white;
//   border: none;
//   padding: 10px;
//   margin: 5px;
//   font-size: 1rem;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const DeleteButton = styled(ActionButton)`
//   background-color: #ff4d4d;

//   &:hover {
//     background-color: #cc0000;
//   }
// `;

// const CancelButton = styled(ActionButton)`
//   background-color: gray;

//   &:hover {
//     background-color: darkgray;
//   }
// `;

// const LogoutButton = styled(ActionButton)`
//   margin-top: 10px;
//   background-color: #555;

//   &:hover {
//     background-color: #333;
//   }
// `;

// const EditButton = styled(ActionButton)`
//   background-color: #6c757d;

//   &:hover {
//     background-color: #495057;
//   }
// `;




import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = ({ setIsLoggedIn }) => {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({});
  const [changePassword, setChangePassword] = useState(false);
  const [passwordData, setPasswordData] = useState({ currentPassword: "", newPassword: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      setUser(JSON.parse(userData));
      setUpdatedUser(JSON.parse(userData));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const handleEditToggle = () => {
    setEditing(!editing);
    setChangePassword(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const handleUpdateProfile = async () => {
    try {
      await axios.put(`http://localhost:5025/api/Users/${user.id}`, updatedUser);
      localStorage.setItem("userData", JSON.stringify(updatedUser));
      setUser(updatedUser);
      setEditing(false);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Error updating profile:", err);
      alert("Failed to update profile.");
    }
  };

  const handleDeleteProfile = async () => {
    try {
      await axios.delete(`http://localhost:5025/api/Users/${user.id}`);
      localStorage.removeItem("userData");
      setIsLoggedIn(false);
      navigate("/signup");
      alert("Profile deleted successfully.");
    } catch (err) {
      console.error("Error deleting profile:", err);
      alert("Failed to delete profile.");
    }
  };

  const handleUpdatePassword = async () => {
    if (passwordData.currentPassword !== user.password) {
      alert("Current password is incorrect!");
      return;
    }
    if (!passwordData.newPassword) {
      alert("New password cannot be empty!");
      return;
    }

    try {
      const updatedPasswordUser = { ...user, password: passwordData.newPassword };
      await axios.put(`http://localhost:5025/api/Users/${user.id}`, updatedPasswordUser);
      localStorage.setItem("userData", JSON.stringify(updatedPasswordUser));
      setUser(updatedPasswordUser);
      setChangePassword(false);
      alert("Password updated successfully!");
    } catch (err) {
      console.error("Error updating password:", err);
      alert("Failed to update password.");
    }
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <Background>
      <ProfileContainer>
        <h2>Welcome, {user.name}!</h2>

        {editing ? (
          <div>
            <FormInput
              type="text"
              name="name"
              value={updatedUser.name}
              placeholder="Name"
              onChange={handleInputChange}
            />
            <FormInput
              type="text"
              name="mobile"
              value={updatedUser.mobile}
              placeholder="Mobile Number"
              onChange={handleInputChange}
            />
            <FormInput
              type="email"
              name="email"
              value={updatedUser.email}
              placeholder="Email"
              onChange={handleInputChange}
            />
            <ActionButton onClick={handleUpdateProfile}>Save</ActionButton>
            <CancelButton onClick={handleEditToggle}>Cancel</CancelButton>
          </div>
        ) : changePassword ? (
          <div>
            <FormInput
              type="password"
              name="currentPassword"
              placeholder="Current Password"
              value={passwordData.currentPassword}
              onChange={handlePasswordChange}
            />
            <FormInput
              type="password"
              name="newPassword"
              placeholder="New Password"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
            />
            <ActionButton onClick={handleUpdatePassword}>Update Password</ActionButton>
            <CancelButton onClick={() => setChangePassword(false)}>Cancel</CancelButton>
          </div>
        ) : (
          <ProfileDetails>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Mobile:</strong> {user.mobile}
            </p>
            <EditButton onClick={handleEditToggle}>Edit Profile</EditButton>
            <EditButton onClick={() => setChangePassword(true)}>Change Password</EditButton>
            <DeleteButton onClick={handleDeleteProfile}>Delete Profile</DeleteButton>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </ProfileDetails>
        )}
      </ProfileContainer>
    </Background>
  );
};

export default Profile;

const Background = styled.div`
  background-image: url("https://github.com/piyush-eon/react-crypto-tracker/blob/master/public/banner2.jpg?raw=true");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileContainer = styled.div`
  width: 600px;
  padding: 20px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ProfileDetails = styled.div`
  margin: 20px 0;
  text-align: left;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ActionButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  margin: 5px;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    transition-duration: 1s;
    color: black;
    background-color: gold;
  }
`;

const DeleteButton = styled(ActionButton)`
  background-color: #ff4d4d;

  &:hover {
    color:white;
    transition-duration:1s;
    background-color: #cc0000;
  }
`;

const CancelButton = styled(ActionButton)`
  background-color: gray;

  &:hover {
    transition-duration: 1s;
    color: black;
    background-color: gold;
  }
`;

const LogoutButton = styled(ActionButton)`
  margin-top: 10px;
  background-color: #555;

  &:hover {
  transition-duration: 1s;
    color:white;
    background-color: #333;
  }
`;

const EditButton = styled(ActionButton)`
  background-color: #6c757d;

  &:hover {
    transition-duration: 1s;
    color: black;
    background-color: gold;
  }
`;