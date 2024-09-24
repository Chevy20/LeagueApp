import React, { useState } from 'react';

function NoParamForm() {
    // Define the available options in a modular way
    const options = [
        { label: 'Specator Featured Games', value: 'spectator/featured-games' },
        { label: 'Champion Rotations', value: 'platform/champion-rotations' },
        { label: 'NA Server Status', value: 'lol-status/status' }


    ];
    const [selectedOption, setSelectedOption] = useState(options[0].value); // Default to the first option
    const [data, setdata] = useState(null);
    const [error, setError] = useState(null);

    //Function to handle submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/${selectedOption}`);
            if (!response.ok) {
                throw new Error('Failed to fetch requested data' + error);
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
            <h2>No Paramter API Call</h2>
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
                <button type="submit">Search</button>
            </form>
            {data && (
                <div>
                    <h3>Requested Data</h3>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
            {/* Display error if request fails */}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default NoParamForm;