const express = require('express');
const router = express.Router();
const championController = require('../controllers/championController');

//Route to get champ rotations
router.get('/champion-rotations', championController.getChampionRotation);

module.exports = router;
