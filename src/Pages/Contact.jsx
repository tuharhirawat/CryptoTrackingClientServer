import React, { useState } from "react";
import axios from "axios"; 
import styled from "styled-components";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let validationErrors = {};

    if (!formData.name) {
      validationErrors.name = "Name is required";
    }

    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }

    if (!formData.message) {
      validationErrors.message = "Message is required";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setFormStatus("loading");

    try {
      await axios.post("http://localhost:3000/contact", formData);
      setFormStatus("success");
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); 
    } catch (err) {
      console.error("Error sending message:", err);
      setFormStatus("error");
      alert("There was an issue sending your message. Please try again.");
    }
  };

  return (
    <ContactContainer>
      <h2>Contact Us</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <Error>{errors.name}</Error>}

        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <Error>{errors.email}</Error>}

        <TextArea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <Error>{errors.message}</Error>}

        <SubmitButton type="submit" disabled={formStatus === "loading"}>
          {formStatus === "loading" ? "Sending..." : "Send Message"}
        </SubmitButton>
      </Form>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #ccc;
  height: 150px;
`;

const SubmitButton = styled.button`
  padding: 15px;
  background-color:rgb(60, 50, 54);
  color: white;
  border: 3px solid transparent;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    border-color: #646cff;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Error = styled.div`
  color: red;
  font-size: 0.9rem;
  margin-top: 5px;
`;
