import React, { useState } from 'react';

function LeagueByRankForm() {
    const queue = [
        { label: 'Ranked Solo Queue', value: 'RANKED_SOLO_5x5' },
        { label: 'Ranked Flex', value: 'RANKED_FLEX_SR' }
    ];
    const tier = [
        { label: 'Diamond', value: 'DIAMOND' },
        { label: 'Emerald', value: 'EMERALD' },
        { label: 'Platinum', value: 'PLATINUM' },
        { label: 'Gold', value: 'GOLD' },
        { label: 'Silver', value: 'SILVER' },
        { label: 'Bronze', value: 'BRONZE' },
        { label: 'Iron', value: 'IRON' }
    ];
    const division = [
        { label: 'I', value: 'I' },
        { label: 'II', value: 'II' },
        { label: 'III', value: 'III' },
        { label: 'IV', value: 'IV' },
        { label: 'V', value: 'V' }

    ];
    const [selectedQueue, setSelectedQueue] = useState(queue[0].value); // Default to the first option
    const [selectedTier, setSelectedTier] = useState(tier[0].value); // Default to the first option
    const [selectedDivision, setSelectedDivision] = useState(division[0].value); // Default to the first option
    const [page, setPage] = useState(1);
    const [data, setdata] = useState(null);
    const [error, setError] = useState(null);

    //Function to handle submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/league/entries/${selectedQueue}/${selectedTier}/${selectedDivision}/${page}?`);
            if (!response.ok) {
                throw new Error(`Failed to league data for ${selectedQueue}, ${selectedTier}, ${selectedDivision} from the league api. `);
            }
            const data = await response.json();
            setdata(data);
            setError(null); //Clear any previous errors
        } catch (error) {
            setError(error.message); // Store error message
            setdata(null); // Clear previous data
        }
    };

    return (
        <div>
            <h2>{`Find league info for ${queue.find(option => option.value === selectedQueue).label}
            ${tier.find(option => option.value === selectedTier).label} ${division.find(option => option.value === selectedDivision).label}`}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Select queue Type:
                    <select value={selectedQueue} onChange={(e) => setSelectedQueue(e.target.value)}>
                        {queue.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </label>
                <br></br>
                <label>
                    Select tier Type:
                    <select value={selectedTier} onChange={(e) => setSelectedTier(e.target.value)}>
                        {tier.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </label>
                <br></br>
                <label>
                    Select division Type:
                    <select value={selectedDivision} onChange={(e) => setSelectedDivision(e.target.value)}>
                        {division.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Page Input (optional):
                    <input
                        type="number"
                        value={page}
                        onChange={(e) => setPage(e.target.value)}
                        placeholder="Enter Page Optional"

                    />
                </label>
                <button type="submit">Search</button>
            </form>
            {
                data && (
                    <div>
                        <h3>{`${queue.find(option => option.value === selectedQueue).label} ${tier.find(option => option.value === selectedTier).label} 
                                ${division.find(option => option.value === selectedDivision).label} data`}</h3>
                        <pre>{JSON.stringify(data, null, 2)}</pre>
                    </div>
                )
            }
            {/* Display error if request fails */}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div >
    );
}

export default LeagueByRankForm;