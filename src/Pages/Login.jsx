// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import FormInput from "../Components/FormInput";
// import styled from "styled-components";

// const Login = ({ setIsLoggedIn }) => {
//   const [credentials, setCredentials] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials({ ...credentials, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.get("http://localhost:3000/users");
//       const user = data.find(
//         (u) => u.email === credentials.email && u.password === credentials.password
//       );

//       if (user) {
//         localStorage.setItem("isLoggedIn", "true");
//         setIsLoggedIn(true);
//         alert("Login successful!");
//         navigate("/");
//       } else {
//         alert("Invalid credentials. Please try again.");
//       }
//     } catch (err) {
//       console.error("Login error:", err);
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <FormContainer onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       <FormInput
//         type="email"
//         placeholder="Email"
//         name="email"
//         onChange={handleChange}
//         value={credentials.email}
//       />
//       <FormInput
//         type="password"
//         placeholder="Password"
//         name="password"
//         onChange={handleChange}
//         value={credentials.password}
//       />
//       <SubmitButton type="submit">Login</SubmitButton>
//     </FormContainer>
//   );
// };

// export default Login;

// const FormContainer = styled.form`
//   max-width: 400px;
//   margin: 50px auto;
//   padding: 20px;
//   border: 1px solid #ccc;
//   border-radius: 8px;
// `;

// const SubmitButton = styled.button`
//   background-color: #007bff;
//   color: white;
//   padding: 10px;
//   width: 100%;
//   border: none;
//   border-radius: 4px;
//   `;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import FormInput from "../Components/FormInput";
// import styled from "styled-components";

// const Login = ({ setIsLoggedIn }) => {
//   const [credentials, setCredentials] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials({ ...credentials, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.get("http://localhost:3000/users");
//       const user = data.find(
//         (u) => u.email === credentials.email && u.password === credentials.password
//       );

//       if (user) {
//         // Store user data in localStorage
//         localStorage.setItem("isLoggedIn", "true");
//         localStorage.setItem("user", JSON.stringify(user)); // Storing user data
//         setIsLoggedIn(true);
//         alert("Login successful!");
//         navigate("/");
//       } else {
//         alert("Invalid credentials. Please try again.");
//       }
//     } catch (err) {
//       console.error("Login error:", err);
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <FormContainer onSubmit={handleSubmit}>
//       <h2>Login</h2>
//       <FormInput
//         type="email"
//         placeholder="Email"
//         name="email"
//         onChange={handleChange}
//         value={credentials.email}
//       />
//       <FormInput
//         type="password"
//         placeholder="Password"
//         name="password"
//         onChange={handleChange}
//         value={credentials.password}
//       />
//       <SubmitButton type="submit">Login</SubmitButton>
//     </FormContainer>
//   );
// };

// export default Login;

// const FormContainer = styled.form`
//   max-width: 400px;
//   margin: 50px auto;
//   padding: 20px;
//   border: 1px solid #ccc;
//   border-radius: 8px;
// `;

// const SubmitButton = styled.button`
//   background-color: #007bff;
//   color: white;
//   padding: 10px;
//   width: 100%;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = ({ setIsLoggedIn }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:3001/users");
//       const users = await response.json();

//       const user = users.find(
//         (u) => u.email === email && u.password === password
//       );

//       if (user) {
//         localStorage.setItem("userData", JSON.stringify(user));
//         setIsLoggedIn(true);
//         navigate("/profile");
//       } else {
//         setError("Invalid email or password.");
//       }
//     } catch (err) {
//       setError("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Login</h2>
//       <form style={styles.form} onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={styles.input}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           style={styles.input}
//         />
//         <button type="submit" style={styles.button}>
//           Login
//         </button>
//         {error && <p style={styles.error}>{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default Login;

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     backgroundColor: "#f4f4f4",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//   },
//   input: {
//     padding: "10px",
//     border: "1px solid #ddd",
//     borderRadius: "5px",
//     fontSize: "1rem",
//   },
//   button: {
//     padding: "10px",
//     backgroundColor: "#007bff",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
//   error: {
//     color: "red",
//     marginTop: "10px",
//   },
// };


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = ({ setIsLoggedIn }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       // Simulating a backend API request
//       const response = await fetch("http://localhost:3001/users");
//       const users = await response.json();

//       const user = users.find(
//         (u) => u.email === email && u.password === password
//       );

//       if (user) {
//         localStorage.setItem("userData", JSON.stringify(user));
//         setIsLoggedIn(true);
//         navigate("/profile");
//       } else {
//         setError("Invalid email or password.");
//       }
//     } catch (err) {
//       setError("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Login</h2>
//       <form style={styles.form} onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={styles.input}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           style={styles.input}
//         />
//         <button type="submit" style={styles.button}>
//           Login
//         </button>
//         {error && <p style={styles.error}>{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default Login;

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     backgroundColor: "#f4f4f4",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//   },
//   input: {
//     padding: "10px",
//     border: "1px solid #ddd",
//     borderRadius: "5px",
//     fontSize: "1rem",
//   },
//   button: {
//     padding: "10px",
//     backgroundColor: "#007bff",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
//   error: {
//     color: "red",
//     marginTop: "10px",
//   },
// };


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
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
      const response = await axios.get("http://localhost:3000/users");
      const user = response.data.find(
        (u) => u.email === formData.email && u.password === formData.password
      );

      if (user) {
        localStorage.setItem("userData", JSON.stringify(user));
        setIsLoggedIn(true);
        navigate("/");
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
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
  );
};

export default Login;

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

const ErrorText = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: 10px;
`;

