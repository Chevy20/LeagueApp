const express = require('express');
const router = express.Router();
const spectatorControler = require('../controllers/spectatorControler');

//Route to get active games by PUUID
router.get('/by-puuid/:puuid', spectatorControler.getActiveGamesByPUUID);

//Route to get featured spectator games 
router.get('/featured-games', spectatorControler.getFeaturedGames);



module.exports = router;
