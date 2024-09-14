import React from 'react';
import NavButton from '../components/NavButton';  // Import NavButton

const LandingPage = () => {
    return (
        <div>
            <h1>Welcome to the Landing Page</h1>
            {/* Use NavButton to navigate to other pages */}
            <NavButton label="Go to Riot ID Page" targetPage="/riot-id" />
            {/* Add more NavButtons as needed */}
        </div>
    );
};

export default LandingPage;
