import React, { useState } from 'react';

function PUUIDForm() {
    // Define the available options in a modular way
    const options = [
        { label: 'Accounts', value: 'accounts' },
        { label: 'Summoners', value: 'summoners' },
        { label: 'Spectator', value: 'spectator' }
    ];

    const [puuid, setPuuid] = useState('');
    const [selectedOption, setSelectedOption] = useState(options[0].value); // Default to the first option
    const [accountData, setAccountData] = useState(null);
    const [error, setError] = useState(null);

    // Function to handle submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/${selectedOption}/by-puuid/${puuid}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setAccountData(data);
            setError(null); // Clear any previous errors
        } catch (error) {
            setError(error.message); // Store error message
            setAccountData(null); // Clear previous data
        }
    };

    return (
        <div>
            <h2>Find Data by PUUID</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Select Data Type:
                    <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </label>
                <br />
                <label>
                    PUUID:
                    <input
                        type="text"
                        value={puuid}
                        onChange={(e) => setPuuid(e.target.value)}
                        placeholder="Enter PUUID"
                        required
                    />
                </label>
                <button type="submit">Search</button>
            </form>

            {accountData && (
                <div>
                    <h3>{`${options.find(option => option.value === selectedOption).label} Data`}</h3>
                    <pre>{JSON.stringify(accountData, null, 2)}</pre>
                </div>
            )}
            {/* Display error if request fails */}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default PUUIDForm;
