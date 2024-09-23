// import React, { useState } from 'react';
// import  './SignUp.css';

// const Signup = () => {
//     const [username, setUsername] = useState('');
//     const [firstname, setFirstname] = useState('');
//     const [lastname, setLastname] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [profilePicture, setProfilePicture] = useState(null);
//     const [bio, setBio] = useState('');
//     const [category, setCategory] = useState('buyer');
//     const [phone, setPhone] = useState('');
//     const [address, setAddress] = useState('');
//     const [gender, setGender] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Validate phone number (must be 10 digits)
//         const phoneRegex = /^\d{10}$/;
//         if (!phoneRegex.test(phone)) {
//             alert('Phone number must be 10 digits');
//             return;
//         }

//         // Check if passwords match
//         if (password !== confirmPassword) {
//             alert('Passwords do not match');
//             return;
//         }

//         // Placeholder for actual signup logic
//         console.log('Username:', username);
//         console.log('First Name:', firstname);
//         console.log('Last Name:', lastname);
//         console.log('Email:', email);
//         console.log('Password:', password);
//         console.log('Profile Picture:', profilePicture);
//         console.log('Bio:', bio);
//         console.log('Category:', category);
//         console.log('Phone:', phone);
//         console.log('Address:', address);
//         console.log('Gender:', gender);

//         alert('Signup successful!');
//     };

//     return (
//         <div className="signup-container">
//             <h2>Signup</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Username:</label>
//                     <input
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>First Name:</label>
//                     <input
//                         type="text"
//                         value={firstname}
//                         onChange={(e) => setFirstname(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Last Name:</label>
//                     <input
//                         type="text"
//                         value={lastname}
//                         onChange={(e) => setLastname(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Email:</label>
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Confirm Password:</label>
//                     <input
//                         type="password"
//                         value={confirmPassword}
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Profile Picture:</label>
//                     <input
//                         type="file"
//                         onChange={(e) => setProfilePicture(e.target.files[0])}
//                     />
//                 </div>
//                 <div>
//                     <label>Bio:</label>
//                     <textarea
//                         value={bio}
//                         onChange={(e) => setBio(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label>Category:</label>
//                     <select
//                         value={category}
//                         onChange={(e) => setCategory(e.target.value)}
//                     >
//                         <option value="buyer">Buyer</option>
//                         <option value="artist">Artist</option>
//                         <option value="organizer">Organizer</option>
//                     </select>
//                 </div>
//                 <div>
//                     <label>Phone Number:</label>
//                     <input
//                         type="text"
//                         value={phone}
//                         onChange={(e) => setPhone(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Address:</label>
//                     <input
//                         type="text"
//                         value={address}
//                         onChange={(e) => setAddress(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>Gender:</label>
//                     <select
//                         value={gender}
//                         onChange={(e) => setGender(e.target.value)}
//                     >
//                         <option value="male">Male</option>
//                         <option value="female">Female</option>
//                         <option value="other">Other</option>
//                     </select>
//                 </div>
//                 <button type="submit">Signup</button>
//             </form>
//         </div>
//     );
// };

// export default Signup;

import React, { useState } from 'react';
import './SignUp.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const [bio, setBio] = useState('');
    const [category, setCategory] = useState('buyer');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate phone number (must be 10 digits)
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            alert('Phone number must be 10 digits');
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // Placeholder for actual signup logic
        console.log('Form Data:', { username, firstname, lastname, email, password, profilePicture, bio, category, phone, address, gender });

        alert('Signup successful!');
    };

    return (
        <div className="signup-container">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="form-row">
                    <div className="form-column">
                        <label>Username:</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        
                        <label>First Name:</label>
                        <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} required />
                        
                        <label>Last Name:</label>
                        <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
                        
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        
                        <label>Password:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="form-column">
                        <label>Confirm Password:</label>
                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                        
                        <label>Profile Picture:</label>
                        <input type="file" onChange={(e) => setProfilePicture(e.target.files[0])} />
                        
                        <label>Bio:</label>
                        <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
                        
                        <label>Category:</label>
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="buyer">Buyer</option>
                            <option value="artist">Artist</option>
                            <option value="organizer">Organizer</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-column">
                        <label>Phone Number:</label>
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                        
                        <label>Address:</label>
                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
                    </div>
                    <div className="form-column">
                        <label>Gender:</label>
                        <select value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
                <div className="button-group">
                    <button type="button" className="back-button">Back</button>
                    <button type="submit">Signup</button>
                    <button type="button" className="clear-button">Clear</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
