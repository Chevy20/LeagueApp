//extract createRiotApiClient from services/riotApiClient
const { createRiotApiClient } = require('../services/riotApiClient');

// Fetch account by PUUID
exports.getSummonerByPuuid = async (req, res) => {
    const { puuid } = req.params;

    // Check if PUUID is provided
    if (!puuid) {
        return res.status(400).json({ message: 'Puuid is required' });
    }

    try {
        // Create the Riot API client with the correct base URL for Account V1
        const riotApiClient = createRiotApiClient('SUMMONER_V4');

        // Fetch the account data by PUUID
        const response = await riotApiClient.get(`/summoners/by-puuid/${puuid}`);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Failed to fetch summoner by PUUID' });
    }
};

// Fetch account by Riot ID
exports.getSummonerByAccountId = async (req, res) => {
    const { accountID } = req.params;

    // Check if PUUID is provided
    if (!accountID) {
        return res.status(400).json({ message: 'accountID is required' });
    }

    try {
        // Create the Riot API client with the correct base URL for Account V1
        const riotApiClient = createRiotApiClient('SUMMONER_V4');

        // Fetch the account data by PUUID
        const response = await riotApiClient.get(`/summoners/by-account/${accountID}`);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Failed to fetch summoner by accountID' });
    }
};
exports.getSummonerBySummonerID = async (req, res) => {
    const { summonerID } = req.params;

    // Check if PUUID is provided
    if (!summonerID) {
        return res.status(400).json({ message: 'summonerID is required' });
    }

    try {
        // Create the Riot API client with the correct base URL for Account V1
        const riotApiClient = createRiotApiClient('SUMMONER_V4');

        // Fetch the account data by PUUID
        const response = await riotApiClient.get(`/summoners/${summonerID}`);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Failed to fetch summoner by summonerID' });
    }
};



