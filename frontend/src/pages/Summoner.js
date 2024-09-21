import React from 'react';
import PUUIDForm from '../components/PUUIDForm';
import SummonerAccountIDForm from '../components/SummonerAccountIDForm';
import SummonerIDForm from '../components/SummonerIDForm';

const SummonerPage = () => {
    return (
        <div>
            <h1>Summoner API Test Page</h1>
            <br></br>
            <div>
                <h2>Get Summoner Data by PUUID</h2>
                <PUUIDForm />
            </div>
            <br></br>
            <div>
                <h2>Get Summoner Data by Account ID</h2>
                <SummonerAccountIDForm />
            </div>
            <br></br>
            <div>
                <h2>Get Summoner Data by Summoner ID</h2>
                <SummonerIDForm />
            </div>
        </div>
    );
};

export default SummonerPage;
