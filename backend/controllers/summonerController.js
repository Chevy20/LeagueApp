//extract createRiotApiClient from services/riotApiClient
const { createRiotApiClient } = require('../services/riotApiClient');

// Fetch summoner by PUUID
exports.getSummonerByPuuid = async (req, res) => {
    const { puuid } = req.params;

    // Check if PUUID is provided
    if (!puuid) {
        return res.status(400).json({ message: 'Puuid is required' });
    }

    try {
        // Create the Riot API client with the correct base URL for SUMMONER_V4
        const riotApiClient = createRiotApiClient('SUMMONER_V4');

        // Fetch the summoner data by PUUID
        const response = await riotApiClient.get(`/summoners/by-puuid/${puuid}`);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Failed to fetch summoner by PUUID' });
    }
};

// Fetch summoner by Account ID
exports.getSummonerByAccountId = async (req, res) => {
    const { accountID } = req.params;

    // Check if AccountID is provided
    if (!accountID) {
        return res.status(400).json({ message: 'accountID is required' });
    }

    try {
        // Create the Riot API client with the correct base URL for SUMMONER_V4
        const riotApiClient = createRiotApiClient('SUMMONER_V4');

        // Fetch the summoner data by Account ID
        const response = await riotApiClient.get(`/summoners/by-account/${accountID}`);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Failed to fetch summoner by accountID' });
    }
};
// Fetch summoner by Summoner ID
exports.getSummonerBySummonerID = async (req, res) => {
    const { summonerID } = req.params;

    // Check if summoner ID is provided
    if (!summonerID) {
        return res.status(400).json({ message: 'summonerID is required' });
    }

    try {
        // Create the Riot API client with the correct base URL for SUMMONER_V4
        const riotApiClient = createRiotApiClient('SUMMONER_V4');

        // Fetch the summoner data by summoner ID
        const response = await riotApiClient.get(`/summoners/${summonerID}`);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Failed to fetch summoner by summonerID' });
    }
};



