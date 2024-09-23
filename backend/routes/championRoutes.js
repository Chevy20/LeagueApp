const express = require('express');
const router = express.Router();
const championController = require('../controllers/championController');

//Route to get account by PUUID
router.get('/champion-rotations', championController.getChampionRotation);





module.exports = router;
