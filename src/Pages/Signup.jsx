
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
//         const response = await axios.get(`https://cryptotrackingwebsever-1.onrender.com/users`);
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
//     } else if (
//       !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/.test(formData.password)
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

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setFormStatus("loading");

//     try {
//       await axios.post("https://cryptotrackingwebsever-1.onrender.com/users", {
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
//     <PageContainer>
//       <FormContainer onSubmit={handleSubmit}>
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

// // Styled Components
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
// `;

// const ErrorMessage = styled.div`
//   color: red;
//   font-size: 0.9rem;
//   margin-top: 5px;
//   animation: ${fadeIn} 0.5s ease-in-out;
// `;







import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import FormInput from "../Components/FormInput";

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

    if (["name", "email", "mobile"].includes(name)) {
      try {
        const response = await axios.get(`/api/Users`);
        const existingUser = response.data.find((user) => user[name] === value);
        if (existingUser) {
          return `${
            name === "name" ? "Username" : name === "email" ? "Email" : "Mobile number"
          } already exists.`;
        }
      } catch (err) {
        console.error("Validation error:", err);
        return "Unable to validate. Please try again.";
      }
    }

    return "";
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const error = await validateInput(name, value);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
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
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/.test(formData.password)
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
      await axios.post("/api/Users", {
        username: formData.name,
        mobileNumber: formData.mobile,
        email: formData.email,
        password: formData.password,
      });

      setFormStatus("success");
      setSuccessMessage("Congratulations! You are ready to rock!");
      setTimeout(() => {
        navigate("/login");
      }, 3000); 
    } catch (err) {
      console.error("Signup error:", err);
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

// Styled Components
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
  max-width: 400px;
  margin: 50px auto;
  padding: 40px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.9);
  animation: ${slideIn} 0.7s ease-out;

  &:hover {
    border: 3px solid transparent;
    border-image: linear-gradient(45deg, #ff0000, #ff9900, #33cc33, #3399ff, #9900cc, #ff66cc);
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
    transition-duration: 1s;
    color: black;
    background-color: gold;
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
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const SuccessMessage = styled.div`
  color: green;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 20px;
  animation: ${fadeIn} 0.5s ease-in-out;
`;
