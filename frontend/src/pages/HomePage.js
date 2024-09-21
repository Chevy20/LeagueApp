import React from 'react';
import NavButton from '../components/NavButton';  // Import NavButton

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the Landing Page</h1>
            {/* Use NavButton to navigate to other pages */}
            <NavButton label="Go to Account API Test Page" targetPage="/account" />
            <NavButton label="Go to Summoner API Test Page" targetPage="/summoner" />
            <NavButton label="Go to Champion API Test Page" targetPage="/champion" />
            <NavButton label="Go to League API Test Page" targetPage="/league" />
            <NavButton label="Go to League EXP API Test Page" targetPage="/league-exp" />
            <NavButton label="Go to Clash API Test Page" targetPage="/clash" />
            <NavButton label="Go to LOL Status API Test Page" targetPage="/lol-status" />
            <NavButton label="Go to Match API Test Page" targetPage="/match" />
            <NavButton label="Go to LOL challenges API Test Page" targetPage="/lol-challenges" />
            <NavButton label="Go to Champion Mastery API Test Page" targetPage="/champion-mastery" />
            <NavButton label="Go to Spectator API Test Page" targetPage="/spectator" />
            {/* Add more NavButtons as needed */}
        </div>
    );
};

export default HomePage;
