import React, { useState } from 'react';
import axios from 'axios';
import './OrderForm.css'

const OrderForm = () => {
    const [artworkId, setArtworkId] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [shippingAddress, setShippingAddress] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const [userId] = useState(1); // Example: hardcoded user_id, replace with actual logged-in user ID
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'artwork_id') setArtworkId(value);
        else if (name === 'quantity') setQuantity(value);
        else if (name === 'shipping_address') setShippingAddress(value);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        if (!artworkId || !quantity || !shippingAddress || quantity <= 0) {
            setErrorMessage('Please fill all fields correctly.');
            return;
        }

        // Fetch artwork price (assumption: you fetch artwork details separately)
        const artworkPrice = await fetchArtworkPrice(artworkId); // Implement this function to fetch artwork details
        const calculatedTotalPrice = artworkPrice * quantity;
        setTotalPrice(calculatedTotalPrice);

        const orderData = {
            user_id: userId,
            artwork_id: artworkId,
            quantity: quantity,
            shipping_address: shippingAddress,
            total_price: calculatedTotalPrice
        };

        try {
            const response = await axios.post('/api/orders', orderData);
            if (response.status === 200) {
                setSuccessMessage('Your order has been placed successfully!');
            }
        } catch (error) {
            setErrorMessage('There was an error placing your order. Please try again.');
        }
    };

    // Simulate fetching artwork price (you should implement actual logic based on your backend)
    const fetchArtworkPrice = async (artworkId) => {
        // For now, let's assume each artwork has a price of 100 for demonstration
        return 100; // Replace with actual fetch logic
    };

    return (
        <div className="order-form">
            <h2>Place Your Order</h2>
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
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={quantity}
                        onChange={handleInputChange}
                        min="1"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="shipping_address">Shipping Address:</label>
                    <textarea
                        id="shipping_address"
                        name="shipping_address"
                        value={shippingAddress}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div>
                    <label>Total Price: ${totalPrice}</label>
                </div>

                <button type="submit">Place Order</button>
            </form>
        </div>
    );
};

export default OrderForm;
