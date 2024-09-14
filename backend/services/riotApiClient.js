const axios = require('axios');

const riotApiClient = axios.create({
    baseURL: 'https://na1.api.riotgames.com',
    headers: {
        'X-Riot-Token': process.env.RIOT_API_KEY
    }
});

module.exports = riotApiClient;