import React from "react";
import styled from "styled-components";

const FormInput = ({ type, placeholder, name, onChange, value }) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
      required
    />
  );
};

export default FormInput;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #333;
  }

  &:hover {
    border: 2px solid transparent;
    border-image: linear-gradient(45deg, #ff0000, #ff9900, #33cc33, #3399ff, #9900cc, #ff66cc);
    border-image-slice: 1;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2); 
  }
`;

