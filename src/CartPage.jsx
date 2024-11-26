import React, { useState } from 'react';
import OrderForm from './OrderForm'; // Assuming this is the order form component
import CartForm from './CartForm';   // Assuming this is the cart component
import './CartPage.css'

const CartPage = () => {
  // Sample data for cart, you can replace this with real data (e.g., from Redux, Context API, or props)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Artwork 1', price: 100, quantity: 1 },
    { id: 2, name: 'Artwork 2', price: 150, quantity: 2 },
    // Add more items as needed
  ]);

  const [isCheckout, setIsCheckout] = useState(false); // Toggle between cart view and order form

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleProceedToCheckout = () => {
    setIsCheckout(true); // Show the OrderForm
  };

  const handleGoBack = () => {
    setIsCheckout(false); // Go back to the CartForm
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {isCheckout ? (
        <div className="checkout-section">
          {/* OrderForm for the user to fill out their details */}
          <OrderForm cartItems={cartItems} totalPrice={totalPrice} />
          <button onClick={handleGoBack} className="back-button">Go Back to Cart</button>
        </div>
      ) : (
        <div className="cart-section">
          {/* CartForm displaying items in the cart */}
          <CartForm cartItems={cartItems} />
          <div className="cart-total">
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <button onClick={handleProceedToCheckout} className="checkout-button">
              Proceed to Orders
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
