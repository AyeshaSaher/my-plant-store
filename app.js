import React, { useState } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import ProductListing from './components/ProductListing';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
    const [cart, setCart] = useState([]);
    
    const addToCart = (plant) => {
        setCart((prevCart) => {
            const existing = prevCart.find(item => item.id === plant.id);
            if (existing) {
                return prevCart.map(item =>
                    item.id === plant.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { ...plant, quantity: 1 }];
        });
    };

    const updateCartItem = (id, amount) => {
        setCart((prevCart) => {
            return prevCart
                .map(item =>
                    item.id === id ? { ...item, quantity: item.quantity + amount } : item
                )
                .filter(item => item.quantity > 0);
        });
    };

    return (
        <>
            <Header cart={cart} />
            <LandingPage />
            <ProductListing addToCart={addToCart} />
            <ShoppingCart cart={cart} updateCartItem={updateCartItem} />
        </>
    );
};

export default App;