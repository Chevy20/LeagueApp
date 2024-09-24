//extract createRiotApiClient from services/riotApiClient
const { createRiotApiClient } = require('../services/riotApiClient');

// Fetch server status
exports.checkLolStatus = async (req, res) => {
    try {
        // Create the Riot API client with the correct base URL for STATUS_V4
        const riotApiClient = createRiotApiClient('STATUS_V4');

        // Fetch the champ rotation data
        const response = await riotApiClient.get(`/platform-data`);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Failed to fetch server status data' });
    }
};





