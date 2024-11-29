import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cart }) => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <header>
            <h1>Plant Store</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/cart">Cart ({totalItems})</Link>
            </nav>
        </header>
    );
};

export default Header;