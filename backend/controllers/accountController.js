//extract createRiotApiClient from services/riotApiClient
const { createRiotApiClient } = require('../services/riotApiClient');

// Fetch account by PUUID
exports.getAccountByPuuid = async (req, res) => {
    const { puuid } = req.params;

    // Check if PUUID is provided
    if (!puuid) {
        return res.status(400).json({ message: 'Puuid is required' });
    }

    //Try api call, error if not
    try {
        // Create the Riot API client with the correct base URL for Account V1
        const riotApiClient = createRiotApiClient('ACCOUNT_V1');

        // Fetch the account data by PUUID
        const response = await riotApiClient.get(`/accounts/by-puuid/${puuid}`);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Failed to fetch account by PUUID' });
    }
};

// Fetch account by Riot ID
exports.getAccountByRiotId = async (req, res) => {
    const { gameName, tagLine } = req.params;

    // Check if Game name and tag line is provided
    if (!gameName) {
        return res.status(400).json({ message: 'gameName is required' });
    }
    if (!tagLine) {
        return res.status(400).json({ message: 'tagLine is required' });
    }

    try {
        // Create the Riot API client with the correct base URL for Account V1
        const riotApiClient = createRiotApiClient('ACCOUNT_V1');

        // Fetch the account data by Riot ID
        const response = await riotApiClient.get(`/accounts/by-riot-id/${gameName}/${tagLine}`);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Failed to fetch account by RiotID' });
    }
};



