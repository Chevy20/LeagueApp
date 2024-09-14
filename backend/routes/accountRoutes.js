const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

//Route to get account by PUUID
router.get('/by-puuid/:puuid', accountController.getAccountByPuuid);

//Route to get account by Riot ID
router.get('/by-riot-id/:gameName/:tagLine', accountController.getAccountByRiotId);

//Route to get active player shard by game and puuid
router.get('/active-player-shard/:game/:puuid', accountController.getActivePlayerShard);


module.exports = router;
