import React from 'react';
import RiotIdForm from '../components/RiotIdForm';
import PUUIDForm from '../components/PUUIDForm';
import SpectatorFeaturedGamesForm from '../components/SpectatorFeaturedGamesForm';

const SpectatorPage = () => {
    return (
        <div>
            <h1>Spectator API Test Page</h1>
            <div>
                <h2>Pre-req Data</h2>
                <p>Use This to get PUUID</p>
                <RiotIdForm />
            </div>
            <br></br>
            <div>
                <PUUIDForm />
            </div>
            <div>
                <SpectatorFeaturedGamesForm />
            </div>
        </div>
    );
};

export default SpectatorPage;
