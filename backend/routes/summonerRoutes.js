const express = require('express');
const router = express.Router();
const summonerController = require('../controllers/summonerController');

//Route to get account by PUUID
router.get('/by-puuid/:puuid', summonerController.getSummonerByPuuid);

//Route to get account by Account ID
router.get('/by-account/:accountID/', summonerController.getSummonerByAccountId);

// Route to get account by Summoner IDI
router.get('/by-summoner/:summonerID/', summonerController.getSummonerBySummonerID);



module.exports = router;
