import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormInput from "../Components/FormInput";
import styled, { keyframes } from "styled-components";

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

  const validateForm = () => {
    let validationErrors = {};

    if (!formData.name) {
      validationErrors.name = "Name is required";
    }

    if (!formData.mobile) {
      validationErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      validationErrors.mobile = "Mobile number should contain exactly 10 digits";
    }

    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }

    if (!formData.password) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      validationErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setFormStatus("loading");

    try {
      const emailCheck = await axios.get(`http://localhost:3000/users?email=${formData.email}`);
      const usernameCheck = await axios.get(`http://localhost:3000/users?name=${formData.name}`);

      if (emailCheck.data.length > 0) {
        setErrors({ ...errors, email: "Email already exists" });
        setFormStatus("");
        return;
      }

      if (usernameCheck.data.length > 0) {
        setErrors({ ...errors, name: "Username already exists" });
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
    <PageContainer>
      <FormContainer onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        {formStatus === "error" && <ErrorMessage>{errors.general}</ErrorMessage>}

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



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import FormInput from "../Components/FormInput";
// import styled, { keyframes } from "styled-components";

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
//       validationErrors.name = "Name is required";
//     }

//     if (!formData.mobile) {
//       validationErrors.mobile = "Mobile number is required";
//     } else if (!/^\d{10}$/.test(formData.mobile)) {
//       validationErrors.mobile = "Mobile number should contain exactly 10 digits";
//     }

//     if (!formData.email) {
//       validationErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       validationErrors.email = "Email is not valid";
//     }

//     if (!formData.password) {
//       validationErrors.password = "Password is required";
//     } else if (formData.password.length < 6) {
//       validationErrors.password = "Password must be at least 6 characters";
//     }

//     if (!formData.confirmPassword) {
//       validationErrors.confirmPassword = "Confirm Password is required";
//     } else if (formData.confirmPassword !== formData.password) {
//       validationErrors.confirmPassword = "Passwords do not match";
//     }

//     setErrors(validationErrors);
//     return Object.keys(validationErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors({ ...errors, [name]: "" });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     setFormStatus("loading");

//     try {
//       // Check if email or username already exists by querying the backend
//       const emailCheck = await axios.get(`http://localhost:3000/api/users?email=${formData.email}`);
//       const usernameCheck = await axios.get(`http://localhost:3000/api/users?name=${formData.name}`);

//       if (emailCheck.data.length > 0) {
//         setErrors({ ...errors, email: "Email already exists" });
//         setFormStatus("");
//         return;
//       }

//       if (usernameCheck.data.length > 0) {
//         setErrors({ ...errors, name: "Username already exists" });
//         setFormStatus("");
//         return;
//       }

//       // Call the backend API to insert the new user
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
//     <PageContainer>
//       <FormContainer onSubmit={handleSubmit}>
//         <h2>Sign Up</h2>

//         {formStatus === "error" && <ErrorMessage>{errors.general}</ErrorMessage>}

//         <FormInput
//           type="text"
//           placeholder="Name"
//           name="name"
//           onChange={handleChange}
//           value={formData.name}
//         />
//         {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}

//         <FormInput
//           type="text"
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
// const PageContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
// `;

// const FormContainer = styled.form`
//   display: flex;
//   flex-direction: column;
//   max-width: 400px;
//   width: 100%;
//   background-color: #fff;
//   padding: 2rem;
//   border-radius: 8px;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
// `;

// const SubmitButton = styled.button`
//   background-color: #4caf50;
//   color: white;
//   padding: 12px;
//   font-size: 16px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   &:disabled {
//     background-color: #ccc;
//   }
// `;

// const ErrorMessage = styled.div`
//   color: red;
//   font-size: 14px;
//   margin-top: 5px;
// `;
