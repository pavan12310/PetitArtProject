import React, { useState } from 'react';
import './BiddingForm.css';

const BiddingForm = () => {
    const [bids, setBids] = useState([
        { item: 'Art Piece 1', currentBid: '$200', highestBidder: 'User A' },
        { item: 'Art Piece 2', currentBid: '$150', highestBidder: 'User B' },
        // Add more items as needed
    ]);

    const [bidItem, setBidItem] = useState('');
    const [bidAmount, setBidAmount] = useState('');
    const [bidHistory, setBidHistory] = useState([]);

    const handleBidSubmit = (e) => {
        e.preventDefault();
        if (bidItem && bidAmount) {
            // Update the bids
            const updatedBids = bids.map(bid => 
                bid.item === bidItem ? { ...bid, currentBid: bidAmount, highestBidder: 'Current User' } : bid
            );
            setBids(updatedBids);

            // Add to bid history
            setBidHistory([...bidHistory, { item: bidItem, amount: bidAmount }]);

            // Reset form
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
                        <input
                            type="text"
                            value={bidItem}
                            onChange={(e) => setBidItem(e.target.value)}
                            placeholder="Enter item name"
                            required
                        />
                    </label>
                    <label>
                        Bid Amount:
                        <input
                            type="text"
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
