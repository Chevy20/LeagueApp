import React, { useState } from 'react';

function SummonerAccountIDForm() {
    const [accountID, setaccountID] = useState('');
    const [summonerData, setsummonerData] = useState(null);
    const [error, setError] = useState(null);

    //Function to handle submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/summoners/by-account/${accountID}`);
            if (!response.ok) {
                throw new Error('Failed to fetch summoner data using account ID');
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
            <h2>Find Summoner by Account ID </h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Account ID:
                    <input
                        type="text"
                        value={accountID}
                        onChange={(e) => setaccountID(e.target.value)}
                        placeholder="Enter Account ID"
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

export default SummonerAccountIDForm;