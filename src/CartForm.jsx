import React, { useState } from 'react';
import './CartForm.css';

const CartForm = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Art Piece 1', price: 100, quantity: 1 },
        { id: 2, name: 'Art Piece 2', price: 150, quantity: 2 },
        // Add more items as needed
    ]);

    const handleQuantityChange = (id, newQuantity) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        ));
    };

    const handleRemoveItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-form">
            <header className="cart-header">
                <h2>Your Orders</h2>
            </header>

            <section className="cart-items">
                {cartItems.length > 0 ? (
                    cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price}</p>
                            <label>
                                Quantity:
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                                    min="1"
                                />
                            </label>
                            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                        </div>
                    ))
                ) : (
                    <p className="no-items">Your cart is empty</p>
                )}
            </section>

            <section className="cart-summary">
                <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
                <button className="checkout-button">Proceed to Checkout</button>
            </section>
        </div>
    );
};

export default CartForm;
