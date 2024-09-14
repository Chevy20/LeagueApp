import React, { useState } from 'react';

function RiotIdForm() {
    const [gameName, setGameName] = useState('');
    const [tagLine, setTagLine] = useState('');
    const [accountData, setAccountData] = useState(null);
    const [error, setError] = useState(null);

    //Function to handle submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/accounts/by-riot-id/${gameName}/${tagLine}`);
            if (!response.ok) {
                throw new Error('Failed to fetch account data');
            }
            const data = await response.json();
            setAccountData(data);
            setError(null); //Clear any previous errors
        } catch (error) {
            setError(error.message); // Store error message
            setAccountData(null); // Clear previous data
        }
    };

    return (
        <div>
            <h2>Find Account by Riot ID</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Game Name:
                    <input
                        type="text"
                        value={gameName}
                        onChange={(e) => setGameName(e.target.value)}
                        placeholder="Enter Game Name"
                        required
                    />
                </label>
                <label>
                    Tag Line:
                    <input
                        type="text"
                        value={tagLine}
                        onChange={(e) => setTagLine(e.target.value)}
                        placeholder="Enter Tag Line"
                        required
                    />
                </label>
                <button type="submit">Search</button>
            </form>
            {accountData && (
                <div>
                    <h3>Account Data</h3>
                    <pre>{JSON.stringify(accountData, null, 2)}</pre>
                </div>
            )}
            {/* Display error if request fails */}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default RiotIdForm;