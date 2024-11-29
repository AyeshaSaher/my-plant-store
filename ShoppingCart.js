import React from 'react';

const ShoppingCart = ({ cart, updateCartItem }) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="shopping-cart">
            <h2>Your Cart</h2>
            {cart.map(item => (
                <div key={item.id}>
                    <h4>{item.name}</h4>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <button onClick={() => updateCartItem(item.id, 1)}>Increase</button>
                    <button onClick={() => updateCartItem(item.id, -1)}>Decrease</button>
                </div>
            ))}
            <h3>Total: ${total}</h3>
            <button>Checkout (Coming Soon)</button>
            <button onClick={() => window.location.href='/products'}>Continue Shopping</button>
        </div>
    );
};

export default ShoppingCart;