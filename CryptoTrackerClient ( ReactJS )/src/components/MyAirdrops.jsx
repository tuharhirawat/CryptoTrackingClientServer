

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';

// const FormContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100%;
//     width: 100vw;
//     padding: 20px;
//     border-radius: 10px;
//     box-shadow: 0 0 20px rgba(0,0,0,0.1);
//     color: #fff;
// `;

// const MainForm = styled.div`
//     width: 100%;
//     max-width: 500px;
//     margin-top: 20px;
//     padding: 20px;
//     border-radius: 10px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
// `;

// const Input = styled.input`
//     width: 100%;
//     padding: 10px;
//     margin: 10px 0;
//     border-radius: 5px;
//     border: none;
//     outline: none;
//     transition: box-shadow 0.3s ease-in-out;

//     &:hover {
//         transform: scale(1.02);
//         box-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
//     }
// `;

// const Select = styled.select`
//     width: 100%;
//     padding: 10px;
//     margin: 10px 0;
//     border-radius: 5px;
//     border: none;
//     outline: none;
//     transition: box-shadow 0.3s ease-in-out;

//     &:hover {
//         transform: scale(1.02);
//         box-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
//     }
// `;

// const Button = styled.button`
//     width: 100%;
//     padding: 10px;
//     background: gold;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//     transition: background 0.3s ease-in-out;

//     &:hover {
//         transform: scale(1.02);
//         box-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
//         color: white;
//         background-color: #333;
//     }
// `;

// const Message = styled.div`
//     color: ${({ type }) => (type === 'error' ? 'red' : 'green')};
//     font-weight: bold;
//     margin-bottom: 10px;
//     font-size: 1.2rem;
//     padding: 10px;
//     border-radius: 5px;
//     background-color: ${({ type }) => (type === 'error' ? 'rgba(255, 0, 0, 0.2)' : 'rgba(0, 255, 0, 0.2)')};
//     animation: fadeOut 1s ease-out forwards;

//     @keyframes fadeOut {
//         0% {
//             opacity: 1;
//         }
//         100% {
//             opacity: 0;
//         }
//     }
// `;

// const Label = styled.label`
//     display: flex;
//     justify-content: space-between;
//     width: 100%;
//     font-weight: bold;
//     color: red;
// `;

// const Card = styled.div`
//     border: 1px solid gold;
//     padding: 15px;
//     margin: 10px 0;
//     border-radius: 10px;
//     transition: box-shadow 0.3s ease-in-out;
//     background: rgba(0, 0, 0, 0.8);
//     color: white;
//     text-align: center;

//     &:hover {
//         box-shadow: 0 0 15px rgba(255, 215, 0, 0.8);
//         transform: scale(1.05);
//     }
// `;

// const Heading = styled.h2`
//     text-align: center;
//     font-size: 2rem;
//     color: gold;
//     margin-bottom: 20px;
// `;

// const WelcomeMessage = styled.div`
//     text-align: center;
//     font-size: 2rem;
//     font-weight: bold;
//     color: gold;
//     margin-bottom: 20px;
// `;

// const SubHeading = styled.div`
//     text-align: center;
//     font-size: 1.1rem;
//     color: white;
//     margin-bottom: 30px;
// `;

// const MyAirdrops = ({ currentUser }) => {
//     const [formData, setFormData] = useState({
//         airdropName: '',
//         airdropLink: '',
//         referCode: '',
//         airdropType: '',
//         connectedVia: '',
//         joinDate: ''
//     });
//     const [message, setMessage] = useState('');
//     const [airdropList, setAirdropList] = useState([]);
//     const [errors, setErrors] = useState({});
//     const [sortCriteria, setSortCriteria] = useState('');

//     useEffect(() => {
//         fetchAirdrops();
//     }, []);

//     const fetchAirdrops = async () => {
//         try {
//             const response = await axios.get('http://localhost:3000/myairdrops');
//             setAirdropList(response.data);
//         } catch (error) {
//             console.error('Error fetching airdrops:', error);
//         }
//     };

