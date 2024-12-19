// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import FormInput from "../Components/FormInput";
// import styled from "styled-components";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     mobile: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       return ("Passwords do not match!");
//     }

//     try {
//       await axios.post("http://localhost:3000/users", {
//         name: formData.name,
//         mobile: formData.mobile,
//         email: formData.email,
//         password: formData.password,
//       });
//       alert("Signup successful!");
//       navigate("/login");
//     } catch (err) {
//       console.error("Signup error:", err);
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <FormContainer onSubmit={handleSubmit}>
//       <h2>Sign Up</h2>
//       <FormInput
//         type="text"
//         placeholder="Name"
//         name="name"
//         onChange={handleChange}
//         value={formData.name}
//       />
//       <FormInput
//         type="text"
//         placeholder="Mobile Number"
//         name="mobile"
//         onChange={handleChange}
//         value={formData.mobile}
//       />
//       <FormInput
//         type="email"
//         placeholder="Email"
//         name="email"
//         onChange={handleChange}
//         value={formData.email}
//       />
//       <FormInput
//         type="password"
//         placeholder="Password"
//         name="password"
//         onChange={handleChange}
//         value={formData.password}
//       />
//       <FormInput
//         type="password"
//         placeholder="Confirm Password"
//         name="confirmPassword"
//         onChange={handleChange}
//         value={formData.confirmPassword}
//       />
//       <SubmitButton type="submit">Sign Up</SubmitButton>
//     </FormContainer>
//   );
// };

// export default Signup;

// const FormContainer = styled.form`
//   max-width: 400px;
//   margin: 50px auto;
//   padding: 20px;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
// `;

// const SubmitButton = styled.button`
//   background-color: #007bff;
//   color: white;
//   border: none;
//   padding: 10px;
//   font-size: 1rem;
//   border-radius: 4px;
//   cursor: pointer;
//   width: 100%;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import FormInput from "../Components/FormInput";
// import styled from "styled-components";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     mobile: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [formStatus, setFormStatus] = useState("");
//   const navigate = useNavigate();

//   const validateForm = () => {
//     let validationErrors = {};

//     if (!formData.name) {
//       validationErrors.name = "Name is required.";
//     } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
//       validationErrors.name = "Name should contain only alphabets and spaces.";
//     }

//     if (!formData.mobile) {
//       validationErrors.mobile = "Mobile number is required.";
//     } else if (!/^\d{10}$/.test(formData.mobile)) {
//       validationErrors.mobile = "Mobile number must be exactly 10 digits.";
//     }

//     if (!formData.email) {
//       validationErrors.email = "Email is required.";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       validationErrors.email = "Invalid email format.";
//     }

//     if (!formData.password) {
//       validationErrors.password = "Password is required.";
//     } else if (
//       !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
//         formData.password
//       )
//     ) {
//       validationErrors.password =
//         "Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character.";
//     }

//     if (!formData.confirmPassword) {
//       validationErrors.confirmPassword = "Confirm Password is required.";
//     } else if (formData.confirmPassword !== formData.password) {
//       validationErrors.confirmPassword = "Passwords do not match.";
//     }

//     setErrors(validationErrors);
//     return Object.keys(validationErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: "",
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setFormStatus("loading");

//     try {
//       const response = await axios.get("http://localhost:3000/users");

//       const existingUser = response.data.find(
//         (user) =>
//           user.email === formData.email ||
//           user.name === formData.name ||
//           user.mobile === formData.mobile
//       );

//       if (existingUser) {
//         const newErrors = {};
//         if (existingUser.email === formData.email) {
//           newErrors.email = "Email already exists.";
//         }
//         else if (existingUser.name === formData.name) {
//           newErrors.name = "Username already exists.";
//         }
//         else if (existingUser.mobile === formData.mobile) {
//           newErrors.mobile = "Mobile number already exists.";
//         }
//         setErrors(newErrors);
//         setFormStatus("");
//         return;
//       }

//       await axios.post("http://localhost:3000/users", {
//         name: formData.name,
//         mobile: formData.mobile,
//         email: formData.email,
//         password: formData.password,
//       });

//       setFormStatus("success");
//       alert("Signup successful!");
//       navigate("/login");
//     } catch (err) {
//       console.error("Signup error:", err);
//       setFormStatus("error");
//       setErrors({ general: "Something went wrong! Please try again later." });
//     }
//   };

//   return (
//     <FormContainer onSubmit={handleSubmit}>
//       <h2>Sign Up</h2>

//       {formStatus === "error" && <ErrorMessage>{errors.general}</ErrorMessage>}

//       <FormInput
//         type="text"
//         placeholder="Name"
//         name="name"
//         onChange={handleChange}
//         value={formData.name}
//       />
//       {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}

//       <FormInput
//         type="text"
//         placeholder="Mobile Number"
//         name="mobile"
//         onChange={handleChange}
//         value={formData.mobile}
//       />
//       {errors.mobile && <ErrorMessage>{errors.mobile}</ErrorMessage>}

