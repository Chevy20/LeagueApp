//extract createRiotApiClient from services/riotApiClient
const { createRiotApiClient } = require('../services/riotApiClient');

// Fetch account by PUUID
exports.getActiveGamesByPUUID = async (req, res) => {
    const { puuid } = req.params;

    // Check if PUUID is provided
    if (!puuid) {
        return res.status(400).json({ message: 'Puuid is required' });
    }

    try {
        // Create the Riot API client with the correct base URL for Account V1
        const riotApiClient = createRiotApiClient('SPECTATOR_V5');

        // Fetch the account data by PUUID
        const response = await riotApiClient.get(`/active-games/by-summoner/${puuid}`);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Failed to fetch active games by PUUID' });
    }
};

// Fetch account by Riot ID
exports.getFeaturedGames = async (req, res) => {
    try {
        // Create the Riot API client with the correct base URL for Account V1
        const riotApiClient = createRiotApiClient('SPECTATOR_V5');

        // Fetch the account data by PUUID
        const response = await riotApiClient.get(`featured-games`);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Failed to fetch featured games' });
    }
};



