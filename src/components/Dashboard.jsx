// import React from "react";
// import styled from "styled-components";

// const Dashboard = ({ currentUser, handleLogout }) => {
//   return (
//     <PageContainer>
//       <h1>Welcome, {currentUser?.name || "User"}!</h1>
//       <Button onClick={handleLogout}>Logout</Button>
//     </PageContainer>
//   );
// };

// const PageContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   background-color: #f4f4f4;
// `;

// const Button = styled.button`
//   padding: 0.75rem 1.5rem;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// export default Dashboard;




import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = ({ setIsLoggedIn }) => {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({});
  const [changePassword, setChangePassword] = useState(false);
  const [passwordData, setPasswordData] = useState({ currentPassword: "", newPassword: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      setUpdatedUser(parsedUser);
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
    setUpdatedUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleUpdateProfile = async () => {
    try {
      const response = await axios.put(`http://localhost:5232/api/Users/${user.id}`, updatedUser);
      if (response.status === 200) {
        localStorage.setItem("userData", JSON.stringify(updatedUser));
        setUser(updatedUser);
        setEditing(false);
        alert("Profile updated successfully!");
      }
    } catch (err) {
      console.error("Error updating profile:", err);
      alert("Failed to update profile. Please try again.");
    }
  };

  const handleDeleteProfile = async () => {
    try {
      const response = await axios.delete(`http://localhost:5232/api/Users/${user.id}`);
      if (response.status === 200) {
        localStorage.removeItem("userData");
        setIsLoggedIn(false);
        navigate("/signup");
        alert("Profile deleted successfully.");
      }
    } catch (err) {
      console.error("Error deleting profile:", err);
      alert("Failed to delete profile. Please try again.");
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
      await axios.put(`http://localhost:5232/api/Users/${user.id}`, updatedPasswordUser);
      localStorage.setItem("userData", JSON.stringify(updatedPasswordUser));
      setUser(updatedPasswordUser);
      setUpdatedUser(updatedPasswordUser);
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
        <h2>Welcome, {user.username}!</h2>

        {editing ? (
          <div>
            <FormInput
              type="text"
              name="username"
              value={updatedUser.username || ""}
              placeholder="Name"
              onChange={handleInputChange}
            />
            <FormInput
              type="text"
              name="mobileNumber"
              value={updatedUser.mobileNumber || ""}
              placeholder="Mobile Number"
              onChange={handleInputChange}
            />
            <FormInput
              type="email"
              name="email"
              value={updatedUser.email || ""}
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
              <strong>Name:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Mobile:</strong> {user.mobileNumber}
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

export default Dashboard;

const Background = styled.div`
  background: linear-gradient(120deg, #333, #555);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const ProfileContainer = styled.div`
  width: 90%;
  max-width: 600px;
  padding: 20px;
  background-color: #444;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  text-align: center;
`;

const ProfileDetails = styled.div`
  margin: 20px 0;
  text-align: left;

  p {
    font-size: 1rem;
    margin: 10px 0;
  }
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 4px;
  background-color: #555;
  color: #fff;

  &::placeholder {
    color: #bbb;
  }
`;

const ActionButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px;
  margin: 5px;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: gold;
    color: #333;
  }
`;

const EditButton = styled(ActionButton)`
  background-color: #6c757d;

  &:hover {
    background-color: gold;
    color: #333;
  }
`;

const CancelButton = styled(ActionButton)`
  background-color: gray;

  &:hover {
    background-color: gold;
    color: #333;
  }
`;

const DeleteButton = styled(ActionButton)`
  background-color: #ff4d4d;

  &:hover {
    background-color: #cc0000;
    color: white;
  }
`;

const LogoutButton = styled(ActionButton)`
  margin-top: 10px;
  background-color: #555;

  &:hover {
    background-color: #333;
    color: white;
  }
`;
