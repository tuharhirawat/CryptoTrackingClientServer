import React, { useState, useEffect } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";


const Login = ({ setIsLoggedIn, setCurrentUser }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      navigate("/news");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:5232/api/Users");
      const user = response.data.find((u) => u.email === formData.email);

      if (user ) {
        setIsLoggedIn(true);
        setCurrentUser(user);
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("currentUser", JSON.stringify(user));
        navigate("/dashboard");
      } else {
        setError("Invalid email or password.");
      }
    } catch (error) {
      setError("Error during login. Please try again.");
    }
  };

  return (
    <PageContainer>
      <FormContainer onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        {error && <ErrorText>{error}</ErrorText>}
        <SubmitButton type="submit">Login</SubmitButton>
      </FormContainer>
    </PageContainer>
  );
};

export default Login;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("https://github.com/piyush-eon/react-crypto-tracker/blob/master/public/banner2.jpg?raw=true");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  animation: ${fadeIn} 1s ease-in-out;
`;

const FormContainer = styled.form`
  // display: flex;
  // flex-direction: column;
  align-items: center;
  max-width: 400px;
  padding: 50px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-repeat: no-repeat;
  animation: ${slideIn} 1s ease-in-out;

  h2 {
    margin-bottom: 20px;
    color: rgb(60, 50, 54);
  }

   &:hover {
    border: 3px solid transparent;
    border-image: linear-gradient(45deg, #ff9900, #33cc33, #3399ff);
    border-image-slice: 1;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: rgb(60, 50, 54);
    box-shadow: 0 0 3px rgba(60, 50, 54, 0.5);
  }

   &:hover {
    border: 3px solid transparent;
    border-image: linear-gradient(45deg, #ff9900, #33cc33, #3399ff);
    border-image-slice: 1;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }
`;

const SubmitButton = styled.button`
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

const ErrorText = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: 10px;
`;