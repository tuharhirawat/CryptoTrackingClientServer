// import React, { useState } from "react";
// import axios from "axios";
// import styled from "styled-components";

// const Signup = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:3000/users", formData);
//       alert("Signup successful! Redirecting to login.");
//       window.location.href = "/login";
//     } catch (error) {
//       alert("Error during signup.");
//     }
//   };

//   return (
//     <PageContainer>
//       <Form onSubmit={handleSubmit}>
//         <h1>Signup</h1>
//         <Input
//           type="text"
//           placeholder="Name"
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           required
//         />
//         <Input
//           type="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//           required
//         />
//         <Input
//           type="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//           required
//         />
//         <Button type="submit">Signup</Button>
//       </Form>
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

// const Form = styled.form`
//   background: white;
//   padding: 2rem;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   max-width: 400px;
//   width: 100%;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.75rem;
//   margin: 1rem 0;
//   border: 1px solid #ddd;
//   border-radius: 4px;

//   &:focus {
//     outline: none;
//     border-color: #007bff;
//     box-shadow: 0 0 3px rgba(0, 123, 255, 0.5);
//   }
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 0.75rem;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// export default Signup;






// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import styled, { keyframes } from "styled-components";
// import FormInput from "../Components/FormInput";

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
//   const [successMessage, setSuccessMessage] = useState("");
//   const navigate = useNavigate();

//   const validateInput = async (name, value) => {
//     if (name === "password") {
//       if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/.test(value)) {
//         return "Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character.";
//       }
//     }

//     if (name === "confirmPassword") {
//       if (value !== formData.password) {
//         return "Passwords do not match.";
//       }
//     }

//     if (["name", "email", "mobile"].includes(name)) {
//       try {
//         const response = await axios.get(`http://localhost:5232/api/Users`);
//         const existingUser = response.data.find((user) => user[name] === value);
//         if (existingUser) {
//           return `${
//             name === "name" ? "Username" : name === "email" ? "Email" : "Mobile number"
//           } already exists.`;
//         }
//       } catch (err) {
//         console.error("Validation error:", err);
//         return "Unable to validate. Please try again.";
//       }
//     }

//     return "";
//   };

//   const handleChange = async (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     const error = await validateInput(name, value);
//     setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
//   };

//   const validateForm = () => {
//     let validationErrors = {};

//     if (!formData.name) {
//       validationErrors.name = "Name is required.";
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
//     }

//     if (!formData.confirmPassword) {
//       validationErrors.confirmPassword = "Confirm Password is required.";
//     }

//     setErrors(validationErrors);
//     return Object.keys(validationErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setFormStatus("loading");

//     try {
//       await axios.post("http://localhost:5232/api/Users", {
//         username: formData.name,
//         mobileNumber: formData.mobile,
//         email: formData.email,
//         password: formData.password,
//       });

//       setFormStatus("success");
//       setSuccessMessage("Congratulations! You are ready to rock!");
//       setTimeout(() => {
//         navigate("/login");
//       }, 3000); 
//     } catch (err) {
//       console.error("Signup error:", err);
//       setFormStatus("error");
//       setErrors({ general: "Something went wrong! Please try again later." });
//     }
//   };

//   return (
//     <PageContainer>
//       <FormContainer onSubmit={handleSubmit}>
//         {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
//         <h2>Sign Up</h2>
//         {errors.general && <ErrorMessage>{errors.general}</ErrorMessage>}

//         <FormInput
//           type="text"
//           placeholder="Name"
//           name="name"
//           onChange={handleChange}
//           value={formData.name}
//         />
//         {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}

//         <FormInput
//           type="number"
//           placeholder="Mobile Number"
//           name="mobile"
//           onChange={handleChange}
//           value={formData.mobile}
//         />
//         {errors.mobile && <ErrorMessage>{errors.mobile}</ErrorMessage>}

//         <FormInput
//           type="email"
//           placeholder="Email"
//           name="email"
//           onChange={handleChange}
//           value={formData.email}
//         />
//         {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

//         <FormInput
//           type="password"
//           placeholder="Password"
//           name="password"
//           onChange={handleChange}
//           value={formData.password}
//         />
//         {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}

//         <FormInput
//           type="password"
//           placeholder="Confirm Password"
//           name="confirmPassword"
//           onChange={handleChange}
//           value={formData.confirmPassword}
//         />
//         {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}

//         <SubmitButton type="submit" disabled={formStatus === "loading"}>
//           {formStatus === "loading" ? "Signing Up..." : "Sign Up"}
//         </SubmitButton>
//       </FormContainer>
//     </PageContainer>
//   );
// };

// export default Signup;
















// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import styled, { keyframes } from "styled-components";
// import FormInput from "../Components/FormInput";

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
//   const [successMessage, setSuccessMessage] = useState("");
//   const navigate = useNavigate();

//   // Validate each input field
//   const validateInput = async (name, value) => {
//     // Password validation
//     if (name === "password") {
//       if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/.test(value)) {
//         return "Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character.";
//       }
//     }

//     // Confirm password validation
//     if (name === "confirmPassword") {
//       if (value !== formData.password) {
//         return "Passwords do not match.";
//       }
//     }

//     // Check for existing data in the database for name, email, and mobile
//     if (["name", "email", "mobile"].includes(name)) {
//       try {
//         const response = await axios.get("http://localhost:5232/api/Users");
//         const existingUser = response.data.find((user) => user[name] === value);

//         if (existingUser) {
//           if (name === "name") {
//             return "Username already exists.";
//           } else if (name === "email") {
//             return "Email already exists.";
//           } else if (name === "mobile") {
//             return "Mobile number already exists.";
//           }
//         }
//       } catch (err) {
//         console.error("Validation error:", err);
//         return "Unable to validate. Please try again.";
//       }
//     }

//     return ""; // No error
//   };

//   const handleChange = async (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     // Reset the error state for this field
//     setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));

//     // Validate input
//     const error = await validateInput(name, value);
    
//     // If the input fails validation, set the error for the corresponding field
//     if (error) {
//       setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
//     }
//   };

//   const validateForm = () => {
//     let validationErrors = {};

//     if (!formData.name) {
//       validationErrors.name = "Name is required.";
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
//     }

//     if (!formData.confirmPassword) {
//       validationErrors.confirmPassword = "Confirm Password is required.";
//     }

//     setErrors(validationErrors);
//     return Object.keys(validationErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setFormStatus("loading");

//     try {
//       await axios.post("http://localhost:5232/api/Users", {
//         username: formData.name,
//         mobileNumber: formData.mobile,
//         email: formData.email,
//         password: formData.password,
//       });

//       setFormStatus("success");
//       setSuccessMessage("Congratulations! You are ready to rock!");
//       setTimeout(() => {
//         navigate("/login");
//       }, 3000); 
//     } catch (err) {
//       console.error("Signup error:", err);
//       setFormStatus("error");
//       setErrors({ general: "Something went wrong! Please try again later." });
//     }
//   };

//   return (
//     <PageContainer>
//       <FormContainer onSubmit={handleSubmit}>
//         {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
//         <h2>Sign Up</h2>
//         {errors.general && <ErrorMessage>{errors.general}</ErrorMessage>}

//         <FormInput
//           type="text"
//           placeholder="Name"
//           name="name"
//           onChange={handleChange}
//           value={formData.name}
//         />
//         {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}

//         <FormInput
//           type="number"
//           placeholder="Mobile Number"
//           name="mobile"
//           onChange={handleChange}
//           value={formData.mobile}
//         />
//         {errors.mobile && <ErrorMessage>{errors.mobile}</ErrorMessage>}

//         <FormInput
//           type="email"
//           placeholder="Email"
//           name="email"
//           onChange={handleChange}
//           value={formData.email}
//         />
//         {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

//         <FormInput
//           type="password"
//           placeholder="Password"
//           name="password"
//           onChange={handleChange}
//           value={formData.password}
//         />
//         {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}

//         <FormInput
//           type="password"
//           placeholder="Confirm Password"
//           name="confirmPassword"
//           onChange={handleChange}
//           value={formData.confirmPassword}
//         />
//         {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}

//         <SubmitButton type="submit" disabled={formStatus === "loading"}>
//           {formStatus === "loading" ? "Signing Up..." : "Sign Up"}
//         </SubmitButton>
//       </FormContainer>
//     </PageContainer>
//   );
// };

