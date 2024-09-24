//extract createRiotApiClient from services/riotApiClient
const { createRiotApiClient } = require('../services/riotApiClient');

// Fetch challenger leagues by queue type
exports.getChallangerLeaguesByQueue = async (req, res) => {
    const { queue } = req.params;

    // Check if queue is provided
    if (!queue) {
        return res.status(400).json({ message: 'queue is required' });
    }

    //Try api call, error if not
    try {
        // Create the Riot API client with the correct base URL for LEAGUE_V4 
        const riotApiClient = createRiotApiClient('LEAGUE_V4');

        // Fetch the challenger leagues for that queue type
        const response = await riotApiClient.get(`/challengerleagues/by-queue/${queue}`);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: `Failed to fetch challenger leagues for the queue: ${queue} ` });
    }
};

// Fetch challenger leagues by queue type
exports.getGrandmasterLeaguesByQueue = async (req, res) => {
    const { queue } = req.params;

    // Check if queue is provided
    if (!queue) {
        return res.status(400).json({ message: 'queue is required' });
    }

    //Try api call, error if not
    try {
        // Create the Riot API client with the correct base URL for LEAGUE_V4
        const riotApiClient = createRiotApiClient('LEAGUE_V4');

        // Fetch the grandmaster leagues for that queue type
        const response = await riotApiClient.get(`/grandmasterleagues/by-queue/${queue}`);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: `Failed to fetch grandmaster leagues for the queue: ${queue} ` });
    }
};

// Fetch master leagues by queue type
exports.getMasterLeaguesByQueue = async (req, res) => {
    const { queue } = req.params;

    // Check if queue is provided
    if (!queue) {
        return res.status(400).json({ message: 'queue is required' });
    }

    //Try api call, error if not
    try {
        // Create the Riot API client with the correct base URL for LEAGUE_V4
        const riotApiClient = createRiotApiClient('LEAGUE_V4');

        // Fetch the master leagues for that queue type
        const response = await riotApiClient.get(`/masterleagues/by-queue/${queue}`);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: `Failed to fetch master leagues for the queue: ${queue} ` });
    }
};

// Fetch leagues by summoner for all queue types
exports.getLeaguesBySummoner = async (req, res) => {
    const { summonerID } = req.params;

    // Check if summoner is provided
    if (!summonerID) {
        return res.status(400).json({ message: 'summonerID is required' });
    }

    //Try api call, error if not
    try {
        // Create the Riot API client with the correct base URL for LEAGUE_V4
        const riotApiClient = createRiotApiClient('LEAGUE_V4');

        // Fetch the leagues for all queue types for that summoner ID
        const response = await riotApiClient.get(`/entries/by-summoner/${summonerID}`);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: `Failed to fetch leagues for summonerID: ${summonerID}` });
    }

};

// Fetch leagues by queue, tier, and division
exports.getLeaguesByRank = async (req, res) => {
    const { queue } = req.params;
    const { tier } = req.params;
    const { division } = req.params;
    const { page } = req.params;

    // Check if queue is provided
    if (!queue) {
        return res.status(400).json({ message: 'queue is required' });
    }
    // Check if queue is provided
    if (!tier) {
        return res.status(400).json({ message: 'tier is required' });
    }
    // Check if queue is provided
    if (!division) {
        return res.status(400).json({ message: 'division is required' });
    }


    //Try api call, error if not
    try {
        // Create the Riot API client with the correct base URL for LEAGUE_V4
        const riotApiClient = createRiotApiClient('LEAGUE_V4');

        // Fetch the leagues for all queue types for that summoner ID
        const response = await riotApiClient.get(`/entries/${queue}/${tier}/${division}/?${page}`);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: `Failed to fetch leagues for queue: ${queue}, tier: ${tier}, division: ${division}, ` });
    }

};

// Fetch leagues by league ID
exports.getLeaguesByID = async (req, res) => {
    const { leagueID } = req.params;

    // Check if leagueID is provided
    if (!leagueID) {
        return res.status(400).json({ message: 'leagueID is required' });
    }

    //Try api call, error if not
    try {
        // Create the Riot API client with the correct base URL for LEAGUE_V4
        const riotApiClient = createRiotApiClient('LEAGUE_V4');

        // Fetch the league with given id, includes inactive entries
        const response = await riotApiClient.get(`/leagues/${leagueID}`);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: `Failed to fetch league for leagueID: ${leagueID}` });
    }

};











