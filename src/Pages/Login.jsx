


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import styled from "styled-components";
// import FormInput from "../Components/FormInput";

// const Login = ({ setIsLoggedIn }) => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [errors, setErrors] = useState({});
//   const [generalError, setGeneralError] = useState("");
//   const navigate = useNavigate();

//   const validateForm = () => {
//     let validationErrors = {};
//     if (!formData.email) {
//       validationErrors.email = "Email is required.";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       validationErrors.email = "Invalid email format.";
//     }
//     if (!formData.password) {
//       validationErrors.password = "Password is required.";
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
//     setGeneralError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     try {
//       const response = await axios.get("http://localhost:3000/users");
//       const user = response.data.find(
//         (u) => u.email === formData.email && u.password === formData.password
//       );

//       if (user) {
//         localStorage.setItem("userData", JSON.stringify(user));
//         setIsLoggedIn(true);
//         navigate("/");
//       } else {
//         const emailExists = response.data.some((u) => u.email === formData.email);

//         if (emailExists) {
//           setGeneralError("Invalid password. Please try again.");
//         } else {
//           alert("User does not exist. Redirecting to Signup.");
//           navigate("/signup");
//         }
//       }
//     } catch (err) {
//       console.error("Login error:", err);
//       setGeneralError("Something went wrong. Please try again later.");
//     }
//   };

//   return (
//     <Main>
//       <FormContainer onSubmit={handleSubmit}>
//         <h2>Login</h2>

//         <FormInput
//           type="email"
//           placeholder="Email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         {errors.email && <ErrorText>{errors.email}</ErrorText>}

//         <FormInput
//           type="password"
//           placeholder="Password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         {errors.password && <ErrorText>{errors.password}</ErrorText>}

//         {generalError && <ErrorText>{generalError}</ErrorText>}

//         <SubmitButton type="submit">Login</SubmitButton>
//       </FormContainer>
//     </Main>
//   );
// };

// export default Login;

// const Main = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: #f8f9fa;
// `;

// const FormContainer = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   max-width: 400px;
//   padding: 50px;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   background-color: #fff;
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
//   margin-top: 10px;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const ErrorText = styled.p`
//   color: red;
//   font-size: 0.9rem;
//   margin-top: 5px;
// `;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import styled, { keyframes } from "styled-components";
// import FormInput from "../Components/FormInput";

// const Login = ({ setIsLoggedIn }) => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const navigate = useNavigate();
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.get("https://cryptotrackingwebsever-1.onrender.com/users");
//       const user = response.data.find(
//         (u) => u.email === formData.email && u.password === formData.password
//       );

//       if (user) {
//         localStorage.setItem("userData", JSON.stringify(user));
//         setIsLoggedIn(true);
//         navigate("/profile");
//       } else {
//         setError("Invalid email or password.");
//       }
//     } catch (err) {
//       console.error("Login error:", err);
//       setError("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <PageContainer>
//       <FormContainer onSubmit={handleSubmit}>
//         <h2>Login</h2>
//         <FormInput
//           type="email"
//           placeholder="Email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <FormInput
//           type="password"
//           placeholder="Password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         {error && <ErrorText>{error}</ErrorText>}
//         <SubmitButton type="submit">Login</SubmitButton>
//       </FormContainer>
//     </PageContainer>
//   );
// };

// export default Login;

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
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   max-width: 400px;
//   padding: 50px;
//   background: rgba(255, 255, 255, 0.9); /* Semi-transparent background for form */
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
//   animation: ${slideIn} 0.7s ease-out;

//    &:hover {
//     border: 3px solid transparent;
//     border-image: linear-gradient(45deg, #ff0000, #ff9900, #33cc33, #3399ff, #9900cc, #ff66cc);
//     border-image-slice: 1;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
// }
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
//   color:black;
//   background-color: gold;
//   }
// `;

// const ErrorText = styled.p`
//   color: red;
//   font-size: 0.9rem;
//   margin-top: 10px;
//   animation: ${fadeIn} 0.5s ease-in-out;
// `;





import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import FormInput from "../Components/FormInput";

const Login = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("https://cryptotrackingwebsever-1.onrender.com/users");
      const user = response.data.find(
        (u) => u.email === formData.email && u.password === formData.password
      );

      if (user) {
        localStorage.setItem("userData", JSON.stringify(user));
        localStorage.setItem("currentUser", user.email); // Save current user
        setIsLoggedIn(true);
        navigate("/profile");
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <PageContainer>
      <FormContainer onSubmit={handleSubmit}>
        <h2>Login</h2>
        <FormInput
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <FormInput
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
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
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  padding: 50px;
  background: rgba(255, 255, 255, 0.9);
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
