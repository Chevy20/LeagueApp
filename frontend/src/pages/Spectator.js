import React from 'react';
import RiotIdForm from '../components/RiotIdForm';
import PUUIDForm from '../components/PUUIDForm';
import NoParamForm from '../components/NoParamForm';

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
                <NoParamForm />
            </div>
        </div>
    );
};

export default SpectatorPage;