// export default Signup;

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(-20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const slideIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateX(-100%);
//   }
//   to {
//     opacity: 1;
//     transform: translateX(0);
//   }
// `;

// const PageContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-image: url("https://github.com/piyush-eon/react-crypto-tracker/blob/master/public/banner2.jpg?raw=true");
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   animation: ${fadeIn} 1s ease-in-out;
// `;

// const FormContainer = styled.form`
//   max-width: 400px;
//   margin: 50px auto;
//   padding: 40px;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
//   background-color: rgba(255, 255, 255, 0.9);
//   animation: ${slideIn} 0.7s ease-out;

//   &:hover {
//     border: 3px solid transparent;
//     border-image: linear-gradient(45deg, #ff0000, #ff9900, #33cc33, #3399ff, #9900cc, #ff66cc);
//     border-image-slice: 1;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
//   }

//   @media (max-width: 768px) {
//     padding: 20px;
//   }

//   @media (max-width: 480px) {
//     padding: 15px;
//   }
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
//   transition: background-color 0.3s ease, border-color 0.3s ease;

//   &:hover {
//     transition-duration: 1s;
//     color: black;
//     background-color: gold;
//   }

//   &:disabled {
//     background-color: #ccc;
//     cursor: not-allowed;
//   }

//   @media (max-width: 480px) {
//     font-size: 0.9rem;
//     padding: 8px;
//   }
// `;

// const ErrorMessage = styled.div`
//   color: red;
//   font-size: 0.9rem;
//   margin-top: 5px;
//   animation: ${fadeIn} 0.5s ease-in-out;

//   @media (max-width: 480px) {
//     font-size: 0.8rem;
//   }
// `;

// const SuccessMessage = styled.div`
//   color: green;
//   font-weight: bold;
//   font-size: 1.2rem;
//   text-align: center;
//   margin-bottom: 20px;
//   animation: ${fadeIn} 0.5s ease-in-out;

//   @media (max-width: 480px) {
//     font-size: 1rem;
//   }
// `;




















import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import FormInput from "../Components/FormInput";
// import bcrypt from "bcryptjs"; // Import bcryptjs

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
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const validateInput = async (name, value) => {
    if (name === "password") {
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/.test(value)) {
        return "Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character.";
      }
    }

    if (name === "confirmPassword") {
      if (value !== formData.password) {
        return "Passwords do not match.";
      }
    }

    // Check for existing data in the database (same as before)
    if (["name", "email", "mobile"].includes(name)) {
      try {
        const response = await axios.get("http://localhost:5232/api/Users");
        const existingUser = response.data.find((user) => user[name] === value);

        if (existingUser) {
          if (name === "name") return "Username already exists.";
          else if (name === "email") return "Email already exists.";
          else if (name === "mobile") return "Mobile number already exists.";
        }
      } catch (err) {
        return "Unable to validate. Please try again.";
      }
    }

    return ""; // No error
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    const error = await validateInput(name, value);
    if (error) setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const validateForm = () => {
    let validationErrors = {};
    if (!formData.name) validationErrors.name = "Name is required.";
    if (!formData.mobile) validationErrors.mobile = "Mobile number is required.";
    else if (!/^\d{10}$/.test(formData.mobile)) validationErrors.mobile = "Mobile number must be exactly 10 digits.";
    if (!formData.email) validationErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) validationErrors.email = "Invalid email format.";
    if (!formData.password) validationErrors.password = "Password is required.";
    if (!formData.confirmPassword) validationErrors.confirmPassword = "Confirm Password is required.";

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormStatus("loading");

    try {
      // Encrypt the password using bcryptjs before sending to backend
      // const hashedPassword = bcrypt.hashSync(formData.password, 10);

      await axios.post("http://localhost:5232/api/Users", {
        username: formData.name,
        mobileNumber: formData.mobile,
        email: formData.email,
        password: formData.password,  // Send hashed password to backend
      });

      setFormStatus("success");
      setSuccessMessage("Congratulations! You are ready to rock!");
      setTimeout(() => {
        navigate("/login");
      }, 3000); 
    } catch (err) {
      setFormStatus("error");
      setErrors({ general: "Something went wrong! Please try again later." });
    }
  };

  return (
    <PageContainer>
      <FormContainer onSubmit={handleSubmit}>
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
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
          type="number"
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
    </PageContainer>
  );
};

export default Signup;

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
  animation: ${fadeIn} 1s ease-in-out;
`;

const FormContainer = styled.form`
  max-width: 400px;
  margin: 50px auto;
  padding: 40px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.9);
  animation: ${slideIn} 0.7s ease-out;

  // &:hover {
  //   border: 3px solid transparent;
  //   border-image: linear-gradient(45deg, #ff0000, #ff9900, #33cc33, #3399ff, #9900cc, #ff66cc);
  //   border-image-slice: 1;
  //   box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  // }

  &:hover {
    border: 4px solid;
    border-image: linear-gradient(45deg, #ff0000, #ff9900, #33cc33, #3399ff, #9900cc, #ff66cc);
    border-image-slice: 1;
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.8);
    transform: scale(1.05);  
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
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
    transition-duration: 1s;
    color: black;
    background-color: gold;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 8px;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.9rem;
  margin-top: 5px;
  animation: ${fadeIn} 0.5s ease-in-out;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const SuccessMessage = styled.div`
  color: green;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 20px;
  animation: ${fadeIn} 0.5s ease-in-out;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
