import React, { useState } from 'react';

const Register = () => {
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

        // Placeholder for actual registration logic
        console.log('Username:', username);
        console.log('First Name:', firstname);
        console.log('Last Name:', lastname);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Profile Picture:', profilePicture);
        console.log('Bio:', bio);
        console.log('Category:', category);
        console.log('Phone:', phone);
        console.log('Address:', address);
        console.log('Gender:', gender);

        alert('Registration successful!');
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>First Name:</label>
                    <input
                        type="text"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Profile Picture:</label>
                    <input
                        type="file"
                        onChange={(e) => setProfilePicture(e.target.files[0])}
                    />
                </div>
                <div>
                    <label>Bio:</label>
                    <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                    />
                </div>
                <div>
                    <label>Category:</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="buyer">Buyer</option>
                        <option value="artist">Artist</option>
                        <option value="organizer">Organizer</option>
                    </select>
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Address:</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Gender:</label>
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