//       <FormInput
//         type="email"
//         placeholder="Email"
//         name="email"
//         onChange={handleChange}
//         value={formData.email}
//       />
//       {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

//       <FormInput
//         type="password"
//         placeholder="Password"
//         name="password"
//         onChange={handleChange}
//         value={formData.password}
//       />
//       {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}

//       <FormInput
//         type="password"
//         placeholder="Confirm Password"
//         name="confirmPassword"
//         onChange={handleChange}
//         value={formData.confirmPassword}
//       />
//       {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}

//       <SubmitButton type="submit" disabled={formStatus === "loading"}>
//         {formStatus === "loading" ? "Signing Up..." : "Sign Up"}
//       </SubmitButton>
//     </FormContainer>
//   );
// };

// export default Signup;

// const FormContainer = styled.form`
//   max-width: 400px;
//   margin: 50px auto;
//   padding: 40px;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
// `;

// const SubmitButton = styled.button`
//   background-color: rgb(60, 50, 54);
//   color: white;
//   border: 3px solid transparent;
//   padding: 10px;
//   font-size: 1rem;
//   border-radius: 4px;
//   cursor: pointer;
//   width: 100%;

//   &:hover {
//     border-color: #646cff;
//   }

//   &:disabled {
//     background-color: #ccc;
//     cursor: not-allowed;
//   }
// `;

// const ErrorMessage = styled.div`
//   color: red;
//   font-size: 0.9rem;
//   margin-top: 5px;
// `;


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

  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState("");
  const navigate = useNavigate();

  const validateInput = async (name, value) => {
    try {
      const response = await axios.get(`http://localhost:3000/users`);
      const existingUser = response.data.find((user) => user[name] === value);

      if (existingUser) {
        return `${name === "name" ? "Username" : name === "email" ? "Email" : "Mobile number"} already exists.`;
      }
      return "";
    } catch (err) {
      console.error("Validation error:", err);
      return "Unable to validate. Please try again.";
    }
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "name" || name === "email" || name === "mobile") {
      const error = await validateInput(name, value);
      setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const validateForm = () => {
    let validationErrors = {};

    if (!formData.name) {
      validationErrors.name = "Name is required.";
    }

    if (!formData.mobile) {
      validationErrors.mobile = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      validationErrors.mobile = "Mobile number must be exactly 10 digits.";
    }

    if (!formData.email) {
      validationErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Invalid email format.";
    }

    if (!formData.password) {
      validationErrors.password = "Password is required.";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        formData.password
      )
    ) {
      validationErrors.password =
        "Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character.";
    }

    if (!formData.confirmPassword) {
      validationErrors.confirmPassword = "Confirm Password is required.";
    } else if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormStatus("loading");

    try {
      const response = await axios.get("http://localhost:3000/users");

      const existingUser = response.data.find(
        (user) =>
          user.email === formData.email ||
          user.name === formData.name ||
          user.mobile === formData.mobile
      );

      if (existingUser) {
        const newErrors = {};
        if (existingUser.email === formData.email) {
          newErrors.email = "Email already exists.";
        }
        if (existingUser.name === formData.name) {
          newErrors.name = "Username already exists.";
        }
        if (existingUser.mobile === formData.mobile) {
          newErrors.mobile = "Mobile number already exists.";
        }
        setErrors(newErrors);
        setFormStatus("");
        return;
      }

      await axios.post("http://localhost:3000/users", {
        name: formData.name,
        mobile: formData.mobile,
        email: formData.email,
        password: formData.password,
      });

      setFormStatus("success");
      alert("Signup successful!");
      navigate("/login");
    } catch (err) {
      console.error("Signup error:", err);
      setFormStatus("error");
      setErrors({ general: "Something went wrong! Please try again later." });
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>Sign Up</h2>

      {errors.general && <ErrorMessage>{errors.general}</ErrorMessage>}

      <FormInput
        type="text"
        placeholder="Name"
        name="name"
        onChange={handleChange}
        value={formData.name}
      />
      {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}

      <FormInput
        type="text"
        placeholder="Mobile Number"
        name="mobile"
        onChange={handleChange}
        value={formData.mobile}
      />
      {errors.mobile && <ErrorMessage>{errors.mobile}</ErrorMessage>}

      <FormInput
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleChange}
        value={formData.email}
      />
      {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

      <FormInput
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
        value={formData.password}
      />
      {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}

      <FormInput
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
        onChange={handleChange}
        value={formData.confirmPassword}
      />
      {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}

      <SubmitButton type="submit" disabled={formStatus === "loading"}>
        {formStatus === "loading" ? "Signing Up..." : "Sign Up"}
      </SubmitButton>
    </FormContainer>
  );
};

export default Signup;

const FormContainer = styled.form`
  max-width: 400px;
  margin: 50px auto;
  padding: 40px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
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

  &:hover {
    border-color: #646cff;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.9rem;
  margin-top: 5px;
`;
