import React, { useState } from 'react';
import axios from 'axios';
import './BiddingForm.css'

const BiddingForm = () => {
    const [artworkId, setArtworkId] = useState('');
    const [bidAmount, setBidAmount] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Handles form field changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'artwork_id') {
            setArtworkId(value);
        } else if (name === 'bid_amount') {
            setBidAmount(value);
        }
    };

    // Submit bid to the backend API
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        if (!artworkId || !bidAmount || isNaN(bidAmount) || bidAmount <= 0) {
            setErrorMessage('Please enter a valid artwork ID and bid amount.');
            return;
        }

        const bidData = {
            artworkId: artworkId,
            bidAmount: bidAmount,
            userId: 1 // Example: hardcoded user_id, replace it with actual logged-in user's ID
        };

        try {
            const response = await axios.post('/api/bidding', bidData);
            if (response.status === 200) {
                setSuccessMessage('Your bid has been placed successfully!');
            }
        } catch (error) {
            if (error.response) {
                setErrorMessage(error.response.data || 'Error placing your bid. Please try again.');
            } else {
                setErrorMessage('There was an error communicating with the server.');
            }
        }
    };

    return (
        <div className="bidding-form">
            <h2>Place Your Bid</h2>
            {errorMessage && <p className="error">{errorMessage}</p>}
            {successMessage && <p className="success">{successMessage}</p>}

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="artwork_id">Artwork ID:</label>
                    <input
                        type="number"
                        id="artwork_id"
                        name="artwork_id"
                        value={artworkId}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="bid_amount">Bid Amount:</label>
                    <input
                        type="number"
                        id="bid_amount"
                        name="bid_amount"
                        value={bidAmount}
                        onChange={handleInputChange}
                        min="0.01"
                        step="0.01"
                        required
                    />
                </div>

                <button type="submit">Place Bid</button>
            </form>
        </div>
    );
};

export default BiddingForm;
