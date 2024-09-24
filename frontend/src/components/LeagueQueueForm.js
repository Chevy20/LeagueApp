import React, { useState } from 'react';


function LeagueQueueForm() {
    // Define the available queue in a modular way
    const queue = [
        { label: 'Ranked Solo Queue', value: 'RANKED_SOLO_5x5' },
        { label: 'Ranked Flex', value: 'RANKED_FLEX_SR' }
    ];
    const tier = [
        { label: 'Challenger', value: 'challengerleagues' },
        { label: 'Grandmaster', value: 'grandmasterleagues' },
        { label: 'Master', value: 'masterleagues' }
    ];

    const [selectedQueue, setSelectedQueue] = useState(queue[0].value); // Default to the first option
    const [selectedTier, setSelectedTier] = useState(tier[0].value); // Default to the first option
    const [leagueData, setLeagueData] = useState(null);
    const [error, setError] = useState(null);

    // Function to handle submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/league/${selectedTier}/by-queue/${selectedQueue}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setLeagueData(data);
            setError(null); // Clear any previous errors
        } catch (error) {
            setError(error.message); // Store error message
            setLeagueData(null); // Clear previous data
        }
    };

    return (
        <div>
            <h2>Find  Data by queue and tier</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Select Queue Type:
                    <select value={selectedQueue} onChange={(e) => setSelectedQueue(e.target.value)}>
                        {queue.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </label>
                <br />
                <label>
                    Select Tier:
                    <select value={selectedTier} onChange={(e) => setSelectedTier(e.target.value)}>
                        {tier.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </label>
                <br />

                <button type="submit">Search</button>
            </form>

            {leagueData && (
                <div>
                    <h3>{`${queue.find(option => option.value === selectedQueue).label} ${tier.find(option => option.value === selectedTier).label} Data`}</h3>
                    <pre>{JSON.stringify(leagueData, null, 2)}</pre>
                </div>
            )}
            {/* Display error if request fails */}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default LeagueQueueForm;
