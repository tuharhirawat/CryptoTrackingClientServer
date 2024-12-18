import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormInput from "../Components/FormInput";
import styled from "styled-components";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await axios.post("http://localhost:3000/users", {
        name: formData.name,
        mobile: formData.mobile,
        email: formData.email,
        password: formData.password,
      });
      alert("Signup successful!");
      navigate("/login");
    } catch (err) {
      console.error("Signup error:", err);
      alert("Something went wrong!");
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <FormInput
        type="text"
        placeholder="Name"
        name="name"
        onChange={handleChange}
        value={formData.name}
      />
      <FormInput
        type="text"
        placeholder="Mobile Number"
        name="mobile"
        onChange={handleChange}
        value={formData.mobile}
      />
      <FormInput
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleChange}
        value={formData.email}
      />
      <FormInput
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
        value={formData.password}
      />
      <FormInput
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
        onChange={handleChange}
        value={formData.confirmPassword}
      />
      <SubmitButton type="submit">Sign Up</SubmitButton>
    </FormContainer>
  );
};

export default Signup;

const FormContainer = styled.form`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #0056b3;
  }
`;
