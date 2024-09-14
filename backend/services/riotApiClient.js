const axios = require('axios');
const BASE_URLS = require('../config/riotEndpoints');

const createRiotApiClient = (endpoint) => {
    const baseURL = BASE_URLS[endpoint];
    if (!baseURL) {
        throw new Error('Base URL for endoint ${endpoint} not found');
    }

    return axios.create({
        baseURL,
        headers: {
            'X-Riot-Token': process.env.RIOT_API_KEY,
        },
    });
};


module.exports = { createRiotApiClient };