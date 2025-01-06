// import React, { useState } from "react";
// import emailjs from "emailjs-com";
// import styled from "styled-components";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [formStatus, setFormStatus] = useState("");
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors({ ...errors, [name]: "" });
//   };

//   const validateForm = () => {
//     let validationErrors = {};

//     if (!formData.name) {
//       validationErrors.name = "Name is required";
//     }

//     if (!formData.email) {
//       validationErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       validationErrors.email = "Email is not valid";
//     }

//     if (!formData.message) {
//       validationErrors.message = "Message is required";
//     }

//     setErrors(validationErrors);
//     return Object.keys(validationErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     setFormStatus("loading");

//     emailjs
//       .send(
//         "service_bwv6mw1", // Replace with your EmailJS Service ID
//         "template_rmu707s", // Replace with your EmailJS Template ID
//         {
//           name: formData.name,
//           email: formData.email,
//           message: formData.message,
//         },
//         "8gYVTDUEf9LN8QEE7" // Replace with your EmailJS User ID
//       )
//       .then(
//         () => {
//           setFormStatus("success");
//           alert("Message sent successfully!");
//           setFormData({ name: "", email: "", message: "" }); // Clear form
//         },
//         (error) => {
//           setFormStatus("error");
//           console.error("EmailJS error:", error);
//           alert("There was an issue sending your message. Please try again.");
//         }
//       );
//   };

//   return (
//     <Background>
//       <ContactContainer>
//         <h2>Contact Us</h2>
//         <Form onSubmit={handleSubmit}>
//           <Input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//           {errors.name && <Error>{errors.name}</Error>}

//           <Input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           {errors.email && <Error>{errors.email}</Error>}

//           <TextArea
//             name="message"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleChange}
//           />
//           {errors.message && <Error>{errors.message}</Error>}

//           <SubmitButton type="submit" disabled={formStatus === "loading"}>
//             {formStatus === "loading" ? "Sending..." : "Send Message"}
//           </SubmitButton>
//         </Form>
//       </ContactContainer>
//     </Background>
//   );
// };

// export default Contact;

// const Background = styled.div`
//   background: linear-gradient(45deg, #1e1e2f, #34344a);
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const ContactContainer = styled.div`
//   max-width: 500px;
//   padding: 20px;
//   background-color: #fff;
//   border-radius: 8px;
//   box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const Input = styled.input`
//   margin: 10px 0;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const TextArea = styled.textarea`
//   margin: 10px 0;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   height: 100px;
// `;

// const SubmitButton = styled.button`
//   background-color: #1e90ff;
//   color: white;
//   padding: 10px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:disabled {
//     background-color: #ccc;
//     cursor: not-allowed;
//   }
// `;

// const Error = styled.div`
//   color: red;
//   font-size: 0.8rem;
//   margin-top: -5px;
// `;






import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";  // Import EmailJS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  // const serviceId = 'service_alrckg8'; // Replace with your EmailJS Service ID
  // const templateId = 'template_fasxssu'; // Replace with your EmailJS Template ID
  // const publicKey = 'M1J83TVBq1oFQSH-2'; // Replace with your EmailJS Public Key
  
  const serviceId = 'service_lwmmcee'; // Replace with your EmailJS Service ID
  const templateId = 'template_m2d615k'; // Replace with your EmailJS Template ID
  const publicKey = '8gYVTDUEf9LN8QEE7'; // Replace with your EmailJS Public Key


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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setFormStatus("loading");

   try{
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
          setFormStatus("success");
          setFormData({ name: "", email: "", message: "" });
          return("Message sent successfully!"); 
        },
        (error) => {
          console.error("Error sending message:", error);
          setFormStatus("error");
          alert("There was an issue sending your message. Please try again.");
        }
      );} catch(err){ 
        
    console.error('Error sending feedback email:', err);
    // setSuccessMessage('Failed to send Message');
    }
  };

  return (
    <Background>
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
    </Background>
  );
};

export default Contact;

// Styled-components

const Background = styled.div`
  // background-image: url("https://github.com/piyush-eon/react-crypto-tracker/blob/master/public/banner2.jpg?raw=true");
  // background-size: cover;
  // background-position: center;
  // background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactContainer = styled.div`
  width: 600px;  /* fixed width */
  padding: 20px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  &:hover {
    border: 4px solid;
    border-image: linear-gradient(45deg, #ff0000, #ff9900, #33cc33, #3399ff, #9900cc, #ff66cc);
    border-image-slice: 1;
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.8);
    transform: scale(1.05);  
  }
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

  &:hover {
    border: 2px solid transparent;
    border-image: linear-gradient(45deg, #ff0000, #ff9900, #33cc33, #3399ff, #9900cc, #ff66cc);
    border-image-slice: 1;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #ccc;
  height: 150px;

  &:hover {
    border: 2px solid transparent;
    border-image: linear-gradient(45deg, #ff0000, #ff9900, #33cc33, #3399ff, #9900cc, #ff66cc);
    border-image-slice: 1;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }
`;

const SubmitButton = styled.button`
  padding: 15px;
  background-color: rgb(60, 50, 54);
  color: white;
  border: 3px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: 2s;

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

const Error = styled.div`
  color: red;
  font-size: 0.9rem;
  margin-top: 5px;
`;