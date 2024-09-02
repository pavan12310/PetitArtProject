import React, { useState, useEffect } from 'react';
import './BiddingForm.css';

const BiddingForm = () => {
    const [bids, setBids] = useState([]);
    const [bidItem, setBidItem] = useState('');
    const [bidAmount, setBidAmount] = useState('');
    const [bidHistory, setBidHistory] = useState([]);
    const [artworks, setArtworks] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch artworks and users from the API or server
        // Example:
        // fetch('/api/artworks').then(res => res.json()).then(data => setArtworks(data));
        // fetch('/api/users').then(res => res.json()).then(data => setUsers(data));

        // Mock data
        setArtworks([
            { id: 1, title: 'Art Piece 1' },
            { id: 2, title: 'Art Piece 2' },
            // Add more items as needed
        ]);
        setUsers([
            { id: 1, name: 'User A' },
            { id: 2, name: 'User B' },
            // Add more users as needed
        ]);
    }, []);

    const handleBidSubmit = (e) => {
        e.preventDefault();
        if (bidItem && bidAmount) {
            const updatedBids = bids.map(bid =>
                bid.item === bidItem ? { ...bid, currentBid: bidAmount, highestBidder: 'Current User' } : bid
            );
            setBids(updatedBids);

            setBidHistory([...bidHistory, { item: bidItem, amount: bidAmount }]);
            setBidItem('');
            setBidAmount('');
        }
    };

    return (
        <div className="bidding-form">
            <header className="bidding-header">
                <h2>Bidding Dashboard</h2>
            </header>

            <section className="bidding-current">
                <h3>Current Bids</h3>
                <div className="bidding-list">
                    {bids.length > 0 ? (
                        bids.map((bid, index) => (
                            <div key={index} className="bidding-card">
                                <h4>{bid.item}</h4>
                                <p>Current Bid: {bid.currentBid}</p>
                                <p>Highest Bidder: {bid.highestBidder}</p>
                            </div>
                        ))
                    ) : (
                        <p className="no-bids">No current bids available</p>
                    )}
                </div>
            </section>

            <section className="bidding-form-section">
                <h3>Place a Bid</h3>
                <form onSubmit={handleBidSubmit}>
                    <label>
                        Item:
                        <select
                            value={bidItem}
                            onChange={(e) => setBidItem(e.target.value)}
                            required
                        >
                            <option value="">Select an item</option>
                            {artworks.map((artwork) => (
                                <option key={artwork.id} value={artwork.title}>
                                    {artwork.title}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label>
                        Bid Amount:
                        <input
                            type="number"
                            step="0.01"
                            value={bidAmount}
                            onChange={(e) => setBidAmount(e.target.value)}
                            placeholder="Enter bid amount"
                            required
                        />
                    </label>
                    <button type="submit">Place Bid</button>
                </form>
            </section>

            <section className="bidding-history">
                <h3>Bid History</h3>
                {bidHistory.length > 0 ? (
                    <ul>
                        {bidHistory.map((history, index) => (
                            <li key={index}>{history.item}: ${history.amount}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="no-history">No bid history available</p>
                )}
            </section>
        </div>
    );
};

export default BiddingForm;
