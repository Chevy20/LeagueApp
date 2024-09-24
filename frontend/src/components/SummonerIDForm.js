import React, { useState } from 'react';

function SummonerIDForm() {
    const options = [
        { label: 'Summoner API', value: 'summoners' },
        { label: 'League API', value: 'league' }
    ];
    const [selectedOption, setSelectedOption] = useState(options[0].value); // Default to the first option
    const [summonerID, setsummonerID] = useState('');
    const [data, setdata] = useState(null);
    const [error, setError] = useState(null);

    //Function to handle submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/${selectedOption}/by-summoner/${summonerID}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch data using summoner ID for the ${selectedOption} api. `);
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
            <h2>{`Find ${options.find(option => option.value === selectedOption).label} by Summoner ID`}</h2>
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
                <br></br>
                <label>
                    Summoner ID:
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
            {
                data && (
                    <div>
                        <h3>{`${options.find(option => option.value === selectedOption).label} data`}</h3>
                        <pre>{JSON.stringify(data, null, 2)}</pre>
                    </div>
                )
            }
            {/* Display error if request fails */}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div >
    );
}

export default SummonerIDForm;