import React from 'react';
import RiotIdForm from '../components/RiotIdForm'; // Import the form component
import PUUIDForm from '../components/PUUIDForm';

const AccountPage = () => {
    return (
        <div>
            <h1>Account API Test Page</h1>
            <div>
                <h2>Get Account by Riot ID</h2>
                {/* Render the RiotIdForm */}
                <RiotIdForm />
            </div>
            <div>
                <h2>Get Account by PUUID</h2>
                {/* Render the RiotIdForm */}
                <PUUIDForm />
            </div>
        </div>
    );
};

export default AccountPage;