//     const handleSort = (criteria) => {
//         setSortCriteria(criteria);
//         const sortedAirdrops = [...airdropList].sort((a, b) => {
//             if (criteria === 'name') return a.airdropName.localeCompare(b.airdropName);
//             if (criteria === 'type') return a.airdropType.localeCompare(b.airdropType);
//             if (criteria === 'date') return new Date(b.createdAt) - new Date(a.createdAt);
//             if (criteria === 'status') return a.status.localeCompare(b.status);
//             return 0;
//         });
//         setAirdropList(sortedAirdrops);
//     };

//     const validateForm = () => {
//         const errors = {};
//         if (!formData.airdropName) errors.airdropName = 'Airdrop Name is required';
//         if (!formData.airdropLink) errors.airdropLink = 'Airdrop Link is required';
//         else if (!/^https?:\/\/[^\s]+$/.test(formData.airdropLink)) errors.airdropLink = 'Invalid URL format';
//         if (!formData.airdropType) errors.airdropType = 'Airdrop Type is required';
//         if (!formData.connectedVia) errors.connectedVia = 'Connected Via is required';
//         // if (!formData.joinDate) errors.joinDate = 'Airdrop Join Date is required';
//         setErrors(errors);
//         return Object.keys(errors).length === 0;
//     };

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleDateChange = (e) => {
//         setFormData({ ...formData, joinDate: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setMessage('');

//         if (!validateForm()) return;

//         const isDuplicate = airdropList.some(airdrop =>
//             airdrop.airdropLink === formData.airdropLink && airdrop.currentUser === currentUser.email
//         );

//         if (isDuplicate) {
//             setMessage('Airdrop already exists. Please add a new airdrop.');
//             return;
//         }

//         const newAirdrop = { ...formData, currentUser: currentUser.email };

//         try {
//             await axios.post('http://localhost:3000/myairdrops', newAirdrop);
//             setMessage('Airdrop added successfully!');
//             fetchAirdrops();
//             setFormData({ airdropName: '', airdropLink: '', referCode: '', airdropType: '', connectedVia: '', joinDate: '' });
//         } catch (error) {
//             console.error('Error adding airdrop:', error);
//         }
//     };

//     const handleEdit = async (airdropId) => {
//         const airdropToEdit = airdropList.find(a => a.id === airdropId);
//         setFormData({ ...airdropToEdit });
//     };

//     const handleDelete = async (airdropId) => {
//         try {
//             await axios.delete(`http://localhost:3000/myairdrops/${airdropId}`);
//             setMessage('Airdrop deleted successfully!');
//             fetchAirdrops();
//         } catch (error) {
//             console.error('Error deleting airdrop:', error);
//         }
//     };

//     // const fetchCurrentDateTime = async () => {
//     //     try {
//     //         const response = await axios.get('https://worldtimeapi.org/api/ip');
//     //         const currentDateTime = response.data.datetime;
//     //         setFormData({ ...formData, joinDate: currentDateTime.split('T')[0] });
//     //     } catch (error) {
//     //         console.error('Error fetching date/time from the internet:', error);
//     //     }
//     // };

//     return (
//         <FormContainer>
//             <MainForm>
//                 <WelcomeMessage>Welcome, {currentUser.username} To your Airdrop Manager!</WelcomeMessage>
//                 <SubHeading>A One Stop Place To Store All Your Airdrops</SubHeading>

//                 {message && <Message type={message.includes('success') ? 'success' : 'error'}>{message}</Message>}

//                 <form onSubmit={handleSubmit} style={{ width: '100%' }}>
//                     <Label>*<Input type="text" name="airdropName" value={formData.airdropName} onChange={handleChange} placeholder='Airdrop Name' /></Label>
//                     {errors.airdropName && <div style={{ color: 'red', fontSize: '0.9rem' }}>{errors.airdropName}</div>}

//                     <Label>*<Input type="text" name="airdropLink" value={formData.airdropLink} onChange={handleChange} placeholder='Airdrop Link' /></Label>
//                     {errors.airdropLink && <div style={{ color: 'red', fontSize: '0.9rem' }}>{errors.airdropLink}</div>}

//                     <Label><Input type="text" name="referCode" value={formData.referCode} onChange={handleChange} placeholder='Refer Code (Optional)' /></Label>

//                     <Label>*<Select name="airdropType" value={formData.airdropType} onChange={handleChange}>
//                         <option value="">Select Airdrop Type</option>
//                         <option value="Token">Token</option>
//                         <option value="NFT">NFT</option>
//                         <option value="Other">Other</option>
//                     </Select></Label>
//                     {errors.airdropType && <div style={{ color: 'red', fontSize: '0.9rem' }}>{errors.airdropType}</div>}

//                     <Label>*<Input type="text" name="connectedVia" value={formData.connectedVia} onChange={handleChange} placeholder='Connected Via' /></Label>
//                     {errors.connectedVia && <div style={{ color: 'red', fontSize: '0.9rem' }}>{errors.connectedVia}</div>}

//                     <Label><Input type="date" name="joinDate" value={formData.joinDate} onChange={handleDateChange} /></Label>
//                     {/* <Button type="button" onClick={fetchCurrentDateTime}>Set Current Date and Time</Button> */}
//                     {/* {errors.joinDate && <div style={{ color: 'red', fontSize: '0.9rem' }}>{errors.joinDate}</div>} */}

//                     <Button type="submit">Submit</Button>
//                 </form>

//                 <Heading>My Airdrops</Heading>

//                 {airdropList.filter(a => a.currentUser === currentUser.email).map((airdrop) => (
//                     <Card key={airdrop.id}>
//                         <p><strong>Name:</strong> {airdrop.airdropName}</p>
//                         <p><strong>Link:</strong> {airdrop.airdropLink}</p>
//                         <button onClick={() => handleEdit(airdrop.id)}>Edit</button>
//                         <button onClick={() => handleDelete(airdrop.id)}>Delete</button>
//                     </Card>
//                 ))}
//             </MainForm>
//         </FormContainer>
//     );
// };

// export default MyAirdrops;















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';

// const FormContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100%;
//     width: 100vw;
//     padding: 20px;
//     border-radius: 10px;
//     box-shadow: 0 0 20px rgba(0,0,0,0.1);
//     color: #fff;
// `;

// const MainForm = styled.div`
//     width: 100%;
//     max-width: 500px;
//     margin-top: 20px;
//     padding: 20px;
//     border-radius: 10px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
// `;

// const Input = styled.input`
//     width: 100%;
//     padding: 10px;
//     margin: 10px 0;
//     border-radius: 5px;
//     border: none;
//     outline: none;
//     transition: box-shadow 0.3s ease-in-out;

//     &:hover {
//         transform: scale(1.02);
//         box-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
//     }
// `;

// const Select = styled.select`
//     width: 100%;
//     padding: 10px;
//     margin: 10px 0;
//     border-radius: 5px;
//     border: none;
//     outline: none;
//     transition: box-shadow 0.3s ease-in-out;

//     &:hover {
//         transform: scale(1.02);
//         box-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
//     }
// `;

// const Button = styled.button`
//     width: 100%;
//     padding: 10px;
//     background: gold;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//     transition: background 0.3s ease-in-out;

//     &:hover {
//         transform: scale(1.02);
//         box-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
//         color: white;
//         background-color: #333;
//     }
// `;

// const Message = styled.div`
//     color: ${({ type }) => (type === 'error' ? 'red' : 'green')};
//     font-weight: bold;
//     margin-bottom: 10px;
//     font-size: 1.2rem;
//     padding: 10px;
//     border-radius: 5px;
//     background-color: ${({ type }) => (type === 'error' ? 'rgba(255, 0, 0, 0.2)' : 'rgba(0, 255, 0, 0.2)')};
//     animation: fadeOut 1s ease-out forwards;

//     @keyframes fadeOut {
//         0% {
//             opacity: 1;
//         }
//         100% {
//             opacity: 0;
//         }
//     }
// `;

// const Label = styled.label`
//     display: flex;
//     justify-content: space-between;
//     width: 100%;
//     font-weight: bold;
//     color: red;
// `;

// const Card = styled.div`
//     border: 1px solid gold;
//     padding: 15px;
//     margin: 10px 0;
//     border-radius: 10px;
//     transition: box-shadow 0.3s ease-in-out;
//     background: rgba(0, 0, 0, 0.8);
//     color: white;
//     text-align: center;

//     &:hover {
//         box-shadow: 0 0 15px rgba(255, 215, 0, 0.8);
//         transform: scale(1.05);
//     }
// `;

// const Heading = styled.h2`
//     text-align: center;
//     font-size: 2.5rem;
//     color: gold;
//     marging-left:30px;
//     margin-bottom: 20px;
//     margin-right:30px;
// `;

// const WelcomeMessage = styled.div`
//     text-align: center;
//     font-size: 2rem;
//     font-weight: bold;
//     color: gold;
//     margin-bottom: 20px;
// `;

// const SubHeading = styled.div`
//     text-align: center;
//     font-size: 1.1rem;
//     color: white;
//     margin-bottom: 30px;
// `;

// const EditDeleteButton = styled.button`
//     padding: 10px;
//     background-color: ${({ action }) => (action === 'edit' ? 'gold' : 'gold')};
//     color: #333;
//     border: none;
//     border-radius: 5px;
//     margin: 5px;
//     cursor: pointer;
//     transition: background-color 0.3s ease;

//     &:hover {
//         transform: scale(1.05);
//         color:white;
//         box-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
//         background-color: ${({ action }) => (action === 'edit' ? '#333' : '#333')};
//     }
// `;

// const MyAirdrops = ({ currentUser }) => {
//     const [formData, setFormData] = useState({
//         airdropName: '',
//         airdropLink: '',
//         referCode: '',
//         airdropType: '',
//         connectedVia: '',
//         joinDate: ''
//     });
//     const [message, setMessage] = useState('');
//     const [airdropList, setAirdropList] = useState([]);
//     const [errors, setErrors] = useState({});
//     const [sortCriteria, setSortCriteria] = useState('');

//     useEffect(() => {
//         fetchAirdrops();
//     }, []);

//     const fetchAirdrops = async () => {
//         try {
//             const response = await axios.get('http://localhost:3000/myairdrops');
//             setAirdropList(response.data);
//         } catch (error) {
//             console.error('Error fetching airdrops:', error);
//         }
//     };

//     const handleSort = (criteria) => {
//         setSortCriteria(criteria);
//         const sortedAirdrops = [...airdropList].sort((a, b) => {
//             if (criteria === 'name') return a.airdropName.localeCompare(b.airdropName);
//             if (criteria === 'type') return a.airdropType.localeCompare(b.airdropType);
//             if (criteria === 'date') return new Date(b.createdAt) - new Date(a.createdAt);
//             if (criteria === 'status') return a.status.localeCompare(b.status);
//             return 0;
//         });
//         setAirdropList(sortedAirdrops);
//     };

//     const validateForm = () => {
//         const errors = {};
//         if (!formData.airdropName) errors.airdropName = 'Airdrop Name is required';
//         if (!formData.airdropLink) errors.airdropLink = 'Airdrop Link is required';
//         else if (!/^https?:\/\/[^\s]+$/.test(formData.airdropLink)) errors.airdropLink = 'Invalid URL format';
//         if (!formData.airdropType) errors.airdropType = 'Airdrop Type is required';
//         if (!formData.connectedVia) errors.connectedVia = 'Connected Via is required';
//         setErrors(errors);
//         return Object.keys(errors).length === 0;
//     };

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleDateChange = (e) => {
//         setFormData({ ...formData, joinDate: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setMessage('');

//         if (!validateForm()) return;

//         const isDuplicate = airdropList.some(airdrop =>
//             airdrop.airdropLink === formData.airdropLink && airdrop.currentUser === currentUser.email
//         );

//         if (isDuplicate) {
//             setMessage('Airdrop already exists. Please add a new airdrop.');
//             return;
//         }

//         const newAirdrop = { ...formData, currentUser: currentUser.email };

//         try {
//             await axios.post('http://localhost:3000/myairdrops', newAirdrop);
//             setMessage('Airdrop added successfully!');
//             fetchAirdrops();
//             setFormData({ airdropName: '', airdropLink: '', referCode: '', airdropType: '', connectedVia: '', joinDate: '' });
//         } catch (error) {
//             console.error('Error adding airdrop:', error);
//         }
//     };

//     const handleEdit = async (airdropId) => {
//         const airdropToEdit = airdropList.find(a => a.id === airdropId);
//         setFormData({ ...airdropToEdit });
//     };

//     const handleDelete = async (airdropId) => {
//         try {
//             await axios.delete(`http://localhost:3000/myairdrops/${airdropId}`);
//             setMessage('Airdrop deleted successfully!');
//             fetchAirdrops();
//         } catch (error) {
//             console.error('Error deleting airdrop:', error);
//         }
//     };

//     return (
//         <FormContainer>
//             <MainForm>
//                 <WelcomeMessage>Welcome, {currentUser.username} To your Airdrop Manager!</WelcomeMessage>
//                 <SubHeading>A One Stop Place To Store All Your Airdrops</SubHeading>

//                 {message && <Message type={message.includes('success') ? 'success' : 'error'}>{message}</Message>}

//                 <form onSubmit={handleSubmit} style={{ width: '100%' }}>
//                     <Label>*<Input type="text" name="airdropName" value={formData.airdropName} onChange={handleChange} placeholder='Airdrop Name' /></Label>
//                     {errors.airdropName && <div style={{ color: 'red', fontSize: '0.9rem' }}>{errors.airdropName}</div>}

//                     <Label>*<Input type="text" name="airdropLink" value={formData.airdropLink} onChange={handleChange} placeholder='Airdrop Link' /></Label>
//                     {errors.airdropLink && <div style={{ color: 'red', fontSize: '0.9rem' }}>{errors.airdropLink}</div>}

//                     <Label><Input type="text" name="referCode" value={formData.referCode} onChange={handleChange} placeholder='Refer Code (Optional)' /></Label>

//                     <Label>*<Select name="airdropType" value={formData.airdropType} onChange={handleChange}>
//                         <option value="">Select Airdrop Type</option>
//                         <option value="Token">Token</option>
//                         <option value="NFT">NFT</option>
//                         <option value="Other">Other</option>
//                     </Select></Label>
//                     {errors.airdropType && <div style={{ color: 'red', fontSize: '0.9rem' }}>{errors.airdropType}</div>}

//                     <Label>*<Input type="text" name="connectedVia" value={formData.connectedVia} onChange={handleChange} placeholder='Connected Via' /></Label>
//                     {errors.connectedVia && <div style={{ color: 'red', fontSize: '0.9rem' }}>{errors.connectedVia}</div>}

//                     <Label><Input type="date" name="joinDate" value={formData.joinDate} onChange={handleDateChange} /></Label>

//                     <Button type="submit">Submit</Button>
//                 </form>

//                 <HeadingAndSelect>
//                 <Heading>My Airdrops</Heading>
                 
//                 <SortMenu onChange={(e) => handleSort(e.target.value)}>
//                     <option value="">Sort Airdrops</option>
//                     <option value="A-Z">Name (A-Z)</option>
//                     <option value="Z-A">Name (Z-A)</option>
//                     <option value="Newest">Newest First</option>
//                     <option value="Oldest">Oldest First</option>
//                 </SortMenu>
//                 </HeadingAndSelect>


//                 {airdropList.filter(a => a.currentUser === currentUser.email).map((airdrop) => (
//                     <Card key={airdrop.id}>
//                         <p><strong>Name:</strong> {airdrop.airdropName}</p>
//                         <p><strong>Link:</strong> {airdrop.airdropLink}</p>
//                         <EditDeleteButton action="edit" onClick={() => handleEdit(airdrop.id)}>Edit</EditDeleteButton>
//                         <EditDeleteButton action="delete" onClick={() => handleDelete(airdrop.id)}>Delete</EditDeleteButton>
//                     </Card>
//                 ))}
//             </MainForm>
//         </FormContainer>
//     );
// };

// export default MyAirdrops;


// const HeadingAndSelect=styled.div`
// display:flex;
// `

// const SortMenu = styled.select`
// display:flex;    
// width: 30%;
// justify-content:flex-end;
//     padding: 10px;
//     margin: 35px 0px;
//     border-radius: 5px;
//     border: none;
//     outline: none;
//     transition: box-shadow 0.3s ease-in-out;

//     &:hover {
//         transform: scale(1.02);
//         box-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
//     }`




















import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-left:-50px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0,0,0,0.1);
    color: #fff;
`;

const MainForm = styled.div`
    // width: 100%;
    max-width: 500px;
    margin-top: 120px;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: none;
    outline: none;
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
    }
