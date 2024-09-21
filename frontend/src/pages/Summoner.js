import React from 'react';
import PUUIDForm from '../components/PUUIDForm';
import SummonerAccountIDForm from '../components/SummonerAccountIDForm';
import SummonerIDForm from '../components/SummonerIDForm';
import RiotIdForm from '../components/RiotIdForm';

const SummonerPage = () => {
    return (
        <div>
            <h1>Summoner API Test Page</h1>
            <br></br>
            <div>
                <h2>Pre-req Data</h2>
                <p>Use This to get PUUID</p>
                <RiotIdForm />
            </div>
            <div>
                <PUUIDForm />
            </div>
            <br></br>
            <div>
                <SummonerAccountIDForm />
            </div>
            <br></br>
            <div>
                <SummonerIDForm />
            </div>
        </div>
    );
};

export default SummonerPage;
