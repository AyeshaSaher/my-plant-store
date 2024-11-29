import React from 'react';

const LandingPage = () => {
    return (
        <div className="landing">
            <img src="/images/background.jpg" alt="Background" />
            <h2>Welcome to Our Plant Store</h2>
            <p>Your one-stop shop for houseplants!</p>
            <button onClick={() => window.location.href='/products'}>Get Started</button>
        </div>
    );
};

export default LandingPage;