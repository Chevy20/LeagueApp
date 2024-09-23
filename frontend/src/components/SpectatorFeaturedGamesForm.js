import React, { useState } from 'react';

function SpectatorFeaturedGamesForm() {

    const [spectatorData, setspectatorData] = useState(null);
    const [error, setError] = useState(null);

    //Function to handle submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/spectator/featured-games`);
            if (!response.ok) {
                throw new Error('Failed to fetch spectator featured games data');
            }
            const data = await response.json();
            setspectatorData(data);
            setError(null); //Clear any previous errors
        } catch (error) {
            setError(error.message); // Store error message
            setspectatorData(null); // Clear previous data
        }
    };

    return (
        <div>
            <h2>Find Spectator API featued games</h2>
            <form onSubmit={handleSubmit}>
                <button type="submit">Search</button>
            </form>
            {spectatorData && (
                <div>
                    <h3>Featured games Data</h3>
                    <pre>{JSON.stringify(spectatorData, null, 2)}</pre>
                </div>
            )}
            {/* Display error if request fails */}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default SpectatorFeaturedGamesForm;