import React from 'react';
import NavButton from '../components/NavButton';  // Import NavButton

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the Landing Page</h1>
            {/* Use NavButton to navigate to other pages */}
            <NavButton label="Go to Account API Test Page" targetPage="/account" />
            <NavButton label="Go to Summoner API Test Page" targetPage="/summoner" />
            {/* Add more NavButtons as needed */}
        </div>
    );
};

export default HomePage;
