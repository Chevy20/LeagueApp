import React from 'react';
import NavButton from '../components/NavButton';  // Import NavButton

const LandingPage = () => {
    return (
        <div>
            <h1>Welcome to the Landing Page</h1>
            {/* Use NavButton to navigate to other pages */}
            <NavButton label="Go to Account API Test Page" targetPage="/account" />
            {/* Add more NavButtons as needed */}
        </div>
    );
};

export default LandingPage;
