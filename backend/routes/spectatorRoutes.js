const express = require('express');
const router = express.Router();
const spectatorControler = require('../controllers/spectatorControler');

//Route to get account by PUUID
router.get('/by-puuid/:puuid', spectatorControler.getActiveGamesByPUUID);

//Route to get account by Riot ID
router.get('/featured-games', spectatorControler.getFeaturedGames);



module.exports = router;
