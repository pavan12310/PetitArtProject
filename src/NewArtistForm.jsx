import React, { useState } from 'react';
import './NewArtistForm.css';

const NewArtistForm = () => {
    const [artistName, setArtistName] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
    const [portfolio, setPortfolio] = useState('');
    const [experience, setExperience] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
    };

    return (
        <div className="new-artist-form">
            <h2>Register as a New Artist</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Artist Name"
                    value={artistName}
                    onChange={(e) => setArtistName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    required
                />
                <input
                    type="url"
                    placeholder="Portfolio URL"
                    value={portfolio}
                    onChange={(e) => setPortfolio(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Years of Experience"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Specialization"
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setProfilePicture(e.target.files[0])}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default NewArtistForm;
