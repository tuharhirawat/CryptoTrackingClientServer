import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // Importing useNavigate
import { FaFacebook, FaTwitter, FaLinkedin, FaTelegram, FaGithub, FaComments, FaTimes } from "react-icons/fa"; // Importing social media icons

// Footer Styling
const Main = styled.footer`
  padding: 40px 20px;
  font-size: 14px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  gap: 40px;
`;

const LinksSection = styled.div`
  text-align: center;
  margin-bottom: 0px;
  h3 {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
  }
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 0px;
  display: flex;
  align-content: space-between;
  align-items: space-between;
  justify-content: center;
  gap: 30px; /* Horizontal spacing between the links */
`;

const Li = styled.li`
  margin: 0;
`;

const A = styled.a`
  color: #ddd;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
  &:hover {
    color: #007bff;
  }
`;

const FooterSocial = styled.div`
  text-align: center;
  margin-bottom: 1px;

  h3 {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Icon = styled.a`
  color: #ddd;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const FootBtm = styled.div`
  font-size: 16px;
  margin-top: 20px;
  padding: 0;

  p {
    color: #bbb;
    margin: 0;
  }
`;

// Chatbot Styling
const ChatbotWrapper = styled.div`
  position: fixed;
  bottom: 100px;
  right: 20px;
  z-index: 100;
`;

const ChatButton = styled.div`
  background-color: #007bff;
  border-radius: 50%;
  padding: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    color: white;
    font-size: 24px;
  }
`;

const ChatWindow = styled.div`
  position: fixed;
  bottom: 70px;
  right: 20px;
  width: 300px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const MessageContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 10px;
`;

const Message = styled.div`
  background-color: ${({ isUser }) => (isUser ? "#007bff" : "#f1f1f1")};
  color: ${({ isUser }) => (isUser ? "#fff" : "#000")};
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  max-width: 80%;
  align-self: ${({ isUser }) => (isUser ? "flex-end" : "flex-start")};
  word-wrap: break-word;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const TextInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const SendButton = styled.button`
  background-color: #007bff;
  border: none;
  color: white;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: 
  ;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color:rgb(158, 33, 33);
  }
`;

// Chatbot Component
function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi, How can I help you?", isUser: false },
  ]);
  const [input, setInput] = useState("");
  const [isFAQ, setIsFAQ] = useState(false);
  const navigate = useNavigate(); // Using the navigate hook

  // Function to handle navigation
  const handleNavigation = (path) => {
    navigate(path);
  };

  // Toggle Chatbot visibility
  const toggleChatWindow = () => setIsOpen(!isOpen);

  // Handle sending messages
  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, isUser: true },
      ]);
      setInput("");

      // Handle the response from the bot
      const message = input.toLowerCase();

      if (message.includes("hi")) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Hi! How may I assist you?", isUser: false },
        ]);
      } else if (message.includes("bye")) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Goodbye! Have a nice day!", isUser: false },
        ]);
      } else if (message.includes("crypto options")) {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: "We offer various investment options. Would you like more details?",
            isUser: false,
          },
        ]);
      } else if (message.includes("airdrop options")) {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: "Here are the available airdrop options: \n1. Airdrop 1\n2. Airdrop 2\n3. Airdrop 3\nWould you like more details?",
            isUser: false,
          },
        ]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "I'm sorry, I didn't understand that.", isUser: false },
        ]);
      }

      setIsFAQ(true);
    }
  };

  // Close chat window (minimize to icon)
  const closeChatWindow = () => {
    setIsOpen(false);
    setMessages([{ text: "Hi, How can I help you?", isUser: false }]); // Reset messages on close
  };

  // Handle FAQ options click
  const handleFAQOption = (option) => {
    if (option === "crypto") {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: "Here are some options available for crypto investments: \n1. Bitcoin\n2. Ethereum\n3. Litecoin\nWhich one would you like to know more about?",
          isUser: false,
        },
      ]);
    } else if (option === "airdrop") {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: "Here are some popular airdrop options: \n1. Airdrop 1\n2. Airdrop 2\n3. Airdrop 3\nWhich airdrop would you like to learn more about?",
          isUser: false,
        },
      ]);
    }
    setIsFAQ(false);
  };

  return (
    <Main>
      <FooterContainer>
        <LinksSection>
          <h3>Quick Links</h3>
          <Ul>
            <Li>
              <A onClick={() => handleNavigation("/about")}>About Us</A>
            </Li>
            <Li>
              <A onClick={() => handleNavigation("/privacy-policy")}>Privacy Policy</A>
            </Li>
            <Li>
              <A onClick={() => handleNavigation("/terms-of-service")}>
                Terms of Service
              </A>
            </Li>
            <Li>
              <A onClick={() => handleNavigation("/contact")}>Contact Us</A>
            </Li>
          </Ul>
        </LinksSection>

        <FooterSocial>
          <h3>Follow Us</h3>
          <IconWrapper>
            <Icon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </Icon>
            <Icon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </Icon>
            <Icon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </Icon>
            <Icon href="https://t.me/CRYPTOLOOTTERSS" target="_blank" rel="noopener noreferrer">
              <FaTelegram />
            </Icon>
            <Icon href="https://github.com/tuharhirawat/CryptoTrackingClientServer.git" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </Icon>
          </IconWrapper>
        </FooterSocial>
      </FooterContainer>

      {/* Footer Bottom */}
      <FootBtm>
        <p>&copy; 2024 Crypto Tracker. All Rights Reserved.</p>
      </FootBtm>

      {/* Chatbot Section */}
      <ChatbotWrapper>
        {!isOpen ? (
          <ChatButton onClick={toggleChatWindow}>
            <FaComments />
          </ChatButton>
        ) : (
          <ChatWindow isOpen={isOpen}>
            <CloseButton onClick={closeChatWindow}>
              <FaTimes />
            </CloseButton>
            <MessageContainer>
              {messages.map((msg, idx) => (
                <Message key={idx} isUser={msg.isUser}>
                  {msg.text}
                </Message>
              ))}
            </MessageContainer>

            {!isFAQ ? (
              <InputWrapper>
                <TextInput
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                />
                <SendButton onClick={handleSendMessage}>Send</SendButton>
              </InputWrapper>
            ) : (
              <div>
                <p><strong>Frequently Asked Questions</strong></p>
                <p onClick={() => handleFAQOption("crypto")}>Crypto options</p>
                <p onClick={() => handleFAQOption("airdrop")}>Airdrop options</p>
              </div>
            )}
          </ChatWindow>
        )}
      </ChatbotWrapper>
    </Main>
  );
}

export default Footer;