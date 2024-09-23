//extract createRiotApiClient from services/riotApiClient
const { createRiotApiClient } = require('../services/riotApiClient');

// Fetch account by PUUID
exports.getChampionRotation = async (req, res) => {



    try {
        // Create the Riot API client with the correct base URL for Account V1
        const riotApiClient = createRiotApiClient('CHAMPION_V3');

        // Fetch the account data by PUUID
        const response = await riotApiClient.get(`/champion-rotations`);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Failed to fetch champion rotation data' });
    }
};





