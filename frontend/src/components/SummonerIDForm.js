import React, { useState } from 'react';

function SummonerIDForm() {
    const [summonerID, setsummonerID] = useState('');
    const [summonerData, setsummonerData] = useState(null);
    const [error, setError] = useState(null);

    //Function to handle submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/summoners/by-summoner/${summonerID}`);
            if (!response.ok) {
                throw new Error('Failed to fetch summoner data using summoner ID');
            }
            const data = await response.json();
            setsummonerData(data);
            setError(null); //Clear any previous errors
        } catch (error) {
            setError(error.message); // Store error message
            setsummonerData(null); // Clear previous data
        }
    };

    return (
        <div>
            <h2>Find Summoner by Summoner ID</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Game Name:
                    <input
                        type="text"
                        value={summonerID}
                        onChange={(e) => setsummonerID(e.target.value)}
                        placeholder="Enter Summoner ID"
                        required
                    />
                </label>
                <button type="submit">Search</button>
            </form>
            {summonerData && (
                <div>
                    <h3>Summoner Data</h3>
                    <pre>{JSON.stringify(summonerData, null, 2)}</pre>
                </div>
            )}
            {/* Display error if request fails */}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default SummonerIDForm;