`;

const Select = styled.select`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: none;
    outline: none;
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
    }
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background: gold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease-in-out;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
        color: white;
        background-color: #333;
    }
`;

const Message = styled.div`
    color: ${({ type }) => (type === 'error' ? 'red' : 'green')};
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 1.2rem;
    padding: 10px;
    border-radius: 5px;
    background-color: ${({ type }) => (type === 'error' ? 'rgba(255, 0, 0, 0.2)' : 'rgba(0, 255, 0, 0.2)')};
    animation: fadeOut 1s ease-out forwards;

    @keyframes fadeOut {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;

const Label = styled.label`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-weight: bold;
    color: red;
`;

const Card = styled.div`
    border: 1px solid gold;
    padding: 15px;
    margin: 10px 0;
    border-radius: 10px;
    transition: box-shadow 0.3s ease-in-out;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    text-align: center;

    &:hover {
        box-shadow: 0 0 15px rgba(255, 215, 0, 0.8);
        transform: scale(1.05);
    }
`;

const Heading = styled.h2`
    text-align: center;
    font-size: 2.5rem;
    color: gold;
    margin-bottom: 20px;
    margin-left:60px;
`;

const WelcomeMessage = styled.div`
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: gold;
    margin-bottom: 20px;
`;

const SubHeading = styled.div`
    text-align: center;
    font-size: 1.1rem;
    color: white;
    margin-bottom: 30px;
`;

const EditDeleteButton = styled.button`
    padding: 10px;
    background-color: ${({ action }) => (action === 'edit' ? 'gold' : 'gold')};
    color: #333;
    border: none;
    border-radius: 5px;
    margin: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        transform: scale(1.05);
        color:white;
        box-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
        background-color: ${({ action }) => (action === 'edit' ? '#333' : '#333')};
    }
`;

const MyAirdrops = ({ currentUser }) => {
    const [formData, setFormData] = useState({
        airdropName: '',
        airdropLink: '',
        referCode: '',
        airdropType: '',
        connectedVia: '',
        joinDate: ''
    });
    const [message, setMessage] = useState('');
    const [airdropList, setAirdropList] = useState([]);
    const [errors, setErrors] = useState({});
    // const [sortCriteria, setSortCriteria] = useState('');

    useEffect(() => {
        fetchAirdrops();
    }, []);

    const fetchAirdrops = async () => {
        try {
            const response = await axios.get('http://localhost:3000/myairdrops');
            setAirdropList(response.data);
        } catch (error) {
            console.error('Error fetching airdrops:', error);
        }
    };

    const handleSort = (criteria) => {
        setSortCriteria(criteria);
        const sortedAirdrops = [...airdropList].sort((a, b) => {
            if (criteria === 'name') return a.airdropName.localeCompare(b.airdropName);
            if (criteria === 'type') return a.airdropType.localeCompare(b.airdropType);
            if (criteria === 'date') return new Date(b.createdAt) - new Date(a.createdAt);
            if (criteria === 'status') return a.status.localeCompare(b.status);
            return 0;
        });
        setAirdropList(sortedAirdrops);
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.airdropName) errors.airdropName = 'Airdrop Name is required';
        if (!formData.airdropLink) errors.airdropLink = 'Airdrop Link is required';
        else if (!/^https?:\/\/[^\s]+$/.test(formData.airdropLink)) errors.airdropLink = 'Invalid URL format';
        if (!formData.airdropType) errors.airdropType = 'Airdrop Type is required';
        if (!formData.connectedVia) errors.connectedVia = 'Connected Via is required';
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDateChange = (e) => {
        setFormData({ ...formData, joinDate: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        if (!validateForm()) return;

        const isDuplicate = airdropList.some(airdrop =>
            airdrop.airdropLink === formData.airdropLink && airdrop.currentUser === currentUser.email
        );

        if (isDuplicate) {
            setMessage('Airdrop already exists. Please add a new airdrop.');
            return;
        }

        const newAirdrop = { ...formData, currentUser: currentUser.email };

        try {
            await axios.post('http://localhost:3000/myairdrops', newAirdrop);
            setMessage('Airdrop added successfully!');
            fetchAirdrops();
            setFormData({ airdropName: '', airdropLink: '', referCode: '', airdropType: '', connectedVia: '', joinDate: '' });
        } catch (error) {
            console.error('Error adding airdrop:', error);
        }
    };

    // const handleEdit = async (airdropId) => {
    //     const airdropToEdit = airdropList.find(a => a.id === airdropId);
    //     setFormData({ ...airdropToEdit });
    // };

    const handleDelete = async (airdropId) => {
        try {
            await axios.delete(`http://localhost:3000/myairdrops/${airdropId}`);
            setMessage('Airdrop deleted successfully!');
            fetchAirdrops();
        } catch (error) {
            console.error('Error deleting airdrop:', error);
        }
    };

    return (
        <FormContainer>
            <MainForm>
                <WelcomeMessage>Welcome, {currentUser.username} To your Airdrop Manager!</WelcomeMessage>
                <SubHeading>A One Stop Place To Store All Your Airdrops</SubHeading>

                {message && <Message type={message.includes('success') ? 'success' : 'error'}>{message}</Message>}

                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <Label>*<Input type="text" name="airdropName" value={formData.airdropName} onChange={handleChange} placeholder='Airdrop Name' /></Label>
                    {errors.airdropName && <div style={{ color: 'red', fontSize: '0.9rem' }}>{errors.airdropName}</div>}

                    <Label>*<Input type="text" name="airdropLink" value={formData.airdropLink} onChange={handleChange} placeholder='Airdrop Link' /></Label>
                    {errors.airdropLink && <div style={{ color: 'red', fontSize: '0.9rem' }}>{errors.airdropLink}</div>}

                    <Label><Input type="text" name="referCode" value={formData.referCode} onChange={handleChange} placeholder='Refer Code (Optional)' /></Label>

                    <Label>*<Select name="airdropType" value={formData.airdropType} onChange={handleChange}>
                        <option value="">Select Airdrop Type</option>
                        <option value="Token">Token</option>
                        <option value="NFT">NFT</option>
                        <option value="Other">Other</option>
                    </Select></Label>
                    {errors.airdropType && <div style={{ color: 'red', fontSize: '0.9rem' }}>{errors.airdropType}</div>}

                    <Label>*<Input type="text" name="connectedVia" value={formData.connectedVia} onChange={handleChange} placeholder='Connected Via' /></Label>
                    {errors.connectedVia && <div style={{ color: 'red', fontSize: '0.9rem' }}>{errors.connectedVia}</div>}

                    <Label><Input type="date" name="joinDate" value={formData.joinDate} onChange={handleDateChange} /></Label>

                    <Button type="submit">Submit</Button>
                </form>

                <HeadingAndSelect>
                    <Heading>My Airdrops</Heading>
                    {/* <SortMenu onChange={(e) => handleSort(e.target.value)}>
                        <option value="">Sort Airdrops</option>
                        <option value="A-Z">Name (A-Z)</option>
                        <option value="Z-A">Name (Z-A)</option>
                        <option value="Newest">Newest First</option>
                        <option value="Oldest">Oldest First</option>
                    </SortMenu> */}
                </HeadingAndSelect>

                {airdropList.filter(a => a.currentUser === currentUser.email).map((airdrop) => (
                    <Card key={airdrop.id}>
                        <p><strong>Name:</strong> {airdrop.airdropName}</p>
                        <p><strong>Link:</strong> {airdrop.airdropLink}</p>
                        {/* <EditDeleteButton action="edit" onClick={() => handleEdit(airdrop.id)}>Edit</EditDeleteButton> */}
                        <EditDeleteButton action="delete" onClick={() => handleDelete(airdrop.id)}>Delete</EditDeleteButton>
                    </Card>
                ))}
            </MainForm>
        </FormContainer>
    );
};

export default MyAirdrops;

const HeadingAndSelect = styled.div`
    // display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
`;

const SortMenu = styled.select`
    width: 27%;
    padding: 10px;
    margin-left: 500px;
    border-radius: 5px;
    border: 1px solid gold;
    outline: none;
    transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    &:hover {
        background-color: rgba(255, 215, 0, 0.1);
        box-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
    }

    option {
        padding: 5px;
        background-color: black;
        color: gold;
        border: none;
    }

    &:focus {
        background-color: rgba(255, 215, 0, 0.3);
    }
`;
