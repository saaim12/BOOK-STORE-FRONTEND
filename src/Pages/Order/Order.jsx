import React, { useState } from 'react';
import { useUser } from '../useContext/Context';
import './Order.css'; // Ensure to add appropriate styles
import { useCart } from '../useContext/cartContext';

const OrderScreen = () => {
  const { cart, removeFromCart, clearCart } = useCart(); // Use cart context to get cart data
  const { user } = useUser(); // Get user from context or localStorage
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [error, setError] = useState(null);

  // Fallback to localStorage if the user is not available in context
  const currentUser = user || JSON.parse(localStorage.getItem('user'));
  console.log("========>",cart)
  // Handle address change
  const handleAddressChange = (e) => {
    setDeliveryAddress(e.target.value);
  };

  // Handle payment method change
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  // Confirm order
  const handleConfirmOrder = async () => {

    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!deliveryAddress || !paymentMethod) {
      alert('Please fill in all the details');
      return;
    }

    try {
      const orderData = {
        user_id: storedUser.userId,
        books: cart.map(item => ({
          book_id: item.book_id,
          quantity: item.quantity,
        })),
        delivery_address: deliveryAddress,
        payment_method: paymentMethod,
      };
       console.log("========>",orderData)
      const response = await fetch('http://localhost:8000/orders/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error('Order confirmation failed');
      }

      alert('Order Confirmed!');
      clearCart(); // Optionally clear the cart after confirmation
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  // Calculate the total price of the order
  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + (item.price * item.quantity),
      0
    ).toFixed(2);
  };

  if (cart.length === 0) return <h1>Your cart is empty. Please add some items to proceed with the order.</h1>;

  return (
    <div className="order-screen">
      <h2>Order Summary</h2>

      <div className="order-items">
        {cart.map((book, index) => (
          <div key={index} className="order-item">
            <img src={book.image} alt={book.title} className="order-item-image" />
            <div className="order-item-details">
              <h4>{book.title}</h4>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Quantity:</strong> {book.quantity}</p>
              <p><strong>Price:</strong> ${book.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="order-form">
        <h3>Delivery Details</h3>
        <textarea
          value={deliveryAddress}
          onChange={handleAddressChange}
          placeholder="Enter your delivery address"
          rows="4"
        />

        <h3>Payment Method</h3>
        <select value={paymentMethod} onChange={handlePaymentMethodChange}>
          <option value="">Select payment method</option>
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>

        <div className="order-total">
          <h4>Total: ${calculateTotal()}</h4>
        </div>

        <div className="order-confirm">
          <button onClick={handleConfirmOrder} className="confirm-button">Confirm Order</button>
        </div>
      </div>
    </div>
  );
};

export default OrderScreen;
