import React, { useState } from 'react';

function PUUIDForm() {
    const [puuid, setpuuid] = useState('');
    const [accountData, setAccountData] = useState(null);
    const [error, setError] = useState(null);

    //Function to handle submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/accounts/by-puuid/${puuid}`);
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
            <h2>Find Account by PUUID</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Game Name:
                    <input
                        type="text"
                        value={puuid}
                        onChange={(e) => setpuuid(e.target.value)}
                        placeholder="Enter PUUID"
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

export default PUUIDForm;